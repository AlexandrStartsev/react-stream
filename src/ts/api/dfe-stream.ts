import { IArfSet, ModelProxy, Listener, Watcher, ListenerEvent } from "./proxy";

export type Diff<T extends string | number | symbol, U extends string | number | symbol> = ({[P in T]: P } & {[P in U]: never } & { [x: string]: never })[T];  
export type Pick<T, K extends keyof T> = {[P in K]: T[P]}
export type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;


export enum ValidationStrategy {
    None,
    Always,
    Followup,
    Notified,
    Validate
}

function doValidation(events: ListenerEvent[], vstrategy: ValidationStrategy) {
    vstrategy = vstrategy === undefined ? ValidationStrategy.Validate : vstrategy;
    if(vstrategy === undefined || vstrategy === ValidationStrategy.Validate ){
        return events.some(e => 'validate' === e.action)
    }
    return vstrategy === ValidationStrategy.Always || vstrategy === ValidationStrategy.Notified && events[0].action != 'init'
}

export class ContextModel<M=IArfSet> {
    $runtime: LogicProcessor
    $node: LogicNode
    $model: ModelProxy<M>
    $unbound: ModelProxy<M>
    $await: Promise<any>

    constructor(model: ModelProxy<M>, unbound: ModelProxy<M>, runtime: LogicProcessor, node: LogicNode) {
        this.$runtime = runtime;
        this.$node = node;
        this.$model = model;
        this.$unbound = unbound;
        this.$await = null;
    }
    // TODO: all this should be moved to logic node. 
    result(data: any, error?: string) {
        let node = this.$node;
        if(data !== undefined) {
            this.$await = null;
            if(error === undefined) {
                let {lastNotifications, field, lastError} = node;
                let validationResult = '';
                try {
                    validationResult = (lastError || doValidation(lastNotifications, field.vstrategy)) && field.val && field.val(data, node.model, this) || '';
                } catch(e) {
                    validationResult = e.message || 'exception';
                }
                error = typeof validationResult === 'string' ? validationResult : '';
            }
            node.accept(data, error, null);
        } else {
            if(error !== undefined) {
                this.$await = null;
                node.accept(node.lastData, error, null);
            }
        }
    }
    reject() {
        this.$await = null;
        this.$node.notify({action: "notify"});
    }                
    destroy() {
        this.$await = null;
        this.$model.$listener.undepend();
    }
    await<T>(promise: Promise<T>, onSuccess?: (data: T, context: this) => T, onReject?: (reason: any, context: this) => void): void {
        this.$await = promise.then(
            v => onSuccess ? onSuccess(v, this) : this.result(v),
            v => onReject ? onReject(v, this) : this.result(undefined, v)
        );
    }
    awaitNoResolve(promise: Promise<any>) {
        this.$await = promise.then(() => this.$await = null, () => this.$await = null);
    }
    lastError() {
        return this.$node.lastError;
    }    
}


interface FieldProps<P, C> {
    get?: (proxy: P, context: ContextModel<P>) => C|Promise<C>
    val?: (value: C, proxy?: P, context?: ContextModel<P>) => void|string
    vstrategy?: ValidationStrategy
}

type ArrayItem<A> = A extends Array<infer I> ? I : never
export class Field<P extends IArfSet, D=P> {
    get: (proxy: P, context: ContextModel<P>) => D|Promise<D>
    val?: (value: any, proxy: IArfSet, context: ContextModel<P>) => void|string
    vstrategy: ValidationStrategy

    children: Field<ArrayItem<D>, any>[] = []
    constructor(props: FieldProps<P, D>) {
        this.children = [];
        this.get = (model: P) => model as any;
        Object.assign( this, props );
    }
    with(...args: Field<ArrayItem<D>, any>[]): this {
        this.children = args.reduce((out, cur) => out.concat(cur), []).filter(o => o instanceof Field);
        return this;
    }
}

