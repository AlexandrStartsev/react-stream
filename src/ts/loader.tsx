import * as ReactDOM from "react-dom";
import * as React from "react";
import { LogicProcessor } from "./api/dfe-stream";

import "../../resources/es-polyfill";

import { ProxyUtils } from "./api/proxy";
import { ajaxCache } from "./api/ajaxCache";
import { utils } from "./api/utils";

utils.reloadIfSourceChanged(2000);

const validateButton = document.body.appendChild(document.createElement("input"));
validateButton.value = "Validate All";
validateButton.type = "button";

document.body.appendChild(document.createElement("br"));
const node = document.body.appendChild(document.createElement("div"));
declare const cachePrimer: {key: string, value: any}[]

typeof cachePrimer === 'object' && Array.isArray(cachePrimer) && cachePrimer.forEach(
    item => ajaxCache.storage.set(item.key, {done: "success", result: item.value, promise: Promise.resolve(item.value)})
);

(async () => {
    let formName = "quote.cmau.car";
    let { FormComponent, form, modelImpl } = await import("./forms/" + formName);
    let jsonModel = require("../../test/100cars.json"), logic: LogicProcessor;

    ReactDOM.render(<FormComponent model = {(logic = new LogicProcessor(ProxyUtils.castAs(jsonModel, modelImpl), form, false)).rootModel}/>, node);
    validateButton.addEventListener('click', () => {
        $.ajax("/validate", {
            data: JSON.stringify({
                formName: formName,
                payload: jsonModel
            }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            method: "POST",
            success: (e) => console.log("server: ", e)
        });
        logic.enforceValidation(() => console.log("client: ", logic.nodes.filter(n => !!n.lastError).map(n => n.lastError)))
    })
})();
