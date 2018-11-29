import * as React from "react";
import {IArfSet, ModelProxy, Subscriber, ListenerEvent, Subscription} from "./proxy";
import {Field, PipeNode, LogicNode, LogicNodeContext, ValidationStrategy, Omit, LogicProcessor} from "./dfe-stream";

const {Consumer: lcc, Provider: lcp} = React.createContext({logic: null as LogicProcessor, model: null as IArfSet})
export const LogicContextConsumer = lcc
// to make model not required
export const LogicContextProvider = lcp as React.ComponentType<React.ProviderProps<{logic: LogicProcessor, model?: IArfSet}>>

/**
 * 
 * LogicContextAdapter is used as a superclass for higher order components. It wraps Connected and Proxified components. 
 * 
 * Main function is to find model and logic node corresponding to current react subtree and pass it to Connected components as props. 
 
 * If necessary it re-creates context with new model, if latter was explicitly provided. 
 * Logic processor's root model will be used if no model is available in context. 
 * 
 * Instances of this class don't observe model properties and don't subscribe to logic nodes 
 * and re-render only if different model was passed
 *  
 */

class LogicContextAdapter<M extends IArfSet, P, S, SS> extends React.Component<{model?: M}> {
    readonly wrapped: new (props: {source?: LogicNode, model: M}) => React.Component<{source?: LogicNode, model: M}, S, SS>
    readonly field: Field<any, any>

    shouldComponentUpdate(nextProps: Readonly<{model: M}>) {
        return this.props.model !== nextProps.model && (!this.props.model || !nextProps.model || this.props.model.key !== nextProps.model.key) || compareIgnoreModel(this.props, nextProps);
    }
    render() {
        const Wrapped = this.wrapped, own = this.props.model;
        return (
            <LogicContextConsumer>{
                ctx => {
                    const model = (own || ctx.model || ctx.logic.rootModel) as M;
                    const source = this.field ? ctx.logic.findNode(model.key, this.field) : null;
                    const element = <Wrapped {...this.props} source={source} model={model}/>
                    return own ? <LogicContextProvider value={{logic: ctx.logic, model: model}} children={element}/> : element;
                }
            }</LogicContextConsumer>
        )
    }
    
    static get field(): Field<any, any> { return null; }
    static to(...other: (typeof LogicContextAdapter)[]) {
        Array.isArray(other) && this.field.with.apply(this.field, other.map(item => item.field))
        return this;
    }
}

export const LogicAccess = <P extends {logic: LogicProcessor}, S, X>
  (Clazz: ((new (props: P) => React.Component<P, S>) | ((props: P) => any))&X ) =>
    (props: Omit<P,"logic">) => <LogicContextConsumer>{ctx => <Clazz {...props} logic={ctx.logic}/>}</LogicContextConsumer>

function compareIgnoreModel<M, P extends {model: M}>(props: Partial<P>, nextProps: Partial<P>) {
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
    readonly wrapped: ((new (props: P) => React.Component<P, S, SS>) | ((props: P) => any))&X
    
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
        const Wrapped = this.wrapped;
        return <Wrapped {...this.props} model={this.state.model}/>
    }
    notify() {
        this.setState({model: this.props.model.withSubscription(this.state.subscription)})
    }
}

export const Proxify = <M extends IArfSet, P extends {model: M}, S={}, SS=any, X={}>
  (clazz: ((new (props: P) => React.Component<P, S, SS>) | ((props: P) => any))&X ) =>
    class extends LogicContextAdapter<any, any, any, any> {
        field: Field<any, any> = null
        wrapped = class extends Proxified<M, P, S, SS> {
            wrapped = clazz
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
            extends React.Component<{source: LogicNode, model: M & ModelProxy<M>},
                            {model: M & ModelProxy<M>, data?: D, error?: string, subscription: Subscription, source: LogicNode, self: PipeNode}> implements PipeNode, Subscriber {
    
    readonly wrapped: (new (props: P) => React.Component<P, S>) | ((props: P) => any)
    
    private constructed: boolean

    constructor(props: {source: LogicNode, model: M & ModelProxy<M>}) {
        super(props);
        let subscription = new Subscription(props.model, this)
        this.state = {source: props.source, model: props.model.withSubscription(subscription), subscription: subscription, self: this}
        this.state.source.subscribe(this);
        this.constructed = true;
    }
    static getDerivedStateFromProps<M>(nextProps: {source: LogicNode, model: M & ModelProxy<M>}, prevState: {model: M & ModelProxy<M>, subscription: Subscription, source: LogicNode, self: PipeNode}) {
        // NOTE: model is also the same if source is the same, so no need to check them separately
        if( prevState.source !== nextProps.source ) {
            prevState.subscription.clear();
            let nextState = { model: nextProps.model.withSubscription(prevState.subscription), source: nextProps.source }
            prevState.source.unsubscribe(prevState.self);
            nextProps.source.subscribe(prevState.self)
            return nextState;
        }
        return null;
    }
    shouldComponentUpdate(nextProps: Readonly<{source: LogicNode, model: M & ModelProxy<M>}>, nextState: Readonly<{model: M & ModelProxy<M>, data?: D, error?: string, subscription: Subscription, source: PipeNode, self: any}>): boolean {
        return this.state.data !== nextState.data || this.state.error !== nextState.error || this.state.model !== nextState.model || compareIgnoreModel(this.props, nextProps);
    }
    render() {
        const Wrapped = this.wrapped;
        return this.state.data === undefined ? null : <Wrapped {...this.props} model={this.state.model} data={this.state.data} error={this.state.error} context={this.state.source.context}/>
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

type BoundComponent<OP extends {model: M}, S, SS, X, M, D> = (new (props: OP) => React.Component<Omit<OP,"model">&{model?: M}, S, SS>&X) & {
    field: Field<M,D>,
    to: (...other: (typeof React.Component)[]) => BoundComponent<OP, S, SS, X, M, D>
}


export const Connect = <M, D>(field: Field<M, D>) =>
    function <IP extends {model: M, data?: D, error?: string, context?: LogicNodeContext}, S, SS, OP extends Omit<IP,"data"|"error"|"context">, X={}>
    (clazz: (( new (props: IP) => React.Component<IP, S, SS>&X ) | ( (props: IP) => any )) ) : BoundComponent<OP&{model: M}, S, SS, X, M, D>
    {
        return class extends LogicContextAdapter<M, any, any, any> {
            field = field
            wrapped = class extends Connected<M, IP, S, D> {
                wrapped = clazz
            }
            static get field() { return field }
        } as any
    }
    
export const Create = <M extends IArfSet, D=M> (settings?: {
    get?: (proxy: M, context: LogicNodeContext) => D, // |Promise<D>
    val?: (value: D, proxy?: M, context?: LogicNodeContext) => void|string,
    vstrategy?: ValidationStrategy
}) => // todo add field so it s possible to write Create({....}).field
    Connect(new Field(settings));

export function SwitchPipe<M extends IArfSet>(test: (model: M) => boolean)/*: PipeClass<{model: M, children: React.ReactNode}, {}, {}, {}, M, M>&{otherwise: () => PipeClass<{model: M, children: React.ReactNode}, {}, {}, {}, M, M>}*/ {
    let ret = Create({get: (model: M) => test(model) ? model : null })(
        (props: {model: M, children: React.ReactNode, data: M}) => props.data ? props.children : null
    );
    //(ret as any).otherwise = () => SwitchPipe((m: M) => !test(m));
    return ret;// as any;
}


