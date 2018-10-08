import { IArfSet, ModelProxy, Subscription, Subscriber, ListenerEvent } from "./proxy";

export type Diff<T extends string | number | symbol, U extends string | number | symbol> = ({[P in T]: P } & {[P in U]: never } & { [x: string]: never })[T];  
export type Pick<T, K extends keyof T> = {[P in K]: T[P]}
export type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;


export type ValidationStrategy = "always"|"notified"|"validate"

function doValidation(events: ListenerEvent[], vstrategy: ValidationStrategy) {
    vstrategy = vstrategy === undefined ? "validate" : vstrategy;
    if(vstrategy === undefined || vstrategy === "validate" ){
        return events.some(e => "validate" === e.action)
    }
    return vstrategy === "always" || vstrategy === "notified" && events[0].action != "init"
}

export class LogicNodeContext {
    node: LogicNode
    lastData: any
    lastError: any
    $await: Promise<any>

    constructor(node: LogicNode) {
        this.node = node;
        this.$await = null;
    }
    get unbound() {
        return this.node.model.withSubscription();
    }
    result(data: any, error?: string) {
        let node = this.node;
        if(data !== undefined) {
            this.$await = null;
            if(error === undefined) {
                let {lastNotifications, field} = node, validationResult: any;
                if(field.val) {
                    try {
                        validationResult = (this.lastError || doValidation(lastNotifications, field.vstrategy)) && field.val(data, node.model, this);
                    } catch(e) {
                        validationResult = e.message || "Exception";
                    }
                    this.lastError = typeof validationResult === "string" ? validationResult : "";
                } else {
                    this.lastError = "";
                }
            } else {
                this.lastError = error;
            }
            node.accept(this.lastData = data, this.lastError, null);
        } else {
            if(error !== undefined) {
                this.$await = null;
                node.accept(this.lastData, this.lastError = error, null);
            }
        }
    }
    reject() {
        this.$await = null;
        this.node.notify({action: "notify"});
    }                
    destroy() {
        this.$await = null;
    }
    await<T>(promise: Promise<T>, onSuccess?: (data: T, context: this) => T, onReject?: (reason: any, context: this) => void): void {
        this.$await = promise.then(
            v => this.$await && (onSuccess ? onSuccess(v, this) : this.result(v)),
            v => this.$await && (onReject ? onReject(v, this) : this.result(undefined, v))
        );
    }
    awaitAndClearFlag(promise: Promise<any>) {
        this.$await = promise.then(() => this.$await = null, () => this.$await = null);
    }
}

interface FieldProps<P, C> {
    get?: (proxy: P, context: LogicNodeContext) => C|Promise<C>
    val?: (value: C, proxy?: P, context?: LogicNodeContext) => void|string
    vstrategy?: ValidationStrategy
}

type ArrayItem<A> = A extends Array<infer I> ? I : A
export class Field<P extends IArfSet, C=P> {
    get: (proxy: P, context: LogicNodeContext) => C|Promise<C>
    val?: (value: C, proxy: IArfSet, context: LogicNodeContext) => void|string
    vstrategy: ValidationStrategy

    children: Field<ArrayItem<C>, any>[] = []
    constructor(props: FieldProps<P, C>) {
        this.children = [];
        this.get = (model: P) => model as any;
        Object.assign( this, props );
    }
    with(...args: Field<ArrayItem<C>, any>[]): this {
        args.forEach(field => this.children.indexOf(field) === -1 && this.children.push(field));
        return this;
    }
}

export interface PipeNode {
    accept(data: any, error: string, producer: PipeNode): any
    subscribe(consumer: PipeNode): void
    unsubscribe(consumer: PipeNode): void
    unsubscribeFrom(producer: PipeNode): void
}

export class LogicNode implements PipeNode, Subscriber {
    parent: LogicNode
    field: Field<any, any>
    terminated: boolean
    //source: PipeNode TODO: generic chain instead of "children" map ?
    consumers: PipeNode[] = []
    runtime: LogicProcessor
    notifications?: ListenerEvent[] = []
    lastNotifications: ListenerEvent[]
    children:  Map<number, Map<Field<any, any>, LogicNode>> = new Map()
    model: ModelProxy<any>
    context: LogicNodeContext
    subscription: Subscription

