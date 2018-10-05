import * as React from "react";
import {IArfSet, ModelProxy, Watcher, ListenerEvent} from "./proxy";
import {Field, PipeNode, LogicNode, ContextModel, ValidationStrategy, Omit} from "./dfe-stream";

function shallowCompare(obj1: any, obj2: any) {
    if( obj1===obj2 ) return true;
    if(typeof obj1 !== typeof obj2 || typeof obj1 !== 'object' || !obj1 !== !obj2) return false;
    let names = Object.getOwnPropertyNames(obj1);
    if( names.length != Object.getOwnPropertyNames(obj2).length ) return false;
    return names.filter(n => obj1[n] !== obj2[n]).length === 0;
}

class Proxified<M extends IArfSet, P extends {model: M}, S={}, SS=any, X={}> extends React.Component<P, S, SS> implements Watcher {
    type: ((new (props: P) => React.Component<P, S, SS>) | ((props: P) => any))&X
    $model: M & ModelProxy<M>
    constructor(props: P) {
        super(props);
        this.$model = (props.model instanceof ModelProxy ? props.model : new ModelProxy<M>(props.model)).forWatcher(this) as M & ModelProxy<M>;
    }

    componentWillUnmount() {
        this.$model instanceof ModelProxy && this.$model.$listener.undepend();
        this.$model = null;
    }

    shouldComponentUpdate(nextProps: Readonly<P & {model: M}>, nextState: Readonly<S>): boolean {
        let names = Object.getOwnPropertyNames(nextProps);
        if( !shallowCompare(this.state, nextState) || names.length !== Object.getOwnPropertyNames(this.props).length ) {
            return true;
        }
        if(nextProps.model instanceof ModelProxy) {
            let pp = this.props as {[index: string]: any}, np = nextProps as {[index: string]: any};
            return this.$model.key !== nextProps.model.key || names.some(key => key !== 'model' && key !== 'key' && pp[key] !== np[key]);
        }
        return !shallowCompare(this.props, nextProps);
    }

    render() {
        let Type = this.type; 
        // forWatcher called to trigger props difference for child.
        // Non-proxified components unaware of proxy nature should just recalculate. 
        // Aware components will receive "notify" when applicable, thus eliminating difference
        return React.createElement(this.type, Object.assign({}, this.props, {model: this.$model}));
    }
    notify(action?: ListenerEvent) {
        this.$model && this.forceUpdate();
    }
}

function bfsNodeSearch(field: Field<any>, model: any): PipeNode {
    // TODO: elaborate...
    let source: PipeNode = model.$listener.node;
    while(!(source instanceof LogicNode)) {
        source = source.source;
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

class Connected<M extends IArfSet, P extends {model: M, context?: ContextModel<M>}, S> extends React.Component<{model: M}, {model: ModelProxy<M>&M}> implements PipeNode, Watcher {
    source: PipeNode
    type: (new (props: P) => React.Component<P, S>) | ((props: P) => any)
    static get field(): Field<any, any> { return null; }
    //$model: JsonProxy<M>|IArfSet
    constructor(props: P) {
        super(props);
        this.source = bfsNodeSearch((this.constructor as any).field, props.model);
        if(!this.source) {
            throw "Logic didn't create node yet. Is this field included in form?";
        }
        this.source.consumer.push(this);
        // We could piggy-back on logic's proxy, but then some UI-only updates would also trigger logic to recompute. 
        this.state = {model: (props.model as any).forWatcher(this)};
    }
    componentWillUnmount() {
        this.source && this.source.consumer.splice(this.source.consumer.indexOf(this), 1);
        this.state.model.$listener.undepend();
    }

    shouldComponentUpdate(nextProps: Readonly<P>): boolean {
        // it will be updated later via "accept"
        /*if(this.prev && this.prev.notifications.length ) {
            return false;
        }*/
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
         //this.source.lastData === undefined ? null :  ???
         return   React.createElement(this.type, Object.assign({}, this.props, {
                model: this.state.model,
                data: this.source.lastData,
                error: this.source.lastError,
                context: (this.source as any).context
            }) as any);
        //let Type = this.type as any; 
        //return <Type {...this.props} model={this.state.model} data={this.source.lastData} error={this.source.lastError} context={(this.source as any).context}/>
    }

    accept(data: any, error?: string) {
        setImmediate(() => this.source.terminated || this.forceUpdate());
    }

    notify() {
        this.source.terminated || this.forceUpdate();
    }

    terminate() {
        // ...
    }

    static to(...other: (typeof Connected)[]) {
        Array.isArray(other) && this.field.with(...other.map(item => item.field))
        return this;
    }
}

type PipeClass<OP, S, SS, X, M, D> = (new (props: OP) => React.Component<OP, S, SS>&X) & {
    field: Field<M,D>,
    to: (...other: (typeof React.Component)[]) => PipeClass<OP, S, SS, X, M, D>
}

export const Pipe = <M extends IArfSet, D=M> (settings?: {
    get?: (proxy: M, context: ContextModel<M>, events?: ListenerEvent[]) => D,
    val?: (value: D, proxy?: M, context?: ContextModel<M>, events?: ListenerEvent[]) => void|string,
    errorwatch?: boolean|{target: "peers"|string|LogicNode, accept: (prev: string, next: string) => string },
    vstrategy?: ValidationStrategy
}) => 
    function <IP extends {model: M, data?: D, error?: string, context?: ContextModel<M>}, S, SS, OP extends Omit<IP,"data"|"error"|"context">&{model: M}, X={}>
       (clazz: (( new (props: IP) => React.Component<IP, S, SS>&X ) | ( (props: IP) => any )) ) 
    {
        let field = new Field(settings)
        return class extends Connected<M, IP, S> {
            type = clazz
            static get field() { return field }
        }  as any as PipeClass<OP, S, SS, X, M, D>
    }

export function SwitchPipe<M extends IArfSet>(test: (model: M) => boolean)/*: PipeClass<{model: M, children: React.ReactNode}, {}, {}, {}, M, M>&{otherwise: () => PipeClass<{model: M, children: React.ReactNode}, {}, {}, {}, M, M>}*/ {
    let ret = Pipe({get: (model: M) => test(model) ? model : null })(
        (props: {model: M, children: React.ReactNode, data: M}) => props.data ? props.children : null
    );
    //(ret as any).otherwise = () => SwitchPipe((m: M) => !test(m));
    return ret;// as any;
}


