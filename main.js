var $localize=Object.assign(void 0===$localize?{}:$localize,{locale:"hr"});
"use strict";(function(global){global.ng=global.ng||{};global.ng.common=global.ng.common||{};global.ng.common.locales=global.ng.common.locales||{};var u=undefined;function plural(n){var i=Math.floor(Math.abs(n)),v=n.toString().replace(/^[^.]*\.?/,"").length,f=parseInt(n.toString().replace(/^[^.]*\.?/,""),10)||0;if(v===0&&i%10===1&&!(i%100===11)||f%10===1&&!(f%100===11))return 1;if(v===0&&i%10===Math.floor(i%10)&&i%10>=2&&i%10<=4&&!(i%100>=12&&i%100<=14)||f%10===Math.floor(f%10)&&f%10>=2&&f%10<=4&&!(f%100>=12&&f%100<=14))return 3;return 5}global.ng.common.locales["hr"]=["hr",[["AM","PM"],u,u],u,[["N","P","U","S","\u010C","P","S"],["ned","pon","uto","sri","\u010Det","pet","sub"],["nedjelja","ponedjeljak","utorak","srijeda","\u010Detvrtak","petak","subota"],["ned","pon","uto","sri","\u010Det","pet","sub"]],[["n","p","u","s","\u010D","p","s"],["ned","pon","uto","sri","\u010Det","pet","sub"],["nedjelja","ponedjeljak","utorak","srijeda","\u010Detvrtak","petak","subota"],["ned","pon","uto","sri","\u010Det","pet","sub"]],[["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],["sij","velj","o\u017Eu","tra","svi","lip","srp","kol","ruj","lis","stu","pro"],["sije\u010Dnja","velja\u010De","o\u017Eujka","travnja","svibnja","lipnja","srpnja","kolovoza","rujna","listopada","studenoga","prosinca"]],[["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],["sij","velj","o\u017Eu","tra","svi","lip","srp","kol","ruj","lis","stu","pro"],["sije\u010Danj","velja\u010Da","o\u017Eujak","travanj","svibanj","lipanj","srpanj","kolovoz","rujan","listopad","studeni","prosinac"]],[["pr.n.e.","AD"],["pr. Kr.","po. Kr."],["prije Krista","poslije Krista"]],1,[6,0],["dd. MM. y.","d. MMM y.","d. MMMM y.","EEEE, d. MMMM y."],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss (zzzz)"],["{1} {0}",u,"{1} 'u' {0}",u],[",",".",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0\xA0%","#,##0.00\xA0\xA4","#E0"],"HRK","HRK","hrvatska kuna",{"AUD":[u,"$"],"BRL":[u,"R$"],"CAD":[u,"$"],"CNY":[u,"\xA5"],"EUR":[u,"\u20AC"],"GBP":[u,"\xA3"],"HKD":[u,"$"],"ILS":[u,"\u20AA"],"INR":[u,"\u20B9"],"JPY":[u,"\xA5"],"KRW":[u,"\u20A9"],"MXN":[u,"$"],"NZD":[u,"$"],"TWD":[u,"NT$"],"USD":[u,"$"],"VND":[u,"\u20AB"],"XCD":[u,"$"],"XPF":[],"XXX":[]},"ltr",plural,[[["pono\u0107","podne","ujutro","popodne","nave\u010Der","no\u0107u"],u,["pono\u0107","podne","ujutro","poslije podne","nave\u010Der","no\u0107u"]],[["pono\u0107","podne","ujutro","popodne","nave\u010Der","no\u0107u"],u,u],["00:00","12:00",["04:00","12:00"],["12:00","18:00"],["18:00","21:00"],["21:00","04:00"]]]]})(typeof globalThis!=="undefined"&&globalThis||typeof global!=="undefined"&&global||typeof window!=="undefined"&&window);;
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\nomendi\watch-webGL\src\main.ts */"zUnb");


/***/ }),

/***/ "2ZLR":
/*!*********************************************************!*\
  !*** ./src/app/watch-list/watch-list-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: WatchListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchListRoutingModule", function() { return WatchListRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _watch_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./watch-list.component */ "kIlJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




var listRoutes = [
    {
        path: '',
        component: _watch_list_component__WEBPACK_IMPORTED_MODULE_1__["WatchListComponent"],
        children: [
            { path: '', redirectTo: '/list', pathMatch: 'full' },
            { path: 'list', component: _watch_list_component__WEBPACK_IMPORTED_MODULE_1__["WatchListComponent"] }
        ]
    },
];
var WatchListRoutingModule = /** @class */ (function () {
    function WatchListRoutingModule() {
    }
    WatchListRoutingModule.ɵfac = function WatchListRoutingModule_Factory(t) { return new (t || WatchListRoutingModule)(); };
    WatchListRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: WatchListRoutingModule });
    WatchListRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(listRoutes)
            ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return WatchListRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WatchListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "2xQ5":
/*!***************************************!*\
  !*** ./src/app/watch-viewer/index.ts ***!
  \***************************************/
/*! exports provided: WatchViewerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _watch_viewer_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./watch-viewer.module */ "RMjP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WatchViewerModule", function() { return _watch_viewer_module__WEBPACK_IMPORTED_MODULE_0__["WatchViewerModule"]; });




/***/ }),

/***/ "53u6":
/*!*************************************!*\
  !*** ./src/app/watch-list/index.ts ***!
  \*************************************/
/*! exports provided: WatchListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _watch_list_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./watch-list.module */ "UWY7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WatchListModule", function() { return _watch_list_module__WEBPACK_IMPORTED_MODULE_0__["WatchListModule"]; });




/***/ }),

/***/ "5WzL":
/*!*************************************************************!*\
  !*** ./src/app/quicklink-shared/quicklink-shared.module.ts ***!
  \*************************************************************/
/*! exports provided: QuicklinkSharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuicklinkSharedModule", function() { return QuicklinkSharedModule; });
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-quicklink */ "FDOz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


var QuicklinkSharedModule = /** @class */ (function () {
    function QuicklinkSharedModule() {
    }
    QuicklinkSharedModule.ɵfac = function QuicklinkSharedModule_Factory(t) { return new (t || QuicklinkSharedModule)(); };
    QuicklinkSharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: QuicklinkSharedModule });
    QuicklinkSharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[ngx_quicklink__WEBPACK_IMPORTED_MODULE_0__["QuicklinkModule"]], ngx_quicklink__WEBPACK_IMPORTED_MODULE_0__["QuicklinkModule"]] });
    return QuicklinkSharedModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](QuicklinkSharedModule, { imports: [ngx_quicklink__WEBPACK_IMPORTED_MODULE_0__["QuicklinkModule"]], exports: [ngx_quicklink__WEBPACK_IMPORTED_MODULE_0__["QuicklinkModule"]] }); })();


/***/ }),

/***/ "6pSa":
/*!****************************************************!*\
  !*** ./src/app/_components/not-found.component.ts ***!
  \****************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
    NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 2, vars: 0, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The page you are looking for was not found! ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, encapsulation: 2 });
    return NotFoundComponent;
}());



/***/ }),

/***/ "6uZV":
/*!************************************************!*\
  !*** ./src/app/watch-viewer/material/index.ts ***!
  \************************************************/
/*! exports provided: MaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material.component */ "C0lI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialComponent", function() { return _material_component__WEBPACK_IMPORTED_MODULE_0__["MaterialComponent"]; });




/***/ }),

/***/ "86Bd":
/*!**********************************************!*\
  !*** ./src/app/watch-viewer/camera/index.ts ***!
  \**********************************************/
/*! exports provided: CameraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _camera_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camera.component */ "UA2U");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraComponent", function() { return _camera_component__WEBPACK_IMPORTED_MODULE_0__["CameraComponent"]; });




/***/ }),

/***/ "9GcA":
/*!********************************************************!*\
  !*** ./src/app/watch-viewer/watch-viewer.component.ts ***!
  \********************************************************/
/*! exports provided: WatchViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchViewerComponent", function() { return WatchViewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-device-detector */ "9YtQ");
/* harmony import */ var _services_web_gl_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/web-gl.service */ "oQYe");
/* harmony import */ var _watches_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../watches.json */ "FnrL");
var _watches_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../watches.json */ "FnrL", 1);
/* harmony import */ var _services_app_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/app.config.service */ "h/w8");
/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./camera */ "86Bd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _watch_model_watch_model_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./watch-model/watch-model.component */ "dtCI");
/* harmony import */ var _camera_camera_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./camera/camera.component */ "UA2U");
















