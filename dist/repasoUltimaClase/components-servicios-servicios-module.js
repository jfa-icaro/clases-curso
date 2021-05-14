(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-servicios-servicios-module"],{

/***/ "04zj":
/*!**********************************************************!*\
  !*** ./src/app/components/servicios/servicios.module.ts ***!
  \**********************************************************/
/*! exports provided: ServiciosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosModule", function() { return ServiciosModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _servicios_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servicios-routing.module */ "5BOo");
/* harmony import */ var _servicios_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./servicios.component */ "Il1x");
/* harmony import */ var _principales_principales_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./principales/principales.component */ "GCVD");
/* harmony import */ var _secundarios_secundarios_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./secundarios/secundarios.component */ "36L3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class ServiciosModule {
}
ServiciosModule.ɵfac = function ServiciosModule_Factory(t) { return new (t || ServiciosModule)(); };
ServiciosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ServiciosModule });
ServiciosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _servicios_routing_module__WEBPACK_IMPORTED_MODULE_1__["ServiciosRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ServiciosModule, { declarations: [_servicios_component__WEBPACK_IMPORTED_MODULE_2__["ServiciosComponent"],
        _principales_principales_component__WEBPACK_IMPORTED_MODULE_3__["PrincipalesComponent"],
        _secundarios_secundarios_component__WEBPACK_IMPORTED_MODULE_4__["SecundariosComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _servicios_routing_module__WEBPACK_IMPORTED_MODULE_1__["ServiciosRoutingModule"]] }); })();


/***/ }),

/***/ "36L3":
/*!***************************************************************************!*\
  !*** ./src/app/components/servicios/secundarios/secundarios.component.ts ***!
  \***************************************************************************/
/*! exports provided: SecundariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecundariosComponent", function() { return SecundariosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SecundariosComponent {
    constructor() { }
    ngOnInit() {
    }
}
SecundariosComponent.ɵfac = function SecundariosComponent_Factory(t) { return new (t || SecundariosComponent)(); };
SecundariosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SecundariosComponent, selectors: [["app-secundarios"]], decls: 2, vars: 0, template: function SecundariosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "secundarios works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWN1bmRhcmlvcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "5BOo":
/*!******************************************************************!*\
  !*** ./src/app/components/servicios/servicios-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ServiciosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosRoutingModule", function() { return ServiciosRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _principales_principales_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./principales/principales.component */ "GCVD");
/* harmony import */ var _secundarios_secundarios_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./secundarios/secundarios.component */ "36L3");
/* harmony import */ var _servicios_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./servicios.component */ "Il1x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '', component: _servicios_component__WEBPACK_IMPORTED_MODULE_3__["ServiciosComponent"], pathMatch: 'full' },
    { path: 'principales', component: _principales_principales_component__WEBPACK_IMPORTED_MODULE_1__["PrincipalesComponent"] },
    { path: 'secundarios', component: _secundarios_secundarios_component__WEBPACK_IMPORTED_MODULE_2__["SecundariosComponent"] },
];
class ServiciosRoutingModule {
}
ServiciosRoutingModule.ɵfac = function ServiciosRoutingModule_Factory(t) { return new (t || ServiciosRoutingModule)(); };
ServiciosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ServiciosRoutingModule });
ServiciosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ServiciosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "GCVD":
/*!***************************************************************************!*\
  !*** ./src/app/components/servicios/principales/principales.component.ts ***!
  \***************************************************************************/
/*! exports provided: PrincipalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalesComponent", function() { return PrincipalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PrincipalesComponent {
    constructor() { }
    ngOnInit() {
    }
}
PrincipalesComponent.ɵfac = function PrincipalesComponent_Factory(t) { return new (t || PrincipalesComponent)(); };
PrincipalesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrincipalesComponent, selectors: [["app-principales"]], decls: 2, vars: 0, template: function PrincipalesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "principales works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmluY2lwYWxlcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "Il1x":
/*!*************************************************************!*\
  !*** ./src/app/components/servicios/servicios.component.ts ***!
  \*************************************************************/
/*! exports provided: ServiciosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosComponent", function() { return ServiciosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ServiciosComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServiciosComponent.ɵfac = function ServiciosComponent_Factory(t) { return new (t || ServiciosComponent)(); };
ServiciosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServiciosComponent, selectors: [["app-servicios"]], decls: 2, vars: 0, template: function ServiciosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "servicios works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNpb3MuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=components-servicios-servicios-module.js.map