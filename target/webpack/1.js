(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/css-loader/index.js!./src/ts/forms/quote.cmau.car.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader!./src/ts/forms/quote.cmau.car.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./src/ts/forms/quote.cmau.car.css":
/*!*****************************************!*\
  !*** ./src/ts/forms/quote.cmau.car.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./quote.cmau.car.css */ "./node_modules/css-loader/index.js!./src/ts/forms/quote.cmau.car.css");

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

/***/ "./src/ts/forms/quote.cmau.car.tsx":
/*!*****************************************!*\
  !*** ./src/ts/forms/quote.cmau.car.tsx ***!
  \*****************************************/
/*! exports provided: FormComponent, form, modelImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return LocationTabComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "form", function() { return QuoteCmauCarForm; });
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
/* harmony import */ var _quote_cmau_car_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quote.cmau.car.css */ "./src/ts/forms/quote.cmau.car.css");
/* harmony import */ var _quote_cmau_car_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_quote_cmau_car_css__WEBPACK_IMPORTED_MODULE_9__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var _a;










if (typeof window !== "undefined") {
    window["showHelp"] = function (url) { return window.open(url, "DetailWin", "scrollbars=yes,resizable=yes,toolbar=no,height=250,width=250").focus(); };
}
var textValueMapper = function (v) { return (typeof v === 'string' ? { value: v, description: v } : { value: v.value, description: v.text }); };
var simplyRequired = function (arg) { return Object(_api_dfe_stream__WEBPACK_IMPORTED_MODULE_6__["required"])(arg); };
var vehDetailsDisabled = function (car) { return car.hasvin === 'Y' && (!car.vinnumber || car.vinoverride !== 'Y'); };
var MakeSwitch = function (test) { return Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["SwitchPipe"])(test); };
var _b = _gen_definitions__WEBPACK_IMPORTED_MODULE_4__["com"].arrow.model.def.corecomm.cmau.location.car, ValuationMethod = _b.ValuationMethod, MobileHomeType = _b.MobileHomeType, MotorHomeSize = _b.MotorHomeSize, GolfType = _b.GolfType, GolfUse = _b.GolfUse, VehicleType = _b.VehicleType, VehicleUse = _b.VehicleUse, OperatorExperience = _b.OperatorExperience, OperatorUse = _b.OperatorUse, VehicleClass = _b.VehicleClass, TrailerType = _b.TrailerType, RadiusClass = _b.RadiusClass, SecondaryClass = _b.SecondaryClass;
var VehicleUseItems = Object(_api_generics__WEBPACK_IMPORTED_MODULE_5__["enumChoiceMaker"])(null, VehicleUse).items;
var OperatorExperienceItems = Object(_api_generics__WEBPACK_IMPORTED_MODULE_5__["enumChoiceMaker"])(null, OperatorExperience).items;
var OperatorUseItems = Object(_api_generics__WEBPACK_IMPORTED_MODULE_5__["enumChoiceMaker"])(null, OperatorUse).items;
var VehicleClassItems = Object(_api_generics__WEBPACK_IMPORTED_MODULE_5__["enumChoiceMaker"])(null, VehicleClass).items;
var TrailerTypeItems = Object(_api_generics__WEBPACK_IMPORTED_MODULE_5__["enumChoiceMaker"])(null, TrailerType).items;
var RadiusClassItems = Object(_api_generics__WEBPACK_IMPORTED_MODULE_5__["enumChoiceMaker"])(null, RadiusClass).items;
var SecondaryClassItems = Object(_api_generics__WEBPACK_IMPORTED_MODULE_5__["enumChoiceMaker"])(null, SecondaryClass).items;
var GolfTypeItems = Object(_api_generics__WEBPACK_IMPORTED_MODULE_5__["enumChoiceMaker"])(null, GolfType).items;
var GolfUseItems = Object(_api_generics__WEBPACK_IMPORTED_MODULE_5__["enumChoiceMaker"])(null, GolfUse).items;
var MobileHomeTypeItems = Object(_api_generics__WEBPACK_IMPORTED_MODULE_5__["enumChoiceMaker"])(null, MobileHomeType).items;
var MotorHomeSizeItems = Object(_api_generics__WEBPACK_IMPORTED_MODULE_5__["enumChoiceMaker"])(null, MotorHomeSize).items;
var TowlaborItems = [{ value: 'No Coverage', description: 'No Coverage' }, { value: '$50', description: '50' }, { value: '$100', description: '100' }, { value: '$200', description: '200' }];
var YesNoItems = [{ value: "Y", description: "Yes" }, { value: "N", description: "No" }];
var PipAddlItems = [{ value: "Option 1", description: "Option 1" }, { value: "Option 2", description: "Option 2" }];
var carDefaults = {
    lossPayee: {
        lossPayeeIncludeInd: "N",
        additionalInsuredLessorIncludeInd: "N",
        haownInd: "N"
    },
    emplessor: "N",
    physDmgInd: "N",
    dumpingOpInd: "N",
    vinoverride: "N",
    hasvin: "Y",
    vinvalid: "N",
    custom: "N",
    useClassInd1: "N",
    useClassInd2: "N",
    coverages: {
        pipCoverage: {
            includeInd: "N"
        },
        liab: {
            includeInd: "Y"
        },
        towlabor: "No Coverage"
    }
};
var typeMap = (_a = {},
    _a[VehicleType.PrivatePassenger] = {
        name: "Private Passenger Type",
        btn: "Passenger Vehicles"
    },
    _a[VehicleType.Truck] = {
        name: "Trucks, Tractors and Trailers"
    },
    _a[VehicleType.Cart] = {
        name: "Golf Carts and Low Speed Vehicles"
    },
    _a[VehicleType.MobileHome] = {
        name: "Mobile Homes"
    },
    _a[VehicleType.Antique] = {
        name: "Antique Autos"
    },
    _a);