var _c0 = ["cameraComp"];
function WatchViewerComponent_app_watch_model_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-watch-model", 15);
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("watch", ctx_r0.watch)("tryOn", ctx_r0.tryOn);
} }
function WatchViewerComponent_app_camera_15_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-camera", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("closeShare", function WatchViewerComponent_app_camera_15_Template_app_camera_closeShare_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r5.closeCameraShare(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("watch", ctx_r1.watch);
} }
function WatchViewerComponent_div_16_button_6_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function WatchViewerComponent_div_16_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r8.openCameraShare(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function WatchViewerComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function WatchViewerComponent_div_16_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r10.openShare(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function WatchViewerComponent_div_16_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r12.showInfoModal = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, WatchViewerComponent_div_16_button_6_Template, 2, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function WatchViewerComponent_div_16_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r13.buyNow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Kupi odmah");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.tryOn);
} }
function WatchViewerComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function WatchViewerComponent_div_17_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r15); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r14.showInfoModal = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "hr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "h3", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](7, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "h2", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](13, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](15, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](17, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](20, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function WatchViewerComponent_div_17_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r15); var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r16.buyNow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](22, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r3.getWatchGifUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", ctx_r3.watch.name, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
} }
var _c17 = function (a0) { return { "active": a0 }; };
var _c18 = function () { return { tryOn: true }; };
var WatchViewerComponent = /** @class */ (function () {
    function WatchViewerComponent(deviceService, webGLService, route, router) {
        var _this = this;
        this.deviceService = deviceService;
        this.webGLService = webGLService;
        this.route = route;
        this.router = router;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.bgSrc = _services_app_config_service__WEBPACK_IMPORTED_MODULE_7__["AppConfigService"].settings.appRoot + "/images/bckg-image@2x.jpg";
        this.title = 'samsung-watch';
        this.watches = _watches_json__WEBPACK_IMPORTED_MODULE_6__;
        this.gifUrl = _services_app_config_service__WEBPACK_IMPORTED_MODULE_7__["AppConfigService"].settings.appRoot + "/images/watch4";
        this.showShareModal = false;
        this.showInfoModal = false;
        this.subscription.add(this.route.params.subscribe(function (res) {
            _this.watch = _watches_json__WEBPACK_IMPORTED_MODULE_6__.find(function (x) { return x.nameUrl === res.id; });
            _this.gifUrl += _this.watch.name.toLowerCase().includes('classic') ? '-classic.gif' : '.gif';
            if (!_this.watch) {
                return _this.router.navigate(['/list']);
            }
        }));
        this.webGLService.deviceInfo = this.deviceService.getDeviceInfo();
        this.resizeObservable$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        this.subscription.add(this.resizeObservable$.subscribe(function (e) {
            _this.webGLService.camera.aspect = _this.webGLService.canvasWidth / _this.webGLService.canvasHeight;
            _this.webGLService.camera.updateProjectionMatrix();
            _this.webGLService.renderer.setSize(_this.webGLService.canvasWidth, _this.webGLService.canvasHeight);
        }));
    }
    Object.defineProperty(WatchViewerComponent.prototype, "content", {
        set: function (content) {
            if (content) {
                this.cameraComp = content;
            }
        },
        enumerable: false,
        configurable: true
    });
    WatchViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.webGLService.canvasWidth = window.innerWidth;
        this.webGLService.canvasHeight = window.innerHeight;
        this.webGLService.init();
        this.subscription.add(this.route.queryParams.subscribe(function (res) {
            _this.tryOn = res.tryOn !== undefined;
            if (_this.tryOn) {
                _this.webGLService.removeModelControls();
                _this.webGLService.resetWatchPosition(true);
                _this.webGLService.setClippingPlane();
            }
            else {
                _this.webGLService.texture2D = null;
                _this.webGLService.removeClippingPlane();
                _this.webGLService.setBackgroundImage(_this.bgSrc);
                _this.webGLService.resetWatchPosition();
                _this.webGLService.addModelControls();
                _this.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, 50)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function (x) { return !_this.tryOn; })).subscribe(function (time) { return _this.webGLService.animateModel(); }));
            }
            if (_this.webGLService.object) {
                _this.webGLService.object.visible = !_this.tryOn;
            }
        }));
    };
    WatchViewerComponent.prototype.getWatchGifUrl = function () {
        return this.gifUrl;
    };
    WatchViewerComponent.prototype.showActions = function () {
        this.showShareModal = true;
    };
    WatchViewerComponent.prototype.openCameraShare = function () {
        this.showInfoModal = false;
        this.showShareModal = true;
        this.cameraComp.openCameraShare();
        var canvas = this.webGLService.renderer.domElement;
        this.cameraComp.shareImage = canvas.toDataURL('image/jpeg', .8);
    };
    WatchViewerComponent.prototype.closeCameraShare = function () {
        this.showInfoModal = false;
        this.showShareModal = false;
    };
    WatchViewerComponent.prototype.openShare = function () {
        if (navigator.share) {
            // Web Share API is supported
            navigator.share({
                title: this.watch.name.replace(/(\r\n|\n|\r|<br\/>)/gm, ' '),
                url: this.watch.shareUrl ? this.watch.shareUrl : document.location.href
            });
            // }).then(() => {
            // }).catch(console.error);
        }
        else {
            // Fallback
        }
    };
    WatchViewerComponent.prototype.buyNow = function () {
        console.log('buyNow');
    };
    WatchViewerComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        if (this.webGLService.renderer) {
            this.webGLService.destroyAll();
            var canvases = document.getElementsByTagName('canvas');
            if (canvases.length > 0) {
                for (var _i = 0, _a = Array.from(canvases); _i < _a.length; _i++) {
                    var tag = _a[_i];
                    tag.remove();
                }
            }
        }
    };
    WatchViewerComponent.ɵfac = function WatchViewerComponent_Factory(t) { return new (t || WatchViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_web_gl_service__WEBPACK_IMPORTED_MODULE_5__["WebGlService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    WatchViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: WatchViewerComponent, selectors: [["app-watch-viewer"]], viewQuery: function WatchViewerComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        } }, decls: 18, vars: 13, consts: function () { var i18n_1; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_9188617230381349070$$SRC_APP_WATCH_VIEWER_WATCH_VIEWER_COMPONENT_TS_2 = goog.getMsg("3D PRIKAZ");
            i18n_1 = MSG_EXTERNAL_9188617230381349070$$SRC_APP_WATCH_VIEWER_WATCH_VIEWER_COMPONENT_TS_2;
        }
        else {
            i18n_1 = "3D PRIKAZ";
        } var i18n_3; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4368513139421510182$$SRC_APP_WATCH_VIEWER_WATCH_VIEWER_COMPONENT_TS_4 = goog.getMsg("ISPROBAJ");
            i18n_3 = MSG_EXTERNAL_4368513139421510182$$SRC_APP_WATCH_VIEWER_WATCH_VIEWER_COMPONENT_TS_4;
        }
        else {
            i18n_3 = "ISPROBAJ";
        } var i18n_5; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3770291504982632885$$SRC_APP_WATCH_VIEWER_WATCH_VIEWER_COMPONENT_TS__6 = goog.getMsg("Svakog dana odaberi novo lice sata");
            i18n_5 = MSG_EXTERNAL_3770291504982632885$$SRC_APP_WATCH_VIEWER_WATCH_VIEWER_COMPONENT_TS__6;
        }
        else {
            i18n_5 = "Svakog dana odaberi novo lice sata";
        } var i18n_7; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8973091607322926686$$SRC_APP_WATCH_VIEWER_WATCH_VIEWER_COMPONENT_TS__8 = goog.getMsg("Sat koji te najbolje poznaje");
            i18n_7 = MSG_EXTERNAL_8973091607322926686$$SRC_APP_WATCH_VIEWER_WATCH_VIEWER_COMPONENT_TS__8;
        }
        else {
            i18n_7 = "Sat koji te najbolje poznaje";
        } var i18n_9; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5847153516884693040$$SRC_APP_WATCH_VIEWER_WATCH_VIEWER_COMPONENT_TS__10 = goog.getMsg("Ve\u0107ina nas \u017Eeli znati vi\u0161e o samima sebi kako bismo mogli biti najbolja verzija sebe. Zato smo osmislili potpuno novi Galaxy Watch4 kako bi ti bio suputnik na putovanju prema zdravijoj verziji sebe.");
            i18n_9 = MSG_EXTERNAL_5847153516884693040$$SRC_APP_WATCH_VIEWER_WATCH_VIEWER_COMPONENT_TS__10;
        }
        else {
            i18n_9 = "Ve\u0107ina nas \u017Eeli znati vi\u0161e o samima sebi kako bismo mogli biti najbolja verzija sebe. Zato smo osmislili potpuno novi Galaxy Watch4 kako bi ti bio suputnik na putovanju prema zdravijoj verziji sebe.";
        } var i18n_11; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8282990784681480090$$SRC_APP_WATCH_VIEWER_WATCH_VIEWER_COMPONENT_TS__12 = goog.getMsg("Dostupnost boja, veli\u010Dina, modela i remena mo\u017Ee ovisiti o zemlji ili regiji. * Korisni\u010Dko su\u010Delje podlo\u017Eno je promjenama. * Dostupne zna\u010Dajke i aplikacije mogu ovisiti o regiji, povezanom ure\u0111aju, operativnom sustavu ili mobilnom operatoru. * Sve slike na ovoj stranici simulirane su u ilustracijske svrhe. * Namijenjeno samo za op\u0107e wellness i fitness svrhe. Nije namijenjeno za otkrivanje, dijagnozu ili lije\u010Denje bilo kakvog zdravstvenog stanja ili bolesti.");
            i18n_11 = MSG_EXTERNAL_8282990784681480090$$SRC_APP_WATCH_VIEWER_WATCH_VIEWER_COMPONENT_TS__12;
        }
        else {
            i18n_11 = "Dostupnost boja, veli\u010Dina, modela i remena mo\u017Ee ovisiti o zemlji ili regiji. * Korisni\u010Dko su\u010Delje podlo\u017Eno je promjenama. * Dostupne zna\u010Dajke i aplikacije mogu ovisiti o regiji, povezanom ure\u0111aju, operativnom sustavu ili mobilnom operatoru. * Sve slike na ovoj stranici simulirane su u ilustracijske svrhe. * Namijenjeno samo za op\u0107e wellness i fitness svrhe. Nije namijenjeno za otkrivanje, dijagnozu ili lije\u010Denje bilo kakvog zdravstvenog stanja ili bolesti.";
        } var i18n_13; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3716849774723868227$$SRC_APP_WATCH_VIEWER_WATCH_VIEWER_COMPONENT_TS__14 = goog.getMsg("Doznaj vi\u0161e");
            i18n_13 = MSG_EXTERNAL_3716849774723868227$$SRC_APP_WATCH_VIEWER_WATCH_VIEWER_COMPONENT_TS__14;
        }
        else {
            i18n_13 = "Doznaj vi\u0161e";
        } var i18n_15; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2628273296095981846$$SRC_APP_WATCH_VIEWER_WATCH_VIEWER_COMPONENT_TS__16 = goog.getMsg("Kupi odmah");
            i18n_15 = MSG_EXTERNAL_2628273296095981846$$SRC_APP_WATCH_VIEWER_WATCH_VIEWER_COMPONENT_TS__16;
        }
        else {
            i18n_15 = "Kupi odmah";
        } return [[1, "mb-3"], [1, "samsung-logo"], [1, "d-flex", "justify-content-between"], ["routerLink", "/list", 1, "back-icon"], [1, "mt-0", "text-center", "text-white", "m-0", 3, "innerHTML"], [1, "unstyled", "sticky", "left"], [1, "mb-3", "p-2"], ["routerLink", "./", 3, "ngClass"], i18n_1, ["routerLink", "./", 3, "ngClass", "queryParams"], i18n_3, [3, "watch", "tryOn", 4, "ngIf"], [3, "watch", "closeShare", 4, "ngIf"], ["class", "sticky bottom d-flex justify-content-between px-3 mb-2 height-100px", 4, "ngIf"], ["class", "modal rounded-top p-0", 4, "ngIf"], [3, "watch", "tryOn"], [3, "watch", "closeShare"], ["cameraComp", ""], [1, "sticky", "bottom", "d-flex", "justify-content-between", "px-3", "mb-2", "height-100px"], [1, "d-flex"], ["type", "button", 1, "bg-none", "border-0", "mr-3", 3, "click"], [1, "share-button"], ["type", "button", 1, "bg-none", "border-0", 3, "click"], [1, "info-button"], ["type", "button", "class", "bg-none border-0", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-rounded", "btn-rounded-lg", "transparent", "bd-white", "fz-15", "text-white", 3, "click"], [1, "camera-button"], [1, "modal", "rounded-top", "p-0"], [1, "m-2", "d-flex", "justify-content-end"], [1, "close-icon-grey", 3, "click"], [1, "divider", "mb-4"], [1, "ov-hidden", "info-window"], [1, "px-3"], i18n_5, [1, "d-flex", "justify-content-center"], ["alt", "Samgung watch", 1, "mx-auto", "watch-gif", 3, "src"], [1, "px-3", "mb-4"], [3, "innerHTML"], i18n_7, [1, "mb-2", "font-size-1"], i18n_9, [1, "f-small"], i18n_11, [1, "px-3", "d-flex", "justify-content-around", "mb-3"], ["type", "button", 1, "btn", "btn-lg", "btn-link", "font-weight-bold", "px-0"], i18n_13, ["type", "button", 1, "btn", "btn-lg", "btn-rounded-m", "btn-black", 3, "click"], i18n_15]; }, template: function WatchViewerComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "i");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "ul", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "li", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](10, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "li", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](13, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, WatchViewerComponent_app_watch_model_14_Template, 1, 2, "app-watch-model", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, WatchViewerComponent_app_camera_15_Template, 2, 1, "app-camera", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, WatchViewerComponent_div_16_Template, 9, 1, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, WatchViewerComponent_div_17_Template, 23, 2, "div", 14);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", ctx.watch == null ? null : ctx.watch.name, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](8, _c17, !ctx.tryOn));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](10, _c17, ctx.tryOn))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](12, _c18));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.watch);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.tryOn);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.showShareModal);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showInfoModal);
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _watch_model_watch_model_component__WEBPACK_IMPORTED_MODULE_11__["WatchModelComponent"], _camera_camera_component__WEBPACK_IMPORTED_MODULE_12__["CameraComponent"]], encapsulation: 2 });
    return WatchViewerComponent;
}());

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;


/***/ }),

/***/ "9lyr":
/*!**************************!*\
  !*** ./src/app/watch.ts ***!
  \**************************/
/*! exports provided: Watch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Watch", function() { return Watch; });
var Watch = /** @class */ (function () {
    function Watch() {
    }
    return Watch;
}());



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "C0lI":
/*!*************************************************************!*\
  !*** ./src/app/watch-viewer/material/material.component.ts ***!
  \*************************************************************/
/*! exports provided: MaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialComponent", function() { return MaterialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "Womt");
/* harmony import */ var _services_web_gl_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/web-gl.service */ "oQYe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






var _c0 = ["meshButton"];
var _c1 = function (a0) { return { "active": a0 }; };
var MaterialComponent = /** @class */ (function () {
    function MaterialComponent(webGLService) {
        this.webGLService = webGLService;
    }
    MaterialComponent.prototype.getColor = function (part) {
        if (this.material instanceof three__WEBPACK_IMPORTED_MODULE_1__["MeshStandardMaterial"]) {
            return this.material.color[part] * 255;
        }
        return null;
    };
    MaterialComponent.ɵfac = function MaterialComponent_Factory(t) { return new (t || MaterialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_web_gl_service__WEBPACK_IMPORTED_MODULE_2__["WebGlService"])); };
    MaterialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MaterialComponent, selectors: [["app-material"]], viewQuery: function MaterialComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.meshButton = _t.first);
        } }, inputs: { material: "material", mesh: "mesh", part: "part" }, decls: 2, vars: 5, consts: [[1, "btn", "btn-circle", "border-white", "ov-hidden", "relative", "material", 3, "ngClass", "click"], ["meshButton", ""]], template: function MaterialComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MaterialComponent_Template_div_click_0_listener() { return ctx.webGLService.changeMaterial(ctx.material, ctx.part); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", "rgb(" + ctx.getColor("r") + ", " + ctx.getColor("g") + ", " + ctx.getColor("b") + ")");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx.webGLService.displayMaterial[ctx.part] === ctx.material.name));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], encapsulation: 2 });
    return MaterialComponent;
}());



/***/ }),

/***/ "E78Z":
/*!*****************************************************!*\
  !*** ./src/app/external-url/external-url.module.ts ***!
  \*****************************************************/
/*! exports provided: ExternalUrlModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalUrlModule", function() { return ExternalUrlModule; });
/* harmony import */ var _external_url_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./external-url.directive */ "v9sg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


