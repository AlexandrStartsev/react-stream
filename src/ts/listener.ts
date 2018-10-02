/**
 * Alex: this module can be used with nodejs and nashorn (after nashorn-utils.js is loaded).
 * 
 */

import "../../resources/es-polyfill";

import { ProxyUtils } from "./api/proxy";
import { ajaxCache } from "./api/ajaxCache";
import { LogicProcessor } from "./api/dfe-stream";

typeof XMLHttpRequest === "undefined" && Object.assign(global, require("xmlhttprequest"));
declare var WrapAsJavaException: any;

type Session = {
    jsonParse: (a: string) => {}
} & any;

type Task = {
    type: "VALIDATION_TASK" | "SSR_TASK" | "VIEW_TASK",
    future: {
        complete: (v: any) => void,
        completeExceptionally: (v: any) => void,
    },
    payload: string,
    session: Session
}

class Service {
    /*service(task: Task): void {
        try {
			switch(task.type) {
			case "VALIDATION_TASK":
				var payload = JSON.parse(task.payload);
				this.validate(payload.formName, payload.policyData, function(e) {
					task.future.complete(JSON.stringify({result: e.length === 0, errors: e}));
				});
				break ;
			case "SSR_TASK":
				var payload = JSON.parse(task.payload);
				this.ssr(payload.formName, payload.policyData, function(html, cachePrimer) {
					task.future.complete(JSON.stringify({html: html, cachePrimer: cachePrimer}));
				});
                break ;	
            case "VIEW_TASK":
                var payload = JSON.parse(task.payload);
				this.view(payload.formName, task.session).then(s => task.future.complete(s), e => task.future.completeExceptionally(WrapAsJavaException(e)))
				break ;
			default:
				throw "unknown task type";
			}
		} catch(e) {
			task.future.completeExceptionally(WrapAsJavaException(e));
		}
    }
    async view(viewName: string, session: Session) {
        session.jsonParser = JSON.parse
        let React = await import('react');
        let view = await import("./views/" + viewName);
        return renderToString(React.createElement(view.default, {session: session}));
    }*/
    async validate(formName: string, data: {}, callback: (errors: string[]) => void) {
        let setup = await import("./forms/" + formName);
        let logic = new LogicProcessor(ProxyUtils.castAs(Object.assign({}, data), setup.modelImpl), setup.form, true);
        logic.waitForPipeLine(reject => callback(reject ? ["Exception during validation" + reject.message] : logic.nodes.map(n => n.lastError).filter(reject => !!reject)));

        /*let setup = await import("./forms/" + formName) as ModuleDefinition;
        Core.startRuntime({
            model: MapperUtils.castAs(Object.assign({}, data), setup.modelImpl),
            form: setup.form, 
            validate: true, 
            readyCb: (rt, args, reject) => {
                if(reject) {
                    console.error("Exception during form validation: " + formName, reject);
                    callback(["Exception during validation"]);
                } else {
                    callback(rt.nodes.map(n => n.lastError).filter(e => !!e));
                }
            },
            interval: -1
        });*/
    }
    async ssr(formName: string, data: {}, callback: (html: string, cache: {key: string, value: any}[]) => void) {
        let cacheTimeStamp = +new Date();
        let React = await import("react");
        let { renderToString } = await import("../../resources/react-dom-server");

        let setup = await import("./forms/" + formName);
        let logic = new LogicProcessor(ProxyUtils.castAs(Object.assign({}, data), setup.modelImpl), setup.form, true);
        logic.waitForPipeLine(reject => {
            if(reject) {
                console.warn("Exception during form side rendering: " + formName, reject);
                callback("<label>Exception during form side rendering</label>", []);
            } else {
                let cache = ajaxCache.storage.getAccessedSince(cacheTimeStamp);
                let html = renderToString(React.createElement(setup.FormComponent, {model: logic.rootModel}));
                callback(html, Object.keys(cache).filter(key => cache[key].done === "success").map(key => ({key: key, value: cache[key].result})));
            }
        });


        // TODO: dynamic model impl
        /*let setup = await import("./forms/" + formName) as ModuleDefinition;
        let cacheTimeStamp = +new Date();
        let node = typeof documentFactory === "function" ? documentFactory().createElement('div') : null;
        Core.startRuntime({
            model: MapperUtils.castAs(Object.assign({}, data), setup.modelImpl),
            form: setup.form, 
            node: node,
            readyCb: (rt, args, reject) => {
                if(reject) {
                    console.warn("Exception during form side rendering: " + formName, reject);
                    callback("<label>Exception during form side rendering</label>", []);
                } else {
                    let cache = ajaxCache.storage.getAccessedSince(cacheTimeStamp);
                    callback(node && node.innerHTML, Object.keys(cache).filter(key => cache[key].done === "success").map(key => ({key: key, value: cache[key].result})));
                }
            },
            interval: -1
        });*/
    }
}

export default new Service();