var _c = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({ vehicleType: VehicleType.NULL }), VehTypeProvider = _c.Provider, VehTypeConsumer = _c.Consumer;
var typeMapItems = Object.keys(typeMap).map(function (k) { return ({ value: k, description: typeMap[k].name }); });
var VehicleTypeSwitch = function (type) { return Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])({ get: function (car) { return car.vehicleType === type ? car : null; } })(function (props) { return props.data ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](VehTypeProvider, { value: { vehicleType: type } }, props.children) : null; }); };
function vehProcessVin(car, context) {
    return car.vinnumber.length == 17 ? context.await(_api_ajaxCache__WEBPACK_IMPORTED_MODULE_1__["ajaxCache"].get({
        method: 'CMAUVehicleScriptHelper',
        action: 'getVinLookupResults',
        vinNumber: car.vinnumber
    }).promise.then(function (data) {
        var r = data.result, isTrailer = r.vehicleType == 'x';
        _api_proxy__WEBPACK_IMPORTED_MODULE_2__["ProxyUtils"].copy(car, r.isMatch ? {
            vinvalid: 'Y',
            vehicleType: isTrailer ? VehicleType.Truck : r.vehicleType,
            modelYr: r.vehicleYear,
            make: r.vehicleMake,
            modelInfo: r.vehicleModel,
            vehicleCostNew: r.vehicleCost,
            vinoverride: 'N',
            vehicleClass: isTrailer ? VehicleClass.Trailer : car.vehicleClass
        } : {
            vinvalid: 'N'
        });
    }, function () { return car.vinvalid = 'N'; })) : (car.vinvalid = 'N') && void 0;
}
var MakeAtoAComponent = function (params) {
    return function (Clazz) {
        var store = function (type, model, value) {
            return model.p.p.locationList.forEach(function (loc) { return loc.cars.forEach(function (to) { return type !== VehicleType.NULL && to.vehicleType !== type || params.set(to, typeof value === "string" ? value : value.value); }); });
        };
        var val = typeof params.validate === "function" ? { val: params.validate } : params.validate ? { val: function (s) { return Object(_api_dfe_stream__WEBPACK_IMPORTED_MODULE_6__["required"])(s); } } : {};
        return Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])(__assign({ get: params.get }, val))(function (props) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](VehTypeConsumer, null, function (info) {
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", { style: params.labelStyle },
                        params.label,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["ValidationLabel"], { error: props.error })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Clazz, __assign({}, props, typeof props.data === "string" ? { value: props.data } : { data: props.data }, { set: params.set.bind(null, props.model) }))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "button", className: "link-button", onClick: function () { return store(info.vehicleType, props.model, props.data); }, value: "Apply to all " + (info.vehicleType ? typeMap[info.vehicleType].btn || typeMap[info.vehicleType].name : "Vehicles") })));
            });
        });
    };
};
var LocationTabComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])({ get: function (root) { return root.policy.cmauSet.locationList; } })(function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["TabComponent"], { style: { width: 900 }, activeTabClass: "tab-item tab-item-active", tabClass: "tab-item", autoFocusNew: true, headerClass: "tab-header", items: props.data, headerFactory: function (loc) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LocationHeaderComponent, { model: loc }); }, bodyFactory: function (loc) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LocationBodyComponent, { key: loc.key, model: loc }); } });
});
var LocationHeaderComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])({ errorwatch: { target: "peers", accept: function () { return "error"; } } })(function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "div-button" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "div-button-text" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { style: { color: "#444" } }, "Location #" + (props.data.p.locationList.indexOf(props.data) + 1)),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
            (props.data.city + " " + props.data.state + " " + props.data.zip + "-" + props.data.zipAddOn).replace(/-$/, ''),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["ValidationLabel"], { error: props.error })));
});
var LocationCount = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Proxify"])(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { display: "inline" } }, "Location #" + (props.model.p.locationList.indexOf(props.model) + 1)); });
var focusVin = false;
var LocationBodyComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])()(function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "inline-section-header", style: { display: "inline-block", width: "100%", boxSizing: "border-box" } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LocationCount, { model: props.data }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { display: "inline-block", float: "right" } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { style: { padding: "1px 10px" }, type: "button", value: "Add Vehicle", onClick: function () { return (props.data.cars.push(carDefaults), focusVin = true); } }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CarTabComponent, { model: props.data })));
});
var CarTabComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])({ get: function (loc) { return loc.cars; } })(function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["TabComponent"], { style: { width: "100%" }, activeTabClass: "tab-item tab-item-active", tabClass: "tab-item", autoFocusNew: true, headerClass: "tab-header", items: props.data, headerFactory: function (car) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CarHeaderComponent, { model: car }); }, bodyFactory: function (car) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CarBodyComponent, { key: car.key, model: car }); } });
});
var CarHeaderComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])({ errorwatch: { target: "peers", accept: function () { return "error"; } } })(function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "div-button" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "div-button-text" }, props.data.p.state + " - Vehicle #" + (props.data.p.cars.indexOf(props.data) + 1),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null), props.data.modelYr + " " + props.data.make,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["ValidationLabel"], { error: props.error })));
});
var CarCount = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Proxify"])(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "inline-section-header" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "Vehicle #" + (props.model.p.cars.indexOf(props.model) + 1))); });
var CarControls = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Proxify"])(function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "inline-section-header", style: { display: "inline-block", width: "100%", boxSizing: "border-box" } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { display: "inline-block", float: "right" } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "button", value: "Clone Vehicle", onClick: function () { return (props.model.p.cars.push(props.model), focusVin = props.model.hasvin === 'Y'); }, style: { padding: "1px 10px", margin: "0px 5px" } })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { display: props.model.p.cars.length > 1 ? "inline-block" : "none", float: "right" } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "button", value: "Remove Vehicle", onClick: function () { return _api_proxy__WEBPACK_IMPORTED_MODULE_2__["ProxyUtils"].detach(props.model); }, style: { padding: "1px 10px", margin: "0px 5px" } })));
});
var CarBodyComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])()(function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CarCount, { model: props.data }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](GenInfo.Sheet, { model: props.data }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Private.Switch, { model: props.data },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Private.Sheet, { model: props.data })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Truck.Switch, { model: props.data },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Truck.Sheet, { model: props.data })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Cart.Switch, { model: props.data },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Cart.Sheet, { model: props.data })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Mobile.Switch, { model: props.data },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Mobile.Sheet, { model: props.data })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Coverages.Sheet, { model: props.data }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Optional.Sheet, { model: props.data }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CarControls, { model: props.data }));
});
var GenInfo;
(function (GenInfo) {
    var DoYouHaveVinComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Proxify"])(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, "Do you have the VIN?"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Radiolist"], { data: { value: props.model.hasvin, items: YesNoItems }, set: function (value) { return props.model.hasvin = value; } }))); });
    var OverrideComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Proxify"])(function (props) { return props.model.hasvin !== "Y" || props.model.vinvalid == "Y" || !props.model.vinnumber ? null : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", { style: { paddingLeft: 16 } }, "Override VIN?"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Radiolist"], { data: { value: props.model.vinoverride, items: YesNoItems }, set: function (value) { return props.model.vinoverride = value; } }))); });
    var CustomInfoComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Proxify"])(function (props) { return vehDetailsDisabled(props.model) ? null : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", { style: { paddingLeft: 16 } }, "Vehicle Year, Make and/or Model is not available in dropdown"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Radiolist"], { data: { value: props.model.custom, items: YesNoItems }, set: function (value) { return props.model.custom = value; } }))); });
    var VinNumberComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])({ get: function (car) { return ({ hasvin: car.hasvin, vin: car.vinnumber, valid: car.vinvalid, override: car.vinoverride }); }, val: function (info) { return info.override === "Y" ? "" : Object(_api_dfe_stream__WEBPACK_IMPORTED_MODULE_6__["required"])(info.vin) || Object(_api_dfe_stream__WEBPACK_IMPORTED_MODULE_6__["required"])(info.vin, /[a-zA-Z0-9]{17}/, "Invalid VIN format") || (info.valid == "Y" ? "" : "Vin not found"); } })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null,
            "Vihicle Identification Number (VIN)",
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["ValidationLabel"], { error: props.error })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Editbox"], { refUi: function (dom) { return dom && focusVin && (dom.focus(), dom.select(), focusVin = false); }, value: props.data.vin, set: function (value) { return props.model.vinnumber = value; }, spellCheck: false, disabled: props.data.hasvin !== "Y", style: { width: 150, textTransform: "uppercase", display: "block" }, pattern: /[a-zA-Z0-9]{1,17}/ }),
            props.data.valid === "Y" || !props.data.vin ? null : "vin not found")); });
    var VehicleTypeComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])({ get: function (car) { return ({ value: car.vehicleType, items: typeMapItems }); }, val: function (info) { return Object(_api_dfe_stream__WEBPACK_IMPORTED_MODULE_6__["required"])(info); } })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null,
            "Vehicle Type",
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["ValidationLabel"], { error: props.error })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], { data: props.data, set: function (value) { return props.model.vehicleType = value; }, emptyOption: true }))); });
    var VehicleModerYearComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])({ get: function (car, context) { return vehDetailsDisabled(car) || car.custom === "Y" ?
            car.modelYr : Object(_api_ajaxCache__WEBPACK_IMPORTED_MODULE_1__["ajaxFeed"])(context, car.modelYr, {
            query: { vehicleType: car.vehicleType, method: "CMAUVehicleScriptHelper", action: "getYearOptions"
            }, mapper: textValueMapper
        }); },
        val: function (value) { return Object(_api_dfe_stream__WEBPACK_IMPORTED_MODULE_6__["required"])(value, /(18|19|20)\d{2}/); } })(function (props) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "javascript:showHelp('/cmau_help.html#year')", className: "css-qmark" }),
                "Vehicle Year",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["ValidationLabel"], { error: props.error })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, typeof props.data === "object" ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], { data: props.data, set: function (value) { return props.model.modelYr = value; }, emptyOption: true }) :
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Editbox"], { set: function (value) { return props.model.modelYr = value; }, pattern: /\d{1,4}/, value: props.data, disabled: vehDetailsDisabled(props.model), style: { width: 150, textTransform: "uppercase" }, spellCheck: false })));
    });
    var VehicleMakeComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])({ get: function (car, context) { return vehDetailsDisabled(car) || car.custom === "Y" ?
            car.make : Object(_api_ajaxCache__WEBPACK_IMPORTED_MODULE_1__["ajaxFeed"])(context, car.make, {
            query: { vehicleType: car.vehicleType, vehicleYear: car.modelYr, method: "CMAUVehicleScriptHelper", action: "getMakeOptions"
            }, mapper: textValueMapper
        }); },
        val: function (value) { return Object(_api_dfe_stream__WEBPACK_IMPORTED_MODULE_6__["required"])(value, /[-\w ]{1,50}/); }
    })(function (props) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "javascript:showHelp('/cmau_help.html#make')", className: "css-qmark" }),
                "Vehicle Make",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["ValidationLabel"], { error: props.error })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, typeof props.data === "object" ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], { data: props.data, set: function (value) { return props.model.make = value; }, emptyOption: true }) :
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Editbox"], { set: function (value) { return props.model.make = value; }, value: props.data, disabled: vehDetailsDisabled(props.model), style: { width: 150, textTransform: "uppercase" }, spellCheck: false })));
    });
    var VehicleModelComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])({ get: function (car, context) { return vehDetailsDisabled(car) || car.custom === "Y" ?
            car.modelInfo : Object(_api_ajaxCache__WEBPACK_IMPORTED_MODULE_1__["ajaxFeed"])(context, car.modelInfo, {
            query: { vehicleType: car.vehicleType, vehicleYear: car.modelYr, vehicleMake: car.make, method: "CMAUVehicleScriptHelper", action: "getModelOptions"
            }, mapper: textValueMapper
        }); },
        val: function (value) { return Object(_api_dfe_stream__WEBPACK_IMPORTED_MODULE_6__["required"])(value, /[-\w ]{1,50}/); }
    })(function (props) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "javascript:showHelp('/cmau_help.html#model')", className: "css-qmark" }),
                "Vehicle Model",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["ValidationLabel"], { error: props.error })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, typeof props.data === "object" ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], { data: props.data, set: function (value) { return props.model.modelInfo = value; }, emptyOption: true }) :
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Editbox"], { set: function (value) { return props.model.modelInfo = value; }, value: props.data, disabled: vehDetailsDisabled(props.model), style: { width: 150, textTransform: "uppercase" }, spellCheck: false })));
    });
    var OriginalCostComponent = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])({ get: function (car) { return car.vehicleCostNew; }, val: simplyRequired })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null,
            "Original Cost New",
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["ValidationLabel"], { error: props.error })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["EditboxMoney"], { value: props.data, set: function (value) { return props.model.vehicleCostNew = value; }, disabled: vehDetailsDisabled(props.model), style: { width: 150 }, format: "$9,999,999" }))); });
    GenInfo.Sheet = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])({ get: function (car, context) { return (car.hasvin === 'Y' && vehProcessVin(car, context), car); } })(function (props) {
        var car = props.data;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dfe-inline-section" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: "dfe-table tab-cols-5-5" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DoYouHaveVinComponent, { model: props.data }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](VinNumberComponent, { model: props.data }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](OverrideComponent, { model: props.data }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CustomInfoComponent, { model: props.data }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](VehicleTypeComponent, { model: props.data }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](VehicleModerYearComponent, { model: props.data }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](VehicleMakeComponent, { model: props.data }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](VehicleModelComponent, { model: props.data }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](OriginalCostComponent, { model: props.data }))));
    }).to(VinNumberComponent, VehicleTypeComponent, VehicleModerYearComponent, VehicleMakeComponent, VehicleModelComponent, OriginalCostComponent);
})(GenInfo || (GenInfo = {}));
var Private;
(function (Private) {
    var PPUsageComponent = MakeAtoAComponent({
        get: function (car) { return ({ value: car.vehUseCd, items: VehicleUseItems }); }, set: function (car, value) { return car.vehUseCd = value; },
        label: "Usage",
        validate: true
    })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], __assign({}, props, { emptyOption: true })); });
    var OperatorExperienceComponent = MakeAtoAComponent({
        get: function (car) { return ({ value: car.operExp, items: OperatorExperienceItems }); }, set: function (car, value) { return car.operExp = value; },
        validate: true,
        label: "Operator Experience",
        labelStyle: { paddingLeft: 16 }
    })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], __assign({}, props, { emptyOption: true })); });
    var OperatorUseComponent = MakeAtoAComponent({
        get: function (car) { return ({ value: car.operUse, items: OperatorUseItems }); }, set: function (car, value) { return car.operUse = value; },
        validate: true,
        label: "Operator Use",
        labelStyle: { paddingLeft: 16 }
    })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], __assign({}, props, { emptyOption: true })); });
    var PPNonBusSwitch = MakeSwitch(function (car) { return car.vehUseCd === VehicleUse.NonBusiness; }).to(OperatorExperienceComponent, OperatorUseComponent);
    Private.Sheet = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])()(function (props) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "inline-section-header" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "Private Passenger Auto")),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dfe-inline-section" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: "dfe-table col-3-centred tab-cols-2-5-3" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PPUsageComponent, { model: props.data }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PPNonBusSwitch, { model: props.data },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](OperatorExperienceComponent, { model: props.data }),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](OperatorUseComponent, { model: props.data }))))));
    }).to(PPUsageComponent, PPNonBusSwitch);
    Private.Switch = VehicleTypeSwitch(VehicleType.PrivatePassenger).to(Private.Sheet);
})(Private || (Private = {}));
var Truck;
(function (Truck) {
    var VehicleClassComponent = MakeAtoAComponent({
        get: function (car) { return ({ value: car.vehicleClass, items: VehicleClassItems }); }, set: function (car, value) { return car.vehicleClass = value; },
        validate: true,
        label: "Vehicle Class"
    })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], __assign({}, props, { emptyOption: true })); });
    var TrailerSwitch = MakeSwitch(function (car) { return car.vehicleClass == VehicleClass.Trailer; });
    var TrailerTypeComponent = MakeAtoAComponent({
        get: function (car) { return ({ value: car.trailerType, items: TrailerTypeItems }); }, set: function (car, value) { return car.trailerType = value; },
        validate: true,
        label: "Trailer Type"
    })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], __assign({}, props, { emptyOption: true })); });
    var UseClass1Component = MakeAtoAComponent({
        get: function (car) { return ({ value: car.useClassInd1, items: YesNoItems }); }, set: function (car, value) { return car.useClassInd1 = value; },
        validate: true,
        label: "Is this auto used for transporting personnel, tools and equipment to and from a job location where it is parked for the majority of the day?"
    })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Radiolist"], __assign({}, props)); });
    var UseClass2Component = MakeAtoAComponent({
        get: function (car) { return ({ value: car.useClassInd2, items: YesNoItems }); }, set: function (car, value) { return car.useClassInd2 = value; },
        validate: true,
        label: "Is this auto used for transporting personnel, tools and equipment to and from a job location where it is parked for the majority of the day?"
    })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Radiolist"], __assign({}, props)); });
    var RadiusClassComponent = MakeAtoAComponent({
        get: function (car) { return ({ value: car.radiusClass, items: RadiusClassItems }); }, set: function (car, value) { return car.radiusClass = value; },
        validate: true,
        label: "Radius"
    })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], __assign({}, props, { emptyOption: true })); });
    var DumpingOptionComponent = MakeAtoAComponent({
        get: function (car) { return car.dumpingOpInd; }, set: function (car, value) { return car.dumpingOpInd = value; },
        validate: false,
        label: "Used in dumping"
    })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], __assign({}, props)); });
    var SecondaryClassComponent = MakeAtoAComponent({
        get: function (car) { return ({ value: car.secondaryClass, items: SecondaryClassItems }); }, set: function (car, value) { return car.secondaryClass = value; },
        validate: true,
        label: "Secondary Class"
    })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], __assign({}, props, { emptyOption: true })); });
    var SecondaryClassType = MakeAtoAComponent({
        get: function (car, context) { return Object(_api_ajaxCache__WEBPACK_IMPORTED_MODULE_1__["ajaxFeed"])(context, car.secondaryClassType, {
            query: {
                method: 'CMAUVehicleScriptHelper',
                action: 'getSecondaryClassTypeOptions',
                secondaryClass: car.secondaryClass
            },
            mapper: function (v) { return ({ value: v.value, description: v.text }); }
        }); }, set: function (car, value) { return car.secondaryClassType = value; },
        validate: _api_ajaxCache__WEBPACK_IMPORTED_MODULE_1__["ajaxRequired"],
        label: "Secondary Class Type"
    })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], __assign({}, props, { emptyOption: true })); });
    Truck.Sheet = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])()(function (props) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "inline-section-header" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "Trucks, Tractors and Trailers")),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dfe-inline-section" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: "dfe-table col-va-middle col-3-centred tab-cols-3-4-3" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](VehicleClassComponent, { model: props.data }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](TrailerSwitch, { model: props.data },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](TrailerTypeComponent, { model: props.data })),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](UseClass1Component, { model: props.data }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](UseClass2Component, { model: props.data }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](RadiusClassComponent, { model: props.data }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DumpingOptionComponent, { model: props.data }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](SecondaryClassComponent, { model: props.data }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](SecondaryClassType, { model: props.data })))));
    }).to(VehicleClassComponent, TrailerSwitch.to(TrailerTypeComponent), UseClass1Component, UseClass2Component, RadiusClassComponent, DumpingOptionComponent, SecondaryClassComponent, SecondaryClassType);
    Truck.Switch = VehicleTypeSwitch(VehicleType.Truck).to(Truck.Sheet);
})(Truck || (Truck = {}));
var Cart;
(function (Cart) {
    var TypeComponent = MakeAtoAComponent({
        get: function (car) { return ({ value: car.golfType, items: GolfTypeItems }); }, set: function (car, value) { return car.golfType = value; },
        validate: true,
        label: "Type"
    })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], __assign({}, props, { emptyOption: true })); });
    var UseComponent = MakeAtoAComponent({
        get: function (car) { return ({ value: car.golfUse, items: GolfUseItems }); }, set: function (car, value) { return car.golfUse = value; },
        validate: true,
        label: "Use"
    })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], __assign({}, props, { emptyOption: true })); });
    var SubjectToLawComponent = MakeAtoAComponent({
        get: function (car) { return car.golfVhsub; }, set: function (car, value) { return car.golfVhsub = value; },
        validate: false,
        label: "Vehicle subject to compulsory, financial or other law"
    })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], __assign({}, props)); });
    Cart.Sheet = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])()(function (props) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "inline-section-header" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "Golf Carts and Low Speed Vehicles")),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dfe-inline-section" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: "dfe-table col-3-centred tab-cols-4-3-3" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](TypeComponent, { model: props.data }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](UseComponent, { model: props.data }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](SubjectToLawComponent, { model: props.data })))));
    }).to(TypeComponent, UseComponent, SubjectToLawComponent);
    Cart.Switch = VehicleTypeSwitch(VehicleType.Cart).to(Cart.Sheet);
})(Cart || (Cart = {}));
var Mobile;
(function (Mobile) {
    var TypeComponent = MakeAtoAComponent({
        get: function (car) { return ({ value: car.mobileHomeType, items: MobileHomeTypeItems }); }, set: function (car, value) { return car.mobileHomeType = value; },
        validate: true,
        label: "Type"
    })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], __assign({}, props, { emptyOption: true })); });
    var LengthComponent = MakeAtoAComponent({
        get: function (car) { return ({ value: car.motorHomeSize, items: MotorHomeSizeItems }); }, set: function (car, value) { return car.motorHomeSize = value; },
        validate: true,
        label: "Length"
    })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], __assign({}, props, { emptyOption: true })); });
    var LengthSwitch = MakeSwitch(function (car) { return car.mobileHomeType === MobileHomeType.MotorHome; }).to(LengthComponent);
    Mobile.Sheet = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])()(function (props) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "inline-section-header" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "Mobile Homes")),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dfe-inline-section" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: "dfe-table col-3-centred tab-cols-2-5-3" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](TypeComponent, { model: props.data }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LengthSwitch, { model: props.data },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LengthComponent, { model: props.data }))))));
    }).to(TypeComponent, LengthSwitch);
    Mobile.Switch = VehicleTypeSwitch(VehicleType.MobileHome).to(Mobile.Sheet);
})(Mobile || (Mobile = {}));
var Coverages;
(function (Coverages) {
    var PhysicalDmgOnlyComponent = MakeAtoAComponent({
        get: function (car) { return car.physDmgInd; }, set: function (car, value) { return car.physDmgInd = value; },
        validate: false,
        label: "Physical Damage Only?"
    })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], __assign({}, props)); });
    var CompDedComponent = MakeAtoAComponent({
        get: function (car, context) { return Object(_api_ajaxCache__WEBPACK_IMPORTED_MODULE_1__["ajaxFeed"])(context, car.coverages.comprehensiveDeductible, {
            query: {
                method: 'CMAUVehicleScriptHelper',
                action: 'getCompDedOptions',
                vehicleType: car.vehicleType
            },
            mapper: textValueMapper
        }); }, set: function (car, value) { return car.coverages.comprehensiveDeductible = value; },
        validate: _api_ajaxCache__WEBPACK_IMPORTED_MODULE_1__["ajaxRequired"],
        label: "Comp. Ded"
    })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], __assign({}, props, { emptyOption: true })); });
    var CollDedComponent = MakeAtoAComponent({
        get: function (car, context) { return Object(_api_ajaxCache__WEBPACK_IMPORTED_MODULE_1__["ajaxFeed"])(context, car.coverages.collisionDeductible, {
            query: {
                method: 'CMAUVehicleScriptHelper',
                action: 'getCollDedOptions',
                vehicleType: car.vehicleType
            },
            mapper: textValueMapper
        }); }, set: function (car, value) { return car.coverages.collisionDeductible = value; },
        validate: _api_ajaxCache__WEBPACK_IMPORTED_MODULE_1__["ajaxRequired"],
        label: "Coll. Ded"
    })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], __assign({}, props, { emptyOption: true })); });
    var ValuationComponent = MakeAtoAComponent({
        get: function (car, context) { return Object(_api_ajaxCache__WEBPACK_IMPORTED_MODULE_1__["ajaxFeed"])(context, car.valuationMethod, {
            query: {
                method: 'CMAUVehicleScriptHelper',
                action: 'getValuationMethodOptions',
                vehicleType: car.vehicleType
            },
            mapper: function (v) { return ({ value: v.value, description: v.text }); }
        }); }, set: function (car, value) { return car.valuationMethod = value; },
        validate: _api_ajaxCache__WEBPACK_IMPORTED_MODULE_1__["ajaxRequired"],
        label: "Valuation"
    })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], __assign({}, props, { emptyOption: true })); });
    var StatedAmoutComponent = MakeAtoAComponent({
        get: function (car) { return car.statedAmt; }, set: function (car, value) { return car.statedAmt = value; },
        validate: true,
        label: "Stated Amount"
    })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["EditboxMoney"], __assign({ format: "$9,999,999", style: { width: 100 } }, props)); });
    var StatedAmoutSwitch = MakeSwitch(function (car) { return car.valuationMethod == ValuationMethod.Stated_Amount; }).to(StatedAmoutComponent);
    var ValuationSwitch = MakeSwitch(function (car) { return !!(car.coverages.collisionDeductible + car.coverages.comprehensiveDeductible).match(/\d|Full/); }).to(ValuationComponent, StatedAmoutSwitch);
    var PipComponent = MakeAtoAComponent({
        get: function (car) { return car.coverages.pipCoverage.includeInd; }, set: function (car, value) { return car.coverages.pipCoverage.includeInd = value; },
        validate: false,
        label: "Personal Injury Protection Coverage"
    })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], __assign({}, props)); });
    // used to be ".coverages.pip.addedpipoption", now ".car.coverages.pip.ks.addedpipoption" and is not mapped in model
    var AddlPipComponent = MakeAtoAComponent({
        get: function (car) { return ({ value: "", items: PipAddlItems }); }, set: function (car, value) { return void 0; },
        validate: false,
        label: "Additional Personal Injury Protection",
        labelStyle: { paddingLeft: 16 }
    })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], __assign({}, props, { emptyOption: true })); });
    // used to be ".coverages.pip.broadpipnum" now "car.coverages.pip.ks.broadpipnum" and is not mapped in model
    var BroadenedPIPComponent = MakeAtoAComponent({
        get: function (car) { return ""; }, set: function (car, value) { return void 0; },
        validate: false,
        label: "Number of Individuals for Broadened PIP",
        labelStyle: { paddingLeft: 16 }
    })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Editbox"], __assign({ pattern: /[0-9]{1,5}/, style: { width: 80 } }, props)); });
    // used to be ".coverages.pip.addedbroadpipnum" now "car.coverages.pip.ks.addedbroadpipnum" and is not mapped in model
    var NumNamedIndividuals = MakeAtoAComponent({
        get: function (car) { return ""; }, set: function (car, value) { return void 0; },
        validate: false,
        label: "Number of Named Individuals for Additional Broadened PIP",
        labelStyle: { paddingLeft: 16 }
    })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Editbox"], __assign({ pattern: /[0-9]{1,5}/, style: { width: 80 } }, props)); });
    // used to be ".coverages.pip.addedbpipoptioncd" now "car.coverages.pip.ks.addedbpipoptioncd" and is not mapped in model
    var Addedbpipoptioncd = MakeAtoAComponent({
        get: function (car) { return ({ value: "", items: PipAddlItems }); }, set: function (car, value) { return void 0; },
        validate: false,
        label: "Additional Broadened Personal Injury Protection",
        labelStyle: { paddingLeft: 16 }
    })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], __assign({}, props, { emptyOption: true })); });
    // used to be ".coverages.pip.addedbroadpipnum" now "car.coverages.pip.ks.addedbroadpipnum" and is not mapped in model
    var NumNamedIndividualsSwitch = MakeSwitch(function (car) { return false; }).to(Addedbpipoptioncd);
    // used to be ".coverages.pip.broadpipnum" now "car.coverages.pip.ks.broadpipnum" and is not mapped in model
    var BroadenedPIPSwitch = MakeSwitch(function (car) { return false; }).to(NumNamedIndividuals);
    var PipIncludedSwitch = MakeSwitch(function (car) { return car.coverages.pipCoverage.includeInd === "Y"; }).to(AddlPipComponent, BroadenedPIPComponent, BroadenedPIPSwitch);
    var PhysDmgSwitch = MakeSwitch(function (car) { return car.physDmgInd !== "Y" && car.p.state === "KS"; }).to(PipComponent, PipIncludedSwitch);
    Coverages.Sheet = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])()(function (props) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "inline-section-header" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "Coverages")),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dfe-inline-section" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: "dfe-table col-3-centred tab-cols-4-3-3" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PhysicalDmgOnlyComponent, { model: props.data }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CompDedComponent, { model: props.data }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CollDedComponent, { model: props.data }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ValuationSwitch, { model: props.data },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ValuationComponent, { model: props.data }),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](StatedAmoutSwitch, { model: props.data },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](StatedAmoutComponent, { model: props.data }))),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PhysDmgSwitch, { model: props.data },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PipComponent, { model: props.data }),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PipIncludedSwitch, { model: props.data },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](AddlPipComponent, { model: props.data }),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](BroadenedPIPComponent, { model: props.data }),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](BroadenedPIPSwitch, { model: props.data },
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NumNamedIndividuals, { model: props.data }),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NumNamedIndividualsSwitch, { model: props.data },
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Addedbpipoptioncd, { model: props.data })))))))));
    }).to(PhysicalDmgOnlyComponent, CompDedComponent, CollDedComponent, ValuationSwitch, PhysDmgSwitch);
})(Coverages || (Coverages = {}));
var Optional;
(function (Optional) {
    var TowingAndLaborComponent = MakeAtoAComponent({
        get: function (car) { return ({ value: car.coverages.towlabor, items: TowlaborItems }); }, set: function (car, value) { return car.coverages.towlabor = value; },
        validate: true,
        label: "Towing and Labor"
    })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], __assign({}, props, { emptyOption: true })); });
    var TowingAndLaborSwitch = MakeSwitch(function (car) { return car.vehicleType == VehicleType.PrivatePassenger && !!car.coverages.comprehensiveDeductible.match(/\d|Full/); }).to(TowingAndLaborComponent);
    var LossPayeeComponent = MakeAtoAComponent({
        get: function (car) { return car.lossPayee.lossPayeeIncludeInd; }, set: function (car, value) { return car.lossPayee.lossPayeeIncludeInd = value; },
        validate: false,
        label: "Loss Payee"
    })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], __assign({}, props)); });
    var KSSpecificOpt1 = MakeAtoAComponent({
        get: function (car) { return car.lossPayee.additionalInsuredLessorIncludeInd; }, set: function (car, value) { return car.lossPayee.additionalInsuredLessorIncludeInd = value; },
        validate: false,
        label: "Additional Insured - Lessor"
    })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], __assign({}, props)); });
    var KSSpecificOpt2 = MakeAtoAComponent({
        get: function (car) { return car.lossPayee.haownInd; }, set: function (car, value) { return car.lossPayee.haownInd = value; },
        validate: false,
        label: "Hired Auto - Specified As Covered Auto You Own"
    })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], __assign({}, props)); });
    var KSSpecificSwitch = MakeSwitch(function (car) { return car.p.state === "KS"; }).to(KSSpecificOpt1, KSSpecificOpt2);
    var EmployeeAsLessorComponent = MakeAtoAComponent({
        get: function (car) { return car.emplessor; }, set: function (car, value) { return car.emplessor = value; },
        validate: false,
        label: "Employee as Lessor"
    })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], __assign({}, props)); });
    var AddlNamedInsuredComponent = MakeAtoAComponent({
        get: function (car) { return car.lossPayee.namedInsuredInd; }, set: function (car, value) { return car.lossPayee.namedInsuredInd = value; },
        validate: false,
        label: "Additional Named Insured"
    })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], __assign({}, props)); });
    var AddlNamedInsuredNameComponent = MakeAtoAComponent({
        get: function (car) { return car.lossPayee.namedInsured.name; }, set: function (car, value) { return car.lossPayee.namedInsured.name = value; },
        validate: true,
        label: "*Name",
        labelStyle: { paddingLeft: 10 }
    })(function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_api_generics__WEBPACK_IMPORTED_MODULE_5__["Editbox"], __assign({}, props)); });
    var AddlNamedInsuredSwitch = MakeSwitch(function (car) { return car.lossPayee.namedInsuredInd === "Y"; }).to(AddlNamedInsuredNameComponent);
    var NonKSSpecificSwitch = MakeSwitch(function (car) { return car.p.state !== "KS"; }).to(AddlNamedInsuredComponent, AddlNamedInsuredSwitch);
    Optional.Sheet = Object(_api_react_connect__WEBPACK_IMPORTED_MODULE_7__["Pipe"])()(function (props) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "inline-section-header" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "Optional Coverages")),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dfe-inline-section" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: "dfe-table col-3-centred tab-cols-4-3-3" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](TowingAndLaborSwitch, { model: props.data },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](TowingAndLaborComponent, { model: props.data })),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LossPayeeComponent, { model: props.data }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](KSSpecificSwitch, { model: props.data },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](KSSpecificOpt1, { model: props.data }),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](KSSpecificOpt2, { model: props.data })),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](EmployeeAsLessorComponent, { model: props.data }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NonKSSpecificSwitch, { model: props.data },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](AddlNamedInsuredComponent, { model: props.data }),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](AddlNamedInsuredSwitch, { model: props.data },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](AddlNamedInsuredNameComponent, { model: props.data })))))));
    }).to(TowingAndLaborSwitch, LossPayeeComponent, KSSpecificSwitch, EmployeeAsLessorComponent, NonKSSpecificSwitch);
})(Optional || (Optional = {}));
var QuoteCmauCarForm = LocationTabComponent.to(LocationHeaderComponent, LocationBodyComponent.to(CarTabComponent.to(CarHeaderComponent, CarBodyComponent.to(GenInfo.Sheet, Private.Switch, Truck.Switch, Cart.Switch, Mobile.Switch, Coverages.Sheet, Optional.Sheet)))).field;



/***/ })

}]);
//# sourceMappingURL=1.js.map