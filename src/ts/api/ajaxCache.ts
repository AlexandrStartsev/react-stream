import {AsyncContextBase, ChoiceInfo, required} from "./dfe-stream"

interface CacheInterface<T> {
    get(key: string, compute: (key?: string) => T): T
    set(key: string, value: T): void
    has(key: string): boolean
    clear(): void
    getAccessedSince(cutOff: number): {[index: string]: T}
    expireAfter(key: string, millis: number): void
}

class CacheImpl<T> implements CacheInterface<T> {
    storage: Map<string, {value: T, timeStamp: number}> // {[index: string]: {value: T, timeStamp: number}}
    cleanupTimer: number
    options: {lifespan?: number, maxSize?: number}
    constructor(options?: {lifespan?: number, maxSize?: number}) {
        this.storage = new Map();
        this.cleanupTimer = 0;
        this.options = Object.assign({lifespan: 0, maxSize: 0}, {...options||{}});
    }
    get(key: string, compute: (key?: string) => T) {
        if(this.storage.has(key)) {
            let data = this.storage.get(key), now = +new Date();
            if(this.options.lifespan <= 0 || data.timeStamp + this.options.lifespan > now) {
                data.timeStamp = now;
                return data.value;
            }
        }
        let value = compute(key);
        this.set(key, value);
        return value;
    }
    set(key: string, value: T) {
        let data = {timeStamp: +new Date(), value: value}
        this.storage.set(key, data);
        this.cleanupTimer || this.options.lifespan > 0 && (this.cleanupTimer = setInterval(() => this.cleanup(), 1000) as any);
        let size = this.storage.size || (this.storage as any).length;
        if( this.options.maxSize > 0 && size > this.options.maxSize ) {
            let first: string, set = false;
            this.storage.forEach((_, key) => set || (set = true, first = key));
            this.storage.delete(first);
        }
    }
    expireAfter(key: string, millis: number) {
        if(this.options.lifespan > 0 && this.storage.has(key)) {
            let data = this.storage.get(key), now = +new Date();
            data.timeStamp = now - this.options.lifespan + millis;
        }
    }
    has(key: string) {
        let data = this.storage.get(key);
        return !!data && ( this.options.lifespan <= 0 || data.timeStamp + this.options.lifespan > +new Date() );
    }
    clear() {
        this.storage.clear();
        this.cleanupTimer && clearInterval(this.cleanupTimer);
        this.cleanupTimer = 0;
    }
    private cleanup() {
        let cutOff = +new Date() - this.options.lifespan;
        this.storage.forEach((value, key) => value.timeStamp <= cutOff && this.storage.delete(key));
        if(this.storage.size === 0) {
            clearInterval(this.cleanupTimer);
            this.cleanupTimer = 0;
        }
    }
    getAccessedSince(cutOff: number) {
        let ret: {[index: string]: T} = {};
        this.storage.forEach((value, key) => value.timeStamp >= cutOff && (ret[key] = value.value));
        return ret;
    }
}

export declare var Java: {type: (javaClass: string) => any}
const JavaCacheBuilder = typeof Java !== 'undefined' ? Java.type('com.google.common.cache.CacheBuilder') : null;
const JavaTimeUnit = typeof Java !== 'undefined' ? Java.type('java.util.concurrent.TimeUnit') : null;

class GuavaCache<T> implements CacheInterface<T> {
    impl: any
    constructor(options?: {lifespan?: number, maxSize?: number}) {
        let builder = JavaCacheBuilder.newBuilder();
        options && (
            options.lifespan && builder.expireAfterAccess(options.lifespan, JavaTimeUnit.MILLISECONDS), 
            options.maxSize && builder.maximumSize(options.maxSize)
        );
        this.impl = builder.build();
    }
    get(key: string, compute: (key?: string) => T) { 
        let val = this.impl.get(key, (key: string) => ({value: compute(key)}));
        val.timeStamp = +new Date();
        return val.value;
    }
    set(key: string, value: T) {
        this.impl.put(key, {value: value, timeStamp: +new Date()});
    }
    has(key: string) {
        return this.impl.getIfPresent(key) !== null;
    }
    clear() {
        return this.impl.invalidateAll();
    }
    expireAfter(key: string, millis: number) {
        setTimeout(() => this.impl.invalidate(key), millis);
    }
    getAccessedSince(cutOff: number) {
        let ret: {[index: string]: T} = {};
        this.impl.asMap().forEach((key: string, value: {value: T, timeStamp: number}) => value.timeStamp >= cutOff && (ret[key] = value.value));
        return ret;
    }
}

const newCache: <T>(options?: {lifespan?: number, maxSize?: number}) => CacheInterface<T> = JavaCacheBuilder ? options => new GuavaCache(options) : options => new CacheImpl(options)

export class Cache<T> implements CacheInterface<T> {
    impl: CacheInterface<T>
    constructor(options?: {lifespan?: number, maxSize?: number}) {
        this.impl = newCache(options);
    }
    get(key: string, compute: (key?: string) => T) { 
        return this.impl.get(key, compute);
    }
    set(key: string, value: T) {
        this.impl.set(key, value);
    }
    has(key: string) {
        return this.impl.has(key);
    }
    clear() {
        return this.impl.clear();
    }
    getAccessedSince(cutOff: number) {
        return this.impl.getAccessedSince(cutOff);
    }
    expireAfter(key: string, millis: number) {
        this.impl.expireAfter(key, millis);
    }
}


