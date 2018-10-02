(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/css-loader/index.js!./src/ts/forms/quote.work.class.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader!./src/ts/forms/quote.work.class.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table.class-codes th {\r\n    white-space: pre-wrap;\r\n}\r\n.no-specific-field {\r\n    display: flex;\r\n    white-space: nowrap;\r\n}\r\n.no-specific-field {\r\n    display: flex;\r\n    white-space: nowrap;\r\n}\r\n.no-specific-field > input {\r\n    margin: 3px;\r\n}\r\n.ui-widget-overlay {\r\n    opacity: .3;\r\n}", ""]);

// exports


/***/ }),

/***/ "./src/ts/forms/quote.work.class.css":
/*!*******************************************!*\
  !*** ./src/ts/forms/quote.work.class.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./quote.work.class.css */ "./node_modules/css-loader/index.js!./src/ts/forms/quote.work.class.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/ts/forms/quote.work.class.tsx":
/*!*******************************************!*\
  !*** ./src/ts/forms/quote.work.class.tsx ***!
  \*******************************************/
/*! exports provided: FormComponent, form, modelImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return QuoteWorkClassComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "form", function() { return QuoteWorkClassForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_ajaxCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/ajaxCache */ "./src/ts/api/ajaxCache.ts");
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/proxy */ "./src/ts/api/proxy.ts");
/* harmony import */ var _gen_impl_com_arrow_model_def_corecomm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gen/impl/com.arrow.model.def.corecomm */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modelImpl", function() { return _gen_impl_com_arrow_model_def_corecomm__WEBPACK_IMPORTED_MODULE_3__["CoreCommVsProxy"]; });

/* harmony import */ var _gen_definitions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../gen/definitions */ "./src/ts/gen/definitions.ts");
/* harmony import */ var _api_generics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/generics */ "./src/ts/api/generics.tsx");
/* harmony import */ var _api_dfe_stream__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/dfe-stream */ "./src/ts/api/dfe-stream.ts");
/* harmony import */ var _api_react_connect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/react-connect */ "./src/ts/api/react-connect.ts");
/* harmony import */ var _resources_dfe_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../resources/dfe-style.css */ "./resources/dfe-style.css");
/* harmony import */ var _resources_dfe_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_resources_dfe_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _quote_work_class_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quote.work.class.css */ "./src/ts/forms/quote.work.class.css");
/* harmony import */ var _quote_work_class_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_quote_work_class_css__WEBPACK_IMPORTED_MODULE_9__);
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
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};










