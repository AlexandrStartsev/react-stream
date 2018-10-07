import * as React from "react";
import {IArfSet, ModelProxy, Subscriber, ListenerEvent, Subscription} from "./proxy";
import {Field, PipeNode, LogicNode, LogicNodeContext, ValidationStrategy, Omit, LogicProcessor} from "./dfe-stream";

const {Consumer: lcc, Provider: lcp} = React.createContext({logic: null as LogicProcessor, model: null as IArfSet})
export const LogicContextConsumer = lcc
// to make model not required
export const LogicContextProvider = lcp as React.ComponentType<React.ProviderProps<{logic: LogicProcessor<{}>, model?: IArfSet}>>

/**
 * 
 * LogicContextAdapter is used as a superclass for higher order components. It wraps Connected and Proxified components. 
 * 
 * Main function is to retrive instance LogicProcessor assigned to react subtree and current model and pass it to Connected components. 
 
 * If necessary it re-creates context with new model, if latter was explicitly provided. 
 * Logic processor's root model will be used if no model is available in context. 
 * 
 * Instances of this class don't observe model properties and don't subscribe to logic nodes 
 * and re-render only if different model was passed
 *  
 */

class LogicContextAdapter<M extends IArfSet, P extends {logic: LogicProcessor, model: M, field: Field<any, any>}, S, SS> extends React.Component<{model?: M}> {
    type: new (props: P) => React.Component<P, S, SS>
    field: Field<any, any>

    shouldComponentUpdate(nextProps: Readonly<{model: M}>) {
        return this.props.model !== nextProps.model && (!this.props.model || !nextProps.model || this.props.model.key !== nextProps.model.key);
    }
    render() {
        const Type = this.type as any, own = this.props.model;
        return (
            <LogicContextConsumer>{
                ctx => {
                    if(own) {
                        return (
                            <LogicContextProvider value={{logic: ctx.logic, model: own}}>
                                <Type {...this.props} logic={ctx.logic} model={own} field={this.field}/>
                            </LogicContextProvider>
                        )
                    }
                    return <Type {...this.props} logic={ctx.logic} model={ctx.model||ctx.logic.rootModel} field={this.field}/>
                }
            }</LogicContextConsumer>
        )
    }
    
    static get field(): Field<any, any> { return null; }
    static to(...other: (typeof LogicContextAdapter)[]) {
        Array.isArray(other) && this.field.with(...other.map(item => item.field))
        return this;
    }
}

function compareIgnoreModel<M, P extends {model: M & ModelProxy<M>}>(props: P, nextProps: P) {
    let names = Object.getOwnPropertyNames(nextProps);
    if( names.length !== Object.getOwnPropertyNames(props).length ) {
        return true;
    }
    let pp = props as {[index: string]: any}, np = nextProps as {[index: string]: any};
    return names.some(key => key !== "model" && pp[key] !== np[key]);    
}

/**
 * 
 * Proxified component wraps components that interact with observable model. 
 * 
 * It obtains new subscription and passes observable with new subscription to wrapped component, 
 * so all reads done by wrapped component account on wrapping instance (and not on parent component's instance)
 * 
 * Proxified also responsible to trigger wrapper component's re-rendering when notification on subscription received,
 * and it is achieved by updating state.model  
 * 
 */

class Proxified<M extends IArfSet, P extends {model: M}, S={}, SS=any, X={}> extends React.Component<P & {model: ModelProxy<M>}, {model: ModelProxy<M>, subscription: Subscription}> implements Subscriber {
    type: ((new (props: P) => React.Component<P, S, SS>) | ((props: P) => any))&X
    
