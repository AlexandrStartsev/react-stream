export function Enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor?: PropertyDescriptor) {
        if(!descriptor) {
            // property
            let descriptor = Object.getOwnPropertyDescriptor(target, propertyKey) || {};
            if (descriptor.enumerable != value) {
                descriptor.enumerable = value;
                Object.defineProperty(target, propertyKey, descriptor)
            }
        } else {
            descriptor.enumerable = value;
        }
    };
}

export function Observable<T, P extends ModelProxy<T>, A=new (data: T, parent: ModelProxy<any>, parentCollection: string, single: boolean, listener: Subscription) => P>(proxyClass?: A|A[]) {
    return function (target: any, propertyKey: string) {
        if(proxyClass) {
            const isSubset = typeof proxyClass === "function";
            isSubset || (proxyClass = (proxyClass as any)[0]);
            Object.defineProperties(target, {
                [propertyKey]: {
                    enumerable: true,
                    get: isSubset ? function() {
                        return this.getSubset(propertyKey, proxyClass)
                    } : function() {
                        return this.getSublist(propertyKey, proxyClass)
                    }
                },
                ["$_c_"+propertyKey]: {
                    enumerable: false,
                    value: function(value: any) {
                        ModelUtils.copy(this[propertyKey], value);
                    }
                },
                ["$_r_"+propertyKey]: {
                    enumerable: false,
                    value: function(value: any) {
                        ModelUtils.reflect(this[propertyKey], value);
                    }
                }
            })
        } else {
            Object.defineProperty(target, propertyKey, {
                enumerable: true,
                get: function() {
                    return this.get(propertyKey) || ""
                },
                set: function(value) {
                    this.set(propertyKey, value)
                }
            })
        }
    }
}

export interface IArfSet {
    readonly p? : IArfSet;
    readonly key? : number;
}

export type ListenerAction = "add"|"modify"|"delete"|"remove"|"validate"|"init"|"self"|"notify"
export interface ListenerEvent { key? : number|string, element? : string, action?: ListenerAction }

export interface Subscriber {
    //subscription: Subscription
    notify(action?: ListenerEvent): void;
}

export class Subscription {
    // TODO: this is still an issue. loop over Core.startRuntime multiple times causes memory leaks when passing same data object. Workaround is to pass different data object (shallow copy is fine). 
    static modelWatchMap: WeakMap<IArfSet, Map<string, Set<Subscriber>>> = new WeakMap();
    static getRootDependencyMap(model: IArfSet) {
        if(model) {
            let p;
            if(model instanceof ModelProxy) {
                for(p = model; p.$parent; p = p.$parent) ;
                p = p.$data; // $persisted ?
            } else {
                for(p = model; p.p; p = p.p) ;
            }
            let m = Subscription.modelWatchMap.get(p);
            m || Subscription.modelWatchMap.set(p, m = new Map());
            return m;
        }
        return new Map();
    }

    dpMap: Map<string, Set<Subscriber>>
    subscriber?: Subscriber
    dependencies?: string[]
    constructor(model: IArfSet|Subscription, subscriber?: Subscriber) {
        this.dpMap = model instanceof Subscription ? model.dpMap : Subscription.getRootDependencyMap(model);
        this.subscriber = subscriber;
        this.dependencies = [];
    }
    clear() {
        this.dependencies.forEach(dpKey => {
            let ctlSet = this.dpMap.get(dpKey);
            if(ctlSet) {
                ctlSet.delete(this.subscriber);
                ctlSet.size || this.dpMap.delete(dpKey);
            }
        })
        this.dependencies = [];
    }
    depend(key: number|string, element: string) {
        if(this.subscriber) {
            let dpKey = key + '-' + element, e = this.dpMap.get(dpKey);
            e || this.dpMap.set(dpKey, e = new Set());
            if(!e.has(this.subscriber)) {
                e.add(this.subscriber);
                this.dependencies.push(dpKey);
            }
        }
    }
    notify(key: number|string, element: string, action?: ListenerAction, value?: any) {
        let dpKey = key + '-' + element, e = this.dpMap.get(dpKey);
        e && e.forEach(node => node.notify({key : key, element : element, action : action}));
        return true;
    }
}

export let ModelProxyKeygey = (function() {
    let counter = 0;
    return function() {
        return ++counter;
    }
})()