var BbopStopGapLimit = _gen_definitions__WEBPACK_IMPORTED_MODULE_4__["com"].arrow.model.def.corecomm.bbop.coverages.BbopStopGapLimit;
var Fragment = react__WEBPACK_IMPORTED_MODULE_0__["Fragment"];
if (true) {
    __webpack_require__(/*! webpack-jquery-ui/css */ "./node_modules/webpack-jquery-ui/css.js");
    __webpack_require__(/*! webpack-jquery-ui/dialog */ "./node_modules/webpack-jquery-ui/dialog.js");
}
var states = Object.keys(_gen_definitions__WEBPACK_IMPORTED_MODULE_4__["com"].arrow.model.common.States).sort().map(function (s) { return s.toUpperCase(); });
var simplyRequired = function (ret) { return Object(_api_dfe_stream__WEBPACK_IMPORTED_MODULE_6__["required"])(ret); };
var noSpecificDisabled = function (state) { return !!state.match(/^(MO|AZ|IN|IA|KY|MT|TX)$/); };
var isMonopolisticState = function (loc) { return !!loc.state.match(/^(WA|OH|ND|WY)$/); };
var fixClassCount = function (loc) { return isMonopolisticState(loc) ? loc.classes.forEach(_api_proxy__WEBPACK_IMPORTED_MODULE_2__["ProxyUtils"].detach) : (loc.classes.length || loc.classes.push({})); };
function stopGapSelectedForBop(sg) {
    var state = sg.p.state, covs = sg.p.p.p.bbopSet.coverages, nos = [BbopStopGapLimit.NULL, BbopStopGapLimit.NO_COVERAGE];
    switch (state.toUpperCase()) {
        case "WA": return nos.indexOf(covs.stopGapWA.limit) === -1;
        case "OH": return nos.indexOf(covs.stopGapOH.limit) === -1;
        case "ND": return nos.indexOf(covs.stopGapND.limit) === -1;
        case "WY": return nos.indexOf(covs.stopGapWY.limit) === -1;
    }
    return false;
}
var shouldDisablePayrollTextBox = function (sg) { return stopGapSelectedForBop(sg) || sg.includeInd === 'N'; };
var LocIndexField = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Proxify"])(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, props.model.p.locations.indexOf(props.model) + 1); });
var AddressComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])({ get: function (loc) { return loc.address; }, val: function (value, loc) { return loc.noSpecificLocation == 'Y' ? '' : Object(_api_dfe_stream__WEBPACK_IMPORTED_MODULE_6__["required"])(value); } })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null,
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Editbox"], { maxLength: 50, style: { width: "calc(100% - 3px)", borderRadius: "1px", height: "18px" }, disabled: props.model.noSpecificLocation === 'Y', value: props.data, set: function (value) { return props.model.addressLine = props.model.address = value; } }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["ValidationLabel"], __assign({}, props))); });
var CityComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])({ get: function (loc) { return loc.city; }, val: function (value, loc) { return loc.noSpecificLocation == 'Y' ? '' : Object(_api_dfe_stream__WEBPACK_IMPORTED_MODULE_6__["required"])(value); } })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null,
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Editbox"], { style: { width: "calc(100% - 3px)", borderRadius: "1px", height: "18px" }, disabled: props.model.noSpecificLocation === 'Y', value: props.data, pattern: /[a-zA-Z ]{1,45}/, set: function (value) { return props.model.city = value; } }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["ValidationLabel"], __assign({}, props))); });
var StateComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])({ get: function (loc) { return Object(_api_generics__WEBPACK_IMPORTED_MODULE_5__["stringChoiceMaker"])(loc.state, states); }, val: simplyRequired })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null,
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], { emptyOption: false, data: props.data, set: function (val) { return props.processNoSpecificLocationChange(props.model, props.context, val, props.model.noSpecificLocation); }, style: { width: "45px", borderRadius: "1px", height: "20px" } }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["ValidationLabel"], __assign({}, props))); });
var ZipComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])({ get: function (loc) { return loc.zip; }, val: function (zip, loc) { return loc.noSpecificLocation === "Y" ? "" : !zip ? "Required" : zip.match(/^\d{5}$/) ? "" : "Zip code is < 5 digits"; } })(function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Editbox"], { style: { width: "calc(100% - 3px)", borderRadius: "1px", height: "18px" }, disabled: props.model.noSpecificLocation === 'Y', value: props.data, pattern: /\d{1,5}/, set: function (value) { return props.model.zip = value; } }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["ValidationLabel"], __assign({}, props)));
});
var NoSpecificComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])()(function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", { style: props.model.state.match(/MO|AZ|IN|IA|KY|MT|TX/) ? { visibility: "hidden" } : {}, className: "no-specific-field" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "checkbox", checked: props.model.noSpecificLocation === 'Y', onChange: function (event) { return props.processNoSpecificLocationChange(props.model, props.context, props.model.state, event.target.checked ? 'Y' : 'N'); } }),
        "No Specific");
});
var DeleteLoc = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Proxify"])(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, props.model.p.locations.length > 1 && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "button", onClick: function () { return _api_proxy__WEBPACK_IMPORTED_MODULE_2__["ProxyUtils"].detach(props.model); }, value: "Delete" })); });
var StopGapIncludedComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])({ get: function (sg) { return ({ value: sg.includeInd, items: [{ value: 'Y', description: "Yes" }, { value: 'N', description: "No" }] }); }, val: simplyRequired })(function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Radiolist"], { data: props.data, set: function (value) { return props.model.includeInd = value; } }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["ValidationLabel"], { error: props.error }));
});
var StopGapPayrollComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])({ get: function (sg) { return sg.payroll; }, val: function (value, sg) { return !(shouldDisablePayrollTextBox(sg) || value) && "Required"; } })(function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["EditboxMoney"], { value: props.data, set: function (value) { return props.model.payroll = value; }, disabled: shouldDisablePayrollTextBox(props.model), format: "99,999,999", style: { width: 80, borderRadius: 1, height: 18 } }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["ValidationLabel"], { error: props.error }));
});
var Envelope = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["SwitchPipe"])(function (clazz) { return !!clazz.code.match(/^\d{3,4}$/); });
var ClassCodeComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])({ get: function (clazz) { return clazz.code; }, val: function (value) { return !value ? "Required" : value.match(/^\d{4}$/) ? "" : "Invalid format"; } })(function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Editbox"], { value: props.data, set: function (value) { return props.model.code = value; }, pattern: /\d{1,4}/, style: { width: "50px", borderRadius: "1px", height: "18px" } }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["ValidationLabel"], __assign({}, props)));
});
var FTEmployeeComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])({ get: function (clazz) { return clazz.fulltimeemployeeamt; }, val: function (value, clazz) { return clazz.ifAny === "Y" || clazz.p.p.p.commonSet.quoteType !== "NB" || value ? "" : "Required"; } })(function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Editbox"], { value: props.data, set: function (value) { return props.model.fulltimeemployeeamt = value; }, pattern: /\d{1,3}/, style: { width: "40px", borderRadius: "1px", height: "18px" }, disabled: props.model.ifAny === "Y" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["ValidationLabel"], __assign({}, props)));
});
var PTEmployeeComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])({ get: function (clazz) { return clazz.parttimeemployeeamt; }, val: function (value, clazz) { return clazz.ifAny === "Y" || clazz.p.p.p.commonSet.quoteType !== "NB" || value ? "" : "Required"; } })(function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Editbox"], { value: props.data, set: function (value) { return props.model.parttimeemployeeamt = value; }, pattern: /\d{1,3}/, style: { width: "40px", borderRadius: "1px", height: "18px" }, disabled: props.model.ifAny === "Y" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["ValidationLabel"], __assign({}, props)));
});
var SeasonalEmployeeComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Proxify"])(function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Editbox"], { value: props.model.seasonalemployeeamt, set: function (value) { return props.model.seasonalemployeeamt = value; }, pattern: /\d{1,3}/, style: { width: "40px", borderRadius: "1px", height: "18px" }, disabled: props.model.ifAny === "Y" }));
});
var PayrollComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])({ get: function (clazz) { return clazz.payroll; }, val: function (value, clazz) { return clazz.ifAny === "Y" || value ? "" : "Required"; } })(function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["EditboxMoney"], { value: props.data, set: function (value) { return props.model.payroll = value; }, format: "99,999,999", style: { width: "80px", borderRadius: "1px", height: "18px" }, disabled: props.model.ifAny === "Y" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["ValidationLabel"], __assign({}, props)));
});
var IfAnyComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Proxify"])(function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", { style: { textAlign: "center" } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "checkbox", checked: props.model.ifAny === "Y", onChange: function (event) { return _api_proxy__WEBPACK_IMPORTED_MODULE_2__["ProxyUtils"].copy(props.model, __assign({ ifAny: event.target.checked ? "Y" : "N" }, (event.target.checked ? { fulltimeemployeeamt: '', parttimeemployeeamt: '', seasonalemployeeamt: '', payroll: '' } : {}))); }, disabled: props.model.ifAny !== "Y" && props.model.p.p.locations.map(function (loc) { return loc.classes; }).reduce(function (tot, cur) { return tot + cur.filter(function (cls) { return cls.ifAny !== "Y"; }).length; }, 0) < 2 }));
});
var SubcodeComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])({
    get: function (clazz, context) { return Object(_api_ajaxCache__WEBPACK_IMPORTED_MODULE_1__["ajaxFeed"])(context, clazz.subcode, {
        query: {
            action: 'getSubcodes',
            classCode: clazz.code,
            effectiveDate: clazz.p.p.effective || '20180303',
            lob: 'WORK',
            state: clazz.p.state,
            method: 'WORKClassCodeScriptHelper'
        },
        mapper: function (v) { return ({
            value: v.combined,
            description: v.classCode + " - " + v.description
        }); }
    }); },
    val: _api_ajaxCache__WEBPACK_IMPORTED_MODULE_1__["ajaxRequired"]
})(function (props) {
    return props.model.code.match(/^\d{3,4}$/) && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { display: "flex", flexFlow: "column" } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Radiolist"], { style: { padding: "2px 0px 0px 2px" }, data: { value: props.model.subcode, items: props.data.items }, set: function (value) { return props.model.subcode = value; } }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["ValidationLabel"], { error: props.error }));
});
var ClassRowComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])({ val: function (clazz) { return clazz.ifAny === "Y" && (clazz.fulltimeemployeeamt || clazz.parttimeemployeeamt || clazz.seasonalemployeeamt || clazz.payroll) ? "If Any is selected, you may not enter Employees or Payroll" : ""; } })(function (props) {
    var clazz = props.data, all = props.data.p.classes;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, all.indexOf(clazz) + 1),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ClassCodeComponent, { model: clazz }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FTEmployeeComponent, { model: clazz }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PTEmployeeComponent, { model: clazz }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](SeasonalEmployeeComponent, { model: clazz }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PayrollComponent, { model: clazz }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](IfAnyComponent, { model: clazz }),
            all.length > 1 &&
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", { style: { maxWidth: "50px" } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "button", onClick: function () { return _api_proxy__WEBPACK_IMPORTED_MODULE_2__["ProxyUtils"].detach(clazz); }, value: "Delete" }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", { colSpan: 8 },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Envelope, { model: clazz },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](SubcodeComponent, { model: clazz })))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", { colSpan: 8 },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["ValidationLabel"], { error: props.error }))));
}).to(ClassCodeComponent, FTEmployeeComponent, PTEmployeeComponent, PayrollComponent, Envelope.to(SubcodeComponent));
var ClassContainerComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])({ get: function (loc) { return loc.classes; } })(function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: "class-codes", style: { width: "100%" } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("thead", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", { colSpan: 8, style: { backgroundColor: "#7e8083", color: "#fff", fontSize: "12px", textAlign: "center", fontWeight: "bold", lineHeight: "2em" } }, "Class Informaton")),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "#"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Class Code"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "# F.T. Employees"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "# P.T. Employees"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "# Seasonal Employees"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Est. Annual Remuneration"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", { style: { whiteSpace: "nowrap" } }, "If any"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null, props.data.map(function (clazz) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ClassRowComponent, { key: clazz.key, model: clazz }); })));
}).to(ClassRowComponent);
var NonMonopolisticSwitch = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])({ get: function (loc) { return isMonopolisticState(loc) ? null : loc; } })(function (props) {
    return props.data ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", { colSpan: 7 },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ClassContainerComponent, { model: props.data }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", { colSpan: 7, className: "inline-section-header" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "button", onClick: function () { return props.data.classes.push({}); }, value: "Add additional class" })))) : null;
} //  <input type="button" onClick={() => props.showAvailable(loc.p.effective, loc.state)} value="Available class code list"/>
).to(ClassContainerComponent);
var MonopolisticSwitch = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])({ get: function (loc) { return isMonopolisticState(loc) ? loc.stopGap : null; } })(function (props) {
    return props.data ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", { colSpan: 7 },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: "stopgap-display", style: { width: "100%" } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("thead", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", { colSpan: 2, style: { backgroundColor: "#7e8083", color: "#fff", fontSize: "12px", textAlign: "center", fontWeight: "bold", lineHeight: "2em" } }, "Stop Gap - Employers Liability")),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Add Coverage"),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Payroll"))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](StopGapIncludedComponent, { model: props.data }),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](StopGapPayrollComponent, { model: props.data }))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tfoot", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", { colSpan: 2 }, stopGapSelectedForBop(props.data) ? "This coverage has already been added in the BOP portion of the quote" : "")),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", { colSpan: 2, className: "inline-section-header" }))))))) : null;
}).to(StopGapIncludedComponent, StopGapPayrollComponent);
var LocationRowComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])()(function (props) {
    var loc = props.model;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LocIndexField, { model: loc }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](AddressComponent, { model: loc }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CityComponent, { model: loc }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](StateComponent, { model: loc, processNoSpecificLocationChange: props.processNoSpecificLocationChange }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ZipComponent, { model: loc }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NoSpecificComponent, { model: loc, processNoSpecificLocationChange: props.processNoSpecificLocationChange }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DeleteLoc, { model: loc })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NonMonopolisticSwitch, { model: loc }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MonopolisticSwitch, { model: loc })));
}).to(AddressComponent, CityComponent, StateComponent, ZipComponent, NoSpecificComponent, NonMonopolisticSwitch, MonopolisticSwitch);
var LocationContainerComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])({
    get: function (work) { return work.locations; },
    val: function (locs) {
        if (locs.length === 0)
            return "at least one location is required";
        var totalPayroll = locs.map(function (loc) { return loc.classes; }).reduce(function (tot, cur) { return tot + cur.filter(function (cls) { return cls.ifAny !== 'Y'; }).length; }, 0);
        var allMonopolistic = locs.every(isMonopolisticState);
        return totalPayroll === 0 && !allMonopolistic ? "There must be payroll present on the submission" : "";
    }
})(function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { style: { width: "100%" } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("thead", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", { colSpan: 7, style: { backgroundColor: "#7e8083", color: "#fff", fontSize: "12px", textAlign: "center", fontWeight: "bold", lineHeight: "2em" } }, "Location Informaton")),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "#"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", { style: { width: "45%" } }, "Street"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", { style: { width: "30%" } }, "City"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "State"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", { style: { width: "70px", minWidth: "70px" } }, "Zip Code"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", { colSpan: 2 }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null, props.data.map(function (loc) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LocationRowComponent, { key: loc.key, model: loc, processNoSpecificLocationChange: props.processNoSpecificLocationChange, showAvailable: props.showAvailable }); }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { onClick: function () { return props.addLocation(props.data); } }, "Add additional location"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["ValidationLabel"], __assign({}, props)));
}).to(LocationRowComponent);
var QuoteWorkClassComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])({ get: function (root) { return root.policy.workSet; } })(/** @class */ (function (_super) {
    __extends(class_1, _super);
    function class_1(props) {
        var _this = _super.call(this, props) || this;
        var ref = props.model.insuredSet.address;
        _this.locationDefaults = { address: ref.address, city: ref.city, state: ref.state, zip: ref.zip };
        _this.locationDefaults2 = props.model.policy.bbopSet.locationList.map(function (ref) { return ({ address: ref.address, city: ref.city, state: ref.state, zip: ref.zip }); });
        var locs = props.data.locations;
        locs.length || locs.push(_this.locationDefaults);
        locs[0].classes.length || locs[0].classes.push({});
        return _this;
    }
    class_1.prototype.addLocation = function (locs) {
        var index = locs.length;
        var defaults = this.locationDefaults2[index] || { state: this.locationDefaults.state };
        locs.push(defaults);
        locs[index].classes.push({});
    };
    class_1.prototype.processNoSpecificLocationChange = function (loc, context, newState, newNoSpecificLocation) {
        newNoSpecificLocation = newNoSpecificLocation || 'N';
        if (noSpecificDisabled(newState)) {
            newNoSpecificLocation = 'N';
        }
        if (newNoSpecificLocation === 'Y') {
            var thisLoc_1 = loc, otherLocs_1 = loc.p.locations.filter(function (loc) { return loc.state == newState && loc.noSpecificLocation === 'Y'; });
            var update_1 = function () {
                otherLocs_1.forEach(function (otherLoc) { return (otherLoc.classes.forEach(function (clazz) { return (thisLoc_1.classes.push(clazz), _api_proxy__WEBPACK_IMPORTED_MODULE_2__["ProxyUtils"].detach(clazz)); }), _api_proxy__WEBPACK_IMPORTED_MODULE_2__["ProxyUtils"].detach(otherLoc)); });
                _api_proxy__WEBPACK_IMPORTED_MODULE_2__["ProxyUtils"].copy(loc, { noSpecificLocation: newNoSpecificLocation, address: '', city: '', zip: '', state: newState });
                fixClassCount(loc);
            };
            if (otherLocs_1.length) {
                $('<div>').text('Non-specific location for this state already exists. Would you like to merge?').dialog({
                    title: 'Question',
                    modal: true,
                    resizable: false,
                    close: function () {
                        context.reject();
                        $(this).dialog('destroy');
                    },
                    buttons: {
                        Yes: function () {
                            update_1();
                            $(this).dialog('destroy');
                        },
                        Cancel: function () {
                            context.reject();
                            $(this).dialog('destroy');
                        }
                    }
                });
            }
            else {
                update_1();
            }
        }
        else {
            _api_proxy__WEBPACK_IMPORTED_MODULE_2__["ProxyUtils"].copy(loc, __assign({ state: newState, noSpecificLocation: newNoSpecificLocation }, newNoSpecificLocation === 'N' && loc.noSpecificLocation === 'Y' && newState == this.locationDefaults.state ? this.locationDefaults : {}));
            fixClassCount(loc);
        }
    };
    class_1.prototype.showAvailable = function (effectiveDt, state) {
        _api_ajaxCache__WEBPACK_IMPORTED_MODULE_1__["ajaxCache"].get({ method: 'WORKClassCodeScriptHelper', action: 'getList', effectiveDate: effectiveDt, list: 'classcode', lob: 'WORK', state: state }).promise.then(function (data) { return $('<div>').text(data.result.map(function (e) { return e.description; }).join('\n')).css('white-space', 'pre-wrap').dialog({
            title: 'Available Class Code List',
            width: 'auto',
            height: 400,
            close: function () {
                $(this).dialog('destroy');
            }
        }); });
    };
    class_1.prototype.render = function () {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { width: 500 } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LocationContainerComponent, { model: this.props.data, addLocation: this.addLocation.bind(this), processNoSpecificLocationChange: this.processNoSpecificLocationChange.bind(this), showAvailable: this.showAvailable.bind(this) }));
    };
    return class_1;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]))).to(LocationContainerComponent);
var QuoteWorkClassForm = QuoteWorkClassComponent.field;


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

}]);
//# sourceMappingURL=3.js.map