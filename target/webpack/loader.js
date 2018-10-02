/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"loader": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/ts/loader.tsx","vendors~loader"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/es-polyfill.js":
/*!**********************************!*\
  !*** ./resources/es-polyfill.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {// Promise
typeof Promise === "undefined" && !function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";function t(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}function e(t){return"function"==typeof t}function n(t){B=t}function r(t){G=t}function o(){return function(){return process.nextTick(a)}}function i(){return"undefined"!=typeof z?function(){z(a)}:c()}function s(){var t=0,e=new J(a),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function u(){var t=new MessageChannel;return t.port1.onmessage=a,function(){return t.port2.postMessage(0)}}function c(){var t=setTimeout;return function(){return t(a,1)}}function a(){for(var t=0;t<W;t+=2){var e=V[t],n=V[t+1];e(n),V[t]=void 0,V[t+1]=void 0}W=0}function f(){try{var t=Function("return this")().require("vertx");return z=t.runOnLoop||t.runOnContext,i()}catch(e){return c()}}function l(t,e){var n=this,r=new this.constructor(p);void 0===r[Z]&&O(r);var o=n._state;if(o){var i=arguments[o-1];G(function(){return P(o,r,i,n._result)})}else E(n,r,t,e);return r}function h(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(p);return g(n,t),n}function p(){}function v(){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")}function _(t){try{return t.then}catch(e){return nt.error=e,nt}}function y(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function m(t,e,n){G(function(t){var r=!1,o=y(n,e,function(n){r||(r=!0,e!==n?g(t,n):S(t,n))},function(e){r||(r=!0,j(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,j(t,o))},t)}function b(t,e){e._state===tt?S(t,e._result):e._state===et?j(t,e._result):E(e,void 0,function(e){return g(t,e)},function(e){return j(t,e)})}function w(t,n,r){n.constructor===t.constructor&&r===l&&n.constructor.resolve===h?b(t,n):r===nt?(j(t,nt.error),nt.error=null):void 0===r?S(t,n):e(r)?m(t,n,r):S(t,n)}function g(e,n){e===n?j(e,v()):t(n)?w(e,n,_(n)):S(e,n)}function A(t){t._onerror&&t._onerror(t._result),T(t)}function S(t,e){t._state===$&&(t._result=e,t._state=tt,0!==t._subscribers.length&&G(T,t))}function j(t,e){t._state===$&&(t._state=et,t._result=e,G(A,t))}function E(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+tt]=n,o[i+et]=r,0===i&&t._state&&G(T,t)}function T(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?P(n,r,o,i):o(i);t._subscribers.length=0}}function M(t,e){try{return t(e)}catch(n){return nt.error=n,nt}}function P(t,n,r,o){var i=e(r),s=void 0,u=void 0,c=void 0,a=void 0;if(i){if(s=M(r,o),s===nt?(a=!0,u=s.error,s.error=null):c=!0,n===s)return void j(n,d())}else s=o,c=!0;n._state!==$||(i&&c?g(n,s):a?j(n,u):t===tt?S(n,s):t===et&&j(n,s))}function x(t,e){try{e(function(e){g(t,e)},function(e){j(t,e)})}catch(n){j(t,n)}}function C(){return rt++}function O(t){t[Z]=rt++,t._state=void 0,t._result=void 0,t._subscribers=[]}function k(){return new Error("Array Methods must be provided an Array")}function F(t){return new ot(this,t).promise}function Y(t){var e=this;return new e(U(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function q(t){var e=this,n=new e(p);return j(n,t),n}function D(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function K(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function L(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;if(n){var r=null;try{r=Object.prototype.toString.call(n.resolve())}catch(e){}if("[object Promise]"===r&&!n.cast)return}t.Promise=it}var N=void 0;N=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var U=N,W=0,z=void 0,B=void 0,G=function(t,e){V[W]=t,V[W+1]=e,W+=2,2===W&&(B?B(a):X())},H="undefined"!=typeof window?window:void 0,I=H||{},J=I.MutationObserver||I.WebKitMutationObserver,Q="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),R="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,V=new Array(1e3),X=void 0;X=Q?o():J?s():R?u():void 0===H&&"function"=="function"?f():c();var Z=Math.random().toString(36).substring(2),$=void 0,tt=1,et=2,nt={error:null},rt=0,ot=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(p),this.promise[Z]||O(this.promise),U(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?S(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&S(this.promise,this._result))):j(this.promise,k())}return t.prototype._enumerate=function(t){for(var e=0;this._state===$&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===h){var o=_(t);if(o===l&&t._state!==$)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===it){var i=new n(p);w(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===$&&(this._remaining--,t===et?j(r,n):this._result[e]=n),0===this._remaining&&S(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;E(t,void 0,function(t){return n._settledAt(tt,e,t)},function(t){return n._settledAt(et,e,t)})},t}(),it=function(){function t(e){this[Z]=C(),this._result=this._state=void 0,this._subscribers=[],p!==e&&("function"!=typeof e&&D(),this instanceof t?x(this,e):K())}return t.prototype["catch"]=function(t){return this.then(null,t)},t.prototype["finally"]=function(t){var e=this,n=e.constructor;return e.then(function(e){return n.resolve(t()).then(function(){return e})},function(e){return n.resolve(t()).then(function(){throw e})})},t}();return it.prototype.then=l,it.all=F,it.race=Y,it.resolve=h,it.reject=q,it._setScheduler=n,it._setAsap=r,it._asap=G,it.polyfill=L,it.Promise=it,it.polyfill(),it});

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/ts/api/ajaxCache.ts":
/*!*********************************!*\
  !*** ./src/ts/api/ajaxCache.ts ***!
  \*********************************/
/*! exports provided: Cache, ImmediatePromise, ajaxCache, AjaxStatus, ajaxRequired, ajaxFeed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cache", function() { return Cache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImmediatePromise", function() { return ImmediatePromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ajaxCache", function() { return ajaxCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjaxStatus", function() { return AjaxStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ajaxRequired", function() { return ajaxRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ajaxFeed", function() { return ajaxFeed; });
/* harmony import */ var _dfe_stream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dfe-stream */ "./src/ts/api/dfe-stream.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var CacheImpl = /** @class */ (function () {
    function CacheImpl(options) {
        this.storage = new Map();
        this.cleanupTimer = 0;
        this.options = Object.assign({ lifespan: 0, maxSize: 0 }, __assign({}, options || {}));
    }
    CacheImpl.prototype.get = function (key, compute) {
        if (this.storage.has(key)) {
            var data = this.storage.get(key), now = +new Date();
            if (this.options.lifespan <= 0 || data.timeStamp + this.options.lifespan > now) {
                data.timeStamp = now;
                return data.value;
            }
        }
        var value = compute(key);
        this.set(key, value);
        return value;
    };
    CacheImpl.prototype.set = function (key, value) {
        var _this = this;
        var data = { timeStamp: +new Date(), value: value };
        this.storage.set(key, data);
        this.cleanupTimer || this.options.lifespan > 0 && (this.cleanupTimer = setInterval(function () { return _this.cleanup(); }, 1000));
        var size = this.storage.size || this.storage.length;
        if (this.options.maxSize > 0 && size > this.options.maxSize) {
            var first_1, set_1 = false;
            this.storage.forEach(function (_, key) { return set_1 || (set_1 = true, first_1 = key); });
            this.storage.delete(first_1);
        }
    };
    CacheImpl.prototype.expireAfter = function (key, millis) {
        if (this.options.lifespan > 0 && this.storage.has(key)) {
            var data = this.storage.get(key), now = +new Date();
            data.timeStamp = now - this.options.lifespan + millis;
        }
    };
    CacheImpl.prototype.has = function (key) {
        var data = this.storage.get(key);
        return !!data && (this.options.lifespan <= 0 || data.timeStamp + this.options.lifespan > +new Date());
    };
    CacheImpl.prototype.clear = function () {
        this.storage.clear();
        this.cleanupTimer && clearInterval(this.cleanupTimer);
        this.cleanupTimer = 0;
    };
    CacheImpl.prototype.cleanup = function () {
        var _this = this;
        var cutOff = +new Date() - this.options.lifespan;
        this.storage.forEach(function (value, key) { return value.timeStamp <= cutOff && _this.storage.delete(key); });
        if (this.storage.size === 0) {
            clearInterval(this.cleanupTimer);
            this.cleanupTimer = 0;
        }
    };
    CacheImpl.prototype.getAccessedSince = function (cutOff) {
        var ret = {};
        this.storage.forEach(function (value, key) { return value.timeStamp >= cutOff && (ret[key] = value.value); });
        return ret;
    };
    return CacheImpl;
}());
var JavaCacheBuilder = typeof Java !== 'undefined' ? Java.type('com.google.common.cache.CacheBuilder') : null;
var JavaTimeUnit = typeof Java !== 'undefined' ? Java.type('java.util.concurrent.TimeUnit') : null;
var GuavaCache = /** @class */ (function () {
    function GuavaCache(options) {
        var builder = JavaCacheBuilder.newBuilder();
        options && (options.lifespan && builder.expireAfterAccess(options.lifespan, JavaTimeUnit.MILLISECONDS),
            options.maxSize && builder.maximumSize(options.maxSize));
        this.impl = builder.build();
    }
    GuavaCache.prototype.get = function (key, compute) {
        var val = this.impl.get(key, function (key) { return ({ value: compute(key) }); });
        val.timeStamp = +new Date();
        return val.value;
    };
    GuavaCache.prototype.set = function (key, value) {
        this.impl.put(key, { value: value, timeStamp: +new Date() });
    };
    GuavaCache.prototype.has = function (key) {
        return this.impl.getIfPresent(key) !== null;
    };
    GuavaCache.prototype.clear = function () {
        return this.impl.invalidateAll();
    };
    GuavaCache.prototype.expireAfter = function (key, millis) {
        var _this = this;
        setTimeout(function () { return _this.impl.invalidate(key); }, millis);
    };
    GuavaCache.prototype.getAccessedSince = function (cutOff) {
        var ret = {};
        this.impl.asMap().forEach(function (key, value) { return value.timeStamp >= cutOff && (ret[key] = value.value); });
        return ret;
    };
    return GuavaCache;
}());
var newCache = JavaCacheBuilder ? function (options) { return new GuavaCache(options); } : function (options) { return new CacheImpl(options); };
var Cache = /** @class */ (function () {
    function Cache(options) {
        this.impl = newCache(options);
    }
    Cache.prototype.get = function (key, compute) {
        return this.impl.get(key, compute);
    };
    Cache.prototype.set = function (key, value) {
        this.impl.set(key, value);
    };
    Cache.prototype.has = function (key) {
        return this.impl.has(key);
    };
    Cache.prototype.clear = function () {
        return this.impl.clear();
    };
    Cache.prototype.getAccessedSince = function (cutOff) {
        return this.impl.getAccessedSince(cutOff);
    };
    Cache.prototype.expireAfter = function (key, millis) {
        this.impl.expireAfter(key, millis);
    };
    return Cache;
}());