var ExternalUrlModule = /** @class */ (function () {
    function ExternalUrlModule() {
    }
    ExternalUrlModule.ɵfac = function ExternalUrlModule_Factory(t) { return new (t || ExternalUrlModule)(); };
    ExternalUrlModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExternalUrlModule });
    ExternalUrlModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
    return ExternalUrlModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExternalUrlModule, { declarations: [_external_url_directive__WEBPACK_IMPORTED_MODULE_0__["ExternalUrlDirective"]], exports: [_external_url_directive__WEBPACK_IMPORTED_MODULE_0__["ExternalUrlDirective"]] }); })();


/***/ }),

/***/ "FnrL":
/*!******************************!*\
  !*** ./src/app/watches.json ***!
  \******************************/
/*! exports provided: 0, 1, 2, 3, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"nameUrl\":\"watch4-44mm\",\"name\":\"Galaxy Watch4<br/>44mm\",\"description\":\"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\",\"buyUrl\":\"https://google.com\",\"infoUrl\":\"https://google.com\",\"shareUrl\":\"https://google.com\",\"imageUrl\":\"/images/Galaxy_Watch4_44mm.png\",\"defaults\":[{\"body\":\"tijelo_fresh_black\",\"strap\":\"remen_black\",\"watchface\":\"watchface_fresh_large_black\",\"default\":false},{\"body\":\"tijelo_fresh_silver\",\"strap\":\"remen_silver\",\"watchface\":\"watchface_fresh_large_silver\",\"default\":true},{\"body\":\"tijelo_fresh_green\",\"strap\":\"remen_green\",\"watchface\":\"watchface_fresh_large_green\",\"default\":false}],\"setup\":{\"object\":{\"addonX\":-9,\"addonY\":-20,\"rotateXOffset\":-60,\"rotateYOffset\":45,\"rotateZOffset\":40,\"scale\":{\"x\":0.08,\"y\":0.08,\"z\":0.08}}},\"lighting\":[{\"type\":\"point\",\"description\":\"upper left\",\"color\":\"0xffffff\",\"intensity\":1.6,\"distance\":100,\"decay\":2,\"position\":{\"x\":-5,\"y\":5,\"z\":5}},{\"type\":\"point\",\"description\":\"left\",\"color\":\"0xffffff\",\"intensity\":1,\"distance\":100,\"decay\":2,\"position\":{\"x\":5,\"y\":0,\"z\":5}},{\"type\":\"point\",\"description\":\"upper back\",\"color\":\"0xffffff\",\"intensity\":0.5,\"distance\":100,\"decay\":2,\"position\":{\"x\":-5,\"y\":5,\"z\":-5}},{\"type\":\"point\",\"description\":\"bottom\",\"color\":\"0xffffff\",\"intensity\":0.5,\"distance\":100,\"decay\":2,\"position\":{\"x\":0,\"y\":-5,\"z\":0}}]},{\"nameUrl\":\"watch4-40mm\",\"name\":\"Galaxy Watch4<br/>40mm\",\"description\":\"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\",\"buyUrl\":\"https://google.com\",\"infoUrl\":\"https://google.com\",\"shareUrl\":\"https://google.com\",\"imageUrl\":\"/images/Galaxy_Watch4_40mm.png\",\"defaults\":[{\"body\":\"tijelo_fresh_black\",\"strap\":\"remen_black\",\"watchface\":\"watchface_fresh_small_black\",\"default\":false},{\"body\":\"tijelo_fresh_silver\",\"strap\":\"remen_white\",\"watchface\":\"watchface_fresh_small_silver\",\"default\":false},{\"body\":\"tijelo_fresh_gold\",\"strap\":\"remen_pink\",\"watchface\":\"watchface_fresh_small_gold\",\"default\":true}],\"setup\":{\"object\":{\"addonX\":-9,\"addonY\":-20,\"rotateXOffset\":-56,\"rotateYOffset\":52,\"rotateZOffset\":40,\"scale\":{\"x\":0.08,\"y\":0.08,\"z\":0.08}}},\"lighting\":[{\"type\":\"point\",\"description\":\"upper left\",\"color\":\"0xffffff\",\"intensity\":1.6,\"distance\":100,\"decay\":2,\"position\":{\"x\":-5,\"y\":5,\"z\":5}},{\"type\":\"point\",\"description\":\"left\",\"color\":\"0xffffff\",\"intensity\":1,\"distance\":100,\"decay\":2,\"position\":{\"x\":5,\"y\":0,\"z\":5}},{\"type\":\"point\",\"description\":\"upper back\",\"color\":\"0xffffff\",\"intensity\":0.5,\"distance\":100,\"decay\":2,\"position\":{\"x\":-5,\"y\":5,\"z\":-5}},{\"type\":\"point\",\"description\":\"bottom\",\"color\":\"0xffffff\",\"intensity\":0.5,\"distance\":100,\"decay\":2,\"position\":{\"x\":0,\"y\":-5,\"z\":0}}]},{\"nameUrl\":\"watch4-classic-46mm\",\"name\":\"Galaxy Watch4<br/> Classic 46mm\",\"description\":\"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\",\"buyUrl\":\"https://google.com\",\"infoUrl\":\"https://google.com\",\"shareUrl\":\"https://google.com\",\"imageUrl\":\"/images/Galaxy_Watch4_Classic_46mm.png\",\"defaults\":[{\"body\":\"tijelo_wise_black\",\"strap\":\"remen_black\",\"watchface\":\"watchface_wise_small_black\",\"default\":true},{\"body\":\"tijelo_wise_silver\",\"strap\":\"remen_silver\",\"watchface\":\"watchface_wise_small_silver\",\"default\":false}],\"setup\":{\"object\":{\"addonX\":-9,\"addonY\":-20,\"rotateXOffset\":-60,\"rotateYOffset\":45,\"rotateZOffset\":40,\"scale\":{\"x\":0.08,\"y\":0.08,\"z\":0.08}}},\"lighting\":[{\"type\":\"directional\",\"color\":\"0xffffff\",\"intensity\":1,\"position\":{\"x\":0,\"y\":0,\"z\":5}},{\"type\":\"point\",\"description\":\"upper left\",\"color\":\"0xffffff\",\"intensity\":1.6,\"distance\":100,\"decay\":2,\"position\":{\"x\":-5,\"y\":5,\"z\":5}},{\"type\":\"point\",\"description\":\"left\",\"color\":\"0xffffff\",\"intensity\":1,\"distance\":100,\"decay\":2,\"position\":{\"x\":5,\"y\":0,\"z\":5}},{\"type\":\"point\",\"description\":\"upper back\",\"color\":\"0xffffff\",\"intensity\":0.5,\"distance\":100,\"decay\":2,\"position\":{\"x\":-5,\"y\":5,\"z\":-5}},{\"type\":\"point\",\"description\":\"bottom\",\"color\":\"0xffffff\",\"intensity\":0.5,\"distance\":100,\"decay\":2,\"position\":{\"x\":0,\"y\":-5,\"z\":0}}]},{\"nameUrl\":\"watch4-classic-42mm\",\"name\":\"Galaxy Watch4<br/>Classic 42mm\",\"description\":\"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\",\"buyUrl\":\"https://google.com\",\"infoUrl\":\"https://google.com\",\"shareUrl\":\"https://google.com\",\"imageUrl\":\"/images/Galaxy_Watch4_Classic_42mm.png\",\"defaults\":[{\"body\":\"tijelo_wise_black\",\"strap\":\"remen_black\",\"watchface\":\"watchface_wise_large_black\",\"default\":false},{\"body\":\"tijelo_wise_silver\",\"strap\":\"remen_white\",\"watchface\":\"watchface_wise_large_silver\",\"default\":true}],\"setup\":{\"object\":{\"addonX\":-9,\"addonY\":-20,\"rotateXOffset\":-60,\"rotateYOffset\":45,\"rotateZOffset\":40,\"scale\":{\"x\":0.08,\"y\":0.08,\"z\":0.08}}},\"lighting\":[{\"type\":\"point\",\"description\":\"upper left\",\"color\":\"0xffffff\",\"intensity\":1.6,\"distance\":100,\"decay\":2,\"position\":{\"x\":-5,\"y\":5,\"z\":5}},{\"type\":\"point\",\"description\":\"left\",\"color\":\"0xffffff\",\"intensity\":1,\"distance\":100,\"decay\":2,\"position\":{\"x\":5,\"y\":0,\"z\":5}},{\"type\":\"point\",\"description\":\"upper back\",\"color\":\"0xffffff\",\"intensity\":0.5,\"distance\":100,\"decay\":2,\"position\":{\"x\":-5,\"y\":5,\"z\":-5}},{\"type\":\"point\",\"description\":\"bottom\",\"color\":\"0xffffff\",\"intensity\":0.5,\"distance\":100,\"decay\":2,\"position\":{\"x\":0,\"y\":-5,\"z\":0}}]}]");

/***/ }),

/***/ "M3wM":
/*!*******************************************************!*\
  !*** ./src/app/external-url/external-url-provider.ts ***!
  \*******************************************************/
/*! exports provided: externalUrlProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "externalUrlProvider", function() { return externalUrlProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

var externalUrlProvider = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('externalUrlRedirectResolver');


/***/ }),

/***/ "Ndrk":
/*!**************************************!*\
  !*** ./src/app/_components/index.ts ***!
  \**************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found.component */ "6pSa");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return _not_found_component__WEBPACK_IMPORTED_MODULE_0__["NotFoundComponent"]; });




/***/ }),

/***/ "RMjP":
/*!*****************************************************!*\
  !*** ./src/app/watch-viewer/watch-viewer.module.ts ***!
  \*****************************************************/
/*! exports provided: WatchViewerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchViewerModule", function() { return WatchViewerModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _watch_viewer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./watch-viewer.component */ "9GcA");
/* harmony import */ var _watch_viewer_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./watch-viewer-routing.module */ "xmt7");
/* harmony import */ var _watch_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./watch-model */ "rP1g");
/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./camera */ "86Bd");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material */ "6uZV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







var WatchViewerModule = /** @class */ (function () {
    function WatchViewerModule() {
    }
    WatchViewerModule.ɵfac = function WatchViewerModule_Factory(t) { return new (t || WatchViewerModule)(); };
    WatchViewerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: WatchViewerModule });
    WatchViewerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _watch_viewer_routing_module__WEBPACK_IMPORTED_MODULE_2__["WatchViewerRoutingModule"]
            ]] });
    return WatchViewerModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](WatchViewerModule, { declarations: [_watch_viewer_component__WEBPACK_IMPORTED_MODULE_1__["WatchViewerComponent"],
        _watch_model__WEBPACK_IMPORTED_MODULE_3__["WatchModelComponent"],
        _camera__WEBPACK_IMPORTED_MODULE_4__["CameraComponent"],
        _material__WEBPACK_IMPORTED_MODULE_5__["MaterialComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _watch_viewer_routing_module__WEBPACK_IMPORTED_MODULE_2__["WatchViewerRoutingModule"]] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
    return AppComponent;
}());



/***/ }),

/***/ "UA2U":
/*!*********************************************************!*\
  !*** ./src/app/watch-viewer/camera/camera.component.ts ***!
  \*********************************************************/
/*! exports provided: CameraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraComponent", function() { return CameraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _mediapipe_hands__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mediapipe/hands */ "I0vh");
/* harmony import */ var _mediapipe_hands__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mediapipe_hands__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mediapipe_camera_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mediapipe/camera_utils */ "FBxB");
/* harmony import */ var _mediapipe_camera_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mediapipe_camera_utils__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-device-detector */ "9YtQ");
/* harmony import */ var ngx_facebook_fb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-facebook-fb */ "U+X4");
/* harmony import */ var _services_web_gl_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/web-gl.service */ "oQYe");
/* harmony import */ var _watch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../watch */ "9lyr");
/* harmony import */ var _services_share_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/share.service */ "dz5x");
/* harmony import */ var _services_app_config_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/app.config.service */ "h/w8");



















