import * as React from "react";
import {IArfSet, ModelProxy, Subscriber, ListenerEvent, Subscription} from "./proxy";
import {Field, PipeNode, LogicNode, LogicNodeContext, ValidationStrategy, Omit} from "./dfe-stream";

function shallowCompare(obj1: any, obj2: any) {
    if( obj1===obj2 ) return true;
    if(typeof obj1 !== typeof obj2 || typeof obj1 !== 'object' || !obj1 !== !obj2) return false;
    let names = Object.getOwnPropertyNames(obj1);
    if( names.length != Object.getOwnPropertyNames(obj2).length ) return false;
    return names.filter(n => obj1[n] !== obj2[n]).length === 0;
}

class Proxified<M extends IArfSet, P extends {model: M}, S={}, SS=any, X={}> extends React.Component<P, S, SS> implements Subscriber {
    type: ((new (props: P) => React.Component<P, S, SS>) | ((props: P) => any))&X
    model: M & ModelProxy<M>
    subscription: Subscription
    constructor(props: P) {
        super(props);
        let px = props.model instanceof ModelProxy ? props.model : new ModelProxy<M>(props.model);
        this.subscription = new Subscription(px, this)
        this.model = px.withSubscription(this.subscription) as M & ModelProxy<M>;
    }

    componentWillUnmount() {
        this.subscription.terminate();
    }

    shouldComponentUpdate(nextProps: Readonly<P & {model: M}>, nextState: Readonly<S>): boolean {
        let names = Object.getOwnPropertyNames(nextProps);
        if( !shallowCompare(this.state, nextState) || names.length !== Object.getOwnPropertyNames(this.props).length ) {
            return true;
        }
        if(nextProps.model instanceof ModelProxy) {
            let pp = this.props as {[index: string]: any}, np = nextProps as {[index: string]: any};
            return this.model.key !== nextProps.model.key || names.some(key => key !== 'model' && key !== 'key' && pp[key] !== np[key]);
        }
        return !shallowCompare(this.props, nextProps);
    }

    render() {
        let Type = this.type; 
        // forWatcher called to trigger props difference for child.
        // Non-proxified components unaware of proxy nature should just recalculate. 
        // Aware components will receive "notify" when applicable, thus eliminating difference
        return React.createElement(this.type, Object.assign({}, this.props, {model: this.model}));
    }
    notify(action?: ListenerEvent) {
        this.model && this.forceUpdate();
    }
}

function bfsNodeSearch<M extends IArfSet>(field: Field<M>, model: ModelProxy<M>): PipeNode {
    // TODO: elaborate...
    let source = model.$subscription.subscriber as any as PipeNode;
    while(source instanceof Connected) {
        source = source.source;
    }
    if(!(source instanceof LogicNode)) {
        throw "Oops";
    }
    let scan = [source], key = model.key;
    while(scan.length) {
        let next: LogicNode[] = [];
        for(let i = 0; i < scan.length; i++) {
            let cur = scan[i];
            if(cur.field === field ) {
                return cur;
            }
            let m = cur.children.get(key), n;
            if(m && (n = m.get(field))) {
                return n;
            }
            cur.children.forEach(m => m.forEach(n => next.push(n)));
        }
        scan = next;
    }
    return null;
}

export const Proxify = <M extends IArfSet, P extends {model: M}, R extends React.Component<P, S, SS>, S={}, SS=any, X={}>
  (clazz: ((new (props: P) => R) | ((props: P) => any))&X ) =>
    class extends Proxified<M, P, S, SS> { type = clazz } as any as (new (props: P) => R)&X

class Connected<M extends IArfSet, P extends {model: M, context?: LogicNodeContext}, S, D> extends React.Component<{model: M}, {model?: ModelProxy<M>&M, data?: D, error?: string}> implements PipeNode, Subscriber {
    static get field(): Field<any, any> { return null; }
    static to(...other: (typeof Connected)[]) {
        Array.isArray(other) && this.field.with(...other.map(item => item.field))
        return this;
    }

    source: PipeNode
    type: (new (props: P) => React.Component<P, S>) | ((props: P) => any)
   // terminated = false
    private constructed: boolean
    subscription: Subscription

    constructor(props: P) {
        super(props);
        this.source = bfsNodeSearch((this.constructor as any).field, props.model as any as ModelProxy<M>);
        if(!this.source) {
            throw "Logic didn't create node yet. Is this field included in form?";
        }
        let px = props.model instanceof ModelProxy ? props.model : new ModelProxy<M>(props.model);
        this.subscription = new Subscription(px, this)
        this.state = {model: px.withSubscription(this.subscription) as any}
        this.source.subscribe(this);
        this.constructed = true;
    }
    shouldComponentUpdate(nextProps: Readonly<P>, nextState: Readonly<{data: D, error: string}>): boolean {
        if(this.state.data !== nextState.data || this.state.error != nextState.error ) {
            return true;
        }
        let names = Object.getOwnPropertyNames(nextProps);
        if( names.length !== Object.getOwnPropertyNames(this.props).length ) {
            return true;
        }
        if(nextProps.model instanceof ModelProxy) {
            let pp = this.props as {[index: string]: any}, np = nextProps as {[index: string]: any};
            return names.some(key => key !== "model" && key !== "key" && pp[key] !== np[key]);
        }
        return !shallowCompare(this.props, nextProps);
    }
    render() {
         return this.state.data === undefined ? null : 
            React.createElement(this.type, Object.assign({}, this.props, {
                model: this.state.model,
                data: this.state.data,
                error: this.state.error,
                context: (this.source as any).context
            }) as any);
    }
    accept(data: any, error: string) {
        if(this.constructed) {
            // ???
            //setImmediate(() => this.terminated || this.setState({data: data, error: error}));
            this.setState({data: data, error: error});
        } else {
            this.state = Object.assign(this.state, {data: data, error: error});
        }
    }
    notify() {
        // ???
        //this.terminated || 
        this.forceUpdate();
    }
    subscribe(consumer: PipeNode) {}
    unsubscribe(consumer: PipeNode) {}
    unsubscribeFrom(producer: PipeNode) {
        producer.unsubscribe(this);
    }
    componentWillUnmount() {
        this.unsubscribeFrom(this.source);
        this.subscription.terminate();
        //this.terminated = true;
    }
}