var ImmediatePromise = /** @class */ (function () {
    function ImmediatePromise() {
    }
    return ImmediatePromise;
}());

var ajaxCache = {
    storage: new Cache({ lifespan: 60000, maxSize: 1000 }),
    get: function (opt) {
        var base =  false ? undefined : "/AJAXServlet.srv?";
        if (typeof opt !== 'string' && !opt.url) { // method: ... action: ...
            var u_1 = base;
            for (var o in opt) {
                var a = opt[o];
                (Array.isArray(a) ? a : [a]).forEach(function (v) { return u_1 += encodeURIComponent(o) + '=' + encodeURIComponent(typeof v == 'object' ? JSON.stringify(v) : v) + '&'; });
            }
            opt = u_1.replace(/\&$/, '');
        }
        var url = typeof opt === 'string' ? opt : opt.url, key = encodeURIComponent(url.replace(base, ''));
        var storage = this.storage;
        return storage.get(key, function () {
            var ret = {};
            ret.promise = new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                try {
                    var dataType_1 = opt.dataType || 'json', so = typeof opt.data === 'object';
                    var hrds = __assign({ 'Content-Type': so ? 'application/json' : 'application/x-www-form-urlencoded' }, opt.headers);
                    xhr.open(opt.type || 'GET', so ? url : url + '&cacheKey=' + key);
                    for (var i in hrds)
                        xhr.setRequestHeader(i, hrds[i]);
                    dataType_1 == 'json' && xhr.setRequestHeader('Accept', 'application/json');
                    xhr.onreadystatechange = function () {
                        if (this.readyState === 4) {
                            ret.done = "success";
                            if (this.status == 200)
                                try {
                                    var r = this.response || this.responseText;
                                    resolve(ret.result = typeof r == 'string' && dataType_1 == 'json' ? JSON.parse(r) : r);
                                }
                                catch (e) {
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
                    };
                    xhr.send(so ? __assign({ cacheKey: key }, opt.data) : opt.data);
                }
                catch (e) {
                    ret.done = "rejected";
                    reject(ret.result = e);
                    storage.expireAfter(key, 1000);
                }
            });
            return ret;
        });
    }
};
var AjaxStatus;
(function (AjaxStatus) {
    AjaxStatus["error"] = "error";
    AjaxStatus["loading"] = "loading";
    AjaxStatus["done"] = "done";
})(AjaxStatus || (AjaxStatus = {}));
function ajaxRequired(value, model, context) {
    var status = value.status, errorMessage = value.errorMessage;
    if (status === 'done') {
        if (value.items.length === 0) {
            return 'Not found';
        }
        return Object(_dfe_stream__WEBPACK_IMPORTED_MODULE_0__["required"])(value);
    }
    return status === 'loading' ? context.lastError() : errorMessage || 'Ajax error';
}
function ajaxFeed(context, value, args) {
    var onSuccess = function (data, ctx) {
        try {
            var items = Array.isArray(data && data.result) ? data.result : [];
            ctx.result({
                value: value,
                items: args.mapper ? items.map(args.mapper) : items,
                status: AjaxStatus.done
            });
        }
        catch (e) {
            ctx.result({ value: value, items: [], status: AjaxStatus.error, errorMessage: e.message });
        }
    };
    var onReject = function (xhr, ctx) {
        ctx.result({
            value: value,
            items: [],
            status: AjaxStatus.error,
            errorMessage: xhr instanceof XMLHttpRequest ? xhr.responseText.substr(0, 500) + "..." : xhr.message
        });
    };
    var p = ajaxCache.get(args.query);
    if (!p.done) {
        context.await(p.promise, onSuccess, onReject);
        context.result({ value: value, items: [{ value: undefined, description: "Loading..." }], status: AjaxStatus.loading });
    }
    else {
        (p.done === "success" ? onSuccess : onReject)(p.result, context);
    }
    return undefined;
}


/***/ }),

/***/ "./src/ts/api/dfe-stream.ts":
/*!**********************************!*\
  !*** ./src/ts/api/dfe-stream.ts ***!
  \**********************************/
/*! exports provided: ValidationStrategy, ContextModel, Field, LogicNode, testChoice, arfDatePattern, required, LogicProcessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationStrategy", function() { return ValidationStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextModel", function() { return ContextModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogicNode", function() { return LogicNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testChoice", function() { return testChoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arfDatePattern", function() { return arfDatePattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "required", function() { return required; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogicProcessor", function() { return LogicProcessor; });
/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proxy */ "./src/ts/api/proxy.ts");

var ValidationStrategy;
(function (ValidationStrategy) {
    ValidationStrategy[ValidationStrategy["None"] = 0] = "None";
    ValidationStrategy[ValidationStrategy["Always"] = 1] = "Always";
    ValidationStrategy[ValidationStrategy["Followup"] = 2] = "Followup";
    ValidationStrategy[ValidationStrategy["Notified"] = 3] = "Notified";
    ValidationStrategy[ValidationStrategy["Validate"] = 4] = "Validate";
})(ValidationStrategy || (ValidationStrategy = {}));
function doValidation(events, vstrategy) {
    vstrategy = vstrategy === undefined ? ValidationStrategy.Validate : vstrategy;
    if (vstrategy === undefined || vstrategy === ValidationStrategy.Validate) {
        return events.some(function (e) { return 'validate' === e.action; });
    }
    return vstrategy === ValidationStrategy.Always || vstrategy === ValidationStrategy.Notified && events[0].action != 'init';
}
function errorwatch(node, target, reducer) {
    var error = '';
    var myModel = node.model;
    var erroringChildren = new _proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"](target === 'peers' ? node.parent : target, null, null, true, node.runtime.evListener).forWatcher(node).get('erroringChildren');
    if (target === 'peers') {
        erroringChildren.forEach(function (node) { return myModel.hasChild(node.model) && (error = reducer ? reducer(error, node.lastError) : node.lastError); });
    }
    else {
        erroringChildren.forEach(function (node) { return error = reducer(error, node.lastError); });
    }
    return error;
}
var ContextModel = /** @class */ (function () {
    function ContextModel(model, unbound, runtime, node) {
        this.$runtime = runtime;
        this.$node = node;
        this.$model = model;
        this.$unbound = unbound;
        this.$await = null;
    }
    ContextModel.prototype.result = function (data, error) {
        var node = this.$node;
        if (data !== undefined) {
            if (error === undefined) {
                var lastNotifications = node.lastNotifications, field = node.field, lastError = node.lastError;
                if (field.errorwatch) {
                    var _a = typeof field.errorwatch === 'object' ? field.errorwatch : {}, _b = _a.target, target = _b === void 0 ? node : _b, _c = _a.accept, accept = _c === void 0 ? function (a, b) { return b; } : _c;
                    error = errorwatch(node, target, accept);
                }
                else {
                    var validationResult = '';
                    try {
                        validationResult = (lastError || doValidation(lastNotifications, field.vstrategy)) && field.val && field.val(data, node.model, this, lastNotifications) || '';
                    }
                    catch (e) {
                        validationResult = e.message || 'exception';
                    }
                    error = typeof validationResult === 'string' ? validationResult : '';
                }
            }
            node.accept(data, error);
        }
        else {
            if (error !== undefined) {
                node.accept(node.lastData, error);
            }
        }
    };
    ContextModel.prototype.reject = function () {
        this.$node.notify({ action: 'notify' });
    };
    ContextModel.prototype.destroy = function () {
        this.$await = null;
        this.$model.$listener.undepend();
    };
    ContextModel.prototype.await = function (promise, onSuccess, onReject) {
        var _this = this;
        this.$await = promise.then(function (a) { return (_this.$await = null, onSuccess && onSuccess(a, _this)); }, function (b) { return (_this.$await = null, onReject && onReject(b, _this)); });
    };
    ContextModel.prototype.lastError = function () {
        return this.$node.lastError;
    };
    return ContextModel;
}());

