(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/css-loader/index.js!./resources/dfe-style.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader!./resources/dfe-style.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*button,*/ input:not([type='button']):not([type='radio']):not([type=\"checkbox\"]), select, textarea {\r\n    border: 1px solid;\r\n    border-color: darkgray;\r\n  /*font-family: 'SourceCodePro-Medium', monospace;\r\n    font-size: 14px;*/\r\n    text-decoration: none;\r\n    align-self: flex-start;\r\n}\r\ninput[type=\"checkbox\"], input[type=\"radio\"] {\r\n    padding: 0px 2px 0px 2px;\r\n}\r\nselect { \r\n    max-width: 100%; \r\n    transition: all 0.5s;\r\n    outline: none;\r\n}\r\n\r\ninput { \r\n    padding-left: 2px; \r\n    transition: all 0.5s;\r\n    outline: none;\r\n}\r\n\r\ninput[type='button'] { \r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    outline: none;\r\n}\r\n\r\ninput[type=\"text\"]:not([disabled]):hover, input[type=\"datepicker\"]:not([disabled]):hover, input[type=\"button\"]:not([disabled]):hover, input:not([type]):not([disabled]):hover, select:not([disabled]):hover {\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\r\n    text-shadow: 0 0 2px rgba(0, 0, 0, 0.3);\r\n    transition: all 0s;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n    background-color: gray;\r\n}\r\n\r\ninput[type=\"checkbox\"]:not([disabled]):hover {\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\r\n    transition: all 0s;\r\n}\r\n\r\nlabel, td, th {\r\n    font-family: 'SourceCodePro-Medium', sans-serif;\r\n    text-decoration: none;\r\n    font-size: 12px\r\n}\r\n*[filter-out] { visibility: hidden; display: none; }\r\n*[hidden] { visibility: hidden; display: none; }\r\n/* ============================ DFE css framework ============================ */\r\ntable.dfe-table { \r\n    width: 100%; \r\n    overflow: hidden;\r\n    background: white;\r\n    /*border-collapse: collapse;*/\r\n    border-spacing: 0px;\r\n}\r\n\r\ntable.dfe-table > tbody > tr:nth-child(odd) {\r\n    background: rgb(238, 238, 238);\r\n}\r\n\r\ntable.dfe-table > thead > tr > th, table.dfe-table > tbody > tr > td {\r\n    padding: 4px 6px;\r\n    margin: 0px;\r\n    border: 0px;\r\n    box-sizing: border-box;\r\n}\r\n\r\ntd {\r\n    vertical-align: top\r\n}\r\n\r\nth {\r\n    vertical-align: center\r\n}\r\n\r\n.tab-cols-4-3-3 > tbody > tr > td:not([colspan=\"3\"]):nth-child(3n+1) { width: 40%; border-right: 2px solid white; vertical-align: middle; }\r\n.tab-cols-4-3-3 > tbody > tr > td:not([colspan=\"2\"]):nth-child(3n+2) { width: 30%; border-right: 2px solid white; }\r\n.tab-cols-4-3-3 > tbody > tr > td:nth-child(3n+3) { width: 30%; }\r\n\r\n.tab-cols-3-4-3 > tbody > tr > td:not([colspan=\"3\"]):nth-child(3n+1) { width: 30%; border-right: 2px solid white; vertical-align: middle; }\r\n.tab-cols-3-4-3 > tbody > tr > td:not([colspan=\"2\"]):nth-child(3n+2) { width: 40%; border-right: 2px solid white; }\r\n.tab-cols-3-4-3 > tbody > tr > td:nth-child(3n+3) { width: 30%; }\r\n\r\n.tab-cols-2-5-3 > tbody > tr > td:not([colspan=\"3\"]):nth-child(3n+1) { width: 20%; border-right: 2px solid white; vertical-align: middle; }\r\n.tab-cols-2-5-3 > tbody > tr > td:not([colspan=\"2\"]):nth-child(3n+2) { width: 50%; border-right: 2px solid white;  }\r\n.tab-cols-2-5-3 > tbody > tr > td:nth-child(3n+3) { width: 30%; }\r\n\r\n.tab-cols-5-5 > tbody > tr > td:not([colspan=\"2\"]):nth-child(2n+1) { width: 50%; border-right: 2px solid white; vertical-align: middle; }\r\n.tab-cols-5-5 > tbody > tr > td:nth-child(2n+2) { width: 50%; }\r\n\r\n\r\n.col-va-middle > tbody > tr > td { vertical-align: middle }\r\n\r\n.col-1-centred > tbody > tr > td:nth-child(3n+1), .col-2-centred > tbody > tr > td:nth-child(3n+2), .col-3-centred > tbody > tr > td:nth-child(3n) { text-align: center; }\r\n\r\n\r\n.dfe-field-std-p1, .dfe-field-std-p2, .dfe-field-std-p3, .dfe-field-std-p4, .dfe-field-std-p5, .dfe-field-std-p6, .dfe-field-std-p7, \r\n.dfe-field-std-p8, .dfe-field-std-p9, .dfe-field-std-p0 { \r\n    width: 100%; \r\n    outline-color: white; \r\n    outline-width: 1px; \r\n    outline-style: solid; \r\n    padding: 6px 4px; \r\n    box-sizing: border-box; \r\n    /*margin: 0px; */\r\n    /*display: flex; \r\n    flex-flow: column; */\r\n    display: inline-block; \r\n    justify-content: center; \r\n}\r\n.dfe-field-std-p1 { width: 10%; }\r\n.dfe-field-std-p2 { width: 20%; }\r\n.dfe-field-std-p3 { width: 30%; }\r\n.dfe-field-std-p4 { width: 40%; }\r\n.dfe-field-std-p5 { width: 50%; }\r\n.dfe-field-std-p6 { width: 60%; }\r\n.dfe-field-std-p7 { width: 70%; }\r\n.dfe-field-std-p8 { width: 80%; }\r\n.dfe-field-std-p9 { width: 90%; }\r\n.div-alt-color1-1, .div-alt-color1-2, .div-alt-color2-1, .div-alt-color2-2, .div-alt-color2-3, .div-alt-color2-4,\r\n.div-alt-color3-1, .div-alt-color3-2, .div-alt-color3-3, .div-alt-color3-4, .div-alt-color3-5, .div-alt-color3-6 { \r\n    display: flex; flex-flow: row wrap; width: 100%; overflow: hidden; justify-content: space-between; \r\n}\r\n.div-alt-color-fc {\r\n    display: inline-table;\r\n}\r\n.div-alt-color-fc > :first-child {\r\n    background: #e0e0e0;\r\n}\r\n.div-alt-color1-1 > :nth-child(2n+1), .div-alt-color1-2 > :nth-child(2n+2),\r\n.div-alt-color2-1 > :nth-child(4n+1), .div-alt-color2-1 > :nth-child(4n+2),\r\n.div-alt-color2-2 > :nth-child(4n+2), .div-alt-color2-2 > :nth-child(4n+3),\r\n.div-alt-color2-3 > :nth-child(4n+3), .div-alt-color2-3 > :nth-child(4n+4),\r\n.div-alt-color2-4 > :nth-child(4n+4), .div-alt-color2-4 > :nth-child(4n+1),\r\n.div-alt-color3-1 > :nth-child(6n+1), .div-alt-color3-1 > :nth-child(6n+2), .div-alt-color3-1 > :nth-child(6n+3),\r\n.div-alt-color3-2 > :nth-child(6n+2), .div-alt-color3-2 > :nth-child(6n+3), .div-alt-color3-2 > :nth-child(6n+4),\r\n.div-alt-color3-3 > :nth-child(6n+3), .div-alt-color3-3 > :nth-child(6n+4), .div-alt-color3-3 > :nth-child(6n+5),\r\n.div-alt-color3-4 > :nth-child(6n+4), .div-alt-color3-4 > :nth-child(6n+5), .div-alt-color3-4 > :nth-child(6n+0),\r\n.div-alt-color3-5 > :nth-child(6n+5), .div-alt-color3-5 > :nth-child(6n+0), .div-alt-color3-5 > :nth-child(6n+1),\r\n.div-alt-color3-6 > :nth-child(6n+0), .div-alt-color3-6 > :nth-child(6n+1), .div-alt-color3-6 > :nth-child(6n+2) { \r\n    background: rgb(238, 238, 238); \r\n}\r\n.div-alt-color1-1 > :nth-child(2n+2), .div-alt-color1-2 > :nth-child(2n+1),\r\n.div-alt-color2-1 > :nth-child(4n+3), .div-alt-color2-1 > :nth-child(4n+4),\r\n.div-alt-color2-2 > :nth-child(4n+4), .div-alt-color2-2 > :nth-child(4n+1),\r\n.div-alt-color2-3 > :nth-child(4n+1), .div-alt-color2-3 > :nth-child(4n+2),\r\n.div-alt-color2-4 > :nth-child(4n+2), .div-alt-color2-4 > :nth-child(4n+3),\r\n.div-alt-color3-1 > :nth-child(6n+4), .div-alt-color3-1 > :nth-child(6n+5), .div-alt-color3-1 > :nth-child(6n+6),\r\n.div-alt-color3-2 > :nth-child(6n+5), .div-alt-color3-2 > :nth-child(6n+6), .div-alt-color3-2 > :nth-child(6n+1),\r\n.div-alt-color3-3 > :nth-child(6n+6), .div-alt-color3-3 > :nth-child(6n+1), .div-alt-color3-3 > :nth-child(6n+2),\r\n.div-alt-color3-4 > :nth-child(6n+1), .div-alt-color3-4 > :nth-child(6n+2), .div-alt-color3-4 > :nth-child(6n+3),\r\n.div-alt-color3-5 > :nth-child(6n+2), .div-alt-color3-5 > :nth-child(6n+3), .div-alt-color3-5 > :nth-child(6n+4),\r\n.div-alt-color3-6 > :nth-child(6n+3), .div-alt-color3-6 > :nth-child(6n+4), .div-alt-color3-6 > :nth-child(6n+5) { \r\n    background: white; \r\n}\r\n\r\n.div-section-header {\r\n    width: 100%;\r\n    padding: 5px;\r\n    box-sizing: border-box;\r\n    background: darkgray;\r\n    font-weight: bold;\r\n    color: rgb(50,50,50);\r\n    margin: 2px 0px 2px 0px;\r\n    padding: 10px;\r\n    border-radius: 5px 5px 0px 0px; \r\n}\r\n\r\n.dfe-inline-section {\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    background: white!important;\r\n    padding: 0px!important;\r\n}\r\n\r\n.tab-section-header, table.dfe-inline-section > thead th, .inline-section-header {\r\n    border-bottom: 2px solid white;\r\n    border-top: 2px solid white;\r\n    background: lightgray;\r\n    text-align: left;\r\n    padding: 4px;\r\n    border-right: 0px;\r\n    position:relative;\r\n    color: #333333;\r\n}\r\n\r\n.tab-section-header, table.dfe-inline-section > thead {\r\n    font-weight: bold; \r\n}\r\n\r\n.dfe-error {\r\n    color: #DB1260!Important;\r\n    font-weight: bold;\r\n    display: block;\r\n    text-decoration: none!Important;\r\n    white-space: nowrap;\r\n}\r\n/* ============================ end of DFE css framework ============================ */\r\n.link-button {\r\n    border: none;\r\n    background: transparent;\r\n    font-family: 'SourceCodePro-Medium', sans-serif;\r\n    font-size: 12px;\r\n    text-decoration: underline solid;\r\n    color: #2263a2;\r\n    cursor: pointer;\r\n    outline: none;\r\n    align-self: center;\r\n    transition: text-shadow 0.25s;\r\n    box-shadow: 0 0!Important;\r\n}\r\n.link-button:active {\r\n    background-color: darkgrey;\r\n    transform: translateY(1px);\r\n}\r\n\r\n.link-button:hover {\r\n    text-shadow: 0 0 2px;\r\n    transition: all 0s;\r\n}\r\n\r\n/*label, */.link-button, .non-selectable, .div-button-text, .div-button-error {\r\n    -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n    -khtml-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n   /* background: transparent; */\r\n}\r\n/*.link-button:focus {\r\n   outline: -webkit-focus-ring-color auto 5px;\r\n}*/\r\n.div-button-text {\r\n    transition: text-shadow 0.25s;\r\n}\r\n\r\n.div-button-text:hover {\r\n    text-shadow: 0 0 2px;\r\n    transition: all 0s;\r\n}\r\n\r\n.div-flex {\r\n    overflow:visible;\r\n    position:relative;\r\n    width:auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.div-flex-h {\r\n    overflow:visible;\r\n    position:relative;\r\n    width:auto;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n.div-flex-row {\r\n    display: flex;\r\n    flex-direction: row\r\n}\r\n.div-flex-row-h {\r\n    justify-content: center; \r\n    display: flex; \r\n    flex-direction: column;\r\n    margin: 1px;\r\n    padding: 1px;\r\n}\r\n.div-flex-col {\r\n    justify-content: center; \r\n    display: flex; \r\n    margin: 1px;\r\n    padding: 1px;\r\n}\r\n.sticky-header {\r\n    position: sticky; \r\n    top: 0px; \r\n    z-index: 105;\r\n    margin: 0px;\r\n    border: solid 1px darkgrey;\r\n    background: #ddd;\r\n}\r\n.div-flex-col-embedded {\r\n    justify-content: center; \r\n    display: inline-block; \r\n    margin: 0px;\r\n    padding: 0px 1px 0px 1px;\r\n    align-items: center;\r\n}\r\n.div-flex-col-embedded-1 {\r\n    justify-content: center; \r\n    display: inline-block; \r\n    margin: 1px 0px 0px 1px;\r\n    padding: 1px 0px;\r\n    align-items: center;\r\n}\r\n.editbox-col { width: auto; }\r\n.popup-edit-div-container {\r\n    flex-direction: column;\r\n    width: 172px;\r\n    height: 20px;\r\n    z-index:0;\r\n    margin: 0px;\r\n    padding: 1px;\r\n    position:relative;\r\n    overflow:hidden\r\n}\r\n/*.popup-edit-div-container:hover{\r\n    overflow:visible;\r\n    z-index:100\r\n}*/\r\n.editor-pos-fld {\r\n    width: 32px; \r\n    -webkit-appearance: none; \r\n    text-indent: 1px; \r\n    text-align: right;\r\n    box-sizing: content-box;\r\n}\r\n.popup-edit-div-container:focus-within{\r\n    overflow:visible;\r\n    z-index:101\r\n}\r\n/*.popup-edit-popup{\r\n    z-index:110;\r\n    position: absolute;\r\n    left: 0px;\r\n    top: 22px;\r\n}*/\r\n\r\n.edit-popup-textarea {\r\n    width : 100%;\r\n    height : 100%;\r\n    box-sizing : border-box;\r\n    resize : none;\r\n    font-size : inherit;\r\n}\r\n\r\n.div-button {\r\n    font-family: \"SourceCodePro-Medium\", monospace;\r\n    font-size: 14px;\r\n    text-align: center;\r\n    min-height: 25px;\r\n    justify-content: center;\r\n    margin: 1px;\r\n    flex-flow: column;\r\n    border-radius: 3px;\r\n    display: inline-flex;\r\n    padding: 5px;\r\n    border: solid 1px;\r\n    border-color: darkgray;\r\n    line-height: 1em;\r\n}\r\n\r\n.div-button-text {\r\n    \r\n}\r\n.div-button-error {\r\n    color: red;\r\n    font-size: 10px;\r\n    display: block;\r\n}\r\n.div-button-x { \r\n    opacity: 0;\r\n    border: 0px;\r\n    position: absolute; \r\n    background: inherit; \r\n    right: 1px; \r\n    top: 1px;\r\n}\r\n.div-button-x:hover { \r\n    opacity: 0.9;\r\n    border: solid;\r\n    border-color: darkgray;\r\n    border-width: 1px;\r\n    border-radius: 3px;\r\n}\r\n\r\n.div-tab-item:not(.div-tab-item-active) .div-button-x { display: none; }\r\n\r\n/* ============ TABs =========== */\r\n.div-tab-body {\r\n    border-radius: 0px 5px 5px; /* none for tab */\r\n    border: 1px solid darkgrey; /* none for tab */\r\n    padding: 2px;\r\n    display: flex; \r\n    width: calc(100% - 2px);\r\n}\r\n\r\n.div-tab-item {\r\n    border-radius: 5px 5px 0px 0px;\r\n    display: inline-block;\r\n    vertical-align: bottom;\r\n    margin: 0px;\r\n    min-width: 20px;\r\n    background-color: buttonface;\r\n    position: relative;\r\n    align-self: flex-end;\r\n    border: solid 1px;\r\n    border-color: darkgray;\r\n    border-bottom: 0px;\r\n    max-height: fit-content;\r\n}\r\n\r\n.div-tab-item-active {\r\n    padding: 2px;\r\n    background-color: white;\r\n    z-index: 100;\r\n    top: 1px;\r\n}\r\n\r\n.div-tab-item-active .div-button-x  {\r\n    background-color: white;\r\n    right: -1px; \r\n    top: -1px;\r\n}\r\n\r\n.tab-item > .div-button, .div-tab-item > .div-button {\r\n    border: none;\r\n    padding: 3px 3px 1px 3px;\r\n}\r\n\r\n.tab-item > .div-button {\r\n    text-align: left;\r\n    line-height: 1.2em;\r\n}\r\n\r\n.div-tab-header {  width: 90%;  }\r\n.tab-header, .div-tab-header {\r\n   display: flex; \r\n   overflow: visible; \r\n   align-items: stretch; \r\n   flex-flow: row wrap;\r\n}\r\n\r\n.tab-body {\r\n    padding: 2px;\r\n    display: block; \r\n    width: calc(100% - 2px);\r\n}\r\n\r\n.tab-item {\r\n    display: inline-block;\r\n    margin: 3px;\r\n    min-width: 20px;\r\n    background-color: white;\r\n}\r\n\r\n.tab-item label {\r\n    color: #2263a2;\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n}\r\n\r\n.tab-item-active label {\r\n    font-weight: bold;\r\n}\r\n\r\n.tab-item .dfe-error {\r\n    font-style: italic;\r\n}\r\n/* ========== end TABs =========== */\r\n.editbox-error {\r\n    /*text-decoration: underline solid red;*/\r\n    background-color: antiquewhite;\r\n}\r\n.hover-visible { opacity: 0 }\r\n.hover-visible:hover, .hover-visible:focus-within { opacity: 1 }\r\n.focus-front:focus, .focus-front:active  {\r\n    z-index: 100;\r\n}\r\n/*input[type='submit'], .button-style {\r\n    text-align: center;\r\n    box-sizing: border-box;\r\n    display: inline-block;\r\n    padding: 1px 6px;\r\n    min-height: 20px;\r\n    -webkit-appearance: button;\r\n    -moz-appearance: button;\r\n    -appearance: button;\r\n}*/\r\n/*.button-style > label {\r\n    line-height: 1.2em;\r\n}*/\r\n.ui-resizeable-handle-br {\r\n    position: absolute;\r\n    width: 8px;\r\n    height: 8px;\r\n    right: -4px;\r\n    bottom: -4px;        \r\n    cursor: nw-resize;\r\n    opacity: 0;\r\n}\r\n\r\n.popup-editor-wrapper {\r\n    border: 2px solid #888;\r\n    border-radius: 5px;\r\n    overflow: visible;\r\n    width: 500px;\r\n    height: 100px;\r\n    position: absolute;\r\n    box-sizing: border-box;\r\n    z-index: 1000;\r\n}\r\n.popup-code-editor-erroring > div.ace_editor, textarea.popup-code-editor-erroring {\r\n    background-color: antiquewhite;\r\n}\r\n\r\n.Ace-Tern-hint-doc {\r\n    z-index: 1001!Important;\r\n}\r\n\r\n.server-error-dlg {\r\n    z-index: 1001;\r\n}\r\n\r\n.server-error-dlg:focus-within{\r\n    z-index: 1002;\r\n}\r\n\r\n.server-error-dlg > div.ui-dialog-content {\r\n    white-space: pre-wrap;\r\n    color: red;\r\n    font-size: 13px;\r\n    text-align: left;\r\n}\r\n\r\n.server-error-dlg span.ui-dialog-title {\r\n    color: black;\r\n}\r\n\r\n\r\ndiv.nav-menu-options, div#wrapper, div#innercontainer {\r\n    width: auto;\r\n    display: inline-block;\r\n    min-width: max-content;\r\n}\r\n\r\ndiv#body {\r\n    width: auto;\r\n    display: inline-table; \r\n    padding: 17px 10px;\r\n}\r\n\r\nform#dfe_form {\r\n    width: auto;\r\n    display: table;\r\n}\r\n\r\n.navtop {\r\n   display: table-caption; \r\n   width: -webkit-fill-available;\r\n}\r\n\r\ndiv#innercontainer {\r\n   display: -ms-flexbox;\r\n}\r\n\r\na.css-qmark {\r\n\ttext-decoration: none!Important;\r\n}\r\n\r\na.css-qmark::before {\r\n\tcontent: \"?\";\r\n    background: #f4b400;\r\n    padding: 0px 1px;\r\n    font-size: 10px;\r\n    text-decoration: none;\r\n    font-style: normal;\r\n    border-radius: 2px;\r\n    margin-right: 2px;\r\n    border: 1px solid #9a6f39;\r\n}\r\n\r\n/* ====================== animations ========================= */\r\n@keyframes onstartreveal {\r\n    0%   { opacity: 0 }\r\n    100% { opacity: 1 }\r\n}\r\n\r\n.onstart-reveal {\r\n    animation: onstartreveal 0.5s 1;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./resources/dfe-style.css":
/*!*********************************!*\
  !*** ./resources/dfe-style.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!./dfe-style.css */ "./node_modules/css-loader/index.js!./resources/dfe-style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/ts/api/generics.tsx":
/*!*********************************!*\
  !*** ./src/ts/api/generics.tsx ***!
  \*********************************/
/*! exports provided: stringChoiceMaker, enumChoiceMaker, Editbox, EditboxDate, EditboxMoney, Dropdown, Radiolist, Checkbox, TabComponent, ValidationLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringChoiceMaker", function() { return stringChoiceMaker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumChoiceMaker", function() { return enumChoiceMaker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editbox", function() { return Editbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditboxDate", function() { return EditboxDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditboxMoney", function() { return EditboxMoney; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Radiolist", function() { return Radiolist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationLabel", function() { return ValidationLabel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};

function stringChoiceMaker(v, e) {
    var ok = e._choice;
    return { value: v, items: ok ? ok : e._choice = e.map(function (k) { return ({ value: k, description: k }); }) };
}
function enumChoiceMaker(v, e) {
    var ok = e[-1];
    return {
        value: v,
        items: ok ? ok : e[-1] = Object.getOwnPropertyNames(e).filter(function (k) { return isNaN(+k) && k !== "NULL"; }).map(function (k) { return (isNaN(e[k]) ? { value: e[k], description: e[k] } : { value: k, description: k }); })
    };
}
var Editbox = /** @class */ (function (_super) {
    __extends(Editbox, _super);
    function Editbox(props, context) {
        var _this = _super.call(this, props) || this;
        _this.ca = 0;
        props.type === "datepicker" && (Editbox.datePickerRequested++ || __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.t.bind(null, /*! ../../../resources/date-picker-polyfill */ "./resources/date-picker-polyfill.js", 7)));
        return _this;
    }
    Editbox.patterning = function (v, p) {
        while (p && !!v && !(v.match(p) && v.match(p)[0] == v)) {
            v = v.substr(0, v.length - 1);
        }
        return v;
    };
    Editbox.formatting = function (value, format) {
        if (format && typeof value !== 'undefined') {
            var ret = '', i = void 0, j = void 0, vn = void 0, vl = void 0, fn = void 0, fl = void 0;
            value = (Array.isArray(value) ? value[0] : value).toString().replace(/\W/g, '');
            for (i = 0, j = 0; i < format.length && j < value.length; i++) {
                vn = !(vl = value.charAt(j).match(/[A-Z]/i)) && !isNaN(parseInt(value.charAt(j)));
                fn = !(fl = format.charAt(i) == '_') && 'XdDmMyY9'.indexOf(format.charAt(i)) >= 0;
                if (fl && !vl || fn && !vn)
                    break;
                ret += fl && vl || fn && vn ? value.charAt(j++) : format.charAt(i);
            }
            value = ret;
        }
        return value || '';
    };
    Editbox.prototype.makeTransform = function () {
        var transform;
        if (typeof this.props.transform == 'string') {
            transform = [];
            this.props.transform.split('').forEach(function (s) { return transform.push(s.charCodeAt(0) - (s.charCodeAt(0) > 57 ? 55 : 48)); });
        }
        return transform;
    };
    Editbox.prototype.onKeyUp = function (e, store) {
        if (this.ui) {
            var data = Editbox.patterning(Editbox.formatting(this.ui.value, this.props.format), this.props.pattern);
            delete this.inputLock;
            var transform = this.makeTransform();
            if (transform) {
                var t = [];
                for (var i = 0; i < transform.length; i++)
                    data.length > transform[i] && (t[i] = data.charAt(transform[i]));
                for (var i = 0; i < t.length; i++)
                    t[i] = t[i] || ' ';
                data = t.join('');
            }
            this.getValueProcessed(data);
            var v = this.props.value;
            if (v === undefined || v === null)
                v = "";
            store && this.props.set && ((v + "") !== data) && this.props.set(data);
        }
    };
    Editbox.prototype.onKeyDown = function (e) {
        this.inputLock = true;
        var ui = e.target, s = this.ui.selectionStart, v = ui.value, m;
        if ((e.key == 'Backspace' || e.key == 'Delete' || e.key == 'Del') && this.props.format && v.length != ui.selectionEnd) {
            e.preventDefault();
            s && (ui.selectionEnd = --ui.selectionStart);
        }
        if (!e.key || e.key.length > 1 || e.ctrlKey)
            return;
        if (this.props.format) {
            this.ca++;
            if (e.key == this.props.format[s]) {
                ui.selectionStart++;
                e.preventDefault();
                return;
            }
            while (this.props.format[s] && '_XdDmMyY9'.indexOf(this.props.format[s]) == -1)
                s++;
            var ol = v.length, nl = Editbox.formatting(v.substr(0, s) + e.key + v.substr(s + 1), this.props.format).length;
            if (s < ol && nl >= ol || s >= ol && nl > ol) {
                ui.value = ui.value.substr(0, s) + ui.value.substr(s + 1);
                ui.selectionEnd = s;
            }
            else {
                e.preventDefault();
                return;
            }
        }
        if (this.props.pattern) {
            m = (v = ui.value.substr(0, s) + e.key + ui.value.substr(ui.selectionEnd)).match(this.props.pattern);
            (!m || m[0] != v) && (this.ca--, e.preventDefault());
        }
    };
    Editbox.prototype.getValueProcessed = function (data) {
        var transform = this.makeTransform();
        if (transform) {
            var t = [];
            for (var i = 0; i < data.length; i++)
                transform.length > i && (t[transform[i]] = data.charAt(i));
            data = t.join('');
        }
        data = Editbox.patterning(Editbox.formatting(data, this.props.format), this.props.pattern);
        if (this.ui && data != this.ui.value && !this.inputLock) {
            var v = this.ui.value, ss = this.ui.selectionStart;
            this.ui.value = data;
            if (this.props.format && ss >= this.ca && ss <= v.length && v != this.ui.value) {
                var over = this.props.format.substr(ss - this.ca, this.ca).replace(/[_XdDmMyY9]/g, '').length;
                if (document.activeElement == this.ui)
                    this.ui.selectionEnd = this.ui.selectionStart = ss + over;
            }
            this.ca = 0;
        }
        return data;
    };
    Editbox.prototype.render = function () {
        var _this = this;
        var _a = this.props, transform = _a.transform, format = _a.format, trigger = _a.trigger, pattern = _a.pattern, value = _a.value, set = _a.set, refUi = _a.refUi, rest = __rest(_a, ["transform", "format", "trigger", "pattern", "value", "set", "refUi"]);
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", __assign({ ref: function (ui) { return (_this.ui = ui, refUi && refUi(ui)); }, onKeyDown: function (e) { return _this.onKeyDown(e); }, onKeyUp: function (e) { return _this.onKeyUp(e, trigger !== 'blur'); }, onBlur: function (e) { return _this.onKeyUp(e, true); }, onChange: function (e) { return _this.onKeyUp(e, trigger !== 'blur'); }, defaultValue: this.getValueProcessed(value === undefined ? "" : value + "") }, rest)));
    };
    Editbox.datePickerRequested = 0;
    return Editbox;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

var EditboxDate = function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Editbox, __assign({ format: "MM/DD/YYYY", transform: "67890134", type: "datepicker" }, props)); };
var EditboxMoney = /** @class */ (function (_super) {
    __extends(EditboxMoney, _super);
    function EditboxMoney() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditboxMoney.formatting2 = function (v, n, l) {
        do {
            v = (n ? '' : '$') + v.replace(/^0+|[^\d]/g, '').replace(/(\d)(?=(\d{3})+$)/g, '$1,');
        } while (l && v.length > l && (v = v.substr(0, v.length - 1)));
        return v;
    };
    EditboxMoney.prototype.onKeyUp = function (e, store) {
        if (this.ui) {
            delete this.inputLock;
            var ui = e.target, v = this.getValueProcessed(this.ui.value);
            v = v.replace(/[^\d.]/g, '');
            store && this.props.set && ((v + "") !== this.props.value) && this.props.set(v);
        }
    };
    EditboxMoney.prototype.onKeyDown = function (e) {
        this.inputLock = true;
        var ui = e.target, ml = (this.props.format && this.props.format.length) < EditboxMoney.formatting2(ui.value + '1', this.props.format && this.props.format.charAt(0) != '$', 99).length;
        if ((e.key == ',' || e.key == 'Delete' || e.key == 'Del') && ui.value.charAt(ui.selectionStart) == ',')
            ui.selectionStart++;
        if ((e.key == 'Delete' || e.key == 'Del') && ui.value.charAt(ui.selectionStart) == '$')
            ui.selectionStart++;
        !e.ctrlKey && e.key && e.key.length == 1 && ui.selectionStart == ui.selectionEnd && (e.key < '0' || e.key > '9' || ml) && e.preventDefault();
    };
    EditboxMoney.prototype.getValueProcessed = function (data) {
        Array.isArray(data) && (data = data[0]);
        data = (typeof data == 'string' || typeof data == 'number') ? EditboxMoney.formatting2(data, this.props.format && this.props.format.charAt(0) != '$', this.props.format && this.props.format.length) : '';
        if (data === '$')
            data = '';
        if (this.ui && data != this.ui.value && !this.inputLock) {
            var ss = this.ui.selectionStart, ov = this.ui.value, o = 0;
            this.ui.value = data;
            if (this.ui == document.activeElement) {
                for (var i = 0; i < ss; i++) {
                    (data.charAt(i) == ',' || data.charAt(i) == '$') && o++;
                    (ov.charAt(i) == ',' || ov.charAt(i) == '$') && o--;
                }
                this.ui.selectionStart = this.ui.selectionEnd = ss + o - (ov.charAt(ss) == ',' && data.charAt(ss + o - 1) == ',' ? 1 : 0);
            }
        }
        return data;
    };
    return EditboxMoney;
}(Editbox));

var Dropdown = /** @class */ (function (_super) {
    __extends(Dropdown, _super);
    function Dropdown() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dropdown.prototype.render = function () {
        var _a = this.props, data = _a.data, set = _a.set, emptyOption = _a.emptyOption, rest = __rest(_a, ["data", "set", "emptyOption"]), v;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", __assign({ onChange: function (e) { return set && set((v = data.items[e.target.selectedIndex + (emptyOption ? -1 : 0)], v ? v.value : null), e); }, value: data.value }, rest),
            emptyOption ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: "", key: -1 }, typeof emptyOption === "string" ? emptyOption : "Please select...") : null,
            data.items.map(function (i) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: i.value, key: i.description }, i.description); })));
    };
    return Dropdown;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

var Radiolist = /** @class */ (function (_super) {
    __extends(Radiolist, _super);
    function Radiolist(props, ctx) {
        var _this = _super.call(this, props, ctx) || this;
        _this.name = "Radiolist__" + (++Radiolist.idx);
        return _this;
    }
    Radiolist.prototype.render = function () {
        var _this = this;
        var _a = this.props, data = _a.data, set = _a.set, rest = __rest(_a, ["data", "set"]);
        return data.items.map(function (item, i) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", __assign({ key: i }, rest),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "radio", name: _this.name, checked: data.value == item.value, onChange: function (e) { return set(item.value, e); } }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, item.description));
        });
    };
    Radiolist.idx = 0;
    return Radiolist;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Checkbox.prototype.render = function () {
        var _this = this;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "checkbox", onChange: function (e) { return _this.props.set && _this.props.set(e.target.checked ? "Y" : "N", e); }, checked: this.props.value === "Y" });
    };
    return Checkbox;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

var TabComponent = /** @class */ (function (_super) {
    __extends(TabComponent, _super);
    function TabComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { lastItems: new Set() };
        return _this;
    }
    TabComponent.getDerivedStateFromProps = function (nextProps, prevState) {
        var newItems = new Set(), newKey;
        nextProps.autoFocusNew && nextProps.items.forEach(function (i) { return (prevState.lastItems.has(i.key) || newKey !== undefined || (newKey = i.key), newItems.add(i.key)); });
        if (typeof nextProps.activeTab === "number") {
            return { activeTab: nextProps.activeTab, lastItems: newItems };
        }
        if (typeof prevState.activeTab === "number" && !nextProps.items.some(function (i) { return i.key === prevState.activeTab; })) {
            return { activeTab: nextProps.items.length ? nextProps.items[0].key : -1, lastItems: newItems };
        }
        if (typeof newKey === "number") {
            return { activeTab: newKey, lastItems: newItems };
        }
        return { lastItems: newItems };
    };
    TabComponent.prototype.render = function () {
        var _this = this;
        var activeItem;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: this.props.className, style: this.props.style },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: this.props.headerClass, style: this.props.headerStyle }, this.props.items.map(function (item) {
                var isActive = item.key === _this.state.activeTab;
                isActive && (activeItem = item);
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: item.key, onClick: function () { return _this.setState({ activeTab: item.key }); }, className: isActive ? _this.props.activeTabClass : _this.props.tabClass, style: isActive ? _this.props.activeTabStyle : _this.props.tabStyle }, _this.props.headerFactory(item, isActive));
            })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: this.props.bodyClass, style: this.props.bodyStyle }, activeItem ? this.props.bodyFactory(activeItem) : null)));
    };
    return TabComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

var ValidationLabel = function (props) { return !!props.error ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "dfe-error" }, props.error) : null; };


/***/ }),

/***/ "./src/ts/api/react-connect.ts":
/*!*************************************!*\
  !*** ./src/ts/api/react-connect.ts ***!
  \*************************************/
/*! exports provided: Proxify, Pipe, SwitchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Proxify", function() { return Proxify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pipe", function() { return Pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchPipe", function() { return SwitchPipe; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proxy */ "./src/ts/api/proxy.ts");
/* harmony import */ var _dfe_stream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dfe-stream */ "./src/ts/api/dfe-stream.ts");
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



function shallowCompare(obj1, obj2) {
    if (obj1 === obj2)
        return true;
    if (typeof obj1 !== typeof obj2 || typeof obj1 !== 'object' || !obj1 !== !obj2)
        return false;
    var names = Object.getOwnPropertyNames(obj1);
    if (names.length != Object.getOwnPropertyNames(obj2).length)
        return false;
    return names.filter(function (n) { return obj1[n] !== obj2[n]; }).length === 0;
}
var Proxified = /** @class */ (function (_super) {
    __extends(Proxified, _super);
    function Proxified(props) {
        var _this = _super.call(this, props) || this;
        _this.$model = (props.model instanceof _proxy__WEBPACK_IMPORTED_MODULE_1__["ModelProxy"] ? props.model : new _proxy__WEBPACK_IMPORTED_MODULE_1__["ModelProxy"](props.model)).forWatcher(_this);
        return _this;
    }
    Proxified.prototype.componentWillUnmount = function () {
        this.$model instanceof _proxy__WEBPACK_IMPORTED_MODULE_1__["ModelProxy"] && this.$model.$listener.undepend();
        this.$model = null;
    };
    Proxified.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        var names = Object.getOwnPropertyNames(nextProps);
        if (!shallowCompare(this.state, nextState) || names.length !== Object.getOwnPropertyNames(this.props).length) {
            return true;
        }
        if (nextProps.model instanceof _proxy__WEBPACK_IMPORTED_MODULE_1__["ModelProxy"]) {
            var pp_1 = this.props, np_1 = nextProps;
            return this.$model.key !== nextProps.model.key || names.some(function (key) { return key !== 'model' && key !== 'key' && pp_1[key] !== np_1[key]; });
        }
        return !shallowCompare(this.props, nextProps);
    };
    Proxified.prototype.render = function () {
        var Type = this.type;
        // forWatcher called to trigger props difference for child.
        // Non-proxified components unaware of proxy nature should just recalculate. 
        // Aware components will receive "notify" when applicable, thus eliminating difference
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](this.type, Object.assign({}, this.props, { model: this.$model }));
    };
    Proxified.prototype.notify = function (action) {
        this.$model && this.forceUpdate();
    };
    return Proxified;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
function bfsNodeSearch(field, model) {
    // TODO: elaborate...
    var source = model.$listener.node;
    while (!(source instanceof _dfe_stream__WEBPACK_IMPORTED_MODULE_2__["LogicNode"])) {
        source = source.source;
    }
    var scan = [source], key = model.key;
    var _loop_1 = function () {
        var next = [];
        for (var i = 0; i < scan.length; i++) {
            var cur = scan[i];
            if (cur.field === field) {
                return { value: cur };
            }
            var m = cur.children.get(key), n = void 0;
            if (m && (n = m.get(field))) {
                return { value: n };
            }
            cur.children.forEach(function (m) { return m.forEach(function (n) { return next.push(n); }); });
        }
        scan = next;
    };
    while (scan.length) {
        var state_1 = _loop_1();
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return null;
}
var Proxify = function (clazz) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.type = clazz;
            return _this;
        }
        return class_1;
    }(Proxified));
};
var Connected = /** @class */ (function (_super) {
    __extends(Connected, _super);
    //$model: JsonProxy<M>|IArfSet
    function Connected(props) {
        var _this = _super.call(this, props) || this;
        _this.source = bfsNodeSearch(_this.constructor.field, props.model);
        if (!_this.source) {
            throw "Logic didn't create node yet. Is this field included in form?";
        }
        if (_this.source.consumer) {
            throw "Node is already connected: implement me";
        }
        _this.source.consumer = _this;
        // We could piggy-back on logic's proxy, but then some UI-only updates would also trigger logic to recompute. 
        _this.state = { model: props.model.forWatcher(_this) };
        return _this;
    }
    Object.defineProperty(Connected, "field", {
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    Connected.prototype.componentWillUnmount = function () {
        this.source && (this.source.consumer = null);
        this.state.model.$listener.undepend();
    };
    Connected.prototype.shouldComponentUpdate = function (nextProps) {
        // it will be updated later via "accept"
        /*if(this.prev && this.prev.notifications.length ) {
            return false;
        }*/
        var names = Object.getOwnPropertyNames(nextProps);
        if (names.length !== Object.getOwnPropertyNames(this.props).length) {
            return true;
        }
        if (nextProps.model instanceof _proxy__WEBPACK_IMPORTED_MODULE_1__["ModelProxy"]) {
            var pp_2 = this.props, np_2 = nextProps;
            return names.some(function (key) { return key !== "model" && key !== "key" && pp_2[key] !== np_2[key]; });
        }
        return !shallowCompare(this.props, nextProps);
    };
    Connected.prototype.render = function () {
        //this.source.lastData === undefined ? null :  ???
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](this.type, Object.assign({}, this.props, {
            model: this.state.model,
            data: this.source.lastData,
            error: this.source.lastError,
            context: this.source.context
        }));
        //let Type = this.type as any; 
        //return <Type {...this.props} model={this.state.model} data={this.source.lastData} error={this.source.lastError} context={(this.source as any).context}/>
    };
    Connected.prototype.accept = function (data, error) {
        var _this = this;
        setImmediate(function () { return _this.source.terminated || _this.forceUpdate(); });
    };
    Connected.prototype.notify = function () {
        this.source.terminated || this.forceUpdate();
    };
    Connected.prototype.terminate = function () {
        // ...
    };
    Connected.to = function () {
        var other = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            other[_i] = arguments[_i];
        }
        var _a;
        Array.isArray(other) && (_a = this.field).with.apply(_a, other.map(function (item) { return item.field; }));
        return this;
    };
    return Connected;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
var Pipe = function (settings) {
    return function (clazz) {
        var field = new _dfe_stream__WEBPACK_IMPORTED_MODULE_2__["Field"](settings);
        return /** @class */ (function (_super) {
            __extends(class_2, _super);
            function class_2() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.type = clazz;
                return _this;
            }
            Object.defineProperty(class_2, "field", {
                get: function () { return field; },
                enumerable: true,
                configurable: true
            });
            return class_2;
        }(Connected));
    };
};
function SwitchPipe(test) {
    var ret = Pipe({ get: function (model) { return test(model) ? model : null; } })(function (props) { return props.data ? props.children : null; });
    //(ret as any).otherwise = () => SwitchPipe((m: M) => !test(m));
    return ret; // as any;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./src/ts/gen/definitions.ts":
/*!***********************************!*\
  !*** ./src/ts/gen/definitions.ts ***!
  \***********************************/
/*! exports provided: com */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "com", function() { return com; });
var com;
(function (com) {
    var arrow;
    (function (arrow) {
        var model;
        (function (model) {
            var def;
            (function (def) {
                var corecomm;
                (function (corecomm) {
                    var bbop;
                    (function (bbop) {
                        var coverages;
                        (function (coverages) {
                            var BbopStopGapLimit;
                            (function (BbopStopGapLimit) {
                                BbopStopGapLimit["NO_COVERAGE"] = "No Coverage";
                                BbopStopGapLimit["LIM_300K_300K_600k"] = "$300,000 Each Accident / $300,000 Each Employee / $600,000 Aggregate";
                                BbopStopGapLimit["LIM_500K_500K_1M"] = "$500,000 Each Accident / $500,000 Each Employee / $1,000,000 Aggregate";
                                BbopStopGapLimit["LIM_1M_1M_2M"] = "$1,000,000 Each Accident / $1,000,000 Each Employee / $2,000,000 Aggregate";
                                BbopStopGapLimit["LIM_2M_2M_4M"] = "$2,000,000 Each Accident / $2,000,000 Each Employee / $4,000,000 Aggregate";
                                BbopStopGapLimit["NULL"] = "";
                            })(BbopStopGapLimit = coverages.BbopStopGapLimit || (coverages.BbopStopGapLimit = {}));
                            var CyberCoverageLimDed;
                            (function (CyberCoverageLimDed) {
                                CyberCoverageLimDed["ONE_HUNDRED"] = "$100,000/$10,000";
                                CyberCoverageLimDed["NULL"] = "";
                            })(CyberCoverageLimDed = coverages.CyberCoverageLimDed || (coverages.CyberCoverageLimDed = {}));
                            var EmpBenefitsNumEmployees;
                            (function (EmpBenefitsNumEmployees) {
                                EmpBenefitsNumEmployees["ONE_TO_TWENTYFIVE"] = "1-25";
                                EmpBenefitsNumEmployees["TWENTYSIX_TO_FIFTY"] = "26-50";
                                EmpBenefitsNumEmployees["FIFTYONE_AND_OVER"] = "51+";
                                EmpBenefitsNumEmployees["NULL"] = "";
                            })(EmpBenefitsNumEmployees = coverages.EmpBenefitsNumEmployees || (coverages.EmpBenefitsNumEmployees = {}));
                        })(coverages = bbop.coverages || (bbop.coverages = {}));
                        var location;
                        (function (location) {
                            var building;
                            (function (building) {
                                var coverages;
                                (function (coverages) {
                                    var UtilityType;
                                    (function (UtilityType) {
                                        UtilityType["PUBLIC"] = "Public";
                                        UtilityType["OTHER"] = "Other";
                                        UtilityType["NULL"] = "";
                                    })(UtilityType = coverages.UtilityType || (coverages.UtilityType = {}));
                                    var BuildingValuation;
                                    (function (BuildingValuation) {
                                        BuildingValuation["ReplacementCost"] = "Replacement Cost";
                                        BuildingValuation["ActualCashValue"] = "Actual Cash Value";
                                        BuildingValuation["FunctionalBuildingValuation"] = "Functional Building Valuation";
                                        BuildingValuation["NULL"] = "";
                                    })(BuildingValuation = coverages.BuildingValuation || (coverages.BuildingValuation = {}));
                                })(coverages = building.coverages || (building.coverages = {}));
                                var ClassTag;
                                (function (ClassTag) {
                                    ClassTag["SALES"] = "SALES";
                                    ClassTag["PAY"] = "PAY";
                                    ClassTag["LOI"] = "LOI";
                                    ClassTag["NA"] = "N/A";
                                    ClassTag["NULL"] = "";
                                })(ClassTag = building.ClassTag || (building.ClassTag = {}));
                                var BuildingOccupancy;
                                (function (BuildingOccupancy) {
                                    BuildingOccupancy["NONOWNER"] = "Non-Owner Occupied Bldg.";
                                    BuildingOccupancy["OWNEROCCUPIED10ORLESS"] = "Owner Occupied Bldg - 10% or Less";
                                    BuildingOccupancy["OWNEROCCUPIEDMORETHAN10"] = "Owner Occupied Bldg - More than 10%";
                                    BuildingOccupancy["TENANT"] = "Tenant";
                                    BuildingOccupancy["NULL"] = "";
                                })(BuildingOccupancy = building.BuildingOccupancy || (building.BuildingOccupancy = {}));
                            })(building = location.building || (location.building = {}));
                            var FloodZone;
                            (function (FloodZone) {
                                FloodZone["A"] = "A";
                                FloodZone["AO"] = "AO";
                                FloodZone["AH"] = "AH";
                                FloodZone["AE"] = "AE";
                                FloodZone["A1"] = "A1";
                                FloodZone["A2"] = "A2";
                                FloodZone["A3"] = "A3";
                                FloodZone["A4"] = "A4";
                                FloodZone["A5"] = "A5";
                                FloodZone["A6"] = "A6";
                                FloodZone["A7"] = "A7";
                                FloodZone["A8"] = "A8";
                                FloodZone["A9"] = "A9";
                                FloodZone["A10"] = "A10";
                                FloodZone["A11"] = "A11";
                                FloodZone["A12"] = "A12";
                                FloodZone["A13"] = "A13";
                                FloodZone["A14"] = "A14";
                                FloodZone["A15"] = "A15";
                                FloodZone["A16"] = "A16";
                                FloodZone["A17"] = "A17";
                                FloodZone["A18"] = "A18";
                                FloodZone["A19"] = "A19";
                                FloodZone["A20"] = "A20";
                                FloodZone["A21"] = "A21";
                                FloodZone["A22"] = "A22";
                                FloodZone["A23"] = "A23";
                                FloodZone["A24"] = "A24";
                                FloodZone["A25"] = "A25";
                                FloodZone["A26"] = "A26";
                                FloodZone["A27"] = "A27";
                                FloodZone["A28"] = "A28";
                                FloodZone["A29"] = "A29";
                                FloodZone["A30"] = "A30";
                                FloodZone["A99"] = "A99";
                                FloodZone["V"] = "V";
                                FloodZone["VE"] = "VE";
                                FloodZone["V1"] = "V1";
                                FloodZone["V2"] = "V2";
                                FloodZone["V3"] = "V3";
                                FloodZone["V4"] = "V4";
                                FloodZone["V5"] = "V5";
                                FloodZone["V6"] = "V6";
                                FloodZone["V7"] = "V7";
                                FloodZone["V8"] = "V8";
                                FloodZone["V9"] = "V9";
                                FloodZone["V10"] = "V10";
                                FloodZone["V11"] = "V11";
                                FloodZone["V12"] = "V12";
                                FloodZone["V13"] = "V13";
                                FloodZone["V14"] = "V14";
                                FloodZone["V15"] = "V15";
                                FloodZone["V16"] = "V16";
                                FloodZone["V17"] = "V17";
                                FloodZone["V18"] = "V18";
                                FloodZone["V19"] = "V19";
                                FloodZone["V20"] = "V20";
                                FloodZone["V21"] = "V21";
                                FloodZone["V22"] = "V22";
                                FloodZone["V23"] = "V23";
                                FloodZone["V24"] = "V24";
                                FloodZone["V25"] = "V25";
                                FloodZone["V26"] = "V26";
                                FloodZone["V27"] = "V27";
                                FloodZone["V28"] = "V28";
                                FloodZone["V29"] = "V29";
                                FloodZone["V30"] = "V30";
                                FloodZone["B"] = "B";
                                FloodZone["C"] = "C";
                                FloodZone["X"] = "X";
                                FloodZone["BX"] = "BX";
                                FloodZone["CX"] = "CX";
                                FloodZone["NONE"] = "NONE";
                                FloodZone["NULL"] = "NULL";
                            })(FloodZone = location.FloodZone || (location.FloodZone = {}));
                        })(location = bbop.location || (bbop.location = {}));
                    })(bbop = corecomm.bbop || (corecomm.bbop = {}));
                    var work;
                    (function (work) {
                        var uw;
                        (function (uw) {
                            var bureau;
                            (function (bureau) {
                                var Bureau;
                                (function (Bureau) {
                                    Bureau["unknown"] = "unknown";
                                    Bureau["ncci"] = "ncci";
                                    Bureau["newjersey"] = "newjersey";
                                    Bureau["california"] = "california";
                                    Bureau["delaware"] = "delaware";
                                    Bureau["michigan"] = "michigan";
                                    Bureau["oklahoma"] = "oklahoma";
                                    Bureau["pennsylvania"] = "pennsylvania";
                                })(Bureau = bureau.Bureau || (bureau.Bureau = {}));
                                var RatingStatus;
                                (function (RatingStatus) {
                                    RatingStatus["Estimated"] = "Estimated";
                                    RatingStatus["Final"] = "Final";
                                    RatingStatus["NotRated"] = "Not Exp Rated";
                                    RatingStatus["Preliminary"] = "Preliminary";
                                })(RatingStatus = bureau.RatingStatus || (bureau.RatingStatus = {}));
                            })(bureau = uw.bureau || (uw.bureau = {}));
                            var ICoreCommWorkUwGeneralVs$NumClaims;
                            (function (ICoreCommWorkUwGeneralVs$NumClaims) {
                                ICoreCommWorkUwGeneralVs$NumClaims["NULL"] = "";
                                ICoreCommWorkUwGeneralVs$NumClaims["nc_0"] = "0";
                                ICoreCommWorkUwGeneralVs$NumClaims["nc_1"] = "1";
                                ICoreCommWorkUwGeneralVs$NumClaims["nc_2"] = "2";
                                ICoreCommWorkUwGeneralVs$NumClaims["nc_3"] = "3";
                                ICoreCommWorkUwGeneralVs$NumClaims["nc_4"] = "4";
                                ICoreCommWorkUwGeneralVs$NumClaims["nc_5plus"] = "5+";
                            })(ICoreCommWorkUwGeneralVs$NumClaims = uw.ICoreCommWorkUwGeneralVs$NumClaims || (uw.ICoreCommWorkUwGeneralVs$NumClaims = {}));
                        })(uw = work.uw || (work.uw = {}));
                        var taxpayerid;
                        (function (taxpayerid) {
                            var TaxpayerState;
                            (function (TaxpayerState) {
                                TaxpayerState["nj"] = "nj";
                            })(TaxpayerState = taxpayerid.TaxpayerState || (taxpayerid.TaxpayerState = {}));
                        })(taxpayerid = work.taxpayerid || (work.taxpayerid = {}));
                        var location;
                        (function (location) {
                            var WorkStopGapLimit;
                            (function (WorkStopGapLimit) {
                                WorkStopGapLimit["NO_COVERAGE"] = "No Coverage";
                                WorkStopGapLimit["LIM_500K_500K_500K"] = "$500,000/$500,000/$500,000";
                                WorkStopGapLimit["LIM_1M_1M_1M"] = "$1,000,000/$1,000,000/$1,000,000";
                                WorkStopGapLimit["NULL"] = "";
                            })(WorkStopGapLimit = location.WorkStopGapLimit || (location.WorkStopGapLimit = {}));
                        })(location = work.location || (work.location = {}));
                        var CoreCommIndustryGroup;
                        (function (CoreCommIndustryGroup) {
                            CoreCommIndustryGroup["Agriculture"] = "agriculture";
                            CoreCommIndustryGroup["Aircraft"] = "aircraft";
                            CoreCommIndustryGroup["Amusement"] = "amusement";
                            CoreCommIndustryGroup["Automotive"] = "automotive";
                            CoreCommIndustryGroup["ConstructAndErect"] = "constructanderect";
                            CoreCommIndustryGroup["Construction"] = "construction";
                            CoreCommIndustryGroup["ConstructOrErect"] = "constructorerect";
                            CoreCommIndustryGroup["Fela"] = "fela";
                            CoreCommIndustryGroup["Food"] = "food";
                            CoreCommIndustryGroup["Habitational"] = "habitational";
                            CoreCommIndustryGroup["Healthcare"] = "healthcare";
                            CoreCommIndustryGroup["Horticulture"] = "horticulture";
                            CoreCommIndustryGroup["Hospitality"] = "hospitality";
                            CoreCommIndustryGroup["LifeSciences"] = "lifesciences";
                            CoreCommIndustryGroup["Mercantile"] = "mercantile";
                            CoreCommIndustryGroup["MfgElectric"] = "mfgelectric";
                            CoreCommIndustryGroup["MfgMetal"] = "mfgmetal";
                            CoreCommIndustryGroup["MfgMisc"] = "mfgmisc";
                            CoreCommIndustryGroup["MfgPaper"] = "mfgpaper";
                            CoreCommIndustryGroup["MfgPlastic"] = "mfgplastic";
                            CoreCommIndustryGroup["MfgTextile"] = "mfgtextile";
                            CoreCommIndustryGroup["MfgWood"] = "mfgwood";
                            CoreCommIndustryGroup["Mining"] = "mining";
                            CoreCommIndustryGroup["Municipality"] = "municipality";
                            CoreCommIndustryGroup["Newspaper"] = "newspaper";
                            CoreCommIndustryGroup["Oil"] = "oil";
                            CoreCommIndustryGroup["Other"] = "other";
                            CoreCommIndustryGroup["Professional"] = "professional";
                            CoreCommIndustryGroup["SecurityGuards"] = "securityguards";
                            CoreCommIndustryGroup["Stone"] = "stone";
                            CoreCommIndustryGroup["Transportation"] = "transportation";
                            CoreCommIndustryGroup["Undefined"] = "undefined";
                            CoreCommIndustryGroup["NULL"] = "null";
                        })(CoreCommIndustryGroup = work.CoreCommIndustryGroup || (work.CoreCommIndustryGroup = {}));
                        var waiver;
                        (function (waiver) {
                            var WaiverType;
                            (function (WaiverType) {
                                WaiverType["NoWaiver"] = "NoWaiver";
                                WaiverType["Blanket"] = "Blanket";
                                WaiverType["Specific"] = "Specific";
                            })(WaiverType = waiver.WaiverType || (waiver.WaiverType = {}));
                        })(waiver = work.waiver || (work.waiver = {}));
                        var individual;
                        (function (individual) {
                            var IncludedExcludedType;
                            (function (IncludedExcludedType) {
                                IncludedExcludedType["Included"] = "Included";
                                IncludedExcludedType["Excluded"] = "Excluded";
                                IncludedExcludedType["Null"] = "";
                            })(IncludedExcludedType = individual.IncludedExcludedType || (individual.IncludedExcludedType = {}));
                            var RelationshipType;
                            (function (RelationshipType) {
                                RelationshipType["SoleProprietor"] = "soleproprietor";
                                RelationshipType["Officers"] = "officers";
                                RelationshipType["Partners"] = "partners";
                                RelationshipType["Others"] = "others";
                                RelationshipType["Null"] = "";
                            })(RelationshipType = individual.RelationshipType || (individual.RelationshipType = {}));
                        })(individual = work.individual || (work.individual = {}));
                    })(work = corecomm.work || (corecomm.work = {}));
                    var umbr;
                    (function (umbr) {
                        var workother;
                        (function (workother) {
                            var StateFundOption;
                            (function (StateFundOption) {
                                StateFundOption["Arizona"] = "Arizona - SCF Arizona";
                                StateFundOption["California"] = "California - State Compensation Insurance Fund";
                                StateFundOption["Colorado"] = "Colorado - Pinnacol Assurance";
                                StateFundOption["Hawaii"] = "Hawaii Employers' Mutual Insurance Company";
                                StateFundOption["Idaho"] = "Idaho State Insurance Fund";
                                StateFundOption["Kentucky"] = "Kentucky Employers' Mutual Insurance Company";
                                StateFundOption["Louisiana"] = "Louisiana Workers' Compensation Corp.";
                                StateFundOption["Maine"] = "Maine Employers' Mutual Insurance Company";
                                StateFundOption["Maryland"] = "Maryland - Injured Workers' Insurance Fund";
                                StateFundOption["Minnesota"] = "Minnesota - SFM (State Fund Mutual) Mutual Insurance Company";
                                StateFundOption["Missouri"] = "Missouri Employers' Mutual Insurance Company";
                                StateFundOption["Montana"] = "Montana State Fund";
                                StateFundOption["NewMexico"] = "New Mexico Mutual Group";
                                StateFundOption["NewYork"] = "New York State Insurance Fund";
                                StateFundOption["NorthDakota"] = "North Dakota Workforce Safety & Insurance";
                                StateFundOption["Ohio"] = "Ohio Bureau of Workers' Compensation";
                                StateFundOption["Oregon"] = "Oregon - State Accident Insurance Fund (SAIF)";
                                StateFundOption["Pennsylvania"] = "Pennsylvania - State Workers' Insurance Fund (SWIF)";
                                StateFundOption["RhodeIsland"] = "Rhode Island - Beacon Mutual Insurance Company";
                                StateFundOption["South"] = "South Carolina State Accident Fund";
                                StateFundOption["Texas"] = "Texas Mutual Insurance Company";
                                StateFundOption["Utah"] = "Utah - Workers' Compensation Fund";
                                StateFundOption["Washington"] = "Washington State Department of Labor & Industries";
                                StateFundOption["WestVirginia"] = "West Virginia - Brick Street Mutual Insurance Company";
                                StateFundOption["Wyoming"] = "Wyoming Division of Workers' Safety & Compensation";
                                StateFundOption["Other"] = "Other - Please Specify";
                            })(StateFundOption = workother.StateFundOption || (workother.StateFundOption = {}));
                        })(workother = umbr.workother || (umbr.workother = {}));
                    })(umbr = corecomm.umbr || (corecomm.umbr = {}));
                    var cmau;
                    (function (cmau) {
                        var location;
                        (function (location) {
                            var car;
                            (function (car) {
                                var coverages;
                                (function (coverages) {
                                    var PipOption;
                                    (function (PipOption) {
                                        PipOption["NULL"] = "";
                                        PipOption["NoCoverage"] = "No Coverage";
                                        PipOption["Option1"] = "Option 1";
                                        PipOption["Option2"] = "Option 2";
                                        PipOption["Option3"] = "Option 3";
                                        PipOption["Option4"] = "Option 4";
                                        PipOption["Option5"] = "Option 5";
                                        PipOption["Option6"] = "Option 6";
                                        PipOption["Option7"] = "Option 7";
                                        PipOption["Option8"] = "Option 8";
                                        PipOption["Option9"] = "Option 9";
                                        PipOption["Option10"] = "Option 10";
                                        PipOption["Option11"] = "Option 11";
                                        PipOption["Option12"] = "Option 12";
                                        PipOption["Option13"] = "Option 13";
                                        PipOption["Option14"] = "Option 14";
                                        PipOption["Option15"] = "Option 15";
                                        PipOption["Option16"] = "Option 16";
                                    })(PipOption = coverages.PipOption || (coverages.PipOption = {}));
                                    var PipBenefitsTypePA;
                                    (function (PipBenefitsTypePA) {
                                        PipBenefitsTypePA["NULL"] = "";
                                        PipBenefitsTypePA["Basic"] = "Basic First Party Benefits";
                                        PipBenefitsTypePA["Additional"] = "Additional First Party Benefits";
                                        PipBenefitsTypePA["Combination"] = "Combination First Party Benefits";
                                    })(PipBenefitsTypePA = coverages.PipBenefitsTypePA || (coverages.PipBenefitsTypePA = {}));
                                    var PipBenefitsTypeWA;
                                    (function (PipBenefitsTypeWA) {
                                        PipBenefitsTypeWA["NULL"] = "";
                                        PipBenefitsTypeWA["NoCoverage"] = "No Coverage";
                                        PipBenefitsTypeWA["Basic"] = "Basic";
                                        PipBenefitsTypeWA["IncreasedLimits"] = "Increased Limits";
                                    })(PipBenefitsTypeWA = coverages.PipBenefitsTypeWA || (coverages.PipBenefitsTypeWA = {}));
                                    var PipCoverageTypeKY;
                                    (function (PipCoverageTypeKY) {
                                        PipCoverageTypeKY["NULL"] = "";
                                        PipCoverageTypeKY["FULL"] = "Full";
                                        PipCoverageTypeKY["GUEST"] = "Guest";
                                    })(PipCoverageTypeKY = coverages.PipCoverageTypeKY || (coverages.PipCoverageTypeKY = {}));
                                    var PipDeductibleApplicantsOR;
                                    (function (PipDeductibleApplicantsOR) {
                                        PipDeductibleApplicantsOR["NULL"] = "";
                                        PipDeductibleApplicantsOR["NAMED_INSURED"] = "Named Insured";
                                        PipDeductibleApplicantsOR["RESIDENT_RELATIVES"] = "Named Insured and Resident Relatives";
                                        PipDeductibleApplicantsOR["NAMED_RELATIVES"] = "Named Insured and Named Relatives";
                                    })(PipDeductibleApplicantsOR = coverages.PipDeductibleApplicantsOR || (coverages.PipDeductibleApplicantsOR = {}));
                                    var PipDeductibleTypeMN;
                                    (function (PipDeductibleTypeMN) {
                                        PipDeductibleTypeMN["NULL"] = "";
                                        PipDeductibleTypeMN["NoCoverage"] = "No Coverage";
                                        PipDeductibleTypeMN["MedicalExpenses"] = "Medical Expenses";
                                        PipDeductibleTypeMN["WorkLoss"] = "Work Loss";
                                        PipDeductibleTypeMN["Combined"] = "Combined";
                                    })(PipDeductibleTypeMN = coverages.PipDeductibleTypeMN || (coverages.PipDeductibleTypeMN = {}));
                                    var TortLimitationKY;
                                    (function (TortLimitationKY) {
                                        TortLimitationKY["NULL"] = "";
                                        TortLimitationKY["REJECTED"] = "Rejected";
                                        TortLimitationKY["OPTION_1"] = "1 - 49%";
                                        TortLimitationKY["OPTION_2"] = "50% - 99%";
                                        TortLimitationKY["OPTION_3"] = "100%";
                                    })(TortLimitationKY = coverages.TortLimitationKY || (coverages.TortLimitationKY = {}));
                                    var WorkLossExclusionTypeMN;
                                    (function (WorkLossExclusionTypeMN) {
                                        WorkLossExclusionTypeMN["NULL"] = "";
                                        WorkLossExclusionTypeMN["NotApplicable"] = "Not Applicable";
                                        WorkLossExclusionTypeMN["InsuredAge65"] = "Named Insured Age 65 or Older";
                                        WorkLossExclusionTypeMN["InsuredRelativeAge65"] = "Named Insured and Relative both Age 65 or Older";
                                    })(WorkLossExclusionTypeMN = coverages.WorkLossExclusionTypeMN || (coverages.WorkLossExclusionTypeMN = {}));
                                    var AntiTheftDeviceCode;
                                    (function (AntiTheftDeviceCode) {
                                        AntiTheftDeviceCode["NULL"] = "";
                                        AntiTheftDeviceCode["NONE"] = "None";
                                        AntiTheftDeviceCode["CODE_1"] = "Anti-Theft Device Code 1";
                                        AntiTheftDeviceCode["CODE_2"] = "Anti-Theft Device Code 2";
                                        AntiTheftDeviceCode["CODE_3"] = "Anti-Theft Device Code 3";
                                        AntiTheftDeviceCode["CODE_4"] = "Anti-Theft Device Code 4";
                                        AntiTheftDeviceCode["CODE_5"] = "Anti-Theft Device Code 5";
                                        AntiTheftDeviceCode["CODE_6"] = "Anti-Theft Device Code 6";
                                        AntiTheftDeviceCode["CODE_7"] = "Anti-Theft Device Code 7";
                                        AntiTheftDeviceCode["CODE_8"] = "Anti-Theft Device Code 8";
                                        AntiTheftDeviceCode["CODE_9"] = "Anti-Theft Device Code 9";
                                    })(AntiTheftDeviceCode = coverages.AntiTheftDeviceCode || (coverages.AntiTheftDeviceCode = {}));
                                })(coverages = car.coverages || (car.coverages = {}));
                                var AirbagsSeatbelts;
                                (function (AirbagsSeatbelts) {
                                    AirbagsSeatbelts["NULL"] = "";
                                    AirbagsSeatbelts["NONE"] = "None";
                                    AirbagsSeatbelts["BOTH"] = "Both front outboard seat positions";
                                    AirbagsSeatbelts["DRIVER_SIDE_ONLY"] = "Driver side position only";
                                })(AirbagsSeatbelts = car.AirbagsSeatbelts || (car.AirbagsSeatbelts = {}));
                                var BusinessUseClass;
                                (function (BusinessUseClass) {
                                    BusinessUseClass["Service"] = "Service";
                                    BusinessUseClass["Retail"] = "Retail";
                                    BusinessUseClass["Commercial"] = "Commercial";
                                    BusinessUseClass["NULL"] = "NULL";
                                })(BusinessUseClass = car.BusinessUseClass || (car.BusinessUseClass = {}));
                                var Zone;
                                (function (Zone) {
                                    Zone["NULL"] = "";
                                    Zone["Zone_01"] = "Zone 01 - Atlanta";
                                    Zone["Zone_02"] = "Zone 02 - Baltimore/Washington";
                                    Zone["Zone_03"] = "Zone 03 - Boston";
                                    Zone["Zone_04"] = "Zone 04 - Buffalo";
                                    Zone["Zone_05"] = "Zone 05 - Charlotte";
                                    Zone["Zone_06"] = "Zone 06 - Chicago";
                                    Zone["Zone_07"] = "Zone 07 - Cincinnati";
                                    Zone["Zone_08"] = "Zone 08 - Cleveland";
                                    Zone["Zone_09"] = "Zone 09 - Dallas Fort Worth";
                                    Zone["Zone_10"] = "Zone 10 - Denver";
                                    Zone["Zone_11"] = "Zone 11 - Detroit";
                                    Zone["Zone_12"] = "Zone 12 - Hartford";
                                    Zone["Zone_13"] = "Zone 13 - Houston";
                                    Zone["Zone_14"] = "Zone 14 - Indianapolis";
                                    Zone["Zone_15"] = "Zone 15 - Jacksonville";
                                    Zone["Zone_16"] = "Zone 16 - Kansas City";
                                    Zone["Zone_17"] = "Zone 17 - Little Rock";
                                    Zone["Zone_18"] = "Zone 18 - Los Angeles";
                                    Zone["Zone_19"] = "Zone 19 - Louisville";
                                    Zone["Zone_20"] = "Zone 20 - Memphis";
                                    Zone["Zone_21"] = "Zone 21 - Miami";
                                    Zone["Zone_22"] = "Zone 22 - Milwaukee";
                                    Zone["Zone_23"] = "Zone 23 - Minneapolis St. Paul";
                                    Zone["Zone_24"] = "Zone 24 - Nashville";
                                    Zone["Zone_25"] = "Zone 25 - New Orleans";
                                    Zone["Zone_26"] = "Zone 26 - New York City";
                                    Zone["Zone_27"] = "Zone 27 - Oklahoma City";
                                    Zone["Zone_28"] = "Zone 28 - Omaha";
                                    Zone["Zone_29"] = "Zone 29 - Phoenix";
                                    Zone["Zone_30"] = "Zone 30 - Philadelphia";
                                    Zone["Zone_31"] = "Zone 31 - Pittsburgh";
                                    Zone["Zone_32"] = "Zone 32 - Portland";
                                    Zone["Zone_33"] = "Zone 33 - Richmond";
                                    Zone["Zone_34"] = "Zone 34 - St. Louis";
                                    Zone["Zone_35"] = "Zone 35 - Salt Lake City";
                                    Zone["Zone_36"] = "Zone 36 - San Francisco";
                                    Zone["Zone_37"] = "Zone 37 - Tulsa";
                                    Zone["Zone_40"] = "Zone 40 - Pacific";
                                    Zone["Zone_41"] = "Zone 41 - Mountain";
                                    Zone["Zone_42"] = "Zone 42 - Midwest";
                                    Zone["Zone_43"] = "Zone 43 - Southwest";
                                    Zone["Zone_44"] = "Zone 44 - North Central";
                                    Zone["Zone_45"] = "Zone 45 - Mideast";
                                    Zone["Zone_46"] = "Zone 46 - Gulf";
                                    Zone["Zone_47"] = "Zone 47 - South East";
                                    Zone["Zone_48"] = "Zone 48 - Eastern";
                                    Zone["Zone_49"] = "Zone 49 - New England";
                                })(Zone = car.Zone || (car.Zone = {}));
                                var GolfType;
                                (function (GolfType) {
                                    GolfType["GolfCarts"] = "Golf Carts";
                                    GolfType["LowSpeedVehicles"] = "Low Speed Vehicles";
                                })(GolfType = car.GolfType || (car.GolfType = {}));
                                var GolfUse;
                                (function (GolfUse) {
                                    GolfUse["Other"] = "Other Commercial Purposes";
                                    GolfUse["GolfCourse"] = "Used On Golf Course";
                                })(GolfUse = car.GolfUse || (car.GolfUse = {}));
                                var MobileHomeType;
                                (function (MobileHomeType) {
                                    MobileHomeType["Trailer"] = "Trailer Equipped As Living Quarters";
                                    MobileHomeType["Pickup"] = "Pickup Trucks Used Solely To Transport Camper Bodies";
                                    MobileHomeType["MotorHome"] = "Motor Homes Self-Propelled Equipped As Living Quarters";
                                })(MobileHomeType = car.MobileHomeType || (car.MobileHomeType = {}));
                                var MotorHomeSize;
                                (function (MotorHomeSize) {
                                    MotorHomeSize["Short"] = "Up To 22 feet";
                                    MotorHomeSize["Long"] = "More Than 22 feet";
                                })(MotorHomeSize = car.MotorHomeSize || (car.MotorHomeSize = {}));
                                var OperatorExperience;
                                (function (OperatorExperience) {
                                    OperatorExperience["NoOperator"] = "No operator licensed less than 5 years";
                                    OperatorExperience["NonOwnerLicensed"] = "Licensed less than 5 yrs not owner or principal operator";
                                    OperatorExperience["OwnerLicensed"] = "Owner or principal operator licensed less than 5 yrs";
                                })(OperatorExperience = car.OperatorExperience || (car.OperatorExperience = {}));
                                var OperatorUse;
                                (function (OperatorUse) {
                                    OperatorUse["Short"] = "To or from work less than 15 miles";
                                    OperatorUse["Long"] = "To or from work 15 or more miles";
                                    OperatorUse["NonWork"] = "Not driven to work or school";
                                })(OperatorUse = car.OperatorUse || (car.OperatorUse = {}));
                                var RadiusClass;
                                (function (RadiusClass) {
                                    RadiusClass["Local"] = "Local up to 50 miles";
                                    RadiusClass["Intermediate"] = "Intermediate 51 to 200 miles";
                                    RadiusClass["Long"] = "Long distance over 200 miles";
                                    RadiusClass["NULL"] = "";
                                })(RadiusClass = car.RadiusClass || (car.RadiusClass = {}));
                                var SecondaryClass;
                                (function (SecondaryClass) {
                                    SecondaryClass["Truckers"] = "Truckers";
                                    SecondaryClass["Farmers"] = "Farmers";
                                    SecondaryClass["FoodDelivery"] = "Food Delivery";
                                    SecondaryClass["SpecialDelivery"] = "Specialized Delivery";
                                    SecondaryClass["WasteDisposal"] = "Waste Disposal";
                                    SecondaryClass["DumpTransitMix"] = "Dump & Transit Mix";
                                    SecondaryClass["Contractors"] = "Contractors";
                                    SecondaryClass["NOS"] = "Not Otherwise Specified";
                                    SecondaryClass["NULL"] = "";
                                })(SecondaryClass = car.SecondaryClass || (car.SecondaryClass = {}));
                                var SecondaryClassType;
                                (function (SecondaryClassType) {
                                    SecondaryClassType["AllOthers"] = "All other";
                                    SecondaryClassType["AllOthers2"] = "All Other";
                                    SecondaryClassType["ArmoredCars"] = "Armored cars";
                                    SecondaryClassType["AutoDismantler"] = "Automobile dismantler";
                                    SecondaryClassType["Building_Commercial"] = "Building - Commercial";
                                    SecondaryClassType["Building_Private"] = "Building - Private Dwelling";
                                    SecondaryClassType["Building_Wrecking"] = "Building wrecking operations";
                                    SecondaryClassType["Canneries"] = "Canneries and packing plants";
                                    SecondaryClassType["Carrier"] = "Carrier";
                                    SecondaryClassType["Carrier_Common"] = "Common carrier";
                                    SecondaryClassType["Carrier_Contract"] = "Contract carrier (not chemicals or iron and steel)";
                                    SecondaryClassType["Carrier_Contract_Chemical"] = "Contract Carrier chemicals";
                                    SecondaryClassType["Carrier_Contract_Iron"] = "Contract carrier iron and steel";
                                    SecondaryClassType["Excavating"] = "Excavating";
                                    SecondaryClassType["Carrier_Excempt"] = "Exempt carrier (other than livestock)";
                                    SecondaryClassType["Carrier_Excempt_Livestock"] = "Exempt carrier livestock";
                                    SecondaryClassType["Film"] = "Film";
                                    SecondaryClassType["Fish"] = "Fish and seafood";
                                    SecondaryClassType["FrozenFood"] = "Frozen foods";
                                    SecondaryClassType["Fruit"] = "Fruit and vegetables";
                                    SecondaryClassType["Garbage"] = "Garbage";
                                    SecondaryClassType["Family_Owned_Corp"] = "Ind or Family owned corp (not hauling livestock)";
                                    SecondaryClassType["Junk_Dealer"] = "Junk dealer";
                                    SecondaryClassType["Livestock"] = "Livestock";
                                    SecondaryClassType["Logging"] = "Logging and lumbering";
                                    SecondaryClassType["Magazines"] = "Magazines and newspapers";
                                    SecondaryClassType["Mail"] = "Mail and parcel post";
                                    SecondaryClassType["Meat"] = "Meat or poultry";
                                    SecondaryClassType["Minimg"] = "Mining";
                                    SecondaryClassType["Quarrying"] = "Quarrying";
                                    SecondaryClassType["Repairs"] = "Repair or service";
                                    SecondaryClassType["Sand"] = "Sand and Gravel";
                                    SecondaryClassType["Street"] = "Street and road";
                                    SecondaryClassType["Tow_hire"] = "Tow-truck for hire";
                                    SecondaryClassType["NULL"] = "";
                                })(SecondaryClassType = car.SecondaryClassType || (car.SecondaryClassType = {}));
                                var TrailerType;
                                (function (TrailerType) {
                                    TrailerType["Semitrailers"] = "Semitrailers";
                                    TrailerType["Trailers"] = "Trailers";
                                    TrailerType["ServiceUtilityTrailer"] = "Service or Utility Trailer (0-2000 lbs. Load Capacity)";
                                })(TrailerType = car.TrailerType || (car.TrailerType = {}));
                                var ValuationMethod;
                                (function (ValuationMethod) {
                                    ValuationMethod["Actual_Cash_Value"] = "Actual Cash Value";
                                    ValuationMethod["Stated_Amount"] = "Stated Amount";
                                })(ValuationMethod = car.ValuationMethod || (car.ValuationMethod = {}));
                                var VehicleClass;
                                (function (VehicleClass) {
                                    VehicleClass["LightTruck"] = "Light Truck 10,000 lbs GVW or less";
                                    VehicleClass["MediumTruck"] = "Medium Truck 10,001 to 20,000 lbs GVW";
                                    VehicleClass["HeavyTruck"] = "Heavy Truck 20,001 to 45,000 lbs GVW";
                                    VehicleClass["XtraTruck"] = "Extra-Heavy Truck over 45,000 lbs GVW";
                                    VehicleClass["HeavyTractor"] = "Heavy Truck-Tractor 45,000 lbs GCW or less";
                                    VehicleClass["XtraTractor"] = "Extra-Heavy Truck-Tractor over 45,000 lbs GCW";
                                    VehicleClass["Trailer"] = "Trailer Types";
                                    VehicleClass["NULL"] = "";
                                })(VehicleClass = car.VehicleClass || (car.VehicleClass = {}));
                                var VehicleType;
                                (function (VehicleType) {
                                    VehicleType["Antique"] = "antique";
                                    VehicleType["Cart"] = "golf";
                                    VehicleType["FuneralDirector"] = "funeral";
                                    VehicleType["MobileHome"] = "mobile";
                                    VehicleType["PrivatePassenger"] = "car";
                                    VehicleType["Truck"] = "truck";
                                    VehicleType["Motorcycle"] = "motorcycle";
                                    VehicleType["NULL"] = "";
                                })(VehicleType = car.VehicleType || (car.VehicleType = {}));
                                var VehicleUse;
                                (function (VehicleUse) {
                                    VehicleUse["Farmers"] = "Farmers Vehicle";
                                    VehicleUse["NonBusiness"] = "Furnished for Non-Business Use";
                                    VehicleUse["AllOther"] = "All Other";
                                })(VehicleUse = car.VehicleUse || (car.VehicleUse = {}));
                                var losspayee;
                                (function (losspayee) {
                                    var ICmauLossPayeeVs$PayeeType;
                                    (function (ICmauLossPayeeVs$PayeeType) {
                                        ICmauLossPayeeVs$PayeeType["ailessor"] = "ailessor";
                                        ICmauLossPayeeVs$PayeeType["payee"] = "payee";
                                        ICmauLossPayeeVs$PayeeType["namedInsured"] = "namedInsured";
                                    })(ICmauLossPayeeVs$PayeeType = losspayee.ICmauLossPayeeVs$PayeeType || (losspayee.ICmauLossPayeeVs$PayeeType = {}));
                                })(losspayee = car.losspayee || (car.losspayee = {}));
                            })(car = location.car || (location.car = {}));
                            var garage;
                            (function (garage) {
                                var Basis;
                                (function (Basis) {
                                    Basis["LegalLiability"] = "Legal Liability";
                                    Basis["DirectPrimary"] = "Direct Primary";
                                    Basis["DirectExcess"] = "Direct Excess";
                                })(Basis = garage.Basis || (garage.Basis = {}));
                                var CoverageType;
                                (function (CoverageType) {
                                    CoverageType["Comprehensive"] = "Comprehensive";
                                })(CoverageType = garage.CoverageType || (garage.CoverageType = {}));
                                var DeductibleType;
                                (function (DeductibleType) {
                                    DeductibleType["AllPerils"] = "All Perils";
                                })(DeductibleType = garage.DeductibleType || (garage.DeductibleType = {}));
                            })(garage = location.garage || (location.garage = {}));
                        })(location = cmau.location || (cmau.location = {}));
                        var common;
                        (function (common) {
                            var UMLiabilityType;
                            (function (UMLiabilityType) {
                                UMLiabilityType["CombinedSingleLimit"] = "Combined Single Limit";
                                UMLiabilityType["SplitLimit"] = "Split Limit";
                                UMLiabilityType["NoCoverage"] = "No Coverage";
                                UMLiabilityType["NULL"] = "";
                            })(UMLiabilityType = common.UMLiabilityType || (common.UMLiabilityType = {}));
                            var UMStacking;
                            (function (UMStacking) {
                                UMStacking["NULL"] = "";
                                UMStacking["NON_STACKED"] = "Non-Stacked";
                                UMStacking["STACKED"] = "Stacked";
                            })(UMStacking = common.UMStacking || (common.UMStacking = {}));
                        })(common = cmau.common || (cmau.common = {}));
                        var driver;
                        (function (driver) {
                            var RelationshipToInsured;
                            (function (RelationshipToInsured) {
                                RelationshipToInsured["Self"] = "Self";
                                RelationshipToInsured["Spouse"] = "Spouse";
                                RelationshipToInsured["Child"] = "Child";
                                RelationshipToInsured["Employee"] = "Employee";
                            })(RelationshipToInsured = driver.RelationshipToInsured || (driver.RelationshipToInsured = {}));
                        })(driver = cmau.driver || (cmau.driver = {}));
                        var coverages;
                        (function (coverages) {
                            var ICoreCommCmauCoveragesVs$SimpleCoverages;
                            (function (ICoreCommCmauCoveragesVs$SimpleCoverages) {
                                ICoreCommCmauCoveragesVs$SimpleCoverages["basketdedendo"] = "basketdedendo";
                                ICoreCommCmauCoveragesVs$SimpleCoverages["endoextension"] = "endoextension";
                                ICoreCommCmauCoveragesVs$SimpleCoverages["hospitalendoextension"] = "hospitalendoextension";
                                ICoreCommCmauCoveragesVs$SimpleCoverages["hvyendoextension"] = "hvyendoextension";
                                ICoreCommCmauCoveragesVs$SimpleCoverages["movingendoextension"] = "movingendoextension";
                                ICoreCommCmauCoveragesVs$SimpleCoverages["enhvyendoextension"] = "enhvyendoextension";
                            })(ICoreCommCmauCoveragesVs$SimpleCoverages = coverages.ICoreCommCmauCoveragesVs$SimpleCoverages || (coverages.ICoreCommCmauCoveragesVs$SimpleCoverages = {}));
                        })(coverages = cmau.coverages || (cmau.coverages = {}));
                    })(cmau = corecomm.cmau || (corecomm.cmau = {}));
                    var insured;
                    (function (insured) {
                        var InsuredType;
                        (function (InsuredType) {
                            InsuredType["Corporation"] = "Corporation";
                            InsuredType["Individual"] = "Individual";
                            InsuredType["Joint_Venture"] = "Joint Venture";
                            InsuredType["Partnership"] = "Partnership";
                            InsuredType["LLC"] = "Limited Liability Company";
                            InsuredType["Other"] = "Other";
                        })(InsuredType = insured.InsuredType || (insured.InsuredType = {}));
                    })(insured = corecomm.insured || (corecomm.insured = {}));
                    var ICoreCommVs$ProcessingStatus;
                    (function (ICoreCommVs$ProcessingStatus) {
                        ICoreCommVs$ProcessingStatus["processing"] = "processing";
                        ICoreCommVs$ProcessingStatus["completed"] = "completed";
                        ICoreCommVs$ProcessingStatus["failed"] = "failed";
                    })(ICoreCommVs$ProcessingStatus = corecomm.ICoreCommVs$ProcessingStatus || (corecomm.ICoreCommVs$ProcessingStatus = {}));
                    var ICoreCommAddressVs$ScrubberResult;
                    (function (ICoreCommAddressVs$ScrubberResult) {
                        ICoreCommAddressVs$ScrubberResult["Accepted"] = "Accepted";
                        ICoreCommAddressVs$ScrubberResult["Rejected"] = "Rejected";
                        ICoreCommAddressVs$ScrubberResult["Unverified"] = "Unverified";
                        ICoreCommAddressVs$ScrubberResult["NotCalled"] = "";
                        ICoreCommAddressVs$ScrubberResult["NULL"] = "NULL";
                    })(ICoreCommAddressVs$ScrubberResult = corecomm.ICoreCommAddressVs$ScrubberResult || (corecomm.ICoreCommAddressVs$ScrubberResult = {}));
                    var CoreCommLobs;
                    (function (CoreCommLobs) {
                        CoreCommLobs["bbop"] = "bbop";
                        CoreCommLobs["cmau"] = "cmau";
                        CoreCommLobs["umbr"] = "umbr";
                        CoreCommLobs["work"] = "work";
                    })(CoreCommLobs = corecomm.CoreCommLobs || (corecomm.CoreCommLobs = {}));
                })(corecomm = def.corecomm || (def.corecomm = {}));
                var workcomp;
                (function (workcomp) {
                    var policy;
                    (function (policy) {
                        var schedrating;
                        (function (schedrating) {
                            var SchedRatingType;
                            (function (SchedRatingType) {
                                SchedRatingType["PremisesWorkEnvironment"] = "Premises / Work Environment";
                                SchedRatingType["Premises"] = "Premises";
                                SchedRatingType["RiskCharacteristicsPremises"] = "Risk Characteristics Premises";
                                SchedRatingType["ClassificationPeculiarities"] = "Classification Peculiarities";
                                SchedRatingType["ClassificationPeculiarities2"] = "Class Peculiarities";
                                SchedRatingType["ClassificationPeculiarities3"] = "Classification";
                                SchedRatingType["MedicalFacilities"] = "Medical Facilities";
                                SchedRatingType["ReturnToWorkProgram"] = "Return to Work Program";
                                SchedRatingType["SafetyDevices"] = "Safety Devices";
                                SchedRatingType["SafetyDevicesEquipment"] = "Safety Devices and Equipment";
                                SchedRatingType["EmployeesSelectionTrainingSupervision"] = "Employees - Selection, Training, and Supervision";
                                SchedRatingType["EmployeesSelectionTrainingSupervision2"] = "Employees - Selection, Training, Supervision";
                                SchedRatingType["Employees"] = "Employees";
                                SchedRatingType["Management"] = "Management";
                                SchedRatingType["ManagementCooperationCarrier"] = "Management - Cooperation with Insurance Carrier";
                                SchedRatingType["ManagementCooperationCarrier2"] = "Management Capability / Cooperation";
                                SchedRatingType["SafetyOrganization"] = "Management - Safety Organization";
                                SchedRatingType["SafetyOrganization2"] = "Safety Organization";
                                SchedRatingType["SafetyOrganization3"] = "Safety Programs";
                                SchedRatingType["MedicalControls"] = "Medical Controls";
                                SchedRatingType["EmployeeSponsoredHealthPlan"] = "Employee Sponsored Health Plan";
                                SchedRatingType["RiskFinancialCondition"] = "Risk Financial Condition";
                                SchedRatingType["ExperienceModification"] = "Experience Modification";
                                SchedRatingType["ExpenseProvidingInsurance"] = "Expense of Providing Insurance / Services";
                                SchedRatingType["OtherFactors"] = "Other Factors";
                                SchedRatingType["OtherRiskCharacteristics"] = "Other Risk Characteristics";
                                SchedRatingType["Considerations"] = "Considerations";
                                SchedRatingType["LossTrends"] = "Loss Trends";
                                SchedRatingType["Characteristics"] = "Characteristics";
                                SchedRatingType["HealthAndMedical"] = "Health and Medical";
                                SchedRatingType["Miscellaneous"] = "Miscellaneous";
                                SchedRatingType["NULL"] = "";
                            })(SchedRatingType = schedrating.SchedRatingType || (schedrating.SchedRatingType = {}));
                        })(schedrating = policy.schedrating || (policy.schedrating = {}));
                        var PolicyStatus;
                        (function (PolicyStatus) {
                            PolicyStatus["New"] = "New";
                            PolicyStatus["NonRenewed"] = "Non-Renewed";
                            PolicyStatus["PendingNonRenewal"] = "Pending Non-Renewal";
                            PolicyStatus["Renewal"] = "Renewal";
                        })(PolicyStatus = policy.PolicyStatus || (policy.PolicyStatus = {}));
                        var bill;
                        (function (bill) {
                            var BillType;
                            (function (BillType) {
                                BillType["MonthlyReporting"] = "MONTHLY REPORTING";
                                BillType["MonthlyReportingADP"] = "MONTHLY REPORTING (ADP)";
                                BillType["MonthlyReportingDr"] = "MONTHLY REPORTING (DR)";
                                BillType["DbMonthly"] = "DB - MONTHLY";
                                BillType["DbBiMonthly"] = "DB - 2 MONTHLY";
                                BillType["DbBiMonthly2"] = "DB - BI-MONTHLY";
                                BillType["DbSemiAnnually"] = "DB - SEMI-ANNUALLY";
                                BillType["DbQuarterly"] = "DB - QUARTERLY";
                                BillType["DbBiAnnually"] = "DB - BI-ANNUALLY";
                                BillType["FullPay"] = "FULL PAY";
                                BillType["DbEqualInstallments"] = "DB - EQUAL INSTALLMENTS";
                                BillType["Undefined"] = "#N/A";
                                BillType["NULL"] = "";
                            })(BillType = bill.BillType || (bill.BillType = {}));
                        })(bill = policy.bill || (policy.bill = {}));
                        var ofac;
                        (function (ofac) {
                            var OfacResponse;
                            (function (OfacResponse) {
                                OfacResponse["Hit"] = "Hit";
                                OfacResponse["NotClear"] = "Not Clear";
                                OfacResponse["Clear"] = "Clear";
                                OfacResponse["NULL"] = "";
                            })(OfacResponse = ofac.OfacResponse || (ofac.OfacResponse = {}));
                        })(ofac = policy.ofac || (policy.ofac = {}));
                    })(policy = workcomp.policy || (workcomp.policy = {}));
                    var IWorkCompPolicyVs$RatingTableStatus;
                    (function (IWorkCompPolicyVs$RatingTableStatus) {
                        IWorkCompPolicyVs$RatingTableStatus["NULL"] = "";
                        IWorkCompPolicyVs$RatingTableStatus["pending"] = "pending";
                        IWorkCompPolicyVs$RatingTableStatus["active"] = "active";
                    })(IWorkCompPolicyVs$RatingTableStatus = workcomp.IWorkCompPolicyVs$RatingTableStatus || (workcomp.IWorkCompPolicyVs$RatingTableStatus = {}));
                    var IWorkCompPolicyVs$RatingType;
                    (function (IWorkCompPolicyVs$RatingType) {
                        IWorkCompPolicyVs$RatingType["NULL"] = "";
                        IWorkCompPolicyVs$RatingType["normal"] = "normal";
                        IWorkCompPolicyVs$RatingType["callable"] = "callable";
                        IWorkCompPolicyVs$RatingType["nonrated"] = "nonrated";
                        IWorkCompPolicyVs$RatingType["manual"] = "manual";
                    })(IWorkCompPolicyVs$RatingType = workcomp.IWorkCompPolicyVs$RatingType || (workcomp.IWorkCompPolicyVs$RatingType = {}));
                    var rating;
                    (function (rating) {
                        var Availability;
                        (function (Availability) {
                            Availability["NA"] = "0";
                            Availability["ToolsOnly"] = "1";
                            Availability["ToolsUWOverrider"] = "2";
                            Availability["All"] = "3";
                            Availability["Undefined"] = "#N/A";
                            Availability["NULL"] = "";
                        })(Availability = rating.Availability || (rating.Availability = {}));
                    })(rating = workcomp.rating || (workcomp.rating = {}));
                    var insured;
                    (function (insured) {
                        var EntityType;
                        (function (EntityType) {
                            EntityType["Corporation"] = "Corporation";
                            EntityType["SCorp"] = "S Corp";
                            EntityType["Partnership"] = "Partnership";
                            EntityType["CommonOwnership"] = "Common Ownership";
                            EntityType["Individual"] = "Individual";
                            EntityType["LLC"] = "Limited Liability Company";
                            EntityType["Corporate"] = "Corporate";
                            EntityType["LimitedPartnership"] = "Limited Partnership";
                            EntityType["JointVenture"] = "Joint Venture";
                            EntityType["NULL"] = "";
                        })(EntityType = insured.EntityType || (insured.EntityType = {}));
                    })(insured = workcomp.insured || (workcomp.insured = {}));
                    var TransactionTypes;
                    (function (TransactionTypes) {
                        TransactionTypes["NULL"] = "";
                        TransactionTypes["AEXAcord130"] = "AEX Acord 130";
                        TransactionTypes["AdditionalInformation"] = "Additional Information";
                        TransactionTypes["AdditionalInformationSubmittedbyProducer"] = "Additional Information Submitted by Producer";
                        TransactionTypes["ApplicationChangedtoQuoteRequest"] = "Application Changed to Quote Request";
                        TransactionTypes["ApplicationDenied"] = "Application Denied";
                        TransactionTypes["ApprovedQuickQuote"] = "Approved Quick Quote";
                        TransactionTypes["BindRequestAdditionalInformationReceived"] = "Bind Request - Additional Information Received";
                        TransactionTypes["BindRequestAdditionalInformationRequested"] = "Bind Request - Additional Information Requested";
                        TransactionTypes["BindRequestNotefromProducer"] = "Bind Request - Note from Producer";
                        TransactionTypes["CarrierTransfer"] = "Carrier Transfer";
                        TransactionTypes["ChangedPolicyStatus"] = "Changed Policy Status";
                        TransactionTypes["Closedapplication"] = "Closed application";
                        TransactionTypes["DatabaseUpdated"] = "Database Updated";
                        TransactionTypes["Declinedapplication"] = "Declined application";
                        TransactionTypes["DiaryCreated"] = "Diary Created";
                        TransactionTypes["DiaryMarkedComplete"] = "Diary Marked Complete";
                        TransactionTypes["DiaryMarkedIncomplete"] = "Diary Marked Incomplete";
                        TransactionTypes["DiaryUpdated"] = "Diary Updated";
                        TransactionTypes["EarlyReviewRequested"] = "Early Review Requested";
                        TransactionTypes["EmailSenttoProducer"] = "Email Sent to Producer";
                        TransactionTypes["EverestBridge"] = "Everest Bridge";
                        TransactionTypes["EverestClearance"] = "Everest Clearance";
                        TransactionTypes["ExtendedBinder"] = "Extended Binder";
                        TransactionTypes["ExtendedQuickQuoteOffer"] = "Extended Quick Quote Offer";
                        TransactionTypes["ExtendedQuoteOffer"] = "Extended Quote Offer";
                        TransactionTypes["LoggedasCompleteSubmission"] = "Logged as Complete Submission";
                        TransactionTypes["LoggedasDuplicateSubmission"] = "Logged as Duplicate Submission";
                        TransactionTypes["LoggedasIncompleteSubmission"] = "Logged as Incomplete Submission";
                        TransactionTypes["LoggedasNewSubmission"] = "Logged as New Submission";
                        TransactionTypes["LoggedasRenewalSubmission"] = "Logged as Renewal Submission";
                        TransactionTypes["ManagerDiaryFollowUpPastDueEmail"] = "Manager Diary Follow-Up Past Due Email";
                        TransactionTypes["MassRolloverToolUpdate"] = "Mass Rollover Tool Update";
                        TransactionTypes["MunichBridge"] = "Munich Bridge";
                        TransactionTypes["MunichClearance"] = "Munich Clearance";
                        TransactionTypes["NonRenewRequested"] = "Non Renew Requested";
                        TransactionTypes["NonrenewalNoticeSent"] = "Non renewal notice sent";
                        TransactionTypes["NonRenewalOfferMade"] = "Non-Renewal Offer Made";
                        TransactionTypes["OpenedDuplicateSubmission"] = "Opened Duplicate Submission";
                        TransactionTypes["PendingUWReviewAdditionalInformationReceived"] = "Pending UW Review - Additional Information Received";
                        TransactionTypes["PendingUWReviewAdditionalInformationRequested"] = "Pending UW Review - Additional Information Requested";
                        TransactionTypes["ProducerSubmitforApproval"] = "Producer Submit for Approval";
                        TransactionTypes["ProducerUpdatedInformationonArrowheadExchange"] = "Producer Updated Information on Arrowhead Exchange";
                        TransactionTypes["QQGeneralUWQuestions"] = "QQ General UW Questions";
                        TransactionTypes["QQRenewalAppRequested"] = "QQ Renewal App Requested";
                        TransactionTypes["QuickQuotePending"] = "Quick Quote Pending";
                        TransactionTypes["QuoteRequestAdditionalInformationReceived"] = "Quote Request - Additional Information Received";
                        TransactionTypes["QuoteRequestAdditionalInformationRequested"] = "Quote Request - Additional Information Requested";
                        TransactionTypes["RWLQuickQuoteSubmitforApproval"] = "RWL Quick Quote Submit for Approval";
                        TransactionTypes["RWLQuoteRequestAdditionalInformationReceived"] = "RWL Quote Request - Additional Information Received";
                        TransactionTypes["RWLQuoteRequestAdditionalInformationRequested"] = "RWL Quote Request - Additional Information Requested";
                        TransactionTypes["RenewalAppRequested"] = "Renewal App Requested";
                        TransactionTypes["ReopenedApplication"] = "Reopened Application";
                        TransactionTypes["ReopenedIncompleteApplication"] = "Reopened Incomplete Application";
                        TransactionTypes["RequoteApplication"] = "Requote Application";
                        TransactionTypes["SavedAccountHistoryandLossRatingChanges"] = "Saved Account History and Loss Rating Changes";
                        TransactionTypes["SavedAssignedUnderwriterChanges"] = "Saved Assigned Underwriter Changes";
                        TransactionTypes["SavedCarrierSelection"] = "Saved Carrier Selection";
                        TransactionTypes["SavedClaimsDetailChanges"] = "Saved Claims Detail Changes";
                        TransactionTypes["SavedClassInfoChanges"] = "Saved Class Info Changes";
                        TransactionTypes["SavedExmodHistoryChanges"] = "Saved Exmod History Changes";
                        TransactionTypes["SavedGeneralApplicationInformationChanges"] = "Saved General Application Information Changes";
                        TransactionTypes["SavedIndividualInformationChanges"] = "Saved Individual Information Changes";
                        TransactionTypes["SavedLocationInformationChanges"] = "Saved Location Information Changes";
                        TransactionTypes["SavedQuoteWorksheetChanges"] = "Saved Quote Worksheet Changes";
                        TransactionTypes["SavedRiskEvalInformationChanges"] = "Saved Risk Eval Information Changes";
                        TransactionTypes["SavedScheduleRatingInformationChanges"] = "Saved Schedule Rating Information Changes";
                        TransactionTypes["SavedTargetNetRateInfoChanges"] = "Saved Target Net Rate Info Changes";
                        TransactionTypes["SpecialCommissionsEmailNotification"] = "Special Commissions Email Notification";
                        TransactionTypes["SubmittedBindRequest"] = "Submitted Bind Request";
                        TransactionTypes["SubmittedQuoteRequest"] = "Submitted Quote Request";
                        TransactionTypes["SubmittedQuoteRequestMissingInformationRequested"] = "Submitted Quote Request - Missing Information Requested";
                        TransactionTypes["UnderwriterDiaryFollowUpPastDueEmail"] = "Underwriter Diary Follow-Up Past Due Email";
                        TransactionTypes["UnderwritingNoteAdded"] = "Underwriting Note Added";
                        TransactionTypes["UpdateSubmissiontoPending"] = "Update Submission to Pending";
                        TransactionTypes["UpdatedProducerContact"] = "Updated Producer Contact";
                        TransactionTypes["WholesalerSubmissionRulesFailure"] = "Wholesaler Submission- Rules Failure";
                        TransactionTypes["WholesalerSubmissionSubmitFailure"] = "Wholesaler Submission- Submit Failure";
                        TransactionTypes["WholesalerSubmissionSuccess"] = "Wholesaler Submission- Success";
                        TransactionTypes["ZurichClearance"] = "Zurich Clearance";
                    })(TransactionTypes = workcomp.TransactionTypes || (workcomp.TransactionTypes = {}));
                })(workcomp = def.workcomp || (def.workcomp = {}));
                var property;
                (function (property) {
                    var maprisk;
                    (function (maprisk) {
                        var MapriskDistanceToCoast$ResultMessage;
                        (function (MapriskDistanceToCoast$ResultMessage) {
                            MapriskDistanceToCoast$ResultMessage["ACCEPTABLE"] = "Acceptable";
                            MapriskDistanceToCoast$ResultMessage["UNACCEPTABLE"] = "Unacceptable due to risk location";
                            MapriskDistanceToCoast$ResultMessage["UNACCEPTABLE_ISLAND"] = "Unacceptable due to dwelling being located on an island";
                            MapriskDistanceToCoast$ResultMessage["MAXRATE"] = "MaxRate";
                        })(MapriskDistanceToCoast$ResultMessage = maprisk.MapriskDistanceToCoast$ResultMessage || (maprisk.MapriskDistanceToCoast$ResultMessage = {}));
                        var MapriskGeocode$AccuracyLevel;
                        (function (MapriskGeocode$AccuracyLevel) {
                            MapriskGeocode$AccuracyLevel["UserSupplied"] = "UserSupplied";
                            MapriskGeocode$AccuracyLevel["Unacceptable"] = "Unacceptable";
                            MapriskGeocode$AccuracyLevel["ZipCode"] = "ZipCode";
                            MapriskGeocode$AccuracyLevel["ZipCodePlus4"] = "ZipCodePlus4";
                            MapriskGeocode$AccuracyLevel["Street"] = "Street";
                            MapriskGeocode$AccuracyLevel["Interpolation"] = "Interpolation";
                            MapriskGeocode$AccuracyLevel["InterpolationOffset"] = "InterpolationOffset";
                            MapriskGeocode$AccuracyLevel["Parcel"] = "Parcel";
                            MapriskGeocode$AccuracyLevel["RoofTop"] = "RoofTop";
                        })(MapriskGeocode$AccuracyLevel = maprisk.MapriskGeocode$AccuracyLevel || (maprisk.MapriskGeocode$AccuracyLevel = {}));
                    })(maprisk = property.maprisk || (property.maprisk = {}));
                    var IPropertyGeocodeVs$AcceptabilityMessage;
                    (function (IPropertyGeocodeVs$AcceptabilityMessage) {
                        IPropertyGeocodeVs$AcceptabilityMessage["ACCEPTABLE"] = "Acceptable";
                        IPropertyGeocodeVs$AcceptabilityMessage["SFA"] = "Submit for Approval";
                    })(IPropertyGeocodeVs$AcceptabilityMessage = property.IPropertyGeocodeVs$AcceptabilityMessage || (property.IPropertyGeocodeVs$AcceptabilityMessage = {}));
                })(property = def.property || (def.property = {}));
                var misc;
                (function (misc) {
                    var dashboard;
                    (function (dashboard) {
                        var IQuoteRow$NewRenewal;
                        (function (IQuoteRow$NewRenewal) {
                            IQuoteRow$NewRenewal["TypeNew"] = "New";
                            IQuoteRow$NewRenewal["TypeRenewal"] = "Renewal";
                        })(IQuoteRow$NewRenewal = dashboard.IQuoteRow$NewRenewal || (dashboard.IQuoteRow$NewRenewal = {}));
                        var IDashboardCriteria$OptionType;
                        (function (IDashboardCriteria$OptionType) {
                            IDashboardCriteria$OptionType["None"] = "";
                            IDashboardCriteria$OptionType["AccountName"] = "Account Name";
                            IDashboardCriteria$OptionType["Application"] = "Application #";
                            IDashboardCriteria$OptionType["FEIN"] = "FEIN #";
                            IDashboardCriteria$OptionType["Policy"] = "Policy #";
                            IDashboardCriteria$OptionType["ProducerCode"] = "Producer Code";
                        })(IDashboardCriteria$OptionType = dashboard.IDashboardCriteria$OptionType || (dashboard.IDashboardCriteria$OptionType = {}));
                    })(dashboard = misc.dashboard || (misc.dashboard = {}));
                })(misc = def.misc || (def.misc = {}));
                var Bindable;
                (function (Bindable) {
                    Bindable["Empty"] = "";
                    Bindable["Zero"] = "0";
                    Bindable["One"] = "1";
                    Bindable["Two"] = "2";
                    Bindable["Three"] = "3";
                })(Bindable = def.Bindable || (def.Bindable = {}));
            })(def = model.def || (model.def = {}));
            var common;
            (function (common) {
                var driver;
                (function (driver) {
                    var mvr;
                    (function (mvr) {
                        var MvrViolationType;
                        (function (MvrViolationType) {
                            MvrViolationType["ACTION"] = "ACTION";
                            MvrViolationType["ACCIDENT"] = "ACCIDENT";
                            MvrViolationType["ACCIDENTOUTOFSTATE"] = "ACCIDENTOUTOFSTATE";
                            MvrViolationType["CANCELLATION"] = "CANCELLATION";
                            MvrViolationType["DISQUALIFICATION"] = "DISQUALIFICATION";
                            MvrViolationType["FAILTOAPPEAR"] = "FAILTOAPPEAR";
                            MvrViolationType["PROBATION"] = "PROBATION";
                            MvrViolationType["PROOFREQUIRED"] = "PROOFREQUIRED";
                            MvrViolationType["REINSTATE"] = "REINSTATE";
                            MvrViolationType["REVOCATION"] = "REVOCATION";
                            MvrViolationType["SUSPENSION"] = "SUSPENSION";
                            MvrViolationType["VIOLATION"] = "VIOLATION";
                            MvrViolationType["VIOLATIONOUTOFSTATE"] = "VIOLATIONOUTOFSTATE";
                            MvrViolationType["WITHDRAWAL"] = "WITHDRAWAL";
                        })(MvrViolationType = mvr.MvrViolationType || (mvr.MvrViolationType = {}));
                    })(mvr = driver.mvr || (driver.mvr = {}));
                })(driver = common.driver || (common.driver = {}));
                var States;
                (function (States) {
                    States["al"] = "al";
                    States["ak"] = "ak";
                    States["az"] = "az";
                    States["ar"] = "ar";
                    States["ca"] = "ca";
                    States["co"] = "co";
                    States["ct"] = "ct";
                    States["de"] = "de";
                    States["dc"] = "dc";
                    States["fl"] = "fl";
                    States["ga"] = "ga";
                    States["hi"] = "hi";
                    States["id"] = "id";
                    States["il"] = "il";
                    States["in"] = "in";
                    States["ia"] = "ia";
                    States["ks"] = "ks";
                    States["ky"] = "ky";
                    States["la"] = "la";
                    States["ma"] = "ma";
                    States["me"] = "me";
                    States["md"] = "md";
                    States["mi"] = "mi";
                    States["mn"] = "mn";
                    States["mo"] = "mo";
                    States["ms"] = "ms";
                    States["mt"] = "mt";
                    States["ne"] = "ne";
                    States["nv"] = "nv";
                    States["nh"] = "nh";
                    States["nj"] = "nj";
                    States["nm"] = "nm";
                    States["ny"] = "ny";
                    States["nc"] = "nc";
                    States["nd"] = "nd";
                    States["oh"] = "oh";
                    States["ok"] = "ok";
                    States["or"] = "or";
                    States["pa"] = "pa";
                    States["ri"] = "ri";
                    States["sc"] = "sc";
                    States["sd"] = "sd";
                    States["tn"] = "tn";
                    States["tx"] = "tx";
                    States["ut"] = "ut";
                    States["vt"] = "vt";
                    States["va"] = "va";
                    States["wa"] = "wa";
                    States["wv"] = "wv";
                    States["wi"] = "wi";
                    States["wy"] = "wy";
                })(States = common.States || (common.States = {}));
            })(common = model.common || (model.common = {}));
        })(model = arrow.model || (arrow.model = {}));
        var arrownet;
        (function (arrownet) {
            var commercial;
            (function (commercial) {
                var corecomm;
                (function (corecomm) {
                    var verisk;
                    (function (verisk) {
                        var VeriskCallResult;
                        (function (VeriskCallResult) {
                            VeriskCallResult["SUCCESSFUL"] = "SUCCESSFUL";
                            VeriskCallResult["FAILED"] = "FAILED";
                            VeriskCallResult["EMPTY_RESPONSE"] = "EMPTY_RESPONSE";
                            VeriskCallResult["NULL"] = "NULL";
                        })(VeriskCallResult = verisk.VeriskCallResult || (verisk.VeriskCallResult = {}));
                        var DistanceToWater;
                        (function (DistanceToWater) {
                            DistanceToWater["R01"] = "0 to 500 feet";
                            DistanceToWater["R02"] = "501 to 1000 feet";
                            DistanceToWater["R03"] = "1001 to 1500 feet";
                            DistanceToWater["R04"] = "1501 to 2000 feet";
                            DistanceToWater["R05"] = "2001 to 2500 feet";
                            DistanceToWater["R06"] = "2501 feet to less than 1 mile";
                            DistanceToWater["R07"] = "1 mile to less than 2 miles";
                            DistanceToWater["R08"] = "2 miles to less than 3 miles";
                            DistanceToWater["R09"] = "3 miles to less than 4 miles";
                            DistanceToWater["R10"] = "4 miles to less than 5 miles";
                            DistanceToWater["R11"] = "5 miles to less than 10 miles";
                            DistanceToWater["R12"] = "10 miles to less than 15 miles";
                            DistanceToWater["R13"] = "15 miles to less than 20 miles";
                            DistanceToWater["R14"] = "20 miles to less than 25 miles";
                            DistanceToWater["R15"] = "25 miles to less than 30 miles";
                            DistanceToWater["R16"] = "30 miles and greater";
                            DistanceToWater["NULL"] = "";
                        })(DistanceToWater = verisk.DistanceToWater || (verisk.DistanceToWater = {}));
                    })(verisk = corecomm.verisk || (corecomm.verisk = {}));
                })(corecomm = commercial.corecomm || (commercial.corecomm = {}));
            })(commercial = arrownet.commercial || (arrownet.commercial = {}));
        })(arrownet = arrow.arrownet || (arrow.arrownet = {}));
        var common;
        (function (common) {
            var lob;
            (function (lob) {
                var LineOfBusiness;
                (function (LineOfBusiness) {
                    LineOfBusiness["NULL"] = "";
                    LineOfBusiness["ALL"] = "ALL";
                    LineOfBusiness["ADAD"] = "ADAD";
                    LineOfBusiness["ADID"] = "ADID";
                    LineOfBusiness["AUTO"] = "AUTO";
                    LineOfBusiness["BOAT"] = "BOAT";
                    LineOfBusiness["BBOP"] = "BBOP";
                    LineOfBusiness["BRNT"] = "BRNT";
                    LineOfBusiness["CDIC"] = "CDIC";
                    LineOfBusiness["CMAU"] = "CMAU";
                    LineOfBusiness["CMEQ"] = "CMEQ";
                    LineOfBusiness["CMGL"] = "CMGL";
                    LineOfBusiness["CMPK"] = "CMPK";
                    LineOfBusiness["CMWH"] = "CMWH";
                    LineOfBusiness["COND"] = "COND";
                    LineOfBusiness["CORECOMM"] = "CORECOMM";
                    LineOfBusiness["DOCA"] = "DOCA";
                    LineOfBusiness["DOPV"] = "DOPV";
                    LineOfBusiness["EOAP"] = "EOAP";
                    LineOfBusiness["EPLI"] = "EPLI";
                    LineOfBusiness["EQSM"] = "EQSM";
                    LineOfBusiness["ERQK"] = "ERQK";
                    LineOfBusiness["FIRE"] = "FIRE";
                    LineOfBusiness["FLEX"] = "FLEX";
                    LineOfBusiness["HOME"] = "HOME";
                    LineOfBusiness["HVHO"] = "HVHO";
                    LineOfBusiness["LVRY"] = "LVRY";
                    LineOfBusiness["MOTO"] = "MOTO";
                    LineOfBusiness["PENT"] = "PENT";
                    LineOfBusiness["PRPROP"] = "PRPROP";
                    LineOfBusiness["PROP"] = "PROP";
                    LineOfBusiness["REEO"] = "REEO";
                    LineOfBusiness["RENT"] = "RENT";
                    LineOfBusiness["UMBP"] = "UMBP";
                    LineOfBusiness["UMBR"] = "UMBR";
                    LineOfBusiness["WORK"] = "WORK";
                })(LineOfBusiness = lob.LineOfBusiness || (lob.LineOfBusiness = {}));
            })(lob = common.lob || (common.lob = {}));
            var state;
            (function (state) {
                var StateInfo;
                (function (StateInfo) {
                    StateInfo["NULL"] = "NULL";
                    StateInfo["AK"] = "AK";
                    StateInfo["AL"] = "AL";
                    StateInfo["AR"] = "AR";
                    StateInfo["AZ"] = "AZ";
                    StateInfo["CA"] = "CA";
                    StateInfo["CO"] = "CO";
                    StateInfo["CT"] = "CT";
                    StateInfo["DC"] = "DC";
                    StateInfo["DE"] = "DE";
                    StateInfo["FL"] = "FL";
                    StateInfo["GA"] = "GA";
                    StateInfo["HI"] = "HI";
                    StateInfo["IA"] = "IA";
                    StateInfo["ID"] = "ID";
                    StateInfo["IL"] = "IL";
                    StateInfo["IN"] = "IN";
                    StateInfo["KS"] = "KS";
                    StateInfo["KY"] = "KY";
                    StateInfo["LA"] = "LA";
                    StateInfo["MA"] = "MA";
                    StateInfo["MD"] = "MD";
                    StateInfo["ME"] = "ME";
                    StateInfo["MI"] = "MI";
                    StateInfo["MN"] = "MN";
                    StateInfo["MO"] = "MO";
                    StateInfo["MS"] = "MS";
                    StateInfo["MT"] = "MT";
                    StateInfo["NC"] = "NC";
                    StateInfo["ND"] = "ND";
                    StateInfo["NE"] = "NE";
                    StateInfo["NH"] = "NH";
                    StateInfo["NJ"] = "NJ";
                    StateInfo["NM"] = "NM";
                    StateInfo["NV"] = "NV";
                    StateInfo["NY"] = "NY";
                    StateInfo["OH"] = "OH";
                    StateInfo["OK"] = "OK";
                    StateInfo["OR"] = "OR";
                    StateInfo["PA"] = "PA";
                    StateInfo["RI"] = "RI";
                    StateInfo["SC"] = "SC";
                    StateInfo["SD"] = "SD";
                    StateInfo["TN"] = "TN";
                    StateInfo["TX"] = "TX";
                    StateInfo["UT"] = "UT";
                    StateInfo["VA"] = "VA";
                    StateInfo["VT"] = "VT";
                    StateInfo["WA"] = "WA";
                    StateInfo["WI"] = "WI";
                    StateInfo["WV"] = "WV";
                    StateInfo["WY"] = "WY";
                })(StateInfo = state.StateInfo || (state.StateInfo = {}));
            })(state = common.state || (common.state = {}));
        })(common = arrow.common || (arrow.common = {}));
        var instec;
        (function (instec) {
            var InstecRateCallType;
            (function (InstecRateCallType) {
                InstecRateCallType["PRICING_TOOLS_ONLY"] = "PRICING_TOOLS_ONLY";
                InstecRateCallType["FULL"] = "FULL";
                InstecRateCallType["NULL"] = "NULL";
            })(InstecRateCallType = instec.InstecRateCallType || (instec.InstecRateCallType = {}));
        })(instec = arrow.instec || (arrow.instec = {}));
    })(arrow = com.arrow || (com.arrow = {}));
    var arrowhead;
    (function (arrowhead) {
        var irserviceclient;
        (function (irserviceclient) {
            var facade;
            (function (facade) {
                var DocumentType;
                (function (DocumentType) {
                    DocumentType["CANCELLATION"] = "CANCELLATION";
                    DocumentType["CLAIM_KITS"] = "CLAIM_KITS";
                    DocumentType["ENDORSEMENT_DEC"] = "ENDORSEMENT_DEC";
                    DocumentType["MVR"] = "MVR";
                    DocumentType["NEW_BUSINESS_POLICY"] = "NEW_BUSINESS_POLICY";
                    DocumentType["RENEWAL_POLICY"] = "RENEWAL_POLICY";
                    DocumentType["REINSTATEMENT"] = "REINSTATEMENT";
                    DocumentType["ID_CARD"] = "ID_CARD";
                    DocumentType["REWRITE_DEC_PAGE"] = "REWRITE_DEC_PAGE";
                    DocumentType["PREMIUM_AUDIT_DOC"] = "PREMIUM_AUDIT_DOC";
                    DocumentType["ACORD_APPLICATON"] = "ACORD_APPLICATON";
                    DocumentType["NB_AGENT_UPLOAD"] = "NB_AGENT_UPLOAD";
                    DocumentType["RN_AGENT_UPLOAD"] = "RN_AGENT_UPLOAD";
                    DocumentType["BIND_REQUEST"] = "BIND_REQUEST";
                    DocumentType["NB_BINDER_CONFIRMATION"] = "NB_BINDER_CONFIRMATION";
                    DocumentType["RN_BINDER_CONFIRMATION"] = "RN_BINDER_CONFIRMATION";
                    DocumentType["CARRIER_REFERRAL"] = "CARRIER_REFERRAL";
                    DocumentType["NB_CORRESPONDENCE"] = "NB_CORRESPONDENCE";
                    DocumentType["RN_CORRESPONDENCE"] = "RN_CORRESPONDENCE";
                    DocumentType["NB_DECLINATION"] = "NB_DECLINATION";
                    DocumentType["RN_DECLINATION"] = "RN_DECLINATION";
                    DocumentType["EXPERIENCE_MOD_WORKSHEET"] = "EXPERIENCE_MOD_WORKSHEET";
                    DocumentType["INSPECTIONS"] = "INSPECTIONS";
                    DocumentType["LOSS_RUNS"] = "LOSS_RUNS";
                    DocumentType["NEW_BUSINESS_UNDERWRITING"] = "NEW_BUSINESS_UNDERWRITING";
                    DocumentType["OSHA"] = "OSHA";
                    DocumentType["NB_PRICING_TOOL_WORKSHEET_AUTO"] = "NB_PRICING_TOOL_WORKSHEET_AUTO";
                    DocumentType["RN_PRICING_TOOL_WORKSHEET_AUTO"] = "RN_PRICING_TOOL_WORKSHEET_AUTO";
                    DocumentType["NB_PRICING_TOOL_WORKSHEET_BOP"] = "NB_PRICING_TOOL_WORKSHEET_BOP";
                    DocumentType["RN_PRICING_TOOL_WORKSHEET_BOP"] = "RN_PRICING_TOOL_WORKSHEET_BOP";
                    DocumentType["NB_PRICING_TOOL_WORKSHEET_WC"] = "NB_PRICING_TOOL_WORKSHEET_WC";
                    DocumentType["RN_PRICING_TOOL_WORKSHEET_WC"] = "RN_PRICING_TOOL_WORKSHEET_WC";
                    DocumentType["NB_QUOTE"] = "NB_QUOTE";
                    DocumentType["RN_QUOTE"] = "RN_QUOTE";
                    DocumentType["RATING_WORKSHEET"] = "RATING_WORKSHEET";
                    DocumentType["RENEWAL_UNDERWRITING"] = "RENEWAL_UNDERWRITING";
                    DocumentType["NB_RISK_ANALYSIS_DOCUMENT"] = "NB_RISK_ANALYSIS_DOCUMENT";
                    DocumentType["RN_RISK_ANALYSIS_DOCUMENT"] = "RN_RISK_ANALYSIS_DOCUMENT";
                    DocumentType["SUPPLEMENTAL_APPLICATION"] = "SUPPLEMENTAL_APPLICATION";
                    DocumentType["NB_SYSTEM_REFERRAL"] = "NB_SYSTEM_REFERRAL";
                    DocumentType["RN_SYSTEM_REFERRAL"] = "RN_SYSTEM_REFERRAL";
                    DocumentType["NB_REPORT_ORDERED"] = "NB_REPORT_ORDERED";
                    DocumentType["RN_REPORT_ORDERED"] = "RN_REPORT_ORDERED";
                    DocumentType["NB_UNDERWRITING_DOCUMENT"] = "NB_UNDERWRITING_DOCUMENT";
                    DocumentType["RN_UNDERWRITING_DOCUMENT"] = "RN_UNDERWRITING_DOCUMENT";
                    DocumentType["NB_OFAC"] = "NB_OFAC";
                    DocumentType["RN_OFAC"] = "RN_OFAC";
                    DocumentType["NB_DNBI"] = "NB_DNBI";
                    DocumentType["RN_DNBI"] = "RN_DNBI";
                    DocumentType["COLLECTION_LETTER"] = "COLLECTION_LETTER";
                    DocumentType["NOTICE_OF_CANCELLATION"] = "NOTICE_OF_CANCELLATION";
                    DocumentType["RESCISSION_NOTICE"] = "RESCISSION_NOTICE";
                    DocumentType["CONFIRMATION_OF_CANCELLATION"] = "CONFIRMATION_OF_CANCELLATION";
                    DocumentType["REINSTATEMENT_NOTICE"] = "REINSTATEMENT_NOTICE";
                    DocumentType["STATEMENT_INVOICE"] = "STATEMENT_INVOICE";
                    DocumentType["NSF_LETTER"] = "NSF_LETTER";
                    DocumentType["CONDITIONAL_RENEWAL_NOTICE"] = "CONDITIONAL_RENEWAL_NOTICE";
                    DocumentType["RESCISSION_OF_COVERAGE"] = "RESCISSION_OF_COVERAGE";
                    DocumentType["NON_RENEWAL_NOTICE"] = "NON_RENEWAL_NOTICE";
                    DocumentType["MISC_ACCOUNTING_LETTERS"] = "MISC_ACCOUNTING_LETTERS";
                    DocumentType["CHECKS"] = "CHECKS";
                    DocumentType["REFUND_CHECKS"] = "REFUND_CHECKS";
                })(DocumentType = facade.DocumentType || (facade.DocumentType = {}));
            })(facade = irserviceclient.facade || (irserviceclient.facade = {}));
        })(irserviceclient = arrowhead.irserviceclient || (arrowhead.irserviceclient = {}));
    })(arrowhead = com.arrowhead || (com.arrowhead = {}));
})(com || (com = {}));


/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.common.driver.mvr.ts":
/*!**************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.common.driver.mvr.ts ***!
  \**************************************************************/
/*! exports provided: MvrCalloutProxy, MvrViolationInfoProxy, MvrLookupInfoProxy, MvrResponseProxy, MvrRequestProxy, MvrVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MvrCalloutProxy", function() { return MvrCalloutProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MvrViolationInfoProxy", function() { return MvrViolationInfoProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MvrLookupInfoProxy", function() { return MvrLookupInfoProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MvrResponseProxy", function() { return MvrResponseProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MvrRequestProxy", function() { return MvrRequestProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MvrVsProxy", function() { return MvrVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
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

var MvrCalloutProxy = /** @class */ (function (_super) {
    __extends(MvrCalloutProxy, _super);
    function MvrCalloutProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrCalloutProxy.prototype, "error", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrCalloutProxy.prototype, "success", void 0);
    return MvrCalloutProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var MvrViolationInfoProxy = /** @class */ (function (_super) {
    __extends(MvrViolationInfoProxy, _super);
    function MvrViolationInfoProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrViolationInfoProxy.prototype, "acd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrViolationInfoProxy.prototype, "cdate", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrViolationInfoProxy.prototype, "description", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrViolationInfoProxy.prototype, "eventtype", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrViolationInfoProxy.prototype, "eventtypeaex", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrViolationInfoProxy.prototype, "odate", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrViolationInfoProxy.prototype, "points", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrViolationInfoProxy.prototype, "source", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrViolationInfoProxy.prototype, "statecode", void 0);
    return MvrViolationInfoProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var MvrLookupInfoProxy = /** @class */ (function (_super) {
    __extends(MvrLookupInfoProxy, _super);
    function MvrLookupInfoProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrLookupInfoProxy.prototype, "dob", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrLookupInfoProxy.prototype, "fname", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrLookupInfoProxy.prototype, "licnum", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrLookupInfoProxy.prototype, "licstate", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrLookupInfoProxy.prototype, "lname", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrLookupInfoProxy.prototype, "sex", void 0);
    return MvrLookupInfoProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var MvrResponseProxy = /** @class */ (function (_super) {
    __extends(MvrResponseProxy, _super);
    function MvrResponseProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrResponseProxy.prototype, "account", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrResponseProxy.prototype, "sex", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrResponseProxy.prototype, "errorcode", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrResponseProxy.prototype, "errordesc", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrResponseProxy.prototype, "licclass", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrResponseProxy.prototype, "licstatus", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrResponseProxy.prototype, "licstatuscategory", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrResponseProxy.prototype, "lictype", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrResponseProxy.prototype, "mvrcallstatus", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrResponseProxy.prototype, "mvrid", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrResponseProxy.prototype, "mvrreportstatus", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrResponseProxy.prototype, "alias", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrResponseProxy.prototype, "reportlink", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrResponseProxy.prototype, "requestdate", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([MvrViolationInfoProxy])
    ], MvrResponseProxy.prototype, "violations", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrResponseProxy.prototype, "violqty", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrResponseProxy.prototype, "dob", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrResponseProxy.prototype, "fname", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrResponseProxy.prototype, "licnum", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrResponseProxy.prototype, "licstate", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrResponseProxy.prototype, "lname", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrResponseProxy.prototype, "mvrscore", void 0);
    return MvrResponseProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var MvrRequestProxy = /** @class */ (function (_super) {
    __extends(MvrRequestProxy, _super);
    function MvrRequestProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrRequestProxy.prototype, "dob", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrRequestProxy.prototype, "fname", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrRequestProxy.prototype, "licnum", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrRequestProxy.prototype, "licstate", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrRequestProxy.prototype, "lname", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MvrRequestProxy.prototype, "sex", void 0);
    return MvrRequestProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var MvrVsProxy = /** @class */ (function (_super) {
    __extends(MvrVsProxy, _super);
    function MvrVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(MvrCalloutProxy)
    ], MvrVsProxy.prototype, "callout", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(MvrRequestProxy)
    ], MvrVsProxy.prototype, "request", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(MvrResponseProxy)
    ], MvrVsProxy.prototype, "response", void 0);
    return MvrVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.ai.ts":
/*!*****************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.ai.ts ***!
  \*****************************************************************/
/*! exports provided: AIIndividualVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AIIndividualVsProxy", function() { return AIIndividualVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
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

var AIIndividualVsProxy = /** @class */ (function (_super) {
    __extends(AIIndividualVsProxy, _super);
    function AIIndividualVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AIIndividualVsProxy.prototype, "applicableClause", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AIIndividualVsProxy.prototype, "zip", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AIIndividualVsProxy.prototype, "jobSiteAddress", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AIIndividualVsProxy.prototype, "licensePermitNumber", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AIIndividualVsProxy.prototype, "products", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AIIndividualVsProxy.prototype, "propertyDescription", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AIIndividualVsProxy.prototype, "equipDescription", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AIIndividualVsProxy.prototype, "address", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AIIndividualVsProxy.prototype, "addressLine2", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AIIndividualVsProxy.prototype, "city", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AIIndividualVsProxy.prototype, "state", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AIIndividualVsProxy.prototype, "name", void 0);
    return AIIndividualVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.coverages.equip.ts":
/*!******************************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.coverages.equip.ts ***!
  \******************************************************************************/
/*! exports provided: EquipmentDetailsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentDetailsProxy", function() { return EquipmentDetailsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
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

var EquipmentDetailsProxy = /** @class */ (function (_super) {
    __extends(EquipmentDetailsProxy, _super);
    function EquipmentDetailsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], EquipmentDetailsProxy.prototype, "desc", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], EquipmentDetailsProxy.prototype, "val", void 0);
    return EquipmentDetailsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.coverages.ts":
/*!************************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.coverages.ts ***!
  \************************************************************************/
/*! exports provided: BbopStopGapCoverageVsProxy, EltmedCoverageVsProxy, CoverageWithEquipmentDetailsProxy, IacontractorboardCoverageVsProxy, ConaddCoverageVsProxy, FellowCoverageVsProxy, CyberCoverageVsProxy, EmpbenCoverageVsProxy, DatcomCoverageVsProxy, SalonsCoverageVsProxy, AmendaggCoverageVsProxy, PlusCoverageVsProxy, ConinsCoverageVs$NonownToolsProxy, LiqLiaCoverageVsProxy, VPLiabCoverageVsProxy, CondoDirLiabCoverageVsProxy, LimrealestateCoverageVsProxy, EliteCoverageVsProxy, BaileeCoverageVsProxy, LimpetCoverageVsProxy, ExclinspectionCoverageVsProxy, FlorstCoverageVsProxy, ConscdCoverageVsProxy, CemetyCoverageVsProxy, EqpbrkCoverageVsProxy, ConpreCoverageVsProxy, AmendmoisturedmgCoverageVsProxy, PrteoCoverageVsProxy, EltproCoverageVsProxy, SnowCoCoverageVsProxy, ExcladvertisinglawyersCoverageVsProxy, NonownCoverageVsProxy, ExclinsulationCoverageVsProxy, FunDirCoverageVsProxy, ConinsCoverageVs$EmpToolsProxy, BipayCoverageVsProxy, LimartCoverageVsProxy, MoldCoverageVsProxy, BitimeCoverageVsProxy, EltretCoverageVsProxy, OpticCoverageVsProxy, SupprCoverageVsProxy, TerrorCoverageVsProxy, HiredaCoverageVsProxy, ExcllaundryCoverageVsProxy, EquipmentFloaterCoverageVsProxy, ElteatCoverageVsProxy, CompfCoverageVsProxy, PharmCoverageVsProxy, EmpliaCoverageVsProxy, DentalCoverageVsProxy, LiqpetCoverageVsProxy, ConcovCoverageVsProxy, ExclwarehouseCoverageVsProxy, ExcladvertisingCoverageVsProxy, LimbookCoverageVsProxy, BlkaiCoverageVsProxy, BlanketCoverageVsProxy, LimphotoCoverageVsProxy, BusownCoverageVsProxy, ConinsCoverageVsProxy, CoverageWithAdditionalInsuredProxy, WaiverCoverageVsProxy, OlccmpCoverageVsProxy, OlcCoverageVsProxy, LimprodCoverageVsProxy, LeasedEquipCoverageVsProxy, CownCoverageVsProxy, DesgpersCoverageVsProxy, GrantorCoverageVsProxy, VendorCoverageVsProxy, CoreCommBbopCoveragesVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BbopStopGapCoverageVsProxy", function() { return BbopStopGapCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EltmedCoverageVsProxy", function() { return EltmedCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverageWithEquipmentDetailsProxy", function() { return CoverageWithEquipmentDetailsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IacontractorboardCoverageVsProxy", function() { return IacontractorboardCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConaddCoverageVsProxy", function() { return ConaddCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FellowCoverageVsProxy", function() { return FellowCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CyberCoverageVsProxy", function() { return CyberCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpbenCoverageVsProxy", function() { return EmpbenCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatcomCoverageVsProxy", function() { return DatcomCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalonsCoverageVsProxy", function() { return SalonsCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmendaggCoverageVsProxy", function() { return AmendaggCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlusCoverageVsProxy", function() { return PlusCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConinsCoverageVs$NonownToolsProxy", function() { return ConinsCoverageVs$NonownToolsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiqLiaCoverageVsProxy", function() { return LiqLiaCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VPLiabCoverageVsProxy", function() { return VPLiabCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CondoDirLiabCoverageVsProxy", function() { return CondoDirLiabCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimrealestateCoverageVsProxy", function() { return LimrealestateCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EliteCoverageVsProxy", function() { return EliteCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaileeCoverageVsProxy", function() { return BaileeCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimpetCoverageVsProxy", function() { return LimpetCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExclinspectionCoverageVsProxy", function() { return ExclinspectionCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlorstCoverageVsProxy", function() { return FlorstCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConscdCoverageVsProxy", function() { return ConscdCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CemetyCoverageVsProxy", function() { return CemetyCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EqpbrkCoverageVsProxy", function() { return EqpbrkCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConpreCoverageVsProxy", function() { return ConpreCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmendmoisturedmgCoverageVsProxy", function() { return AmendmoisturedmgCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrteoCoverageVsProxy", function() { return PrteoCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EltproCoverageVsProxy", function() { return EltproCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnowCoCoverageVsProxy", function() { return SnowCoCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcladvertisinglawyersCoverageVsProxy", function() { return ExcladvertisinglawyersCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonownCoverageVsProxy", function() { return NonownCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExclinsulationCoverageVsProxy", function() { return ExclinsulationCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunDirCoverageVsProxy", function() { return FunDirCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConinsCoverageVs$EmpToolsProxy", function() { return ConinsCoverageVs$EmpToolsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BipayCoverageVsProxy", function() { return BipayCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimartCoverageVsProxy", function() { return LimartCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoldCoverageVsProxy", function() { return MoldCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitimeCoverageVsProxy", function() { return BitimeCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EltretCoverageVsProxy", function() { return EltretCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpticCoverageVsProxy", function() { return OpticCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupprCoverageVsProxy", function() { return SupprCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerrorCoverageVsProxy", function() { return TerrorCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiredaCoverageVsProxy", function() { return HiredaCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcllaundryCoverageVsProxy", function() { return ExcllaundryCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentFloaterCoverageVsProxy", function() { return EquipmentFloaterCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElteatCoverageVsProxy", function() { return ElteatCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompfCoverageVsProxy", function() { return CompfCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmCoverageVsProxy", function() { return PharmCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpliaCoverageVsProxy", function() { return EmpliaCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DentalCoverageVsProxy", function() { return DentalCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiqpetCoverageVsProxy", function() { return LiqpetCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConcovCoverageVsProxy", function() { return ConcovCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExclwarehouseCoverageVsProxy", function() { return ExclwarehouseCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcladvertisingCoverageVsProxy", function() { return ExcladvertisingCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimbookCoverageVsProxy", function() { return LimbookCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlkaiCoverageVsProxy", function() { return BlkaiCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlanketCoverageVsProxy", function() { return BlanketCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimphotoCoverageVsProxy", function() { return LimphotoCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusownCoverageVsProxy", function() { return BusownCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConinsCoverageVsProxy", function() { return ConinsCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverageWithAdditionalInsuredProxy", function() { return CoverageWithAdditionalInsuredProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaiverCoverageVsProxy", function() { return WaiverCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OlccmpCoverageVsProxy", function() { return OlccmpCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OlcCoverageVsProxy", function() { return OlcCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimprodCoverageVsProxy", function() { return LimprodCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeasedEquipCoverageVsProxy", function() { return LeasedEquipCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CownCoverageVsProxy", function() { return CownCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesgpersCoverageVsProxy", function() { return DesgpersCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrantorCoverageVsProxy", function() { return GrantorCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorCoverageVsProxy", function() { return VendorCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommBbopCoveragesVsProxy", function() { return CoreCommBbopCoveragesVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_bbop_coverages_equip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.bbop.coverages.equip */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.coverages.equip.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_bbop_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.bbop.ai */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.ai.ts");
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



var BbopStopGapCoverageVsProxy = /** @class */ (function (_super) {
    __extends(BbopStopGapCoverageVsProxy, _super);
    function BbopStopGapCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], BbopStopGapCoverageVsProxy.prototype, "limit", void 0);
    return BbopStopGapCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var EltmedCoverageVsProxy = /** @class */ (function (_super) {
    __extends(EltmedCoverageVsProxy, _super);
    function EltmedCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], EltmedCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], EltmedCoverageVsProxy.prototype, "includeInd", void 0);
    return EltmedCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoverageWithEquipmentDetailsProxy = /** @class */ (function (_super) {
    __extends(CoverageWithEquipmentDetailsProxy, _super);
    function CoverageWithEquipmentDetailsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([_com_arrow_model_def_corecomm_bbop_coverages_equip__WEBPACK_IMPORTED_MODULE_1__["EquipmentDetailsProxy"]])
    ], CoverageWithEquipmentDetailsProxy.prototype, "equips", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoverageWithEquipmentDetailsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoverageWithEquipmentDetailsProxy.prototype, "includeInd", void 0);
    return CoverageWithEquipmentDetailsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var IacontractorboardCoverageVsProxy = /** @class */ (function (_super) {
    __extends(IacontractorboardCoverageVsProxy, _super);
    function IacontractorboardCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], IacontractorboardCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], IacontractorboardCoverageVsProxy.prototype, "includeInd", void 0);
    return IacontractorboardCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var ConaddCoverageVsProxy = /** @class */ (function (_super) {
    __extends(ConaddCoverageVsProxy, _super);
    function ConaddCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ConaddCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ConaddCoverageVsProxy.prototype, "includeInd", void 0);
    return ConaddCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var FellowCoverageVsProxy = /** @class */ (function (_super) {
    __extends(FellowCoverageVsProxy, _super);
    function FellowCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], FellowCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], FellowCoverageVsProxy.prototype, "includeInd", void 0);
    return FellowCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CyberCoverageVsProxy = /** @class */ (function (_super) {
    __extends(CyberCoverageVsProxy, _super);
    function CyberCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CyberCoverageVsProxy.prototype, "compAttackLimDed", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CyberCoverageVsProxy.prototype, "networkSecLimDed", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CyberCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CyberCoverageVsProxy.prototype, "includeInd", void 0);
    return CyberCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var EmpbenCoverageVsProxy = /** @class */ (function (_super) {
    __extends(EmpbenCoverageVsProxy, _super);
    function EmpbenCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], EmpbenCoverageVsProxy.prototype, "limit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], EmpbenCoverageVsProxy.prototype, "numEmp", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], EmpbenCoverageVsProxy.prototype, "programName", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], EmpbenCoverageVsProxy.prototype, "retroDate", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], EmpbenCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], EmpbenCoverageVsProxy.prototype, "includeInd", void 0);
    return EmpbenCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var DatcomCoverageVsProxy = /** @class */ (function (_super) {
    __extends(DatcomCoverageVsProxy, _super);
    function DatcomCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], DatcomCoverageVsProxy.prototype, "limit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], DatcomCoverageVsProxy.prototype, "tier", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], DatcomCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], DatcomCoverageVsProxy.prototype, "includeInd", void 0);
    return DatcomCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var SalonsCoverageVsProxy = /** @class */ (function (_super) {
    __extends(SalonsCoverageVsProxy, _super);
    function SalonsCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], SalonsCoverageVsProxy.prototype, "coverageOption", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], SalonsCoverageVsProxy.prototype, "limit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], SalonsCoverageVsProxy.prototype, "numFtBarb", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], SalonsCoverageVsProxy.prototype, "numFtBeaut", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], SalonsCoverageVsProxy.prototype, "numPtBarb", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], SalonsCoverageVsProxy.prototype, "numPtBeaut", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], SalonsCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], SalonsCoverageVsProxy.prototype, "includeInd", void 0);
    return SalonsCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var AmendaggCoverageVsProxy = /** @class */ (function (_super) {
    __extends(AmendaggCoverageVsProxy, _super);
    function AmendaggCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AmendaggCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AmendaggCoverageVsProxy.prototype, "includeInd", void 0);
    return AmendaggCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var PlusCoverageVsProxy = /** @class */ (function (_super) {
    __extends(PlusCoverageVsProxy, _super);
    function PlusCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PlusCoverageVsProxy.prototype, "limit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PlusCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PlusCoverageVsProxy.prototype, "includeInd", void 0);
    return PlusCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var ConinsCoverageVs$NonownToolsProxy = /** @class */ (function (_super) {
    __extends(ConinsCoverageVs$NonownToolsProxy, _super);
    function ConinsCoverageVs$NonownToolsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ConinsCoverageVs$NonownToolsProxy.prototype, "limit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ConinsCoverageVs$NonownToolsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ConinsCoverageVs$NonownToolsProxy.prototype, "includeInd", void 0);
    return ConinsCoverageVs$NonownToolsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var LiqLiaCoverageVsProxy = /** @class */ (function (_super) {
    __extends(LiqLiaCoverageVsProxy, _super);
    function LiqLiaCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LiqLiaCoverageVsProxy.prototype, "limit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LiqLiaCoverageVsProxy.prototype, "premOp", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LiqLiaCoverageVsProxy.prototype, "salesLiquor", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LiqLiaCoverageVsProxy.prototype, "salesTotal", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LiqLiaCoverageVsProxy.prototype, "type", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LiqLiaCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LiqLiaCoverageVsProxy.prototype, "includeInd", void 0);
    return LiqLiaCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var VPLiabCoverageVsProxy = /** @class */ (function (_super) {
    __extends(VPLiabCoverageVsProxy, _super);
    function VPLiabCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], VPLiabCoverageVsProxy.prototype, "numVets", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], VPLiabCoverageVsProxy.prototype, "vetServicesInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], VPLiabCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], VPLiabCoverageVsProxy.prototype, "includeInd", void 0);
    return VPLiabCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CondoDirLiabCoverageVsProxy = /** @class */ (function (_super) {
    __extends(CondoDirLiabCoverageVsProxy, _super);
    function CondoDirLiabCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CondoDirLiabCoverageVsProxy.prototype, "limit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CondoDirLiabCoverageVsProxy.prototype, "litDate", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CondoDirLiabCoverageVsProxy.prototype, "namedAssociation", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CondoDirLiabCoverageVsProxy.prototype, "numDir", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CondoDirLiabCoverageVsProxy.prototype, "retroDate", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CondoDirLiabCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CondoDirLiabCoverageVsProxy.prototype, "includeInd", void 0);
    return CondoDirLiabCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var LimrealestateCoverageVsProxy = /** @class */ (function (_super) {
    __extends(LimrealestateCoverageVsProxy, _super);
    function LimrealestateCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LimrealestateCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LimrealestateCoverageVsProxy.prototype, "includeInd", void 0);
    return LimrealestateCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var EliteCoverageVsProxy = /** @class */ (function (_super) {
    __extends(EliteCoverageVsProxy, _super);
    function EliteCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], EliteCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], EliteCoverageVsProxy.prototype, "includeInd", void 0);
    return EliteCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var BaileeCoverageVsProxy = /** @class */ (function (_super) {
    __extends(BaileeCoverageVsProxy, _super);
    function BaileeCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], BaileeCoverageVsProxy.prototype, "deductible", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], BaileeCoverageVsProxy.prototype, "grossSales", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], BaileeCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], BaileeCoverageVsProxy.prototype, "includeInd", void 0);
    return BaileeCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var LimpetCoverageVsProxy = /** @class */ (function (_super) {
    __extends(LimpetCoverageVsProxy, _super);
    function LimpetCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LimpetCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LimpetCoverageVsProxy.prototype, "includeInd", void 0);
    return LimpetCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var ExclinspectionCoverageVsProxy = /** @class */ (function (_super) {
    __extends(ExclinspectionCoverageVsProxy, _super);
    function ExclinspectionCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ExclinspectionCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ExclinspectionCoverageVsProxy.prototype, "includeInd", void 0);
    return ExclinspectionCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var FlorstCoverageVsProxy = /** @class */ (function (_super) {
    __extends(FlorstCoverageVsProxy, _super);
    function FlorstCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], FlorstCoverageVsProxy.prototype, "limit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], FlorstCoverageVsProxy.prototype, "numFlorists", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], FlorstCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], FlorstCoverageVsProxy.prototype, "includeInd", void 0);
    return FlorstCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var ConscdCoverageVsProxy = /** @class */ (function (_super) {
    __extends(ConscdCoverageVsProxy, _super);
    function ConscdCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([_com_arrow_model_def_corecomm_bbop_coverages_equip__WEBPACK_IMPORTED_MODULE_1__["EquipmentDetailsProxy"]])
    ], ConscdCoverageVsProxy.prototype, "equips", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ConscdCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ConscdCoverageVsProxy.prototype, "includeInd", void 0);
    return ConscdCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CemetyCoverageVsProxy = /** @class */ (function (_super) {
    __extends(CemetyCoverageVsProxy, _super);
    function CemetyCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CemetyCoverageVsProxy.prototype, "limit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CemetyCoverageVsProxy.prototype, "numBodiesCurr", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CemetyCoverageVsProxy.prototype, "numBodiesEst", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CemetyCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CemetyCoverageVsProxy.prototype, "includeInd", void 0);
    return CemetyCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var EqpbrkCoverageVsProxy = /** @class */ (function (_super) {
    __extends(EqpbrkCoverageVsProxy, _super);
    function EqpbrkCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], EqpbrkCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], EqpbrkCoverageVsProxy.prototype, "includeInd", void 0);
    return EqpbrkCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var ConpreCoverageVsProxy = /** @class */ (function (_super) {
    __extends(ConpreCoverageVsProxy, _super);
    function ConpreCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ConpreCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ConpreCoverageVsProxy.prototype, "includeInd", void 0);
    return ConpreCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var AmendmoisturedmgCoverageVsProxy = /** @class */ (function (_super) {
    __extends(AmendmoisturedmgCoverageVsProxy, _super);
    function AmendmoisturedmgCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AmendmoisturedmgCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AmendmoisturedmgCoverageVsProxy.prototype, "includeInd", void 0);
    return AmendmoisturedmgCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var PrteoCoverageVsProxy = /** @class */ (function (_super) {
    __extends(PrteoCoverageVsProxy, _super);
    function PrteoCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PrteoCoverageVsProxy.prototype, "grossSales", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PrteoCoverageVsProxy.prototype, "limit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PrteoCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PrteoCoverageVsProxy.prototype, "includeInd", void 0);
    return PrteoCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var EltproCoverageVsProxy = /** @class */ (function (_super) {
    __extends(EltproCoverageVsProxy, _super);
    function EltproCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], EltproCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], EltproCoverageVsProxy.prototype, "includeInd", void 0);
    return EltproCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var SnowCoCoverageVsProxy = /** @class */ (function (_super) {
    __extends(SnowCoCoverageVsProxy, _super);
    function SnowCoCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], SnowCoCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], SnowCoCoverageVsProxy.prototype, "includeInd", void 0);
    return SnowCoCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var ExcladvertisinglawyersCoverageVsProxy = /** @class */ (function (_super) {
    __extends(ExcladvertisinglawyersCoverageVsProxy, _super);
    function ExcladvertisinglawyersCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ExcladvertisinglawyersCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ExcladvertisinglawyersCoverageVsProxy.prototype, "includeInd", void 0);
    return ExcladvertisinglawyersCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var NonownCoverageVsProxy = /** @class */ (function (_super) {
    __extends(NonownCoverageVsProxy, _super);
    function NonownCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], NonownCoverageVsProxy.prototype, "exposure", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], NonownCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], NonownCoverageVsProxy.prototype, "includeInd", void 0);
    return NonownCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var ExclinsulationCoverageVsProxy = /** @class */ (function (_super) {
    __extends(ExclinsulationCoverageVsProxy, _super);
    function ExclinsulationCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ExclinsulationCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ExclinsulationCoverageVsProxy.prototype, "includeInd", void 0);
    return ExclinsulationCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var FunDirCoverageVsProxy = /** @class */ (function (_super) {
    __extends(FunDirCoverageVsProxy, _super);
    function FunDirCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], FunDirCoverageVsProxy.prototype, "limit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], FunDirCoverageVsProxy.prototype, "numBodies", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], FunDirCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], FunDirCoverageVsProxy.prototype, "includeInd", void 0);
    return FunDirCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var ConinsCoverageVs$EmpToolsProxy = /** @class */ (function (_super) {
    __extends(ConinsCoverageVs$EmpToolsProxy, _super);
    function ConinsCoverageVs$EmpToolsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ConinsCoverageVs$EmpToolsProxy.prototype, "limit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ConinsCoverageVs$EmpToolsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ConinsCoverageVs$EmpToolsProxy.prototype, "includeInd", void 0);
    return ConinsCoverageVs$EmpToolsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var BipayCoverageVsProxy = /** @class */ (function (_super) {
    __extends(BipayCoverageVsProxy, _super);
    function BipayCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], BipayCoverageVsProxy.prototype, "extNumDays", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], BipayCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], BipayCoverageVsProxy.prototype, "includeInd", void 0);
    return BipayCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var LimartCoverageVsProxy = /** @class */ (function (_super) {
    __extends(LimartCoverageVsProxy, _super);
    function LimartCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LimartCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LimartCoverageVsProxy.prototype, "includeInd", void 0);
    return LimartCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var MoldCoverageVsProxy = /** @class */ (function (_super) {
    __extends(MoldCoverageVsProxy, _super);
    function MoldCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MoldCoverageVsProxy.prototype, "georgiaStateException", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MoldCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MoldCoverageVsProxy.prototype, "includeInd", void 0);
    return MoldCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var BitimeCoverageVsProxy = /** @class */ (function (_super) {
    __extends(BitimeCoverageVsProxy, _super);
    function BitimeCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], BitimeCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], BitimeCoverageVsProxy.prototype, "includeInd", void 0);
    return BitimeCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var EltretCoverageVsProxy = /** @class */ (function (_super) {
    __extends(EltretCoverageVsProxy, _super);
    function EltretCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], EltretCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], EltretCoverageVsProxy.prototype, "includeInd", void 0);
    return EltretCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var OpticCoverageVsProxy = /** @class */ (function (_super) {
    __extends(OpticCoverageVsProxy, _super);
    function OpticCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], OpticCoverageVsProxy.prototype, "limit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], OpticCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], OpticCoverageVsProxy.prototype, "includeInd", void 0);
    return OpticCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var SupprCoverageVsProxy = /** @class */ (function (_super) {
    __extends(SupprCoverageVsProxy, _super);
    function SupprCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], SupprCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], SupprCoverageVsProxy.prototype, "includeInd", void 0);
    return SupprCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var TerrorCoverageVsProxy = /** @class */ (function (_super) {
    __extends(TerrorCoverageVsProxy, _super);
    function TerrorCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], TerrorCoverageVsProxy.prototype, "covPremium", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], TerrorCoverageVsProxy.prototype, "liabAllOtherTerrorism", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], TerrorCoverageVsProxy.prototype, "liabCertifiedActs", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], TerrorCoverageVsProxy.prototype, "propAllOtherTerrorism", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], TerrorCoverageVsProxy.prototype, "propCertifiedActs", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], TerrorCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], TerrorCoverageVsProxy.prototype, "includeInd", void 0);
    return TerrorCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var HiredaCoverageVsProxy = /** @class */ (function (_super) {
    __extends(HiredaCoverageVsProxy, _super);
    function HiredaCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], HiredaCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], HiredaCoverageVsProxy.prototype, "includeInd", void 0);
    return HiredaCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var ExcllaundryCoverageVsProxy = /** @class */ (function (_super) {
    __extends(ExcllaundryCoverageVsProxy, _super);
    function ExcllaundryCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ExcllaundryCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ExcllaundryCoverageVsProxy.prototype, "includeInd", void 0);
    return ExcllaundryCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var EquipmentFloaterCoverageVsProxy = /** @class */ (function (_super) {
    __extends(EquipmentFloaterCoverageVsProxy, _super);
    function EquipmentFloaterCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], EquipmentFloaterCoverageVsProxy.prototype, "highValueInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], EquipmentFloaterCoverageVsProxy.prototype, "limit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([_com_arrow_model_def_corecomm_bbop_coverages_equip__WEBPACK_IMPORTED_MODULE_1__["EquipmentDetailsProxy"]])
    ], EquipmentFloaterCoverageVsProxy.prototype, "equips", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], EquipmentFloaterCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], EquipmentFloaterCoverageVsProxy.prototype, "includeInd", void 0);
    return EquipmentFloaterCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var ElteatCoverageVsProxy = /** @class */ (function (_super) {
    __extends(ElteatCoverageVsProxy, _super);
    function ElteatCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ElteatCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ElteatCoverageVsProxy.prototype, "includeInd", void 0);
    return ElteatCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CompfCoverageVsProxy = /** @class */ (function (_super) {
    __extends(CompfCoverageVsProxy, _super);
    function CompfCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CompfCoverageVsProxy.prototype, "limit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CompfCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CompfCoverageVsProxy.prototype, "includeInd", void 0);
    return CompfCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var PharmCoverageVsProxy = /** @class */ (function (_super) {
    __extends(PharmCoverageVsProxy, _super);
    function PharmCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PharmCoverageVsProxy.prototype, "grossSales", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PharmCoverageVsProxy.prototype, "limit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PharmCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PharmCoverageVsProxy.prototype, "includeInd", void 0);
    return PharmCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var EmpliaCoverageVsProxy = /** @class */ (function (_super) {
    __extends(EmpliaCoverageVsProxy, _super);
    function EmpliaCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], EmpliaCoverageVsProxy.prototype, "ded", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], EmpliaCoverageVsProxy.prototype, "includeInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], EmpliaCoverageVsProxy.prototype, "indemnityLimit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], EmpliaCoverageVsProxy.prototype, "limit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], EmpliaCoverageVsProxy.prototype, "numEmp", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], EmpliaCoverageVsProxy.prototype, "defenseLimit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], EmpliaCoverageVsProxy.prototype, "priorActs", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], EmpliaCoverageVsProxy.prototype, "retroDate", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], EmpliaCoverageVsProxy.prototype, "thirdPartyCoverage", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], EmpliaCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], EmpliaCoverageVsProxy.prototype, "numNonFTEmp", void 0);
    return EmpliaCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var DentalCoverageVsProxy = /** @class */ (function (_super) {
    __extends(DentalCoverageVsProxy, _super);
    function DentalCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], DentalCoverageVsProxy.prototype, "limit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], DentalCoverageVsProxy.prototype, "numTechs", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], DentalCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], DentalCoverageVsProxy.prototype, "includeInd", void 0);
    return DentalCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var LiqpetCoverageVsProxy = /** @class */ (function (_super) {
    __extends(LiqpetCoverageVsProxy, _super);
    function LiqpetCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LiqpetCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LiqpetCoverageVsProxy.prototype, "includeInd", void 0);
    return LiqpetCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var ConcovCoverageVsProxy = /** @class */ (function (_super) {
    __extends(ConcovCoverageVsProxy, _super);
    function ConcovCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ConcovCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ConcovCoverageVsProxy.prototype, "includeInd", void 0);
    return ConcovCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var ExclwarehouseCoverageVsProxy = /** @class */ (function (_super) {
    __extends(ExclwarehouseCoverageVsProxy, _super);
    function ExclwarehouseCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ExclwarehouseCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ExclwarehouseCoverageVsProxy.prototype, "includeInd", void 0);
    return ExclwarehouseCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var ExcladvertisingCoverageVsProxy = /** @class */ (function (_super) {
    __extends(ExcladvertisingCoverageVsProxy, _super);
    function ExcladvertisingCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ExcladvertisingCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ExcladvertisingCoverageVsProxy.prototype, "includeInd", void 0);
    return ExcladvertisingCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var LimbookCoverageVsProxy = /** @class */ (function (_super) {
    __extends(LimbookCoverageVsProxy, _super);
    function LimbookCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LimbookCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LimbookCoverageVsProxy.prototype, "includeInd", void 0);
    return LimbookCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var BlkaiCoverageVsProxy = /** @class */ (function (_super) {
    __extends(BlkaiCoverageVsProxy, _super);
    function BlkaiCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], BlkaiCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], BlkaiCoverageVsProxy.prototype, "includeInd", void 0);
    return BlkaiCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var BlanketCoverageVsProxy = /** @class */ (function (_super) {
    __extends(BlanketCoverageVsProxy, _super);
    function BlanketCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], BlanketCoverageVsProxy.prototype, "covOption", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], BlanketCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], BlanketCoverageVsProxy.prototype, "includeInd", void 0);
    return BlanketCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var LimphotoCoverageVsProxy = /** @class */ (function (_super) {
    __extends(LimphotoCoverageVsProxy, _super);
    function LimphotoCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LimphotoCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LimphotoCoverageVsProxy.prototype, "includeInd", void 0);
    return LimphotoCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var BusownCoverageVsProxy = /** @class */ (function (_super) {
    __extends(BusownCoverageVsProxy, _super);
    function BusownCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], BusownCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], BusownCoverageVsProxy.prototype, "includeInd", void 0);
    return BusownCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var ConinsCoverageVsProxy = /** @class */ (function (_super) {
    __extends(ConinsCoverageVsProxy, _super);
    function ConinsCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ConinsCoverageVsProxy.prototype, "blanketLimit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ConinsCoverageVsProxy.prototype, "conEquipRentReimbursement", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ConinsCoverageVsProxy.prototype, "conToolsCovType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(ConinsCoverageVs$EmpToolsProxy)
    ], ConinsCoverageVsProxy.prototype, "empTools", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ConinsCoverageVsProxy.prototype, "limit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(ConinsCoverageVs$NonownToolsProxy)
    ], ConinsCoverageVsProxy.prototype, "nonownTools", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ConinsCoverageVsProxy.prototype, "propOnSite", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ConinsCoverageVsProxy.prototype, "propOnSiteLimit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ConinsCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ConinsCoverageVsProxy.prototype, "includeInd", void 0);
    return ConinsCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoverageWithAdditionalInsuredProxy = /** @class */ (function (_super) {
    __extends(CoverageWithAdditionalInsuredProxy, _super);
    function CoverageWithAdditionalInsuredProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([_com_arrow_model_def_corecomm_bbop_ai__WEBPACK_IMPORTED_MODULE_2__["AIIndividualVsProxy"]])
    ], CoverageWithAdditionalInsuredProxy.prototype, "additionalInsuredList", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoverageWithAdditionalInsuredProxy.prototype, "numAI", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoverageWithAdditionalInsuredProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoverageWithAdditionalInsuredProxy.prototype, "includeInd", void 0);
    return CoverageWithAdditionalInsuredProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var WaiverCoverageVsProxy = /** @class */ (function (_super) {
    __extends(WaiverCoverageVsProxy, _super);
    function WaiverCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([_com_arrow_model_def_corecomm_bbop_ai__WEBPACK_IMPORTED_MODULE_2__["AIIndividualVsProxy"]])
    ], WaiverCoverageVsProxy.prototype, "additionalInsuredList", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WaiverCoverageVsProxy.prototype, "numAI", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WaiverCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WaiverCoverageVsProxy.prototype, "includeInd", void 0);
    return WaiverCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var OlccmpCoverageVsProxy = /** @class */ (function (_super) {
    __extends(OlccmpCoverageVsProxy, _super);
    function OlccmpCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([_com_arrow_model_def_corecomm_bbop_ai__WEBPACK_IMPORTED_MODULE_2__["AIIndividualVsProxy"]])
    ], OlccmpCoverageVsProxy.prototype, "additionalInsuredList", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], OlccmpCoverageVsProxy.prototype, "numAI", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], OlccmpCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], OlccmpCoverageVsProxy.prototype, "includeInd", void 0);
    return OlccmpCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var OlcCoverageVsProxy = /** @class */ (function (_super) {
    __extends(OlcCoverageVsProxy, _super);
    function OlcCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([_com_arrow_model_def_corecomm_bbop_ai__WEBPACK_IMPORTED_MODULE_2__["AIIndividualVsProxy"]])
    ], OlcCoverageVsProxy.prototype, "additionalInsuredList", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], OlcCoverageVsProxy.prototype, "numAI", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], OlcCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], OlcCoverageVsProxy.prototype, "includeInd", void 0);
    return OlcCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var LimprodCoverageVsProxy = /** @class */ (function (_super) {
    __extends(LimprodCoverageVsProxy, _super);
    function LimprodCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([_com_arrow_model_def_corecomm_bbop_ai__WEBPACK_IMPORTED_MODULE_2__["AIIndividualVsProxy"]])
    ], LimprodCoverageVsProxy.prototype, "additionalInsuredList", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LimprodCoverageVsProxy.prototype, "numAI", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LimprodCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LimprodCoverageVsProxy.prototype, "includeInd", void 0);
    return LimprodCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var LeasedEquipCoverageVsProxy = /** @class */ (function (_super) {
    __extends(LeasedEquipCoverageVsProxy, _super);
    function LeasedEquipCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([_com_arrow_model_def_corecomm_bbop_ai__WEBPACK_IMPORTED_MODULE_2__["AIIndividualVsProxy"]])
    ], LeasedEquipCoverageVsProxy.prototype, "additionalInsuredList", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LeasedEquipCoverageVsProxy.prototype, "numAI", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LeasedEquipCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LeasedEquipCoverageVsProxy.prototype, "includeInd", void 0);
    return LeasedEquipCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CownCoverageVsProxy = /** @class */ (function (_super) {
    __extends(CownCoverageVsProxy, _super);
    function CownCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([_com_arrow_model_def_corecomm_bbop_ai__WEBPACK_IMPORTED_MODULE_2__["AIIndividualVsProxy"]])
    ], CownCoverageVsProxy.prototype, "additionalInsuredList", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CownCoverageVsProxy.prototype, "numAI", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CownCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CownCoverageVsProxy.prototype, "includeInd", void 0);
    return CownCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var DesgpersCoverageVsProxy = /** @class */ (function (_super) {
    __extends(DesgpersCoverageVsProxy, _super);
    function DesgpersCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([_com_arrow_model_def_corecomm_bbop_ai__WEBPACK_IMPORTED_MODULE_2__["AIIndividualVsProxy"]])
    ], DesgpersCoverageVsProxy.prototype, "additionalInsuredList", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], DesgpersCoverageVsProxy.prototype, "numAI", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], DesgpersCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], DesgpersCoverageVsProxy.prototype, "includeInd", void 0);
    return DesgpersCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var GrantorCoverageVsProxy = /** @class */ (function (_super) {
    __extends(GrantorCoverageVsProxy, _super);
    function GrantorCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([_com_arrow_model_def_corecomm_bbop_ai__WEBPACK_IMPORTED_MODULE_2__["AIIndividualVsProxy"]])
    ], GrantorCoverageVsProxy.prototype, "additionalInsuredList", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], GrantorCoverageVsProxy.prototype, "numAI", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], GrantorCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], GrantorCoverageVsProxy.prototype, "includeInd", void 0);
    return GrantorCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var VendorCoverageVsProxy = /** @class */ (function (_super) {
    __extends(VendorCoverageVsProxy, _super);
    function VendorCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([_com_arrow_model_def_corecomm_bbop_ai__WEBPACK_IMPORTED_MODULE_2__["AIIndividualVsProxy"]])
    ], VendorCoverageVsProxy.prototype, "additionalInsuredList", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], VendorCoverageVsProxy.prototype, "numAI", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], VendorCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], VendorCoverageVsProxy.prototype, "includeInd", void 0);
    return VendorCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommBbopCoveragesVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommBbopCoveragesVsProxy, _super);
    function CoreCommBbopCoveragesVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(AmendaggCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "amendagg", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(WaiverCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "waiver", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(BaileeCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "bailee", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(BipayCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "bipay", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(BitimeCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "bitime", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(BlanketCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "blanket", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(BlkaiCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "blkai", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(BusownCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "busown", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CemetyCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "cemety", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CompfCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "compf", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(ConaddCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "conadd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(ConcovCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "concov", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CondoDirLiabCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "condoDirLiab", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(ConinsCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "conins", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(ConpreCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "conpre", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(ConscdCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "conscd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CownCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "cown", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CyberCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "cyber", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(DatcomCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "datcom", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(DentalCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "dental", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(EquipmentFloaterCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "dentistEquip", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(DesgpersCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "desgpers", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(EliteCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "elite", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(ElteatCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "elteat", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(EltmedCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "eltmed", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(EltproCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "eltpro", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(EltretCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "eltret", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(EmpbenCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "empben", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(EmpliaCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "emplia", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(EqpbrkCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "eqpbrk", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(ExcladvertisingCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "excladvertising", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(ExcladvertisinglawyersCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "excladvertisinglawyers", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(ExclinspectionCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "exclinspection", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(ExclinsulationCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "exclinsulation", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(ExcllaundryCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "excllaundry", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(AmendmoisturedmgCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "amendmoisturedmg", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(FellowCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "fellow", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(FlorstCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "florst", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(FunDirCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "funDir", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(GrantorCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "grantor", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(HiredaCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "hireda", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(IacontractorboardCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "iacontractorboard", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(LeasedEquipCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "leasedEquip", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(LimartCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "limart", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(LimbookCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "limbook", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(LimpetCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "limpet", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(LimphotoCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "limphoto", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(LimprodCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "limprod", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(LimrealestateCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "limrealestate", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(LiqLiaCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "liqLia", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(LiqpetCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "liqpet", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(MoldCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "mold", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(NonownCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "nonown", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(OlcCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "olc", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(OlccmpCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "olccmp", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(OpticCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "optic", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(PharmCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "pharm", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(EquipmentFloaterCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "photof", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(PlusCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "plus", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(PrteoCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "prteo", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(SalonsCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "salons", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(SnowCoCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "snowCo", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(BbopStopGapCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "stopGapND", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(BbopStopGapCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "stopGapOH", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(BbopStopGapCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "stopGapWA", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(BbopStopGapCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "stopGapWY", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(SupprCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "suppr", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(TerrorCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "terror", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(VendorCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "vendor", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(VPLiabCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "vPLiab", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(ExclwarehouseCoverageVsProxy)
    ], CoreCommBbopCoveragesVsProxy.prototype, "exclwarehouse", void 0);
    return CoreCommBbopCoveragesVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.location.building.coverages.ts":
/*!******************************************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.location.building.coverages.ts ***!
  \******************************************************************************************/
/*! exports provided: EarthquakeCoverageVsProxy, UtilDdCoverageVsProxy, MineSubsidenceVsProxy, TenfirCoverageVsProxy, OrdLawCoverageVsProxy, PpCoverageVsProxy, UtilteCoverageVsProxy, LcompfCoverageVsProxy, ActrecCoverageVsProxy, BidpCoverageVsProxy, MineSubsidenceParentVsProxy, AdditionalLivingExpenseVsProxy, YardsCoverageVsProxy, CondoOwnerCoverageVsProxy, SpoilCoverageVsProxy, SleqexCoverageVsProxy, LiabCoverageVsProxy, ConcomCoverageVsProxy, AdditionalLivingExpenseVs$StandaloneProxy, AdditionalLivingExpenseParentVsProxy, LienholderCoverageVsProxy, LospayCoverageVsProxy, BldCoverageVsProxy, AipremCoverageVsProxy, AieqipCoverageVsProxy, CoreCommBbopBldgCoveragesVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarthquakeCoverageVsProxy", function() { return EarthquakeCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilDdCoverageVsProxy", function() { return UtilDdCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MineSubsidenceVsProxy", function() { return MineSubsidenceVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenfirCoverageVsProxy", function() { return TenfirCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdLawCoverageVsProxy", function() { return OrdLawCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PpCoverageVsProxy", function() { return PpCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilteCoverageVsProxy", function() { return UtilteCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LcompfCoverageVsProxy", function() { return LcompfCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActrecCoverageVsProxy", function() { return ActrecCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidpCoverageVsProxy", function() { return BidpCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MineSubsidenceParentVsProxy", function() { return MineSubsidenceParentVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionalLivingExpenseVsProxy", function() { return AdditionalLivingExpenseVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YardsCoverageVsProxy", function() { return YardsCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CondoOwnerCoverageVsProxy", function() { return CondoOwnerCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpoilCoverageVsProxy", function() { return SpoilCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SleqexCoverageVsProxy", function() { return SleqexCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiabCoverageVsProxy", function() { return LiabCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConcomCoverageVsProxy", function() { return ConcomCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionalLivingExpenseVs$StandaloneProxy", function() { return AdditionalLivingExpenseVs$StandaloneProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionalLivingExpenseParentVsProxy", function() { return AdditionalLivingExpenseParentVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LienholderCoverageVsProxy", function() { return LienholderCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LospayCoverageVsProxy", function() { return LospayCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BldCoverageVsProxy", function() { return BldCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AipremCoverageVsProxy", function() { return AipremCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AieqipCoverageVsProxy", function() { return AieqipCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommBbopBldgCoveragesVsProxy", function() { return CoreCommBbopBldgCoveragesVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_bbop_location_building_mortgagee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.bbop.location.building.mortgagee */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.location.building.mortgagee.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_bbop_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.bbop.ai */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.ai.ts");
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



var EarthquakeCoverageVsProxy = /** @class */ (function (_super) {
    __extends(EarthquakeCoverageVsProxy, _super);
    function EarthquakeCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], EarthquakeCoverageVsProxy.prototype, "bldgClassification", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], EarthquakeCoverageVsProxy.prototype, "bldgRoofTank", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], EarthquakeCoverageVsProxy.prototype, "coverageType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], EarthquakeCoverageVsProxy.prototype, "ded", void 0);
    return EarthquakeCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var UtilDdCoverageVsProxy = /** @class */ (function (_super) {
    __extends(UtilDdCoverageVsProxy, _super);
    function UtilDdCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], UtilDdCoverageVsProxy.prototype, "building", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], UtilDdCoverageVsProxy.prototype, "includeInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], UtilDdCoverageVsProxy.prototype, "communicationSupply", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], UtilDdCoverageVsProxy.prototype, "communicationTransLine", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], UtilDdCoverageVsProxy.prototype, "personalProperty", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], UtilDdCoverageVsProxy.prototype, "personalPropertyLimit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], UtilDdCoverageVsProxy.prototype, "buildingLimit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], UtilDdCoverageVsProxy.prototype, "powerSupplyTransLine", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], UtilDdCoverageVsProxy.prototype, "utility", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], UtilDdCoverageVsProxy.prototype, "waterSupply", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], UtilDdCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], UtilDdCoverageVsProxy.prototype, "powerSupply", void 0);
    return UtilDdCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var MineSubsidenceVsProxy = /** @class */ (function (_super) {
    __extends(MineSubsidenceVsProxy, _super);
    function MineSubsidenceVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MineSubsidenceVsProxy.prototype, "limit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MineSubsidenceVsProxy.prototype, "waiverAcknowledgement", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MineSubsidenceVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MineSubsidenceVsProxy.prototype, "includeInd", void 0);
    return MineSubsidenceVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var TenfirCoverageVsProxy = /** @class */ (function (_super) {
    __extends(TenfirCoverageVsProxy, _super);
    function TenfirCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], TenfirCoverageVsProxy.prototype, "limit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], TenfirCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], TenfirCoverageVsProxy.prototype, "includeInd", void 0);
    return TenfirCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var OrdLawCoverageVsProxy = /** @class */ (function (_super) {
    __extends(OrdLawCoverageVsProxy, _super);
    function OrdLawCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], OrdLawCoverageVsProxy.prototype, "combinedLimit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], OrdLawCoverageVsProxy.prototype, "covType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], OrdLawCoverageVsProxy.prototype, "limit1", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], OrdLawCoverageVsProxy.prototype, "limit2", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], OrdLawCoverageVsProxy.prototype, "limit3", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], OrdLawCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], OrdLawCoverageVsProxy.prototype, "includeInd", void 0);
    return OrdLawCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var PpCoverageVsProxy = /** @class */ (function (_super) {
    __extends(PpCoverageVsProxy, _super);
    function PpCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PpCoverageVsProxy.prototype, "limit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PpCoverageVsProxy.prototype, "seasonalIncrease", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PpCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PpCoverageVsProxy.prototype, "includeInd", void 0);
    return PpCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var UtilteCoverageVsProxy = /** @class */ (function (_super) {
    __extends(UtilteCoverageVsProxy, _super);
    function UtilteCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], UtilteCoverageVsProxy.prototype, "commOverheadTransLines", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], UtilteCoverageVsProxy.prototype, "commSupply", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], UtilteCoverageVsProxy.prototype, "limit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], UtilteCoverageVsProxy.prototype, "powerOverheadTransLines", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], UtilteCoverageVsProxy.prototype, "powerSupply", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], UtilteCoverageVsProxy.prototype, "utility", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], UtilteCoverageVsProxy.prototype, "wasteRemoval", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], UtilteCoverageVsProxy.prototype, "waterSupply", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], UtilteCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], UtilteCoverageVsProxy.prototype, "includeInd", void 0);
    return UtilteCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var LcompfCoverageVsProxy = /** @class */ (function (_super) {
    __extends(LcompfCoverageVsProxy, _super);
    function LcompfCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LcompfCoverageVsProxy.prototype, "numEmployees", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LcompfCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LcompfCoverageVsProxy.prototype, "includeInd", void 0);
    return LcompfCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var ActrecCoverageVsProxy = /** @class */ (function (_super) {
    __extends(ActrecCoverageVsProxy, _super);
    function ActrecCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ActrecCoverageVsProxy.prototype, "limit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ActrecCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ActrecCoverageVsProxy.prototype, "includeInd", void 0);
    return ActrecCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var BidpCoverageVsProxy = /** @class */ (function (_super) {
    __extends(BidpCoverageVsProxy, _super);
    function BidpCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], BidpCoverageVsProxy.prototype, "limit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], BidpCoverageVsProxy.prototype, "secondaryDependentProperties", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], BidpCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], BidpCoverageVsProxy.prototype, "includeInd", void 0);
    return BidpCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var MineSubsidenceParentVsProxy = /** @class */ (function (_super) {
    __extends(MineSubsidenceParentVsProxy, _super);
    function MineSubsidenceParentVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(MineSubsidenceVsProxy)
    ], MineSubsidenceParentVsProxy.prototype, "iL", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(MineSubsidenceVsProxy)
    ], MineSubsidenceParentVsProxy.prototype, "iN", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(MineSubsidenceVsProxy)
    ], MineSubsidenceParentVsProxy.prototype, "kY", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(MineSubsidenceVsProxy)
    ], MineSubsidenceParentVsProxy.prototype, "oH", void 0);
    return MineSubsidenceParentVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var AdditionalLivingExpenseVsProxy = /** @class */ (function (_super) {
    __extends(AdditionalLivingExpenseVsProxy, _super);
    function AdditionalLivingExpenseVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AdditionalLivingExpenseVsProxy.prototype, "limit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AdditionalLivingExpenseVsProxy.prototype, "waiverAcknowledgement", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AdditionalLivingExpenseVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AdditionalLivingExpenseVsProxy.prototype, "includeInd", void 0);
    return AdditionalLivingExpenseVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var YardsCoverageVsProxy = /** @class */ (function (_super) {
    __extends(YardsCoverageVsProxy, _super);
    function YardsCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], YardsCoverageVsProxy.prototype, "limit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], YardsCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], YardsCoverageVsProxy.prototype, "includeInd", void 0);
    return YardsCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CondoOwnerCoverageVsProxy = /** @class */ (function (_super) {
    __extends(CondoOwnerCoverageVsProxy, _super);
    function CondoOwnerCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CondoOwnerCoverageVsProxy.prototype, "deductible", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CondoOwnerCoverageVsProxy.prototype, "lossAssessment", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CondoOwnerCoverageVsProxy.prototype, "miscProp", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CondoOwnerCoverageVsProxy.prototype, "subLimit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CondoOwnerCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CondoOwnerCoverageVsProxy.prototype, "includeInd", void 0);
    return CondoOwnerCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var SpoilCoverageVsProxy = /** @class */ (function (_super) {
    __extends(SpoilCoverageVsProxy, _super);
    function SpoilCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], SpoilCoverageVsProxy.prototype, "breakContInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], SpoilCoverageVsProxy.prototype, "powerOutInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], SpoilCoverageVsProxy.prototype, "refrigerationInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], SpoilCoverageVsProxy.prototype, "spoilageDescription", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], SpoilCoverageVsProxy.prototype, "spoilageLimit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], SpoilCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], SpoilCoverageVsProxy.prototype, "includeInd", void 0);
    return SpoilCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var SleqexCoverageVsProxy = /** @class */ (function (_super) {
    __extends(SleqexCoverageVsProxy, _super);
    function SleqexCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], SleqexCoverageVsProxy.prototype, "bldgClassification", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], SleqexCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], SleqexCoverageVsProxy.prototype, "includeInd", void 0);
    return SleqexCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var LiabCoverageVsProxy = /** @class */ (function (_super) {
    __extends(LiabCoverageVsProxy, _super);
    function LiabCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LiabCoverageVsProxy.prototype, "payroll", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LiabCoverageVsProxy.prototype, "sales", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LiabCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LiabCoverageVsProxy.prototype, "includeInd", void 0);
    return LiabCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var ConcomCoverageVsProxy = /** @class */ (function (_super) {
    __extends(ConcomCoverageVsProxy, _super);
    function ConcomCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ConcomCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ConcomCoverageVsProxy.prototype, "includeInd", void 0);
    return ConcomCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var AdditionalLivingExpenseVs$StandaloneProxy = /** @class */ (function (_super) {
    __extends(AdditionalLivingExpenseVs$StandaloneProxy, _super);
    function AdditionalLivingExpenseVs$StandaloneProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AdditionalLivingExpenseVs$StandaloneProxy.prototype, "limit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AdditionalLivingExpenseVs$StandaloneProxy.prototype, "waiverAcknowledgement", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AdditionalLivingExpenseVs$StandaloneProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AdditionalLivingExpenseVs$StandaloneProxy.prototype, "includeInd", void 0);
    return AdditionalLivingExpenseVs$StandaloneProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var AdditionalLivingExpenseParentVsProxy = /** @class */ (function (_super) {
    __extends(AdditionalLivingExpenseParentVsProxy, _super);
    function AdditionalLivingExpenseParentVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(AdditionalLivingExpenseVsProxy)
    ], AdditionalLivingExpenseParentVsProxy.prototype, "iN", void 0);
    return AdditionalLivingExpenseParentVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var LienholderCoverageVsProxy = /** @class */ (function (_super) {
    __extends(LienholderCoverageVsProxy, _super);
    function LienholderCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([_com_arrow_model_def_corecomm_bbop_location_building_mortgagee__WEBPACK_IMPORTED_MODULE_1__["MortgageeVsProxy"]])
    ], LienholderCoverageVsProxy.prototype, "mortgageeList", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LienholderCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LienholderCoverageVsProxy.prototype, "includeInd", void 0);
    return LienholderCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var LospayCoverageVsProxy = /** @class */ (function (_super) {
    __extends(LospayCoverageVsProxy, _super);
    function LospayCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([_com_arrow_model_def_corecomm_bbop_ai__WEBPACK_IMPORTED_MODULE_2__["AIIndividualVsProxy"]])
    ], LospayCoverageVsProxy.prototype, "additionalInsuredList", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LospayCoverageVsProxy.prototype, "numAI", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LospayCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LospayCoverageVsProxy.prototype, "includeInd", void 0);
    return LospayCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var BldCoverageVsProxy = /** @class */ (function (_super) {
    __extends(BldCoverageVsProxy, _super);
    function BldCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(AdditionalLivingExpenseParentVsProxy)
    ], BldCoverageVsProxy.prototype, "addexp", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], BldCoverageVsProxy.prototype, "automaticIncr", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], BldCoverageVsProxy.prototype, "limit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(MineSubsidenceParentVsProxy)
    ], BldCoverageVsProxy.prototype, "mine", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], BldCoverageVsProxy.prototype, "valuation", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], BldCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], BldCoverageVsProxy.prototype, "includeInd", void 0);
    return BldCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var AipremCoverageVsProxy = /** @class */ (function (_super) {
    __extends(AipremCoverageVsProxy, _super);
    function AipremCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([_com_arrow_model_def_corecomm_bbop_ai__WEBPACK_IMPORTED_MODULE_2__["AIIndividualVsProxy"]])
    ], AipremCoverageVsProxy.prototype, "additionalInsuredList", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AipremCoverageVsProxy.prototype, "numAI", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AipremCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AipremCoverageVsProxy.prototype, "includeInd", void 0);
    return AipremCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var AieqipCoverageVsProxy = /** @class */ (function (_super) {
    __extends(AieqipCoverageVsProxy, _super);
    function AieqipCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([_com_arrow_model_def_corecomm_bbop_ai__WEBPACK_IMPORTED_MODULE_2__["AIIndividualVsProxy"]])
    ], AieqipCoverageVsProxy.prototype, "additionalInsuredList", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AieqipCoverageVsProxy.prototype, "numAI", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AieqipCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AieqipCoverageVsProxy.prototype, "includeInd", void 0);
    return AieqipCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommBbopBldgCoveragesVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommBbopBldgCoveragesVsProxy, _super);
    function CoreCommBbopBldgCoveragesVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(ActrecCoverageVsProxy)
    ], CoreCommBbopBldgCoveragesVsProxy.prototype, "actrec", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(YardsCoverageVsProxy)
    ], CoreCommBbopBldgCoveragesVsProxy.prototype, "yards", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(AipremCoverageVsProxy)
    ], CoreCommBbopBldgCoveragesVsProxy.prototype, "aiprem", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(BidpCoverageVsProxy)
    ], CoreCommBbopBldgCoveragesVsProxy.prototype, "bidp", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(BldCoverageVsProxy)
    ], CoreCommBbopBldgCoveragesVsProxy.prototype, "bld", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(ConcomCoverageVsProxy)
    ], CoreCommBbopBldgCoveragesVsProxy.prototype, "concom", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CondoOwnerCoverageVsProxy)
    ], CoreCommBbopBldgCoveragesVsProxy.prototype, "condoOwner", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(EarthquakeCoverageVsProxy)
    ], CoreCommBbopBldgCoveragesVsProxy.prototype, "eq", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(LcompfCoverageVsProxy)
    ], CoreCommBbopBldgCoveragesVsProxy.prototype, "lcompf", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(LiabCoverageVsProxy)
    ], CoreCommBbopBldgCoveragesVsProxy.prototype, "liab", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(AieqipCoverageVsProxy)
    ], CoreCommBbopBldgCoveragesVsProxy.prototype, "aieqip", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(LospayCoverageVsProxy)
    ], CoreCommBbopBldgCoveragesVsProxy.prototype, "lospay", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(OrdLawCoverageVsProxy)
    ], CoreCommBbopBldgCoveragesVsProxy.prototype, "ordLaw", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(PpCoverageVsProxy)
    ], CoreCommBbopBldgCoveragesVsProxy.prototype, "pP", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(SleqexCoverageVsProxy)
    ], CoreCommBbopBldgCoveragesVsProxy.prototype, "sleqex", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(SpoilCoverageVsProxy)
    ], CoreCommBbopBldgCoveragesVsProxy.prototype, "spoil", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(TenfirCoverageVsProxy)
    ], CoreCommBbopBldgCoveragesVsProxy.prototype, "tenfir", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(UtilDdCoverageVsProxy)
    ], CoreCommBbopBldgCoveragesVsProxy.prototype, "utildd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(UtilteCoverageVsProxy)
    ], CoreCommBbopBldgCoveragesVsProxy.prototype, "utilte", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(LienholderCoverageVsProxy)
    ], CoreCommBbopBldgCoveragesVsProxy.prototype, "lienholder", void 0);
    return CoreCommBbopBldgCoveragesVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.location.building.mortgagee.ts":
/*!******************************************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.location.building.mortgagee.ts ***!
  \******************************************************************************************/
/*! exports provided: MortgageeVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MortgageeVsProxy", function() { return MortgageeVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
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

var MortgageeVsProxy = /** @class */ (function (_super) {
    __extends(MortgageeVsProxy, _super);
    function MortgageeVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MortgageeVsProxy.prototype, "account", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MortgageeVsProxy.prototype, "location", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MortgageeVsProxy.prototype, "name", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MortgageeVsProxy.prototype, "address", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MortgageeVsProxy.prototype, "addressLine2", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MortgageeVsProxy.prototype, "city", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MortgageeVsProxy.prototype, "state", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], MortgageeVsProxy.prototype, "zip", void 0);
    return MortgageeVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.location.building.ts":
/*!********************************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.location.building.ts ***!
  \********************************************************************************/
/*! exports provided: CoreCommReplacementCostVsProxy, CoreCommBbopBuildingVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommReplacementCostVsProxy", function() { return CoreCommReplacementCostVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommBbopBuildingVsProxy", function() { return CoreCommBbopBuildingVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_bbop_location_building_coverages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.bbop.location.building.coverages */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.location.building.coverages.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_bbop_location_building_uw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.bbop.location.building.uw */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.location.building.uw.ts");
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



var CoreCommReplacementCostVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommReplacementCostVsProxy, _super);
    function CoreCommReplacementCostVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommReplacementCostVsProxy.prototype, "callResult", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommReplacementCostVsProxy.prototype, "message", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommReplacementCostVsProxy.prototype, "replacementCost", void 0);
    return CoreCommReplacementCostVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommBbopBuildingVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommBbopBuildingVsProxy, _super);
    function CoreCommBbopBuildingVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBuildingVsProxy.prototype, "bcegCode", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBuildingVsProxy.prototype, "yearBuilt", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBuildingVsProxy.prototype, "classOverride", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBuildingVsProxy.prototype, "classTag", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBuildingVsProxy.prototype, "construction", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_bbop_location_building_coverages__WEBPACK_IMPORTED_MODULE_1__["CoreCommBbopBldgCoveragesVsProxy"])
    ], CoreCommBbopBuildingVsProxy.prototype, "coverages", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBuildingVsProxy.prototype, "cspCode", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBuildingVsProxy.prototype, "description", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBuildingVsProxy.prototype, "industrySegment", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBuildingVsProxy.prototype, "isoClassDescription", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBuildingVsProxy.prototype, "isoClassDescriptionId", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBuildingVsProxy.prototype, "isoClassGroup", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBuildingVsProxy.prototype, "lessorsRisks", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBuildingVsProxy.prototype, "lOI", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBuildingVsProxy.prototype, "naicsCode", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBuildingVsProxy.prototype, "classCode", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBuildingVsProxy.prototype, "numStories", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBuildingVsProxy.prototype, "numSwimming", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBuildingVsProxy.prototype, "occupancy", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBuildingVsProxy.prototype, "occupiedSqFt", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBuildingVsProxy.prototype, "pools", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBuildingVsProxy.prototype, "premOpsILF", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommReplacementCostVsProxy)
    ], CoreCommBbopBuildingVsProxy.prototype, "replacementCost", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBuildingVsProxy.prototype, "sicCode", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBuildingVsProxy.prototype, "soleOccupantInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBuildingVsProxy.prototype, "sprinklered", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBuildingVsProxy.prototype, "swimmingInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBuildingVsProxy.prototype, "totalSqFt", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_bbop_location_building_uw__WEBPACK_IMPORTED_MODULE_2__["CoreCommBbopBldgUwVsProxy"])
    ], CoreCommBbopBuildingVsProxy.prototype, "uw", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBuildingVsProxy.prototype, "numResidentialUnits", void 0);
    return CoreCommBbopBuildingVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.location.building.uw.pool.ts":
/*!****************************************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.location.building.uw.pool.ts ***!
  \****************************************************************************************/
/*! exports provided: CoreCommBbopBldgPoolUwVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommBbopBldgPoolUwVsProxy", function() { return CoreCommBbopBldgPoolUwVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
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

var CoreCommBbopBldgPoolUwVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommBbopBldgPoolUwVsProxy, _super);
    function CoreCommBbopBldgPoolUwVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBldgPoolUwVsProxy.prototype, "hoursOfOp", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBldgPoolUwVsProxy.prototype, "poolDepth", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBldgPoolUwVsProxy.prototype, "poolDepthMarked", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBldgPoolUwVsProxy.prototype, "poolLifeGuard", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBldgPoolUwVsProxy.prototype, "poolMaintenance", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBldgPoolUwVsProxy.prototype, "poolRestrictedAccess", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBldgPoolUwVsProxy.prototype, "poolRulesDisplayed", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBldgPoolUwVsProxy.prototype, "poolSlideDivingBoard", void 0);
    return CoreCommBbopBldgPoolUwVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.location.building.uw.ts":
/*!***********************************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.location.building.uw.ts ***!
  \***********************************************************************************/
/*! exports provided: CoreCommBbopBldgUwVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommBbopBldgUwVsProxy", function() { return CoreCommBbopBldgUwVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_bbop_location_building_uw_pool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.bbop.location.building.uw.pool */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.location.building.uw.pool.ts");
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


var CoreCommBbopBldgUwVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommBbopBldgUwVsProxy, _super);
    function CoreCommBbopBldgUwVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBldgUwVsProxy.prototype, "bldgEgress", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBldgUwVsProxy.prototype, "bldgEmergencyLights", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBldgUwVsProxy.prototype, "bldgExitSigns", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBldgUwVsProxy.prototype, "earthquakeCoverage", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBldgUwVsProxy.prototype, "playam", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([_com_arrow_model_def_corecomm_bbop_location_building_uw_pool__WEBPACK_IMPORTED_MODULE_1__["CoreCommBbopBldgPoolUwVsProxy"]])
    ], CoreCommBbopBldgUwVsProxy.prototype, "poolList", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBldgUwVsProxy.prototype, "roofMaterial", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBldgUwVsProxy.prototype, "roofUpdates", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBldgUwVsProxy.prototype, "sprinklerLeakage", void 0);
    return CoreCommBbopBldgUwVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.location.ts":
/*!***********************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.location.ts ***!
  \***********************************************************************/
/*! exports provided: CoreCommBbopBcegVsProxy, CoreCommBbopFirelineVsProxy, CoreCommBbopLocationPPCSubsetVsProxy, CoreCommBbopLocationPPCCallVsProxy, CoreCommBbopFloodVsProxy, CoreCommBbopDistToWaterVsProxy, CoreCommBbopLocationVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommBbopBcegVsProxy", function() { return CoreCommBbopBcegVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommBbopFirelineVsProxy", function() { return CoreCommBbopFirelineVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommBbopLocationPPCSubsetVsProxy", function() { return CoreCommBbopLocationPPCSubsetVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommBbopLocationPPCCallVsProxy", function() { return CoreCommBbopLocationPPCCallVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommBbopFloodVsProxy", function() { return CoreCommBbopFloodVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommBbopDistToWaterVsProxy", function() { return CoreCommBbopDistToWaterVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommBbopLocationVsProxy", function() { return CoreCommBbopLocationVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_bbop_location_building__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.bbop.location.building */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.location.building.ts");
/* harmony import */ var _com_arrow_model_def_corecomm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.ts");
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



var CoreCommBbopBcegVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommBbopBcegVsProxy, _super);
    function CoreCommBbopBcegVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBcegVsProxy.prototype, "bcegCode", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBcegVsProxy.prototype, "callResult", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopBcegVsProxy.prototype, "message", void 0);
    return CoreCommBbopBcegVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommBbopFirelineVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommBbopFirelineVsProxy, _super);
    function CoreCommBbopFirelineVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopFirelineVsProxy.prototype, "callResult", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopFirelineVsProxy.prototype, "message", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopFirelineVsProxy.prototype, "wildFireHazardScore", void 0);
    return CoreCommBbopFirelineVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommBbopLocationPPCSubsetVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommBbopLocationPPCSubsetVsProxy, _super);
    function CoreCommBbopLocationPPCSubsetVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCSubsetVsProxy.prototype, "alternativePpcCodes", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCSubsetVsProxy.prototype, "waterSupplyType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCSubsetVsProxy.prototype, "driveDistanceToRespondingFireStation", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCSubsetVsProxy.prototype, "firemansReliefCode", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCSubsetVsProxy.prototype, "fireProtectionArea", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCSubsetVsProxy.prototype, "fireSubscribeDistrCode", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCSubsetVsProxy.prototype, "footNote", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCSubsetVsProxy.prototype, "northCarolinaFdCertification", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCSubsetVsProxy.prototype, "county", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCSubsetVsProxy.prototype, "percentage", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCSubsetVsProxy.prototype, "pPCCode", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCSubsetVsProxy.prototype, "priorAlternativePPCCodes", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCSubsetVsProxy.prototype, "priorPPCCode", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCSubsetVsProxy.prototype, "respondingFireStation", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCSubsetVsProxy.prototype, "statisticalPlacementIndicator", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCSubsetVsProxy.prototype, "northDakotaFdNumber", void 0);
    return CoreCommBbopLocationPPCSubsetVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommBbopLocationPPCCallVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommBbopLocationPPCCallVsProxy, _super);
    function CoreCommBbopLocationPPCCallVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCCallVsProxy.prototype, "alternativePpcCodes", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCCallVsProxy.prototype, "wind", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCCallVsProxy.prototype, "bcegInfo", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCCallVsProxy.prototype, "californiaBrushFire", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCCallVsProxy.prototype, "californiaEarthquake", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCCallVsProxy.prototype, "callResult", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCCallVsProxy.prototype, "county", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCCallVsProxy.prototype, "crime", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCCallVsProxy.prototype, "driveDistanceToRespondingFireStation", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCCallVsProxy.prototype, "fireLine", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCCallVsProxy.prototype, "firemansReliefCode", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCCallVsProxy.prototype, "fireProtectionArea", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCCallVsProxy.prototype, "fireSubscribeDistrCode", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCCallVsProxy.prototype, "floodAssist", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCCallVsProxy.prototype, "footNote", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCCallVsProxy.prototype, "futureEffectivePpc", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCCallVsProxy.prototype, "isReportAvailable", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCCallVsProxy.prototype, "matchType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCCallVsProxy.prototype, "autoTerritories", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCCallVsProxy.prototype, "multiplePPCInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCCallVsProxy.prototype, "natCatReport", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCCallVsProxy.prototype, "northCarolinaFdCertification", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCCallVsProxy.prototype, "northDakotaFdNumber", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCCallVsProxy.prototype, "percentage", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCCallVsProxy.prototype, "pPCCode", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCCallVsProxy.prototype, "ppcList", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([CoreCommBbopLocationPPCSubsetVsProxy])
    ], CoreCommBbopLocationPPCCallVsProxy.prototype, "pPCList", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCCallVsProxy.prototype, "predominantPpc", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCCallVsProxy.prototype, "predominantPpcPercentage", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCCallVsProxy.prototype, "premiumTax", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCCallVsProxy.prototype, "priorAlternativePPCCodes", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCCallVsProxy.prototype, "priorPPCCode", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCCallVsProxy.prototype, "respondingFireStation", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCCallVsProxy.prototype, "split", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCCallVsProxy.prototype, "statisticalPlacementIndicator", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCCallVsProxy.prototype, "waterSupplyType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationPPCCallVsProxy.prototype, "message", void 0);
    return CoreCommBbopLocationPPCCallVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommBbopFloodVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommBbopFloodVsProxy, _super);
    function CoreCommBbopFloodVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopFloodVsProxy.prototype, "callResult", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopFloodVsProxy.prototype, "message", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopFloodVsProxy.prototype, "zone", void 0);
    return CoreCommBbopFloodVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommBbopDistToWaterVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommBbopDistToWaterVsProxy, _super);
    function CoreCommBbopDistToWaterVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopDistToWaterVsProxy.prototype, "callResult", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopDistToWaterVsProxy.prototype, "distanceToNearestBodyOfWater", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopDistToWaterVsProxy.prototype, "distanceToNearestOcean", void 0);
    return CoreCommBbopDistToWaterVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommBbopLocationVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommBbopLocationVsProxy, _super);
    function CoreCommBbopLocationVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommBbopBcegVsProxy)
    ], CoreCommBbopLocationVsProxy.prototype, "bceg", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationVsProxy.prototype, "zip", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationVsProxy.prototype, "classCodes", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommBbopDistToWaterVsProxy)
    ], CoreCommBbopLocationVsProxy.prototype, "distToWater", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationVsProxy.prototype, "finalProtectionClass", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommBbopFirelineVsProxy)
    ], CoreCommBbopLocationVsProxy.prototype, "fireline", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommBbopFloodVsProxy)
    ], CoreCommBbopLocationVsProxy.prototype, "flood", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationVsProxy.prototype, "isoClassGroups", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationVsProxy.prototype, "pPCAddressKey", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommBbopLocationPPCCallVsProxy)
    ], CoreCommBbopLocationVsProxy.prototype, "pPCCall", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationVsProxy.prototype, "rawProtectionClass", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationVsProxy.prototype, "waterSourceInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationVsProxy.prototype, "wHDeductiblePcnt", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm__WEBPACK_IMPORTED_MODULE_2__["CoreCommCrimeVsProxy"])
    ], CoreCommBbopLocationVsProxy.prototype, "crime", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationVsProxy.prototype, "address", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationVsProxy.prototype, "addressLine", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationVsProxy.prototype, "based", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationVsProxy.prototype, "buildings", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([_com_arrow_model_def_corecomm_bbop_location_building__WEBPACK_IMPORTED_MODULE_1__["CoreCommBbopBuildingVsProxy"]])
    ], CoreCommBbopLocationVsProxy.prototype, "buildingList", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationVsProxy.prototype, "countyName", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationVsProxy.prototype, "postDir", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationVsProxy.prototype, "preDir", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationVsProxy.prototype, "recordType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationVsProxy.prototype, "scrubberCalled", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationVsProxy.prototype, "scrubberResult", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationVsProxy.prototype, "secondaryName", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationVsProxy.prototype, "street", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationVsProxy.prototype, "streetNum", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationVsProxy.prototype, "streetType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationVsProxy.prototype, "unit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationVsProxy.prototype, "userCountyName", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationVsProxy.prototype, "zipAddOn", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationVsProxy.prototype, "addressLine2", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationVsProxy.prototype, "city", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationVsProxy.prototype, "state", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopLocationVsProxy.prototype, "confirmation", void 0);
    return CoreCommBbopLocationVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.ts":
/*!**************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.ts ***!
  \**************************************************************/
/*! exports provided: CoreCommBbopVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommBbopVsProxy", function() { return CoreCommBbopVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.common */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.common.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_bbop_coverages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.bbop.coverages */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.coverages.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_bbop_location__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.bbop.location */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.location.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_bbop_uw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.bbop.uw */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.uw.ts");
/* harmony import */ var _com_arrow_model_def_corecomm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.ts");
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






var CoreCommBbopVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommBbopVsProxy, _super);
    function CoreCommBbopVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopVsProxy.prototype, "addtlIntInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopVsProxy.prototype, "uniqueStatesList", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopVsProxy.prototype, "classCodes", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopVsProxy.prototype, "classGroups", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopVsProxy.prototype, "commission", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_common__WEBPACK_IMPORTED_MODULE_1__["CommissionMapVsProxy"])
    ], CoreCommBbopVsProxy.prototype, "commissionMap", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_bbop_coverages__WEBPACK_IMPORTED_MODULE_2__["CoreCommBbopCoveragesVsProxy"])
    ], CoreCommBbopVsProxy.prototype, "coverages", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopVsProxy.prototype, "fixedDeductible", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopVsProxy.prototype, "gLOccurrenceLimit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopVsProxy.prototype, "hasAieqip", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopVsProxy.prototype, "hasAiprem", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopVsProxy.prototype, "hasBldCov", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopVsProxy.prototype, "hasContowCov", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopVsProxy.prototype, "hasFuncBldValue", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopVsProxy.prototype, "hasLcompf", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopVsProxy.prototype, "hasLien", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopVsProxy.prototype, "hasLossPayee", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopVsProxy.prototype, "hasNMState", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopVsProxy.prototype, "automaticIncr", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopVsProxy.prototype, "hasPpCov", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopVsProxy.prototype, "hasReplacementCostValue", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopVsProxy.prototype, "isoClassGroups", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopVsProxy.prototype, "liabCovInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopVsProxy.prototype, "liaDed", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([_com_arrow_model_def_corecomm_bbop_location__WEBPACK_IMPORTED_MODULE_3__["CoreCommBbopLocationVsProxy"]])
    ], CoreCommBbopVsProxy.prototype, "locationList", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopVsProxy.prototype, "medicalExpenses", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopVsProxy.prototype, "otherCOA", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopVsProxy.prototype, "productsCOA", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopVsProxy.prototype, "proLiabInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopVsProxy.prototype, "propCovInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopVsProxy.prototype, "removeITVProvision", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopVsProxy.prototype, "statesNotAllowedStopGap", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopVsProxy.prototype, "triggerForms", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_bbop_uw__WEBPACK_IMPORTED_MODULE_4__["CoreCommBbopUwVsProxy"])
    ], CoreCommBbopVsProxy.prototype, "uw", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopVsProxy.prototype, "finalized", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm__WEBPACK_IMPORTED_MODULE_5__["InstecVsProxy"])
    ], CoreCommBbopVsProxy.prototype, "instec", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopVsProxy.prototype, "hasNoFuncBldValue", void 0);
    return CoreCommBbopVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.uw.claims.ts":
/*!************************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.uw.claims.ts ***!
  \************************************************************************/
/*! exports provided: CoreCommBbopUwClaimsVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommBbopUwClaimsVsProxy", function() { return CoreCommBbopUwClaimsVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
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

var CoreCommBbopUwClaimsVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommBbopUwClaimsVsProxy, _super);
    function CoreCommBbopUwClaimsVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwClaimsVsProxy.prototype, "asbestos", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwClaimsVsProxy.prototype, "wind", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwClaimsVsProxy.prototype, "employment", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwClaimsVsProxy.prototype, "fire", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwClaimsVsProxy.prototype, "molestation", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwClaimsVsProxy.prototype, "crime", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwClaimsVsProxy.prototype, "personalInjury", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwClaimsVsProxy.prototype, "pollution", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwClaimsVsProxy.prototype, "productsLiability", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwClaimsVsProxy.prototype, "professionalLiability", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwClaimsVsProxy.prototype, "nonowned", void 0);
    return CoreCommBbopUwClaimsVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.uw.condo.ts":
/*!***********************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.uw.condo.ts ***!
  \***********************************************************************/
/*! exports provided: CoreCommBbopUwCondoVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommBbopUwCondoVsProxy", function() { return CoreCommBbopUwCondoVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
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

var CoreCommBbopUwCondoVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommBbopUwCondoVsProxy, _super);
    function CoreCommBbopUwCondoVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwCondoVsProxy.prototype, "condoBoardMeetings", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwCondoVsProxy.prototype, "condoBoardOfDirectors", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwCondoVsProxy.prototype, "condoBylawReview", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwCondoVsProxy.prototype, "condoElectionChallenges", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwCondoVsProxy.prototype, "condoMeetingMinutes", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwCondoVsProxy.prototype, "condoMeetingMinutesCopies", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwCondoVsProxy.prototype, "condoOccupationPercentage", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwCondoVsProxy.prototype, "condoSpecialAssessments", void 0);
    return CoreCommBbopUwCondoVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.uw.contractor.ts":
/*!****************************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.uw.contractor.ts ***!
  \****************************************************************************/
/*! exports provided: CoreCommBbopContractorUwVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommBbopContractorUwVsProxy", function() { return CoreCommBbopContractorUwVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
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

var CoreCommBbopContractorUwVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommBbopContractorUwVsProxy, _super);
    function CoreCommBbopContractorUwVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopContractorUwVsProxy.prototype, "alarmWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopContractorUwVsProxy.prototype, "windowWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopContractorUwVsProxy.prototype, "annualReceiptTotal", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopContractorUwVsProxy.prototype, "boilerWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopContractorUwVsProxy.prototype, "commPaving", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopContractorUwVsProxy.prototype, "constructionDefectClaims", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopContractorUwVsProxy.prototype, "constructionWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopContractorUwVsProxy.prototype, "contractorOSHAViolations", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopContractorUwVsProxy.prototype, "craneRental", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopContractorUwVsProxy.prototype, "demolitionWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopContractorUwVsProxy.prototype, "eFISWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopContractorUwVsProxy.prototype, "electricalWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopContractorUwVsProxy.prototype, "emergencyWindowWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopContractorUwVsProxy.prototype, "exteriorWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopContractorUwVsProxy.prototype, "heaterWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopContractorUwVsProxy.prototype, "annualPayroll", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopContractorUwVsProxy.prototype, "leadWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopContractorUwVsProxy.prototype, "liens", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopContractorUwVsProxy.prototype, "liftRental", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopContractorUwVsProxy.prototype, "lifts", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopContractorUwVsProxy.prototype, "pollutantWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopContractorUwVsProxy.prototype, "receiptTypes", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopContractorUwVsProxy.prototype, "reconditioningWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopContractorUwVsProxy.prototype, "residentConstruction", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopContractorUwVsProxy.prototype, "scaffolding", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopContractorUwVsProxy.prototype, "securityDoorWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopContractorUwVsProxy.prototype, "securityGlassWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopContractorUwVsProxy.prototype, "septicWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopContractorUwVsProxy.prototype, "stainGlassWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopContractorUwVsProxy.prototype, "highPressureVesselWork", void 0);
    return CoreCommBbopContractorUwVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.uw.habitation.ts":
/*!****************************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.uw.habitation.ts ***!
  \****************************************************************************/
/*! exports provided: CoreCommBbopUwHabitationVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommBbopUwHabitationVsProxy", function() { return CoreCommBbopUwHabitationVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
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

var CoreCommBbopUwHabitationVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommBbopUwHabitationVsProxy, _super);
    function CoreCommBbopUwHabitationVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwHabitationVsProxy.prototype, "habitationAluminumWiring", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwHabitationVsProxy.prototype, "habitationConversion", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwHabitationVsProxy.prototype, "habitationLeadPaint", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwHabitationVsProxy.prototype, "habitationMilitaryHousing", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwHabitationVsProxy.prototype, "habitationStudentHousing", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwHabitationVsProxy.prototype, "habitationSubsidizedHousing", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwHabitationVsProxy.prototype, "hardwareModification", void 0);
    return CoreCommBbopUwHabitationVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.uw.laundry.ts":
/*!*************************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.uw.laundry.ts ***!
  \*************************************************************************/
/*! exports provided: CoreCommBbopUwLaundryVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommBbopUwLaundryVsProxy", function() { return CoreCommBbopUwLaundryVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
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

var CoreCommBbopUwLaundryVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommBbopUwLaundryVsProxy, _super);
    function CoreCommBbopUwLaundryVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwLaundryVsProxy.prototype, "laundryCommIndCleaning", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwLaundryVsProxy.prototype, "laundryDryCleaningSolvents", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwLaundryVsProxy.prototype, "laundryFlammableSolventQuantity", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwLaundryVsProxy.prototype, "laundryFurCleaning", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwLaundryVsProxy.prototype, "laundryRestorationCleaning", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwLaundryVsProxy.prototype, "laundryStoddardSolvent", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwLaundryVsProxy.prototype, "laundrySurveillance", void 0);
    return CoreCommBbopUwLaundryVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.uw.subcontractor.ts":
/*!*******************************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.uw.subcontractor.ts ***!
  \*******************************************************************************/
/*! exports provided: CoreCommBbopSubcontactorUwVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommBbopSubcontactorUwVsProxy", function() { return CoreCommBbopSubcontactorUwVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
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

var CoreCommBbopSubcontactorUwVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommBbopSubcontactorUwVsProxy, _super);
    function CoreCommBbopSubcontactorUwVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopSubcontactorUwVsProxy.prototype, "subcontractorHire", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopSubcontactorUwVsProxy.prototype, "subcontractorHireLimitofLiability", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopSubcontactorUwVsProxy.prototype, "subcontractorHirePercentageSubcontractWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopSubcontactorUwVsProxy.prototype, "subcontractorHireSubcontractorCertOfInsurance", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopSubcontactorUwVsProxy.prototype, "subcontractorHireWrittenContract", void 0);
    return CoreCommBbopSubcontactorUwVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.uw.ts":
/*!*****************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.uw.ts ***!
  \*****************************************************************/
/*! exports provided: CoreCommBbopUwLiqLiaVsProxy, CoreCommBbopUwRestaurantVsProxy, CoreCommBbopUwDataCompromiseAndCyberLiabilityVsProxy, CoreCommBbopUwCondoDirVsProxy, CoreCommBbopUwVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommBbopUwLiqLiaVsProxy", function() { return CoreCommBbopUwLiqLiaVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommBbopUwRestaurantVsProxy", function() { return CoreCommBbopUwRestaurantVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommBbopUwDataCompromiseAndCyberLiabilityVsProxy", function() { return CoreCommBbopUwDataCompromiseAndCyberLiabilityVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommBbopUwCondoDirVsProxy", function() { return CoreCommBbopUwCondoDirVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommBbopUwVsProxy", function() { return CoreCommBbopUwVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_bbop_uw_claims__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.bbop.uw.claims */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.uw.claims.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_bbop_uw_condo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.bbop.uw.condo */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.uw.condo.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_bbop_uw_contractor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.bbop.uw.contractor */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.uw.contractor.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_bbop_uw_habitation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.bbop.uw.habitation */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.uw.habitation.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_bbop_uw_laundry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.bbop.uw.laundry */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.uw.laundry.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_bbop_uw_subcontractor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.bbop.uw.subcontractor */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.uw.subcontractor.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_bbop_uw_wholesale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.bbop.uw.wholesale */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.uw.wholesale.ts");
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








var CoreCommBbopUwLiqLiaVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommBbopUwLiqLiaVsProxy, _super);
    function CoreCommBbopUwLiqLiaVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwLiqLiaVsProxy.prototype, "liqLiaBarOpen", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwLiqLiaVsProxy.prototype, "liqLiaBartenderTraining", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwLiqLiaVsProxy.prototype, "liqLiaCutoffGuidelines", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwLiqLiaVsProxy.prototype, "liqLiaHappyHour", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwLiqLiaVsProxy.prototype, "liqLiaLicenseSuspended", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwLiqLiaVsProxy.prototype, "liqLiaLiquorClaims", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwLiqLiaVsProxy.prototype, "liqLiaLiquorLosses", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwLiqLiaVsProxy.prototype, "liqLiaLiquorViolations", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwLiqLiaVsProxy.prototype, "liqLiaPermit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwLiqLiaVsProxy.prototype, "liqLiaPermitName", void 0);
    return CoreCommBbopUwLiqLiaVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommBbopUwRestaurantVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommBbopUwRestaurantVsProxy, _super);
    function CoreCommBbopUwRestaurantVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwRestaurantVsProxy.prototype, "restaurantAlcohol", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwRestaurantVsProxy.prototype, "restaurantBouncers", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwRestaurantVsProxy.prototype, "restaurantEntertainment", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwRestaurantVsProxy.prototype, "restaurantFoodDrinkClaims", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwRestaurantVsProxy.prototype, "restaurantGamblingDevices", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwRestaurantVsProxy.prototype, "restaurantHealthCodeViolations", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwRestaurantVsProxy.prototype, "restaurantOpenFlames", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwRestaurantVsProxy.prototype, "restaurantOperations", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwRestaurantVsProxy.prototype, "restaurantSeasonalClosing", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwRestaurantVsProxy.prototype, "restaurantStandards", void 0);
    return CoreCommBbopUwRestaurantVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommBbopUwDataCompromiseAndCyberLiabilityVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommBbopUwDataCompromiseAndCyberLiabilityVsProxy, _super);
    function CoreCommBbopUwDataCompromiseAndCyberLiabilityVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwDataCompromiseAndCyberLiabilityVsProxy.prototype, "backgroundScreening", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwDataCompromiseAndCyberLiabilityVsProxy.prototype, "computerSecurity", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwDataCompromiseAndCyberLiabilityVsProxy.prototype, "docRetentionDestruction", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwDataCompromiseAndCyberLiabilityVsProxy.prototype, "hasCIOCSO", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwDataCompromiseAndCyberLiabilityVsProxy.prototype, "informationRestrictions", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwDataCompromiseAndCyberLiabilityVsProxy.prototype, "personalInfoBreach", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwDataCompromiseAndCyberLiabilityVsProxy.prototype, "recordSecurity", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwDataCompromiseAndCyberLiabilityVsProxy.prototype, "securityPolicy", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwDataCompromiseAndCyberLiabilityVsProxy.prototype, "securityTraining", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwDataCompromiseAndCyberLiabilityVsProxy.prototype, "uniqueLogins", void 0);
    return CoreCommBbopUwDataCompromiseAndCyberLiabilityVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommBbopUwCondoDirVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommBbopUwCondoDirVsProxy, _super);
    function CoreCommBbopUwCondoDirVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwCondoDirVsProxy.prototype, "dOLiabBoardDeveloper", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwCondoDirVsProxy.prototype, "dOLiabBusinessInForce", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwCondoDirVsProxy.prototype, "dOLiabClaims", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwCondoDirVsProxy.prototype, "dOLiabDefectClaims", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwCondoDirVsProxy.prototype, "dOLiabRefuseCov", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwCondoDirVsProxy.prototype, "dOLiabUndevelopedLotPercent", void 0);
    return CoreCommBbopUwCondoDirVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommBbopUwVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommBbopUwVsProxy, _super);
    function CoreCommBbopUwVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "antiquesRefinishingWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_bbop_uw_wholesale__WEBPACK_IMPORTED_MODULE_7__["CoreCommBbopUwWholesaleVsProxy"])
    ], CoreCommBbopUwVsProxy.prototype, "wholesaleUw", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "barberBeautyLicense", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "barberEstheticianServices", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "barberExperience", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "barberSpas", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "barberTanningBeds", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "beauticianEstheticianServices", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "beauticianExperience", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "bizOwner", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "cancellationHistory", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "certificatesOfInsurance", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_bbop_uw_claims__WEBPACK_IMPORTED_MODULE_1__["CoreCommBbopUwClaimsVsProxy"])
    ], CoreCommBbopUwVsProxy.prototype, "claims", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommBbopUwCondoDirVsProxy)
    ], CoreCommBbopUwVsProxy.prototype, "condoDirUw", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_bbop_uw_condo__WEBPACK_IMPORTED_MODULE_2__["CoreCommBbopUwCondoVsProxy"])
    ], CoreCommBbopUwVsProxy.prototype, "condoUw", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_bbop_uw_contractor__WEBPACK_IMPORTED_MODULE_3__["CoreCommBbopContractorUwVsProxy"])
    ], CoreCommBbopUwVsProxy.prototype, "contractorUw", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "currentOwnerYearsInBiz", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommBbopUwDataCompromiseAndCyberLiabilityVsProxy)
    ], CoreCommBbopUwVsProxy.prototype, "dataCompAndCyberLiabUw", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "employeeTeamParticipation", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "employmentPraticesLawFirm", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "funeralDirectorLicense", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "funeralMorticianExperience", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_bbop_uw_habitation__WEBPACK_IMPORTED_MODULE_4__["CoreCommBbopUwHabitationVsProxy"])
    ], CoreCommBbopUwVsProxy.prototype, "habitationUw", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "hardwareModification", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "hoursOfOp", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_bbop_uw_laundry__WEBPACK_IMPORTED_MODULE_5__["CoreCommBbopUwLaundryVsProxy"])
    ], CoreCommBbopUwVsProxy.prototype, "laundryUw", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommBbopUwLiqLiaVsProxy)
    ], CoreCommBbopUwVsProxy.prototype, "liqLiaUw", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "nonOwnEmployeeLiabInsurance", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "nonOwnVehicleBusinessUse", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "numBOPClaims", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "numBOPClaimsDescription", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "numLargeClaims", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "numLargeClaimsDescription", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "occupancyPercentage", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "artPieceValue", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "officeAnimalTreatment", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "opticalLicense", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "opticalServices", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "opticianExperience", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "petOffPremisesGrooming", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "pharmacistsExperience", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "pharmacistsLicense", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "pharmacistsMixingDrugs", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "photographersAerialServices", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "ponds", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "refrigerationSalesType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "relabelRepackage", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "rentBorrowEquip", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommBbopUwRestaurantVsProxy)
    ], CoreCommBbopUwVsProxy.prototype, "restaurantUw", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "retailAssembleModify", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "retailDelivery", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "retailMarijuanaDistribution", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "retailRepairServices", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "selfStorageFlammableMaterials", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "selfStorageNonFormalLeaseRentals", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "selfStorageTenantOperatedBusinesses", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "specializedEqpVal", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_bbop_uw_subcontractor__WEBPACK_IMPORTED_MODULE_6__["CoreCommBbopSubcontactorUwVsProxy"])
    ], CoreCommBbopUwVsProxy.prototype, "subcontractor", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "teamSponsor", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "tFHoursofOps", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "vacantLand", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "vetEmployeeExperience", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "vetLicense", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "wholesaleProducts", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "wholesaleReceiptTypes", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "wholesaleRelabeling", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "wholesaleRepresentative", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "wholesaleSupplier", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwVsProxy.prototype, "officeAnimalBoardingServices", void 0);
    return CoreCommBbopUwVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.uw.wholesale.ts":
/*!***************************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.uw.wholesale.ts ***!
  \***************************************************************************/
/*! exports provided: CoreCommBbopUwWholesaleVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommBbopUwWholesaleVsProxy", function() { return CoreCommBbopUwWholesaleVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
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

var CoreCommBbopUwWholesaleVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommBbopUwWholesaleVsProxy, _super);
    function CoreCommBbopUwWholesaleVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwWholesaleVsProxy.prototype, "aerospace", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwWholesaleVsProxy.prototype, "watercraft", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwWholesaleVsProxy.prototype, "aircraft", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwWholesaleVsProxy.prototype, "amusementEquipment", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwWholesaleVsProxy.prototype, "asbestos", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwWholesaleVsProxy.prototype, "automotive", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwWholesaleVsProxy.prototype, "bloodBanks", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwWholesaleVsProxy.prototype, "chemicals", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwWholesaleVsProxy.prototype, "ecigs", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwWholesaleVsProxy.prototype, "explosives", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwWholesaleVsProxy.prototype, "firearms", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwWholesaleVsProxy.prototype, "fireworks", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwWholesaleVsProxy.prototype, "agrEquipment", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwWholesaleVsProxy.prototype, "marijuana", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwWholesaleVsProxy.prototype, "medEquipment", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwWholesaleVsProxy.prototype, "militaryEquipment", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwWholesaleVsProxy.prototype, "miningEquipment", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwWholesaleVsProxy.prototype, "nuclearEnergy", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwWholesaleVsProxy.prototype, "parachutes", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwWholesaleVsProxy.prototype, "railroad", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwWholesaleVsProxy.prototype, "satellites", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwWholesaleVsProxy.prototype, "scaffolding", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwWholesaleVsProxy.prototype, "tobacco", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopUwWholesaleVsProxy.prototype, "indEquipment", void 0);
    return CoreCommBbopUwWholesaleVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.ccpk.commission.ts":
/*!*************************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.ccpk.commission.ts ***!
  \*************************************************************************/
/*! exports provided: CommissionMapVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommissionMapVsProxy", function() { return CommissionMapVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
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

var CommissionMapVsProxy = /** @class */ (function (_super) {
    __extends(CommissionMapVsProxy, _super);
    function CommissionMapVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CommissionMapVsProxy.prototype, "agencyBill100", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CommissionMapVsProxy.prototype, "directBill100", void 0);
    return CommissionMapVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.ccpk.ts":
/*!**************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.ccpk.ts ***!
  \**************************************************************/
/*! exports provided: CoreCommCcpkVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommCcpkVsProxy", function() { return CoreCommCcpkVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_ccpk_commission__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.ccpk.commission */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.ccpk.commission.ts");
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


var CoreCommCcpkVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommCcpkVsProxy, _super);
    function CoreCommCcpkVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_ccpk_commission__WEBPACK_IMPORTED_MODULE_1__["CommissionMapVsProxy"])
    ], CoreCommCcpkVsProxy.prototype, "commissionMap", void 0);
    return CoreCommCcpkVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.cmau.common.ts":
/*!*********************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.cmau.common.ts ***!
  \*********************************************************************/
/*! exports provided: CmauCoverageInfoVs$IMedCoverageProxy, CmauCoverageInfoVs$IDoccCoverage$IIndividualProxy, CmauCoverageInfoVs$IHaCoverageProxy, CmauCoverageInfoVs$IEnocCoverageProxy, CmauSymbolsProxy, CmauUMUimVsProxy, CmauCoverageInfoVs$IDoccCoverageProxy, CmauCoverageInfoVs$IEmplessorProxy, CmauUMCoverageVsProxy, CmauCoverageInfoVs$ICoveragePersorgProxy, CmauUIMCoverageVsProxy, CmauCoverageInfoVs$IWaiverOfSubrogationProxy, CmauCoverageInfoVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmauCoverageInfoVs$IMedCoverageProxy", function() { return CmauCoverageInfoVs$IMedCoverageProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmauCoverageInfoVs$IDoccCoverage$IIndividualProxy", function() { return CmauCoverageInfoVs$IDoccCoverage$IIndividualProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmauCoverageInfoVs$IHaCoverageProxy", function() { return CmauCoverageInfoVs$IHaCoverageProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmauCoverageInfoVs$IEnocCoverageProxy", function() { return CmauCoverageInfoVs$IEnocCoverageProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmauSymbolsProxy", function() { return CmauSymbolsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmauUMUimVsProxy", function() { return CmauUMUimVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmauCoverageInfoVs$IDoccCoverageProxy", function() { return CmauCoverageInfoVs$IDoccCoverageProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmauCoverageInfoVs$IEmplessorProxy", function() { return CmauCoverageInfoVs$IEmplessorProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmauUMCoverageVsProxy", function() { return CmauUMCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmauCoverageInfoVs$ICoveragePersorgProxy", function() { return CmauCoverageInfoVs$ICoveragePersorgProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmauUIMCoverageVsProxy", function() { return CmauUIMCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmauCoverageInfoVs$IWaiverOfSubrogationProxy", function() { return CmauCoverageInfoVs$IWaiverOfSubrogationProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmauCoverageInfoVsProxy", function() { return CmauCoverageInfoVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.common */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.common.ts");
/* harmony import */ var _com_arrow_model_def_corecomm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_cmau_location_car_coverages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.cmau.location.car.coverages */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.cmau.location.car.coverages.ts");
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




var CmauCoverageInfoVs$IMedCoverageProxy = /** @class */ (function (_super) {
    __extends(CmauCoverageInfoVs$IMedCoverageProxy, _super);
    function CmauCoverageInfoVs$IMedCoverageProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IMedCoverageProxy.prototype, "medLimit", void 0);
    return CmauCoverageInfoVs$IMedCoverageProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CmauCoverageInfoVs$IDoccCoverage$IIndividualProxy = /** @class */ (function (_super) {
    __extends(CmauCoverageInfoVs$IDoccCoverage$IIndividualProxy, _super);
    function CmauCoverageInfoVs$IDoccCoverage$IIndividualProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IDoccCoverage$IIndividualProxy.prototype, "name", void 0);
    return CmauCoverageInfoVs$IDoccCoverage$IIndividualProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CmauCoverageInfoVs$IHaCoverageProxy = /** @class */ (function (_super) {
    __extends(CmauCoverageInfoVs$IHaCoverageProxy, _super);
    function CmauCoverageInfoVs$IHaCoverageProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IHaCoverageProxy.prototype, "collisionDeductible", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IHaCoverageProxy.prototype, "includeInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IHaCoverageProxy.prototype, "costOfHire", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IHaCoverageProxy.prototype, "limit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IHaCoverageProxy.prototype, "medicalPaymentLimit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IHaCoverageProxy.prototype, "uimIncludeInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IHaCoverageProxy.prototype, "uimlimitcsl", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IHaCoverageProxy.prototype, "comprehensiveDeductible", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IHaCoverageProxy.prototype, "umlimitcsl", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IHaCoverageProxy.prototype, "umlimitspl", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IHaCoverageProxy.prototype, "underinsuredMotoristType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IHaCoverageProxy.prototype, "uninsuredMotoristType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IHaCoverageProxy.prototype, "zipCode", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IHaCoverageProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IHaCoverageProxy.prototype, "uimlimitspl", void 0);
    return CmauCoverageInfoVs$IHaCoverageProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CmauCoverageInfoVs$IEnocCoverageProxy = /** @class */ (function (_super) {
    __extends(CmauCoverageInfoVs$IEnocCoverageProxy, _super);
    function CmauCoverageInfoVs$IEnocCoverageProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IEnocCoverageProxy.prototype, "medicalPaymentLimit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IEnocCoverageProxy.prototype, "includeInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IEnocCoverageProxy.prototype, "numberofpartners", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IEnocCoverageProxy.prototype, "regbususe", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IEnocCoverageProxy.prototype, "uimIncludeInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IEnocCoverageProxy.prototype, "uimlimitcsl", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IEnocCoverageProxy.prototype, "uimlimitspl", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IEnocCoverageProxy.prototype, "numberofemployees", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IEnocCoverageProxy.prototype, "umlimitspl", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IEnocCoverageProxy.prototype, "underinsuredMotoristType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IEnocCoverageProxy.prototype, "uninsuredMotoristType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IEnocCoverageProxy.prototype, "useEndo", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IEnocCoverageProxy.prototype, "zipCode", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IEnocCoverageProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IEnocCoverageProxy.prototype, "umlimitcsl", void 0);
    return CmauCoverageInfoVs$IEnocCoverageProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CmauSymbolsProxy = /** @class */ (function (_super) {
    __extends(CmauSymbolsProxy, _super);
    function CmauSymbolsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauSymbolsProxy.prototype, "addedPIP", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauSymbolsProxy.prototype, "uM", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauSymbolsProxy.prototype, "comp", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauSymbolsProxy.prototype, "liability", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauSymbolsProxy.prototype, "medExpenses", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauSymbolsProxy.prototype, "medpay", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauSymbolsProxy.prototype, "coll", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauSymbolsProxy.prototype, "propertyProtection", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauSymbolsProxy.prototype, "specifiedPerils", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauSymbolsProxy.prototype, "towing", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauSymbolsProxy.prototype, "uIM", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauSymbolsProxy.prototype, "pIP", void 0);
    return CmauSymbolsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CmauUMUimVsProxy = /** @class */ (function (_super) {
    __extends(CmauUMUimVsProxy, _super);
    function CmauUMUimVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauUMUimVsProxy.prototype, "liabilityType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauUMUimVsProxy.prototype, "limitCSL", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauUMUimVsProxy.prototype, "limitPD", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauUMUimVsProxy.prototype, "limitSPL", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauUMUimVsProxy.prototype, "nonStackedInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauUMUimVsProxy.prototype, "propertyDamageInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauUMUimVsProxy.prototype, "stacking", void 0);
    return CmauUMUimVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CmauCoverageInfoVs$IDoccCoverageProxy = /** @class */ (function (_super) {
    __extends(CmauCoverageInfoVs$IDoccCoverageProxy, _super);
    function CmauCoverageInfoVs$IDoccCoverageProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IDoccCoverageProxy.prototype, "colded", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IDoccCoverageProxy.prototype, "includeInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([CmauCoverageInfoVs$IDoccCoverage$IIndividualProxy])
    ], CmauCoverageInfoVs$IDoccCoverageProxy.prototype, "individualsList", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IDoccCoverageProxy.prototype, "liabilityType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IDoccCoverageProxy.prototype, "liabLimit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IDoccCoverageProxy.prototype, "limitCSL", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IDoccCoverageProxy.prototype, "limitSPL", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IDoccCoverageProxy.prototype, "medpayLimit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IDoccCoverageProxy.prototype, "otcded", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IDoccCoverageProxy.prototype, "propertyDamageDeductible", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IDoccCoverageProxy.prototype, "uimConversion", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IDoccCoverageProxy.prototype, "includesUnderinsuredInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IDoccCoverageProxy.prototype, "uIMLiabilityType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IDoccCoverageProxy.prototype, "uimlimitcsl", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IDoccCoverageProxy.prototype, "uimlimitspl", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IDoccCoverageProxy.prototype, "umpdlimit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IDoccCoverageProxy.prototype, "underinsuredMotoristPropertyDamageInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IDoccCoverageProxy.prototype, "underinsuredMotoristPropertyDamageLimit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IDoccCoverageProxy.prototype, "uninsuredMotoristPropertyDamageInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IDoccCoverageProxy.prototype, "uninsuredMotoristPropertyDamageLimit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IDoccCoverageProxy.prototype, "zipCode", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IDoccCoverageProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IDoccCoverageProxy.prototype, "uimIncludeInd", void 0);
    return CmauCoverageInfoVs$IDoccCoverageProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CmauCoverageInfoVs$IEmplessorProxy = /** @class */ (function (_super) {
    __extends(CmauCoverageInfoVs$IEmplessorProxy, _super);
    function CmauCoverageInfoVs$IEmplessorProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IEmplessorProxy.prototype, "autodescription", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IEmplessorProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IEmplessorProxy.prototype, "includeInd", void 0);
    return CmauCoverageInfoVs$IEmplessorProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CmauUMCoverageVsProxy = /** @class */ (function (_super) {
    __extends(CmauUMCoverageVsProxy, _super);
    function CmauUMCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauUMCoverageVsProxy.prototype, "includesUnderinsuredInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauUMCoverageVsProxy.prototype, "propertyDamageDed", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauUMCoverageVsProxy.prototype, "liabilityType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauUMCoverageVsProxy.prototype, "limitCSL", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauUMCoverageVsProxy.prototype, "limitPD", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauUMCoverageVsProxy.prototype, "limitSPL", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauUMCoverageVsProxy.prototype, "nonStackedInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauUMCoverageVsProxy.prototype, "propertyDamageInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauUMCoverageVsProxy.prototype, "stacking", void 0);
    return CmauUMCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CmauCoverageInfoVs$ICoveragePersorgProxy = /** @class */ (function (_super) {
    __extends(CmauCoverageInfoVs$ICoveragePersorgProxy, _super);
    function CmauCoverageInfoVs$ICoveragePersorgProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$ICoveragePersorgProxy.prototype, "entity", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$ICoveragePersorgProxy.prototype, "num", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([_com_arrow_model_def_corecomm_common__WEBPACK_IMPORTED_MODULE_1__["PersorgProxy"]])
    ], CmauCoverageInfoVs$ICoveragePersorgProxy.prototype, "persorg", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$ICoveragePersorgProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$ICoveragePersorgProxy.prototype, "includeInd", void 0);
    return CmauCoverageInfoVs$ICoveragePersorgProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CmauUIMCoverageVsProxy = /** @class */ (function (_super) {
    __extends(CmauUIMCoverageVsProxy, _super);
    function CmauUIMCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauUIMCoverageVsProxy.prototype, "conversion", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauUIMCoverageVsProxy.prototype, "includeInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauUIMCoverageVsProxy.prototype, "liabilityType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauUIMCoverageVsProxy.prototype, "limitCSL", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauUIMCoverageVsProxy.prototype, "limitPD", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauUIMCoverageVsProxy.prototype, "rejectUimInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauUIMCoverageVsProxy.prototype, "nonStackedInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauUIMCoverageVsProxy.prototype, "propertyDamageInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauUIMCoverageVsProxy.prototype, "stacking", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauUIMCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauUIMCoverageVsProxy.prototype, "limitSPL", void 0);
    return CmauUIMCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CmauCoverageInfoVs$IWaiverOfSubrogationProxy = /** @class */ (function (_super) {
    __extends(CmauCoverageInfoVs$IWaiverOfSubrogationProxy, _super);
    function CmauCoverageInfoVs$IWaiverOfSubrogationProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IWaiverOfSubrogationProxy.prototype, "blanketWithExtensions", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IWaiverOfSubrogationProxy.prototype, "blanketWithoutExtensions", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IWaiverOfSubrogationProxy.prototype, "entity", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IWaiverOfSubrogationProxy.prototype, "num", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([_com_arrow_model_def_corecomm_common__WEBPACK_IMPORTED_MODULE_1__["PersorgProxy"]])
    ], CmauCoverageInfoVs$IWaiverOfSubrogationProxy.prototype, "persorg", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IWaiverOfSubrogationProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVs$IWaiverOfSubrogationProxy.prototype, "includeInd", void 0);
    return CmauCoverageInfoVs$IWaiverOfSubrogationProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CmauCoverageInfoVsProxy = /** @class */ (function (_super) {
    __extends(CmauCoverageInfoVsProxy, _super);
    function CmauCoverageInfoVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVsProxy.prototype, "antiTheftDeviceCodeKY", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CmauCoverageInfoVs$IWaiverOfSubrogationProxy)
    ], CmauCoverageInfoVsProxy.prototype, "waiverOfSubrogation", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVsProxy.prototype, "category1", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVsProxy.prototype, "category2", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVsProxy.prototype, "category3", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVsProxy.prototype, "category4", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVsProxy.prototype, "collisionDeductible", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVsProxy.prototype, "comprehensiveDeductible", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CmauCoverageInfoVs$ICoveragePersorgProxy)
    ], CmauCoverageInfoVsProxy.prototype, "designatedInsured", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CmauCoverageInfoVs$IDoccCoverageProxy)
    ], CmauCoverageInfoVsProxy.prototype, "doccCoverage", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm__WEBPACK_IMPORTED_MODULE_2__["CoverageProxy"])
    ], CmauCoverageInfoVsProxy.prototype, "emphired", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CmauCoverageInfoVs$IEmplessorProxy)
    ], CmauCoverageInfoVsProxy.prototype, "employeeAsLessorCoverage", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVsProxy.prototype, "fullGlassCoverageMN", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVsProxy.prototype, "glassBreakageApplicabilityCT", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CmauCoverageInfoVs$IHaCoverageProxy)
    ], CmauCoverageInfoVsProxy.prototype, "haCoverage", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVsProxy.prototype, "antiTheftDiscountMN", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVsProxy.prototype, "hasFiveMphBumpers", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVsProxy.prototype, "hasTractionControlSystems", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm__WEBPACK_IMPORTED_MODULE_2__["CoverageProxy"])
    ], CmauCoverageInfoVsProxy.prototype, "indvendo", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm__WEBPACK_IMPORTED_MODULE_2__["CoverageProxy"])
    ], CmauCoverageInfoVsProxy.prototype, "lia", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm__WEBPACK_IMPORTED_MODULE_2__["CoverageProxy"])
    ], CmauCoverageInfoVsProxy.prototype, "liab", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm__WEBPACK_IMPORTED_MODULE_2__["CoverageProxy"])
    ], CmauCoverageInfoVsProxy.prototype, "limmex", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CmauCoverageInfoVs$IMedCoverageProxy)
    ], CmauCoverageInfoVsProxy.prototype, "medCoverage", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CmauCoverageInfoVs$IEnocCoverageProxy)
    ], CmauCoverageInfoVsProxy.prototype, "nonOwnedAuto", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CmauCoverageInfoVs$ICoveragePersorgProxy)
    ], CmauCoverageInfoVsProxy.prototype, "noticeToOthersOfCancellation", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_location_car_coverages__WEBPACK_IMPORTED_MODULE_3__["PipCoverageVsProxy"])
    ], CmauCoverageInfoVsProxy.prototype, "pipCoverage", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CmauSymbolsProxy)
    ], CmauCoverageInfoVsProxy.prototype, "symbols", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVsProxy.prototype, "towlabor", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CmauUIMCoverageVsProxy)
    ], CmauCoverageInfoVsProxy.prototype, "uIMCoverage", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CmauUMCoverageVsProxy)
    ], CmauCoverageInfoVsProxy.prototype, "uMCoverage", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauCoverageInfoVsProxy.prototype, "hasAntiLockBrakingSystems", void 0);
    return CmauCoverageInfoVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.cmau.coverages.ts":
/*!************************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.cmau.coverages.ts ***!
  \************************************************************************/
/*! exports provided: CmauOtherCoverageVsProxy, CoreCommCmauCoveragesVs$ITerrorCoverageProxy, CoreCommCmauCoveragesVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmauOtherCoverageVsProxy", function() { return CmauOtherCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommCmauCoveragesVs$ITerrorCoverageProxy", function() { return CoreCommCmauCoveragesVs$ITerrorCoverageProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommCmauCoveragesVsProxy", function() { return CoreCommCmauCoveragesVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
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

var CmauOtherCoverageVsProxy = /** @class */ (function (_super) {
    __extends(CmauOtherCoverageVsProxy, _super);
    function CmauOtherCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauOtherCoverageVsProxy.prototype, "includedInd", void 0);
    return CmauOtherCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommCmauCoveragesVs$ITerrorCoverageProxy = /** @class */ (function (_super) {
    __extends(CoreCommCmauCoveragesVs$ITerrorCoverageProxy, _super);
    function CoreCommCmauCoveragesVs$ITerrorCoverageProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCoveragesVs$ITerrorCoverageProxy.prototype, "allother", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCoveragesVs$ITerrorCoverageProxy.prototype, "premtype", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCoveragesVs$ITerrorCoverageProxy.prototype, "includedInd", void 0);
    return CoreCommCmauCoveragesVs$ITerrorCoverageProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommCmauCoveragesVsProxy_otherCoverages_Impl = /** @class */ (function (_super) {
    __extends(CoreCommCmauCoveragesVsProxy_otherCoverages_Impl, _super);
    function CoreCommCmauCoveragesVsProxy_otherCoverages_Impl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CmauOtherCoverageVsProxy)
    ], CoreCommCmauCoveragesVsProxy_otherCoverages_Impl.prototype, "basketdedendo", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CmauOtherCoverageVsProxy)
    ], CoreCommCmauCoveragesVsProxy_otherCoverages_Impl.prototype, "endoextension", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CmauOtherCoverageVsProxy)
    ], CoreCommCmauCoveragesVsProxy_otherCoverages_Impl.prototype, "hospitalendoextension", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CmauOtherCoverageVsProxy)
    ], CoreCommCmauCoveragesVsProxy_otherCoverages_Impl.prototype, "hvyendoextension", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CmauOtherCoverageVsProxy)
    ], CoreCommCmauCoveragesVsProxy_otherCoverages_Impl.prototype, "movingendoextension", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CmauOtherCoverageVsProxy)
    ], CoreCommCmauCoveragesVsProxy_otherCoverages_Impl.prototype, "enhvyendoextension", void 0);
    return CoreCommCmauCoveragesVsProxy_otherCoverages_Impl;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));
var CoreCommCmauCoveragesVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommCmauCoveragesVsProxy, _super);
    function CoreCommCmauCoveragesVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCmauCoveragesVsProxy_otherCoverages_Impl)
    ], CoreCommCmauCoveragesVsProxy.prototype, "otherCoverages", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCmauCoveragesVs$ITerrorCoverageProxy)
    ], CoreCommCmauCoveragesVsProxy.prototype, "terrorCoverage", void 0);
    return CoreCommCmauCoveragesVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.cmau.driver.ts":
/*!*********************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.cmau.driver.ts ***!
  \*********************************************************************/
/*! exports provided: CoreCommCmauDriverVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommCmauDriverVsProxy", function() { return CoreCommCmauDriverVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
/* harmony import */ var _com_arrow_model_common_driver_mvr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./com.arrow.model.common.driver.mvr */ "./src/ts/gen/impl/com.arrow.model.common.driver.mvr.ts");
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


var CoreCommCmauDriverVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommCmauDriverVsProxy, _super);
    function CoreCommCmauDriverVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauDriverVsProxy.prototype, "birthdate", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauDriverVsProxy.prototype, "ordermvr", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauDriverVsProxy.prototype, "driverAttractDate", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauDriverVsProxy.prototype, "driverAttractKey", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauDriverVsProxy.prototype, "driverAttractScore", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauDriverVsProxy.prototype, "excluded", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauDriverVsProxy.prototype, "hiredate", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauDriverVsProxy.prototype, "hireddate", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauDriverVsProxy.prototype, "delete", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauDriverVsProxy.prototype, "firstname", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauDriverVsProxy.prototype, "gender", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauDriverVsProxy.prototype, "lastname", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauDriverVsProxy.prototype, "licenseNumber", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauDriverVsProxy.prototype, "licenseState", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauDriverVsProxy.prototype, "licstatus", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_common_driver_mvr__WEBPACK_IMPORTED_MODULE_1__["MvrVsProxy"])
    ], CoreCommCmauDriverVsProxy.prototype, "mvr", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauDriverVsProxy.prototype, "relationshipToInsured", void 0);
    return CoreCommCmauDriverVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.cmau.location.car.coverages.ts":
/*!*************************************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.cmau.location.car.coverages.ts ***!
  \*************************************************************************************/
/*! exports provided: PipCoverageWrapperProxy, PipCoverageVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipCoverageWrapperProxy", function() { return PipCoverageWrapperProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipCoverageVsProxy", function() { return PipCoverageVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
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

var PipCoverageWrapperProxy = /** @class */ (function (_super) {
    __extends(PipCoverageWrapperProxy, _super);
    function PipCoverageWrapperProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageWrapperProxy.prototype, "addedbpipoptioncd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageWrapperProxy.prototype, "tortLimitInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageWrapperProxy.prototype, "addedpipoption", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageWrapperProxy.prototype, "broadpipnum", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageWrapperProxy.prototype, "ded", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageWrapperProxy.prototype, "addedbroadpipnum", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageWrapperProxy.prototype, "medexpSecondaryInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageWrapperProxy.prototype, "nonMedInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageWrapperProxy.prototype, "pPtypeInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageWrapperProxy.prototype, "residentNum", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageWrapperProxy.prototype, "limitMedexp", void 0);
    return PipCoverageWrapperProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var PipCoverageVsProxy = /** @class */ (function (_super) {
    __extends(PipCoverageVsProxy, _super);
    function PipCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "accDeathIndAR", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "workLossIndAR", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "additionalBroadenedPipKS", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "additionalBroadenedPipKY", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "additionalBroadenedPipMN", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "additionalBroadenedPipND", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "additionalBroadenedPipNJ", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "additionalPipKS", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "additionalPipKY", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "additionalPipMN", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "additionalPipND", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "additionalPipNJ", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "additionalPipUT", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "benefitsTypePA", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "benefitsTypeWA", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "combinationBenefitsLimitPA", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "coverageTypeKY", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "coveredByWorkCompIndKY", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "coveredByWorkCompIndMN", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "coveredByWorkCompIndND", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "coveredByWorkCompIndPA", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "coveredByWorkCompIndUT", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "deductibleApplicantsOR", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "deductibleKY", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "deductibleMN", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "deductibleNJ", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "deductibleOR", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "eliminateNonMedExpensesIndNJ", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "eliminateTortLimitationIndNJ", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "employeeOperatedIndKY", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "employeeOperatedIndMN", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "employeeOperatedIndND", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "accidentalDeathBenefitsLimitPA", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "employeeOperatedIndOR", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "employeeOperatedIndPA", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "employeeOperatedIndUT", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "exclusionLossIncomeIndUT", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "extraMedicalExpenseLimitPA", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "funeralBenefitsLimitPA", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "includeInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "limTX", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "medExpenseSecondaryOptionIndNJ", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "medExpIndAR", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "medExpLimAR", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "medicalBenefitsLimitPA", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "medicalExpenseBenefitLimitNJ", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "numberOfAddedPipIndividualsUT", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "numberOfAddedPipResidentRelativesNJ", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "numberOfAdditionalBroadenedPipIndividualsKS", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "numberOfAdditionalBroadenedPipIndividualsKY", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "numberOfAdditionalBroadenedPipIndividualsMN", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "numberOfAdditionalBroadenedPipIndividualsND", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "numberOfAdditionalBroadenedPipIndividualsNJ", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "numberOfBroadenedPipIndividualsKS", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "numberOfBroadenedPipIndividualsKY", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "numberOfBroadenedPipIndividualsMN", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "numberOfBroadenedPipIndividualsND", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "numberOfBroadenedPipIndividualsNJ", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "numberOfBroadenedPipIndividualsOR", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "tortLimitationKY", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "workLossBenefitsLimitPA", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "workLossExclusionMN", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "workLossIncludedMN", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PipCoverageVsProxy.prototype, "employeeOperatedIndNJ", void 0);
    return PipCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.cmau.location.car.losspayee.ts":
/*!*************************************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.cmau.location.car.losspayee.ts ***!
  \*************************************************************************************/
/*! exports provided: CmauLossPayeeVs$ICmauLossPayeeNamedInsuredVsProxy, CmauLossPayeeVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmauLossPayeeVs$ICmauLossPayeeNamedInsuredVsProxy", function() { return CmauLossPayeeVs$ICmauLossPayeeNamedInsuredVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmauLossPayeeVsProxy", function() { return CmauLossPayeeVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
/* harmony import */ var _com_arrow_model_def__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./com.arrow.model.def */ "./src/ts/gen/impl/com.arrow.model.def.ts");
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


var CmauLossPayeeVs$ICmauLossPayeeNamedInsuredVsProxy = /** @class */ (function (_super) {
    __extends(CmauLossPayeeVs$ICmauLossPayeeNamedInsuredVsProxy, _super);
    function CmauLossPayeeVs$ICmauLossPayeeNamedInsuredVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauLossPayeeVs$ICmauLossPayeeNamedInsuredVsProxy.prototype, "name", void 0);
    return CmauLossPayeeVs$ICmauLossPayeeNamedInsuredVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CmauLossPayeeVsProxy_lossPayeeByType_Impl = /** @class */ (function (_super) {
    __extends(CmauLossPayeeVsProxy_lossPayeeByType_Impl, _super);
    function CmauLossPayeeVsProxy_lossPayeeByType_Impl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def__WEBPACK_IMPORTED_MODULE_1__["NamedAddressVsProxy"])
    ], CmauLossPayeeVsProxy_lossPayeeByType_Impl.prototype, "ailessor", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def__WEBPACK_IMPORTED_MODULE_1__["NamedAddressVsProxy"])
    ], CmauLossPayeeVsProxy_lossPayeeByType_Impl.prototype, "payee", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def__WEBPACK_IMPORTED_MODULE_1__["NamedAddressVsProxy"])
    ], CmauLossPayeeVsProxy_lossPayeeByType_Impl.prototype, "namedInsured", void 0);
    return CmauLossPayeeVsProxy_lossPayeeByType_Impl;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));
var CmauLossPayeeVsProxy = /** @class */ (function (_super) {
    __extends(CmauLossPayeeVsProxy, _super);
    function CmauLossPayeeVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauLossPayeeVsProxy.prototype, "additionalInsuredLessorIncludeInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauLossPayeeVsProxy.prototype, "haownInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CmauLossPayeeVsProxy_lossPayeeByType_Impl)
    ], CmauLossPayeeVsProxy.prototype, "lossPayeeByType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauLossPayeeVsProxy.prototype, "lossPayeeIncludeInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CmauLossPayeeVs$ICmauLossPayeeNamedInsuredVsProxy)
    ], CmauLossPayeeVsProxy.prototype, "namedInsured", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CmauLossPayeeVsProxy.prototype, "namedInsuredInd", void 0);
    return CmauLossPayeeVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.cmau.location.car.ts":
/*!***************************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.cmau.location.car.ts ***!
  \***************************************************************************/
/*! exports provided: CoreCommCmauCarVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommCmauCarVsProxy", function() { return CoreCommCmauCarVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_cmau_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.cmau.common */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.cmau.common.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_cmau_location_car_losspayee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.cmau.location.car.losspayee */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.cmau.location.car.losspayee.ts");
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



var CoreCommCmauCarVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommCmauCarVsProxy, _super);
    function CoreCommCmauCarVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "airBagsNV", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "wyDefenseDrivingCredit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "coDefenseDrivingCredit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "controlNbr", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "courseDate", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "courseDateCO", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "courseDateKY", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "courseDateMN", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "courseDateMT", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "courseDateNV", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "courseDateOK", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "courseDateOR", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "courseDateTN", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "courseDateWA", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "courseDateWY", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "courtOrderQuestionKY", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "courtOrderQuestionMT", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "courtOrderQuestionNV", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "courtOrderQuestionOR", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "courtOrderQuestionTN", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "courtOrderQuestionWY", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_common__WEBPACK_IMPORTED_MODULE_1__["CmauCoverageInfoVsProxy"])
    ], CoreCommCmauCarVsProxy.prototype, "coverages", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "custom", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "defensiveCertified", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "destinationZone", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "dumpingOpInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "emplessor", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "golfType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "golfUse", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "golfVhsub", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "grossVehicleWeight", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "hasvin", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "kyDefenseDrivingCredit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_location_car_losspayee__WEBPACK_IMPORTED_MODULE_2__["CmauLossPayeeVsProxy"])
    ], CoreCommCmauCarVsProxy.prototype, "lossPayee", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "make", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "mnDefenseDrivingCredit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "businessUseClass", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "modelInfo", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "modelYr", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "motorHomeSize", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "mtDefenseDrivingCredit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "nvDefenseDrivingCredit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "okDefenseDrivingCredit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "operExp", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "operUse", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "orDefenseDrivingCredit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "origCost", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "originZone", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "overrideTerritoryInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "physDmgInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "radiusClass", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "seatBeltsNV", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "secondaryClass", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "secondaryClassType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "statedAmt", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "territory", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "tnDefenseDrivingCredit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "towLabor", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "trailerType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "trkpaAccidentPrev", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "useClassInd1", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "useClassInd2", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "valuationMethod", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "vehicleClass", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "vehicleCostNew", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "vehicleType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "vehUseCd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "vinnumber", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "vinoverride", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "vinvalid", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "waDefenseDrivingCredit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauCarVsProxy.prototype, "mobileHomeType", void 0);
    return CoreCommCmauCarVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.cmau.location.garage.ts":
/*!******************************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.cmau.location.garage.ts ***!
  \******************************************************************************/
/*! exports provided: CoreCommCmauGarageVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommCmauGarageVsProxy", function() { return CoreCommCmauGarageVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
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

var CoreCommCmauGarageVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommCmauGarageVsProxy, _super);
    function CoreCommCmauGarageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauGarageVsProxy.prototype, "basis", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauGarageVsProxy.prototype, "cOLLRequestedDed", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauGarageVsProxy.prototype, "covType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauGarageVsProxy.prototype, "dedType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauGarageVsProxy.prototype, "limit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauGarageVsProxy.prototype, "oTCRequestedDed", void 0);
    return CoreCommCmauGarageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.cmau.location.ts":
/*!***********************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.cmau.location.ts ***!
  \***********************************************************************/
/*! exports provided: CoreCommCmauLocationVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommCmauLocationVsProxy", function() { return CoreCommCmauLocationVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_cmau_location_car__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.cmau.location.car */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.cmau.location.car.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_cmau_location_garage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.cmau.location.garage */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.cmau.location.garage.ts");
/* harmony import */ var _com_arrow_model_def_corecomm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.ts");
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




var CoreCommCmauLocationVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommCmauLocationVsProxy, _super);
    function CoreCommCmauLocationVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([_com_arrow_model_def_corecomm_cmau_location_car__WEBPACK_IMPORTED_MODULE_1__["CoreCommCmauCarVsProxy"]])
    ], CoreCommCmauLocationVsProxy.prototype, "cars", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauLocationVsProxy.prototype, "zip", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_location_garage__WEBPACK_IMPORTED_MODULE_2__["CoreCommCmauGarageVsProxy"])
    ], CoreCommCmauLocationVsProxy.prototype, "garage", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauLocationVsProxy.prototype, "garageInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm__WEBPACK_IMPORTED_MODULE_3__["CoreCommCrimeVsProxy"])
    ], CoreCommCmauLocationVsProxy.prototype, "crime", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauLocationVsProxy.prototype, "address", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauLocationVsProxy.prototype, "addressLine", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauLocationVsProxy.prototype, "based", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauLocationVsProxy.prototype, "buildings", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauLocationVsProxy.prototype, "confirmation", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauLocationVsProxy.prototype, "countyName", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauLocationVsProxy.prototype, "postDir", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauLocationVsProxy.prototype, "preDir", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauLocationVsProxy.prototype, "chicagoCityLimitsInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauLocationVsProxy.prototype, "scrubberCalled", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauLocationVsProxy.prototype, "scrubberResult", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauLocationVsProxy.prototype, "secondaryName", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauLocationVsProxy.prototype, "street", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauLocationVsProxy.prototype, "streetNum", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauLocationVsProxy.prototype, "streetType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauLocationVsProxy.prototype, "unit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauLocationVsProxy.prototype, "userCountyName", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauLocationVsProxy.prototype, "zipAddOn", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauLocationVsProxy.prototype, "addressLine2", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauLocationVsProxy.prototype, "city", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauLocationVsProxy.prototype, "state", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauLocationVsProxy.prototype, "recordType", void 0);
    return CoreCommCmauLocationVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.cmau.state.cmn.ts":
/*!************************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.cmau.state.cmn.ts ***!
  \************************************************************************/
/*! exports provided: StateCoverageWrapperProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateCoverageWrapperProxy", function() { return StateCoverageWrapperProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
/* harmony import */ var _com_arrow_model_def__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./com.arrow.model.def */ "./src/ts/gen/impl/com.arrow.model.def.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_cmau_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.cmau.common */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.cmau.common.ts");
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



var StateCoverageWrapperProxy = /** @class */ (function (_super) {
    __extends(StateCoverageWrapperProxy, _super);
    function StateCoverageWrapperProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def__WEBPACK_IMPORTED_MODULE_1__["AddressLowercaseVsProxy"])
    ], StateCoverageWrapperProxy.prototype, "address", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_common__WEBPACK_IMPORTED_MODULE_2__["CmauCoverageInfoVsProxy"])
    ], StateCoverageWrapperProxy.prototype, "coverages", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], StateCoverageWrapperProxy.prototype, "garageInd", void 0);
    return StateCoverageWrapperProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.cmau.state.ts":
/*!********************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.cmau.state.ts ***!
  \********************************************************************/
/*! exports provided: CoreCommCmauStatesCoveragesVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommCmauStatesCoveragesVsProxy", function() { return CoreCommCmauStatesCoveragesVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_cmau_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.cmau.common */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.cmau.common.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.cmau.state.cmn */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.cmau.state.cmn.ts");
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



var CoreCommCmauStatesCoveragesVsProxy_perState_Impl = /** @class */ (function (_super) {
    __extends(CoreCommCmauStatesCoveragesVsProxy_perState_Impl, _super);
    function CoreCommCmauStatesCoveragesVsProxy_perState_Impl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "al", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "ak", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "az", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "ar", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "ca", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "co", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "ct", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "de", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "dc", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "fl", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "ga", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "hi", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "id", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "il", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "in", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "ia", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "ks", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "ky", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "la", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "ma", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "me", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "md", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "mi", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "mn", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "mo", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "ms", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "mt", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "ne", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "nv", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "nh", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "nj", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "nm", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "ny", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "nc", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "nd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "oh", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "ok", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "or", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "pa", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "ri", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "sc", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "sd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "tn", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "tx", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "ut", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "vt", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "va", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "wa", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "wv", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "wi", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state_cmn__WEBPACK_IMPORTED_MODULE_2__["StateCoverageWrapperProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy_perState_Impl.prototype, "wy", void 0);
    return CoreCommCmauStatesCoveragesVsProxy_perState_Impl;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));
var CoreCommCmauStatesCoveragesVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommCmauStatesCoveragesVsProxy, _super);
    function CoreCommCmauStatesCoveragesVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_common__WEBPACK_IMPORTED_MODULE_1__["CmauCoverageInfoVsProxy"])
    ], CoreCommCmauStatesCoveragesVsProxy.prototype, "coveragesGen", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCmauStatesCoveragesVsProxy_perState_Impl)
    ], CoreCommCmauStatesCoveragesVsProxy.prototype, "perState", void 0);
    return CoreCommCmauStatesCoveragesVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.cmau.ts":
/*!**************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.cmau.ts ***!
  \**************************************************************/
/*! exports provided: CoreCommCmauVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommCmauVsProxy", function() { return CoreCommCmauVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.common */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.common.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_cmau_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.cmau.state */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.cmau.state.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_cmau_coverages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.cmau.coverages */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.cmau.coverages.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_cmau_driver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.cmau.driver */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.cmau.driver.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_cmau_location__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.cmau.location */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.cmau.location.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_cmau_uw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.cmau.uw */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.cmau.uw.ts");
/* harmony import */ var _com_arrow_model_def_corecomm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.ts");
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








var CoreCommCmauVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommCmauVsProxy, _super);
    function CoreCommCmauVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauVsProxy.prototype, "autonomousVehicles", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauVsProxy.prototype, "uniqueStatesList", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_common__WEBPACK_IMPORTED_MODULE_1__["CommissionMapVsProxy"])
    ], CoreCommCmauVsProxy.prototype, "commissionMap", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_state__WEBPACK_IMPORTED_MODULE_2__["CoreCommCmauStatesCoveragesVsProxy"])
    ], CoreCommCmauVsProxy.prototype, "coverageInfoAllStates", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_coverages__WEBPACK_IMPORTED_MODULE_3__["CoreCommCmauCoveragesVsProxy"])
    ], CoreCommCmauVsProxy.prototype, "coverages", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([_com_arrow_model_def_corecomm_cmau_driver__WEBPACK_IMPORTED_MODULE_4__["CoreCommCmauDriverVsProxy"]])
    ], CoreCommCmauVsProxy.prototype, "driverList", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauVsProxy.prototype, "foodDelivery", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauVsProxy.prototype, "hasAdditionalNamedInsured", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauVsProxy.prototype, "hasAiLessor", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauVsProxy.prototype, "hasDrivers", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauVsProxy.prototype, "hasExcludedDrivers", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauVsProxy.prototype, "hasLossPayee", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauVsProxy.prototype, "hasPPA", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauVsProxy.prototype, "commission", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauVsProxy.prototype, "isDriverInfoVerified", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauVsProxy.prototype, "leasedRentedVehicles", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauVsProxy.prototype, "liability", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([_com_arrow_model_def_corecomm_cmau_location__WEBPACK_IMPORTED_MODULE_5__["CoreCommCmauLocationVsProxy"]])
    ], CoreCommCmauVsProxy.prototype, "locationList", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauVsProxy.prototype, "modifiedVinsInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauVsProxy.prototype, "notOwnedFoodDelivery", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauVsProxy.prototype, "scheduledAutoInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauVsProxy.prototype, "transportPassengers", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau_uw__WEBPACK_IMPORTED_MODULE_6__["CoreCommCmauUwVsProxy"])
    ], CoreCommCmauVsProxy.prototype, "uWInfo", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauVsProxy.prototype, "finalized", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm__WEBPACK_IMPORTED_MODULE_7__["InstecVsProxy"])
    ], CoreCommCmauVsProxy.prototype, "instec", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauVsProxy.prototype, "hazardousMaterials", void 0);
    return CoreCommCmauVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.cmau.uw.ts":
/*!*****************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.cmau.uw.ts ***!
  \*****************************************************************/
/*! exports provided: CoreCommCmauUwVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommCmauUwVsProxy", function() { return CoreCommCmauUwVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
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

var CoreCommCmauUwVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommCmauUwVsProxy, _super);
    function CoreCommCmauUwVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauUwVsProxy.prototype, "cmauFilings", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauUwVsProxy.prototype, "wCDrivers", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauUwVsProxy.prototype, "familyVehicleUse", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauUwVsProxy.prototype, "fifteenPassengerVehicle", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauUwVsProxy.prototype, "fuelDeliveryTruck", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauUwVsProxy.prototype, "highPerformance", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauUwVsProxy.prototype, "holdHarmlessAgreements", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauUwVsProxy.prototype, "numCancellationNoticesIssued", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauUwVsProxy.prototype, "customizedVehicles", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauUwVsProxy.prototype, "personalVehicleUse", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauUwVsProxy.prototype, "totalCollisionClaims", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauUwVsProxy.prototype, "vehicleFoodDelivery", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauUwVsProxy.prototype, "vehicleOperationRadius", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauUwVsProxy.prototype, "vehicleOwnership", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauUwVsProxy.prototype, "vehiclesNotScheduled", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauUwVsProxy.prototype, "numLargeCMAUClaims", void 0);
    return CoreCommCmauUwVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.co.ts":
/*!************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.co.ts ***!
  \************************************************************/
/*! exports provided: CoreCommCoVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommCoVsProxy", function() { return CoreCommCoVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
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

var CoreCommCoVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommCoVsProxy, _super);
    function CoreCommCoVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCoVsProxy.prototype, "code", void 0);
    return CoreCommCoVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.common.dnb.record.address.ts":
/*!***********************************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.common.dnb.record.address.ts ***!
  \***********************************************************************************/
/*! exports provided: CoreCommDnbAddressVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommDnbAddressVsProxy", function() { return CoreCommDnbAddressVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
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

var CoreCommDnbAddressVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommDnbAddressVsProxy, _super);
    function CoreCommDnbAddressVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommDnbAddressVsProxy.prototype, "country", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommDnbAddressVsProxy.prototype, "county", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommDnbAddressVsProxy.prototype, "address", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommDnbAddressVsProxy.prototype, "addressLine2", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommDnbAddressVsProxy.prototype, "city", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommDnbAddressVsProxy.prototype, "state", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommDnbAddressVsProxy.prototype, "zip", void 0);
    return CoreCommDnbAddressVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.common.dnb.record.ts":
/*!***************************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.common.dnb.record.ts ***!
  \***************************************************************************/
/*! exports provided: CoreCommDnbRecordVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommDnbRecordVsProxy", function() { return CoreCommDnbRecordVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_common_dnb_record_address__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.common.dnb.record.address */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.common.dnb.record.address.ts");
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


var CoreCommDnbRecordVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommDnbRecordVsProxy, _super);
    function CoreCommDnbRecordVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_common_dnb_record_address__WEBPACK_IMPORTED_MODULE_1__["CoreCommDnbAddressVsProxy"])
    ], CoreCommDnbRecordVsProxy.prototype, "address", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommDnbRecordVsProxy.prototype, "yearBusinessStarted", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommDnbRecordVsProxy.prototype, "financialStressDate", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommDnbRecordVsProxy.prototype, "financialStressScore", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommDnbRecordVsProxy.prototype, "naicsCode", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommDnbRecordVsProxy.prototype, "numberOfOpenJudgements", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommDnbRecordVsProxy.prototype, "numberOfOpenLien", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommDnbRecordVsProxy.prototype, "numberOfPastDuePaymentExperience", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommDnbRecordVsProxy.prototype, "commercialCreditScore", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommDnbRecordVsProxy.prototype, "numberOfSuits", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommDnbRecordVsProxy.prototype, "occupancyType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommDnbRecordVsProxy.prototype, "organizationSummary", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommDnbRecordVsProxy.prototype, "paydexScore", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommDnbRecordVsProxy.prototype, "sicCode", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommDnbRecordVsProxy.prototype, "squareFootage", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommDnbRecordVsProxy.prototype, "timestamp", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommDnbRecordVsProxy.prototype, "numberOfSatisfactoryPaymentExperience", void 0);
    return CoreCommDnbRecordVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.common.dnb.ts":
/*!********************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.common.dnb.ts ***!
  \********************************************************************/
/*! exports provided: CoreCommDnbVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommDnbVsProxy", function() { return CoreCommDnbVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_common_dnb_record__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.common.dnb.record */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.common.dnb.record.ts");
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


var CoreCommDnbVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommDnbVsProxy, _super);
    function CoreCommDnbVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommDnbVsProxy.prototype, "dunsNumber", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_common_dnb_record__WEBPACK_IMPORTED_MODULE_1__["CoreCommDnbRecordVsProxy"])
    ], CoreCommDnbVsProxy.prototype, "record", void 0);
    return CoreCommDnbVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.common.rnc.ts":
/*!********************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.common.rnc.ts ***!
  \********************************************************************/
/*! exports provided: CoreCommWorkRncVsProxy, CoreCommBbopRncVsProxy, CoreCommUmbrRncVsProxy, CoreCommCmauRncVsProxy, RenewalsVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommWorkRncVsProxy", function() { return CoreCommWorkRncVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommBbopRncVsProxy", function() { return CoreCommBbopRncVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommUmbrRncVsProxy", function() { return CoreCommUmbrRncVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommCmauRncVsProxy", function() { return CoreCommCmauRncVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenewalsVsProxy", function() { return RenewalsVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
/* harmony import */ var _com_arrow_model_def_corecomm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.ts");
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


var CoreCommWorkRncVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommWorkRncVsProxy, _super);
    function CoreCommWorkRncVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkRncVsProxy.prototype, "finalized", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm__WEBPACK_IMPORTED_MODULE_1__["InstecVsProxy"])
    ], CoreCommWorkRncVsProxy.prototype, "instec", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkRncVsProxy.prototype, "uniqueStatesList", void 0);
    return CoreCommWorkRncVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommBbopRncVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommBbopRncVsProxy, _super);
    function CoreCommBbopRncVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopRncVsProxy.prototype, "finalized", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm__WEBPACK_IMPORTED_MODULE_1__["InstecVsProxy"])
    ], CoreCommBbopRncVsProxy.prototype, "instec", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBbopRncVsProxy.prototype, "uniqueStatesList", void 0);
    return CoreCommBbopRncVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommUmbrRncVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommUmbrRncVsProxy, _super);
    function CoreCommUmbrRncVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrRncVsProxy.prototype, "finalized", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm__WEBPACK_IMPORTED_MODULE_1__["InstecVsProxy"])
    ], CoreCommUmbrRncVsProxy.prototype, "instec", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrRncVsProxy.prototype, "uniqueStatesList", void 0);
    return CoreCommUmbrRncVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommCmauRncVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommCmauRncVsProxy, _super);
    function CoreCommCmauRncVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauRncVsProxy.prototype, "finalized", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm__WEBPACK_IMPORTED_MODULE_1__["InstecVsProxy"])
    ], CoreCommCmauRncVsProxy.prototype, "instec", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCmauRncVsProxy.prototype, "uniqueStatesList", void 0);
    return CoreCommCmauRncVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var RenewalsVsProxy = /** @class */ (function (_super) {
    __extends(RenewalsVsProxy, _super);
    function RenewalsVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommBbopRncVsProxy)
    ], RenewalsVsProxy.prototype, "bbopRnc", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCmauRncVsProxy)
    ], RenewalsVsProxy.prototype, "cmauRnc", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommUmbrRncVsProxy)
    ], RenewalsVsProxy.prototype, "umbrRnc", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommWorkRncVsProxy)
    ], RenewalsVsProxy.prototype, "workRnc", void 0);
    return RenewalsVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.common.ts":
/*!****************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.common.ts ***!
  \****************************************************************/
/*! exports provided: CoreCommCommonVs$Imageright$DocumentVsProxy, CoreCommCommonVs$ImagerightProxy, CommissionMapVsProxy, CoreCommCommonVs$IOfacVs$IEntiunitProxy, PersorgProxy, CoreCommCommonVs$IOfacVsProxy, CoreCommCommonVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommCommonVs$Imageright$DocumentVsProxy", function() { return CoreCommCommonVs$Imageright$DocumentVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommCommonVs$ImagerightProxy", function() { return CoreCommCommonVs$ImagerightProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommissionMapVsProxy", function() { return CommissionMapVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommCommonVs$IOfacVs$IEntiunitProxy", function() { return CoreCommCommonVs$IOfacVs$IEntiunitProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersorgProxy", function() { return PersorgProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommCommonVs$IOfacVsProxy", function() { return CoreCommCommonVs$IOfacVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommCommonVsProxy", function() { return CoreCommCommonVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
/* harmony import */ var _com_arrow_model_def__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./com.arrow.model.def */ "./src/ts/gen/impl/com.arrow.model.def.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_common_dnb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.common.dnb */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.common.dnb.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_common_rnc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.common.rnc */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.common.rnc.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_common_uw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.common.uw */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.common.uw.ts");
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





var CoreCommCommonVs$Imageright$DocumentVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommCommonVs$Imageright$DocumentVsProxy, _super);
    function CoreCommCommonVs$Imageright$DocumentVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVs$Imageright$DocumentVsProxy.prototype, "documentId", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVs$Imageright$DocumentVsProxy.prototype, "pageid", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVs$Imageright$DocumentVsProxy.prototype, "resultId", void 0);
    return CoreCommCommonVs$Imageright$DocumentVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommCommonVs$ImagerightProxy_documents_Impl = /** @class */ (function (_super) {
    __extends(CoreCommCommonVs$ImagerightProxy_documents_Impl, _super);
    function CoreCommCommonVs$ImagerightProxy_documents_Impl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "CANCELLATION", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "CLAIM_KITS", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "ENDORSEMENT_DEC", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "MVR", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "NEW_BUSINESS_POLICY", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "RENEWAL_POLICY", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "REINSTATEMENT", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "ID_CARD", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "REWRITE_DEC_PAGE", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "PREMIUM_AUDIT_DOC", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "ACORD_APPLICATON", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "NB_AGENT_UPLOAD", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "RN_AGENT_UPLOAD", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "BIND_REQUEST", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "NB_BINDER_CONFIRMATION", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "RN_BINDER_CONFIRMATION", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "CARRIER_REFERRAL", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "NB_CORRESPONDENCE", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "RN_CORRESPONDENCE", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "NB_DECLINATION", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "RN_DECLINATION", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "EXPERIENCE_MOD_WORKSHEET", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "INSPECTIONS", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "LOSS_RUNS", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "NEW_BUSINESS_UNDERWRITING", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "OSHA", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "NB_PRICING_TOOL_WORKSHEET_AUTO", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "RN_PRICING_TOOL_WORKSHEET_AUTO", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "NB_PRICING_TOOL_WORKSHEET_BOP", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "RN_PRICING_TOOL_WORKSHEET_BOP", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "NB_PRICING_TOOL_WORKSHEET_WC", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "RN_PRICING_TOOL_WORKSHEET_WC", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "NB_QUOTE", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "RN_QUOTE", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "RATING_WORKSHEET", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "RENEWAL_UNDERWRITING", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "NB_RISK_ANALYSIS_DOCUMENT", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "RN_RISK_ANALYSIS_DOCUMENT", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "SUPPLEMENTAL_APPLICATION", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "NB_SYSTEM_REFERRAL", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "RN_SYSTEM_REFERRAL", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "NB_REPORT_ORDERED", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "RN_REPORT_ORDERED", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "NB_UNDERWRITING_DOCUMENT", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "RN_UNDERWRITING_DOCUMENT", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "NB_OFAC", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "RN_OFAC", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "NB_DNBI", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "RN_DNBI", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "COLLECTION_LETTER", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "NOTICE_OF_CANCELLATION", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "RESCISSION_NOTICE", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "CONFIRMATION_OF_CANCELLATION", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "REINSTATEMENT_NOTICE", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "STATEMENT_INVOICE", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "NSF_LETTER", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "CONDITIONAL_RENEWAL_NOTICE", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "RESCISSION_OF_COVERAGE", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "NON_RENEWAL_NOTICE", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "MISC_ACCOUNTING_LETTERS", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "CHECKS", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$Imageright$DocumentVsProxy)
    ], CoreCommCommonVs$ImagerightProxy_documents_Impl.prototype, "REFUND_CHECKS", void 0);
    return CoreCommCommonVs$ImagerightProxy_documents_Impl;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));
var CoreCommCommonVs$ImagerightProxy = /** @class */ (function (_super) {
    __extends(CoreCommCommonVs$ImagerightProxy, _super);
    function CoreCommCommonVs$ImagerightProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$ImagerightProxy_documents_Impl)
    ], CoreCommCommonVs$ImagerightProxy.prototype, "documents", void 0);
    return CoreCommCommonVs$ImagerightProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CommissionMapVsProxy = /** @class */ (function (_super) {
    __extends(CommissionMapVsProxy, _super);
    function CommissionMapVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CommissionMapVsProxy.prototype, "agencyBill100", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CommissionMapVsProxy.prototype, "directBill100", void 0);
    return CommissionMapVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommCommonVs$IOfacVs$IEntiunitProxy = /** @class */ (function (_super) {
    __extends(CoreCommCommonVs$IOfacVs$IEntiunitProxy, _super);
    function CoreCommCommonVs$IOfacVs$IEntiunitProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVs$IOfacVs$IEntiunitProxy.prototype, "address", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVs$IOfacVs$IEntiunitProxy.prototype, "zip", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVs$IOfacVs$IEntiunitProxy.prototype, "entityPath", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVs$IOfacVs$IEntiunitProxy.prototype, "hitpercentage", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVs$IOfacVs$IEntiunitProxy.prototype, "locationIndex", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVs$IOfacVs$IEntiunitProxy.prototype, "message", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVs$IOfacVs$IEntiunitProxy.prototype, "city", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVs$IOfacVs$IEntiunitProxy.prototype, "ofaccalldate", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVs$IOfacVs$IEntiunitProxy.prototype, "referenceid", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVs$IOfacVs$IEntiunitProxy.prototype, "response", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVs$IOfacVs$IEntiunitProxy.prototype, "state", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVs$IOfacVs$IEntiunitProxy.prototype, "subsetIndex", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVs$IOfacVs$IEntiunitProxy.prototype, "name", void 0);
    return CoreCommCommonVs$IOfacVs$IEntiunitProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var PersorgProxy = /** @class */ (function (_super) {
    __extends(PersorgProxy, _super);
    function PersorgProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def__WEBPACK_IMPORTED_MODULE_1__["NamedAddressVsProxy"])
    ], PersorgProxy.prototype, "address", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PersorgProxy.prototype, "daysnotice", void 0);
    return PersorgProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommCommonVs$IOfacVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommCommonVs$IOfacVsProxy, _super);
    function CoreCommCommonVs$IOfacVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVs$IOfacVsProxy.prototype, "callstatus", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([CoreCommCommonVs$IOfacVs$IEntiunitProxy])
    ], CoreCommCommonVs$IOfacVsProxy.prototype, "entities", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVs$IOfacVsProxy.prototype, "errors", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([CoreCommCommonVs$IOfacVs$IEntiunitProxy])
    ], CoreCommCommonVs$IOfacVsProxy.prototype, "units", void 0);
    return CoreCommCommonVs$IOfacVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommCommonVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommCommonVsProxy, _super);
    function CoreCommCommonVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVsProxy.prototype, "applicableStates", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVsProxy.prototype, "yearBizStarted", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVsProxy.prototype, "claimsContactFName", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVsProxy.prototype, "claimsContactLName", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVsProxy.prototype, "claimsContactPhone", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVsProxy.prototype, "company", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_common_dnb__WEBPACK_IMPORTED_MODULE_2__["CoreCommDnbVsProxy"])
    ], CoreCommCommonVsProxy.prototype, "dnb", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVsProxy.prototype, "effective", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVsProxy.prototype, "expiration", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$ImagerightProxy)
    ], CoreCommCommonVsProxy.prototype, "imageright", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVsProxy.prototype, "industrySegment", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVsProxy.prototype, "inspectionContactEmail", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVsProxy.prototype, "inspectionContactFName", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVsProxy.prototype, "inspectionContactLName", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVsProxy.prototype, "inspectionContactPhone", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVsProxy.prototype, "instecPrimaryAccount", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVsProxy.prototype, "instecSecondaryAccount", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVsProxy.prototype, "mainContactEmail", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVsProxy.prototype, "claimsContactEmail", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVsProxy.prototype, "mainContactLName", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVsProxy.prototype, "mainContactPhone", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVsProxy.prototype, "mainContactWebAddress", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVsProxy.prototype, "naicsCode", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCommonVs$IOfacVsProxy)
    ], CoreCommCommonVsProxy.prototype, "ofac", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVsProxy.prototype, "premiumAuditContactEmail", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVsProxy.prototype, "premiumAuditContactFName", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVsProxy.prototype, "premiumAuditContactLName", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVsProxy.prototype, "premiumAuditContactPhone", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVsProxy.prototype, "quoteSource", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVsProxy.prototype, "quoteType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVsProxy.prototype, "realProdCode", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_common_rnc__WEBPACK_IMPORTED_MODULE_3__["RenewalsVsProxy"])
    ], CoreCommCommonVsProxy.prototype, "renewals", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVsProxy.prototype, "sicCode", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVsProxy.prototype, "state", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVsProxy.prototype, "stateOfDomicile", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_common_uw__WEBPACK_IMPORTED_MODULE_4__["CoreCommUwVsProxy"])
    ], CoreCommCommonVsProxy.prototype, "uw", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCommonVsProxy.prototype, "mainContactFName", void 0);
    return CoreCommCommonVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.common.txnhistory.ts":
/*!***************************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.common.txnhistory.ts ***!
  \***************************************************************************/
/*! exports provided: LobTxnHistoryVsProxy, CoreCommTxnHistoryVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LobTxnHistoryVsProxy", function() { return LobTxnHistoryVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommTxnHistoryVsProxy", function() { return CoreCommTxnHistoryVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
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

var LobTxnHistoryVsProxy = /** @class */ (function (_super) {
    __extends(LobTxnHistoryVsProxy, _super);
    function LobTxnHistoryVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LobTxnHistoryVsProxy.prototype, "quoterate", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LobTxnHistoryVsProxy.prototype, "status", void 0);
    return LobTxnHistoryVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommTxnHistoryVsProxy_lobTxnHistoryMap_Impl = /** @class */ (function (_super) {
    __extends(CoreCommTxnHistoryVsProxy_lobTxnHistoryMap_Impl, _super);
    function CoreCommTxnHistoryVsProxy_lobTxnHistoryMap_Impl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(LobTxnHistoryVsProxy)
    ], CoreCommTxnHistoryVsProxy_lobTxnHistoryMap_Impl.prototype, "bbop", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(LobTxnHistoryVsProxy)
    ], CoreCommTxnHistoryVsProxy_lobTxnHistoryMap_Impl.prototype, "cmau", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(LobTxnHistoryVsProxy)
    ], CoreCommTxnHistoryVsProxy_lobTxnHistoryMap_Impl.prototype, "umbr", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(LobTxnHistoryVsProxy)
    ], CoreCommTxnHistoryVsProxy_lobTxnHistoryMap_Impl.prototype, "work", void 0);
    return CoreCommTxnHistoryVsProxy_lobTxnHistoryMap_Impl;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));
var CoreCommTxnHistoryVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommTxnHistoryVsProxy, _super);
    function CoreCommTxnHistoryVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommTxnHistoryVsProxy_lobTxnHistoryMap_Impl)
    ], CoreCommTxnHistoryVsProxy.prototype, "lobTxnHistoryMap", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommTxnHistoryVsProxy.prototype, "quoterate", void 0);
    return CoreCommTxnHistoryVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.common.uw.rnc.ts":
/*!***********************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.common.uw.rnc.ts ***!
  \***********************************************************************/
/*! exports provided: CoreCommRncVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommRncVsProxy", function() { return CoreCommRncVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
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

var CoreCommRncVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommRncVsProxy, _super);
    function CoreCommRncVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommRncVsProxy.prototype, "aggregateLossOver200KLast3Years", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommRncVsProxy.prototype, "expiringPremium", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommRncVsProxy.prototype, "fiveOrMoreLossesLast3Years", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommRncVsProxy.prototype, "singleLossOver100KLast3Years", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommRncVsProxy.prototype, "singleLossOver25KLast3Years", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommRncVsProxy.prototype, "threeOrMoreLossesLast3Years", void 0);
    return CoreCommRncVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.common.uw.rulesresult.decision.details.ts":
/*!************************************************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.common.uw.rulesresult.decision.details.ts ***!
  \************************************************************************************************/
/*! exports provided: RuleMessageVsProxy, CoreCommUwDecisionRuleDetailsVsProxy, CoreCommUwDecisionDetailsVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuleMessageVsProxy", function() { return RuleMessageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommUwDecisionRuleDetailsVsProxy", function() { return CoreCommUwDecisionRuleDetailsVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommUwDecisionDetailsVsProxy", function() { return CoreCommUwDecisionDetailsVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
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

var RuleMessageVsProxy = /** @class */ (function (_super) {
    __extends(RuleMessageVsProxy, _super);
    function RuleMessageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], RuleMessageVsProxy.prototype, "htmlText", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], RuleMessageVsProxy.prototype, "text", void 0);
    return RuleMessageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommUwDecisionRuleDetailsVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommUwDecisionRuleDetailsVsProxy, _super);
    function CoreCommUwDecisionRuleDetailsVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUwDecisionRuleDetailsVsProxy.prototype, "decisionCode", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUwDecisionRuleDetailsVsProxy.prototype, "lob", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([RuleMessageVsProxy])
    ], CoreCommUwDecisionRuleDetailsVsProxy.prototype, "messages", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUwDecisionRuleDetailsVsProxy.prototype, "name", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUwDecisionRuleDetailsVsProxy.prototype, "ruleType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUwDecisionRuleDetailsVsProxy.prototype, "statesFailingLicensing", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUwDecisionRuleDetailsVsProxy.prototype, "unrecoverableInd", void 0);
    return CoreCommUwDecisionRuleDetailsVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommUwDecisionDetailsVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommUwDecisionDetailsVsProxy, _super);
    function CoreCommUwDecisionDetailsVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([CoreCommUwDecisionRuleDetailsVsProxy])
    ], CoreCommUwDecisionDetailsVsProxy.prototype, "ruleDetailsList", void 0);
    return CoreCommUwDecisionDetailsVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.common.uw.rulesresult.decision.ts":
/*!****************************************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.common.uw.rulesresult.decision.ts ***!
  \****************************************************************************************/
/*! exports provided: CoreCommUwDecisionVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommUwDecisionVsProxy", function() { return CoreCommUwDecisionVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_common_uw_rulesresult_decision_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.common.uw.rulesresult.decision.details */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.common.uw.rulesresult.decision.details.ts");
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


var CoreCommUwDecisionVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommUwDecisionVsProxy, _super);
    function CoreCommUwDecisionVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUwDecisionVsProxy.prototype, "code", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_common_uw_rulesresult_decision_details__WEBPACK_IMPORTED_MODULE_1__["CoreCommUwDecisionDetailsVsProxy"])
    ], CoreCommUwDecisionVsProxy.prototype, "details", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUwDecisionVsProxy.prototype, "statesFailingLicensing", void 0);
    return CoreCommUwDecisionVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.common.uw.rulesresult.ts":
/*!*******************************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.common.uw.rulesresult.ts ***!
  \*******************************************************************************/
/*! exports provided: CoreCommUwRulesResultVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommUwRulesResultVsProxy", function() { return CoreCommUwRulesResultVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_common_uw_rulesresult_decision__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.common.uw.rulesresult.decision */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.common.uw.rulesresult.decision.ts");
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


var CoreCommUwRulesResultVsProxy_perLobDecisionMap_Impl = /** @class */ (function (_super) {
    __extends(CoreCommUwRulesResultVsProxy_perLobDecisionMap_Impl, _super);
    function CoreCommUwRulesResultVsProxy_perLobDecisionMap_Impl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_common_uw_rulesresult_decision__WEBPACK_IMPORTED_MODULE_1__["CoreCommUwDecisionVsProxy"])
    ], CoreCommUwRulesResultVsProxy_perLobDecisionMap_Impl.prototype, "bbop", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_common_uw_rulesresult_decision__WEBPACK_IMPORTED_MODULE_1__["CoreCommUwDecisionVsProxy"])
    ], CoreCommUwRulesResultVsProxy_perLobDecisionMap_Impl.prototype, "cmau", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_common_uw_rulesresult_decision__WEBPACK_IMPORTED_MODULE_1__["CoreCommUwDecisionVsProxy"])
    ], CoreCommUwRulesResultVsProxy_perLobDecisionMap_Impl.prototype, "umbr", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_common_uw_rulesresult_decision__WEBPACK_IMPORTED_MODULE_1__["CoreCommUwDecisionVsProxy"])
    ], CoreCommUwRulesResultVsProxy_perLobDecisionMap_Impl.prototype, "work", void 0);
    return CoreCommUwRulesResultVsProxy_perLobDecisionMap_Impl;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));
var CoreCommUwRulesResultVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommUwRulesResultVsProxy, _super);
    function CoreCommUwRulesResultVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_common_uw_rulesresult_decision__WEBPACK_IMPORTED_MODULE_1__["CoreCommUwDecisionVsProxy"])
    ], CoreCommUwRulesResultVsProxy.prototype, "finalizedDecision", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUwRulesResultVsProxy.prototype, "lobsUsedInFinalizedDecision", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommUwRulesResultVsProxy_perLobDecisionMap_Impl)
    ], CoreCommUwRulesResultVsProxy.prototype, "perLobDecisionMap", void 0);
    return CoreCommUwRulesResultVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.common.uw.ts":
/*!*******************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.common.uw.ts ***!
  \*******************************************************************/
/*! exports provided: CoreCommUwVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommUwVsProxy", function() { return CoreCommUwVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_common_uw_rnc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.common.uw.rnc */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.common.uw.rnc.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_common_uw_rulesresult__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.common.uw.rulesresult */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.common.uw.rulesresult.ts");
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



var CoreCommUwVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommUwVsProxy, _super);
    function CoreCommUwVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUwVsProxy.prototype, "bOPExcessivePremiumExposure", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUwVsProxy.prototype, "buildersRiskExposure", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUwVsProxy.prototype, "excessiveLocationNumExposure", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUwVsProxy.prototype, "ineligibleInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUwVsProxy.prototype, "packageEligibleInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_common_uw_rnc__WEBPACK_IMPORTED_MODULE_1__["CoreCommRncVsProxy"])
    ], CoreCommUwVsProxy.prototype, "rnc", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_common_uw_rulesresult__WEBPACK_IMPORTED_MODULE_2__["CoreCommUwRulesResultVsProxy"])
    ], CoreCommUwVsProxy.prototype, "rulesResult", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUwVsProxy.prototype, "salesPayrollExposure", void 0);
    return CoreCommUwVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.indicator.ts":
/*!*******************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.indicator.ts ***!
  \*******************************************************************/
/*! exports provided: CoreCommIndicatorVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommIndicatorVsProxy", function() { return CoreCommIndicatorVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
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

var CoreCommIndicatorVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommIndicatorVsProxy, _super);
    function CoreCommIndicatorVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommIndicatorVsProxy.prototype, "closedzip", void 0);
    return CoreCommIndicatorVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.insured.ts":
/*!*****************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.insured.ts ***!
  \*****************************************************************/
/*! exports provided: CoreCommInsuredVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommInsuredVsProxy", function() { return CoreCommInsuredVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
/* harmony import */ var _com_arrow_model_def__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./com.arrow.model.def */ "./src/ts/gen/impl/com.arrow.model.def.ts");
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


var CoreCommInsuredVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommInsuredVsProxy, _super);
    function CoreCommInsuredVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommInsuredVsProxy.prototype, "dBA", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommInsuredVsProxy.prototype, "instype", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def__WEBPACK_IMPORTED_MODULE_1__["AddressLowercaseVsProxy"])
    ], CoreCommInsuredVsProxy.prototype, "address", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommInsuredVsProxy.prototype, "companyName", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommInsuredVsProxy.prototype, "email", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommInsuredVsProxy.prototype, "firstName", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommInsuredVsProxy.prototype, "individual", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommInsuredVsProxy.prototype, "lastName", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def__WEBPACK_IMPORTED_MODULE_1__["AddressLowercaseWithAddress1VsProxy"])
    ], CoreCommInsuredVsProxy.prototype, "mailingAddress", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommInsuredVsProxy.prototype, "wphone", void 0);
    return CoreCommInsuredVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.navigation.rulesupdate.ts":
/*!********************************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.navigation.rulesupdate.ts ***!
  \********************************************************************************/
/*! exports provided: PerLobDeclineNavigationInfoVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerLobDeclineNavigationInfoVsProxy", function() { return PerLobDeclineNavigationInfoVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_common_uw_rulesresult_decision__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.common.uw.rulesresult.decision */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.common.uw.rulesresult.decision.ts");
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


var PerLobDeclineNavigationInfoVsProxy = /** @class */ (function (_super) {
    __extends(PerLobDeclineNavigationInfoVsProxy, _super);
    function PerLobDeclineNavigationInfoVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PerLobDeclineNavigationInfoVsProxy.prototype, "effectiveProduct", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PerLobDeclineNavigationInfoVsProxy.prototype, "formName", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_common_uw_rulesresult_decision__WEBPACK_IMPORTED_MODULE_1__["CoreCommUwDecisionVsProxy"])
    ], PerLobDeclineNavigationInfoVsProxy.prototype, "sourceDecision", void 0);
    return PerLobDeclineNavigationInfoVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.navigation.ts":
/*!********************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.navigation.ts ***!
  \********************************************************************/
/*! exports provided: NavigationInfoVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationInfoVsProxy", function() { return NavigationInfoVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_navigation_rulesupdate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.navigation.rulesupdate */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.navigation.rulesupdate.ts");
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


var NavigationInfoVsProxy_lobDeclineMap_Impl = /** @class */ (function (_super) {
    __extends(NavigationInfoVsProxy_lobDeclineMap_Impl, _super);
    function NavigationInfoVsProxy_lobDeclineMap_Impl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_navigation_rulesupdate__WEBPACK_IMPORTED_MODULE_1__["PerLobDeclineNavigationInfoVsProxy"])
    ], NavigationInfoVsProxy_lobDeclineMap_Impl.prototype, "bbop", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_navigation_rulesupdate__WEBPACK_IMPORTED_MODULE_1__["PerLobDeclineNavigationInfoVsProxy"])
    ], NavigationInfoVsProxy_lobDeclineMap_Impl.prototype, "cmau", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_navigation_rulesupdate__WEBPACK_IMPORTED_MODULE_1__["PerLobDeclineNavigationInfoVsProxy"])
    ], NavigationInfoVsProxy_lobDeclineMap_Impl.prototype, "umbr", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_navigation_rulesupdate__WEBPACK_IMPORTED_MODULE_1__["PerLobDeclineNavigationInfoVsProxy"])
    ], NavigationInfoVsProxy_lobDeclineMap_Impl.prototype, "work", void 0);
    return NavigationInfoVsProxy_lobDeclineMap_Impl;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));
var NavigationInfoVsProxy = /** @class */ (function (_super) {
    __extends(NavigationInfoVsProxy, _super);
    function NavigationInfoVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], NavigationInfoVsProxy.prototype, "completedScreenEffectiveProduct", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], NavigationInfoVsProxy.prototype, "completedScreenFormName", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(NavigationInfoVsProxy_lobDeclineMap_Impl)
    ], NavigationInfoVsProxy.prototype, "lobDeclineMap", void 0);
    return NavigationInfoVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.payment.ts":
/*!*****************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.payment.ts ***!
  \*****************************************************************/
/*! exports provided: CoreCommPaymentVs$XpressccProxy, CoreCommPaymentVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommPaymentVs$XpressccProxy", function() { return CoreCommPaymentVs$XpressccProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommPaymentVsProxy", function() { return CoreCommPaymentVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
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

var CoreCommPaymentVs$XpressccProxy = /** @class */ (function (_super) {
    __extends(CoreCommPaymentVs$XpressccProxy, _super);
    function CoreCommPaymentVs$XpressccProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVs$XpressccProxy.prototype, "account", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVs$XpressccProxy.prototype, "accountlast4", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVs$XpressccProxy.prototype, "carddesc", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVs$XpressccProxy.prototype, "expdate", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVs$XpressccProxy.prototype, "fname", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVs$XpressccProxy.prototype, "lname", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVs$XpressccProxy.prototype, "pnref", void 0);
    return CoreCommPaymentVs$XpressccProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommPaymentVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommPaymentVsProxy, _super);
    function CoreCommPaymentVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "accountlast4", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "xpressroutingverify", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "cardtype", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "ccaddress1", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "cccity", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "ccfname", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "cclname", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "ccname", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "ccphone", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "ccstate", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "ccType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "cctype2", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "ccxdate", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "cczip", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "downpayment", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "downPaymentAmount", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "downPaymentAmountBop", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "downPaymentAmountCmau", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "downPaymentAmountUmbr", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "downPaymentAmountWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "downPaymentType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "grossamt", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "installmentAmount", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "installmentcount", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "insuranceinfoagree", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "insuredeftaccount", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "insuredeftaccountverify", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "insuredeftbank", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "insuredeftfname", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "carddesc", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "insuredeftname", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "insuredeftphone", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "insuredeftrouting", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "insuredeftroutingverify", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "paymentId", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "paymentTimestamp", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "phonenumber", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "prodstatementagree", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "recurringPaymentsIndicator", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "recurringPaymentType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "requestedpayplan", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "shareAccountInformationIndicator", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "verbalauthorizationefti", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "xpressaccount", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "xpressaccountverify", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "xpressbank", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommPaymentVs$XpressccProxy)
    ], CoreCommPaymentVsProxy.prototype, "xpresscc", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "xpressccaddress1", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "xpresscccity", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "xpressccphone", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "xpressccstate", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "xpresscczip", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "xpressfname", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "xpressfullname", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "xpresslname", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "xpressphone", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "xpressrouting", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPaymentVsProxy.prototype, "insuredeftlname", void 0);
    return CoreCommPaymentVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.rateresult.ts":
/*!********************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.rateresult.ts ***!
  \********************************************************************/
/*! exports provided: DividendPlanVsProxy, CommissionVsProxy, StateModWrapperProxy, PricingToolsWorkVsProxy, AdditionalQuotedScenarioProxy, CoreCommPolicyQuoteInqRsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DividendPlanVsProxy", function() { return DividendPlanVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommissionVsProxy", function() { return CommissionVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateModWrapperProxy", function() { return StateModWrapperProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingToolsWorkVsProxy", function() { return PricingToolsWorkVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionalQuotedScenarioProxy", function() { return AdditionalQuotedScenarioProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommPolicyQuoteInqRsProxy", function() { return CoreCommPolicyQuoteInqRsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
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

var DividendPlanVsProxy = /** @class */ (function (_super) {
    __extends(DividendPlanVsProxy, _super);
    function DividendPlanVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], DividendPlanVsProxy.prototype, "description", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], DividendPlanVsProxy.prototype, "minimumPremium", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], DividendPlanVsProxy.prototype, "name", void 0);
    return DividendPlanVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CommissionVsProxy = /** @class */ (function (_super) {
    __extends(CommissionVsProxy, _super);
    function CommissionVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CommissionVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var StateModWrapperProxy = /** @class */ (function (_super) {
    __extends(StateModWrapperProxy, _super);
    function StateModWrapperProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], StateModWrapperProxy.prototype, "classPeculiarMod", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(DividendPlanVsProxy)
    ], StateModWrapperProxy.prototype, "dividendPlan", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], StateModWrapperProxy.prototype, "employeeMod", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], StateModWrapperProxy.prototype, "exposureTotal", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], StateModWrapperProxy.prototype, "hazGrpWeightTotal", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], StateModWrapperProxy.prototype, "manageCoopMod", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], StateModWrapperProxy.prototype, "manageSafetyMod", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], StateModWrapperProxy.prototype, "manPremTotal", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], StateModWrapperProxy.prototype, "schedMod", void 0);
    return StateModWrapperProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var PricingToolsWorkVsProxy_perState_Impl = /** @class */ (function (_super) {
    __extends(PricingToolsWorkVsProxy_perState_Impl, _super);
    function PricingToolsWorkVsProxy_perState_Impl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "al", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "ak", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "az", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "ar", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "ca", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "co", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "ct", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "de", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "dc", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "fl", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "ga", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "hi", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "id", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "il", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "in", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "ia", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "ks", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "ky", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "la", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "ma", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "me", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "md", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "mi", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "mn", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "mo", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "ms", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "mt", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "ne", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "nv", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "nh", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "nj", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "nm", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "ny", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "nc", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "nd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "oh", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "ok", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "or", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "pa", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "ri", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "sc", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "sd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "tn", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "tx", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "ut", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "vt", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "va", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "wa", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "wv", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "wi", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(StateModWrapperProxy)
    ], PricingToolsWorkVsProxy_perState_Impl.prototype, "wy", void 0);
    return PricingToolsWorkVsProxy_perState_Impl;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));
var PricingToolsWorkVsProxy = /** @class */ (function (_super) {
    __extends(PricingToolsWorkVsProxy, _super);
    function PricingToolsWorkVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], PricingToolsWorkVsProxy.prototype, "addtlEntityExplanation", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(PricingToolsWorkVsProxy_perState_Impl)
    ], PricingToolsWorkVsProxy.prototype, "perState", void 0);
    return PricingToolsWorkVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var AdditionalQuotedScenarioProxy = /** @class */ (function (_super) {
    __extends(AdditionalQuotedScenarioProxy, _super);
    function AdditionalQuotedScenarioProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CommissionVsProxy)
    ], AdditionalQuotedScenarioProxy.prototype, "commission", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(PricingToolsWorkVsProxy)
    ], AdditionalQuotedScenarioProxy.prototype, "pTWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AdditionalQuotedScenarioProxy.prototype, "sPXFullTermAmt", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AdditionalQuotedScenarioProxy.prototype, "sPXPolicyFee", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AdditionalQuotedScenarioProxy.prototype, "sPXPremiumAmt", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AdditionalQuotedScenarioProxy.prototype, "sPXTaxes", void 0);
    return AdditionalQuotedScenarioProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommPolicyQuoteInqRsProxy = /** @class */ (function (_super) {
    __extends(CoreCommPolicyQuoteInqRsProxy, _super);
    function CoreCommPolicyQuoteInqRsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([AdditionalQuotedScenarioProxy])
    ], CoreCommPolicyQuoteInqRsProxy.prototype, "additionalQuotedScenario", void 0);
    return CoreCommPolicyQuoteInqRsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.ts":
/*!*********************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.ts ***!
  \*********************************************************/
/*! exports provided: CoreCommPolicyVs$IEndorsement$IXpresspayadd$IXpresspayaddCCProxy, CoreCommPolicyVs$IEndorsement$IXpresspayaddProxy, CoreCommControlVs$ISignioProxy, CoverageProxy, CoreCommPolicyVs$IEndorsementProxy, InstecIssuanceVsProxy, CoreCommCrimeVsProxy, InstecQuoteCommitVsProxy, CoreCommAntoocVsProxy, InstecQuoteDeclineVsProxy, CoreCommAddressVsProxy, InstecVsProxy, CoreCommLocationVsProxy, CoreCommControlVsProxy, LobVsProxy, CoreCommRateResultVsProxy, CoreCommPolicyVsProxy, CoreCommVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommPolicyVs$IEndorsement$IXpresspayadd$IXpresspayaddCCProxy", function() { return CoreCommPolicyVs$IEndorsement$IXpresspayadd$IXpresspayaddCCProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommPolicyVs$IEndorsement$IXpresspayaddProxy", function() { return CoreCommPolicyVs$IEndorsement$IXpresspayaddProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommControlVs$ISignioProxy", function() { return CoreCommControlVs$ISignioProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverageProxy", function() { return CoverageProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommPolicyVs$IEndorsementProxy", function() { return CoreCommPolicyVs$IEndorsementProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstecIssuanceVsProxy", function() { return InstecIssuanceVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommCrimeVsProxy", function() { return CoreCommCrimeVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstecQuoteCommitVsProxy", function() { return InstecQuoteCommitVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommAntoocVsProxy", function() { return CoreCommAntoocVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstecQuoteDeclineVsProxy", function() { return InstecQuoteDeclineVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommAddressVsProxy", function() { return CoreCommAddressVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstecVsProxy", function() { return InstecVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommLocationVsProxy", function() { return CoreCommLocationVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommControlVsProxy", function() { return CoreCommControlVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LobVsProxy", function() { return LobVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommRateResultVsProxy", function() { return CoreCommRateResultVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommPolicyVsProxy", function() { return CoreCommPolicyVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommVsProxy", function() { return CoreCommVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.common */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.common.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_common_txnhistory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.common.txnhistory */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.common.txnhistory.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_rateresult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.rateresult */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.rateresult.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_bbop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.bbop */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.bbop.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_ccpk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.ccpk */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.ccpk.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_cmau__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.cmau */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.cmau.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_co__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.co */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.co.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_indicator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.indicator */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.indicator.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_payment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.payment */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.payment.ts");
/* harmony import */ var _com_arrow_model_def__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./com.arrow.model.def */ "./src/ts/gen/impl/com.arrow.model.def.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_umbr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.umbr */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.umbr.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_work__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.work */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.work.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_insured__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.insured */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.insured.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_navigation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.navigation */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.navigation.ts");
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















var CoreCommPolicyVs$IEndorsement$IXpresspayadd$IXpresspayaddCCProxy = /** @class */ (function (_super) {
    __extends(CoreCommPolicyVs$IEndorsement$IXpresspayadd$IXpresspayaddCCProxy, _super);
    function CoreCommPolicyVs$IEndorsement$IXpresspayadd$IXpresspayaddCCProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPolicyVs$IEndorsement$IXpresspayadd$IXpresspayaddCCProxy.prototype, "account", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPolicyVs$IEndorsement$IXpresspayadd$IXpresspayaddCCProxy.prototype, "accountlast4", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPolicyVs$IEndorsement$IXpresspayadd$IXpresspayaddCCProxy.prototype, "expdate", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPolicyVs$IEndorsement$IXpresspayadd$IXpresspayaddCCProxy.prototype, "pnref", void 0);
    return CoreCommPolicyVs$IEndorsement$IXpresspayadd$IXpresspayaddCCProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommPolicyVs$IEndorsement$IXpresspayaddProxy = /** @class */ (function (_super) {
    __extends(CoreCommPolicyVs$IEndorsement$IXpresspayaddProxy, _super);
    function CoreCommPolicyVs$IEndorsement$IXpresspayaddProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPolicyVs$IEndorsement$IXpresspayaddProxy.prototype, "cardtype", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommPolicyVs$IEndorsement$IXpresspayadd$IXpresspayaddCCProxy)
    ], CoreCommPolicyVs$IEndorsement$IXpresspayaddProxy.prototype, "cC", void 0);
    return CoreCommPolicyVs$IEndorsement$IXpresspayaddProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommControlVs$ISignioProxy = /** @class */ (function (_super) {
    __extends(CoreCommControlVs$ISignioProxy, _super);
    function CoreCommControlVs$ISignioProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommControlVs$ISignioProxy.prototype, "authorizationMESSAGE", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommControlVs$ISignioProxy.prototype, "authorizationPNREF", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommControlVs$ISignioProxy.prototype, "authorizationSTATUS", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommControlVs$ISignioProxy.prototype, "message", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommControlVs$ISignioProxy.prototype, "resultcode", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommControlVs$ISignioProxy.prototype, "status", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommControlVs$ISignioProxy.prototype, "txnPNREF", void 0);
    return CoreCommControlVs$ISignioProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoverageProxy = /** @class */ (function (_super) {
    __extends(CoverageProxy, _super);
    function CoverageProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoverageProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoverageProxy.prototype, "includeInd", void 0);
    return CoverageProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommPolicyVs$IEndorsementProxy = /** @class */ (function (_super) {
    __extends(CoreCommPolicyVs$IEndorsementProxy, _super);
    function CoreCommPolicyVs$IEndorsementProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommPolicyVs$IEndorsement$IXpresspayaddProxy)
    ], CoreCommPolicyVs$IEndorsementProxy.prototype, "xpressPayAdd", void 0);
    return CoreCommPolicyVs$IEndorsementProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var InstecIssuanceVsProxy = /** @class */ (function (_super) {
    __extends(InstecIssuanceVsProxy, _super);
    function InstecIssuanceVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], InstecIssuanceVsProxy.prototype, "message", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], InstecIssuanceVsProxy.prototype, "statusCode", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], InstecIssuanceVsProxy.prototype, "timestamp", void 0);
    return InstecIssuanceVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommCrimeVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommCrimeVsProxy, _super);
    function CoreCommCrimeVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCrimeVsProxy.prototype, "aggregateCrimesAgainstPerson", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCrimeVsProxy.prototype, "robbery", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCrimeVsProxy.prototype, "aggrivatedAssault", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCrimeVsProxy.prototype, "arson", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCrimeVsProxy.prototype, "autoTheft", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCrimeVsProxy.prototype, "burglary", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCrimeVsProxy.prototype, "aggregateCrimesAgainstProperty", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCrimeVsProxy.prototype, "homicide", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCrimeVsProxy.prototype, "larceny", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCrimeVsProxy.prototype, "message", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCrimeVsProxy.prototype, "rape", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommCrimeVsProxy.prototype, "callResult", void 0);
    return CoreCommCrimeVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var InstecQuoteCommitVsProxy = /** @class */ (function (_super) {
    __extends(InstecQuoteCommitVsProxy, _super);
    function InstecQuoteCommitVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], InstecQuoteCommitVsProxy.prototype, "message", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], InstecQuoteCommitVsProxy.prototype, "statusCode", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], InstecQuoteCommitVsProxy.prototype, "timestamp", void 0);
    return InstecQuoteCommitVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommAntoocVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommAntoocVsProxy, _super);
    function CoreCommAntoocVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([_com_arrow_model_def_corecomm_common__WEBPACK_IMPORTED_MODULE_1__["PersorgProxy"]])
    ], CoreCommAntoocVsProxy.prototype, "persorg", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommAntoocVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommAntoocVsProxy.prototype, "includeInd", void 0);
    return CoreCommAntoocVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var InstecQuoteDeclineVsProxy = /** @class */ (function (_super) {
    __extends(InstecQuoteDeclineVsProxy, _super);
    function InstecQuoteDeclineVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], InstecQuoteDeclineVsProxy.prototype, "message", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], InstecQuoteDeclineVsProxy.prototype, "statusCode", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], InstecQuoteDeclineVsProxy.prototype, "timestamp", void 0);
    return InstecQuoteDeclineVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommAddressVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommAddressVsProxy, _super);
    function CoreCommAddressVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommAddressVsProxy.prototype, "address", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommAddressVsProxy.prototype, "zip", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommAddressVsProxy.prototype, "based", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommAddressVsProxy.prototype, "buildings", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommAddressVsProxy.prototype, "confirmation", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommAddressVsProxy.prototype, "countyName", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommAddressVsProxy.prototype, "postDir", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommAddressVsProxy.prototype, "preDir", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommAddressVsProxy.prototype, "recordType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommAddressVsProxy.prototype, "scrubberCalled", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommAddressVsProxy.prototype, "scrubberResult", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommAddressVsProxy.prototype, "addressLine", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommAddressVsProxy.prototype, "street", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommAddressVsProxy.prototype, "streetNum", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommAddressVsProxy.prototype, "streetType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommAddressVsProxy.prototype, "unit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommAddressVsProxy.prototype, "userCountyName", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommAddressVsProxy.prototype, "zipAddOn", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommAddressVsProxy.prototype, "addressLine2", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommAddressVsProxy.prototype, "city", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommAddressVsProxy.prototype, "state", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommAddressVsProxy.prototype, "secondaryName", void 0);
    return CoreCommAddressVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var InstecVsProxy = /** @class */ (function (_super) {
    __extends(InstecVsProxy, _super);
    function InstecVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(InstecIssuanceVsProxy)
    ], InstecVsProxy.prototype, "finalize", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(InstecIssuanceVsProxy)
    ], InstecVsProxy.prototype, "issuance", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], InstecVsProxy.prototype, "policyNumber", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(InstecQuoteCommitVsProxy)
    ], InstecVsProxy.prototype, "quoteCommit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(InstecQuoteDeclineVsProxy)
    ], InstecVsProxy.prototype, "quoteDecline", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], InstecVsProxy.prototype, "quoteNumber", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], InstecVsProxy.prototype, "storageId", void 0);
    return InstecVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommLocationVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommLocationVsProxy, _super);
    function CoreCommLocationVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommCrimeVsProxy)
    ], CoreCommLocationVsProxy.prototype, "crime", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommLocationVsProxy.prototype, "zip", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommLocationVsProxy.prototype, "addressLine", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommLocationVsProxy.prototype, "based", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommLocationVsProxy.prototype, "buildings", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommLocationVsProxy.prototype, "confirmation", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommLocationVsProxy.prototype, "countyName", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommLocationVsProxy.prototype, "postDir", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommLocationVsProxy.prototype, "preDir", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommLocationVsProxy.prototype, "recordType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommLocationVsProxy.prototype, "scrubberCalled", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommLocationVsProxy.prototype, "address", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommLocationVsProxy.prototype, "secondaryName", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommLocationVsProxy.prototype, "street", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommLocationVsProxy.prototype, "streetNum", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommLocationVsProxy.prototype, "streetType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommLocationVsProxy.prototype, "unit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommLocationVsProxy.prototype, "userCountyName", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommLocationVsProxy.prototype, "zipAddOn", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommLocationVsProxy.prototype, "addressLine2", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommLocationVsProxy.prototype, "city", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommLocationVsProxy.prototype, "state", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommLocationVsProxy.prototype, "scrubberResult", void 0);
    return CoreCommLocationVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommControlVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommControlVsProxy, _super);
    function CoreCommControlVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommControlVsProxy.prototype, "authorizationredirect", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommControlVsProxy.prototype, "xmitType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommControlVsProxy.prototype, "bridgeQuoteId", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommControlVsProxy.prototype, "buildenv", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommControlVsProxy.prototype, "clienttype", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommControlVsProxy.prototype, "dbVersion", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommControlVsProxy.prototype, "dfeaction", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommControlVsProxy.prototype, "dfevalidation", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommControlVsProxy.prototype, "exception", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommControlVsProxy.prototype, "overrideEffectiveLimit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommControlVsProxy.prototype, "prevStatusCD", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommControlVsProxy.prototype, "prodcode", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommControlVsProxy.prototype, "binderror", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommControlVsProxy.prototype, "prodsubcode", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommControlVsProxy.prototype, "quotecreated", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommControlVs$ISignioProxy)
    ], CoreCommControlVsProxy.prototype, "signio", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommControlVsProxy.prototype, "site", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommControlVsProxy.prototype, "sourcesystem", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommControlVsProxy.prototype, "submitted", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_common_txnhistory__WEBPACK_IMPORTED_MODULE_2__["CoreCommTxnHistoryVsProxy"])
    ], CoreCommControlVsProxy.prototype, "txnHistory", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommControlVsProxy.prototype, "type", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommControlVsProxy.prototype, "version", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommControlVsProxy.prototype, "xmitdate", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommControlVsProxy.prototype, "xmittime", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommControlVsProxy.prototype, "prodmaincode", void 0);
    return CoreCommControlVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var LobVsProxy = /** @class */ (function (_super) {
    __extends(LobVsProxy, _super);
    function LobVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LobVsProxy.prototype, "finalized", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(InstecVsProxy)
    ], LobVsProxy.prototype, "instec", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], LobVsProxy.prototype, "uniqueStatesList", void 0);
    return LobVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommRateResultVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommRateResultVsProxy, _super);
    function CoreCommRateResultVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_rateresult__WEBPACK_IMPORTED_MODULE_3__["CoreCommPolicyQuoteInqRsProxy"])
    ], CoreCommRateResultVsProxy.prototype, "coreCommPolicyQuoteInqRs", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommRateResultVsProxy.prototype, "number", void 0);
    return CoreCommRateResultVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommPolicyVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommPolicyVsProxy, _super);
    function CoreCommPolicyVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPolicyVsProxy.prototype, "agentid", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPolicyVsProxy.prototype, "quoteId", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPolicyVsProxy.prototype, "brokerfee", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_ccpk__WEBPACK_IMPORTED_MODULE_5__["CoreCommCcpkVsProxy"])
    ], CoreCommPolicyVsProxy.prototype, "ccpkSet", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_cmau__WEBPACK_IMPORTED_MODULE_6__["CoreCommCmauVsProxy"])
    ], CoreCommPolicyVsProxy.prototype, "cmauSet", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_common__WEBPACK_IMPORTED_MODULE_1__["CoreCommCommonVsProxy"])
    ], CoreCommPolicyVsProxy.prototype, "commonSet", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPolicyVsProxy.prototype, "company", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_co__WEBPACK_IMPORTED_MODULE_7__["CoreCommCoVsProxy"])
    ], CoreCommPolicyVsProxy.prototype, "coSet", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPolicyVsProxy.prototype, "cusno", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPolicyVsProxy.prototype, "custid", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPolicyVsProxy.prototype, "customerid", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPolicyVsProxy.prototype, "effective", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPolicyVsProxy.prototype, "effectiveProduct", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommPolicyVs$IEndorsementProxy)
    ], CoreCommPolicyVsProxy.prototype, "endorsements", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPolicyVsProxy.prototype, "expiration", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_bbop__WEBPACK_IMPORTED_MODULE_4__["CoreCommBbopVsProxy"])
    ], CoreCommPolicyVsProxy.prototype, "bbopSet", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPolicyVsProxy.prototype, "formName", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPolicyVsProxy.prototype, "formvalid", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_indicator__WEBPACK_IMPORTED_MODULE_8__["CoreCommIndicatorVsProxy"])
    ], CoreCommPolicyVsProxy.prototype, "indicator", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPolicyVsProxy.prototype, "loadform", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_payment__WEBPACK_IMPORTED_MODULE_9__["CoreCommPaymentVsProxy"])
    ], CoreCommPolicyVsProxy.prototype, "paymentSet", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPolicyVsProxy.prototype, "polno", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def__WEBPACK_IMPORTED_MODULE_10__["ProducerVsProxy"])
    ], CoreCommPolicyVsProxy.prototype, "producer", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPolicyVsProxy.prototype, "producerstatment", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPolicyVsProxy.prototype, "product", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPolicyVsProxy.prototype, "state", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_umbr__WEBPACK_IMPORTED_MODULE_11__["CoreCommUmbrVsProxy"])
    ], CoreCommPolicyVsProxy.prototype, "umbrSet", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPolicyVsProxy.prototype, "uniqueStatesList", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work__WEBPACK_IMPORTED_MODULE_12__["CoreCommWorkVsProxy"])
    ], CoreCommPolicyVsProxy.prototype, "workSet", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommPolicyVsProxy.prototype, "formgroup", void 0);
    return CoreCommPolicyVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommVsProxy, _super);
    function CoreCommVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommVsProxy.prototype, "authorizationType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommVsProxy.prototype, "company", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def__WEBPACK_IMPORTED_MODULE_10__["ControlIdVsProxy"])
    ], CoreCommVsProxy.prototype, "controlId", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommControlVsProxy)
    ], CoreCommVsProxy.prototype, "controlSet", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_insured__WEBPACK_IMPORTED_MODULE_13__["CoreCommInsuredVsProxy"])
    ], CoreCommVsProxy.prototype, "insuredSet", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_navigation__WEBPACK_IMPORTED_MODULE_14__["NavigationInfoVsProxy"])
    ], CoreCommVsProxy.prototype, "navigation", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommPolicyVsProxy)
    ], CoreCommVsProxy.prototype, "policy", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommVsProxy.prototype, "processingStatus", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommVsProxy.prototype, "products", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommVsProxy.prototype, "rateCallType", void 0);
    return CoreCommVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.umbr.coverages.ts":
/*!************************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.umbr.coverages.ts ***!
  \************************************************************************/
/*! exports provided: AntoocCoverageVsProxy, WtrraoCoverageVsProxy, CoreCommUmbrCoveragesVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntoocCoverageVsProxy", function() { return AntoocCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WtrraoCoverageVsProxy", function() { return WtrraoCoverageVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommUmbrCoveragesVsProxy", function() { return CoreCommUmbrCoveragesVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
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

var AntoocCoverageVsProxy = /** @class */ (function (_super) {
    __extends(AntoocCoverageVsProxy, _super);
    function AntoocCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AntoocCoverageVsProxy.prototype, "numAI", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AntoocCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AntoocCoverageVsProxy.prototype, "includeInd", void 0);
    return AntoocCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var WtrraoCoverageVsProxy = /** @class */ (function (_super) {
    __extends(WtrraoCoverageVsProxy, _super);
    function WtrraoCoverageVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WtrraoCoverageVsProxy.prototype, "numAI", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WtrraoCoverageVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WtrraoCoverageVsProxy.prototype, "includeInd", void 0);
    return WtrraoCoverageVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommUmbrCoveragesVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommUmbrCoveragesVsProxy, _super);
    function CoreCommUmbrCoveragesVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(AntoocCoverageVsProxy)
    ], CoreCommUmbrCoveragesVsProxy.prototype, "antooc", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(WtrraoCoverageVsProxy)
    ], CoreCommUmbrCoveragesVsProxy.prototype, "wtrrao", void 0);
    return CoreCommUmbrCoveragesVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.umbr.location.ts":
/*!***********************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.umbr.location.ts ***!
  \***********************************************************************/
/*! exports provided: CoreCommUmbrLocationVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommUmbrLocationVsProxy", function() { return CoreCommUmbrLocationVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
/* harmony import */ var _com_arrow_model_def_corecomm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.ts");
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


var CoreCommUmbrLocationVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommUmbrLocationVsProxy, _super);
    function CoreCommUmbrLocationVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm__WEBPACK_IMPORTED_MODULE_1__["CoreCommCrimeVsProxy"])
    ], CoreCommUmbrLocationVsProxy.prototype, "crime", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrLocationVsProxy.prototype, "zip", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrLocationVsProxy.prototype, "addressLine", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrLocationVsProxy.prototype, "based", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrLocationVsProxy.prototype, "buildings", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrLocationVsProxy.prototype, "confirmation", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrLocationVsProxy.prototype, "countyName", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrLocationVsProxy.prototype, "postDir", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrLocationVsProxy.prototype, "preDir", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrLocationVsProxy.prototype, "recordType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrLocationVsProxy.prototype, "scrubberCalled", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrLocationVsProxy.prototype, "address", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrLocationVsProxy.prototype, "secondaryName", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrLocationVsProxy.prototype, "street", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrLocationVsProxy.prototype, "streetNum", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrLocationVsProxy.prototype, "streetType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrLocationVsProxy.prototype, "unit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrLocationVsProxy.prototype, "userCountyName", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrLocationVsProxy.prototype, "zipAddOn", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrLocationVsProxy.prototype, "addressLine2", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrLocationVsProxy.prototype, "city", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrLocationVsProxy.prototype, "state", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrLocationVsProxy.prototype, "scrubberResult", void 0);
    return CoreCommUmbrLocationVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.umbr.ts":
/*!**************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.umbr.ts ***!
  \**************************************************************/
/*! exports provided: CoreCommUmbrVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommUmbrVsProxy", function() { return CoreCommUmbrVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
/* harmony import */ var _com_arrow_model_def_corecomm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.common */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.common.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_umbr_coverages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.umbr.coverages */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.umbr.coverages.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_umbr_location__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.umbr.location */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.umbr.location.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_umbr_workother__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.umbr.workother */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.umbr.workother.ts");
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






var CoreCommUmbrVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommUmbrVsProxy, _super);
    function CoreCommUmbrVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm__WEBPACK_IMPORTED_MODULE_1__["CoreCommAntoocVsProxy"])
    ], CoreCommUmbrVsProxy.prototype, "antooc", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrVsProxy.prototype, "uniqueStatesList", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrVsProxy.prototype, "cmauCarrierInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrVsProxy.prototype, "commission", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_common__WEBPACK_IMPORTED_MODULE_2__["CommissionMapVsProxy"])
    ], CoreCommUmbrVsProxy.prototype, "commissionMap", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_umbr_coverages__WEBPACK_IMPORTED_MODULE_3__["CoreCommUmbrCoveragesVsProxy"])
    ], CoreCommUmbrVsProxy.prototype, "coverages", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrVsProxy.prototype, "lIABRequestedLimit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrVsProxy.prototype, "cmaucarrier", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_umbr_workother__WEBPACK_IMPORTED_MODULE_5__["CoreCommUmbrWorkUnderlyingProxy"])
    ], CoreCommUmbrVsProxy.prototype, "otherAgencyWCInfo", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrVsProxy.prototype, "retention", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrVsProxy.prototype, "uwFiveyearsInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrVsProxy.prototype, "finalized", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm__WEBPACK_IMPORTED_MODULE_1__["InstecVsProxy"])
    ], CoreCommUmbrVsProxy.prototype, "instec", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([_com_arrow_model_def_corecomm_umbr_location__WEBPACK_IMPORTED_MODULE_4__["CoreCommUmbrLocationVsProxy"]])
    ], CoreCommUmbrVsProxy.prototype, "locationList", void 0);
    return CoreCommUmbrVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.umbr.workother.ts":
/*!************************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.umbr.workother.ts ***!
  \************************************************************************/
/*! exports provided: CoreCommUmbrWorkUnderlyingProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommUmbrWorkUnderlyingProxy", function() { return CoreCommUmbrWorkUnderlyingProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
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

var CoreCommUmbrWorkUnderlyingProxy = /** @class */ (function (_super) {
    __extends(CoreCommUmbrWorkUnderlyingProxy, _super);
    function CoreCommUmbrWorkUnderlyingProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrWorkUnderlyingProxy.prototype, "amrating", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrWorkUnderlyingProxy.prototype, "wcunderlyingInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrWorkUnderlyingProxy.prototype, "injuryByDisease", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrWorkUnderlyingProxy.prototype, "limitByDisease", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrWorkUnderlyingProxy.prototype, "wCCarrier", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrWorkUnderlyingProxy.prototype, "wCEffectiveDate", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrWorkUnderlyingProxy.prototype, "injuryByAccident", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrWorkUnderlyingProxy.prototype, "wcOtherStateFund", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrWorkUnderlyingProxy.prototype, "wCPolicyNumber", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrWorkUnderlyingProxy.prototype, "wcstatefundInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrWorkUnderlyingProxy.prototype, "wcStateFundStates", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommUmbrWorkUnderlyingProxy.prototype, "wCExpirationDate", void 0);
    return CoreCommUmbrWorkUnderlyingProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.work.ai.ts":
/*!*****************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.work.ai.ts ***!
  \*****************************************************************/
/*! exports provided: CoreCommWorkAiVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommWorkAiVsProxy", function() { return CoreCommWorkAiVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
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

var CoreCommWorkAiVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommWorkAiVsProxy, _super);
    function CoreCommWorkAiVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkAiVsProxy.prototype, "dBAInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkAiVsProxy.prototype, "entityType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkAiVsProxy.prototype, "fein", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkAiVsProxy.prototype, "location", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkAiVsProxy.prototype, "name", void 0);
    return CoreCommWorkAiVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.work.commission.ts":
/*!*************************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.work.commission.ts ***!
  \*************************************************************************/
/*! exports provided: CommissionMapVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommissionMapVsProxy", function() { return CommissionMapVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
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

var CommissionMapVsProxy = /** @class */ (function (_super) {
    __extends(CommissionMapVsProxy, _super);
    function CommissionMapVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CommissionMapVsProxy.prototype, "agencyBill401", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CommissionMapVsProxy.prototype, "premiumTier", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CommissionMapVsProxy.prototype, "agencyBill403", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CommissionMapVsProxy.prototype, "agencyBill404", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CommissionMapVsProxy.prototype, "agencyBill405", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CommissionMapVsProxy.prototype, "agencyBill406", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CommissionMapVsProxy.prototype, "agencyBill407", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CommissionMapVsProxy.prototype, "agencyBill408", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CommissionMapVsProxy.prototype, "agencyBill409", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CommissionMapVsProxy.prototype, "agencyBill410", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CommissionMapVsProxy.prototype, "agencyBill402", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CommissionMapVsProxy.prototype, "directBill402", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CommissionMapVsProxy.prototype, "directBill403", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CommissionMapVsProxy.prototype, "directBill404", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CommissionMapVsProxy.prototype, "directBill405", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CommissionMapVsProxy.prototype, "directBill406", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CommissionMapVsProxy.prototype, "directBill407", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CommissionMapVsProxy.prototype, "directBill408", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CommissionMapVsProxy.prototype, "directBill409", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CommissionMapVsProxy.prototype, "directBill410", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CommissionMapVsProxy.prototype, "directBill401", void 0);
    return CommissionMapVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.work.erating.ts":
/*!**********************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.work.erating.ts ***!
  \**********************************************************************/
/*! exports provided: EratingParamsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EratingParamsProxy", function() { return EratingParamsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
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

var EratingParamsProxy = /** @class */ (function (_super) {
    __extends(EratingParamsProxy, _super);
    function EratingParamsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], EratingParamsProxy.prototype, "showOnForm", void 0);
    return EratingParamsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.work.individual.ts":
/*!*************************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.work.individual.ts ***!
  \*************************************************************************/
/*! exports provided: CoreCommWorkIndividualVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommWorkIndividualVsProxy", function() { return CoreCommWorkIndividualVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
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

var CoreCommWorkIndividualVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommWorkIndividualVsProxy, _super);
    function CoreCommWorkIndividualVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkIndividualVsProxy.prototype, "fName", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkIndividualVsProxy.prototype, "includedexcluded", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkIndividualVsProxy.prototype, "lName", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkIndividualVsProxy.prototype, "ownershipnum", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkIndividualVsProxy.prototype, "state", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkIndividualVsProxy.prototype, "titlerelationShip", void 0);
    return CoreCommWorkIndividualVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.work.location.ts":
/*!***********************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.work.location.ts ***!
  \***********************************************************************/
/*! exports provided: CoreCommWorkClassProxy, CoreCommWorkStopGapVsProxy, CoreCommWorkLocationVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommWorkClassProxy", function() { return CoreCommWorkClassProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommWorkStopGapVsProxy", function() { return CoreCommWorkStopGapVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommWorkLocationVsProxy", function() { return CoreCommWorkLocationVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
/* harmony import */ var _com_arrow_model_def_corecomm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.ts");
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


var CoreCommWorkClassProxy = /** @class */ (function (_super) {
    __extends(CoreCommWorkClassProxy, _super);
    function CoreCommWorkClassProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkClassProxy.prototype, "description", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkClassProxy.prototype, "ifAny", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkClassProxy.prototype, "industrygroup", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkClassProxy.prototype, "instecDescription", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkClassProxy.prototype, "code", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkClassProxy.prototype, "fulltimeemployeeamt", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkClassProxy.prototype, "parttimeemployeeamt", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkClassProxy.prototype, "payroll", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkClassProxy.prototype, "seasonalemployeeamt", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkClassProxy.prototype, "subcode", void 0);
    return CoreCommWorkClassProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommWorkStopGapVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommWorkStopGapVsProxy, _super);
    function CoreCommWorkStopGapVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkStopGapVsProxy.prototype, "limit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkStopGapVsProxy.prototype, "payroll", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkStopGapVsProxy.prototype, "includeFormInd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkStopGapVsProxy.prototype, "includeInd", void 0);
    return CoreCommWorkStopGapVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommWorkLocationVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommWorkLocationVsProxy, _super);
    function CoreCommWorkLocationVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkLocationVsProxy.prototype, "classCodes", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkLocationVsProxy.prototype, "zip", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkLocationVsProxy.prototype, "noSpecificLocation", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommWorkStopGapVsProxy)
    ], CoreCommWorkLocationVsProxy.prototype, "stopGap", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm__WEBPACK_IMPORTED_MODULE_1__["CoreCommCrimeVsProxy"])
    ], CoreCommWorkLocationVsProxy.prototype, "crime", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkLocationVsProxy.prototype, "address", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkLocationVsProxy.prototype, "addressLine", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkLocationVsProxy.prototype, "based", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkLocationVsProxy.prototype, "buildings", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkLocationVsProxy.prototype, "confirmation", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkLocationVsProxy.prototype, "countyName", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkLocationVsProxy.prototype, "postDir", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkLocationVsProxy.prototype, "preDir", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([CoreCommWorkClassProxy])
    ], CoreCommWorkLocationVsProxy.prototype, "classes", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkLocationVsProxy.prototype, "scrubberCalled", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkLocationVsProxy.prototype, "scrubberResult", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkLocationVsProxy.prototype, "secondaryName", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkLocationVsProxy.prototype, "street", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkLocationVsProxy.prototype, "streetNum", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkLocationVsProxy.prototype, "streetType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkLocationVsProxy.prototype, "unit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkLocationVsProxy.prototype, "userCountyName", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkLocationVsProxy.prototype, "zipAddOn", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkLocationVsProxy.prototype, "addressLine2", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkLocationVsProxy.prototype, "city", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkLocationVsProxy.prototype, "state", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkLocationVsProxy.prototype, "recordType", void 0);
    return CoreCommWorkLocationVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.work.memberinclusion.ts":
/*!******************************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.work.memberinclusion.ts ***!
  \******************************************************************************/
/*! exports provided: CoreCommWorkMemberInclusionVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommWorkMemberInclusionVsProxy", function() { return CoreCommWorkMemberInclusionVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
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

var CoreCommWorkMemberInclusionVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommWorkMemberInclusionVsProxy, _super);
    function CoreCommWorkMemberInclusionVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkMemberInclusionVsProxy.prototype, "hasExcludedOfficer", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkMemberInclusionVsProxy.prototype, "hasExcludedOther", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkMemberInclusionVsProxy.prototype, "hasExcludedPartner", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkMemberInclusionVsProxy.prototype, "hasExcludedSoleProprietor", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkMemberInclusionVsProxy.prototype, "hasIncludedOfficer", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkMemberInclusionVsProxy.prototype, "hasIncludedOther", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkMemberInclusionVsProxy.prototype, "hasIncludedPartner", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkMemberInclusionVsProxy.prototype, "hasIncludedSoleProprietor", void 0);
    return CoreCommWorkMemberInclusionVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.work.safety.ts":
/*!*********************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.work.safety.ts ***!
  \*********************************************************************/
/*! exports provided: CoreCommWorkSafetyVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommWorkSafetyVsProxy", function() { return CoreCommWorkSafetyVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
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

var CoreCommWorkSafetyVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommWorkSafetyVsProxy, _super);
    function CoreCommWorkSafetyVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkSafetyVsProxy.prototype, "dailyops", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkSafetyVsProxy.prototype, "equipmentAge", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkSafetyVsProxy.prototype, "injury", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkSafetyVsProxy.prototype, "meetings", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkSafetyVsProxy.prototype, "mvr", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkSafetyVsProxy.prototype, "protection", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkSafetyVsProxy.prototype, "returntowork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkSafetyVsProxy.prototype, "training", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkSafetyVsProxy.prototype, "turnover", void 0);
    return CoreCommWorkSafetyVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.work.taxpayerid.ts":
/*!*************************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.work.taxpayerid.ts ***!
  \*************************************************************************/
/*! exports provided: TaxpayerIdFieldsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxpayerIdFieldsProxy", function() { return TaxpayerIdFieldsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
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

var TaxpayerIdFieldsProxy = /** @class */ (function (_super) {
    __extends(TaxpayerIdFieldsProxy, _super);
    function TaxpayerIdFieldsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], TaxpayerIdFieldsProxy.prototype, "idNumber", void 0);
    return TaxpayerIdFieldsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.work.ts":
/*!**************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.work.ts ***!
  \**************************************************************/
/*! exports provided: CoreCommWorkVs$AiProxy, CoreCommWorkVs$ICoreCommWorkCompanyVsProxy, CoreCommWorkVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommWorkVs$AiProxy", function() { return CoreCommWorkVs$AiProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommWorkVs$ICoreCommWorkCompanyVsProxy", function() { return CoreCommWorkVs$ICoreCommWorkCompanyVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommWorkVsProxy", function() { return CoreCommWorkVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_work_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.work.ai */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.work.ai.ts");
/* harmony import */ var _com_arrow_model_def_corecomm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_work_uw_bureau__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.work.uw.bureau */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.work.uw.bureau.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_work_commission__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.work.commission */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.work.commission.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.work.erating */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.work.erating.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_work_individual__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.work.individual */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.work.individual.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_work_location__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.work.location */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.work.location.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_work_memberinclusion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.work.memberinclusion */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.work.memberinclusion.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_work_safety__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.work.safety */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.work.safety.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_work_taxpayerid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.work.taxpayerid */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.work.taxpayerid.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_work_uw__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.work.uw */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.work.uw.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_work_waiver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.work.waiver */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.work.waiver.ts");
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













var CoreCommWorkVs$AiProxy = /** @class */ (function (_super) {
    __extends(CoreCommWorkVs$AiProxy, _super);
    function CoreCommWorkVs$AiProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([_com_arrow_model_def_corecomm_work_ai__WEBPACK_IMPORTED_MODULE_1__["CoreCommWorkAiVsProxy"]])
    ], CoreCommWorkVs$AiProxy.prototype, "list", void 0);
    return CoreCommWorkVs$AiProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommWorkVs$ICoreCommWorkCompanyVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommWorkVs$ICoreCommWorkCompanyVsProxy, _super);
    function CoreCommWorkVs$ICoreCommWorkCompanyVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkVs$ICoreCommWorkCompanyVsProxy.prototype, "expiringpremium", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkVs$ICoreCommWorkCompanyVsProxy.prototype, "yrsinbusiness", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkVs$ICoreCommWorkCompanyVsProxy.prototype, "entitytype", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkVs$ICoreCommWorkCompanyVsProxy.prototype, "feinnumber", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkVs$ICoreCommWorkCompanyVsProxy.prototype, "name", void 0);
    return CoreCommWorkVs$ICoreCommWorkCompanyVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommWorkVsProxy_bureauMap_Impl = /** @class */ (function (_super) {
    __extends(CoreCommWorkVsProxy_bureauMap_Impl, _super);
    function CoreCommWorkVsProxy_bureauMap_Impl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_uw_bureau__WEBPACK_IMPORTED_MODULE_3__["CoreCommBureauInfoVsProxy"])
    ], CoreCommWorkVsProxy_bureauMap_Impl.prototype, "unknown", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_uw_bureau__WEBPACK_IMPORTED_MODULE_3__["CoreCommBureauInfoVsProxy"])
    ], CoreCommWorkVsProxy_bureauMap_Impl.prototype, "ncci", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_uw_bureau__WEBPACK_IMPORTED_MODULE_3__["CoreCommBureauInfoVsProxy"])
    ], CoreCommWorkVsProxy_bureauMap_Impl.prototype, "newjersey", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_uw_bureau__WEBPACK_IMPORTED_MODULE_3__["CoreCommBureauInfoVsProxy"])
    ], CoreCommWorkVsProxy_bureauMap_Impl.prototype, "california", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_uw_bureau__WEBPACK_IMPORTED_MODULE_3__["CoreCommBureauInfoVsProxy"])
    ], CoreCommWorkVsProxy_bureauMap_Impl.prototype, "delaware", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_uw_bureau__WEBPACK_IMPORTED_MODULE_3__["CoreCommBureauInfoVsProxy"])
    ], CoreCommWorkVsProxy_bureauMap_Impl.prototype, "michigan", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_uw_bureau__WEBPACK_IMPORTED_MODULE_3__["CoreCommBureauInfoVsProxy"])
    ], CoreCommWorkVsProxy_bureauMap_Impl.prototype, "oklahoma", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_uw_bureau__WEBPACK_IMPORTED_MODULE_3__["CoreCommBureauInfoVsProxy"])
    ], CoreCommWorkVsProxy_bureauMap_Impl.prototype, "pennsylvania", void 0);
    return CoreCommWorkVsProxy_bureauMap_Impl;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));
var CoreCommWorkVsProxy_eratingStateMap_Impl = /** @class */ (function (_super) {
    __extends(CoreCommWorkVsProxy_eratingStateMap_Impl, _super);
    function CoreCommWorkVsProxy_eratingStateMap_Impl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "al", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "ak", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "az", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "ar", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "ca", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "co", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "ct", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "de", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "dc", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "fl", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "ga", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "hi", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "id", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "il", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "in", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "ia", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "ks", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "ky", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "la", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "ma", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "me", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "md", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "mi", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "mn", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "mo", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "ms", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "mt", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "ne", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "nv", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "nh", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "nj", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "nm", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "ny", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "nc", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "nd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "oh", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "ok", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "or", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "pa", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "ri", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "sc", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "sd", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "tn", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "tx", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "ut", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "vt", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "va", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "wa", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "wv", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "wi", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_erating__WEBPACK_IMPORTED_MODULE_5__["EratingParamsProxy"])
    ], CoreCommWorkVsProxy_eratingStateMap_Impl.prototype, "wy", void 0);
    return CoreCommWorkVsProxy_eratingStateMap_Impl;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));
var CoreCommWorkVsProxy_taxpayerStateMap_Impl = /** @class */ (function (_super) {
    __extends(CoreCommWorkVsProxy_taxpayerStateMap_Impl, _super);
    function CoreCommWorkVsProxy_taxpayerStateMap_Impl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_taxpayerid__WEBPACK_IMPORTED_MODULE_10__["TaxpayerIdFieldsProxy"])
    ], CoreCommWorkVsProxy_taxpayerStateMap_Impl.prototype, "nj", void 0);
    return CoreCommWorkVsProxy_taxpayerStateMap_Impl;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));
var CoreCommWorkVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommWorkVsProxy, _super);
    function CoreCommWorkVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkVsProxy.prototype, "accidentLimit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkVsProxy.prototype, "uniqueStatesList", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkVsProxy.prototype, "additionalNamedInsured", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkVsProxy.prototype, "agencyBillCommission", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm__WEBPACK_IMPORTED_MODULE_2__["CoreCommAntoocVsProxy"])
    ], CoreCommWorkVsProxy.prototype, "antooc", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommWorkVsProxy_bureauMap_Impl)
    ], CoreCommWorkVsProxy.prototype, "bureauMap", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkVsProxy.prototype, "classCodes", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkVsProxy.prototype, "commission", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_commission__WEBPACK_IMPORTED_MODULE_4__["CommissionMapVsProxy"])
    ], CoreCommWorkVsProxy.prototype, "commissionMap", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommWorkVs$ICoreCommWorkCompanyVsProxy)
    ], CoreCommWorkVsProxy.prototype, "companyInfo", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkVsProxy.prototype, "directBillCommission", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkVsProxy.prototype, "diseaseLimit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkVsProxy.prototype, "effective", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkVsProxy.prototype, "empDiseaseLimit", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommWorkVsProxy_eratingStateMap_Impl)
    ], CoreCommWorkVsProxy.prototype, "eratingStateMap", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommWorkVs$AiProxy)
    ], CoreCommWorkVsProxy.prototype, "additionalInsured", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkVsProxy.prototype, "hasInclExclMembers", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([_com_arrow_model_def_corecomm_work_individual__WEBPACK_IMPORTED_MODULE_6__["CoreCommWorkIndividualVsProxy"]])
    ], CoreCommWorkVsProxy.prototype, "individuals", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkVsProxy.prototype, "industrygroups", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkVsProxy.prototype, "isConstructAndErectGroup", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkVsProxy.prototype, "isConstructOrErectGroup", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkVsProxy.prototype, "isServiceAndArtisansGroup", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([_com_arrow_model_def_corecomm_work_location__WEBPACK_IMPORTED_MODULE_7__["CoreCommWorkLocationVsProxy"]])
    ], CoreCommWorkVsProxy.prototype, "locations", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_memberinclusion__WEBPACK_IMPORTED_MODULE_8__["CoreCommWorkMemberInclusionVsProxy"])
    ], CoreCommWorkVsProxy.prototype, "memberInclusionIndicators", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_safety__WEBPACK_IMPORTED_MODULE_9__["CoreCommWorkSafetyVsProxy"])
    ], CoreCommWorkVsProxy.prototype, "safety", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommWorkVsProxy_taxpayerStateMap_Impl)
    ], CoreCommWorkVsProxy.prototype, "taxpayerStateMap", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_uw__WEBPACK_IMPORTED_MODULE_11__["CoreCommWorkUwVsProxy"])
    ], CoreCommWorkVsProxy.prototype, "uwAnswers", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_waiver__WEBPACK_IMPORTED_MODULE_12__["CoreCommWorkWaiverVsProxy"])
    ], CoreCommWorkVsProxy.prototype, "waivers", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkVsProxy.prototype, "finalized", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm__WEBPACK_IMPORTED_MODULE_2__["InstecVsProxy"])
    ], CoreCommWorkVsProxy.prototype, "instec", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkVsProxy.prototype, "expiration", void 0);
    return CoreCommWorkVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.work.uw.bureau.ts":
/*!************************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.work.uw.bureau.ts ***!
  \************************************************************************/
/*! exports provided: CoreCommBureauInfoVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommBureauInfoVsProxy", function() { return CoreCommBureauInfoVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
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

var CoreCommBureauInfoVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommBureauInfoVsProxy, _super);
    function CoreCommBureauInfoVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBureauInfoVsProxy.prototype, "expmodtype", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBureauInfoVsProxy.prototype, "riskid", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommBureauInfoVsProxy.prototype, "status", void 0);
    return CoreCommBureauInfoVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.work.uw.industry.ts":
/*!**************************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.work.uw.industry.ts ***!
  \**************************************************************************/
/*! exports provided: WorkIndustryArtisanVsProxy, WorkIndustryManufacturingPaperVsProxy, WorkIndustryLifeSciencesVsProxy, WorkIndustryHealthcareVsProxy, WorkIndustryMercantileVsProxy, WorkIndustryFoodPackagingVsProxy, WorkIndustryManufacturingMetalVsProxy, WorkIndustryAutomotiveVsProxy, WorkIndustryManufacturingMiscVsProxy, WorkIndustryHabitationalVsProxy, WorkIndustryHospitalityVsProxy, WorkIndustryManufacturingTextileVsProxy, WorkIndustryConstructionVsProxy, WorkIndustryClericalVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkIndustryArtisanVsProxy", function() { return WorkIndustryArtisanVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkIndustryManufacturingPaperVsProxy", function() { return WorkIndustryManufacturingPaperVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkIndustryLifeSciencesVsProxy", function() { return WorkIndustryLifeSciencesVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkIndustryHealthcareVsProxy", function() { return WorkIndustryHealthcareVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkIndustryMercantileVsProxy", function() { return WorkIndustryMercantileVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkIndustryFoodPackagingVsProxy", function() { return WorkIndustryFoodPackagingVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkIndustryManufacturingMetalVsProxy", function() { return WorkIndustryManufacturingMetalVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkIndustryAutomotiveVsProxy", function() { return WorkIndustryAutomotiveVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkIndustryManufacturingMiscVsProxy", function() { return WorkIndustryManufacturingMiscVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkIndustryHabitationalVsProxy", function() { return WorkIndustryHabitationalVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkIndustryHospitalityVsProxy", function() { return WorkIndustryHospitalityVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkIndustryManufacturingTextileVsProxy", function() { return WorkIndustryManufacturingTextileVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkIndustryConstructionVsProxy", function() { return WorkIndustryConstructionVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkIndustryClericalVsProxy", function() { return WorkIndustryClericalVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
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

var WorkIndustryArtisanVsProxy = /** @class */ (function (_super) {
    __extends(WorkIndustryArtisanVsProxy, _super);
    function WorkIndustryArtisanVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryArtisanVsProxy.prototype, "artisanBridgeWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryArtisanVsProxy.prototype, "artisanWeldingOperations", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryArtisanVsProxy.prototype, "artisanEmployeeTransport", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryArtisanVsProxy.prototype, "artisanFreewayWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryArtisanVsProxy.prototype, "artisanGeneralContractorsLicense", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryArtisanVsProxy.prototype, "artisanHeavyEquipment", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryArtisanVsProxy.prototype, "artisanDepthExposure", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryArtisanVsProxy.prototype, "artisanProjectType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryArtisanVsProxy.prototype, "artisanScaffolding", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryArtisanVsProxy.prototype, "artisanSpaceExposure", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryArtisanVsProxy.prototype, "artisanStateLicense", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryArtisanVsProxy.prototype, "artisanLaborType", void 0);
    return WorkIndustryArtisanVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var WorkIndustryManufacturingPaperVsProxy = /** @class */ (function (_super) {
    __extends(WorkIndustryManufacturingPaperVsProxy, _super);
    function WorkIndustryManufacturingPaperVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingPaperVsProxy.prototype, "manufacturingPaperDeliveryOperations", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingPaperVsProxy.prototype, "manufacturingPaperForklifts", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingPaperVsProxy.prototype, "manufacturingPaperForkliftTraining", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingPaperVsProxy.prototype, "manufacturingPaperLiftingGear", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingPaperVsProxy.prototype, "manufacturingPaperLockoutProcedures", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingPaperVsProxy.prototype, "manufacturingPaperMachineryAge", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingPaperVsProxy.prototype, "manufacturingPaperMachinerySecurity", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingPaperVsProxy.prototype, "manufacturingPaperProtectionGear", void 0);
    return WorkIndustryManufacturingPaperVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var WorkIndustryLifeSciencesVsProxy = /** @class */ (function (_super) {
    __extends(WorkIndustryLifeSciencesVsProxy, _super);
    function WorkIndustryLifeSciencesVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryLifeSciencesVsProxy.prototype, "lifeSciencesBacteriaManufacturing", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryLifeSciencesVsProxy.prototype, "lifeSciencesBusinessCrime", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryLifeSciencesVsProxy.prototype, "lifeSciencesMachinerySecurity", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryLifeSciencesVsProxy.prototype, "lifeSciencesOutsideLabTesting", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryLifeSciencesVsProxy.prototype, "lifeSciencesSecurityGuards", void 0);
    return WorkIndustryLifeSciencesVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var WorkIndustryHealthcareVsProxy = /** @class */ (function (_super) {
    __extends(WorkIndustryHealthcareVsProxy, _super);
    function WorkIndustryHealthcareVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryHealthcareVsProxy.prototype, "healthcareAutisticResidents", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryHealthcareVsProxy.prototype, "healthcareBloodPathogenProgram", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryHealthcareVsProxy.prototype, "healthcareCaretakers", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryHealthcareVsProxy.prototype, "healthcareEmployeeShifts", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryHealthcareVsProxy.prototype, "healthcareLiftingControls", void 0);
    return WorkIndustryHealthcareVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var WorkIndustryMercantileVsProxy = /** @class */ (function (_super) {
    __extends(WorkIndustryMercantileVsProxy, _super);
    function WorkIndustryMercantileVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryMercantileVsProxy.prototype, "mercantileBusinessCrime", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryMercantileVsProxy.prototype, "mercantileDeliveryOperations", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryMercantileVsProxy.prototype, "mercantileInjuryPrevention", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryMercantileVsProxy.prototype, "mercantileMachinerySecurity", void 0);
    return WorkIndustryMercantileVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var WorkIndustryFoodPackagingVsProxy = /** @class */ (function (_super) {
    __extends(WorkIndustryFoodPackagingVsProxy, _super);
    function WorkIndustryFoodPackagingVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryFoodPackagingVsProxy.prototype, "foodBreakEnforcement", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryFoodPackagingVsProxy.prototype, "foodDeliveryOperations", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryFoodPackagingVsProxy.prototype, "foodLiftingGear", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryFoodPackagingVsProxy.prototype, "foodMachineryAge", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryFoodPackagingVsProxy.prototype, "foodMachinerySecurity", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryFoodPackagingVsProxy.prototype, "foodProtectionGear", void 0);
    return WorkIndustryFoodPackagingVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var WorkIndustryManufacturingMetalVsProxy = /** @class */ (function (_super) {
    __extends(WorkIndustryManufacturingMetalVsProxy, _super);
    function WorkIndustryManufacturingMetalVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingMetalVsProxy.prototype, "manufacturingMetalChemicalExposure", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingMetalVsProxy.prototype, "manufacturingMetalWeldingOps", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingMetalVsProxy.prototype, "manufacturingMetalDeliveryOperations", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingMetalVsProxy.prototype, "manufacturingMetalForklifts", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingMetalVsProxy.prototype, "manufacturingMetalForkliftTraining", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingMetalVsProxy.prototype, "manufacturingMetalHazardousMaterial", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingMetalVsProxy.prototype, "manufacturingMetalCRVILeadPaint", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingMetalVsProxy.prototype, "manufacturingMetalLockoutProcedures", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingMetalVsProxy.prototype, "manufacturingMetalMachineryAge", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingMetalVsProxy.prototype, "manufacturingMetalMachinerySecurity", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingMetalVsProxy.prototype, "manufacturingMetalProtectionGear", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingMetalVsProxy.prototype, "manufacturingMetalLiftingGear", void 0);
    return WorkIndustryManufacturingMetalVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var WorkIndustryAutomotiveVsProxy = /** @class */ (function (_super) {
    __extends(WorkIndustryAutomotiveVsProxy, _super);
    function WorkIndustryAutomotiveVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryAutomotiveVsProxy.prototype, "autoASEMechanicsTraining", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryAutomotiveVsProxy.prototype, "autoDrivingOperations", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryAutomotiveVsProxy.prototype, "autoMachineryAge", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryAutomotiveVsProxy.prototype, "autoMachinerySecurity", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryAutomotiveVsProxy.prototype, "autoTowingServices", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryAutomotiveVsProxy.prototype, "autoWeldingOperations", void 0);
    return WorkIndustryAutomotiveVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var WorkIndustryManufacturingMiscVsProxy = /** @class */ (function (_super) {
    __extends(WorkIndustryManufacturingMiscVsProxy, _super);
    function WorkIndustryManufacturingMiscVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingMiscVsProxy.prototype, "manufacturingMiscChemicalExposure", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingMiscVsProxy.prototype, "manufacturingMiscDeliveryOperations", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingMiscVsProxy.prototype, "manufacturingMiscForklifts", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingMiscVsProxy.prototype, "manufacturingMiscForkliftTraining", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingMiscVsProxy.prototype, "manufacturingMiscLiftingGear", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingMiscVsProxy.prototype, "manufacturingMiscLockoutProcedures", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingMiscVsProxy.prototype, "manufacturingMiscMachineryAge", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingMiscVsProxy.prototype, "manufacturingMiscMachinerySecurity", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingMiscVsProxy.prototype, "manufacturingMiscProtectionGear", void 0);
    return WorkIndustryManufacturingMiscVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var WorkIndustryHabitationalVsProxy = /** @class */ (function (_super) {
    __extends(WorkIndustryHabitationalVsProxy, _super);
    function WorkIndustryHabitationalVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryHabitationalVsProxy.prototype, "habitationalApartmentOccupancy", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryHabitationalVsProxy.prototype, "habitationalBusinessCrime", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryHabitationalVsProxy.prototype, "habitationalDeliveryOperations", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryHabitationalVsProxy.prototype, "habitationalMachinerySecurity", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryHabitationalVsProxy.prototype, "habitationalRooftopExposure", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryHabitationalVsProxy.prototype, "habitationalSecurityGuards", void 0);
    return WorkIndustryHabitationalVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var WorkIndustryHospitalityVsProxy = /** @class */ (function (_super) {
    __extends(WorkIndustryHospitalityVsProxy, _super);
    function WorkIndustryHospitalityVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryHospitalityVsProxy.prototype, "hospitalityAlcoholSales", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryHospitalityVsProxy.prototype, "hospitalityBusinessCrime", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryHospitalityVsProxy.prototype, "hospitalityEntertainment", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryHospitalityVsProxy.prototype, "hospitalitySecurityGuards", void 0);
    return WorkIndustryHospitalityVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var WorkIndustryManufacturingTextileVsProxy = /** @class */ (function (_super) {
    __extends(WorkIndustryManufacturingTextileVsProxy, _super);
    function WorkIndustryManufacturingTextileVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingTextileVsProxy.prototype, "manufacturingTextileDeliveryOperations", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingTextileVsProxy.prototype, "manufacturingTextileProtectionGear", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingTextileVsProxy.prototype, "manufacturingTextileForkliftTraining", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingTextileVsProxy.prototype, "manufacturingTextileHandSewing", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingTextileVsProxy.prototype, "manufacturingTextileHazardousChemExposure", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingTextileVsProxy.prototype, "manufacturingTextileHeavyFabric", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingTextileVsProxy.prototype, "manufacturingTextileForklifts", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingTextileVsProxy.prototype, "manufacturingTextileLockoutProcedures", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingTextileVsProxy.prototype, "manufacturingTextileMachineryAge", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingTextileVsProxy.prototype, "manufacturingTextileMachinerySecurity", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingTextileVsProxy.prototype, "manufacturingTextilePieceRatePay", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryManufacturingTextileVsProxy.prototype, "manufacturingTextileLiftingGear", void 0);
    return WorkIndustryManufacturingTextileVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var WorkIndustryConstructionVsProxy = /** @class */ (function (_super) {
    __extends(WorkIndustryConstructionVsProxy, _super);
    function WorkIndustryConstructionVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryConstructionVsProxy.prototype, "constructionMachineryAge", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryConstructionVsProxy.prototype, "constructionMachinerySecurity", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryConstructionVsProxy.prototype, "constructionWeldingOperations", void 0);
    return WorkIndustryConstructionVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var WorkIndustryClericalVsProxy = /** @class */ (function (_super) {
    __extends(WorkIndustryClericalVsProxy, _super);
    function WorkIndustryClericalVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryClericalVsProxy.prototype, "clericalDeliveryOperations", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkIndustryClericalVsProxy.prototype, "clericalMachinerySecurity", void 0);
    return WorkIndustryClericalVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.work.uw.ts":
/*!*****************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.work.uw.ts ***!
  \*****************************************************************/
/*! exports provided: CoreCommWorkUwGeneralVsProxy, CoreCommWorkUwAcord130VsProxy, WorkClassSpecificVsProxy, WorkIndustrySpecificVsProxy, CoreCommWorkUwVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommWorkUwGeneralVsProxy", function() { return CoreCommWorkUwGeneralVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommWorkUwAcord130VsProxy", function() { return CoreCommWorkUwAcord130VsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkClassSpecificVsProxy", function() { return WorkClassSpecificVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkIndustrySpecificVsProxy", function() { return WorkIndustrySpecificVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommWorkUwVsProxy", function() { return CoreCommWorkUwVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
/* harmony import */ var _com_arrow_model_def_corecomm_work_uw_industry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./com.arrow.model.def.corecomm.work.uw.industry */ "./src/ts/gen/impl/com.arrow.model.def.corecomm.work.uw.industry.ts");
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


var CoreCommWorkUwGeneralVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommWorkUwGeneralVsProxy, _super);
    function CoreCommWorkUwGeneralVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwGeneralVsProxy.prototype, "asbestosMoldRemediation", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwGeneralVsProxy.prototype, "wCNumClaims", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwGeneralVsProxy.prototype, "contractorType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwGeneralVsProxy.prototype, "coverageCancellations", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwGeneralVsProxy.prototype, "coverageLapses", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwGeneralVsProxy.prototype, "cumulativeLossRatio", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwGeneralVsProxy.prototype, "drivingExposure", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwGeneralVsProxy.prototype, "drivingExposureMileage", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwGeneralVsProxy.prototype, "drivingRules", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwGeneralVsProxy.prototype, "employeeManagementResources", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwGeneralVsProxy.prototype, "exposureAmount", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwGeneralVsProxy.prototype, "exposureClassCode", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwGeneralVsProxy.prototype, "cancellationReason", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwGeneralVsProxy.prototype, "heightExposure", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwGeneralVsProxy.prototype, "liftingTechniques", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwGeneralVsProxy.prototype, "manualLifting", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwGeneralVsProxy.prototype, "nanoManufacturing", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwGeneralVsProxy.prototype, "numEmployees", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwGeneralVsProxy.prototype, "numIndemnityClaims", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwGeneralVsProxy.prototype, "oSHACitations", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwGeneralVsProxy.prototype, "relativeResidency", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwGeneralVsProxy.prototype, "rooftopExposure", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwGeneralVsProxy.prototype, "stressInjury", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwGeneralVsProxy.prototype, "transportEmployees", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwGeneralVsProxy.prototype, "fallProtectionPlan", void 0);
    return CoreCommWorkUwGeneralVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommWorkUwAcord130VsProxy = /** @class */ (function (_super) {
    __extends(CoreCommWorkUwAcord130VsProxy, _super);
    function CoreCommWorkUwAcord130VsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwAcord130VsProxy.prototype, "airWaterCraft", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwAcord130VsProxy.prototype, "volunteerLabor", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwAcord130VsProxy.prototype, "certificatesOfInsurance", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwAcord130VsProxy.prototype, "contemplatedTravel", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwAcord130VsProxy.prototype, "employeeAge", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwAcord130VsProxy.prototype, "employeeAgeNonClerical", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwAcord130VsProxy.prototype, "employeeTeamSponsorship", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwAcord130VsProxy.prototype, "employeeTravel", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwAcord130VsProxy.prototype, "bankruptcy", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwAcord130VsProxy.prototype, "leaseEmployees", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwAcord130VsProxy.prototype, "otherBusinesses", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwAcord130VsProxy.prototype, "remoteEmployees", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwAcord130VsProxy.prototype, "subcontractors", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwAcord130VsProxy.prototype, "subcontractorWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwAcord130VsProxy.prototype, "teamSponsorship", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwAcord130VsProxy.prototype, "laborInterchange", void 0);
    return CoreCommWorkUwAcord130VsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var WorkClassSpecificVsProxy = /** @class */ (function (_super) {
    __extends(WorkClassSpecificVsProxy, _super);
    function WorkClassSpecificVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "masonryOperationType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "funeralDirectorPathogensProgram", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "landscapeConstruction", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "landscapeDiggingWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "landscapeFirePreventionServices", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "landscapeReforestation", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "landscapeSodInstallation", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "landscapeStumpGrinding", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "landscapeTreeTrimming", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "landscapeTreeWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "landscapeUncontrolledPesticideHerbicide", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "bakeryChemicalCompoundUse", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "bakeryNoRampsOnTrucks", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "bakeryStorageTankMaintenance", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "confectionerCoconutShredding", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "confectionerAmmoniaAlarms", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "confectionerChemicalCompoundUse", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "confectionerPackingProcesses", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "confectionerTankMaintenance", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "laundryAccidentCleanup", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "laundryDryCleaning", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "laundryFWSRepair", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "dryCleaningNumPickupStations", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "dryCleaningPercCleaning", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "dryCleaningPersonalProtectionEquipment", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "dryCleaningSolventTypes", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "glassChemicalExposure", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "glassInstallation", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "glassNonAutomatedMachinery", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "printingMachineryRepair", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "printingPublishingType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "photoEngravingChemicalEtching", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "photoEngravingChemicalExposure", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "engravingChemLaser", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "photographerPersonalProtectionEquipment", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "dentalLabDeliveryOperations", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "dentalLabFoundryWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "doorWindowInstallationAboveFirstStory", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "doorWindowInstallationClassType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "furnitureInstallationConvention", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "furnitureInstallationInterior", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "furnitureInstallationScenery", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "furnitureInstallationType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "plumbingBoilerInstallation", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "plumbingBurnerInstallation", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "plumbingFreonInstallation", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "plumbingInsulationType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "plumbingRefrigerationInstallation", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "plumbingResidenceSewerCleaning", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "plumbingSepticTankCleaning", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "plumbingSheetMetalInstallation", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "plumbingSolarInstallation", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "plumbingTankSprinklerInstallation", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "electricalWiringInstallationType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "electricalWiringLightpoles", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "electricalWiringMillwright", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "electricalWiringSolarInstallation", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "concreteWorkPressureWashing", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "concreteWorkShoringWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "concreteWorkStoneCutting", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "tileInstallationBathtubRefinishing", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "tileInstallationDemolitionWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "tileInstallationMarbleManufacturing", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "tileInstallationStoneCutting", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "carpentryDemolitionWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "carpentryRoughWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "drywallInstallationDemolitionWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "drywallInstallationFormalProgram", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "glazierFormalProgram", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "glazierOffGroundWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "floorInstallationManualLifting", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "floorInstallationType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "sheetMetalWorkFreonInstallation", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "sheetMetalWorkSlantedRoofExposure", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "sheetMetalWorkSolarInstallation", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "sheetMetalWorkType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "sheetMetalWorkVentilationInstallation", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "ventilationWorkFreonInstallation", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "ventilationWorkSlantedRoofExposure", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "ventilationWorkSolarInstallation", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "ventilationWorkStairwellAccess", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "ventilationWorkType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "carpentryThreeStoriesDemolitionWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "carpentryThreeStoriesFramingWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "carpentryThreeStoriesRoofing", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "carpentryThreeStoriesType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "fenceInstallationWeldingOperations", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "floristParadeFloatDecorating", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "floristPlantscaping", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "floristWholesaleExposure", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "gasolineFreshMeat", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "retailStoreSecondhand", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "retailStoreSecurityGuards", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "hardwareStoreSecondhand", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "jewelryStoreManufacturing", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "jewelryStoreOffsiteExposure", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "jewelryStoreSecurityGuards", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "retailStoreBaggageHandling", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "retailStoreCigarMaking", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "retailStoreFoodVending", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "landscapeBoulderRemoval", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "retailStoreRentalEquipment", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "retailStoreSecondhandConsignment", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "retailStoreSportingGoods", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "retailStoreType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "wholesaleStoreFertilizer", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "wholesaleStorePhysicalAssembly", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "wholesaleStoreProductWeight", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "wholesaleStoreSecondhand", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "wholesaleStoreTobacco", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "wholesaleMeatStoreProductWeight", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "wholesaleMeatStoreSeaUrchin", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "wholesaleMeatStoreSlaughtering", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "wholesaleMeatStoreSlipResistantShoes", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "retailMeatStoreSlipResistantShoes", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "autoPartsStoreBatteryWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "autoPartsStoreDeliveryOperations", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "autoPartsStoreDeliveryServices", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "autoPartsStoreRepairWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "bookStoreType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "seedMerchantGrainElevatorExposure", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "plumberSupplyStoreDeliveryServices", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "plumberSupplyStorePipeReclaiming", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "autoServiceOffPremisesWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "autoServiceTireWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "autoServiceVehicleWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "engineeringFirmConstruction", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "engineeringFirmDepthExposure", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "engineeringFirmHighwayWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "engineeringFirmOverseaWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "engineeringFirmType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "clericalEngineeringFirmConstruction", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "clericalEngineeringFirmDepthExposure", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "clericalEngineeringFirmHighwayWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "clericalEngineeringFirmOverseaWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "clericalEngineeringFirmType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "realEstateMVRCheck", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "realEstateOverseaWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "insuranceCompaniesMVRCheck", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "insuranceCompaniesOverseaWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "salesType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "travelingEmployeesMVRCheck", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "clericalOfficeEmployeesHorseRacing", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "clericalOfficeEmployeesType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "attorneyOffsiteWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "attorneyOverseaWork", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "attorneyWCLitigation", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "physicianAmbulatoryClients", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "physicianEmployeeType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "physicianHomeInfusion", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "physicianMVRCheck", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "bldgManagerMVRCheck", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "janitorAccidentCleanup", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "janitorChimneyCleaning", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "janitorEnvironmentalCleaning", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "janitorExteriorWindowCleaning", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "janitorMedicalCleaning", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "janitorTrafficSignalServices", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "janitorWashingType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "janitorWindowWashing", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "bldgMgmtEmployeesAccidentCleanup", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "bldgMgmtEmployeesBathtubRefinishing", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "bldgMgmtEmployeesCampOps", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "bldgMgmtEmployeesDepthExposure", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "bldgMgmtEmployeesMobileHomeSetup", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "bldgMgmtEmployeesParkingAttendants", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "bldgMgmtEmployeesScaffoldingOps", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "bldgMgmtEmployeesSiteCleanup", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "restaurantDelivery", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "restaurantDeliveryType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "restaurantHoursOfOp", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "restaurantMachinerySecurity", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "restaurantSlipResistantFlooring", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "restaurantSlipResistantShoes", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "restaurantType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "restaurantVendors", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "fastFoodDelivery", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "fastFoodDeliveryType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "fastFoodHoursOfOp", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "fastFoodMachinerySecurity", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "fastFoodSlipResistantFlooring", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "fastFoodSlipResistantShoes", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "fastFoodType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "fastFoodVendor", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "paintingMetalizing", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "paintingProductWeight", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "paintingSilconeExposure", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "paintingSprayOnBedLiners", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "paintingULSprayContainment", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "electricianFreonInstallation", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "barberShopCosmeticOperations", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "barberShopIndependentContractor", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "barberShopOffsiteExposure", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "barberShopOperations", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "barberShopPersonalProtectionEquipment", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "barberShopServiceCost", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "funeralDirectorEscortTypes", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "funeralDirectorOperations", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkClassSpecificVsProxy.prototype, "retailStoreMarijuana", void 0);
    return WorkClassSpecificVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var WorkIndustrySpecificVsProxy = /** @class */ (function (_super) {
    __extends(WorkIndustrySpecificVsProxy, _super);
    function WorkIndustrySpecificVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_uw_industry__WEBPACK_IMPORTED_MODULE_1__["WorkIndustryArtisanVsProxy"])
    ], WorkIndustrySpecificVsProxy.prototype, "artisan", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_uw_industry__WEBPACK_IMPORTED_MODULE_1__["WorkIndustryMercantileVsProxy"])
    ], WorkIndustrySpecificVsProxy.prototype, "mercantile", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_uw_industry__WEBPACK_IMPORTED_MODULE_1__["WorkIndustryClericalVsProxy"])
    ], WorkIndustrySpecificVsProxy.prototype, "clerical", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_uw_industry__WEBPACK_IMPORTED_MODULE_1__["WorkIndustryConstructionVsProxy"])
    ], WorkIndustrySpecificVsProxy.prototype, "construction", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_uw_industry__WEBPACK_IMPORTED_MODULE_1__["WorkIndustryFoodPackagingVsProxy"])
    ], WorkIndustrySpecificVsProxy.prototype, "foodpackaging", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_uw_industry__WEBPACK_IMPORTED_MODULE_1__["WorkIndustryHabitationalVsProxy"])
    ], WorkIndustrySpecificVsProxy.prototype, "habitational", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_uw_industry__WEBPACK_IMPORTED_MODULE_1__["WorkIndustryHealthcareVsProxy"])
    ], WorkIndustrySpecificVsProxy.prototype, "healthcare", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_uw_industry__WEBPACK_IMPORTED_MODULE_1__["WorkIndustryAutomotiveVsProxy"])
    ], WorkIndustrySpecificVsProxy.prototype, "automotive", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_uw_industry__WEBPACK_IMPORTED_MODULE_1__["WorkIndustryLifeSciencesVsProxy"])
    ], WorkIndustrySpecificVsProxy.prototype, "lifesciences", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_uw_industry__WEBPACK_IMPORTED_MODULE_1__["WorkIndustryManufacturingMetalVsProxy"])
    ], WorkIndustrySpecificVsProxy.prototype, "manufacturingmetal", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_uw_industry__WEBPACK_IMPORTED_MODULE_1__["WorkIndustryManufacturingMiscVsProxy"])
    ], WorkIndustrySpecificVsProxy.prototype, "manufacturingmisc", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_uw_industry__WEBPACK_IMPORTED_MODULE_1__["WorkIndustryManufacturingPaperVsProxy"])
    ], WorkIndustrySpecificVsProxy.prototype, "manufacturingpaper", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_uw_industry__WEBPACK_IMPORTED_MODULE_1__["WorkIndustryManufacturingTextileVsProxy"])
    ], WorkIndustrySpecificVsProxy.prototype, "manufacturingtextile", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(_com_arrow_model_def_corecomm_work_uw_industry__WEBPACK_IMPORTED_MODULE_1__["WorkIndustryHospitalityVsProxy"])
    ], WorkIndustrySpecificVsProxy.prototype, "hospitality", void 0);
    return WorkIndustrySpecificVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommWorkUwVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommWorkUwVsProxy, _super);
    function CoreCommWorkUwVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommWorkUwAcord130VsProxy)
    ], CoreCommWorkUwVsProxy.prototype, "acord130Answers", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(WorkClassSpecificVsProxy)
    ], CoreCommWorkUwVsProxy.prototype, "classesUwAnswers", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(CoreCommWorkUwGeneralVsProxy)
    ], CoreCommWorkUwVsProxy.prototype, "generalUwAnswers", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(WorkIndustrySpecificVsProxy)
    ], CoreCommWorkUwVsProxy.prototype, "industryUwAnswers", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkUwVsProxy.prototype, "submission", void 0);
    return CoreCommWorkUwVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.corecomm.work.waiver.ts":
/*!*********************************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.corecomm.work.waiver.ts ***!
  \*********************************************************************/
/*! exports provided: CoreCommWorkWaiverInfoVsProxy, CoreCommWorkWaiverVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommWorkWaiverInfoVsProxy", function() { return CoreCommWorkWaiverInfoVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommWorkWaiverVsProxy", function() { return CoreCommWorkWaiverVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
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

var CoreCommWorkWaiverInfoVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommWorkWaiverInfoVsProxy, _super);
    function CoreCommWorkWaiverInfoVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkWaiverInfoVsProxy.prototype, "jobDescription", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkWaiverInfoVsProxy.prototype, "name", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkWaiverInfoVsProxy.prototype, "address", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkWaiverInfoVsProxy.prototype, "addressLine2", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkWaiverInfoVsProxy.prototype, "city", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkWaiverInfoVsProxy.prototype, "state", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkWaiverInfoVsProxy.prototype, "zip", void 0);
    return CoreCommWorkWaiverInfoVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CoreCommWorkWaiverVsProxy = /** @class */ (function (_super) {
    __extends(CoreCommWorkWaiverVsProxy, _super);
    function CoreCommWorkWaiverVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkWaiverVsProxy.prototype, "state", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])([CoreCommWorkWaiverInfoVsProxy])
    ], CoreCommWorkWaiverVsProxy.prototype, "waiverInfos", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CoreCommWorkWaiverVsProxy.prototype, "waivertype", void 0);
    return CoreCommWorkWaiverVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ }),

/***/ "./src/ts/gen/impl/com.arrow.model.def.ts":
/*!************************************************!*\
  !*** ./src/ts/gen/impl/com.arrow.model.def.ts ***!
  \************************************************/
/*! exports provided: ControlIdVs$IControlVsProxy, CompanyProxy, WorkCompClassProxy, ControlIdVsProxy, ProducerVsProxy, AddressVsProxy, NamedAddressVsProxy, TransactionProxy, AddressLowercaseVsProxy, AddressLowercaseWithAddress1VsProxy, ScrubbedAddressVsProxy, InsuredVsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlIdVs$IControlVsProxy", function() { return ControlIdVs$IControlVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyProxy", function() { return CompanyProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkCompClassProxy", function() { return WorkCompClassProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlIdVsProxy", function() { return ControlIdVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProducerVsProxy", function() { return ProducerVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressVsProxy", function() { return AddressVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamedAddressVsProxy", function() { return NamedAddressVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionProxy", function() { return TransactionProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressLowercaseVsProxy", function() { return AddressLowercaseVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressLowercaseWithAddress1VsProxy", function() { return AddressLowercaseWithAddress1VsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrubbedAddressVsProxy", function() { return ScrubbedAddressVsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuredVsProxy", function() { return InsuredVsProxy; });
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/proxy */ "./src/ts/api/proxy.ts");
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

var ControlIdVs$IControlVsProxy = /** @class */ (function (_super) {
    __extends(ControlIdVs$IControlVsProxy, _super);
    function ControlIdVs$IControlVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ControlIdVs$IControlVsProxy.prototype, "overrideeffectivelimit", void 0);
    return ControlIdVs$IControlVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var CompanyProxy = /** @class */ (function (_super) {
    __extends(CompanyProxy, _super);
    function CompanyProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CompanyProxy.prototype, "entitytype", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CompanyProxy.prototype, "feinnumber", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], CompanyProxy.prototype, "name", void 0);
    return CompanyProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var WorkCompClassProxy = /** @class */ (function (_super) {
    __extends(WorkCompClassProxy, _super);
    function WorkCompClassProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkCompClassProxy.prototype, "code", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkCompClassProxy.prototype, "fulltimeemployeeamt", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkCompClassProxy.prototype, "parttimeemployeeamt", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkCompClassProxy.prototype, "payroll", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkCompClassProxy.prototype, "seasonalemployeeamt", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], WorkCompClassProxy.prototype, "subcode", void 0);
    return WorkCompClassProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var ControlIdVsProxy = /** @class */ (function (_super) {
    __extends(ControlIdVsProxy, _super);
    function ControlIdVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(ControlIdVs$IControlVsProxy)
    ], ControlIdVsProxy.prototype, "control", void 0);
    return ControlIdVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var ProducerVsProxy = /** @class */ (function (_super) {
    __extends(ProducerVsProxy, _super);
    function ProducerVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ProducerVsProxy.prototype, "comments", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ProducerVsProxy.prototype, "email", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ProducerVsProxy.prototype, "emailCC", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ProducerVsProxy.prototype, "emailConfirm", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ProducerVsProxy.prototype, "name", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ProducerVsProxy.prototype, "phone", void 0);
    return ProducerVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var AddressVsProxy = /** @class */ (function (_super) {
    __extends(AddressVsProxy, _super);
    function AddressVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AddressVsProxy.prototype, "address", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AddressVsProxy.prototype, "addressLine2", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AddressVsProxy.prototype, "city", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AddressVsProxy.prototype, "state", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AddressVsProxy.prototype, "zip", void 0);
    return AddressVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var NamedAddressVsProxy = /** @class */ (function (_super) {
    __extends(NamedAddressVsProxy, _super);
    function NamedAddressVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], NamedAddressVsProxy.prototype, "name", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], NamedAddressVsProxy.prototype, "address", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], NamedAddressVsProxy.prototype, "addressLine2", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], NamedAddressVsProxy.prototype, "city", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], NamedAddressVsProxy.prototype, "state", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], NamedAddressVsProxy.prototype, "zip", void 0);
    return NamedAddressVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var TransactionProxy = /** @class */ (function (_super) {
    __extends(TransactionProxy, _super);
    function TransactionProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], TransactionProxy.prototype, "comments", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], TransactionProxy.prototype, "date", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], TransactionProxy.prototype, "reason", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], TransactionProxy.prototype, "status", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], TransactionProxy.prototype, "timestamp", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], TransactionProxy.prototype, "transactionCode", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], TransactionProxy.prototype, "transactionId", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], TransactionProxy.prototype, "type", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], TransactionProxy.prototype, "user", void 0);
    return TransactionProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var AddressLowercaseVsProxy = /** @class */ (function (_super) {
    __extends(AddressLowercaseVsProxy, _super);
    function AddressLowercaseVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AddressLowercaseVsProxy.prototype, "address", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AddressLowercaseVsProxy.prototype, "addressLine2", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AddressLowercaseVsProxy.prototype, "city", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AddressLowercaseVsProxy.prototype, "state", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AddressLowercaseVsProxy.prototype, "zip", void 0);
    return AddressLowercaseVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var AddressLowercaseWithAddress1VsProxy = /** @class */ (function (_super) {
    __extends(AddressLowercaseWithAddress1VsProxy, _super);
    function AddressLowercaseWithAddress1VsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AddressLowercaseWithAddress1VsProxy.prototype, "address", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AddressLowercaseWithAddress1VsProxy.prototype, "addressLine2", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AddressLowercaseWithAddress1VsProxy.prototype, "city", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AddressLowercaseWithAddress1VsProxy.prototype, "state", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], AddressLowercaseWithAddress1VsProxy.prototype, "zip", void 0);
    return AddressLowercaseWithAddress1VsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var ScrubbedAddressVsProxy = /** @class */ (function (_super) {
    __extends(ScrubbedAddressVsProxy, _super);
    function ScrubbedAddressVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ScrubbedAddressVsProxy.prototype, "addressLine", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ScrubbedAddressVsProxy.prototype, "zip", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ScrubbedAddressVsProxy.prototype, "preDir", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ScrubbedAddressVsProxy.prototype, "secondaryName", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ScrubbedAddressVsProxy.prototype, "street", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ScrubbedAddressVsProxy.prototype, "streetNum", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ScrubbedAddressVsProxy.prototype, "streetType", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ScrubbedAddressVsProxy.prototype, "postDir", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ScrubbedAddressVsProxy.prototype, "zipExtension", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ScrubbedAddressVsProxy.prototype, "address", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ScrubbedAddressVsProxy.prototype, "addressLine2", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ScrubbedAddressVsProxy.prototype, "city", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ScrubbedAddressVsProxy.prototype, "state", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], ScrubbedAddressVsProxy.prototype, "unit", void 0);
    return ScrubbedAddressVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));

var InsuredVsProxy = /** @class */ (function (_super) {
    __extends(InsuredVsProxy, _super);
    function InsuredVsProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(AddressLowercaseVsProxy)
    ], InsuredVsProxy.prototype, "address", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], InsuredVsProxy.prototype, "companyName", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], InsuredVsProxy.prototype, "email", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], InsuredVsProxy.prototype, "firstName", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], InsuredVsProxy.prototype, "individual", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], InsuredVsProxy.prototype, "lastName", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])(AddressLowercaseWithAddress1VsProxy)
    ], InsuredVsProxy.prototype, "mailingAddress", void 0);
    __decorate([
        Object(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["Observable"])()
    ], InsuredVsProxy.prototype, "wphone", void 0);
    return InsuredVsProxy;
}(_api_proxy__WEBPACK_IMPORTED_MODULE_0__["ModelProxy"]));



/***/ })

}]);
//# sourceMappingURL=7.js.map