var _c0 = ["inputVideo"];
function CameraComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Usmjeri kameru prema ruci te namjesti ruku unutar maske.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CameraComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraComponent_div_4_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.closeCameraShare(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](8, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraComponent_div_4_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.shareInstagram(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](10, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraComponent_div_4_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.shareFacebook(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](13, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraComponent_div_4_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.shareEmail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](16, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraComponent_div_4_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.downloadScreen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](19, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", ctx_r2.watch.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r2.shareImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
var CameraComponent = /** @class */ (function () {
    function CameraComponent(platformId, webGLService, device, shareService, fb) {
        this.platformId = platformId;
        this.webGLService = webGLService;
        this.device = device;
        this.shareService = shareService;
        this.fb = fb;
        this.closeShare = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(1, 100);
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.showCameraModal = false;
        this.disabledCamera = false;
        if (this.device) {
            this.disabledCamera = true;
            return;
        }
    }
    CameraComponent.prototype.ngAfterViewInit = function () {
        this.webGLService.videoElement = this.videoElement = this.inputVideo.nativeElement;
        this.startCamera();
        this.startMediaPipe();
    };
    CameraComponent.prototype.startCamera = function () {
        var _this = this;
        if (!this.videoElement) {
            return;
        }
        var camera = new _mediapipe_camera_utils__WEBPACK_IMPORTED_MODULE_6__["Camera"](this.videoElement, {
            facingMode: 'environment',
            onFrame: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                var cameraAspectRatio;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            cameraAspectRatio = this.videoElement.videoWidth / this.videoElement.videoHeight;
                            if (this.videoElement.videoWidth !== this.webGLService.canvasWidth) {
                                this.webGLService.canvasWidth = (window.innerWidth < this.videoElement.videoWidth) ?
                                    window.innerWidth : this.videoElement.videoWidth;
                                this.webGLService.canvasHeight = Math.round(this.webGLService.canvasWidth / cameraAspectRatio);
                            }
                            this.webGLService.attachVideoTexture();
                            if (!this.holistic) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.holistic.send({ image: this.videoElement })];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            }); },
        });
        camera.start();
        this.camera = camera;
    };
    CameraComponent.prototype.shareFacebook = function () {
        var _this = this;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            var tag = document.createElement('script');
            tag.src = 'https://connect.facebook.net/en_US/sdk.js';
            document.body.appendChild(tag);
            var FBIsntLoaded_1 = true;
            this.subscription.add(this.timer
                .pipe(
            // @ts-ignore
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function (x) { return FBIsntLoaded_1; }))
                .subscribe(function (res) {
                // @ts-ignore
                if (typeof FB !== 'undefined') {
                    // @ts-ignore
                    FBIsntLoaded_1 = false;
                    var initParams = {
                        appId: _services_app_config_service__WEBPACK_IMPORTED_MODULE_12__["AppConfigService"].settings.fBAppId,
                        version: _services_app_config_service__WEBPACK_IMPORTED_MODULE_12__["AppConfigService"].settings.fBAPIv,
                        status: true,
                        cookie: true,
                        xfbml: true
                    };
                    _this.fb.init(initParams);
                    _this.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(_this.fb.getLoginStatus())
                        .subscribe(function (fbStatus) {
                        if (fbStatus && fbStatus.status === 'connected') {
                            var authToken = fbStatus.authResponse.accessToken;
                            _this.postToFb(authToken);
                        }
                        else {
                            _this.fb.login()
                                .then(function (fbLoginStatus) {
                                if (fbLoginStatus && fbLoginStatus.authResponse.accessToken) {
                                    var authToken = fbLoginStatus.authResponse.accessToken;
                                    _this.postToFb(authToken);
                                }
                            })
                                .catch(function (error) { return console.error(error); });
                        }
                    }));
                }
            }));
        }
    };
    CameraComponent.prototype.convertBase64ToBlob = function (base64Image) {
        // Split into two parts
        var parts = base64Image.split(';base64,');
        // Hold the content type
        var imageType = parts[0].split(':')[1];
        // Decode Base64 string
        var decodedData = window.atob(parts[1]);
        // Create UNIT8ARRAY of size same as row data length
        var uInt8Array = new Uint8Array(decodedData.length);
        // Insert all character code into uInt8Array
        for (var i = 0; i < decodedData.length; ++i) {
            uInt8Array[i] = decodedData.charCodeAt(i);
        }
        // Return BLOB image after conversion
        return new Blob([uInt8Array], { type: imageType });
    };
    CameraComponent.prototype.postToFb = function (accessToken) {
        var _this = this;
        var blob = this.convertBase64ToBlob(this.shareImage);
        var mime = blob.type;
        var size = blob.size;
        this.subscription.add(this.shareService
            .createFbUploadRequest(accessToken, mime, size)
            .subscribe(function (res) {
            if (res && res.id) {
                _this.uploadFbFile(accessToken, res.id, blob);
            }
        }));
        // .shareFacebook(this.watch.name, blob, accessToken)
        // const canvas = this.webGLService.renderer.domElement;
        // canvas.toBlob(blob => {
        // });
    };
    CameraComponent.prototype.uploadFbFile = function (accessToken, uniqueIdentifier, blob) {
        this.subscription.add(this.shareService
            .createFbFile(accessToken, uniqueIdentifier, blob)
            .subscribe(function (res) {
            console.log(res);
        }));
    };
    CameraComponent.prototype.shareInstagram = function () {
    };
    CameraComponent.prototype.shareEmail = function () {
    };
    CameraComponent.prototype.downloadScreen = function () {
    };
    CameraComponent.prototype.fbPost = function () {
        // const authToken = '';
        // const fd = new FormData();
        // fd.append('access_token', authToken);
        // fd.append('source', blob);
        // fd.append('message', 'Samsung watch4');
        // try {
        //   $.ajax({
        //     url: "https://graph.facebook.com/me/photos?access_token=" + authToken,
        //     type: "POST",
        //     data: fd,
        //     processData: false,
        //     contentType: false,
        //     cache: false,
        //     success: function (data) {
        //       console.log("success " + data);
        //       $("#poster").html("Posted Canvas Successfully");
        //     },
        //     error: function (shr, status, data) {
        //       console.log("error " + data + " Status " + shr.status);
        //     },
        //     complete: function () {
        //       console.log("Posted to facebook");
        //     }
        //   });
        //
        // } catch (e) {
        //   console.log(e);
        // }
    };
    CameraComponent.prototype.openCameraShare = function () {
        this.showCameraModal = true;
    };
    CameraComponent.prototype.closeCameraShare = function () {
        this.showCameraModal = false;
        this.closeShare.emit(true);
    };
    CameraComponent.prototype.startMediaPipe = function () {
        var _this = this;
        this.holistic = new _mediapipe_hands__WEBPACK_IMPORTED_MODULE_5__["Hands"]({ locateFile: function (file) {
                return _services_app_config_service__WEBPACK_IMPORTED_MODULE_12__["AppConfigService"].settings.appRoot + "/mediapipe/" + file;
            } });
        this.holistic.setOptions({
            maxNumHands: 1,
            modelComplexity: 1,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5
        });
        this.holistic.onResults(function (results) {
            var landmarks = null;
            var hand;
            if (results.multiHandedness && results.multiHandedness.length > 0) {
                hand = results.multiHandedness[0].label;
                var index = 0;
                if (results.multiHandedness.length > 1) {
                    var handResult = results.multiHandedness.find(function (x) { return x.label === 'Left'; });
                    if (handResult && handResult.label !== undefined) {
                        hand = handResult.label;
                        index = results.multiHandedness.indexOf(handResult);
                    }
                }
                landmarks = results.multiHandLandmarks[index];
            }
            if (hand && landmarks) {
                _this.webGLService.updateModelPosition(hand, landmarks);
            }
            else if (_this.webGLService.object) {
                _this.webGLService.object.visible = false;
            }
        });
    };
    CameraComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        if (this.camera) {
            var feed = this.videoElement;
            feed.pause();
            if (feed.srcObject) {
                feed.srcObject.getTracks().forEach(function (a) { return a.stop(); });
                feed.srcObject = null;
            }
        }
        if (this.webGLService.texture2D) {
            this.webGLService.texture2D = undefined;
        }
    };
    CameraComponent.ɵfac = function CameraComponent_Factory(t) { return new (t || CameraComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_web_gl_service__WEBPACK_IMPORTED_MODULE_9__["WebGlService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__["DeviceDetectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_share_service__WEBPACK_IMPORTED_MODULE_11__["ShareService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_facebook_fb__WEBPACK_IMPORTED_MODULE_8__["FacebookService"])); };
    CameraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CameraComponent, selectors: [["app-camera"]], viewQuery: function CameraComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.inputVideo = _t.first);
        } }, inputs: { watch: "watch" }, outputs: { closeShare: "closeShare" }, decls: 5, vars: 2, consts: function () { var i18n_1; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6715241881994536962$$SRC_APP_WATCH_VIEWER_CAMERA_CAMERA_COMPONENT_TS__2 = goog.getMsg("Podijeli:");
            i18n_1 = MSG_EXTERNAL_6715241881994536962$$SRC_APP_WATCH_VIEWER_CAMERA_CAMERA_COMPONENT_TS__2;
        }
        else {
            i18n_1 = "Podijeli:";
        } var i18n_3; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5692300769350636885$$SRC_APP_WATCH_VIEWER_CAMERA_CAMERA_COMPONENT_TS__4 = goog.getMsg("{$startItalicText}{$closeItalicText}", { "startItalicText": "\uFFFD#11\uFFFD", "closeItalicText": "\uFFFD/#11\uFFFD" });
            i18n_3 = MSG_EXTERNAL_5692300769350636885$$SRC_APP_WATCH_VIEWER_CAMERA_CAMERA_COMPONENT_TS__4;
        }
        else {
            i18n_3 = "" + "\uFFFD#11\uFFFD" + "" + "\uFFFD/#11\uFFFD" + "";
        } var i18n_5; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5692300769350636885$$SRC_APP_WATCH_VIEWER_CAMERA_CAMERA_COMPONENT_TS__6 = goog.getMsg("{$startItalicText}{$closeItalicText}", { "startItalicText": "\uFFFD#14\uFFFD", "closeItalicText": "\uFFFD/#14\uFFFD" });
            i18n_5 = MSG_EXTERNAL_5692300769350636885$$SRC_APP_WATCH_VIEWER_CAMERA_CAMERA_COMPONENT_TS__6;
        }
        else {
            i18n_5 = "" + "\uFFFD#14\uFFFD" + "" + "\uFFFD/#14\uFFFD" + "";
        } var i18n_7; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5692300769350636885$$SRC_APP_WATCH_VIEWER_CAMERA_CAMERA_COMPONENT_TS__8 = goog.getMsg("{$startItalicText}{$closeItalicText}", { "startItalicText": "\uFFFD#17\uFFFD", "closeItalicText": "\uFFFD/#17\uFFFD" });
            i18n_7 = MSG_EXTERNAL_5692300769350636885$$SRC_APP_WATCH_VIEWER_CAMERA_CAMERA_COMPONENT_TS__8;
        }
        else {
            i18n_7 = "" + "\uFFFD#17\uFFFD" + "" + "\uFFFD/#17\uFFFD" + "";
        } var i18n_9; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5692300769350636885$$SRC_APP_WATCH_VIEWER_CAMERA_CAMERA_COMPONENT_TS__10 = goog.getMsg("{$startItalicText}{$closeItalicText}", { "startItalicText": "\uFFFD#20\uFFFD", "closeItalicText": "\uFFFD/#20\uFFFD" });
            i18n_9 = MSG_EXTERNAL_5692300769350636885$$SRC_APP_WATCH_VIEWER_CAMERA_CAMERA_COMPONENT_TS__10;
        }
        else {
            i18n_9 = "" + "\uFFFD#20\uFFFD" + "" + "\uFFFD/#20\uFFFD" + "";
        } return [["width", "500", "height", "500", "muted", "", "playsinline", "", "autoplay", "", 1, "input_video"], ["inputVideo", ""], [1, "container"], [4, "ngIf"], ["class", "modal fullscreen d-flex flex-column justify-content-between", 4, "ngIf"], [1, "arm"], [1, "helper"], [1, "text"], [1, "modal", "fullscreen", "d-flex", "flex-column", "justify-content-between"], [1, "share-image", 3, "src", "alt"], [1, "share-icons-div", "rounded-top", "p-2"], [1, "p-2", "d-flex", "justify-content-end"], [1, "close-icon-grey", 3, "click"], [1, "divider", "mb-4"], [1, "d-flex", "justify-content-around"], [1, "d-inline-block", "mr-2", "fz-16", "font-weight-bold"], i18n_1, ["type", "button", 1, "btn", "border-0", "transparent", 3, "click"], i18n_3, [1, "instagram-button"], i18n_5, [1, "fb-button"], i18n_7, [1, "email-button"], i18n_9, [1, "download-button"]]; }, template: function CameraComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "video", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CameraComponent_ng_container_3_Template, 5, 0, "ng-container", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CameraComponent_div_4_Template, 21, 2, "div", 4);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.webGLService.object == null ? null : ctx.webGLService.object.visible) && !ctx.webGLService.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showCameraModal);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], encapsulation: 2 });
    return CameraComponent;
}());

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ }),

/***/ "UWY7":
/*!*************************************************!*\
  !*** ./src/app/watch-list/watch-list.module.ts ***!
  \*************************************************/
/*! exports provided: WatchListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchListModule", function() { return WatchListModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _watch_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./watch-list.component */ "kIlJ");
/* harmony import */ var _watch_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./watch-list-routing.module */ "2ZLR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