var Field = /** @class */ (function () {
    function Field(props) {
        this.children = [];
        this.children = [];
        this.get = function (model) { return model; };
        Object.assign(this, props);
    }
    Field.prototype.with = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.children = args.reduce(function (out, cur) { return out.concat(cur); }, []).filter(function (o) { return o instanceof Field; });
        return this;
    };
    return Field;
}());

var LogicNode = /** @class */ (function () {
    function LogicNode(parent, field, proxy, runtime) {
        this.notifications = [];
        this.children = new Map();
        this.erroringChildren = new Set();
        var unbound = proxy.forWatcher();
        this.parent = parent;
        this.runtime = runtime;
        this.key = "field:" + unbound.key; //field.name + '-' + unbound.key;
        this.field = field;
        this.model = unbound.forWatcher(this);
        this.context = new ContextModel(this.model, unbound, runtime, this);
    }
    LogicNode.prototype.notify = function (action) {
        var _a;
        if (!this.terminated) {
            Array.isArray(action) ? (_a = this.notifications).splice.apply(_a, [this.notifications.length, 0].concat(action)) : this.notifications.push(action || { action: 'self' });
            this.runtime.scheduleWork(this);
        }
        return this;
    };
    LogicNode.prototype.accept = function (data, error) {
        if (!this.terminated) {
            var childrenFields = this.field.children;
            if (data !== undefined) {
                // todo: evaliate lastData vs data and maybe skip rendering/child reconciliation 
                if (!this.field.errorwatch) {
                    error ? this.runtime.notifyErroring(this) : this.runtime.clearError(this);
                }
                if (childrenFields.length) {
                    var arr = data && typeof data === 'object' ? (Array.isArray(data) ? data : [data]) : [];
                    // ??
                    //arr.map(d => d instanceof JsonProxy ? d : new JsonProxy(d));
                    this.runtime.reconcileChildren(this, arr, this.lastNotifications);
                }
                this.lastData = data;
                this.lastError = error;
                this.consumer && this.consumer.accept(data, error);
                //this.shouldRender = true;
                this.runtime.scheduleWork(this);
            }
            else {
                error && (this.lastError = error) && this.runtime.notifyErroring(this);
            }
        }
    };
    LogicNode.prototype.terminate = function () {
        //this.control.destroy();
        if (!this.terminated) {
            this.context.destroy();
            if (this.parent) {
                var fieldMap = this.parent.children.get(this.model.key);
                if (fieldMap) {
                    fieldMap.delete(this.field);
                    fieldMap.size || this.parent.children.delete(this.model.key);
                }
                this.parent = null;
            }
            this.terminated = true;
            this.consumer && this.consumer.terminate();
            this.consumer = null;
        }
    };
    return LogicNode;
}());

//###############################################################################################################################
function testChoice(a, b) {
    return a == b || typeof a === 'object' && typeof b === 'object' && Object.keys(a).every(function (i) { return a[i] == b[i]; });
}
var arfDatePattern = /^(18|19|20)((\\d\\d(((0[1-9]|1[012])(0[1-9]|1[0-9]|2[0-8]))|((0[13578]|1[02])(29|30|31))|((0[4,6,9]|11)(29|30))))|(([02468][048]|[13579][26])0229))$/;
function required(value, pattern, message) {
    if (!value || value.toString().replace(/ /g, '') === '') {
        return message || 'Required';
    }
    else {
        if (typeof value === 'object' && Array.isArray(value.items)) {
            var v_1 = value.value;
            if (!v_1 || v_1.toString().replace(/ /g, '') === '') {
                return message || 'Required';
            }
            return value.items.some(function (item) { return testChoice(v_1, item.value !== undefined ? item.value : item); }) ? '' : message || 'Required';
        }
        if (pattern === 'date' && !value.toString().match(arfDatePattern) || pattern instanceof RegExp && !value.toString().match(pattern)) {
            return message || 'Invalid format';
        }
        return '';
    }
}
//###############################################################################################################################
var LogicProcessor = /** @class */ (function () {
    function LogicProcessor(rootProxy, rootField, validate) {
        // TODO: this is technically leaking memory (watchers are not removed when runtime shuts down when this is static).
        // I've made it non-static, so it gets disposed of every time runtime is shut down. But it s better to figure out why and fix.
        this.evListener = new _proxy__WEBPACK_IMPORTED_MODULE_0__["Listener"]({});
        this.nodes = [];
        this.scheduledWork = null;
        this.addNode(null, rootProxy, rootField, [{ action: validate ? "validate" : "init" }]);
        this.rootModel = this.nodes[0].model;
        this.processInterceptors();
    }
    LogicProcessor.prototype.scheduleWork = function (node) {
        this.scheduledWork || (this.scheduledWork = (typeof setImmediate === "function" ? setImmediate : setTimeout)(this.processInterceptors.bind(this)));
    };
    LogicProcessor.prototype.destroy = function () {
        this.scheduledWork && (typeof clearImmediate === "function" ? clearImmediate : clearInterval)(this.scheduledWork);
        this.scheduledWork = null;
        if (this.nodes.length) {
            var root = this.nodes[0];
            this.evictNode(root);
            this.nodes = [];
        }
    };
    LogicProcessor.prototype.enforceValidation = function (readyCb) {
        this.nodes.forEach(function (node) { return node.notify({ action: 'validate' }); });
        readyCb && this.waitForPipeLine(readyCb);
    };
    LogicProcessor.prototype.waitForPipeLine = function (readyCb) {
        var pending = [];
        try {
            this.processInterceptors();
            this.scheduledWork || (pending = this.nodes.map(function (n) { return n.context.$await; }).filter(function (a) { return !!a; })).length ?
                Promise.all(pending).then(this.waitForPipeLine.bind(this, readyCb), readyCb) : readyCb();
        }
        catch (e) {
            readyCb(e);
        }
    };
    LogicProcessor.prototype.processInterceptors = function () {
        var _this = this;
        if (this.scheduledWork) {
            this.scheduledWork = null;
            for (var i = 0; i < this.nodes.length; i++) {
                this.logic(this.nodes[i]);
            }
            var cur_1 = 0;
            this.nodes.forEach(function (node) { return node.terminated || (_this.nodes[cur_1++] = node); });
            this.nodes.splice(cur_1);
        }
    };
    LogicProcessor.prototype.addNode = function (parent, proxy, field, initAction) {
        var node = new LogicNode(parent, field, proxy, this);
        node.notify(initAction);
        this.nodes.push(node);
        return node;
    };
    LogicProcessor.prototype.evictNode = function (node) {
        var _this = this;
        this.clearError(node);
        node.terminated = true;
        node.children.forEach(function (fieldMap) { return fieldMap.forEach(function (node) { return _this.evictNode(node); }); });
        node.terminate();
    };
    LogicProcessor.prototype.clearError = function (node) {
        if (node.lastError) {
            delete node.lastError;
            for (var cur = node.parent; cur && cur.erroringChildren.delete(node); cur = cur.parent) {
                this.evListener.notify(cur.key, 'erroringChildren');
            }
        }
    };
    LogicProcessor.prototype.notifyErroring = function (node) {
        for (var cur = node.parent; cur && !cur.erroringChildren.has(node); cur = cur.parent) {
            cur.erroringChildren.add(node), this.evListener.notify(cur.key, 'erroringChildren', 'validate');
        }
    };
    LogicProcessor.prototype.reconcileChildren = function (parent, rowProxies, events) {
        var _this = this;
        var childFields = parent.field.children;
        var lastChildren = parent.children;
        if (lastChildren.size || childFields.length) {
            var rows_1 = new Map();
            var rkeys_1 = new Set();
            var m_1, present_1;
            lastChildren.forEach(function (_, k) { return rkeys_1.add(k); });
            rowProxies.forEach(function (r) { rows_1.set(r.key, r); rkeys_1.add(r.key); });
            rkeys_1.forEach(function (r) {
                present_1 = rows_1.get(r);
                if (m_1 = lastChildren.get(r)) {
                    present_1 || (childFields.forEach(function (k) { return _this.evictNode(m_1.get(k)); }), lastChildren.delete(r));
                }
                else {
                    lastChildren.set(r, m_1 = new Map());
                    childFields.forEach(function (k) { return m_1.set(k, _this.addNode(parent, present_1, k, events)); });
                }
            });
        }
    };
    LogicProcessor.prototype.logic = function (node) {
        if (node.notifications.length && !node.terminated) {
            node.lastNotifications = node.notifications;
            node.notifications = [];
            var context = node.context, field = node.field, model = node.model;
            try {
                context.result(field.get(model, context, node.lastNotifications));
            }
            catch (e) {
                context.result(undefined, e.message);
                console.error(node.field + '\n' + e.message + '\n' + e.stack);
            }
        }
    };
    LogicProcessor.prototype.findNodes = function (field, modelKey) {
        return this.nodes.filter(function (node) { return node.field === field && node.model.key === modelKey; });
    };
    return LogicProcessor;
}()); //const { Provider: LogicContextProvider, Consumer: LogicContextConsumer} = React.createContext({} as LogicProcessor);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate, __webpack_require__(/*! ./../../../node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").clearImmediate))

