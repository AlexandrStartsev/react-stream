// Promise
typeof Promise === "undefined" && !function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.ES6Promise=e()}(this,function(){"use strict";function t(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}function e(t){return"function"==typeof t}function n(t){B=t}function r(t){G=t}function o(){return function(){return process.nextTick(a)}}function i(){return"undefined"!=typeof z?function(){z(a)}:c()}function s(){var t=0,e=new J(a),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function u(){var t=new MessageChannel;return t.port1.onmessage=a,function(){return t.port2.postMessage(0)}}function c(){var t=setTimeout;return function(){return t(a,1)}}function a(){for(var t=0;t<W;t+=2){var e=V[t],n=V[t+1];e(n),V[t]=void 0,V[t+1]=void 0}W=0}function f(){try{var t=Function("return this")().require("vertx");return z=t.runOnLoop||t.runOnContext,i()}catch(e){return c()}}function l(t,e){var n=this,r=new this.constructor(p);void 0===r[Z]&&O(r);var o=n._state;if(o){var i=arguments[o-1];G(function(){return P(o,r,i,n._result)})}else E(n,r,t,e);return r}function h(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(p);return g(n,t),n}function p(){}function v(){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")}function _(t){try{return t.then}catch(e){return nt.error=e,nt}}function y(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function m(t,e,n){G(function(t){var r=!1,o=y(n,e,function(n){r||(r=!0,e!==n?g(t,n):S(t,n))},function(e){r||(r=!0,j(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,j(t,o))},t)}function b(t,e){e._state===tt?S(t,e._result):e._state===et?j(t,e._result):E(e,void 0,function(e){return g(t,e)},function(e){return j(t,e)})}function w(t,n,r){n.constructor===t.constructor&&r===l&&n.constructor.resolve===h?b(t,n):r===nt?(j(t,nt.error),nt.error=null):void 0===r?S(t,n):e(r)?m(t,n,r):S(t,n)}function g(e,n){e===n?j(e,v()):t(n)?w(e,n,_(n)):S(e,n)}function A(t){t._onerror&&t._onerror(t._result),T(t)}function S(t,e){t._state===$&&(t._result=e,t._state=tt,0!==t._subscribers.length&&G(T,t))}function j(t,e){t._state===$&&(t._state=et,t._result=e,G(A,t))}function E(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+tt]=n,o[i+et]=r,0===i&&t._state&&G(T,t)}function T(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?P(n,r,o,i):o(i);t._subscribers.length=0}}function M(t,e){try{return t(e)}catch(n){return nt.error=n,nt}}function P(t,n,r,o){var i=e(r),s=void 0,u=void 0,c=void 0,a=void 0;if(i){if(s=M(r,o),s===nt?(a=!0,u=s.error,s.error=null):c=!0,n===s)return void j(n,d())}else s=o,c=!0;n._state!==$||(i&&c?g(n,s):a?j(n,u):t===tt?S(n,s):t===et&&j(n,s))}function x(t,e){try{e(function(e){g(t,e)},function(e){j(t,e)})}catch(n){j(t,n)}}function C(){return rt++}function O(t){t[Z]=rt++,t._state=void 0,t._result=void 0,t._subscribers=[]}function k(){return new Error("Array Methods must be provided an Array")}function F(t){return new ot(this,t).promise}function Y(t){var e=this;return new e(U(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function q(t){var e=this,n=new e(p);return j(n,t),n}function D(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function K(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function L(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;if(n){var r=null;try{r=Object.prototype.toString.call(n.resolve())}catch(e){}if("[object Promise]"===r&&!n.cast)return}t.Promise=it}var N=void 0;N=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var U=N,W=0,z=void 0,B=void 0,G=function(t,e){V[W]=t,V[W+1]=e,W+=2,2===W&&(B?B(a):X())},H="undefined"!=typeof window?window:void 0,I=H||{},J=I.MutationObserver||I.WebKitMutationObserver,Q="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),R="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,V=new Array(1e3),X=void 0;X=Q?o():J?s():R?u():void 0===H&&"function"==typeof require?f():c();var Z=Math.random().toString(36).substring(2),$=void 0,tt=1,et=2,nt={error:null},rt=0,ot=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(p),this.promise[Z]||O(this.promise),U(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?S(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&S(this.promise,this._result))):j(this.promise,k())}return t.prototype._enumerate=function(t){for(var e=0;this._state===$&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===h){var o=_(t);if(o===l&&t._state!==$)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===it){var i=new n(p);w(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===$&&(this._remaining--,t===et?j(r,n):this._result[e]=n),0===this._remaining&&S(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;E(t,void 0,function(t){return n._settledAt(tt,e,t)},function(t){return n._settledAt(et,e,t)})},t}(),it=function(){function t(e){this[Z]=C(),this._result=this._state=void 0,this._subscribers=[],p!==e&&("function"!=typeof e&&D(),this instanceof t?x(this,e):K())}return t.prototype["catch"]=function(t){return this.then(null,t)},t.prototype["finally"]=function(t){var e=this,n=e.constructor;return e.then(function(e){return n.resolve(t()).then(function(){return e})},function(e){return n.resolve(t()).then(function(){throw e})})},t}();return it.prototype.then=l,it.all=F,it.race=Y,it.resolve=h,it.reject=q,it._setScheduler=n,it._setAsap=r,it._asap=G,it.polyfill=L,it.Promise=it,it.polyfill(),it});

// WeakMap
(function(e){"use strict";if(e.WeakMap){return}var t=Object.prototype.hasOwnProperty;var r=function(e,t,r){if(Object.defineProperty){Object.defineProperty(e,t,{configurable:true,writable:true,value:r})}else{e[t]=r}};e.WeakMap=function(){function WeakMap(){if(this===void 0){throw new TypeError("Constructor WeakMap requires 'new'")}r(this,"_id",genId("_WeakMap"));if(arguments.length>0){throw new TypeError("WeakMap iterable is not supported")}}r(WeakMap.prototype,"delete",function(e){checkInstance(this,"delete");if(!isObject(e)){return false}var t=e[this._id];if(t&&t[0]===e){delete e[this._id];return true}return false});r(WeakMap.prototype,"get",function(e){checkInstance(this,"get");if(!isObject(e)){return void 0}var t=e[this._id];if(t&&t[0]===e){return t[1]}return void 0});r(WeakMap.prototype,"has",function(e){checkInstance(this,"has");if(!isObject(e)){return false}var t=e[this._id];if(t&&t[0]===e){return true}return false});r(WeakMap.prototype,"set",function(e,t){checkInstance(this,"set");if(!isObject(e)){throw new TypeError("Invalid value used as weak map key")}var n=e[this._id];if(n&&n[0]===e){n[1]=t;return this}r(e,this._id,[e,t]);return this});function checkInstance(e,r){if(!isObject(e)||!t.call(e,"_id")){throw new TypeError(r+" method called on incompatible receiver "+typeof e)}}function genId(e){return e+"_"+rand()+"."+rand()}function rand(){return Math.random().toString().substring(2)}r(WeakMap,"_polyfill",true);return WeakMap}();function isObject(e){return Object(e)===e}})(typeof self!=="undefined"?self:typeof window!=="undefined"?window:typeof global!=="undefined"?global:this);

(function(g){
var Symbol = g.Symbol||(g.Symbol = {});
Symbol.iterator || (Symbol.iterator='Symbol(Symbol.iterator)')
Symbol.toStringTag || (Symbol.toStringTag='Symbol(Symbol.toStringTag)')

Array.isArray || (Array.isArray = function(o) { return o instanceof Array })
Array.prototype.forEach || (Array.prototype.forEach = function(f, a) { for(var i = 0; i < this.length; i++) f.call(a, this[i], i, this) })
Array.prototype.indexOf || (Array.prototype.indexOf = function(e) { var i=this.length-1; for(;i>=0 && this[i] != e;i--); return i; })
Array.prototype.filter || (Array.prototype.filter = function(f, a) { var r=[],i; for(i=0; i < this.length; i++) f.call(a, this[i], i, this) && r.push(this[i]); return r } )
Array.prototype.map || (Array.prototype.map = function(f, a) { var r=[],i; for(i=0; i < this.length; i++) r.push(f.call(a, this[i], i, this)); return r } )
Array.from || (Array.from = function(s) { 
    var r = [], o;
    Symbol && Symbol.iterator && (typeof s[Symbol.iterator] === 'function') && (s=s[Symbol.iterator]());
    if(typeof s.next === 'function') 
        while(!(o=s.next()).done) 
            r.push(o.value); 
    else 
        s.forEach(function(e) { r.push(e); } ); 
    return r; 
})
if (typeof Object.assign != 'function') {
    Object.assign = function(target) {
        'use strict';
        if (target == null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }
        target = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source != null) {
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
        }
        return target;
    };
}

    g.Map || (g.Map = function(i) { this.size = 0; i && Array.from(i).forEach(function(a) { a=Array.from(a); this.set(a[0], a[1]) }, this) },
    Map.prototype.clear = function() { delete this.head; this.size = 0; },
    Map.prototype[Symbol.iterator] = function() {
        return {
            pos: this.head,
            next: function () {
                return this.pos ? (r = { value: [this.pos.key, this.pos.value], done: false }, (this.pos=this.pos.next), r) : { done : true };
            }
        }
    },
    Map.prototype.keys = function() {
        return {
            pos: this.head,
            next: function () {
                return this.pos ? (r = { value: this.pos.key, done: false }, (this.pos=this.pos.next), r) : { done : true };
            }
        }
    },
    Map.prototype.values = function() {
        return {
            pos: this.head,
            next: function () {
                return this.pos ? (r = { value: this.pos.value, done: false }, (this.pos=this.pos.next), r) : { done : true };
            }
        }
    },        
    Map.prototype.entries = Map.prototype[Symbol.iterator],
    Map.prototype.set = function(k,v) {
        if(!this.head) {
            this.head = {key: k, value: v};
            this.size++;
        } else {
            if(this.head.key == k) {
                this.head.value = v;
            } else {
                var h = this.head;
                for(; h.next && h.next.key != k; h=h.next) ;
                if(!h.next) {
                    h.next = {key: k};
                    this.size++;
                }
                h.next.value = v;
            }
        }
        return this; 
    },
    Map.prototype['delete'] = function(k) {
        if(this.head) {
            if(this.head.key == k) {
                this.head = this.head.next;
                this.size--;
                return true;
            } else {
                var h = this.head;
                for(; h.next && h.next.key != k ; h=h.next);
                if(h.next) {
                    h.next = h.next.next;
                    this.size --;
                    return true;
                }
            }
        }
        return false;
    },
    Map.prototype.get = function(k) {
        var h = this.head;
        for(; h; h=h.next) 
            if(h && h.key == k) return h.value;
    },
    Map.prototype.has = function(k) { return typeof this.get(k) !== 'undefined'; },
    Map.prototype.forEach = function(f, a) {
        var h = this.head;
        for(; h; h=h.next) 
            f.call(a, h.value, h.key, this);
    },
    Map.prototype.keys = function() { var ret = []; for(var h = this.head; h; h=h.next)  ret.push(h.key);  return ret;},
    Map.prototype.values = function() { var ret = []; for(var h = this.head; h; h=h.next)  ret.push(h.value);  return ret;},
    Map)
    
    g.Set || (g.Set = function(i) { this.size = 0; i && Array.from(i).forEach(function(v) { this.add(v) }, this) },
    Set.prototype[Symbol.iterator] = function() {
        return {
            pos: this.head,
            next: function () {
                return this.pos ? (r = { value: this.pos.key, done: false }, (this.pos=this.pos.next), r) : { done : true };
            }
        }
    },
    Set.prototype.keys = Set.prototype[Symbol.iterator],
    Set.prototype.entries = Set.prototype[Symbol.iterator],
    Set.prototype.add = function(k) {
        if(!this.head) {
            this.head = {key: k};
            this.size++;
        } else {
            if(this.head.key != k) {
                var h = this.head;
                for(; h.next && h.next.key != k; h=h.next) ;
                if(!h.next) {
                    h.next = {key: k};
                    this.size++;
                }
            }
        }
        return this; 
    },
    Set.prototype.clear = function() { delete this.head; this.size = 0; },
    Set.prototype['delete'] = function(k) {
        if(this.head) {
            if(this.head.key == k) {
                this.head = this.head.next;
                this.size--;
                return true;
            } else {
                var h = this.head;
                for(; h.next && h.next.key != k ; h=h.next);
                if(h.next) {
                    h.next = h.next.next;
                    this.size --;
                    return true;
                }
            }
        }
        return false;
    },
    Set.prototype.forEach = function (f, a) {
        for(var h = this.head; h; h=h.next) 
            f.call(a, h.key, this);
    },
    Set.prototype.has = function(k) { 
        for(var h = this.head; h; h=h.next) 
            if(h && h.key == k) return true;
        return false;
    },
    Set)

})("undefined"!==typeof window?window:global)