import * as React from "react"
import { IArfSet } from "../api/proxy";
import { LogicNodeContext, PipeNode, Field, LogicNode, Omit, LogicProcessor } from "../api/dfe-stream";
import { LogicAccess } from "../api/react-connect";

// TODO: if props.model changes ...
abstract class ErrorwatchComponent<M extends IArfSet, P extends {model: M, data?: any, context?: LogicNodeContext}, S> 
    extends React.Component<P&{logic: LogicProcessor}, {error?: string}> implements PipeNode {
    state = {error: ""}
    private nextState: {error: string} = {error: ""}
    private pendingNextState: any = null;
    private constructed = false
    private enabled = false

    readonly subscriptions = new Set<PipeNode>()
    readonly erroring = new Set<PipeNode>()
    readonly wrapped: (new (props: P) => React.Component<P, S>) | ((props: P) => any)
    abstract targetField(): Field<any, any>
    constructor(props: P&{logic: LogicProcessor}) {
        super(props);
        const target = props.logic.findNode(props.model.key, this.targetField());
        this.subscriptions.add(target);
        target.subscribe(this);
        this.constructed = true;
    }
    render() {
        const Wrapped = this.wrapped;
        return <Wrapped {...this.props} model={this.props.model} data={this.props.data} error={this.state.error} context={this.props.context}/>
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

export function Errorwatch<M, D>(field: Field<M, D>) {
    /* 
        this is done because logicprocessor won't send validate action to nodes without validating function - so we add it but this isn't greatest solution 
    */
    field.val || (field.val = () => "")
    return function <IP extends {model: M, data?: D, error?: string, context?: LogicNodeContext}, S, SS, X={}> (clazz: (( new (props: IP) => React.Component<IP, S, SS>&X ) | ( (props: IP) => any ))) {
        return LogicAccess(class extends ErrorwatchComponent<M, IP, S> { wrapped = clazz; targetField() { return field } }) as (props: Omit<IP,"data"|"error"|"context">) => any
    }
}