/***/ }),

/***/ "./src/ts/api/proxy.ts":
/*!*****************************!*\
  !*** ./src/ts/api/proxy.ts ***!
  \*****************************/
/*! exports provided: Enumerable, Observable, Listener, JsonProxyKeygey, JsonProxyArray, ModelProxy, ProxyUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Enumerable", function() { return Enumerable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return Observable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Listener", function() { return Listener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonProxyKeygey", function() { return JsonProxyKeygey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonProxyArray", function() { return JsonProxyArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelProxy", function() { return ModelProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProxyUtils", function() { return ProxyUtils; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @Enumerable decorator that sets the enumerable property of a class field to false.
 * @param value true|false
 */
function Enumerable(value) {
    return function (target, propertyKey) {
        var descriptor = Object.getOwnPropertyDescriptor(target, propertyKey) || {};
        if (descriptor.enumerable != value) {
            descriptor.enumerable = value;
            Object.defineProperty(target, propertyKey, descriptor);
        }
    };
}
function Observable(proxyClass) {
    return function (target, propertyKey) {
        var _a;
        if (proxyClass) {
            var isSubset = typeof proxyClass === "function";
            isSubset || (proxyClass = proxyClass[0]);
            Object.defineProperties(target, (_a = {},
                _a[propertyKey] = {
                    enumerable: true,
                    get: isSubset ? function () {
                        return this.getSubset(propertyKey, proxyClass);
                    } : function () {
                        return this.getSublist(propertyKey, proxyClass);
                    }
                },
                _a["$_c_" + propertyKey] = {
                    enumerable: true,
                    value: function (value) {
                        ProxyUtils.copy(this[propertyKey], value);
                    }
                },
                _a["$_r_" + propertyKey] = {
                    enumerable: true,
                    value: function (value) {
                        ProxyUtils.reflect(this[propertyKey], value);
                    }
                },
                _a));
        }
        else {
            Object.defineProperty(target, propertyKey, {
                enumerable: true,
                get: function () {
                    return this.get(propertyKey) || "";
                },
                set: function (value) {
                    this.set(propertyKey, value);
                }
            });
        }
    };
}
var Listener = /** @class */ (function () {
    function Listener(model, node) {
        this.dpMap = model instanceof Listener ? model.dpMap : Listener.getRootDependencyMap(model);
        this.node = node;
        this.dependencies = [];
    }
    Listener.getRootDependencyMap = function (model) {
        if (model) {
            var p = void 0;
            if (model instanceof ModelProxy) {
                for (p = model; p.$parent; p = p.$parent)
                    ;
                p = p.$data; // $persisted ?
            }
            else {
                for (p = model; p.p; p = p.p)
                    ;
            }
            var m = Listener.modelWatchMap.get(p);
            m || Listener.modelWatchMap.set(p, m = new Map());
            return m;
        }
        return new Map();
    };
    Listener.prototype.undepend = function () {
        var _this = this;
        this.dependencies.forEach(function (dpKey) {
            var ctlSet = _this.dpMap.get(dpKey);
            if (ctlSet) {
                ctlSet.delete(_this.node);
                ctlSet.size || _this.dpMap.delete(dpKey);
            }
        });
    };
    Listener.prototype.depend = function (key, element) {
        if (this.node) {
            var dpKey = key + '-' + element, e = this.dpMap.get(dpKey);
            e || this.dpMap.set(dpKey, e = new Set());
            if (!e.has(this.node)) {
                e.add(this.node);
                this.dependencies.push(dpKey);
            }
        }
    };
    Listener.prototype.notify = function (key, element, action, value) {
        var dpKey = key + '-' + element, e = this.dpMap.get(dpKey);
        e && e.forEach(function (node) { return node.notify({ key: key, element: element, action: action }); });
        return true;
    };
    Listener.prototype.set = function (proxy, element, value, action) {
        if (proxy.$data[element] != value) {
            proxy.$data[element] = value;
            this.notify(proxy.key, element, action);
        }
        ;
        return true;
    };
    Listener.prototype.get = function (proxy, element) {
        this.depend(proxy.key, element);
        return proxy.$data[element];
    };
    // TODO: this is still an issue. loop over Core.startRuntime multiple times causes memory leaks when passing same data object. Workaround is to pass different data object (shallow copy is fine). 
    Listener.modelWatchMap = new WeakMap();
    return Listener;
}());

var JsonProxyKeygey = (function () {
    var counter = 0;
    return function () {
        return ++counter;
    };
})();
var JsonProxyArray = /** @class */ (function (_super) {
    __extends(JsonProxyArray, _super);
    function JsonProxyArray(parent, parentCollection, clazz) {
        var _this = this;
        if (typeof parent === 'number') {
            _this = _super.call(this, parent) || this;
        }
        else {
            _this = _super.call(this) || this;
            Array.prototype.push.apply(_this, (parent.get(parentCollection) || []).map(function (item) { return new clazz(item, parent, parentCollection, false, parent.$listener); }));
        }
        _this.$parent = parent;
        _this.$parentCollection = parentCollection;
        _this.$clazz = clazz;
        Object.setPrototypeOf(_this, JsonProxyArray.prototype);
        return _this;
    }
    JsonProxyArray.prototype.push = function () {
        var _this = this;
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        return Array.prototype.push.apply(this, items.map(function (item) {
            var proxy = (new _this.$clazz({}, _this.$parent, _this.$parentCollection, false, _this.$parent.$listener));
            ProxyUtils.copy(proxy, item);
            _this.$parent.append(_this.$parentCollection, false, proxy.$data);
            return proxy;
        }));
    };
    JsonProxyArray.prototype.shadow = function (item) {
        var proxy = (new this.$clazz({}, this.$parent, this.$parentCollection, false, this.$parent.$listener));
        typeof item === 'object' && ProxyUtils.copy(proxy, item);
        proxy.$persisted = null;
        return proxy;
    };
    JsonProxyArray.prototype.pop = function () { throw "Unsupported"; };
    JsonProxyArray.prototype.splice = function (start, deleteCount) {
        var items = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            items[_i - 2] = arguments[_i];
        }
        throw "Unsupported";
    };
    JsonProxyArray.prototype.shift = function () { throw "Unsupported"; };
    JsonProxyArray.prototype.unshift = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        throw "Unsupported";
    };
    JsonProxyArray.prototype.reverse = function () { throw "Unsupported"; };
    /*sort(cb?: (a: P, b: P) => number): this { throw "Unsupported"; }*/
    JsonProxyArray.prototype.fill = function () { throw "Unsupported"; };
    JsonProxyArray.prototype.copyWithin = function () { throw "Unsupported"; };
    JsonProxyArray.prototype.indexOf = function (item) {
        return item instanceof ModelProxy ? [].indexOf.call(this.map(function (a) { return a.$data; }), item.$data) : -1;
    };
    return JsonProxyArray;
}(Array));