export interface PipeNode {
    accept(data: any, error: string, producer: PipeNode): any
    subscribe(consumer: PipeNode): void
    unsubscribe(consumer: PipeNode): void
    unsubscribeFrom(producer: PipeNode): void
}

export class LogicNode implements PipeNode, Watcher {
    key: string
    parent: LogicNode
    lastData: any
    lastError: any   
    field: Field<any, any>
    terminated: boolean
    //source: PipeNode TODO: generic chain instead of "children" map ?
    consumers: PipeNode[] = []
    runtime: LogicProcessor
    notifications?: ListenerEvent[] = []
    lastNotifications: ListenerEvent[]
    children:  Map<number, Map<Field<any, any>, LogicNode>> = new Map()
    model: ModelProxy<any>
    context: ContextModel<any>

    constructor(parent: LogicNode, field: Field<any, any>, proxy: ModelProxy<any>, runtime: LogicProcessor) {
        let unbound = proxy.forWatcher();
        this.parent = parent;
        this.runtime = runtime;
        this.key = "field:" + unbound.key;//field.name + '-' + unbound.key;
        this.field = field;
        this.model = unbound.forWatcher(this);
        this.context = new ContextModel(this.model, unbound, runtime, this);
    }
    notify(action?: ListenerEvent|ListenerEvent[]) {
        if(!this.terminated) {
            Array.isArray(action) ? this.notifications.splice(this.notifications.length, 0, ...action) : this.notifications.push(action || { action : "self" });
            this.runtime.scheduleWork(this);
        }
        return this;
    }
    reconcileChildren(rowProxies: ModelProxy<any>[], events: ListenerEvent[]) {
        let childFields = this.field.children;
        if( this.children.size || childFields.length ) {
            let rows: Map<number, ModelProxy<any>> = new Map();
            let rkeys: Set<number> = new Set();
            let m: Map<Field<any, any>, LogicNode>, proxy: ModelProxy<any>;
            this.children.forEach( (_, key) => rkeys.add(key) );
            rowProxies.forEach(r => { rows.set(r.key, r); rkeys.add(r.key)});
            rkeys.forEach( key => { 
                proxy = rows.get(key); 
                if(m = this.children.get(key)) {
                    proxy || (childFields.forEach(k => m.get(k).terminate()), this.children.delete(key));
                } else {
                    this.children.set(key, m = new Map()); 
                    childFields.forEach(field => {
                        let child = new LogicNode(this, field, proxy, this.runtime);
                        this.runtime.addNode(child);
                        child.notify(events);
                        m.set(field, child);
                    });
                }
            });
        }
    }
    accept(data: any, error: string, producer: PipeNode) {
        if(!this.terminated) {
            let childrenFields = this.field.children;
            if(data !== undefined) {
                // todo: evaliate lastData vs data and maybe skip rendering/child reconciliation 
                if(childrenFields.length) {
                    let arr = data && typeof data === 'object' ? ( Array.isArray(data) ? data : [data] ) : []
                    this.reconcileChildren(arr, this.lastNotifications);
                }
                this.lastData = data;
                this.lastError = error;
                this.consumers.forEach(c => c.accept(data, error, this));
                this.runtime.scheduleWork(this);
            } else {
                this.lastError = error;
            }
        }
    }
    terminate() {
        if(!this.terminated) {
            this.terminated = true;
            this.context.destroy();
            this.consumers.forEach(c => c.unsubscribeFrom(this));
            this.children.forEach(map => map.forEach( node => node.terminate() ));
        }
    }
    subscribe(consumer: PipeNode) {
        if(!this.terminated && this.consumers.indexOf(consumer) == -1) {
            this.consumers.push(consumer);
            this.lastData !== undefined && consumer.accept(this.lastData, this.lastError, this);
        }
    }
    unsubscribe(consumer: PipeNode) {
        // Important, otherwise while terminating not all consumers will be visited to unsubscribe
        this.terminated || this.consumers.splice(this.consumers.indexOf(consumer), 1);
    }
    unsubscribeFrom(producer: PipeNode) {
        // no-op for now 
    }
}