export class ModelProxyArray<P extends ModelProxy<T>, T> extends Array<P> {
    $parent: ModelProxy<any>
    $parentCollection: string
    $clazz: new (data: T, listener?: Subscription, parent?: ModelProxy<any>, parentCollection?: string, single?: boolean) => P
    constructor(parent: ModelProxy<any>, parentCollection: string, clazz: new (data: T, listener: Subscription, parent: ModelProxy<any>, parentCollection: string, single: boolean) => P) {
        if(typeof parent === 'number') {
            super(parent);
        } else {
            super();
            Array.prototype.push.apply(this, (<Array<T>>parent.get(parentCollection) || []).map(item => new clazz(item, parent.$subscription, parent, parentCollection, false)));
        }
        this.$parent = parent;
        this.$parentCollection = parentCollection;
        this.$clazz = clazz;
        Object.setPrototypeOf(this, ModelProxyArray.prototype);
    }
    push(...items: (P|T)[]): number {
        return Array.prototype.push.apply(this, 
            items.map( item => {
                let proxy = (new this.$clazz(<T>{}, this.$parent.$subscription, this.$parent, this.$parentCollection, false));
                ModelUtils.copy(proxy, item);
                this.$parent.append(this.$parentCollection, false, proxy.$data);
                return proxy;
            })
        );
    }
    shadow(item?: P|T): P {
        let proxy = (new this.$clazz(<T>{}, this.$parent.$subscription, this.$parent, this.$parentCollection, false));
        typeof item === 'object' && ModelUtils.copy(proxy, item);
        proxy.$persisted = null;
        return proxy;
    }
    pop(): P { throw "Unsupported"; }
    splice(start: number, deleteCount?: number, ...items: P[]): P[] { throw "Unsupported"; }
    shift(): P { throw "Unsupported"; }
    unshift(...items: P[]): number { throw "Unsupported"; }
    reverse(): P[] { throw "Unsupported"; }
    /*sort(cb?: (a: P, b: P) => number): this { throw "Unsupported"; }*/
    fill(): this { throw "Unsupported"; }
    copyWithin(): this { throw "Unsupported"; }
    indexOf(item: P)  {
        return item instanceof ModelProxy ? [].indexOf.call(this.map(a => a.$data), item.$data) : -1;
    }
}

export class ModelProxy<T extends IArfSet & {[index: string]: any}> implements IArfSet {
    $data: {[index: string]: any}
    $persisted: {}
    $parent?: ModelProxy<any>
    $subscription? : Subscription
    $parentCollection: string
    $single: boolean

    constructor(data: {}, subscription?: Subscription, parent?: ModelProxy<any>, parentCollection?: string, single?: boolean) {
        this.$persisted = data;
        this.$data = <T>(data||{});
        this.$parent = parent||null;
        this.$subscription = subscription||new Subscription(this);
        this.$single = single===undefined?true:single;
        this.$parentCollection = parentCollection||'';
    }
    @Enumerable(false)
    get key(): number {
        let data = this.$data as any, key = data.key;
        key || Object.defineProperty(data, 'key', {enumerable: false, value: key = ModelProxyKeygey()});
        return key;
    }
    @Enumerable(false)
    get p() {
        return this.$parent.withSubscription(this.$subscription);
    }
    @Enumerable(false)
    withSubscription(subscription?: Subscription): this {
        let ctor = this.constructor as new (data: {}, listener: Subscription, parent: ModelProxy<any>, parentCollection: string, single: boolean) => this;
        let ret = new ctor(this.$data, subscription, this.$parent, this.$parentCollection, this.$single);
        ret.$persisted = this.$persisted;
        return ret;
    }
    @Enumerable(false)
    get(element: string): any {
        this.$subscription.depend(this.key, element);
        return this.$data[element];
    }
    @Enumerable(false)
    getSubset<C extends IArfSet, P extends ModelProxy<C>>(element: string, proxyClass: new (data: C, listener: Subscription, parent: ModelProxy<any>, parentCollection: string, single: boolean) => P): P {
        if(element) {
            return new proxyClass( this.get(element), this.$subscription, this, element, true );
        }
        return new proxyClass( <any>this.$data, this.$subscription, this, null, true );
    }
    @Enumerable(false)
    getSublist<C extends IArfSet, P extends ModelProxy<C>>(element: string, proxyClass: new (data: C, listener: Subscription, parent: ModelProxy<any>, parentCollection: string, single: boolean) => P): Array<P> {
        return new ModelProxyArray<P, C>(this, element, proxyClass);
    }
    @Enumerable(false)
    append(element: string, single?: boolean, data?: any) {
        this.persist();
        if(element) {
            if(single) {
                let obj: {} =this.$data[ element ];
                if( !obj || typeof obj !== 'object' ) {
                    obj = this.$data[ element ] = data||{};
                    this.$subscription.notify(this.key, element, "add");
                } else {
                    // TODO: merge ? 
                }
                return obj;
            } else {
                let arr: any[] = this.$data[ element ], obj = data||{};
                if( ! Array.isArray(arr) ) {
                    this.$data[ element ] = arr = [];
                }
                arr.push(obj);
                this.$subscription.notify(this.key, element, "add");
                return obj;
            }
        }
        return this.$data;
    }
    @Enumerable(false)
    set(element: string, value?: any) {
        if(value === undefined || value === null || value === '') {
            if(this.$data.hasOwnProperty(element)) {
                delete this.$data[element];
                this.$subscription.notify(this.key, element, "delete");
            }
        } else {
            this.persist();
            if(this.$data[element] !== value) {
                this.$data[element] = value;
                this.$subscription.notify(this.key, element, "modify");
            }
        }
        return value;
    }
    @Enumerable(false)
    persist() {
        if(this.isShadow() && this.$parent) {
            // TODO: merge ? 
            this.$persisted = this.$data = this.$parent.append(this.$parentCollection, this.$single, this.$data);
        }
    }
    @Enumerable(false)
    detach() {
        if(this.$parent) {
            if(this.$persisted) {
                if(this.$parentCollection) {
                    let collection: {}[] = this.$parent.$data[this.$parentCollection];
                    if(collection) {
                        collection.splice(collection.indexOf(this.$persisted), 1);
                        collection.length || delete this.$parent.$data[this.$parentCollection];
                        this.$subscription.notify(this.$parent.key, this.$parentCollection, "remove");
                    }
                } else {
                    this.$parent.detach();
                }
                this.$persisted = undefined;
            }
        } else {
            throw 'attempt to detach root';
        }
    }
    @Enumerable(false)
    isShadow() {
        return !this.$persisted;
    }
    @Enumerable(false)
    hasChild(other: ModelProxy<any>): boolean {
        for(; other && this.$data !== other.$data; other = other.$parent) {}
        return !!other;
    }
}