var WatchListModule = /** @class */ (function () {
    function WatchListModule() {
    }
    WatchListModule.ɵfac = function WatchListModule_Factory(t) { return new (t || WatchListModule)(); };
    WatchListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: WatchListModule });
    WatchListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                _watch_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["WatchListRoutingModule"]
            ]] });
    return WatchListModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](WatchListModule, { declarations: [_watch_list_component__WEBPACK_IMPORTED_MODULE_2__["WatchListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        _watch_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["WatchListRoutingModule"]] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: initializeApp, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeApp", function() { return initializeApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_facebook_fb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-facebook-fb */ "U+X4");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _services_app_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/app.config.service */ "h/w8");
/* harmony import */ var _watch_viewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./watch-viewer */ "2xQ5");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_components */ "Ndrk");
/* harmony import */ var _watch_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./watch-list */ "53u6");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routing.module */ "lm+D");












function initializeApp(appConfig) {
    return function () {
        return appConfig.load();
    };
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
            _services_app_config_service__WEBPACK_IMPORTED_MODULE_5__["AppConfigService"],
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
                useFactory: initializeApp,
                multi: true,
                deps: [_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__["AppConfigService"]]
            },
        ], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                ngx_facebook_fb__WEBPACK_IMPORTED_MODULE_3__["FacebookModule"].forRoot(),
                _watch_list__WEBPACK_IMPORTED_MODULE_8__["WatchListModule"],
                _watch_viewer__WEBPACK_IMPORTED_MODULE_6__["WatchViewerModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], ngx_facebook_fb__WEBPACK_IMPORTED_MODULE_3__["FacebookModule"], _watch_list__WEBPACK_IMPORTED_MODULE_8__["WatchListModule"],
        _watch_viewer__WEBPACK_IMPORTED_MODULE_6__["WatchViewerModule"]] }); })();


/***/ }),

/***/ "dtCI":
/*!*******************************************************************!*\
  !*** ./src/app/watch-viewer/watch-model/watch-model.component.ts ***!
  \*******************************************************************/
/*! exports provided: WatchModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchModelComponent", function() { return WatchModelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "Womt");
/* harmony import */ var _services_web_gl_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/web-gl.service */ "oQYe");
/* harmony import */ var _watch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../watch */ "9lyr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _material_material_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../material/material.component */ "C0lI");









var _c0 = function (a0) { return { "active": a0 }; };
function WatchModelComponent_ng_container_0_ul_1_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function WatchModelComponent_ng_container_0_ul_1_li_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); var material_r6 = ctx.$implicit; var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r7.webGLService.changeMeshes(material_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var material_r6 = ctx.$implicit;
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c0, ctx_r5.webGLService.displayMaterial.tijelo === material_r6.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r5.translate(material_r6.name));
} }
function WatchModelComponent_ng_container_0_ul_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, WatchModelComponent_ng_container_0_ul_1_li_1_Template, 3, 4, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.webGLService.materials.tijelo);
} }
function WatchModelComponent_ng_container_0_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r9.translate(ctx_r9.webGLService.displayMaterial.remen));
} }
function WatchModelComponent_ng_container_0_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r10.translate(ctx_r10.webGLService.displayMaterial.kozni));
} }
function WatchModelComponent_ng_container_0_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r11.translate(ctx_r11.webGLService.displayMaterial.extreme));
} }
function WatchModelComponent_ng_container_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](2, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, WatchModelComponent_ng_container_0_div_2_div_3_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, WatchModelComponent_ng_container_0_div_2_div_4_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, WatchModelComponent_ng_container_0_div_2_div_5_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.webGLService.displayMaterial.remen);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.webGLService.displayMaterial.kozni);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.webGLService.displayMaterial.extreme);
} }
function WatchModelComponent_ng_container_0_div_3_ng_container_5_li_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var material_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r18.getDisplayMeshName(ctx_r18.webGLService.meshes.remen), "_", material_r17.name, "");
} }
function WatchModelComponent_ng_container_0_div_3_ng_container_5_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-material", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, WatchModelComponent_ng_container_0_div_3_ng_container_5_li_1_span_2_Template, 2, 2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var material_r17 = ctx.$implicit;
    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mesh", ctx_r16.getDisplayMesh(ctx_r16.webGLService.meshes.remen))("material", material_r17)("part", "remen");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r16.webGLService.displayMesh.remen === ctx_r16.getDisplayMesh(ctx_r16.webGLService.meshes.remen) && ctx_r16.webGLService.displayMaterial.remen === material_r17);
} }
function WatchModelComponent_ng_container_0_div_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, WatchModelComponent_ng_container_0_div_3_ng_container_5_li_1_Template, 3, 4, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r12.webGLService.materials.remen);
} }
function WatchModelComponent_ng_container_0_div_3_ng_container_6_li_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var material_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r22.getDisplayMeshName(ctx_r22.webGLService.meshes.kozni), "_", material_r21.name, "");
} }
function WatchModelComponent_ng_container_0_div_3_ng_container_6_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-material", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, WatchModelComponent_ng_container_0_div_3_ng_container_6_li_1_span_2_Template, 2, 2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var material_r21 = ctx.$implicit;
    var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mesh", ctx_r20.getDisplayMesh(ctx_r20.webGLService.meshes.kozni))("material", material_r21)("part", "kozni");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r20.webGLService.displayMesh.kozni === ctx_r20.getDisplayMesh(ctx_r20.webGLService.meshes.kozni) && ctx_r20.webGLService.displayMaterial.kozni === material_r21);
} }
function WatchModelComponent_ng_container_0_div_3_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, WatchModelComponent_ng_container_0_div_3_ng_container_6_li_1_Template, 3, 4, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r13.webGLService.materials.kozni);
} }
function WatchModelComponent_ng_container_0_div_3_ng_container_7_li_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var material_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r26.getDisplayMeshName(ctx_r26.webGLService.meshes.extreme), "_", material_r25.name, "");
} }
function WatchModelComponent_ng_container_0_div_3_ng_container_7_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-material", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, WatchModelComponent_ng_container_0_div_3_ng_container_7_li_1_span_2_Template, 2, 2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var material_r25 = ctx.$implicit;
    var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mesh", ctx_r24.getDisplayMesh(ctx_r24.webGLService.meshes.extreme))("material", material_r25)("part", "extreme");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r24.webGLService.displayMesh.extreme === ctx_r24.getDisplayMesh(ctx_r24.webGLService.meshes.extreme) && ctx_r24.webGLService.displayMaterial.extreme === material_r25);
} }
function WatchModelComponent_ng_container_0_div_3_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, WatchModelComponent_ng_container_0_div_3_ng_container_7_li_1_Template, 3, 4, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r14.webGLService.materials.extreme);
} }
function WatchModelComponent_ng_container_0_div_3_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function WatchModelComponent_ng_container_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](3, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, WatchModelComponent_ng_container_0_div_3_ng_container_5_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, WatchModelComponent_ng_container_0_div_3_ng_container_6_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, WatchModelComponent_ng_container_0_div_3_ng_container_7_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, WatchModelComponent_ng_container_0_div_3_div_8_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.webGLService.meshes.remen && ctx_r4.webGLService.meshes.remen.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.webGLService.meshes.kozni && ctx_r4.webGLService.meshes.kozni.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.webGLService.meshes.extreme && ctx_r4.webGLService.meshes.extreme.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.materialsCount > 5);
} }
function WatchModelComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, WatchModelComponent_ng_container_0_ul_1_Template, 2, 1, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, WatchModelComponent_ng_container_0_div_2_Template, 6, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, WatchModelComponent_ng_container_0_div_3_Template, 9, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.webGLService.materials.tijelo.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.webGLService.displayMaterial.remen || ctx_r0.webGLService.displayMaterial.kozni || ctx_r0.webGLService.displayMaterial.extreme);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.materialsCount > 0);
} }
function WatchModelComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 25);
} }
var WatchModelComponent = /** @class */ (function () {
    function WatchModelComponent(webGLService) {
        var _this = this;
        this.webGLService = webGLService;
        // tijela
        this.tijeloFreshBlack = "tijelo_fresh_black";
        this.tijeloFreshSilver = "tijelo_fresh_silver";
        this.tijeloFreshGold = "tijelo_fresh_gold";
        this.tijeloFreshGreen = "tijelo_fresh_green";
        this.tijeloWiseBlack = "tijelo_wise_black";
        this.tijeloWiseSilver = "tijelo_wise_silver";
        this.remenBlack = "remen_black";
        this.remenWhite = "remen_white";
        this.remenPink = "remen_pink";
        this.remenSilver = "remen_silver";
        this.remenGreen = "remen_green";
        this.remenOlive = "remen_olive";
        this.remenNavy = "remen_navy";
        this.remenRed = "remen_red";
        this.kozniCamel = "kozni_camel";
        this.kozniPink = "kozni_pink";
        this.kozniNavy = "kozni_navy";
        this.kozniBlack = "kozni_black";
        this.extremeBlack = "extreme_black";
        this.extremeRed = "extreme_red";
        this.extremeWhite = "extreme_white";
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.materialsCount = 0;
        this.subscription.add(this.webGLService.materialsLoaded.subscribe(function (loaded) {
            if (loaded) {
                _this.materialsCount = _this.webGLService.getMaterialsCount();
            }
        }));
    }
    WatchModelComponent.prototype.ngAfterViewInit = function () {
        this.webGLService.loadModel(this.watch, true);
    };
    WatchModelComponent.prototype.translate = function (strap) {
        var localVariable = strap.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, function (m, chr) { return chr.toUpperCase(); });
        return this[localVariable];
    };
    WatchModelComponent.prototype.getDisplayMesh = function (meshes) {
        return meshes.find(function (x) { return x instanceof three__WEBPACK_IMPORTED_MODULE_2__["Mesh"]; });
    };
    WatchModelComponent.prototype.getDisplayMeshName = function (meshes) {
        var mesh = meshes.find(function (x) { return x instanceof three__WEBPACK_IMPORTED_MODULE_2__["Mesh"]; });
        return mesh ? mesh.name : '';
    };
    WatchModelComponent.prototype.ngOnDestroy = function () {
        if (this.webGLService) {
            this.webGLService.reset();
        }
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    WatchModelComponent.ɵfac = function WatchModelComponent_Factory(t) { return new (t || WatchModelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_web_gl_service__WEBPACK_IMPORTED_MODULE_3__["WebGlService"])); };
    WatchModelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: WatchModelComponent, selectors: [["app-watch-model"]], inputs: { watch: "watch", tryOn: "tryOn" }, decls: 2, vars: 2, consts: function () { var i18n_1; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6915683784386601399$$SRC_APP_WATCH_VIEWER_WATCH_MODEL_WATCH_MODEL_COMPONENT_TS___2 = goog.getMsg("Dodatni remen:");
            i18n_1 = MSG_EXTERNAL_6915683784386601399$$SRC_APP_WATCH_VIEWER_WATCH_MODEL_WATCH_MODEL_COMPONENT_TS___2;
        }
        else {
            i18n_1 = "Dodatni remen:";
        } var i18n_3; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6205877574433611935$$SRC_APP_WATCH_VIEWER_WATCH_MODEL_WATCH_MODEL_COMPONENT_TS___4 = goog.getMsg("Remeni");
            i18n_3 = MSG_EXTERNAL_6205877574433611935$$SRC_APP_WATCH_VIEWER_WATCH_MODEL_WATCH_MODEL_COMPONENT_TS___4;
        }
        else {
            i18n_3 = "Remeni";
        } return [[4, "ngIf"], ["class", "loader loading", 4, "ngIf"], ["class", "unstyled sticky top center justify-content-center d-flex p-2", 4, "ngIf"], ["class", "additional-strap text-center text-white", 4, "ngIf"], ["class", "sticky right d-flex flex-column align-items-end", 4, "ngIf"], [1, "unstyled", "sticky", "top", "center", "justify-content-center", "d-flex", "p-2"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-rounded", "transparent", "bd-white", "mr-2", "text-white", 3, "ngClass", "click"], [1, "additional-strap", "text-center", "text-white"], i18n_1, ["class", "font-weight-bold", 4, "ngIf"], [1, "font-weight-bold"], [1, "sticky", "right", "d-flex", "flex-column", "align-items-end"], [1, "p-2", "mb-2"], [1, "text-white", "m-0", "text-center"], i18n_3, [1, "unstyled", "materials", "mb-3"], ["class", "d-flex justify-content-end", 4, "ngIf"], ["class", "mb-3 mr-2", 4, "ngFor", "ngForOf"], [1, "mb-3", "mr-2"], [3, "mesh", "material", "part"], ["class", "text-white fz-12 mt-1", 4, "ngIf"], [1, "text-white", "fz-12", "mt-1"], [1, "d-flex", "justify-content-end"], [1, "down-icon"], [1, "loader", "loading"]]; }, template: function WatchModelComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, WatchModelComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, WatchModelComponent_div_1_Template, 1, 0, "div", 1);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.webGLService.meshes);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.webGLService.meshes);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _material_material_component__WEBPACK_IMPORTED_MODULE_7__["MaterialComponent"]], encapsulation: 2 });
    return WatchModelComponent;
}());

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23;


/***/ }),

