/**
 * @Enumerable decorator that sets the enumerable property of a class field to false.
 * @param value true|false
 */
export function Enumerable(value: boolean) {
    return function (target: any, propertyKey: string) {
        let descriptor = Object.getOwnPropertyDescriptor(target, propertyKey) || {};
        if (descriptor.enumerable != value) {
            descriptor.enumerable = value;
            Object.defineProperty(target, propertyKey, descriptor)
        }
    };
}

export function Observable<T, P extends ModelProxy<T>, A=new (data: T, parent: ModelProxy<any>, parentCollection: string, single: boolean, listener: Listener) => P>(proxyClass?: A|A[]) {
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
                    enumerable: true,
                    value: function(value: any) {
                        ProxyUtils.copy(this[propertyKey], value);
                    }
                },
                ["$_r_"+propertyKey]: {
                    enumerable: true,
                    value: function(value: any) {
                        ProxyUtils.reflect(this[propertyKey], value);
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

export interface ListenerEvent { key? : number|string, element? : string, action?: string }

export interface Watcher {
    notify(action?: ListenerEvent): void;
}

export class Listener {
    // TODO: this is still an issue. loop over Core.startRuntime multiple times causes memory leaks when passing same data object. Workaround is to pass different data object (shallow copy is fine). 
    static modelWatchMap: WeakMap<IArfSet, Map<string, Set<Watcher>>> = new WeakMap();
    static getRootDependencyMap(model: IArfSet) {
        if(model) {
            let p;
            if(model instanceof ModelProxy) {
                for(p = model; p.$parent; p = p.$parent) ;
                p = p.$data; // $persisted ?
            } else {
                for(p = model; p.p; p = p.p) ;
            }
            let m = Listener.modelWatchMap.get(p);
            m || Listener.modelWatchMap.set(p, m = new Map());
            return m;
        }
        return new Map();
    }

    dpMap: Map<string, Set<Watcher>>
    node?: Watcher
    dependencies?: string[]
    constructor(model: IArfSet|Listener, node?: Watcher) {
        this.dpMap = model instanceof Listener ? model.dpMap : Listener.getRootDependencyMap(model);
        this.node = node;
        this.dependencies = [];
    }
    undepend() {
        this.dependencies.forEach(dpKey => {
            let ctlSet = this.dpMap.get(dpKey);
            if(ctlSet) {
                ctlSet.delete(this.node);
                ctlSet.size || this.dpMap.delete(dpKey);
            }
        })
    }
    depend(key: number|string, element: string) {
        if(this.node) {
            let dpKey = key + '-' + element, e = this.dpMap.get(dpKey);
            e || this.dpMap.set(dpKey, e = new Set());
            if(!e.has(this.node)) {
                e.add(this.node);
                this.dependencies.push(dpKey);
            }
        }
    }
    notify(key: number|string, element: string, action?: string, value?: any) {
        let dpKey = key + '-' + element, e = this.dpMap.get(dpKey);
        e && e.forEach(node => node.notify({key : key, element : element, action : action}));
        return true;
    }
    set(proxy: ModelProxy<any>, element: string, value: any, action: string) { 
        if(proxy.$data[element] != value) { proxy.$data[element] = value; this.notify(proxy.key, element, action) }; return true; 
    }
    get(proxy: ModelProxy<any>, element: string) { 
        this.depend(proxy.key, element); 
        return proxy.$data[element]; 
    }
}

export let JsonProxyKeygey = (function() {
    let counter = 0;
    return function() {
        return ++counter;
    }
})()

export class JsonProxyArray<P extends ModelProxy<T>, T> extends Array<P> {
    $parent: ModelProxy<any>
    $parentCollection: string
    $clazz: new (data: T, parent?: ModelProxy<any>, parentCollection?: string, single?: boolean, listener?: Listener) => P
    constructor(parent: ModelProxy<any>, parentCollection: string, clazz: new (data: T, parent: ModelProxy<any>, parentCollection: string, single: boolean, listener: Listener) => P) {
        if(typeof parent === 'number') {
            super(parent);
        } else {
            super();
            Array.prototype.push.apply(this, (<Array<T>>parent.get(parentCollection) || []).map(item => new clazz(item, parent, parentCollection, false, parent.$listener)));
        }
        this.$parent = parent;
        this.$parentCollection = parentCollection;
        this.$clazz = clazz;
        Object.setPrototypeOf(this, JsonProxyArray.prototype);
    }
    push(...items: (P|T)[]): number {
        return Array.prototype.push.apply(this, 
            items.map( item => {
                let proxy = (new this.$clazz(<T>{}, this.$parent, this.$parentCollection, false, this.$parent.$listener));
                ProxyUtils.copy(proxy, item);
                this.$parent.append(this.$parentCollection, false, proxy.$data);
                return proxy;
            })
        );
    }
    shadow(item?: P|T): P {
        let proxy = (new this.$clazz(<T>{}, this.$parent, this.$parentCollection, false, this.$parent.$listener));
        typeof item === 'object' && ProxyUtils.copy(proxy, item);
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
    $listener? : Listener
    $parentCollection: string
    $single: boolean
    constructor(data: {}, parent?: ModelProxy<any>, parentCollection?: string, single?: boolean, listener?: Listener) {
        this.$persisted = data;
        this.$data = <T>(data||{});
        this.$parent = parent||null;
        this.$listener = listener||new Listener(this);
        this.$single = single===undefined?true:single;
        this.$parentCollection = parentCollection||'';
    }
    @Enumerable(false)
    get key(): number {
        let data = this.$data as any, key = data.key;
        key || Object.defineProperty(data, 'key', {enumerable: false, value: key = JsonProxyKeygey()});
        return key;
    }
    @Enumerable(false)
    get p() {
        return this.$parent.forWatcher(this.$listener.node);
    }
    forWatcher(watcher?: Watcher): this {
        let ctor = this.constructor as new (data: {}, parent: ModelProxy<any>, parentCollection: string, single: boolean, listener: Listener) => this;
        let ret = new ctor(this.$data, this.$parent, this.$parentCollection, this.$single, new Listener(this.$listener, watcher));
        ret.$persisted = this.$persisted;
        return ret;
    }
    get(element: string): any {
        this.$listener.depend(this.key, element);
        return this.$data[element];
    }
    getSubset<C extends IArfSet, P extends ModelProxy<C>>(element: string, proxyClass: new (data: C, parent: ModelProxy<any>, parentCollection: string, single: boolean, listener: Listener) => P): P {
        if(element) {
            return new proxyClass( this.get(element), this, element, true, this.$listener );
        }
        return new proxyClass( <any>this.$data, this, null, true, this.$listener );
    }
    getSublist<C extends IArfSet, P extends ModelProxy<C>>(element: string, proxyClass: new (data: C, parent: ModelProxy<any>, parentCollection: string, single: boolean, listener: Listener) => P): Array<P> {
        return new JsonProxyArray<P, C>(this, element, proxyClass);
    }
    append(element: string, single?: boolean, data?: any) {
        this.persist();
        if(element) {
            if(single) {
                let obj: {} = this.$data[ element ];
                if( !obj || typeof obj !== 'object' ) {
                    obj = this.$data[ element ] = data||{};
                    this.$listener.notify(this.key, element, 'a');
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
                this.$listener.notify(this.key, element, 'a');
                return obj;
            }
        }
        return this.$data;
    }
    set(element: string, value?: any) {
        if(value === undefined || value === null || value === '') {
            if(this.$data.hasOwnProperty(element)) {
                delete this.$data[element];
                this.$listener.notify(this.key, element, 'd');
            }
        } else {
            this.persist();
            if(this.$data[element] !== value) {
                this.$data[element] = value;
                this.$listener.notify(this.key, element, 'm');
            }
        }
        return value;
    }
    persist() {
        if(this.isShadow() && this.$parent) {
            // TODO: merge ? 
            this.$persisted = this.$data = this.$parent.append(this.$parentCollection, this.$single, this.$data);
        }
    }
    detach() {
        if(this.$parent) {
            if(this.$persisted) {
                if(this.$parentCollection) {
                    let collection: {}[] = this.$parent.$data[this.$parentCollection];
                    if(collection) {
                        collection.splice(collection.indexOf(this.$persisted), 1);
                        collection.length || delete this.$parent.$data[this.$parentCollection];
                        this.$listener.notify(this.$parent.key, this.$parentCollection, 'r');
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
    isShadow() {
        return !this.$persisted;
    }
    hasChild(other: ModelProxy<any>): boolean {
        for(; other && this.$data !== other.$data; other = other.$parent) {}
        return !!other;
    }
}

export namespace ProxyUtils {
    export function castAs<T extends IArfSet>(data: {}, impl: new (data: {}, parent?: any, parentCollection?: any, single?: boolean) => ModelProxy<T>) : T {
        return typeof impl === "function" ? <any>(new impl(data, null, null, true)) : data;
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
        if(proto instanceof JsonProxyArray) {
            return castAs(data, (<JsonProxyArray<ModelProxy<T>, T>>proto).$clazz);
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
        } else if( dest instanceof JsonProxyArray ) {
            mergeArrays(<any>dest, <any>src, deleteMissing);
        } else {
            throw "Not an instance of supported class";
        }
        return dest;
    }

    function mergeSubstet<S, D extends S>(dest: ModelProxy<D>, other: S, deleteMissing: boolean) {
        // TODO: it would be nice to memorize list of cloneable properties for every class
        // perhaps make map (ctor, ctor) => {list of properties to copy}, like Java proxies do in "reflect/copy"
        let myFields: Set<string> = new Set(), otherFields: Set<string> = new Set(), writeEmpty = !(other instanceof ModelProxy);
        Object.keys(dest.constructor.prototype).forEach(prop => prop.charAt(0) !== '$' && prop !== 'constructor' && myFields.add(prop) );
        if(typeof other === 'object' && other !== null) {
            Object.keys(other instanceof ModelProxy ? dest.constructor.prototype : other).forEach(prop => otherFields.add(prop));
        }
        let prefix = deleteMissing ? '$_r_' : '$_c_', func;
        myFields.forEach( prop => {
            if( typeof (func = (<any>dest)[prefix + prop]) === 'function' ) {
                otherFields.has(prop) ? func.call(dest, (<any>other)[prop]) : deleteMissing && func.call(dest);
            } else {
                let v: any = otherFields.has(prop) ? (<any>other)[prop] : undefined;
                if(v !== null && v !== undefined && (v !== "" || writeEmpty) && v !== false || deleteMissing) {
                    (<any>dest)[prop] = v;
                }
            }
        });
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