export namespace ModelUtils {
    export function castAs<T extends IArfSet>(data: {}, impl: new (data: {}, listener?: Subscription, parent?: any, parentCollection?: any, single?: boolean) => ModelProxy<T>) : T {
        return typeof impl === "function" ? <any>(new impl(data, null, null, null, true)) : data;
    }

    export function detach<T extends IArfSet>(v: T) {
        if(v instanceof ModelProxy) {
            v.detach();
        } else {
            throw "Not an instance of supported class";
        }
    }

    export function copy<T>(dest: T, src: Partial<T>): T {
        return merge(dest, src, false);
    }

    export function reflect<T>(dest: T, src: Partial<T>): T {
        return merge(dest, src, true);
    }

    export function unwrap<T>(src: T): T {
        return src instanceof ModelProxy ? src.$data as T : src;
    }

    export function wrapAs<T>(data: {}, proto: T|T[]): T {
        if(proto instanceof ModelProxy) {
            return castAs(data, <any>proto.constructor);
        }
        if(proto instanceof ModelProxyArray) {
            return castAs(data, (<ModelProxyArray<ModelProxy<T>, T>>proto).$clazz);
        }
        throw "Not an instance of supported class";
    }

    export function shadow<T extends IArfSet>(array: T[], item?: T): T {
        return (<any>array).shadow(item);
    }

    export function isDetached(target: IArfSet) {
        return target instanceof ModelProxy && target.isShadow();
    }

    export function persist(target: IArfSet) {
        target instanceof ModelProxy && target.persist();
    }

    function merge<T>(dest: T, src: Partial<T>, deleteMissing: boolean): T {
        if(dest instanceof ModelProxy) {
            mergeSubstet(dest, src, deleteMissing);
        } else if( dest instanceof ModelProxyArray ) {
            mergeArrays(<any>dest, <any>src, deleteMissing);
        } else {
            throw "Not an instance of supported class";
        }
        return dest;
    }

    function mergeSubstet<S, D extends S>(_dest: ModelProxy<D>, _src: S, deleteMissing: boolean) {
        const dest = _dest as {[index: string]: any}, src = (typeof _src === "object" && _src || {}) as {[index: string]: any};
        const writeEmpty = !(_src instanceof ModelProxy);
        if(deleteMissing) {
            for(const prop in dest) {
                if(prop !== "constructor" && prop.charAt(0) != '$') {
                    const func = dest["$_r_" + prop];
                    if( typeof func === "function" ) {
                        src[prop] === undefined ?  func.call(dest) : func.call(dest, src[prop]);
                    } else {
                        dest[prop] = src[prop];
                    }
                }
            }
        } else {
            for(const prop in src) {
                if(prop !== "constructor" && prop.charAt(0) != '$') {
                    const func = dest["$_c_" + prop], v = src[prop];
                    if( typeof func === "function" ) {
                        func.call(dest, v);
                    } else {
                        if(v !== null && v !== undefined && (v !== "" || writeEmpty) && v !== false) {
                            dest[prop] = v;
                        }
                    }
                }
            }
        }
    }

    function mergeArrays<T>(dest: T[], src: T[], deleteMissing: boolean): void {
        src = src||[];
        if(deleteMissing) {
            for(let i = 0; i < dest.length && i < dest.length; i++) {
                if(i === src.length) {
                    dest.splice(i);
                } else if(i === dest.length) {
                    dest.push(src[i]);
                } else {
                    merge(dest[i], src[i], true);
                }
            }
        } else {
            src.forEach(i => dest.push(i));
        }
    }
}