/***/ "dz5x":
/*!*******************************************!*\
  !*** ./src/app/services/share.service.ts ***!
  \*******************************************/
/*! exports provided: ShareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareService", function() { return ShareService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





var httpOptions = {
    observe: 'response'
};
var ShareService = /** @class */ (function () {
    function ShareService(http) {
        this.http = http;
    }
    ShareService.prototype.createFbUploadRequest = function (accessToken, mime, size) {
        return this.http.post("https://graph.facebook.com/v12.0/app/uploads?access_token=" + accessToken + "&debug=all&file_length=" + size + "&file_type=" + mime, {}, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.body;
        }));
    };
    ShareService.prototype.createFbFile = function (accessToken, identifier, blob) {
        var httpOptions1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, httpOptions), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                file_offset: '0',
                Authorization: "OAuth {" + accessToken
            })
        });
        var fd = new FormData();
        fd.append('source', blob);
        // fd.append('data-binary', blob);
        return this.http.post("https://graph.facebook.com/v12.0/" + identifier + "&debug=all", fd, httpOptions1)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.body;
        }));
    };
    ShareService.prototype.shareFacebook = function (message, blob, accessToken) {
        var fd = new FormData();
        fd.append('access_token', accessToken);
        fd.append('source', blob);
        fd.append('message', message);
        return this.http.post("https://graph.facebook.com/v12.0/me/feed?access_token=" + accessToken, fd, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.body;
        }));
    };
    ShareService.ɵfac = function ShareService_Factory(t) { return new (t || ShareService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    ShareService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ShareService, factory: ShareService.ɵfac, providedIn: 'root' });
    return ShareService;
}());



/***/ }),

/***/ "h/w8":
/*!************************************************!*\
  !*** ./src/app/services/app.config.service.ts ***!
  \************************************************/
/*! exports provided: AppConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfigService", function() { return AppConfigService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




var AppConfigService = /** @class */ (function () {
    function AppConfigService(http) {
        this.http = http;
    }
    AppConfigService.prototype.load = function () {
        var _this = this;
        var fileName = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production ? 'prod' : 'local';
        var jsonFile = "assets/config/config." + fileName + ".json";
        return new Promise(function (resolve, reject) {
            _this.http.get(jsonFile)
                .toPromise()
                .then(function (response) {
                AppConfigService.settings = response;
                resolve(response);
            }).catch(function (err) {
                reject("Could not load file '" + jsonFile + "': " + JSON.stringify(err));
            });
        });
    };
    AppConfigService.ɵfac = function AppConfigService_Factory(t) { return new (t || AppConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
    AppConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AppConfigService, factory: AppConfigService.ɵfac });
    return AppConfigService;
}());



/***/ }),

/***/ "kIlJ":
/*!****************************************************!*\
  !*** ./src/app/watch-list/watch-list.component.ts ***!
  \****************************************************/
/*! exports provided: WatchListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchListComponent", function() { return WatchListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _watches_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../watches.json */ "FnrL");
var _watches_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../watches.json */ "FnrL", 1);
/* harmony import */ var _services_app_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/app.config.service */ "h/w8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






function WatchListComponent_ng_container_4_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](5, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](9, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var watch_r4 = ctx.$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/", watch_r4.nameUrl, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", watch_r4.name, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("alt", watch_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r3.assetsUrl + watch_r4.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function WatchListComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nStart"](2, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, WatchListComponent_ng_container_4_a_4_Template, 11, 4, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.watches);
} }
function WatchListComponent_ng_template_5_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](1, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function WatchListComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, WatchListComponent_ng_template_5_div_0_Template, 2, 0, "div", 20);
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.loading.list);
} }
var WatchListComponent = /** @class */ (function () {
    function WatchListComponent() {
        this.watches = _watches_json__WEBPACK_IMPORTED_MODULE_1__;
        this.assetsUrl = '/';
        this.loading = {
            list: false
        };
        this.assetsUrl = "" + _services_app_config_service__WEBPACK_IMPORTED_MODULE_2__["AppConfigService"].settings.appRoot;
    }
    WatchListComponent.prototype.closeWindow = function () {
        window.close();
    };
    WatchListComponent.ɵfac = function WatchListComponent_Factory(t) { return new (t || WatchListComponent)(); };
    WatchListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: WatchListComponent, selectors: [["app-watch-list"]], decls: 7, vars: 2, consts: function () { var i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2023613174999289166$$SRC_APP_WATCH_LIST_WATCH_LIST_COMPONENT_TS__1 = goog.getMsg("Kreiraj i isprobaj{$lineBreak}Galaxy Watch4", { "lineBreak": "\uFFFD#3\uFFFD\uFFFD/#3\uFFFD" });
            i18n_0 = MSG_EXTERNAL_2023613174999289166$$SRC_APP_WATCH_LIST_WATCH_LIST_COMPONENT_TS__1;
        }
        else {
            i18n_0 = "Kreiraj i isprobaj" + "\uFFFD#3\uFFFD\uFFFD/#3\uFFFD" + "Galaxy Watch4";
        } var i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7820166303990225507$$SRC_APP_WATCH_LIST_WATCH_LIST_COMPONENT_TS___3 = goog.getMsg("Isprobaj");
            i18n_2 = MSG_EXTERNAL_7820166303990225507$$SRC_APP_WATCH_LIST_WATCH_LIST_COMPONENT_TS___3;
        }
        else {
            i18n_2 = "Isprobaj";
        } var i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4739201216283590131$$SRC_APP_WATCH_LIST_WATCH_LIST_COMPONENT_TS___5 = goog.getMsg("AR iskustvo");
            i18n_4 = MSG_EXTERNAL_4739201216283590131$$SRC_APP_WATCH_LIST_WATCH_LIST_COMPONENT_TS___5;
        }
        else {
            i18n_4 = "AR iskustvo";
        } var i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3500084875485644005$$SRC_APP_WATCH_LIST_WATCH_LIST_COMPONENT_TS___7 = goog.getMsg("Gre\u0161ka prilikom u\u010Ditavanja satova");
            i18n_6 = MSG_EXTERNAL_3500084875485644005$$SRC_APP_WATCH_LIST_WATCH_LIST_COMPONENT_TS___7;
        }
        else {
            i18n_6 = "Gre\u0161ka prilikom u\u010Ditavanja satova";
        } return [[1, "bg-bckg"], [1, "p-2"], [1, "mb-3"], [1, "samsung-logo"], [4, "ngIf", "ngIfElse"], ["noWatches", ""], [1, "mt-0", "text-center", "text-white"], i18n_0, ["class", "list-watch d-flex relative", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "list-watch", "d-flex", "relative", 3, "routerLink"], [1, "d-flex", "flex-column", "w-100"], [1, "mt-0", 3, "innerHTML"], [1, "d-flex", "justify-content-between"], [1, "btn", "btn-black", "mr-2"], i18n_2, [1, "d-flex"], [1, "ar-experience"], [1, "f-small"], i18n_4, [1, "img", 3, "src", "alt"], [4, "ngIf"], i18n_6]; }, template: function WatchListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, WatchListComponent_ng_container_4_Template, 5, 1, "ng-container", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, WatchListComponent_ng_template_5_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.watches == null ? null : ctx.watches.length) > 0)("ngIfElse", _r1);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], encapsulation: 2 });
    return WatchListComponent;
}());

var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "lm+D":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-quicklink */ "FDOz");
/* harmony import */ var _quicklink_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quicklink-shared */ "m8l1");
/* harmony import */ var _external_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./external-url */ "z2F7");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_components */ "Ndrk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








var appRoutes = [
    { path: 'externalRedirect', canActivate: [_external_url__WEBPACK_IMPORTED_MODULE_4__["externalUrlProvider"]], component: _components__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"] },
    {
        path: 'watch',
        loadChildren: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./watch-viewer/watch-viewer.module */ "RMjP"))];
                case 1: return [2 /*return*/, (_a.sent()).WatchViewerModule];
            }
        }); }); },
    },
    {
        path: 'list',
        loadChildren: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./watch-list/watch-list.module */ "UWY7"))];
                case 1: return [2 /*return*/, (_a.sent()).WatchListModule];
            }
        }); }); },
    },
    { path: '', redirectTo: '/list', pathMatch: 'full' },
    { path: '**', redirectTo: '/list' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[
                _quicklink_shared__WEBPACK_IMPORTED_MODULE_3__["QuicklinkSharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, {
                    preloadingStrategy: ngx_quicklink__WEBPACK_IMPORTED_MODULE_2__["QuicklinkStrategy"],
                    useHash: true
                })
            ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_quicklink_shared__WEBPACK_IMPORTED_MODULE_3__["QuicklinkSharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "m8l1":
/*!*******************************************!*\
  !*** ./src/app/quicklink-shared/index.ts ***!
  \*******************************************/
/*! exports provided: QuicklinkSharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _quicklink_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quicklink-shared.module */ "5WzL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuicklinkSharedModule", function() { return _quicklink_shared_module__WEBPACK_IMPORTED_MODULE_0__["QuicklinkSharedModule"]; });




/***/ }),

/***/ "oQYe":
/*!********************************************!*\
  !*** ./src/app/services/web-gl.service.ts ***!
  \********************************************/
/*! exports provided: WebGlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGlService", function() { return WebGlService; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "Womt");
/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ "NK00");
/* harmony import */ var three_examples_jsm_loaders_DRACOLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/loaders/DRACOLoader */ "DKVj");
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "RyHr");
/* harmony import */ var _app_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.config.service */ "h/w8");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








