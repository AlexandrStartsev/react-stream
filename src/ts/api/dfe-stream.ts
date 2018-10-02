import { IArfSet, ModelProxy, Listener, Watcher, ListenerEvent } from "./proxy";

export type Diff<T extends string | number | symbol, U extends string | number | symbol> = ({[P in T]: P } & {[P in U]: never } & { [x: string]: never })[T];  
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

function errorwatch(node: LogicNode, target: 'peers' | string | LogicNode, reducer: Function) {
    let error = '';
    let myModel = node.model;
    let erroringChildren: Set<LogicNode> = new ModelProxy(target === 'peers' ? node.parent : target, null, null, true, node.runtime.evListener).forWatcher(node).get('erroringChildren');
    if(target === 'peers') {
        erroringChildren.forEach(
            node => myModel.hasChild(node.model) && (error = reducer ? reducer(error, node.lastError) : node.lastError)
        )
    } else {
        erroringChildren.forEach(
            node => error = reducer(error, node.lastError)
        )
    }
    return error;
}
    
export class ContextModel<M> implements AsyncContextBase {
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
                if(field.errorwatch) {
                    let { target = node, accept = (a: string, b: string) => b } = typeof field.errorwatch === 'object' ? field.errorwatch : {};
                    error = errorwatch(node, target, accept);
                } else {
                    let validationResult = '';
                    try {
                        validationResult = (lastError || doValidation(lastNotifications, field.vstrategy)) && field.val && field.val(data, node.model, this, lastNotifications) || '';
                    } catch(e) {
                        validationResult = e.message || 'exception';
                    }
                    error = typeof validationResult === 'string' ? validationResult : '';
                }
            }
            node.accept(data, error);
        } else {
            if(error !== undefined) {
                node.accept(node.lastData, error);
            }
        }
    }
    reject() {
        this.$node.notify({action: 'notify'});
    }                
    destroy() {
        this.$await = null;
        this.$model.$listener.undepend();
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
    errorwatch?: boolean|{target: string|LogicNode, accept: (prev?: string, next?: string) => string }
    vstrategy?: ValidationStrategy
}

type ArrayItem<A> = A extends Array<infer I> ? I : never
export class Field<P extends IArfSet, D=P> {
    get: (proxy: P, context: ContextModel<P>, events?: ListenerEvent[]) => D
    val?: (value: any, proxy: IArfSet, context: ContextModel<P>, events: ListenerEvent[]) => void|string
    errorwatch: boolean|{target: "peers"|string|LogicNode, accept: (prev: string, next: string) => string }
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
    terminated?: boolean
    lastData?: any
    lastError?: string
    source?: PipeNode
    consumer?: PipeNode // PipeNode[]
    accept(data: any, error?: string): any
    terminate(): any
    //follow(target: PipeNode): any
}

export class LogicNode implements PipeNode, Watcher {
    key: string
    parent: LogicNode
    lastData: any
    lastError: any   
    field: Field<any, any>
    terminated: boolean
    //source: PipeNode TODO: chain
    consumer: PipeNode // TODO: multiple consumers
    runtime: LogicProcessor
    notifications?: ListenerEvent[] = []
    lastNotifications: ListenerEvent[]
    children:  Map<number, Map<Field<any, any>, LogicNode>> = new Map()
    erroringChildren: Set<LogicNode> = new Set()
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
    accept(data: any, error?: string) {
        if(!this.terminated) {
            let childrenFields = this.field.children;
            if(data !== undefined) {
                // todo: evaliate lastData vs data and maybe skip rendering/child reconciliation 
                if(!this.field.errorwatch) {
                    error ? this.runtime.notifyErroring(this) : this.runtime.clearError(this);
                }
                if(childrenFields.length) {
                    let arr = data && typeof data === 'object' ? ( Array.isArray(data) ? data : [data] ) : []
                    // ??
                    //arr.map(d => d instanceof JsonProxy ? d : new JsonProxy(d));
                    this.runtime.reconcileChildren(this, arr, this.lastNotifications);
                }
                this.lastData = data;
                this.lastError = error;
                this.consumer && this.consumer.accept(data, error);
                //this.shouldRender = true;
                this.runtime.scheduleWork(this);
            } else {
                error && (this.lastError = error) && this.runtime.notifyErroring(this);
            }
        }
    }
    terminate() {
        //this.control.destroy();
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
            this.consumer && this.consumer.terminate();
            this.consumer = null;
        }
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

export interface AsyncContextBase {
    result<T>(data: T, error?: string): void,
    await<T>(promise: Promise<T>, onSuccess?: (data: T, context: this) => T, onReject?: (reason: any, context: this) => void): void,
    reject(): void,
    lastError(): string
}
//###############################################################################################################################

export class LogicProcessor<M={}> {
    // TODO: this is technically leaking memory (watchers are not removed when runtime shuts down when this is static).
    // I've made it non-static, so it gets disposed of every time runtime is shut down. But it s better to figure out why and fix.
    evListener = new Listener({});
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
        this.clearError(node);
        node.terminated = true;
        node.children.forEach(fieldMap => fieldMap.forEach( node => this.evictNode(node)));
        node.terminate();
    }        
    clearError(node: LogicNode) {
        if( node.lastError ) {
            delete node.lastError;
            for( let cur = node.parent; cur && cur.erroringChildren.delete(node); cur = cur.parent ) {
                this.evListener.notify(cur.key, 'erroringChildren');
            }
        }
    }
    notifyErroring(node: LogicNode) {
        for( let cur = node.parent; cur && !cur.erroringChildren.has(node); cur = cur.parent ) {
            cur.erroringChildren.add(node), this.evListener.notify(cur.key, 'erroringChildren', 'validate'); 
        }
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