class Errorwatch<M extends IArfSet, P extends {model: M, data?: any, context?: LogicNodeContext}, S> extends React.Component<P, {error?: string}> implements PipeNode {
    state = {error: ""}
    private nextState: {error: string} = {error: ""}
    private pendingNextState: any = null;

    subscriptions = new Set<PipeNode>()
    erroring = new Set<PipeNode>()
    type: (new (props: P) => React.Component<P, S>) | ((props: P) => any)
    private constructed = false
    private enabled = false
    constructor(props: P) {
        super(props);
        const myNode = props.context.node;
        myNode.parent.children.forEach(
            (map, key) => key === props.model.key && map.forEach(
                node => node === myNode || (this.subscriptions.add(node), node.subscribe(this))
            )
        )
        this.constructed = true;
    }
    render() {
        return React.createElement(this.type, Object.assign({}, this.props, {
            model: this.props.model,
            data: this.props.data,
            error: this.state.error,
            context: this.props.context
        }) as any);
    }
    accept(data: any, error: string, producer: LogicNode) {
        if(this.enabled || (this.enabled = producer.lastNotifications.some(n => n.action === "validate"))) {
            producer.children.forEach(map => map.forEach(
                node => this.subscriptions.has(node) || (this.subscriptions.add(node), node.subscribe(this))
            ));
            error ? this.erroring.add(producer) : this.erroring.delete(producer);
            this.scheduleUpdate();
        }
    }
    scheduleUpdate() {
        const cmpError = this.erroring.size ? "error" : "";
        if(cmpError !== this.nextState.error) {
            if(this.constructed) {
                this.nextState = {error: cmpError};
                this.pendingNextState || (this.pendingNextState = setImmediate(() => (this.pendingNextState = null, this.setState(this.nextState))));
            } else {
                this.state = this.nextState = {error: cmpError};
            }
        }
    }
    subscribe(consumer: PipeNode) { /*no-op*/ }
    unsubscribe(consumer: PipeNode) { /*no-op*/ }
    unsubscribeFrom(producer: PipeNode) { 
        this.subscriptions.delete(producer);
        this.erroring.delete(producer);
        this.scheduleUpdate();
    }
    componentWillUnmount() {
        this.subscriptions.forEach(node => node.unsubscribe(this));
        this.pendingNextState && clearImmediate(this.pendingNextState);
    }
}

type PipeClass<OP, S, SS, X, M, D> = (new (props: OP) => React.Component<OP, S, SS>&X) & {
    field: Field<M,D>,
    to: (...other: (typeof React.Component)[]) => PipeClass<OP, S, SS, X, M, D>
}

export const Pipe = <M extends IArfSet, D=M> (settings?: {
    get?: (proxy: M, context: LogicNodeContext) => D, // |Promise<D>
    val?: (value: D, proxy?: M, context?: LogicNodeContext) => void|string,
    errorwatch?: "peers"//boolean|{target: "peers"|string|LogicNode, accept: (prev: string, next: string) => string },
    vstrategy?: ValidationStrategy
}) => 
    function <IP extends {model: M, data?: D, error?: string, context?: LogicNodeContext}, S, SS, OP extends Omit<IP,"data"|"error"|"context">&{model: M}, X={}>
       (clazz: (( new (props: IP) => React.Component<IP, S, SS>&X ) | ( (props: IP) => any )) ) : PipeClass<OP, S, SS, X, M, D>
    {
        let {errorwatch, ...rest} = settings||{errorwatch: false};
        let field = new Field(rest)
        return class extends Connected<M, IP, S, D> {
            type = errorwatch ? ( class extends Errorwatch<M, IP, S> { type = clazz } as any ) : clazz
            static get field() { return field }
        }  as any
    }

export const Connect = <M, D>(field: Field<M, D>) =>
    function <IP extends {model: M, data?: D, error?: string, context?: LogicNodeContext}, S, SS, OP extends Omit<IP,"data"|"error"|"context">&{model: M}, X={}>
    (clazz: (( new (props: IP) => React.Component<IP, S, SS>&X ) | ( (props: IP) => any )) ) : PipeClass<OP, S, SS, X, M, D>
    {
        return class extends Connected<M, IP, S, D> {
            type =clazz
            static get field() { return field }
        }  as any
    }

export function SwitchPipe<M extends IArfSet>(test: (model: M) => boolean)/*: PipeClass<{model: M, children: React.ReactNode}, {}, {}, {}, M, M>&{otherwise: () => PipeClass<{model: M, children: React.ReactNode}, {}, {}, {}, M, M>}*/ {
    let ret = Pipe({get: (model: M) => test(model) ? model : null })(
        (props: {model: M, children: React.ReactNode, data: M}) => props.data ? props.children : null
    );
    //(ret as any).otherwise = () => SwitchPipe((m: M) => !test(m));
    return ret;// as any;
}