var WebGlService = /** @class */ (function () {
    function WebGlService() {
        this.loading = true;
        this.modelLoadedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](false);
        this.modelLoaded = this.modelLoadedSubject.asObservable();
        this.materialsLoadedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](false);
        this.materialsLoaded = this.materialsLoadedSubject.asObservable();
        this.reset();
    }
    WebGlService.prototype.reset = function () {
        this.meshes = { remen: [], tijelo: [], kozni: [], extreme: [], watchface: [] };
        this.materials = { remen: [], tijelo: [], kozni: [], extreme: [], watchface: [] };
        this.displayMesh = { remen: null, kozni: null, extreme: null };
        this.displayMaterial = { remen: null, tijelo: null, kozni: null, extreme: null, watchface: null };
    };
    WebGlService.prototype.getImageUrl = function (blob) {
        // this.webGLService.renderer.domElement
        var fileReader = new FileReader();
        // init read
        fileReader.readAsDataURL(blob);
        return rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"].create(function (observer) {
            // if success
            fileReader.onload = (function (ev) {
                observer.next(ev.target.result);
                observer.complete();
            });
        });
    };
    WebGlService.prototype.init = function () {
        var _this = this;
        this.cameraZ = 90;
        this.camera = new three__WEBPACK_IMPORTED_MODULE_1__["PerspectiveCamera"](this.cameraZ, this.canvasWidth / this.canvasHeight, .1, 10);
        this.camera.position.z = 2;
        this.scene = new three__WEBPACK_IMPORTED_MODULE_1__["Scene"]();
        this.scene.add(this.camera);
        if (['windows', 'android'].indexOf(this.deviceInfo.os.toLowerCase()) > -1) {
            this.renderer = new three__WEBPACK_IMPORTED_MODULE_1__["WebGLRenderer"]({ antialias: true, preserveDrawingBuffer: true });
        }
        else {
            this.renderer = new three__WEBPACK_IMPORTED_MODULE_1__["WebGL1Renderer"]({ antialias: true, alpha: false, preserveDrawingBuffer: true });
        }
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.canvasWidth, this.canvasHeight);
        this.renderer.localClippingEnabled = true;
        this.renderer.setAnimationLoop(function (time) {
            if (_this.texture2D) {
                _this.texture2D.needsUpdate = true;
            }
            _this.renderer.render(_this.scene, _this.camera);
        });
        document.body.appendChild(this.renderer.domElement);
        this.loading = false;
    };
    WebGlService.prototype.setDisplayMesh = function (mesh, part) {
        if (part === 'kozni') {
            this.displayMesh.remen = null;
            this.displayMesh.extreme = null;
        }
        else if (part === 'remen') {
            this.displayMesh.kozni = null;
            this.displayMesh.extreme = null;
        }
        else if (part === 'extremen') {
            this.displayMesh.kozni = null;
            this.displayMesh.remen = null;
        }
        this.displayMesh[part] = mesh;
        return mesh;
    };
    WebGlService.prototype.getMaterialsCount = function () {
        var _this = this;
        var count = 0;
        Object.keys(this.materials).forEach(function (part) {
            if (['remen', 'kozni', 'extreme'].indexOf(part) >= 0) {
                count += _this.materials[part].length;
            }
        });
        return count;
    };
    WebGlService.prototype.setDisplayMaterial = function (material, part) {
        this.displayMaterial[part] = material.name;
        if (part === 'kozni') {
            this.displayMaterial.extreme = null;
            this.displayMaterial.remen = null;
        }
        else if (part === 'remen') {
            this.displayMaterial.extreme = null;
            this.displayMaterial.kozni = null;
        }
        else if (part === 'extreme') {
            this.displayMaterial.remen = null;
            this.displayMaterial.kozni = null;
        }
        return material;
    };
    WebGlService.prototype.changeMesh = function (meshes, part) {
        var _this = this;
        var displayCheckMesh = meshes.find(function (x) { return x instanceof three__WEBPACK_IMPORTED_MODULE_1__["Mesh"]; });
        if (this.displayMesh[part] === displayCheckMesh) {
            return;
        }
        if (part === 'kozni') {
            this.disposePartMesh('extreme');
            this.disposePartMesh('remen');
        }
        else if (part === 'extreme') {
            this.disposePartMesh('kozni');
            this.disposePartMesh('remen');
        }
        else if (part === 'remen') {
            this.disposePartMesh('extreme');
            this.disposePartMesh('kozni');
        }
        meshes.forEach(function (addMesh) {
            _this.object.add(addMesh);
        });
        this.setDisplayMesh(displayCheckMesh, part);
    };
    WebGlService.prototype.disposePartMesh = function (part) {
        for (var i = this.object.children.length - 1; i >= 0; i--) {
            var child = this.object.children[i];
            if (child.name.toLowerCase().includes(part)) {
                if (child instanceof three__WEBPACK_IMPORTED_MODULE_1__["Mesh"]) {
                    child.geometry.dispose();
                }
                this.object.children.splice(i, 1);
            }
        }
    };
    WebGlService.prototype.changeMaterial = function (material, part) {
        var _this = this;
        var meshChanged = false;
        if (part === 'kozni') {
            meshChanged = this.displayMaterial.remen !== null || this.displayMaterial.extreme !== null;
            this.displayMaterial.remen = null;
            this.displayMaterial.extreme = null;
        }
        else if (part === 'remen') {
            meshChanged = this.displayMaterial.kozni !== null || this.displayMaterial.extreme !== null;
            this.displayMaterial.kozni = null;
            this.displayMaterial.extreme = null;
        }
        else if (part === 'extreme') {
            meshChanged = this.displayMaterial.remen !== null || this.displayMaterial.kozni !== null;
            this.displayMaterial.remen = null;
            this.displayMaterial.kozni = null;
        }
        if (this.displayMaterial[part] === material) {
            return;
        }
        if (meshChanged) {
            var newMesh = this.meshes[part];
            this.changeMesh(newMesh, part);
        }
        this.object.traverse(function (mesh) {
            if (mesh instanceof three__WEBPACK_IMPORTED_MODULE_1__["Mesh"] && mesh.name.toLowerCase().includes(part)) {
                material.clippingPlanes = _this.clippingPlane ? [_this.clippingPlane] : null;
                mesh.material = material;
            }
        });
        this.setDisplayMaterial(material, part);
    };
    WebGlService.prototype.setClippingPlane = function () {
        var _this = this;
        this.clippingPlane = new three__WEBPACK_IMPORTED_MODULE_1__["Plane"](new three__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, 0, three__WEBPACK_IMPORTED_MODULE_1__["MathUtils"].degToRad(10)), -.3);
        if (this.object) {
            this.object.traverse(function (mesh) {
                if (mesh instanceof three__WEBPACK_IMPORTED_MODULE_1__["Mesh"]) {
                    mesh.material.clippingPlanes = _this.clippingPlane ? [_this.clippingPlane] : null;
                }
            });
        }
    };
    WebGlService.prototype.removeClippingPlane = function () {
        this.clippingPlane = null;
        if (this.object) {
            this.object.traverse(function (mesh) {
                if (mesh instanceof three__WEBPACK_IMPORTED_MODULE_1__["Mesh"] && mesh.material !== undefined) {
                    mesh.material.clippingPlanes = null;
                }
            });
        }
    };
    WebGlService.prototype.resetWatchPosition = function (forTryOn) {
        if (forTryOn === void 0) { forTryOn = false; }
        if (this.object) {
            this.object.position.set(0, -1, 0);
            if (!forTryOn) {
                this.object.scale.set(0.18, 0.18, 0.18);
            }
            else {
                this.object.scale.set(this.watch.setup.object.scale.x, this.watch.setup.object.scale.y, this.watch.setup.object.scale.z);
            }
            this.object.rotation.setFromVector3(new three__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, 0, 0));
        }
        if (this.texture2D && !forTryOn) {
            this.texture2D = undefined;
        }
    };
    WebGlService.prototype.updateModelPosition = function (hand, handLandmarks) {
        var newX;
        var newY;
        var handRoot;
        hand = hand.toLowerCase();
        if (handLandmarks) {
            handRoot = handLandmarks[1];
            var handX = Math.round(handRoot.x * 100);
            var handY = Math.round(handRoot.y * 100);
            if (this.object) {
                // this.object.visible = !(handX > 70 || handX < 30);
                this.object.visible = true;
            }
            if ((Math.abs(this.oldX - handX) < 2) && (Math.abs(this.oldY - handY) < 2)) {
                return;
            }
            this.oldX = handX;
            this.oldY = handY;
            delete handRoot.visibility;
            var addonX = this.watch.setup.object.addonX;
            var addonY = this.watch.setup.object.addonY;
            newX = this.calculateNewRange(0, 1, 100, -1, handX + addonX) * -1;
            newY = this.calculateNewRange(0, -1, 100, 1, (100 - handY) + addonY);
        }
        var aX = (hand === 'right') ? [handLandmarks[17].x, handLandmarks[17].y] : [handLandmarks[5].x, handLandmarks[5].y];
        var bX = [handLandmarks[0].x, handLandmarks[0].y];
        var cX = (hand === 'right') ? [handLandmarks[5].x, handLandmarks[5].y] : [handLandmarks[17].x, handLandmarks[17].y];
        var aY = (hand === 'right') ? [handLandmarks[5].x, handLandmarks[5].y] : [handLandmarks[5].x, handLandmarks[5].y];
        var bY = [handLandmarks[0].x, handLandmarks[0].y];
        var cY = (hand === 'right') ? [handLandmarks[17].x, handLandmarks[17].y] : [handLandmarks[17].x, handLandmarks[17].y];
        var rotateX = Math.atan2(cX[1] - bX[1], cX[0] - bX[0]) - Math.atan2(aX[1] - bX[1], aX[0] - bX[0])
            + three__WEBPACK_IMPORTED_MODULE_1__["MathUtils"].degToRad(this.watch.setup.object.rotateXOffset);
        var rotateY = Math.atan2(cY[1] - bY[1], cY[0] - bY[0]) - Math.atan2(aY[1] - bY[1], aY[0] - bY[0])
            + three__WEBPACK_IMPORTED_MODULE_1__["MathUtils"].degToRad(this.watch.setup.object.rotateYOffset);
        if (this.object) {
            this.object.position.set(newX, newY, 0);
            this.object.scale.set(this.watch.setup.object.scale.x, this.watch.setup.object.scale.y, this.watch.setup.object.scale.z);
            this.object.rotation.setFromVector3(new three__WEBPACK_IMPORTED_MODULE_1__["Vector3"](rotateX, rotateY, three__WEBPACK_IMPORTED_MODULE_1__["MathUtils"].degToRad(this.watch.setup.object.rotateZOffset)));
        }
    };
    WebGlService.prototype.calculateNewRange = function (oldMin, newMin, oldMax, newMax, oldValue) {
        var oldRange = (oldMax - oldMin);
        var newValue;
        if (oldRange === 0)
            newValue = newMin;
        else {
            var newRange = (newMax - newMin);
            newValue = (((oldValue - oldMin) * newRange) / oldRange) + newMin;
        }
        return newValue;
    };
    WebGlService.prototype.addMesh = function (mesh, partName) {
        if (this.meshes[partName].indexOf(mesh) < 0) {
            this.meshes[partName].push(mesh);
        }
    };
    WebGlService.prototype.addMeshGroup = function (meshGroup, partName) {
        if (this.meshes[partName].indexOf(meshGroup) < 0) {
            this.meshes[partName].push(meshGroup);
        }
    };
    WebGlService.prototype.addMaterial = function (material, partName) {
        material.clippingPlanes = this.clippingPlane ? [this.clippingPlane] : null;
        if (this.materials[partName].indexOf(material) < 0) {
            this.materials[partName].push(material);
        }
    };
    WebGlService.prototype.getPartFromMeshName = function (meshName) {
        var part;
        if (meshName.includes('remen')) {
            part = 'remen';
        }
        else if (meshName.includes('tijelo')) {
            part = 'tijelo';
        }
        else if (meshName.includes('kozni')) {
            part = 'kozni';
        }
        else if (meshName.includes('extreme')) {
            part = 'extreme';
        }
        else if (meshName.includes('watchface')) {
            part = 'watchface';
        }
        return part;
    };
    WebGlService.prototype.extractMaterials = function (group) {
        for (var i = group.children.length - 1; i >= 0; i--) {
            var mesh = group.children[i];
            if (mesh instanceof three__WEBPACK_IMPORTED_MODULE_1__["Mesh"]) {
                var material = mesh.material;
                if (material instanceof three__WEBPACK_IMPORTED_MODULE_1__["Material"]) {
                    var materialName = material.name;
                    if ((materialName.includes('remen') || materialName.includes('tijelo') || materialName.includes('kozni') || materialName.includes('extreme')
                        || materialName.includes('watchface'))) {
                        var partName = this.getPartFromMeshName(materialName);
                        this.addMaterial(mesh.material, partName);
                    }
                }
            }
        }
    };
    WebGlService.prototype.extractMeshesAndMaterials = function () {
        for (var i = this.object.children.length - 1; i >= 0; i--) {
            var mesh = this.object.children[i];
            var childName = mesh.name.toLowerCase();
            if (mesh instanceof three__WEBPACK_IMPORTED_MODULE_1__["Group"]) {
                this.extractMaterials(mesh);
                this.object.children.splice(i, 1);
            }
            else if ((childName.includes('remen')) || childName.includes('kozni') ||
                childName.includes('extreme')) {
                var meshName = mesh.name.toLowerCase();
                var partName = this.getPartFromMeshName(meshName);
                if (mesh instanceof three__WEBPACK_IMPORTED_MODULE_1__["Mesh"]) {
                    this.addMesh(mesh, partName);
                }
                else if (mesh instanceof three__WEBPACK_IMPORTED_MODULE_1__["Group"]) {
                    this.addMeshGroup(mesh, partName);
                }
                // delete stored meshes
                this.object.children.splice(i, 1);
            }
        }
    };
    WebGlService.prototype.setDisplayDefaultsByBodyName = function (bodyName) {
        var _this = this;
        if (!this.watch) {
            return;
        }
        var defaultData = this.watch.defaults.find(function (x) { return x.body === bodyName; });
        Object.values(this.materials).forEach(function (materials) {
            materials.forEach(function (material) {
                var materialName = material.name.toLowerCase();
                if (materialName === defaultData.strap) {
                    if (materialName.includes('kozni')) {
                        _this.setDisplayMaterial(material, 'kozni');
                    }
                    else if (materialName.includes('extreme')) {
                        _this.setDisplayMaterial(material, 'extreme');
                    }
                    if (materialName.includes('remen')) {
                        _this.setDisplayMaterial(material, 'remen');
                    }
                }
                else if (materialName === defaultData.watchface) {
                    _this.setDisplayMaterial(material, 'watchface');
                }
                else if (materialName === defaultData.body) {
                    _this.setDisplayMaterial(material, 'tijelo');
                }
            });
        });
        var defaultStrapNamespace = this.getDefaultStrapNamespace();
        for (var i = this.object.children.length - 1; i >= 0; i--) {
            var mesh = this.object.children[i];
            if (mesh instanceof three__WEBPACK_IMPORTED_MODULE_1__["Mesh"]) {
                var meshName = mesh.name.toLowerCase();
                if (meshName.includes('tijelo')) {
                    var material = mesh.material;
                    if (this.displayMaterial.tijelo !== material.name) {
                        var copyMaterial = this.materials.tijelo.find(function (x) { return x.name === _this.displayMaterial.tijelo; });
                        copyMaterial.clippingPlanes = this.clippingPlane ? [this.clippingPlane] : null;
                        mesh.material = copyMaterial;
                    }
                }
                else if (meshName.includes('watchface')) {
                    var material = mesh.material;
                    if (this.displayMaterial.watchface !== material.name) {
                        var copyMaterial = this.materials.watchface.find(function (x) { return x.name === _this.displayMaterial.watchface; });
                        if (copyMaterial) {
                            copyMaterial.clippingPlanes = this.clippingPlane ? [this.clippingPlane] : null;
                            mesh.material = copyMaterial;
                        }
                    }
                }
                else if (meshName.includes(defaultStrapNamespace)) {
                    var copyMaterial = this.materials.tijelo.find(function (x) { return x.name === _this.displayMaterial.tijelo; });
                    copyMaterial.clippingPlanes = this.clippingPlane ? [this.clippingPlane] : null;
                    mesh.material = copyMaterial;
                }
                if ((meshName.includes('kozni') || meshName.includes('remen') || meshName.includes('extreme'))) {
                    if (meshName.includes(defaultStrapNamespace)) {
                        continue;
                    }
                    var material = mesh.material;
                    this.cleanMaterial(material);
                    this.object.children.splice(i, 1);
                    this.addDefaultStrapMesh();
                }
            }
        }
        this.setDisplayMeshesByDisplayData();
    };
    WebGlService.prototype.getDefaultStrapNamespace = function () {
        if (this.displayMaterial.extreme !== null) {
            return 'extreme';
        }
        else if (this.displayMaterial.remen !== null) {
            return 'remen';
        }
        else if (this.displayMaterial.kozni !== null) {
            return 'kozni';
        }
        return null;
    };
    WebGlService.prototype.changeMeshes = function (material) {
        this.setDisplayDefaultsByBodyName(material.name);
    };
    WebGlService.prototype.setDisplayMeshesByDisplayData = function () {
        var defaultStrapNamespace = this.getDefaultStrapNamespace();
        if (defaultStrapNamespace === 'remen') {
            this.displayMesh.remen = this.meshes.remen.map(function (a) { return a.name; });
            this.displayMesh.kozni = null;
            this.displayMesh.extreme = null;
        }
        else if (defaultStrapNamespace === 'kozni') {
            this.displayMesh.remen = null;
            this.displayMesh.kozni = this.meshes.kozni.map(function (a) { return a.name; });
            this.displayMesh.extreme = null;
        }
        else if (defaultStrapNamespace === 'extreme') {
            this.displayMesh.remen = null;
            this.displayMesh.kozni = null;
            this.displayMesh.extreme = this.meshes.extreme.map(function (a) { return a.name; });
        }
    };
    WebGlService.prototype.addDefaultStrapMesh = function () {
        var _this = this;
        var defaultStrapNamespace = this.getDefaultStrapNamespace();
        var defaultStrapMesh = this.meshes[defaultStrapNamespace];
        var defaultMaterial = this.materials[defaultStrapNamespace].find(function (x) { return x.name === _this.displayMaterial[defaultStrapNamespace]; });
        defaultStrapMesh.forEach(function (mesh) {
            if (mesh instanceof three__WEBPACK_IMPORTED_MODULE_1__["Mesh"]) {
                mesh.material = defaultMaterial;
                _this.object.add(mesh);
            }
        });
    };
    WebGlService.prototype.loadModel = function (watch, visible) {
        var _this = this;
        if (visible === void 0) { visible = false; }
        this.modelLoadedSubject.next(false);
        this.materialsLoadedSubject.next(false);
        this.watch = watch;
        this.loading = true;
        var manager = new three__WEBPACK_IMPORTED_MODULE_1__["LoadingManager"](function () {
            _this.extractMeshesAndMaterials();
            _this.addLighting();
            // Find default config from watch configuration and set it as first to display
            var defaultConfig = _this.watch.defaults.find(function (x) { return x.default === true; });
            var defTijeloMaterial = _this.materials.tijelo.length > 0 && defaultConfig !== undefined ?
                _this.materials.tijelo.find(function (x) { return x.name === defaultConfig.body; }) : null;
            _this.setDisplayDefaultsByBodyName(defTijeloMaterial.name);
            _this.addDefaultStrapMesh();
            _this.materialsLoadedSubject.next(true);
            _this.scene.add(_this.object);
        });
        var dracoLoader = new three_examples_jsm_loaders_DRACOLoader__WEBPACK_IMPORTED_MODULE_3__["DRACOLoader"]();
        dracoLoader.setDecoderPath(_app_config_service__WEBPACK_IMPORTED_MODULE_5__["AppConfigService"].settings.appRoot + "/draco/");
        var loader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_2__["GLTFLoader"](manager);
        loader.setDRACOLoader(dracoLoader);
        loader.load(_app_config_service__WEBPACK_IMPORTED_MODULE_5__["AppConfigService"].settings.appRoot + "watch-models/" + watch.nameUrl + ".glb", function (object) {
            if (object) {
                object.scene.scale.set(0.18, 0.18, 0.18);
                object.scene.position.set(0, -1, 0);
                object.scene.visible = visible;
                _this.object = object.scene;
                _this.modelLoadedSubject.next(true);
                _this.loading = false;
            }
        }, undefined, function (error) {
            console.error(error);
        });
    };
    WebGlService.prototype.setBackgroundImage = function (url) {
        var _this = this;
        var loader = new three__WEBPACK_IMPORTED_MODULE_1__["TextureLoader"]();
        loader.load(url, function (texture) {
            _this.scene.background = texture;
        });
    };
    WebGlService.prototype.attachVideoTexture = function () {
        if (!this.texture2D && this.videoElement) {
            if (this.videoElement.readyState !== undefined && this.videoElement.readyState === 0)
                return;
            // && (this.videoElement.webkitDecodedFrameCount || this.videoElement.mozDecodedFrames)
            if (this.videoElement.readyState === 4) {
                this.texture2D = new three__WEBPACK_IMPORTED_MODULE_1__["Texture"](this.videoElement);
                this.texture2D.needsUpdate = true;
                if (['windows', 'android'].indexOf(this.deviceInfo.os.toLowerCase()) < 0) {
                    this.texture2D.minFilter = three__WEBPACK_IMPORTED_MODULE_1__["NearestFilter"];
                }
                if (this.texture2D) {
                    this.scene.background = this.texture2D;
                }
            }
        }
    };
    WebGlService.prototype.cleanMaterial = function (material) {
        for (var _i = 0, _a = Object.keys(material); _i < _a.length; _i++) {
            var key = _a[_i];
            var value = material[key];
            if (value && typeof value.dispose === 'function') {
                value.dispose();
            }
        }
        material.dispose();
    };
    WebGlService.prototype.destroyAll = function (rendered, scene) {
        var _this = this;
        if (rendered === void 0) { rendered = null; }
        if (scene === void 0) { scene = null; }
        var activeRendered = !rendered ? this.renderer : rendered;
        var activeScene = !scene ? this.scene : scene;
        this.removeModelControls();
        activeScene.traverse(function (object) {
            if (!object.isMesh)
                return;
            if (object.geometry) {
                object.geometry.dispose();
                object.geometry = undefined;
            }
            if (object.material.isMaterial) {
                _this.cleanMaterial(object.material);
                object.material = undefined;
            }
            else {
                // an array of materials
                for (var _i = 0, _a = object.material; _i < _a.length; _i++) {
                    var material = _a[_i];
                    _this.cleanMaterial(material);
                    object.material = undefined;
                }
            }
            activeScene.remove(object, activeScene.children);
        });
        activeRendered.renderLists.dispose();
        activeRendered.dispose();
        this.reset();
    };
    /**
     * Ads ability to control model movements on screen
     */
    WebGlService.prototype.addModelControls = function () {
        if (this.object) {
            this.object.position.set(0, -1, 0);
        }
        var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_4__["OrbitControls"](this.camera, this.renderer.domElement);
        controls.autoRotate = true;
        controls.maxDistance = 5;
        controls.minDistance = 1.5;
        controls.enableDamping = false;
        controls.update();
        this.controls = controls;
    };
    /**
     * Removes model movement controls.
     */
    WebGlService.prototype.removeModelControls = function () {
        if (this.controls !== undefined) {
            this.controls.autoRotate = false;
            this.controls.dispose();
            this.controls = undefined;
        }
    };
    WebGlService.prototype.animateModel = function () {
        if (!this.scene) {
            return;
        }
        if (this.object) {
            requestAnimationFrame(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"]);
        }
        if (this.controls) {
            this.controls.update();
        }
        this.renderer.render(this.scene, this.camera);
    };
    /**
     * Apply model lighting from model configuration in watches.json
     * @private
     */
    WebGlService.prototype.addLighting = function () {
        if (this.watch !== undefined && this.watch.lighting !== undefined && this.watch.lighting.length > 0) {
            for (var _i = 0, _a = this.watch.lighting; _i < _a.length; _i++) {
                var lighting = _a[_i];
                switch (lighting.type) {
                    case 'ambient': {
                        var ambientLight = new three__WEBPACK_IMPORTED_MODULE_1__["AmbientLight"](lighting.color, lighting.intensity);
                        this.scene.add(ambientLight);
                        break;
                    }
                    case 'directional': {
                        var directLight = new three__WEBPACK_IMPORTED_MODULE_1__["DirectionalLight"](lighting.color, lighting.intensity);
                        directLight.position.set(lighting.position.x, lighting.position.y, lighting.position.z);
                        this.scene.add(directLight);
                        break;
                    }
                    case 'hemisphere': {
                        var hemisfereLight = new three__WEBPACK_IMPORTED_MODULE_1__["HemisphereLight"](lighting.color, lighting.color2, lighting.intensity);
                        this.scene.add(hemisfereLight);
                        break;
                    }
                    case 'point': {
                        var pointLight = new three__WEBPACK_IMPORTED_MODULE_1__["PointLight"](lighting.color, lighting.intensity, lighting.distance);
                        pointLight.position.set(lighting.position.x, lighting.position.y, lighting.position.z);
                        pointLight.decay = lighting.decay;
                        this.scene.add(pointLight);
                        break;
                    }
                }
            }
        }
    };
    WebGlService.ɵfac = function WebGlService_Factory(t) { return new (t || WebGlService)(); };
    WebGlService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: WebGlService, factory: WebGlService.ɵfac, providedIn: 'root' });
    return WebGlService;
}());