//###############################################################################################################################

export function testChoice(a: any, b: any): boolean {
    return a == b || typeof a === 'object' && typeof b === 'object' && Object.keys(a).every(i => a[i] == b[i]);
}

export let arfDatePattern = /^(18|19|20)((\\d\\d(((0[1-9]|1[012])(0[1-9]|1[0-9]|2[0-8]))|((0[13578]|1[02])(29|30|31))|((0[4,6,9]|11)(29|30))))|(([02468][048]|[13579][26])0229))$/;

export function required<T>(value: string|number|ChoiceInfo<T>, pattern?: RegExp|string, message?: string): string {
    if( !value || value.toString().replace(/ /g, '') === '' ) {
        return message || 'Required';
    } else {
        if( typeof value === 'object' && Array.isArray(value.items) ) {
            let v = value.value;
            if( !v || v.toString().replace(/ /g, '') === '' ) {
                return message || 'Required';
            }
            return value.items.some( item => testChoice(v, item.value !== undefined ? item.value : item) ) ? '' : message || 'Required';
        }
        if( pattern === 'date' && !value.toString().match(arfDatePattern) || pattern instanceof RegExp && ! value.toString().match(pattern) ) {
            return message || 'Invalid format';
        }
        return '';
    }
}

export interface ValueDescription<T> { value: T, description: string }
export interface ChoiceInfo<T> {
    value: T,
    items: ValueDescription<T>[],
}
//###############################################################################################################################

export class LogicProcessor<M={}> {
    nodes: LogicNode[]
    scheduledWork: any
    rootModel: M
    constructor(rootProxy: ModelProxy<M>, rootField: Field<M, any>, validate: boolean) {
        let rootNode = new LogicNode(null, rootField, rootProxy, this);
        rootNode.notify({ action: validate ? "validate" : "init" })
        this.rootModel = rootNode.model as any;
        this.nodes = [rootNode];
        this.processInterceptors();
    }
    scheduleWork(node: LogicNode) {
        this.scheduledWork || (this.scheduledWork = setImmediate(this.processInterceptors.bind(this)));
    }
    destroy() {
        this.scheduledWork && clearImmediate(this.scheduledWork);
        this.scheduledWork=null;
        if(this.nodes.length) {
            this.nodes[0].terminate();
            this.nodes = []
        }
    }
    enforceValidation() {
        this.nodes.forEach(node => node.notify({action: 'validate'}));
        return this.waitForPipeLine();
    }      
    waitForPipeLine() {
        return new Promise<LogicProcessor>((resolve, reject) => {
            let pending:any[] = [];
            try {
                this.processInterceptors();
                this.scheduledWork || (pending = this.nodes.map(n => n.context.$await).filter(a => !!a)).length ? 
                    Promise.all(pending).then(() => this.waitForPipeLine().then(resolve, reject), reject) : resolve(this);
            } catch(e) {
                reject(e);
            }
        });
    }
    processInterceptors() {
        if(this.scheduledWork) {
            this.scheduledWork = null;
            for(let i = 0; i < this.nodes.length; i++) {
                this.logic(this.nodes[i]);
            }
            let cur = 0;
            this.nodes.forEach( node => node.terminated || (this.nodes[cur++] = node) );
            this.nodes.splice(cur);
        }
    }
    addNode(node: LogicNode) {
        this.nodes.push(node);
    }
    logic(node: LogicNode) {
        if(node.notifications.length && !node.terminated) {
            node.lastNotifications = node.notifications;
            node.notifications = [];
            let {context, field, model} = node;
            try {
                const rez = field.get(model, context);
                rez instanceof Promise ? context.await(rez) : context.result(rez);
            } catch(e) {
                context.result(undefined, e.message);
                //console.error(node.field + '\n' + e.message + '\n' + e.stack); 
            }
        }
    }
    findNodes<T, D>(field: Field<T, D>, modelKey: number|string) {
        return this.nodes.filter( node => node.field === field && node.model.key === modelKey );
    }
}