    constructor(parent: LogicNode, field: Field<any, any>, proxy: ModelProxy<any>, runtime: LogicProcessor) {
        this.parent = parent;
        this.runtime = runtime;
        this.field = field;
        this.subscription = new Subscription(proxy.$subscription, this);
        this.model = proxy.withSubscription(this.subscription);
        this.context = new LogicNodeContext(this);
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
                    let arr = data && typeof data === "object" ? ( Array.isArray(data) ? data : [data] ) : []
                    this.reconcileChildren(arr, this.lastNotifications);
                }
                this.consumers.forEach(c => c.accept(data, error, this));
                this.runtime.scheduleWork(this);
            }
        }
    }
    terminate() {
        if(!this.terminated) {
            this.terminated = true;
            this.context.destroy();
            this.consumers.forEach(c => c.unsubscribeFrom(this));
            this.children.forEach(map => map.forEach( node => node.terminate() ));
            this.subscription.clear();
        }
    }
    subscribe(consumer: PipeNode) {
        if(!this.terminated && this.consumers.indexOf(consumer) == -1) {
            this.consumers.push(consumer);
            this.context.lastData !== undefined && consumer.accept(this.context.lastData, this.context.lastError, this);
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

export class LogicProcessor<M=IArfSet> {
    scheduledWork: any
    rootModel: M
    rootNode: LogicNode
    private nodes: Map<number, Map<Field<any, any>, LogicNode>> = new Map()
    constructor(rootProxy: ModelProxy<M>, rootField: Field<M, any>, validate?: boolean) {
        this.addNode(this.rootNode = new LogicNode(null, rootField, rootProxy, this));
        this.rootNode.notify({ action: validate ? "validate" : "init" })
        this.rootModel = this.rootNode.model as any;
        this.processInterceptors();
    }
    private forEachImpl(cur: LogicNode, func: (node?: LogicNode, thisArg?: LogicProcessor) => any) {
        func(cur, this);
        cur.children.forEach(map => map.forEach(node => this.forEachImpl(node, func)));
    }
    forEachNode(func: (node?: LogicNode, thisArg?: LogicProcessor) => any, fast?: boolean) {
        this.rootNode && fast ? this.nodes.forEach(map => map.forEach(node => func(node, this))) : this.forEachImpl(this.rootNode, func);
        return this;
    }
    scheduleWork(node: LogicNode) {
        this.scheduledWork || (this.scheduledWork = setImmediate(this.processInterceptors.bind(this)));
    }
    destroy() {
        this.scheduledWork && clearImmediate(this.scheduledWork);
        this.scheduledWork=null;
        if(this.rootNode) {
            this.rootNode.terminate();
            this.rootNode = null;
            this.nodes = new Map();
        }
    }
    enforceValidation() {
        this.forEachNode(node => node.notify({action: "validate"}));
        return this.waitForPipeLine();
    }      
    waitForPipeLine() {
        return new Promise<LogicProcessor>((resolve, reject) => {
            try {
                const pending = this.processInterceptors();
                this.scheduledWork || pending.length > 0 ? 
                    Promise.all(pending).then(() => this.waitForPipeLine().then(resolve, reject), reject) : resolve(this);
                /*let pending: Promise<any>[] = [], p: Promise<any>;
                this.processInterceptors();
                this.scheduledWork || this.forEach(node => (p = node.context.$await) && pending.push(p), true) && pending.length > 0 ? 
                    Promise.all(pending).then(() => this.waitForPipeLine().then(resolve, reject), reject) : resolve(this);*/
            } catch(e) {
                reject(e);
            }
        });
    }
    addNode(node: LogicNode) {
        let key = node.model.key, map: Map<Field<any, any>, LogicNode>;
        (map = this.nodes.get(key)) || this.nodes.set(key, map = new Map());
        map.set(node.field, node);
    }
    findNode<T, D>(modelKey: number, field: Field<T, D>) {
        const map = this.nodes.get(modelKey);
        return map ? map.get(field) : undefined;
    }
    processInterceptors() {
        let pending: Promise<any>[] = [], p: Promise<any>;
        if(this.scheduledWork) {
            this.scheduledWork = null;
            this.forEachNode(node => (this.logic(node), p = node.context.$await, p && pending.push(p)));
            this.nodes.forEach((map, key) => {
                map.forEach((node, field) => node.terminated && map.delete(field))
                map.size || this.nodes.delete(key);
            });
        }
        return pending;
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
                console.error(node.field + '\n' + e.message + '\n' + e.stack); 
            }
        }
    }
}