/***/ }),

/***/ "rP1g":
/*!***************************************************!*\
  !*** ./src/app/watch-viewer/watch-model/index.ts ***!
  \***************************************************/
/*! exports provided: WatchModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _watch_model_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./watch-model.component */ "dtCI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WatchModelComponent", function() { return _watch_model_component__WEBPACK_IMPORTED_MODULE_0__["WatchModelComponent"]; });




/***/ }),

/***/ "v9sg":
/*!********************************************************!*\
  !*** ./src/app/external-url/external-url.directive.ts ***!
  \********************************************************/
/*! exports provided: ExternalUrlDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalUrlDirective", function() { return ExternalUrlDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




var ExternalUrlDirective = /** @class */ (function () {
    function ExternalUrlDirective(el, router) {
        this.el = el;
        this.router = router;
    }
    ExternalUrlDirective.prototype.clicked = function (event) {
        var url = this.el.nativeElement.href;
        var target = this.el.nativeElement.target;
        if (!url) {
            return;
        }
        this.router.navigate(['/externalRedirect', { externalUrl: url, target: target }], {
            skipLocationChange: true,
        });
        event.preventDefault();
    };
    ExternalUrlDirective.ɵfac = function ExternalUrlDirective_Factory(t) { return new (t || ExternalUrlDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    ExternalUrlDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ExternalUrlDirective, selectors: [["a", "appExternalUrl", ""]], hostBindings: function ExternalUrlDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExternalUrlDirective_click_HostBindingHandler($event) { return ctx.clicked($event); });
        } } });
    return ExternalUrlDirective;
}());



/***/ }),

/***/ "xmt7":
/*!*************************************************************!*\
  !*** ./src/app/watch-viewer/watch-viewer-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: WatchViewerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchViewerRoutingModule", function() { return WatchViewerRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _watch_viewer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./watch-viewer.component */ "9GcA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




var viewRoutes = [
    { path: '', component: _watch_viewer_component__WEBPACK_IMPORTED_MODULE_1__["WatchViewerComponent"] },
    { path: ':id', component: _watch_viewer_component__WEBPACK_IMPORTED_MODULE_1__["WatchViewerComponent"] }
];
var WatchViewerRoutingModule = /** @class */ (function () {
    function WatchViewerRoutingModule() {
    }
    WatchViewerRoutingModule.ɵfac = function WatchViewerRoutingModule_Factory(t) { return new (t || WatchViewerRoutingModule)(); };
    WatchViewerRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: WatchViewerRoutingModule });
    WatchViewerRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(viewRoutes)
            ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return WatchViewerRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WatchViewerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "z2F7":
/*!***************************************!*\
  !*** ./src/app/external-url/index.ts ***!
  \***************************************/
/*! exports provided: ExternalUrlModule, externalUrlProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _external_url_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./external-url.module */ "E78Z");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExternalUrlModule", function() { return _external_url_module__WEBPACK_IMPORTED_MODULE_0__["ExternalUrlModule"]; });

/* harmony import */ var _external_url_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./external-url-provider */ "M3wM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "externalUrlProvider", function() { return _external_url_provider__WEBPACK_IMPORTED_MODULE_1__["externalUrlProvider"]; });





/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map