var ModelProxy = /** @class */ (function () {
    function ModelProxy(data, parent, parentCollection, single, listener) {
        this.$persisted = data;
        this.$data = (data || {});
        this.$parent = parent || null;
        this.$listener = listener || new Listener(this);
        this.$single = single === undefined ? true : single;
        this.$parentCollection = parentCollection || '';
    }
    Object.defineProperty(ModelProxy.prototype, "key", {
        get: function () {
            var data = this.$data, key = data.key;
            key || Object.defineProperty(data, 'key', { enumerable: false, value: key = JsonProxyKeygey() });
            return key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModelProxy.prototype, "p", {
        get: function () {
            return this.$parent.forWatcher(this.$listener.node);
        },
        enumerable: true,
        configurable: true
    });
    ModelProxy.prototype.forWatcher = function (watcher) {
        var ctor = this.constructor;
        var ret = new ctor(this.$data, this.$parent, this.$parentCollection, this.$single, new Listener(this.$listener, watcher));
        ret.$persisted = this.$persisted;
        return ret;
    };
    ModelProxy.prototype.get = function (element) {
        this.$listener.depend(this.key, element);
        return this.$data[element];
    };
    ModelProxy.prototype.getSubset = function (element, proxyClass) {
        if (element) {
            return new proxyClass(this.get(element), this, element, true, this.$listener);
        }
        return new proxyClass(this.$data, this, null, true, this.$listener);
    };
    ModelProxy.prototype.getSublist = function (element, proxyClass) {
        return new JsonProxyArray(this, element, proxyClass);
    };
    ModelProxy.prototype.append = function (element, single, data) {
        this.persist();
        if (element) {
            if (single) {
                var obj = this.$data[element];
                if (!obj || typeof obj !== 'object') {
                    obj = this.$data[element] = data || {};
                    this.$listener.notify(this.key, element, 'a');
                }
                else {
                    // TODO: merge ? 
                }
                return obj;
            }
            else {
                var arr = this.$data[element], obj = data || {};
                if (!Array.isArray(arr)) {
                    this.$data[element] = arr = [];
                }
                arr.push(obj);
                this.$listener.notify(this.key, element, 'a');
                return obj;
            }
        }
        return this.$data;
    };
    ModelProxy.prototype.set = function (element, value) {
        if (value === undefined || value === null || value === '') {
            if (this.$data.hasOwnProperty(element)) {
                delete this.$data[element];
                this.$listener.notify(this.key, element, 'd');
            }
        }
        else {
            this.persist();
            if (this.$data[element] !== value) {
                this.$data[element] = value;
                this.$listener.notify(this.key, element, 'm');
            }
        }
        return value;
    };
    ModelProxy.prototype.persist = function () {
        if (this.isShadow() && this.$parent) {
            // TODO: merge ? 
            this.$persisted = this.$data = this.$parent.append(this.$parentCollection, this.$single, this.$data);
        }
    };
    ModelProxy.prototype.detach = function () {
        if (this.$parent) {
            if (this.$persisted) {
                if (this.$parentCollection) {
                    var collection = this.$parent.$data[this.$parentCollection];
                    if (collection) {
                        collection.splice(collection.indexOf(this.$persisted), 1);
                        collection.length || delete this.$parent.$data[this.$parentCollection];
                        this.$listener.notify(this.$parent.key, this.$parentCollection, 'r');
                    }
                }
                else {
                    this.$parent.detach();
                }
                this.$persisted = undefined;
            }
        }
        else {
            throw 'attempt to detach root';
        }
    };
    ModelProxy.prototype.isShadow = function () {
        return !this.$persisted;
    };
    ModelProxy.prototype.hasChild = function (other) {
        for (; other && this.$data !== other.$data; other = other.$parent) { }
        return !!other;
    };
    __decorate([
        Enumerable(false)
    ], ModelProxy.prototype, "key", null);
    __decorate([
        Enumerable(false)
    ], ModelProxy.prototype, "p", null);
    return ModelProxy;
}());

var ProxyUtils;
(function (ProxyUtils) {
    function castAs(data, impl) {
        return typeof impl === "function" ? (new impl(data, null, null, true)) : data;
    }
    ProxyUtils.castAs = castAs;
    function detach(v) {
        if (v instanceof ModelProxy) {
            v.detach();
        }
        else {
            throw "Not an instance of supported class";
        }
    }
    ProxyUtils.detach = detach;
    function copy(dest, src) {
        return merge(dest, src, false);
    }
    ProxyUtils.copy = copy;
    function reflect(dest, src) {
        return merge(dest, src, true);
    }
    ProxyUtils.reflect = reflect;
    function unwrap(src) {
        return src instanceof ModelProxy ? src.$data : src;
    }
    ProxyUtils.unwrap = unwrap;
    function wrapAs(data, proto) {
        if (proto instanceof ModelProxy) {
            return castAs(data, proto.constructor);
        }
        if (proto instanceof JsonProxyArray) {
            return castAs(data, proto.$clazz);
        }
        throw "Not an instance of supported class";
    }
    ProxyUtils.wrapAs = wrapAs;
    function shadow(array, item) {
        return array.shadow(item);
    }
    ProxyUtils.shadow = shadow;
    function isDetached(target) {
        return target instanceof ModelProxy && target.isShadow();
    }
    ProxyUtils.isDetached = isDetached;
    function persist(target) {
        target instanceof ModelProxy && target.persist();
    }
    ProxyUtils.persist = persist;
    function merge(dest, src, deleteMissing) {
        if (dest instanceof ModelProxy) {
            mergeSubstet(dest, src, deleteMissing);
        }
        else if (dest instanceof JsonProxyArray) {
            mergeArrays(dest, src, deleteMissing);
        }
        else {
            throw "Not an instance of supported class";
        }
        return dest;
    }
    function mergeSubstet(dest, other, deleteMissing) {
        // TODO: it would be nice to memorize list of cloneable properties for every class
        // perhaps make map (ctor, ctor) => {list of properties to copy}, like Java proxies do in "reflect/copy"
        var myFields = new Set(), otherFields = new Set(), writeEmpty = !(other instanceof ModelProxy);
        Object.keys(dest.constructor.prototype).forEach(function (prop) { return prop.charAt(0) !== '$' && prop !== 'constructor' && myFields.add(prop); });
        if (typeof other === 'object' && other !== null) {
            Object.keys(other instanceof ModelProxy ? dest.constructor.prototype : other).forEach(function (prop) { return otherFields.add(prop); });
        }
        var prefix = deleteMissing ? '$_r_' : '$_c_', func;
        myFields.forEach(function (prop) {
            if (typeof (func = dest[prefix + prop]) === 'function') {
                otherFields.has(prop) ? func.call(dest, other[prop]) : deleteMissing && func.call(dest);
            }
            else {
                var v = otherFields.has(prop) ? other[prop] : undefined;
                if (v !== null && v !== undefined && (v !== "" || writeEmpty) && v !== false || deleteMissing) {
                    dest[prop] = v;
                }
            }
        });
    }
    function mergeArrays(dest, src, deleteMissing) {
        src = src || [];
        if (deleteMissing) {
            for (var i = 0; i < dest.length && i < dest.length; i++) {
                if (i === src.length) {
                    dest.splice(i);
                }
                else if (i === dest.length) {
                    dest.push(src[i]);
                }
                else {
                    merge(dest[i], src[i], true);
                }
            }
        }
        else {
            src.forEach(function (i) { return dest.push(i); });
        }
    }
})(ProxyUtils || (ProxyUtils = {}));


/***/ }),

/***/ "./src/ts/api/utils.ts":
/*!*****************************!*\
  !*** ./src/ts/api/utils.ts ***!
  \*****************************/
/*! exports provided: utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return utils; });
var utils;
(function (utils) {
    var modifiedSince;
    function setDfeCustomStyle(css, formname) {
        if (typeof document == 'object') {
            var e = formname && document.getElementById(formname + '-custom-style') || document.head.appendChild(document.createElement('style'));
            formname && e.setAttribute('id', formname + '-custom-style');
            e.innerHTML = css;
        }
    }
    utils.setDfeCustomStyle = setDfeCustomStyle;
    function reloadIfSourceChanged(interval) {
        if (!modifiedSince) {
            modifiedSince = new Date().toGMTString();
            var keepGoing_1 = true;
            setInterval(function () {
                var scripts = document.querySelectorAll('script[src]');
                for (var i = 0; keepGoing_1 && i < scripts.length; i++) {
                    (function (url) {
                        if (new URL(url).hostname === new URL(location.href).hostname) {
                            var xhr = new XMLHttpRequest();
                            xhr.open("HEAD", url, true);
                            xhr.setRequestHeader("If-Modified-Since", modifiedSince);
                            xhr.onreadystatechange = function () {
                                if (keepGoing_1 && xhr.readyState === 4 && xhr.status === 200) { // Modified
                                    keepGoing_1 = false;
                                    setTimeout(function () { return location.reload(); }, 1000);
                                }
                            };
                            xhr.send();
                        }
                    })(scripts[i].src);
                }
            }, interval);
        }
    }
    utils.reloadIfSourceChanged = reloadIfSourceChanged;
})(utils || (utils = {}));


/***/ }),

/***/ "./src/ts/forms lazy recursive ^\\.\\/.*$":
/*!*****************************************************!*\
  !*** ./src/ts/forms lazy ^\.\/.*$ namespace object ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./quote.cmau.car": [
		"./src/ts/forms/quote.cmau.car.tsx",
		9,
		5,
		7,
		1
	],
	"./quote.cmau.car.css": [
		"./src/ts/forms/quote.cmau.car.css",
		7,
		5,
		0
	],
	"./quote.cmau.car.tsx": [
		"./src/ts/forms/quote.cmau.car.tsx",
		9,
		5,
		7,
		1
	],
	"./quote.work.class": [
		"./src/ts/forms/quote.work.class.tsx",
		9,
		5,
		6,
		7,
		3
	],
	"./quote.work.class.css": [
		"./src/ts/forms/quote.work.class.css",
		7,
		5,
		2
	],
	"./quote.work.class.tsx": [
		"./src/ts/forms/quote.work.class.tsx",
		9,
		5,
		6,
		7,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(2).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__.t(id, ids[1])
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/ts/forms lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/ts/loader.tsx":
/*!***************************!*\
  !*** ./src/ts/loader.tsx ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_dfe_stream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/dfe-stream */ "./src/ts/api/dfe-stream.ts");
