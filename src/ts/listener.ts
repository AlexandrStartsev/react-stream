/**
 * Alex: this module can be used with nodejs and nashorn (after nashorn-utils.js is loaded).
 * 
 */

import "../../resources/es-polyfill";

import { ModelUtils } from "./api/proxy";
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
    async validate(formName: string, data: {}) {
        try {
            const setup = await import("./forms/" + formName);
            const logic = await new LogicProcessor(ModelUtils.castAs(data, setup.modelImpl), setup.form, true).waitForPipeLine();
            return logic.nodes.map(n => n.lastError).filter(err => !!err);
        } catch(e) {
            return ["Exception during validation" + (typeof e === "object" ? e.message + e.stack : e)];
        }
    }
    async ssr(formName: string, data: {}): Promise<{html: string, cache: {key: string, value: any}[]}> {
        let cacheTimeStamp = +new Date();
        let React = await import("react");
        let { renderToString } = await import("../../resources/react-dom-server");

        try {
            let setup = await import("./forms/" + formName);
            let logic = await new LogicProcessor(ModelUtils.castAs(Object.assign({}, data), setup.modelImpl), setup.form, false).waitForPipeLine();
            let cache = ajaxCache.storage.getAccessedSince(cacheTimeStamp);
            let html = renderToString(React.createElement(setup.FormComponent, {model: logic.rootModel}));
            return {
                html: html,
                cache: Object.keys(cache).filter(key => cache[key].done === "success").map(key => ({key: key, value: cache[key].result}))
            };
        } catch(e) {
            return {html: "<label>Exception during form side rendering</label>", cache: []}
        }
    }
}

export default new Service();