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
    result(data: any, error?: string) {
        let node = this.$node;
        if(data !== undefined) {
            if(error === undefined) {
                let {lastNotifications, field, lastError} = node;
                let validationResult = '';
                try {
                    validationResult = (lastError || doValidation(lastNotifications, field.vstrategy)) && field.val && field.val(data, node.model, this, lastNotifications) || '';
                } catch(e) {
                    validationResult = e.message || 'exception';
                }
                error = typeof validationResult === 'string' ? validationResult : '';
            }
            node.accept(data, error, null);
        } else {
            if(error !== undefined) {
                node.accept(node.lastData, error, null);
            }
        }
    }
    reject() {
        this.$node.notify({action: 'notify'});
    }                
    destroy() {
        this.$await = null;
        this.$model.$$proxy_internal.listener.undepend();
    }
    await<T>(promise: Promise<T>, onSuccess?: (data: T, context: this) => T, onReject?: (reason: any, context: this) => void): void {
        this.$await = promise.then( a => (this.$await = null, onSuccess && onSuccess(a, this)), b => (this.$await = null, onReject && onReject(b, this)) );
    }
    lastError() {
        return this.$node.lastError;
    }    
}


interface FieldProps<P, C> {
    get?: (proxy: P, context: ContextModel<P>, events?: ListenerEvent[]) => C
    val?: (value: C, proxy?: P, context?: ContextModel<P>, events?: ListenerEvent[]) => void|string
    vstrategy?: ValidationStrategy
}

type ArrayItem<A> = A extends Array<infer I> ? I : never
export class Field<P extends IArfSet, D=P> {
    get: (proxy: P, context: ContextModel<P>, events?: ListenerEvent[]) => D
    val?: (value: any, proxy: IArfSet, context: ContextModel<P>, events: ListenerEvent[]) => void|string
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
    readonly terminated?: boolean
    accept(data: any, error: string, producer: PipeNode): any
    subscribe(consumer: PipeNode): void
    terminate(): void
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
    //source: PipeNode TODO: chain
    consumers: PipeNode[] = [] // TODO: multiple consumers
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
            Array.isArray(action) ? this.notifications.splice(this.notifications.length, 0, ...action) : this.notifications.push(action || { action : 'self' });
            this.runtime.scheduleWork(this);
        }
        return this;
    }
    accept(data: any, error: string, producer: PipeNode) {
        if(!this.terminated) {
            let childrenFields = this.field.children;
            if(data !== undefined) {
                // todo: evaliate lastData vs data and maybe skip rendering/child reconciliation 
                if(childrenFields.length) {
                    let arr = data && typeof data === 'object' ? ( Array.isArray(data) ? data : [data] ) : []
                    // ??
                    //arr.map(d => d instanceof JsonProxy ? d : new JsonProxy(d));
                    this.runtime.reconcileChildren(this, arr, this.lastNotifications);
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
            this.context.destroy();
            if(this.parent) {
                let fieldMap = this.parent.children.get(this.model.key);
                if(fieldMap) {
                    fieldMap.delete(this.field);
                    fieldMap.size || this.parent.children.delete(this.model.key);
                }
                this.parent = null;
            }
            this.terminated = true;
            this.consumers.forEach(c => c.unsubscribeFrom(this));
        }
    }
    subscribe(consumer: PipeNode) {
        if(!this.terminated && this.consumers.indexOf(consumer) == -1) {
            this.consumers.push(consumer);
            this.lastData !== undefined && consumer.accept(this.lastData, this.lastError, this);
        }
    }
    unsubscribe(consumer: PipeNode) {
        this.consumers.splice(this.consumers.indexOf(consumer), 1);
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
    constructor(rootProxy: ModelProxy<M>, rootField: Field<any, any>, validate: boolean) {
        this.nodes = [];
        this.scheduledWork = null;
        this.addNode( null, rootProxy, rootField, [{ action: validate ? "validate" : "init" }] );
        this.rootModel = this.nodes[0].model as any;
        this.processInterceptors();
    }
    scheduleWork(node: LogicNode) {
        this.scheduledWork || (this.scheduledWork = (typeof setImmediate === "function" ? setImmediate : setTimeout)(this.processInterceptors.bind(this)));
    }
    destroy() { 
        this.scheduledWork && (typeof clearImmediate === "function" ? clearImmediate : clearInterval)(this.scheduledWork);
        this.scheduledWork=null;
        if(this.nodes.length) {
            let root = this.nodes[0];
            this.evictNode(root);
            this.nodes = []
        }
    }
    enforceValidation(readyCb?: (rejectReason?: any) => void) {
        this.nodes.forEach(node => node.notify({action: 'validate'}));
        readyCb && this.waitForPipeLine(readyCb);
    }      
    waitForPipeLine(readyCb: (rejectReason?: any) => void) {
        let pending:any[] = [];
        try {
            this.processInterceptors();
            this.scheduledWork || (pending = this.nodes.map(n => n.context.$await).filter(a => !!a)).length ? 
                Promise.all(pending).then(this.waitForPipeLine.bind(this, readyCb), readyCb) : readyCb();
        } catch(e) {
            readyCb(e);
        }
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
    addNode(parent: LogicNode, proxy: ModelProxy<any>, field: Field<any, any>, initAction: ListenerEvent[]) {
        let node = new LogicNode(parent, field, proxy, this);
        node.notify(initAction);
        this.nodes.push(node);
        return node;
    }
    evictNode(node: LogicNode) {
        delete node.lastError;
        node.children.forEach(fieldMap => fieldMap.forEach( node => this.evictNode(node)));
        node.terminate();
    }
    reconcileChildren(parent: LogicNode, rowProxies: ModelProxy<any>[], events: ListenerEvent[]) {
        let childFields = parent.field.children;
        let lastChildren = parent.children;
        if( lastChildren.size || childFields.length ) {
            let rows: Map<number, ModelProxy<any>> = new Map();
            let rkeys: Set<number> = new Set();
            let m: Map<Field<any, any>, LogicNode>, present: ModelProxy<any>;
            lastChildren.forEach( (_, k) => rkeys.add(k) );
            rowProxies.forEach(r => { rows.set(r.key, r); rkeys.add(r.key)});
            rkeys.forEach( r => { 
                present = rows.get(r); 
                if(m = lastChildren.get(r)) {
                    present || (childFields.forEach(k => this.evictNode(m.get(k))), lastChildren.delete(r));
                } else {
                    lastChildren.set(r, m = new Map()); 
                    childFields.forEach(k => m.set(k, this.addNode(parent, present, k, events)));
                }
            });
        }
    }
    logic(node: LogicNode) {
        if(node.notifications.length && !node.terminated) {
            node.lastNotifications = node.notifications;
            node.notifications = [];
            let {context, field, model} = node;
            try {
                context.result(field.get(model, context, node.lastNotifications));
            } catch(e) {
                context.result(undefined, e.message);
                console.error(node.field + '\n' + e.message + '\n' + e.stack); 
            }
        }
    }
    findNodes<T, D>(field: Field<T, D>, modelKey: number|string) {
        return this.nodes.filter( node => node.field === field && node.model.key === modelKey );
    }
}//const { Provider: LogicContextProvider, Consumer: LogicContextConsumer} = React.createContext({} as LogicProcessor);