/* harmony import */ var _resources_es_polyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../resources/es-polyfill */ "./resources/es-polyfill.js");
/* harmony import */ var _resources_es_polyfill__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_resources_es_polyfill__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/proxy */ "./src/ts/api/proxy.ts");
/* harmony import */ var _api_ajaxCache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/ajaxCache */ "./src/ts/api/ajaxCache.ts");
/* harmony import */ var _api_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api/utils */ "./src/ts/api/utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = undefined;







_api_utils__WEBPACK_IMPORTED_MODULE_6__["utils"].reloadIfSourceChanged(2000);
var validateButton = document.body.appendChild(document.createElement("input"));
validateButton.value = "Validate All";
validateButton.type = "button";
document.body.appendChild(document.createElement("br"));
var node = document.body.appendChild(document.createElement("div"));
typeof cachePrimer === 'object' && Array.isArray(cachePrimer) && cachePrimer.forEach(function (item) { return _api_ajaxCache__WEBPACK_IMPORTED_MODULE_5__["ajaxCache"].storage.set(item.key, { done: "success", result: item.value, promise: Promise.resolve(item.value) }); });
(function () { return __awaiter(_this, void 0, void 0, function () {
    var formName, _a, FormComponent, form, modelImpl, jsonModel, logic;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                formName = "quote.cmau.car";
                return [4 /*yield*/, __webpack_require__("./src/ts/forms lazy recursive ^\\.\\/.*$")("./" + formName)];
            case 1:
                _a = _b.sent(), FormComponent = _a.FormComponent, form = _a.form, modelImpl = _a.modelImpl;
                jsonModel = __webpack_require__(/*! ../../test/model.json */ "./test/model.json");
                react_dom__WEBPACK_IMPORTED_MODULE_0__["render"](react__WEBPACK_IMPORTED_MODULE_1__["createElement"](FormComponent, { model: (logic = new _api_dfe_stream__WEBPACK_IMPORTED_MODULE_2__["LogicProcessor"](_api_proxy__WEBPACK_IMPORTED_MODULE_4__["ProxyUtils"].castAs(jsonModel, modelImpl), form, false)).rootModel }), node);
                validateButton.addEventListener('click', function () {
                    $.ajax("/validate", {
                        data: JSON.stringify({
                            formName: formName,
                            payload: jsonModel
                        }),
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        method: "POST",
                        success: function (e) { return console.log("server: ", e); }
                    });
                    logic.enforceValidation(function () { return console.log("client: ", logic.nodes.filter(function (n) { return !!n.lastError; }).map(function (n) { return n.lastError; })); });
                });
                return [2 /*return*/];
        }
    });
}); })();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./test/model.json":
/*!*************************!*\
  !*** ./test/model.json ***!
  \*************************/
