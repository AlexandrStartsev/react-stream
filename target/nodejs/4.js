exports.ids = [4];
exports.modules = {

/***/ "./src/ts/forms/quote.work.class.css":
/*!*******************************************!*\
  !*** ./src/ts/forms/quote.work.class.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack://listener/./src/ts/forms/quote.work.class.css?");

/***/ }),

/***/ "./src/ts/forms/quote.work.class.tsx":
/*!*******************************************!*\
  !*** ./src/ts/forms/quote.work.class.tsx ***!
  \*******************************************/
/*! exports provided: FormComponent, form, modelImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FormComponent\", function() { return QuoteWorkClassComponent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"form\", function() { return QuoteWorkClassForm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_ajaxCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/ajaxCache */ \"./src/ts/api/ajaxCache.ts\");\n/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/proxy */ \"./src/ts/api/proxy.ts\");\n/* harmony import */ var _gen_impl_com_arrow_model_def_corecomm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gen/impl/com.arrow.model.def.corecomm */ \"./src/ts/gen/impl/com.arrow.model.def.corecomm.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"modelImpl\", function() { return _gen_impl_com_arrow_model_def_corecomm__WEBPACK_IMPORTED_MODULE_3__[\"CoreCommVsProxy\"]; });\n\n/* harmony import */ var _gen_definitions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../gen/definitions */ \"./src/ts/gen/definitions.ts\");\n/* harmony import */ var _api_generics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/generics */ \"./src/ts/api/generics.tsx\");\n/* harmony import */ var _api_dfe_stream__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/dfe-stream */ \"./src/ts/api/dfe-stream.ts\");\n/* harmony import */ var _api_react_connect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/react-connect */ \"./src/ts/api/react-connect.ts\");\n/* harmony import */ var _resources_dfe_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../resources/dfe-style.css */ \"./resources/dfe-style.css\");\n/* harmony import */ var _resources_dfe_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_resources_dfe_style_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _quote_work_class_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quote.work.class.css */ \"./src/ts/forms/quote.work.class.css\");\n/* harmony import */ var _quote_work_class_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_quote_work_class_css__WEBPACK_IMPORTED_MODULE_9__);\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __assign = (undefined && undefined.__assign) || Object.assign || function(t) {\r\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n        s = arguments[i];\r\n        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n            t[p] = s[p];\r\n    }\r\n    return t;\r\n};\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar BbopStopGapLimit = _gen_definitions__WEBPACK_IMPORTED_MODULE_4__[\"com\"].arrow.model.def.corecomm.bbop.coverages.BbopStopGapLimit;\r\nvar Fragment = react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"];\r\nif (false) {}\r\nvar states = Object.keys(_gen_definitions__WEBPACK_IMPORTED_MODULE_4__[\"com\"].arrow.model.common.States).sort().map(function (s) { return s.toUpperCase(); });\r\nvar simplyRequired = function (ret) { return Object(_api_dfe_stream__WEBPACK_IMPORTED_MODULE_6__[\"required\"])(ret); };\r\nvar noSpecificDisabled = function (state) { return !!state.match(/^(MO|AZ|IN|IA|KY|MT|TX)$/); };\r\nvar isMonopolisticState = function (loc) { return !!loc.state.match(/^(WA|OH|ND|WY)$/); };\r\nvar fixClassCount = function (loc) { return isMonopolisticState(loc) ? loc.classes.forEach(_api_proxy__WEBPACK_IMPORTED_MODULE_2__[\"ProxyUtils\"].detach) : (loc.classes.length || loc.classes.push({})); };\r\nfunction stopGapSelectedForBop(sg) {\r\n    var state = sg.p.state, covs = sg.p.p.p.bbopSet.coverages, nos = [BbopStopGapLimit.NULL, BbopStopGapLimit.NO_COVERAGE];\r\n    switch (state.toUpperCase()) {\r\n        case \"WA\": return nos.indexOf(covs.stopGapWA.limit) === -1;\r\n        case \"OH\": return nos.indexOf(covs.stopGapOH.limit) === -1;\r\n        case \"ND\": return nos.indexOf(covs.stopGapND.limit) === -1;\r\n        case \"WY\": return nos.indexOf(covs.stopGapWY.limit) === -1;\r\n    }\r\n    return false;\r\n}\r\nvar shouldDisablePayrollTextBox = function (sg) { return stopGapSelectedForBop(sg) || sg.includeInd === 'N'; };\r\nvar LocIndexField = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__[\"Proxify\"])(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"td\", null, props.model.p.locations.indexOf(props.model) + 1); });\r\nvar AddressComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__[\"Pipe\"])({ get: function (loc) { return loc.address; }, val: function (value, loc) { return loc.noSpecificLocation == 'Y' ? '' : Object(_api_dfe_stream__WEBPACK_IMPORTED_MODULE_6__[\"required\"])(value); } })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"td\", null,\r\n    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_api_generics__WEBPACK_IMPORTED_MODULE_5__[\"Editbox\"], { maxLength: 50, style: { width: \"calc(100% - 3px)\", borderRadius: \"1px\", height: \"18px\" }, disabled: props.model.noSpecificLocation === 'Y', value: props.data, set: function (value) { return props.model.addressLine = props.model.address = value; } }),\r\n    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_api_generics__WEBPACK_IMPORTED_MODULE_5__[\"ValidationLabel\"], __assign({}, props))); });\r\nvar CityComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__[\"Pipe\"])({ get: function (loc) { return loc.city; }, val: function (value, loc) { return loc.noSpecificLocation == 'Y' ? '' : Object(_api_dfe_stream__WEBPACK_IMPORTED_MODULE_6__[\"required\"])(value); } })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"td\", null,\r\n    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_api_generics__WEBPACK_IMPORTED_MODULE_5__[\"Editbox\"], { style: { width: \"calc(100% - 3px)\", borderRadius: \"1px\", height: \"18px\" }, disabled: props.model.noSpecificLocation === 'Y', value: props.data, pattern: /[a-zA-Z ]{1,45}/, set: function (value) { return props.model.city = value; } }),\r\n    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_api_generics__WEBPACK_IMPORTED_MODULE_5__[\"ValidationLabel\"], __assign({}, props))); });\r\nvar StateComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__[\"Pipe\"])({ get: function (loc) { return Object(_api_generics__WEBPACK_IMPORTED_MODULE_5__[\"stringChoiceMaker\"])(loc.state, states); }, val: simplyRequired })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"td\", null,\r\n    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_api_generics__WEBPACK_IMPORTED_MODULE_5__[\"Dropdown\"], { emptyOption: false, data: props.data, set: function (val) { return props.processNoSpecificLocationChange(props.model, props.context, val, props.model.noSpecificLocation); }, style: { width: \"45px\", borderRadius: \"1px\", height: \"20px\" } }),\r\n    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_api_generics__WEBPACK_IMPORTED_MODULE_5__[\"ValidationLabel\"], __assign({}, props))); });\r\nvar ZipComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__[\"Pipe\"])({ get: function (loc) { return loc.zip; }, val: function (zip, loc) { return loc.noSpecificLocation === \"Y\" ? \"\" : !zip ? \"Required\" : zip.match(/^\\d{5}$/) ? \"\" : \"Zip code is < 5 digits\"; } })(function (props) {\r\n    return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"td\", null,\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_api_generics__WEBPACK_IMPORTED_MODULE_5__[\"Editbox\"], { style: { width: \"calc(100% - 3px)\", borderRadius: \"1px\", height: \"18px\" }, disabled: props.model.noSpecificLocation === 'Y', value: props.data, pattern: /\\d{1,5}/, set: function (value) { return props.model.zip = value; } }),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_api_generics__WEBPACK_IMPORTED_MODULE_5__[\"ValidationLabel\"], __assign({}, props)));\r\n});\r\nvar NoSpecificComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__[\"Pipe\"])()(function (props) {\r\n    return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"td\", { style: props.model.state.match(/MO|AZ|IN|IA|KY|MT|TX/) ? { visibility: \"hidden\" } : {}, className: \"no-specific-field\" },\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"input\", { type: \"checkbox\", checked: props.model.noSpecificLocation === 'Y', onChange: function (event) { return props.processNoSpecificLocationChange(props.model, props.context, props.model.state, event.target.checked ? 'Y' : 'N'); } }),\r\n        \"No Specific\");\r\n});\r\nvar DeleteLoc = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__[\"Proxify\"])(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"td\", null, props.model.p.locations.length > 1 && react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"input\", { type: \"button\", onClick: function () { return _api_proxy__WEBPACK_IMPORTED_MODULE_2__[\"ProxyUtils\"].detach(props.model); }, value: \"Delete\" })); });\r\nvar StopGapIncludedComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__[\"Pipe\"])({ get: function (sg) { return ({ value: sg.includeInd, items: [{ value: 'Y', description: \"Yes\" }, { value: 'N', description: \"No\" }] }); }, val: simplyRequired })(function (props) {\r\n    return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"td\", null,\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_api_generics__WEBPACK_IMPORTED_MODULE_5__[\"Radiolist\"], { data: props.data, set: function (value) { return props.model.includeInd = value; } }),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_api_generics__WEBPACK_IMPORTED_MODULE_5__[\"ValidationLabel\"], { error: props.error }));\r\n});\r\nvar StopGapPayrollComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__[\"Pipe\"])({ get: function (sg) { return sg.payroll; }, val: function (value, sg) { return !(shouldDisablePayrollTextBox(sg) || value) && \"Required\"; } })(function (props) {\r\n    return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"td\", null,\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_api_generics__WEBPACK_IMPORTED_MODULE_5__[\"EditboxMoney\"], { value: props.data, set: function (value) { return props.model.payroll = value; }, disabled: shouldDisablePayrollTextBox(props.model), format: \"99,999,999\", style: { width: 80, borderRadius: 1, height: 18 } }),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_api_generics__WEBPACK_IMPORTED_MODULE_5__[\"ValidationLabel\"], { error: props.error }));\r\n});\r\nvar Envelope = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__[\"SwitchPipe\"])(function (clazz) { return !!clazz.code.match(/^\\d{3,4}$/); });\r\nvar ClassCodeComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__[\"Pipe\"])({ get: function (clazz) { return clazz.code; }, val: function (value) { return !value ? \"Required\" : value.match(/^\\d{4}$/) ? \"\" : \"Invalid format\"; } })(function (props) {\r\n    return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"td\", null,\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_api_generics__WEBPACK_IMPORTED_MODULE_5__[\"Editbox\"], { value: props.data, set: function (value) { return props.model.code = value; }, pattern: /\\d{1,4}/, style: { width: \"50px\", borderRadius: \"1px\", height: \"18px\" } }),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_api_generics__WEBPACK_IMPORTED_MODULE_5__[\"ValidationLabel\"], __assign({}, props)));\r\n});\r\nvar FTEmployeeComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__[\"Pipe\"])({ get: function (clazz) { return clazz.fulltimeemployeeamt; }, val: function (value, clazz) { return clazz.ifAny === \"Y\" || clazz.p.p.p.commonSet.quoteType !== \"NB\" || value ? \"\" : \"Required\"; } })(function (props) {\r\n    return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"td\", null,\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_api_generics__WEBPACK_IMPORTED_MODULE_5__[\"Editbox\"], { value: props.data, set: function (value) { return props.model.fulltimeemployeeamt = value; }, pattern: /\\d{1,3}/, style: { width: \"40px\", borderRadius: \"1px\", height: \"18px\" }, disabled: props.model.ifAny === \"Y\" }),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_api_generics__WEBPACK_IMPORTED_MODULE_5__[\"ValidationLabel\"], __assign({}, props)));\r\n});\r\nvar PTEmployeeComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__[\"Pipe\"])({ get: function (clazz) { return clazz.parttimeemployeeamt; }, val: function (value, clazz) { return clazz.ifAny === \"Y\" || clazz.p.p.p.commonSet.quoteType !== \"NB\" || value ? \"\" : \"Required\"; } })(function (props) {\r\n    return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"td\", null,\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_api_generics__WEBPACK_IMPORTED_MODULE_5__[\"Editbox\"], { value: props.data, set: function (value) { return props.model.parttimeemployeeamt = value; }, pattern: /\\d{1,3}/, style: { width: \"40px\", borderRadius: \"1px\", height: \"18px\" }, disabled: props.model.ifAny === \"Y\" }),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_api_generics__WEBPACK_IMPORTED_MODULE_5__[\"ValidationLabel\"], __assign({}, props)));\r\n});\r\nvar SeasonalEmployeeComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__[\"Proxify\"])(function (props) {\r\n    return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"td\", null,\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_api_generics__WEBPACK_IMPORTED_MODULE_5__[\"Editbox\"], { value: props.model.seasonalemployeeamt, set: function (value) { return props.model.seasonalemployeeamt = value; }, pattern: /\\d{1,3}/, style: { width: \"40px\", borderRadius: \"1px\", height: \"18px\" }, disabled: props.model.ifAny === \"Y\" }));\r\n});\r\nvar PayrollComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__[\"Pipe\"])({ get: function (clazz) { return clazz.payroll; }, val: function (value, clazz) { return clazz.ifAny === \"Y\" || value ? \"\" : \"Required\"; } })(function (props) {\r\n    return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"td\", null,\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_api_generics__WEBPACK_IMPORTED_MODULE_5__[\"EditboxMoney\"], { value: props.data, set: function (value) { return props.model.payroll = value; }, format: \"99,999,999\", style: { width: \"80px\", borderRadius: \"1px\", height: \"18px\" }, disabled: props.model.ifAny === \"Y\" }),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_api_generics__WEBPACK_IMPORTED_MODULE_5__[\"ValidationLabel\"], __assign({}, props)));\r\n});\r\nvar IfAnyComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__[\"Proxify\"])(function (props) {\r\n    return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"td\", { style: { textAlign: \"center\" } },\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"input\", { type: \"checkbox\", checked: props.model.ifAny === \"Y\", onChange: function (event) { return _api_proxy__WEBPACK_IMPORTED_MODULE_2__[\"ProxyUtils\"].copy(props.model, __assign({ ifAny: event.target.checked ? \"Y\" : \"N\" }, (event.target.checked ? { fulltimeemployeeamt: '', parttimeemployeeamt: '', seasonalemployeeamt: '', payroll: '' } : {}))); }, disabled: props.model.ifAny !== \"Y\" && props.model.p.p.locations.map(function (loc) { return loc.classes; }).reduce(function (tot, cur) { return tot + cur.filter(function (cls) { return cls.ifAny !== \"Y\"; }).length; }, 0) < 2 }));\r\n});\r\nvar SubcodeComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__[\"Pipe\"])({\r\n    get: function (clazz, context) { return Object(_api_ajaxCache__WEBPACK_IMPORTED_MODULE_1__[\"ajaxFeed\"])(context, clazz.subcode, {\r\n        query: {\r\n            action: 'getSubcodes',\r\n            classCode: clazz.code,\r\n            effectiveDate: clazz.p.p.effective || '20180303',\r\n            lob: 'WORK',\r\n            state: clazz.p.state,\r\n            method: 'WORKClassCodeScriptHelper'\r\n        },\r\n        mapper: function (v) { return ({\r\n            value: v.combined,\r\n            description: v.classCode + \" - \" + v.description\r\n        }); }\r\n    }); },\r\n    val: _api_ajaxCache__WEBPACK_IMPORTED_MODULE_1__[\"ajaxRequired\"]\r\n})(function (props) {\r\n    return props.model.code.match(/^\\d{3,4}$/) && react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { style: { display: \"flex\", flexFlow: \"column\" } },\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_api_generics__WEBPACK_IMPORTED_MODULE_5__[\"Radiolist\"], { style: { padding: \"2px 0px 0px 2px\" }, data: { value: props.model.subcode, items: props.data.items }, set: function (value) { return props.model.subcode = value; } }),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_api_generics__WEBPACK_IMPORTED_MODULE_5__[\"ValidationLabel\"], { error: props.error }));\r\n});\r\nvar ClassRowComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__[\"Pipe\"])({ val: function (clazz) { return clazz.ifAny === \"Y\" && (clazz.fulltimeemployeeamt || clazz.parttimeemployeeamt || clazz.seasonalemployeeamt || clazz.payroll) ? \"If Any is selected, you may not enter Employees or Payroll\" : \"\"; } })(function (props) {\r\n    var clazz = props.data, all = props.data.p.classes;\r\n    return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](Fragment, null,\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"tr\", null,\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"td\", null, all.indexOf(clazz) + 1),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](ClassCodeComponent, { model: clazz }),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](FTEmployeeComponent, { model: clazz }),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](PTEmployeeComponent, { model: clazz }),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](SeasonalEmployeeComponent, { model: clazz }),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](PayrollComponent, { model: clazz }),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](IfAnyComponent, { model: clazz }),\r\n            all.length > 1 &&\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"td\", { style: { maxWidth: \"50px\" } },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"input\", { type: \"button\", onClick: function () { return _api_proxy__WEBPACK_IMPORTED_MODULE_2__[\"ProxyUtils\"].detach(clazz); }, value: \"Delete\" }))),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"tr\", null,\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"td\", { colSpan: 8 },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](Envelope, { model: clazz },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](SubcodeComponent, { model: clazz })))),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"tr\", null,\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"td\", { colSpan: 8 },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_api_generics__WEBPACK_IMPORTED_MODULE_5__[\"ValidationLabel\"], { error: props.error }))));\r\n}).to(ClassCodeComponent, FTEmployeeComponent, PTEmployeeComponent, PayrollComponent, Envelope.to(SubcodeComponent));\r\nvar ClassContainerComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__[\"Pipe\"])({ get: function (loc) { return loc.classes; } })(function (props) {\r\n    return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"table\", { className: \"class-codes\", style: { width: \"100%\" } },\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"thead\", null,\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"tr\", null,\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"th\", { colSpan: 8, style: { backgroundColor: \"#7e8083\", color: \"#fff\", fontSize: \"12px\", textAlign: \"center\", fontWeight: \"bold\", lineHeight: \"2em\" } }, \"Class Informaton\")),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"tr\", null,\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"th\", null, \"#\"),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"th\", null, \"Class Code\"),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"th\", null, \"# F.T. Employees\"),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"th\", null, \"# P.T. Employees\"),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"th\", null, \"# Seasonal Employees\"),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"th\", null, \"Est. Annual Remuneration\"),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"th\", { style: { whiteSpace: \"nowrap\" } }, \"If any\"),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"th\", null))),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"tbody\", null, props.data.map(function (clazz) { return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](ClassRowComponent, { key: clazz.key, model: clazz }); })));\r\n}).to(ClassRowComponent);\r\nvar NonMonopolisticSwitch = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__[\"Pipe\"])({ get: function (loc) { return isMonopolisticState(loc) ? null : loc; } })(function (props) {\r\n    return props.data ? react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](Fragment, null,\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"tr\", null,\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"td\", { colSpan: 7 },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](ClassContainerComponent, { model: props.data }))),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"tr\", null,\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"td\", { colSpan: 7, className: \"inline-section-header\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"input\", { type: \"button\", onClick: function () { return props.data.classes.push({}); }, value: \"Add additional class\" })))) : null;\r\n} //  <input type=\"button\" onClick={() => props.showAvailable(loc.p.effective, loc.state)} value=\"Available class code list\"/>\r\n).to(ClassContainerComponent);\r\nvar MonopolisticSwitch = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__[\"Pipe\"])({ get: function (loc) { return isMonopolisticState(loc) ? loc.stopGap : null; } })(function (props) {\r\n    return props.data ? react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](Fragment, null,\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"tr\", null,\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"td\", { colSpan: 7 },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"table\", { className: \"stopgap-display\", style: { width: \"100%\" } },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"thead\", null,\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"tr\", null,\r\n                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"th\", { colSpan: 2, style: { backgroundColor: \"#7e8083\", color: \"#fff\", fontSize: \"12px\", textAlign: \"center\", fontWeight: \"bold\", lineHeight: \"2em\" } }, \"Stop Gap - Employers Liability\")),\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"tr\", null,\r\n                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"th\", null, \"Add Coverage\"),\r\n                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"th\", null, \"Payroll\"))),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"tbody\", null,\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"tr\", null,\r\n                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](StopGapIncludedComponent, { model: props.data }),\r\n                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](StopGapPayrollComponent, { model: props.data }))),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"tfoot\", null,\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"tr\", null,\r\n                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"th\", { colSpan: 2 }, stopGapSelectedForBop(props.data) ? \"This coverage has already been added in the BOP portion of the quote\" : \"\")),\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"tr\", null,\r\n                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"th\", { colSpan: 2, className: \"inline-section-header\" }))))))) : null;\r\n}).to(StopGapIncludedComponent, StopGapPayrollComponent);\r\nvar LocationRowComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__[\"Pipe\"])()(function (props) {\r\n    var loc = props.model;\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](Fragment, null,\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"tr\", null,\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](LocIndexField, { model: loc }),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](AddressComponent, { model: loc }),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](CityComponent, { model: loc }),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](StateComponent, { model: loc, processNoSpecificLocationChange: props.processNoSpecificLocationChange }),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](ZipComponent, { model: loc }),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](NoSpecificComponent, { model: loc, processNoSpecificLocationChange: props.processNoSpecificLocationChange }),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](DeleteLoc, { model: loc })),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](NonMonopolisticSwitch, { model: loc }),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](MonopolisticSwitch, { model: loc })));\r\n}).to(AddressComponent, CityComponent, StateComponent, ZipComponent, NoSpecificComponent, NonMonopolisticSwitch, MonopolisticSwitch);\r\nvar LocationContainerComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__[\"Pipe\"])({\r\n    get: function (work) { return work.locations; },\r\n    val: function (locs) {\r\n        if (locs.length === 0)\r\n            return \"at least one location is required\";\r\n        var totalPayroll = locs.map(function (loc) { return loc.classes; }).reduce(function (tot, cur) { return tot + cur.filter(function (cls) { return cls.ifAny !== 'Y'; }).length; }, 0);\r\n        var allMonopolistic = locs.every(isMonopolisticState);\r\n        return totalPayroll === 0 && !allMonopolistic ? \"There must be payroll present on the submission\" : \"\";\r\n    }\r\n})(function (props) {\r\n    return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](Fragment, null,\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"table\", { style: { width: \"100%\" } },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"thead\", null,\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"tr\", null,\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"th\", { colSpan: 7, style: { backgroundColor: \"#7e8083\", color: \"#fff\", fontSize: \"12px\", textAlign: \"center\", fontWeight: \"bold\", lineHeight: \"2em\" } }, \"Location Informaton\")),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"tr\", null,\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"th\", null, \"#\"),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"th\", { style: { width: \"45%\" } }, \"Street\"),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"th\", { style: { width: \"30%\" } }, \"City\"),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"th\", null, \"State\"),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"th\", { style: { width: \"70px\", minWidth: \"70px\" } }, \"Zip Code\"),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"th\", { colSpan: 2 }))),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"tbody\", null, props.data.map(function (loc) { return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](LocationRowComponent, { key: loc.key, model: loc, processNoSpecificLocationChange: props.processNoSpecificLocationChange, showAvailable: props.showAvailable }); }))),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"button\", { onClick: function () { return props.addLocation(props.data); } }, \"Add additional location\"),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_api_generics__WEBPACK_IMPORTED_MODULE_5__[\"ValidationLabel\"], __assign({}, props)));\r\n}).to(LocationRowComponent);\r\nvar QuoteWorkClassComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__[\"Pipe\"])({ get: function (root) { return root.policy.workSet; } })(/** @class */ (function (_super) {\r\n    __extends(class_1, _super);\r\n    function class_1(props) {\r\n        var _this = _super.call(this, props) || this;\r\n        var ref = props.model.insuredSet.address;\r\n        _this.locationDefaults = { address: ref.address, city: ref.city, state: ref.state, zip: ref.zip };\r\n        _this.locationDefaults2 = props.model.policy.bbopSet.locationList.map(function (ref) { return ({ address: ref.address, city: ref.city, state: ref.state, zip: ref.zip }); });\r\n        var locs = props.data.locations;\r\n        locs.length || locs.push(_this.locationDefaults);\r\n        locs[0].classes.length || locs[0].classes.push({});\r\n        return _this;\r\n    }\r\n    class_1.prototype.addLocation = function (locs) {\r\n        var index = locs.length;\r\n        var defaults = this.locationDefaults2[index] || { state: this.locationDefaults.state };\r\n        locs.push(defaults);\r\n        locs[index].classes.push({});\r\n    };\r\n    class_1.prototype.processNoSpecificLocationChange = function (loc, context, newState, newNoSpecificLocation) {\r\n        newNoSpecificLocation = newNoSpecificLocation || 'N';\r\n        if (noSpecificDisabled(newState)) {\r\n            newNoSpecificLocation = 'N';\r\n        }\r\n        if (newNoSpecificLocation === 'Y') {\r\n            var thisLoc_1 = loc, otherLocs_1 = loc.p.locations.filter(function (loc) { return loc.state == newState && loc.noSpecificLocation === 'Y'; });\r\n            var update_1 = function () {\r\n                otherLocs_1.forEach(function (otherLoc) { return (otherLoc.classes.forEach(function (clazz) { return (thisLoc_1.classes.push(clazz), _api_proxy__WEBPACK_IMPORTED_MODULE_2__[\"ProxyUtils\"].detach(clazz)); }), _api_proxy__WEBPACK_IMPORTED_MODULE_2__[\"ProxyUtils\"].detach(otherLoc)); });\r\n                _api_proxy__WEBPACK_IMPORTED_MODULE_2__[\"ProxyUtils\"].copy(loc, { noSpecificLocation: newNoSpecificLocation, address: '', city: '', zip: '', state: newState });\r\n                fixClassCount(loc);\r\n            };\r\n            if (otherLocs_1.length) {\r\n                $('<div>').text('Non-specific location for this state already exists. Would you like to merge?').dialog({\r\n                    title: 'Question',\r\n                    modal: true,\r\n                    resizable: false,\r\n                    close: function () {\r\n                        context.reject();\r\n                        $(this).dialog('destroy');\r\n                    },\r\n                    buttons: {\r\n                        Yes: function () {\r\n                            update_1();\r\n                            $(this).dialog('destroy');\r\n                        },\r\n                        Cancel: function () {\r\n                            context.reject();\r\n                            $(this).dialog('destroy');\r\n                        }\r\n                    }\r\n                });\r\n            }\r\n            else {\r\n                update_1();\r\n            }\r\n        }\r\n        else {\r\n            _api_proxy__WEBPACK_IMPORTED_MODULE_2__[\"ProxyUtils\"].copy(loc, __assign({ state: newState, noSpecificLocation: newNoSpecificLocation }, newNoSpecificLocation === 'N' && loc.noSpecificLocation === 'Y' && newState == this.locationDefaults.state ? this.locationDefaults : {}));\r\n            fixClassCount(loc);\r\n        }\r\n    };\r\n    class_1.prototype.showAvailable = function (effectiveDt, state) {\r\n        _api_ajaxCache__WEBPACK_IMPORTED_MODULE_1__[\"ajaxCache\"].get({ method: 'WORKClassCodeScriptHelper', action: 'getList', effectiveDate: effectiveDt, list: 'classcode', lob: 'WORK', state: state }).promise.then(function (data) { return $('<div>').text(data.result.map(function (e) { return e.description; }).join('\\n')).css('white-space', 'pre-wrap').dialog({\r\n            title: 'Available Class Code List',\r\n            width: 'auto',\r\n            height: 400,\r\n            close: function () {\r\n                $(this).dialog('destroy');\r\n            }\r\n        }); });\r\n    };\r\n    class_1.prototype.render = function () {\r\n        return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { style: { width: 500 } },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](LocationContainerComponent, { model: this.props.data, addLocation: this.addLocation.bind(this), processNoSpecificLocationChange: this.processNoSpecificLocationChange.bind(this), showAvailable: this.showAvailable.bind(this) }));\r\n    };\r\n    return class_1;\r\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]))).to(LocationContainerComponent);\r\nvar QuoteWorkClassForm = QuoteWorkClassComponent.field;\r\n\r\n\n\n//# sourceURL=webpack://listener/./src/ts/forms/quote.work.class.tsx?");

/***/ })

};;