export class ImmediatePromise {
    done?: "rejected" | "success"
    result?: any
    promise?: Promise<any>
}

export interface AjaxCacheQuery { 
    dataType?: string
    type?: string
    data?: any
    headers?: {[prop: string] : any}
    url?: string
}

declare const ENV: {server: boolean};

export let ajaxCache = {
    storage: new Cache<ImmediatePromise>({lifespan: 60000, maxSize: 1000}),
    get: function( opt: AjaxCacheQuery | string | {[prop: string] : any} ): ImmediatePromise {
        let base = ENV.server ? "https://arrowheadexchange.com/AJAXServlet.srv?" : "/AJAXServlet.srv?";
        if(typeof opt !== 'string' && !(<AjaxCacheQuery>opt).url) { // method: ... action: ...
            let u = base;
            for(var o in opt) {
                let a = (<{ [prop: string] : any }>opt)[o];
                (Array.isArray(a)?a:[a]).forEach(
                    (v: any) => u += encodeURIComponent(o) + '=' + encodeURIComponent(typeof v == 'object' ? JSON.stringify(v) : v) + '&'
                )
            }
            opt = u.replace(/\&$/,'');
        }
        let url = typeof opt === 'string' ? opt : (<AjaxCacheQuery>opt).url, key = encodeURIComponent(url.replace(base, ''))
        
        let storage = this.storage;
        return storage.get(key,
            () => {
                let ret: ImmediatePromise = {}
                ret.promise = new Promise((resolve, reject) => {
                    let xhr = new XMLHttpRequest();
                    try {
                        let dataType = (<AjaxCacheQuery>opt).dataType || 'json', so = typeof (<AjaxCacheQuery>opt).data === 'object';
                        let hrds: {[prop: string] : any} = {'Content-Type' : so ? 'application/json' : 'application/x-www-form-urlencoded', ...(<AjaxCacheQuery>opt).headers};
                        xhr.open((<AjaxCacheQuery>opt).type || 'GET', so ? url : url + '&cacheKey=' + key);
                        for(let i in hrds) xhr.setRequestHeader(i, hrds[i]);
                        dataType == 'json' && xhr.setRequestHeader('Accept', 'application/json');
                        xhr.onreadystatechange = function() {
                            if(this.readyState === 4) {
                                ret.done = "success";
                                if(this.status == 200)
                                    try {
                                        let r = this.response || this.responseText;
                                        resolve(ret.result = typeof r == 'string' && dataType == 'json' ? JSON.parse(r) : r)
                                    } catch(e) {
                                        ret.done = "rejected";
                                        reject(ret.result = e);
                                        storage.expireAfter(key, 1000);
                                    }
                                else {
                                    ret.done = "rejected";
                                    reject(ret.result = xhr);
                                    storage.expireAfter(key, 1000);
                                }
                            }
                        }
                        xhr.send(so ? {cacheKey: key, ...(<AjaxCacheQuery>opt).data} : (<AjaxCacheQuery>opt).data);
                    } catch(e) {
                        ret.done = "rejected";
                        reject(ret.result = e);
                        storage.expireAfter(key, 1000);
                    }
                })
                return ret;
            }
        );
    }
}

export enum AjaxStatus {
    error='error',
    loading='loading',
    done='done'
}

export interface AjaxChoiceInfo<T> extends ChoiceInfo<T> {
    status: AjaxStatus,
    errorMessage: string
}

export interface AjaxFeedParams<T> {
    query?: string | AjaxCacheQuery | {[index: string]: any}
    headers?: {[prop: string] : any}
    mapper?: (record: any) => {value: T, description: string}
}

export function ajaxRequired<T, M>(value: AjaxChoiceInfo<T>, model: M, context: AsyncContextBase) {
    let {status, errorMessage} = value;
    if(status === 'done') {
        if(value.items.length === 0) {
            return 'Not found'
        }
        return required(value);
    }
    return status === 'loading' ? context.lastError() : errorMessage || 'Ajax error';
}

export function ajaxFeed<T>(context: AsyncContextBase, value: T, args: AjaxFeedParams<T>): AjaxChoiceInfo<T> {
    const onSuccess = function (data: any, ctx: AsyncContextBase){
        try {
            let items: any[] = Array.isArray(data && data.result) ? data.result : [];
            ctx.result({ 
                value : value,
                items: args.mapper ? items.map(args.mapper) : items,
                status: AjaxStatus.done
            });
        } catch (e) {
            ctx.result({value : value, items: [], status: AjaxStatus.error, errorMessage: e.message});
        }
    }
    const onReject = (xhr: XMLHttpRequest|Error, ctx: AsyncContextBase) => {
        ctx.result({ 
            value : value,
            items: [],
            status: AjaxStatus.error,
            errorMessage: xhr instanceof XMLHttpRequest ? xhr.responseText.substr(0, 500) + "..." : xhr.message
        })
    };
    let p = ajaxCache.get(args.query);
    if(!p.done) {
        context.await(p.promise, onSuccess, onReject);
        context.result({value : value, items: [{value: undefined, description: "Loading..."}], status: AjaxStatus.loading});
    } else {
        ( p.done==="success" ? onSuccess : onReject )(p.result, context);
    }
    return undefined;
}