/*! exports provided: controlId, controlSet, insuredSet, navigation, policy, default */
/***/ (function(module) {

module.exports = {"controlId":{},"controlSet":{"bridgeQuoteId":"","buildenv":"local","clienttype":"comm","dbVersion":"884","overrideEffectiveLimit":"N","prodcode":"111111","prodmaincode":"111111","prodsubcode":"qatest","quotecreated":"201809231456","site":"NAL","sourcesystem":"NAL","txnHistory":{"lobTxnHistoryMap":{"bbop":{"quoterate":"2018-09-26T11:10:01-08:00","status":"complete"},"cmau":{"quoterate":"2018-09-26T11:10:01-08:00","status":"pending"},"work":{"quoterate":"2018-09-26T11:10:01-08:00","status":"pending"}}},"type":"policy","version":"2"},"insuredSet":{"address":{"address":"3510 E 73RD CIR N","city":"VALLEY CENTER","state":"KS","zip":"67147"},"companyName":"TC-2YVZYFt","dBA":"ComplexScenarios2KS","email":"test@test.com","firstName":"TFirstKSQqyi","individual":"n","instype":"Limited Liability Company","lastName":"TLastKSiaIE","wphone":"111-111-1111"},"navigation":{"completedScreenEffectiveProduct":"CMAU","completedScreenFormName":"quote.cmau.car"},"policy":{"agentid":"qatest","bbopSet":{"addtlIntInd":"N","automaticIncr":"4","classCodes":"74071,74831","commissionMap":{"agencyBill100":"15.0000","directBill100":"15.0000"},"coverages":{"amendagg":{"includeFormInd":"Y"},"bipay":{"includeInd":"N"},"bitime":{"includeInd":"N"},"blanket":{"includeInd":"N"},"blkai":{"includeInd":"N"},"compf":{"includeInd":"Y","limit":"50000"},"conadd":{"includeInd":"Y"},"concov":{"includeInd":"Y"},"conins":{"blanketLimit":"5000","conEquipRentReimbursement":"Y","conToolsCovType":"Blanket Limit","empTools":{"includeInd":"Y","limit":"20000"},"nonownTools":{"includeInd":"Y","limit":"50000"},"propOnSite":"10000/30000"},"conscd":{},"cyber":{"includeInd":"N"},"datcom":{"includeInd":"N"},"dentistEquip":{},"empben":{"includeInd":"N"},"emplia":{"ded":"10000","includeInd":"Y","limit":"100000","numEmp":"50","numNonFTEmp":"20","thirdPartyCoverage":"N"},"eqpbrk":{"includeInd":"Y"},"excladvertising":{"includeFormInd":"Y"},"excladvertisinglawyers":{"includeFormInd":"Y"},"exclinspection":{"includeFormInd":"Y"},"exclinsulation":{"includeFormInd":"Y"},"excllaundry":{"includeFormInd":"Y"},"exclwarehouse":{"includeFormInd":"Y"},"fellow":{"includeInd":"N"},"hireda":{"includeInd":"N"},"limart":{"includeFormInd":"Y"},"limbook":{"includeFormInd":"Y"},"limpet":{"includeFormInd":"Y"},"limphoto":{"includeFormInd":"Y"},"limrealestate":{"includeFormInd":"Y"},"liqpet":{"includeFormInd":"Y"},"nonown":{"includeInd":"N"},"photof":{},"snowCo":{"includeInd":"N"},"suppr":{"includeInd":"N"},"terror":{"includeInd":"Y"}},"finalized":"Y","fixedDeductible":"2500","gLOccurrenceLimit":"1000000","hasAieqip":"N","hasAiprem":"N","hasBldCov":"Y","hasContowCov":"N","hasFuncBldValue":"N","hasLcompf":"Y","hasLien":"N","hasLossPayee":"N","hasNoFuncBldValue":"Y","hasPpCov":"Y","hasReplacementCostValue":"Y","instec":{"quoteNumber":"Q-000092408","storageId":"98821"},"isoClassGroups":"Contractors Office,Contractors Office","liaDed":"500","liabCovInd":"Y","locationList":[{"address":"3510 E 73RD CIR N","addressLine":"3510 E 73RD CIR N","based":"riskAddress1","bceg":{"bcegCode":"99","callResult":"SUCCESSFUL","message":""},"buildingList":[{"classCode":"74071","classOverride":"N","classTag":"PAY","construction":"Joisted Masonry","coverages":{"actrec":{"includeInd":"Y","limit":"200000"},"aieqip":{"includeInd":"N"},"aiprem":{"includeInd":"N"},"bld":{"includeInd":"Y","limit":"580000","valuation":"Replacement Cost"},"concom":{"includeFormInd":"Y"},"eq":{"coverageType":"No Coverage"},"lcompf":{"includeInd":"Y","numEmployees":"15"},"liab":{"includeInd":"Y","payroll":"500000"},"lienholder":{"includeInd":"N"},"lospay":{"includeInd":"N"},"ordLaw":{"covType":"Coverage 1","includeInd":"Y"},"pP":{"includeInd":"Y","limit":"200000","seasonalIncrease":"25"},"spoil":{"includeInd":"N"},"tenfir":{"includeInd":"Y","limit":"75000"},"utildd":{"includeInd":"N"},"utilte":{"includeInd":"N"}},"cspCode":"0702","description":"Loc 1 Bldg 1","industrySegment":"","isoClassDescription":"Appliances and Accessories - Installation or Service or Repair - Commercial (Not including TV or Radio) (Office)","isoClassDescriptionId":"1056","isoClassGroup":"Contractors Office","lOI":"580000","naicsCode":"238210","numStories":"2","occupancy":"Owner Occupied Bldg - 10% or Less","occupiedSqFt":"4000","premOpsILF":"3","replacementCost":{"callResult":"SUCCESSFUL","message":"","replacementCost":"600990"},"sicCode":"1799","soleOccupantInd":"Y","sprinklered":"Y","yearBuilt":"2012"}],"buildings":"1","city":"VALLEY CENTER","classCodes":"74071","confirmation":"N/A","countyName":"SEDGWICK","finalProtectionClass":"2","isoClassGroups":"Contractors Office","pPCAddressKey":"3510 E 73RD CIR N:VALLEY CENTER:KS:67147:3510:73RD:CIR","pPCCall":{"driveDistanceToRespondingFireStation":"Greater than 1 to 2 miles","fireProtectionArea":"SEDGWICK CO FD 1 FDS","matchType":"Address Level Match","multiplePPCInd":"N","pPCCode":"5","respondingFireStation":"SEDGWICK CO FD 1 FS 32","waterSupplyType":"Hauled Water"},"postDir":"N","preDir":"E","rawProtectionClass":"2","recordType":"S","scrubberCalled":"Y","scrubberResult":"Accepted","secondaryName":"","state":"KS","street":"73RD","streetNum":"3510","streetType":"CIR","unit":"","userCountyName":"SEDGWICK","wHDeductiblePcnt":"2","zip":"67147","zipAddOn":"9234"},{"address":"9101 GRANDEUR DR","addressLine":"9101 GRANDEUR DR","based":"riskAddress2","bceg":{"bcegCode":"99","callResult":"SUCCESSFUL","message":""},"buildingList":[{"classCode":"74831","classOverride":"N","classTag":"PAY","construction":"Non-Combustible","coverages":{"actrec":{"includeInd":"Y","limit":"75000"},"aieqip":{"includeInd":"N"},"aiprem":{"includeInd":"N"},"bld":{"includeInd":"Y","limit":"600000","valuation":"Actual Cash Value"},"concom":{"includeFormInd":"Y"},"eq":{"coverageType":"No Coverage"},"lcompf":{"includeInd":"N"},"liab":{"includeInd":"Y","payroll":"250000"},"lienholder":{"includeInd":"N"},"lospay":{"includeInd":"N"},"ordLaw":{"includeInd":"N"},"pP":{"includeInd":"Y","limit":"300000","seasonalIncrease":"25"},"spoil":{"includeInd":"N"},"tenfir":{"includeInd":"Y","limit":"150000"},"utildd":{"includeInd":"N"},"utilte":{"includeInd":"N"}},"cspCode":"0702","description":"Loc 2 Bldg 1","industrySegment":"","isoClassDescription":"House Furnishings Installation - Not Otherwise Classified (Includes incidental upholstering and floor covering installation) (Office)","isoClassDescriptionId":"1097","isoClassGroup":"Contractors Office","lOI":"600000","naicsCode":"238210","numStories":"3","occupancy":"Non-Owner Occupied Bldg.","occupiedSqFt":"3000","premOpsILF":"3","replacementCost":{"callResult":"SUCCESSFUL","message":"","replacementCost":"716955"},"sicCode":"1799","soleOccupantInd":"N","sprinklered":"Y","yearBuilt":"2013"}],"buildings":"1","city":"ATCHISON","classCodes":"74831","confirmation":"Y","countyName":"","finalProtectionClass":"2","isoClassGroups":"Contractors Office","pPCAddressKey":"9101 GRANDEUR DR:ATCHISON:KS:66002:9101:GRANDEUR:DR","pPCCall":{"driveDistanceToRespondingFireStation":"Greater than 2 to 3 miles","fireProtectionArea":"ATCHISON CO RURAL FD 1","matchType":"Address Level Match","multiplePPCInd":"N","pPCCode":"5","respondingFireStation":"ATCHISON CO RURAL FD 1 FS","waterSupplyType":"Hydrant"},"postDir":"","preDir":"","rawProtectionClass":"2","recordType":"","scrubberCalled":"Y","scrubberResult":"Rejected","secondaryName":"#","state":"KS","street":"GRANDEUR","streetNum":"9101","streetType":"DR","unit":"","userCountyName":"ATCHISON","wHDeductiblePcnt":"2","zip":"66002","zipAddOn":""}],"medicalExpenses":"10000","otherCOA":"2000000","proLiabInd":"N","productsCOA":"2000000","propCovInd":"Y","removeITVProvision":"N","statesNotAllowedStopGap":"","uniqueStatesList":"KS"},"brokerfee":"0","cmauSet":{"autonomousVehicles":"N","commissionMap":{"agencyBill100":"15.0000","directBill100":"15.0000"},"coverageInfoAllStates":{"coveragesGen":{"doccCoverage":{"includeInd":"N"},"emphired":{"includeInd":"N"},"haCoverage":{"includeInd":"N"},"lia":{"includeInd":"Y"},"limmex":{"includeInd":"N"},"medCoverage":{"medLimit":"10000"},"nonOwnedAuto":{"includeInd":"N"},"noticeToOthersOfCancellation":{"includeInd":"N"},"waiverOfSubrogation":{"blanketWithExtensions":"Included","includeInd":"N"}},"perState":{"ks":{"address":{"city":"VALLEY CENTER","state":"KS","zip":"67147"},"coverages":{"doccCoverage":{"includeInd":"N"},"emphired":{"includeInd":"N"},"haCoverage":{"includeInd":"N"},"lia":{"includeInd":"Y"},"limmex":{"includeInd":"N"},"medCoverage":{"medLimit":"10000"},"nonOwnedAuto":{"includeInd":"N"},"noticeToOthersOfCancellation":{"includeInd":"N"},"uMCoverage":{"liabilityType":"Combined Single Limit","limitCSL":"65000"},"waiverOfSubrogation":{"blanketWithExtensions":"Included","includeInd":"N"}},"garageInd":"N"}}},"coverages":{"otherCoverages":{"basketdedendo":{"includedInd":"N"},"endoextension":{"includedInd":"Included"}},"terrorCoverage":{"allother":"Include All Other Terrorism","includedInd":"Y","premtype":"Included at No Additional Charge"}},"driverList":[{"birthdate":"19800101","driverAttractScore":"Not Found.","firstname":"DFirstKS","lastname":"DLastKS","licenseNumber":"P2015170","licenseState":"KS","relationshipToInsured":"Self"},{"birthdate":"19900721","driverAttractScore":"Not Found.","firstname":"TEXAS","hiredate":"20050101","lastname":"VALID","licenseNumber":"37345555","licenseState":"TX","relationshipToInsured":"Employee"}],"finalized":"N","foodDelivery":"N","hasAdditionalNamedInsured":"Y","hasAiLessor":"N","hasExcludedDrivers":"N","hasLossPayee":"Y","hasPPA":"Y","hazardousMaterials":"N","instec":{"quoteNumber":"Q-000092407","storageId":"98820"},"isDriverInfoVerified":"Y","leasedRentedVehicles":"N","liability":"1000000","locationList":[{"address":"3510 E 73RD CIR N","addressLine":"3510 E 73RD CIR N","based":"riskAddress1","cars":[{"controlNbr":"OLD  1988 1G3WS14W\\CJD\\R300001-999999","coverages":{"collisionDeductible":"1000","comprehensiveDeductible":"1000","liab":{"includeInd":"Y"},"pipCoverage":{"additionalPipKS":"Option 2","numberOfAdditionalBroadenedPipIndividualsKS":"0","numberOfBroadenedPipIndividualsKS":"3"},"towlabor":"No Coverage","uMCoverage":{"liabilityType":"Combined Single Limit","limitCSL":"65000"}},"emplessor":"Y","grossVehicleWeight":"3027","hasvin":"N","lossPayee":{"lossPayeeIncludeInd":"Y","namedInsuredInd":"Y"},"make":"FORD","modelInfo":"FESTIVA","modelYr":"1988","origCost":"13495","physDmgInd":"N","statedAmt":"1232","valuationMethod":"Stated Amount","vehUseCd":"All Other","vehicleCostNew":"13495","vehicleType":"car","vinnumber":"1G3WS14W4JD313751","vinoverride":"N","vinvalid":"Y"},{"controlNbr":"OLD  1988 1G3WS14W\\CJD\\R300001-999999","coverages":{"collisionDeductible":"No Coverage","comprehensiveDeductible":"No Coverage","liab":{"includeInd":"Y"},"pipCoverage":{"additionalPipKS":"Option 2","numberOfAdditionalBroadenedPipIndividualsKS":"0","numberOfBroadenedPipIndividualsKS":"3"},"uMCoverage":{"liabilityType":"Combined Single Limit","limitCSL":"65000"}},"emplessor":"N","grossVehicleWeight":"3027","hasvin":"Y","lossPayee":{"lossPayeeIncludeInd":"Y","namedInsuredInd":"N"},"make":"OLDSMOBILE","modelInfo":"CUTLASS SUPREME","modelYr":"1988","origCost":"13495","physDmgInd":"N","vehUseCd":"All Other","vehicleCostNew":"13495","vehicleType":"car","vinnumber":"1G3WS14W4JD313751","vinoverride":"N","vinvalid":"Y"}],"city":"VALLEY CENTER","confirmation":"N/A","countyName":"SEDGWICK","garageInd":"N","postDir":"N","preDir":"E","recordType":"S","scrubberCalled":"Y","scrubberResult":"Accepted","secondaryName":"","state":"KS","street":"73RD","streetNum":"3510","streetType":"CIR","unit":"","zip":"67147","zipAddOn":"9234"},{"address":"9101 GRANDEUR DR","addressLine":"9101 GRANDEUR DR","based":"riskAddress2","cars":[{"controlNbr":"FOR  1988 1FABP64T\\CJH\\R100001-999999","coverages":{"collisionDeductible":"No Coverage","comprehensiveDeductible":"No Coverage","liab":{"includeInd":"Y"},"pipCoverage":{"additionalPipKS":"Option 1","numberOfAdditionalBroadenedPipIndividualsKS":"0","numberOfBroadenedPipIndividualsKS":"0"},"uMCoverage":{"liabilityType":"Combined Single Limit","limitCSL":"65000"}},"emplessor":"N","grossVehicleWeight":"3415","hasvin":"Y","lossPayee":{"lossPayeeIncludeInd":"Y","namedInsuredInd":"N"},"make":"FORD","modelInfo":"THUNDERBIRD","modelYr":"1988","operExp":"No operator licensed less than 5 years","operUse":"Not driven to work or school","origCost":"17250","physDmgInd":"N","vehUseCd":"Furnished for Non-Business Use","vehicleCostNew":"17250","vehicleType":"car","vinnumber":"1FABP64T2JH157839","vinoverride":"N","vinvalid":"Y"}],"city":"ATCHISON","confirmation":"Y","countyName":"","garageInd":"N","postDir":"","preDir":"","recordType":"","scrubberCalled":"N","scrubberResult":"","secondaryName":"#","state":"KS","street":"GRANDEUR","streetNum":"9101","streetType":"DR","unit":"","zip":"66002","zipAddOn":""}],"scheduledAutoInd":"Y","transportPassengers":"N","uniqueStatesList":"KS"},"commonSet":{"applicableStates":"KS","company":"","dnb":{"dunsNumber":"777777772"},"effective":"20180923","expiration":"20190923","industrySegment":"Electrical Contractors and Other Wiring Installation Contractors","instecPrimaryAccount":"T-12493","instecSecondaryAccount":"0-12494","naicsCode":"238210","quoteSource":"AEX","quoteType":"NB","sicCode":"1799","state":"KS","stateOfDomicile":"KS","uw":{"ineligibleInd":"N","packageEligibleInd":"N","rulesResult":{"finalizedDecision":{"code":"SFA_BOP","details":{"ruleDetailsList":[{"decisionCode":"SFA_BOP","lob":"CMAU","messages":[{"htmlText":"Form requested:  Employee as Lessor CA 99 47.","text":"Form requested:  Employee as Lessor CA 99 47."}],"name":"EmployeeAsLessorRule","ruleType":"sfabop","statesFailingLicensing":"","unrecoverableInd":"N"},{"decisionCode":"SFA_BOP","lob":"CMAU","messages":[{"htmlText":"Check MVRs for any failures.","text":"Check MVRs for any failures."}],"name":"SfaBopCheckMvrsRule","ruleType":"metasfabop","statesFailingLicensing":"","unrecoverableInd":"N"}]},"statesFailingLicensing":""},"lobsUsedInFinalizedDecision":"BBOP,CMAU","perLobDecisionMap":{"bbop":{"code":"QUICK_QUOTE","details":{"ruleDetailsList":[{"decisionCode":"QUICK_QUOTE","lob":"ALL","messages":[{"htmlText":"","text":""}],"name":"QuickQuotePassesRule","ruleType":"qqfinal","statesFailingLicensing":"","unrecoverableInd":"N"}]},"statesFailingLicensing":""},"cmau":{"code":"SFA_BOP","details":{"ruleDetailsList":[{"decisionCode":"SFA_BOP","lob":"CMAU","messages":[{"htmlText":"Form requested:  Employee as Lessor CA 99 47.","text":"Form requested:  Employee as Lessor CA 99 47."}],"name":"EmployeeAsLessorRule","ruleType":"sfabop","statesFailingLicensing":"","unrecoverableInd":"N"},{"decisionCode":"SFA_BOP","lob":"CMAU","messages":[{"htmlText":"Check MVRs for any failures.","text":"Check MVRs for any failures."}],"name":"SfaBopCheckMvrsRule","ruleType":"metasfabop","statesFailingLicensing":"","unrecoverableInd":"N"}]},"statesFailingLicensing":""},"work":{"code":"QUICK_QUOTE","details":{"ruleDetailsList":[{"decisionCode":"QUICK_QUOTE","lob":"ALL","messages":[{"htmlText":"","text":""}],"name":"QuickQuotePassesRule","ruleType":"qqfinal","statesFailingLicensing":"","unrecoverableInd":"N"}]},"statesFailingLicensing":""}}}},"yearBizStarted":"2012"},"custid":"121653","customerid":"121653","effective":"20180923","effectiveProduct":"CMAU","expiration":"20190923","formName":"quote.cmau.car","formgroup":"corecomm","indicator":{"closedzip":"N"},"producer":{"email":"test@test.com","emailCC":"test@test.com","emailConfirm":"test@test.com","name":"Test","phone":"111-111-1111"},"product":"BBOP","quoteId":"131354","state":"KS","umbrSet":{"coverages":{},"finalized":"N","instec":{"quoteNumber":"","storageId":""},"locationList":[{"address":"3510 E 73RD CIR N","buildings":"1","city":"VALLEY CENTER","state":"KS","zip":"67147"},{"address":"9101 GRANDEUR DR","buildings":"1","city":"ATCHISON","state":"KS","zip":"66002"}],"otherAgencyWCInfo":{},"uniqueStatesList":"KS"},"uniqueStatesList":"KS","workSet":{"accidentLimit":"500000","additionalNamedInsured":"N","antooc":{"includeInd":"N"},"bureauMap":{"ncci":{"expmodtype":"1.000","status":"Not Exp Rated"}},"classCodes":"0042","commissionMap":{"agencyBill401":"12.0000","agencyBill402":"12.0000","agencyBill403":"12.0000","agencyBill404":"","agencyBill405":"","agencyBill406":"","agencyBill407":"","agencyBill408":"","agencyBill409":"","agencyBill410":"","directBill401":"12.0000","directBill402":"12.0000","directBill403":"12.0000","directBill404":"","directBill405":"","directBill406":"","directBill407":"","directBill408":"","directBill409":"","directBill410":"","premiumTier":"1"},"companyInfo":{"expiringpremium":"1000","feinnumber":"387072024","yrsinbusiness":"4"},"diseaseLimit":"500000","effective":"20180930","empDiseaseLimit":"500000","eratingStateMap":{"ks":{"showOnForm":"Y"},"wa":{"showOnForm":"Y"}},"expiration":"20190930","finalized":"N","hasInclExclMembers":"Y","industrygroups":"constructorerect","instec":{"quoteNumber":"Q-000092406","storageId":"98819"},"isConstructAndErectGroup":"N","isConstructOrErectGroup":"N","isServiceAndArtisansGroup":"N","locations":[{"address":"3510 E 73RD CIR N","city":"VALLEY CENTER","classes":[{"code":"0042","description":"Landscape Gardening and Drivers.","fulltimeemployeeamt":"1","industrygroup":"constructorerect","instecDescription":"Landscape Gardening & Drivers.","parttimeemployeeamt":"0","payroll":"100000","subcode":"0042-5"}],"state":"KS","zip":"67147"},{"address":"9101 GRANDEUR DR","city":"ATCHISON","classes":[{"code":"0042","description":"Street Or Road Construction-Beautification Work and Drivers","fulltimeemployeeamt":"1","industrygroup":"constructorerect","instecDescription":"Street or Road Construction-Beautification Work & Drivers","parttimeemployeeamt":"0","payroll":"100000","subcode":"0042-2"}],"state":"KS","zip":"66002"},{"noSpecificLocation":"Y","state":"WA","stopGap":{"includeInd":"N","limit":"No Coverage"}}],"safety":{"dailyops":"N","equipmentAge":"Not Applicable","injury":"Y","meetings":"Not Applicable","mvr":"Y","protection":"Y","returntowork":"Y","training":"Y","turnover":"Y"},"uniqueStatesList":"KS,WA","uwAnswers":{"acord130Answers":{},"classesUwAnswers":{},"generalUwAnswers":{},"industryUwAnswers":{"artisan":{},"automotive":{},"clerical":{},"construction":{},"foodpackaging":{},"habitational":{},"healthcare":{},"hospitality":{},"lifesciences":{},"manufacturingmetal":{},"manufacturingmisc":{},"manufacturingpaper":{},"manufacturingtextile":{},"mercantile":{}},"submission":"N"},"waivers":{"waivertype":"NoWaiver"}}}};

/***/ })

/******/ });
//# sourceMappingURL=loader.js.map