    constructor(props: P & {model: ModelProxy<M>}) {
        super(props);
        let subscription = new Subscription(props.model, this);
        this.state = {subscription: subscription, model: props.model.withSubscription(subscription)}
    }
    static getDerivedStateFromProps<M>(nextProps: {model: M&ModelProxy<M>}, prevState: {model: M&ModelProxy<M>, subscription?: Subscription}) {
        return prevState.model.key !== nextProps.model.key ? (prevState.subscription.clear(), { model: nextProps.model.withSubscription(prevState.subscription) }) : null
    }
    componentWillUnmount() {
        this.state.subscription.clear();
    }
    shouldComponentUpdate(nextProps: Readonly<P & {model: ModelProxy<M>}>, nextState: Readonly<{model: M & ModelProxy<M>, subscription: Subscription}>): boolean {
        return nextState.model !== this.state.model || compareIgnoreModel(this.props, nextProps);
    }
    render() {
        const Type = this.type;
        return <Type {...this.props} model={this.state.model}/>
    }
    notify() {
        this.setState({model: this.props.model.withSubscription(this.state.subscription)})
    }
}

export const Proxify = <M extends IArfSet, P extends {model: M}, S={}, SS=any, X={}>
  (clazz: ((new (props: P) => React.Component<P, S, SS>) | ((props: P) => any))&X ) =>
    class extends LogicContextAdapter<any, any, any, any> {
        type = class extends Proxified<M, P, S, SS> {
            type = clazz
        }
    } as any as (new (props: Omit<P,"model">&{model?: M}) => React.Component<Omit<P,"model">&{model?: M}, S, SS>)&X

/**
 * 
 * Connected component wraps components that consume results of logic nodes as well as interact with observable model.
 * 
 * It extends functionality of Proxified (TODO: set Proxified as superclass)
 * 
 * In addition, connected instance will find logic node and subscribe to it, 
 * then re-render wrapped instance with new data/error props as they become available. 
 * 
 */

class Connected<M extends IArfSet, P extends {model: M, data?: D, error?: string, context?: LogicNodeContext}, S, D> 
            extends React.Component<{logic: LogicProcessor, model: M & ModelProxy<M>, field: Field<M, D>},
                            {model: M & ModelProxy<M>, data?: D, error?: string, subscription: Subscription, source: LogicNode, self: any}> implements PipeNode, Subscriber {
    
    type: (new (props: P) => React.Component<P, S>) | ((props: P) => any)
    
    private constructed: boolean

    constructor(props: {logic: LogicProcessor, model: M & ModelProxy<M>, field: Field<M, D>}) {
        super(props);
        let subscription = new Subscription(props.model, this)
        this.state = {source: props.logic.findNode(props.model.key, props.field), model: props.model.withSubscription(subscription), subscription: subscription, self: this}
        this.state.source.subscribe(this);
        this.constructed = true;
    }
    static getDerivedStateFromProps<M>(nextProps: {logic: LogicProcessor, model: M & ModelProxy<M>, field: Field<M, any>}, prevState: {model: M & ModelProxy<M>, subscription: Subscription, source: PipeNode, self: any}) {
        if( prevState.model.key !== nextProps.model.key ) {
            prevState.subscription.clear();
            let nextState = { model: nextProps.model.withSubscription(prevState.subscription), source: nextProps.logic.findNode(nextProps.model.key, nextProps.field) }
            prevState.source.unsubscribe(prevState.self);
            nextState.source.subscribe(prevState.self)
            return nextState;
        }
        return null;
    }
    shouldComponentUpdate(nextProps: Readonly<{logic: LogicProcessor, model: M & ModelProxy<M>, field: Field<M, D>}>, nextState: Readonly<{model: M & ModelProxy<M>, data?: D, error?: string, subscription: Subscription, source: PipeNode, self: any}>): boolean {
        return this.state.data !== nextState.data || this.state.error !== nextState.error || this.state.model !== nextState.model || compareIgnoreModel(this.props, nextProps);
    }
    render() {
        const Type = this.type;
        return this.state.data === undefined ? null : <Type {...this.props} model={this.state.model} data={this.state.data} error={this.state.error} context={this.state.source.context}/>
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
        this.setState({model: this.props.model.withSubscription(this.state.subscription)})
    }
    subscribe(consumer: PipeNode) {}
    unsubscribe(consumer: PipeNode) {}
    unsubscribeFrom(producer: PipeNode) {
        producer.unsubscribe(this);
    }
    componentWillUnmount() {
        this.unsubscribeFrom(this.state.source);
        this.state.subscription.clear();
        //this.terminated = true;
    }
}

/**
 *
 * Errorwatch component wraps components that want to receive syntetic error notification when other logic nodes are erroring
 * It itself wrapped with Connected componet 
 * 
 * Errorwatch will subscribe to relevant logic nodes, continously updating subscription as necessary 
 * 
 * 
 */

// TODO: if props.model changes ...
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
                node => node === myNode || (this.subscriptions.add(node), node.subscribe(this),
                    // ??? this is if logicprocessor won't send validate action to nodes without validating function - so we add it but this isn't greatest solution 
                    node.field.val || (node.field.val = () => void 0))
            )
        )
        this.constructed = true;
    }
    render() {
        const Type = this.type;
        return <Type {...this.props} model={this.props.model} data={this.props.data} error={this.state.error} context={this.props.context}/>
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

type PipeClass<OP extends {model: M}, S, SS, X, M, D> = (new (props: OP) => React.Component<Omit<OP,"model">&{model?: M}, S, SS>&X) & {
    field: Field<M,D>,
    to: (...other: (typeof React.Component)[]) => PipeClass<OP, S, SS, X, M, D>
}

export const Pipe = <M extends IArfSet, D=M> (settings?: {
    get?: (proxy: M, context: LogicNodeContext) => D, // |Promise<D>
    val?: (value: D, proxy?: M, context?: LogicNodeContext) => void|string,
    errorwatch?: "peers"//boolean|{target: "peers"|string|LogicNode, accept: (prev: string, next: string) => string },
    vstrategy?: ValidationStrategy
}) => 
    function <IP extends {model: M, data?: D, error?: string, context?: LogicNodeContext}, S, SS, OP extends Omit<IP,"data"|"error"|"context">, X={}>
       (clazz: (( new (props: IP) => React.Component<IP, S, SS>&X ) | ( (props: IP) => any )) ) : PipeClass<OP&{model: M}, S, SS, X, M, D>
    {
        let {errorwatch, ...rest} = settings||{errorwatch: false};
        let field = new Field(rest)
        return class extends LogicContextAdapter<M, any, any, any> {
            field = field
            type = class extends Connected<M, IP, S, D> {
                type = errorwatch ? class extends Errorwatch<M, IP, S> {type = clazz} as any : clazz
            }
            static get field() { return field }
        } as any
    }

export const Connect = <M, D>(field: Field<M, D>) =>
    function <IP extends {model: M, data?: D, error?: string, context?: LogicNodeContext}, S, SS, OP extends Omit<IP,"data"|"error"|"context">, X={}>
    (clazz: (( new (props: IP) => React.Component<IP, S, SS>&X ) | ( (props: IP) => any )) ) : PipeClass<OP&{model: M}, S, SS, X, M, D>
    {
        return class extends LogicContextAdapter<M, any, any, any> {
            field = field
            type = class extends Connected<M, IP, S, D> {
                type = clazz
            }
            static get field() { return field }
        } as any
    }

export function SwitchPipe<M extends IArfSet>(test: (model: M) => boolean)/*: PipeClass<{model: M, children: React.ReactNode}, {}, {}, {}, M, M>&{otherwise: () => PipeClass<{model: M, children: React.ReactNode}, {}, {}, {}, M, M>}*/ {
    let ret = Pipe({get: (model: M) => test(model) ? model : null })(
        (props: {model: M, children: React.ReactNode, data: M}) => props.data ? props.children : null
    );
    //(ret as any).otherwise = () => SwitchPipe((m: M) => !test(m));
    return ret;// as any;
}


