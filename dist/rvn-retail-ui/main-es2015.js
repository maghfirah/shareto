(self["webpackChunkrvn_retail_ui"] = self["webpackChunkrvn_retail_ui"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

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
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/constant/navigation.constant */ 86473);
/* harmony import */ var _shared_interceptor_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/interceptor/auth.guard */ 13872);
/* harmony import */ var _modules_error_error_custom_error_custom_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/error/error-custom/error-custom.component */ 54392);
/* harmony import */ var _modules_error_error_general_error_general_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/error/error-general/error-general.component */ 19846);
/* harmony import */ var _shared_constant_error_code_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/constant/error-code.constant */ 28228);
/* harmony import */ var _modules_merchant_shop_merchant_not_found_merchant_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/merchant-shop/merchant-not-found/merchant-not-found.component */ 3215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);









const routes = [
    { path: _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_0__.NavigationConstant.ROUTING_INVENTORY, loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js-src_app_shared_constant_api_constant_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_inventory_inventory_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/inventory/inventory.module */ 14455)).then(value => value.InventoryModule), canActivate: [_shared_interceptor_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard] },
    { path: _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_0__.NavigationConstant.ROUTING_BO_DASHBOARD, loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/dashboard/dashboard.module */ 88757)).then(value => value.DashboardModule), canActivate: [_shared_interceptor_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard] },
    { path: _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_0__.NavigationConstant.ROUTING_CONFIGURATION, loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js-src_app_shared_constant_api_constant_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_configuration_configuration_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/configuration/configuration.module */ 6340)).then(value => value.ConfigurationModule), canActivate: [_shared_interceptor_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard] },
    { path: _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_0__.NavigationConstant.ROUTING_MERCHANT + '/:businessName' + '/:product', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_merchant_merchant_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/merchant/merchant.module */ 6891)).then(value => value.MerchantModule) },
    { path: _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_0__.NavigationConstant.ROUTING_MERCHANT + '/:businessName', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_merchant-shop_merchant-shop_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/merchant-shop/merchant-shop.module */ 12255)).then(value => value.MerchantShopModule) },
    { path: _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_0__.NavigationConstant.ROUTING_MERCHANT_NOT_FOUND + '/:businessName', component: _modules_merchant_shop_merchant_not_found_merchant_not_found_component__WEBPACK_IMPORTED_MODULE_5__.MerchantNotFoundComponent },
    { path: _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_0__.NavigationConstant.ROUTING_TERMS_CONDITION, loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_terms-and-condition_terms-and-condition_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/terms-and-condition/terms-and-condition.module */ 33941)).then(value => value.TermsAndConditionModule) },
    { path: _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_0__.NavigationConstant.ROUTING_MERCHANT_CART, loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_merchant-cart_merchant-cart_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/merchant-cart/merchant-cart.module */ 46332)).then(value => value.MerchantCartModule) },
    { path: _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_0__.NavigationConstant.ROUTING_ORDER + '/:businessName' + '/:uiIdInvoice', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_order_order_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/order/order.module */ 96663)).then(value => value.OrderModule) },
    { path: _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_0__.NavigationConstant.ROUTING_TRANSACTION, loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_transaction_transaction_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/transaction/transaction.module */ 82967)).then(value => value.TransactionModule), canActivate: [_shared_interceptor_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard] },
    { path: _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_0__.NavigationConstant.ROUTING_TRANSACTION + '/:businessName' + '/:uiIdInvoice', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js-src_app_shared_constant_api_constant_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_transaction-order_transaction-order_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/transaction-order/transaction-order.module */ 26791)).then(value => value.TransactionOrderModule), canActivate: [_shared_interceptor_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard] },
    { path: _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_0__.NavigationConstant.ROUTING_INTERNAL, loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js-src_app_shared_constant_api_constant_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_internal_internal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/internal/internal.module */ 29857)).then(value => value.InternalModule), canActivate: [_shared_interceptor_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard] },
    { path: _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_0__.NavigationConstant.ROUTING_SIMULATOR_ORDER_RECEIVE, loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js-src_app_shared_constant_api_constant_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_simulator_simulator_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/simulator/simulator.module */ 8285)).then(value => value.SimulatorModule), canActivate: [_shared_interceptor_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard] },
    { path: _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_0__.NavigationConstant.ROUTING_ERROR_CUSTOM + '/:typeError', component: _modules_error_error_custom_error_custom_component__WEBPACK_IMPORTED_MODULE_2__.ErrorCustomComponent },
    { path: _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_0__.NavigationConstant.ROUTING_ERROR_GENERAL + '/:httpStatus', component: _modules_error_error_general_error_general_component__WEBPACK_IMPORTED_MODULE_3__.ErrorGeneralComponent },
    { path: '**', redirectTo: _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_0__.NavigationConstant.ROUTING_ERROR_GENERAL + '/' + _shared_constant_error_code_constant__WEBPACK_IMPORTED_MODULE_4__.ErrorCodeConstant.NOT_FOUND },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [_shared_interceptor_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_service_alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/service/alert.service */ 96506);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _modules_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/alert/alert.component */ 26541);





function AppComponent_app_alert_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-alert", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx_r0.alertService.getProps());
} }
class AppComponent {
    constructor(alertService) {
        this.alertService = alertService;
        this.title = 'rvn-retail-ui';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_service_alert_service__WEBPACK_IMPORTED_MODULE_0__.AlertService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 1, consts: [[1, "content-wrapper"], [3, "data", 4, "ngIf"], [3, "data"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_app_alert_1_Template, 1, 1, "app-alert", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.alertService.isAlert());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _modules_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__.AlertComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/constant/navigation.constant */ 86473);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _shared_service_error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/service/error.service */ 38205);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _modules_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/alert/alert.component */ 26541);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-cookie-service */ 35602);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _modules_error_error_custom_error_custom_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/error/error-custom/error-custom.component */ 54392);
/* harmony import */ var _modules_error_error_general_error_general_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/error/error-general/error-general.component */ 19846);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ 36868);
/* harmony import */ var _angular_common_locales_id__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/locales/id */ 68753);
/* harmony import */ var _angular_common_locales_id__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_id__WEBPACK_IMPORTED_MODULE_7__);

















(0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.registerLocaleData)((_angular_common_locales_id__WEBPACK_IMPORTED_MODULE_7___default()), 'id');
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [
        _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_2__.NavigationConstant, ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__.CookieService,
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__.APP_BASE_HREF, useValue: _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_2__.NavigationConstant.ROUTING_BASE_HREF },
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ErrorHandler, useClass: _shared_service_error_service__WEBPACK_IMPORTED_MODULE_3__.ErrorService },
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_9__.LOCALE_ID, useValue: "id-ID" }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbPaginationModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbAlertModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _modules_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__.AlertComponent,
        _modules_error_error_custom_error_custom_component__WEBPACK_IMPORTED_MODULE_5__.ErrorCustomComponent,
        _modules_error_error_general_error_general_component__WEBPACK_IMPORTED_MODULE_6__.ErrorGeneralComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbPaginationModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbAlertModule] }); })();


/***/ }),

/***/ 26541:
/*!**************************************************!*\
  !*** ./src/app/modules/alert/alert.component.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComponent": function() { return /* binding */ AlertComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);


class AlertComponent {
    constructor() {
        this._data = {};
    }
    ngOnInit() {
    }
    set data(props) {
        this._data.message = props.message;
        this._data.symbol = props.type ? "fa-times-circle" : "fa-check-circle";
        this._data.type = props.type ? "alert-danger" : "alert-success";
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(); };
AlertComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["app-alert"]], inputs: { data: "data" }, decls: 7, vars: 3, consts: [["id", "rightTopAlert"], [1, "alert-toast-top"], ["role", "alert", 1, "alert", "alert-flag", "top-right", 3, "ngClass"], [1, "fas", "fa-check-circle", "in-icon", 3, "ngClass"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx._data.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx._data.symbol);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx._data.message, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGVydC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 54392:
/*!**********************************************************************!*\
  !*** ./src/app/modules/error/error-custom/error-custom.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorCustomComponent": function() { return /* binding */ ErrorCustomComponent; }
/* harmony export */ });
/* harmony import */ var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/models/user.model */ 53709);
/* harmony import */ var _shared_constant_error_code_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/constant/error-code.constant */ 28228);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _shared_service_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/request.service */ 67229);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);








function ErrorCustomComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Kepada Merchant,");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Mohon maaf atas ketidaknyamanannya, Bisnis Anda tidak bisa mengakses layanan ini. Mohon segera lengkapi dokumen pendaftaran bisnis Anda dan kami akan memproses pendaftaran bisnis Anda maksimal 2 hari kerja.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Jika ada pertanyaan lebih lanjut, silahkan menghubungi kami melalui Menu Help Jokul.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Terima Kasih");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Dear Merchant,");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "We apologize for the inconvenience, your business account was not yet verified by our team. Please ensure you already submitted all of the required documents and kindly waiting for the verification process maximum of 2 working days.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "If there are any concerns, please contact us through Help Menu on Jokul.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Thank you");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function ErrorCustomComponent_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function ErrorCustomComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ErrorCustomComponent_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 0);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.typeError === "kyb")("ngIfElse", _r3);
} }
function ErrorCustomComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "ERROR 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class ErrorCustomComponent {
    constructor(titleService, requestService, activatedRoute) {
        this.titleService = titleService;
        this.requestService = requestService;
        this.activatedRoute = activatedRoute;
        this.userModel = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_0__.User();
        this.kybCode = _shared_constant_error_code_constant__WEBPACK_IMPORTED_MODULE_1__.ErrorCodeConstant.KYB;
        this.kybCodeOld = _shared_constant_error_code_constant__WEBPACK_IMPORTED_MODULE_1__.ErrorCodeConstant.KYB_OLD;
        this.envKybPage = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.envUrl + "/rr/service-activation";
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => this.typeError = params['typeError']);
        this.getToken();
        this.checkCustomError();
    }
    checkCustomError() {
        if (this.typeError === this.kybCodeOld) {
            this.titleService.setTitle("Unregistered Service");
        }
        else if (this.typeError === this.kybCode) {
            window.location.href = this.envKybPage;
        }
    }
    getToken() {
        let token = localStorage.getItem('token');
        const decodedToken = this.requestService.decodeToken(token);
        this.userModel = decodedToken.user;
    }
}
ErrorCustomComponent.ɵfac = function ErrorCustomComponent_Factory(t) { return new (t || ErrorCustomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_service_request_service__WEBPACK_IMPORTED_MODULE_3__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute)); };
ErrorCustomComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ErrorCustomComponent, selectors: [["app-error-handler-kyb"]], decls: 5, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["kybCode", ""], ["error3", ""], [1, "container", "h-100"], [1, "error-holder", "d-flex", "align-content-end"], [1, "wrapper", "d-flex", "flex-column", "align-items-center"], [1, "wrapper--center", "m-auto"], [1, "response", "card", 2, "height", "100%"], [1, "card-body"], [1, "response-head", "text-center", "d-flex", "flex-column", "mb-2", "align-items-center", 2, "margin-bottom", "40px !important"], ["src", "./assets/images/icon-failed.svg", "alt", "", 1, "response-logo"], [1, "text-justify"]], template: function ErrorCustomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ErrorCustomComponent_ng_container_0_Template, 27, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ErrorCustomComponent_ng_template_1_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ErrorCustomComponent_ng_template_3_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.typeError === ctx.kybCodeOld)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf], styles: [".wrapper[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n.wrapper[_ngcontent-%COMP%]   .wrapper--center[_ngcontent-%COMP%] {\n  width: 376px;\n  margin: auto;\n}\n.h-100[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: auto;\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  right: 0;\n  display: flex;\n  align-items: center;\n}\n.error__text[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLWN1c3RvbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtFQUNkO0FBQ0Y7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkO0FBQ0E7RUFDRSwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtFQUNmLE9BQU87RUFDUCxNQUFNO0VBQ04sU0FBUztFQUNULDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2QiLCJmaWxlIjoiZXJyb3ItY3VzdG9tLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4ud3JhcHBlciAud3JhcHBlci0tY2VudGVyIHtcbiAgd2lkdGg6IDM3NnB4O1xuICBtYXJnaW46IGF1dG87XG59XG4uaC0xMDAge1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBtYXJnaW46IGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgcmlnaHQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5lcnJvcl9fdGV4dCB7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuIl19 */"] });


/***/ }),

/***/ 19846:
/*!************************************************************************!*\
  !*** ./src/app/modules/error/error-general/error-general.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorGeneralComponent": function() { return /* binding */ ErrorGeneralComponent; }
/* harmony export */ });
/* harmony import */ var _shared_constant_error_code_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/constant/error-code.constant */ 28228);
/* harmony import */ var _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/constant/navigation.constant */ 86473);
/* harmony import */ var _shared_constant_error_message_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/constant/error-message.constant */ 70021);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _shared_service_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/request.service */ 67229);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);








function ErrorGeneralComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Authorization required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "You seems like need authorization to access this page. Let us know if you need something immediately.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Error code: 401");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function ErrorGeneralComponent_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Couldn't find anything");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Sorry, the page you were looking for could not be found. Unfortunately you\u2019ve got \u201CAlamat Palsu\u201D.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Error code: 404");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ErrorGeneralComponent_ng_template_1_ng_container_0_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r6.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " GO BACK HOME ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function ErrorGeneralComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ErrorGeneralComponent_ng_template_1_ng_container_0_Template, 23, 0, "ng-container", 0);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.httpStatus == ctx_r2.notFoundCode)("ngIfElse", _r3);
} }
function ErrorGeneralComponent_ng_template_3_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Error message: ", ctx_r8.errorMessage, "");
} }
function ErrorGeneralComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Wait...what?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Hmm, this is unexpected");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "We're working to fix the problem! We'll be back shortly. Let us know if you need something immediately.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, ErrorGeneralComponent_ng_template_3_p_18_Template, 2, 1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Error code: ", ctx_r4.errorCode, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.errorMessage !== undefined);
} }
class ErrorGeneralComponent {
    constructor(titleService, requestService, activatedRoute, router) {
        this.titleService = titleService;
        this.requestService = requestService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.unauthorizedCode = _shared_constant_error_code_constant__WEBPACK_IMPORTED_MODULE_0__.ErrorCodeConstant.UNAUTHORIZED;
        this.timeoutCode = _shared_constant_error_code_constant__WEBPACK_IMPORTED_MODULE_0__.ErrorCodeConstant.TIMEOUT;
        this.notFoundCode = _shared_constant_error_code_constant__WEBPACK_IMPORTED_MODULE_0__.ErrorCodeConstant.NOT_FOUND;
        this.corsOriginCode = _shared_constant_error_code_constant__WEBPACK_IMPORTED_MODULE_0__.ErrorCodeConstant.CORS_ORIGIN;
        this.unknownErrorCode = _shared_constant_error_code_constant__WEBPACK_IMPORTED_MODULE_0__.ErrorCodeConstant.UNKNOWN_ERROR;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => this.httpStatus = params['httpStatus']);
        this.checkCustomError();
    }
    checkCustomError() {
        let message = history.state.data !== undefined ? history.state.data.message : undefined;
        let type = history.state.data !== undefined ? history.state.data.type : undefined;
        let code = history.state.data !== undefined ? history.state.data.code : undefined;
        //validate error come from user
        if (message === undefined) {
            this.httpStatus = _shared_constant_error_code_constant__WEBPACK_IMPORTED_MODULE_0__.ErrorCodeConstant.NOT_FOUND;
            this.errorMessage = _shared_constant_error_message_constant__WEBPACK_IMPORTED_MODULE_2__.ErrorMessageConstant.NOT_FOUND_ERROR_MESSAGE;
        }
        //validate error come from errorService
        else {
            //Error come from API
            if (type !== undefined) {
                this.errorCode = code;
                this.titleService.setTitle("API Error");
                this.errorMessage = message;
                this.httpStatus = _shared_constant_error_code_constant__WEBPACK_IMPORTED_MODULE_0__.ErrorCodeConstant.UNKNOWN_ERROR;
            }
            //Error not come from API
            else {
                this.errorCode = this.httpStatus;
                //Timeout error
                if (this.httpStatus == this.timeoutCode) {
                    this.titleService.setTitle("Timeout");
                    this.errorMessage = message;
                }
                //Cors origin error
                else if (this.httpStatus == this.corsOriginCode) {
                    this.titleService.setTitle("Cors Origin");
                    this.errorMessage = message;
                }
                //Unauthorized error
                else if (this.httpStatus == this.unauthorizedCode) {
                    this.titleService.setTitle("Unauthorized");
                    this.errorMessage = message;
                }
                //Not Found error
                else if (this.httpStatus == this.notFoundCode) {
                    this.titleService.setTitle("Not Found");
                    this.errorMessage = message;
                }
                //Unknown error
                else if (this.httpStatus == this.unknownErrorCode) {
                    this.titleService.setTitle("Unknown Error");
                    this.errorMessage = message;
                }
                //Unknown Http Status Error
                else {
                    this.titleService.setTitle("Http Status Unknown Error");
                    this.errorMessage = message;
                }
            }
        }
    }
    goBack() {
        this.router.navigate([_shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_1__.NavigationConstant.DASHBOARD]);
    }
}
ErrorGeneralComponent.ɵfac = function ErrorGeneralComponent_Factory(t) { return new (t || ErrorGeneralComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_service_request_service__WEBPACK_IMPORTED_MODULE_3__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
ErrorGeneralComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ErrorGeneralComponent, selectors: [["app-error"]], decls: 5, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["notFound", ""], ["defaultError", ""], [1, "container", "h-100"], [1, "error-holder", "d-flex", "align-content-end"], [1, "error__wrapper", "d-flex"], [1, "d-flex", "error__wrapper"], [1, "error__text"], [1, "error-img-small", 2, "display", "none"], ["src", "./assets/images/401.png", "alt", ""], [1, "error-title"], [1, "font-weight-bold"], [1, "error-content"], [1, "error-code"], [1, "error__aside", "d-flex"], ["src", "./assets/images/404.png", "alt", ""], [1, "action-button"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-arrow-left"], ["src", "./assets/images/500.png", "alt", ""], ["class", "error-message", 4, "ngIf"], [1, "error-message"]], template: function ErrorGeneralComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ErrorGeneralComponent_ng_container_0_Template, 19, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ErrorGeneralComponent_ng_template_1_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ErrorGeneralComponent_ng_template_3_Template, 21, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.httpStatus == ctx.unauthorizedCode)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf], styles: [".h-100[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: auto;\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  right: 0;\n  display: flex;\n  align-items: center;\n}\n\n.error__text[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLWdlbmVyYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFtQjtFQUFuQix3QkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2YsT0FBTztFQUNQLE1BQU07RUFDTixTQUFTO0VBQ1QsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2QiLCJmaWxlIjoiZXJyb3ItZ2VuZXJhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmgtMTAwIHtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHJpZ2h0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZXJyb3JfX3RleHQge1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbjogYXV0bztcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 3215:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/merchant-shop/merchant-not-found/merchant-not-found.component.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MerchantNotFoundComponent": function() { return /* binding */ MerchantNotFoundComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class MerchantNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
MerchantNotFoundComponent.ɵfac = function MerchantNotFoundComponent_Factory(t) { return new (t || MerchantNotFoundComponent)(); };
MerchantNotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MerchantNotFoundComponent, selectors: [["app-merchant-not-found"]], decls: 12, vars: 0, consts: [[1, "container", "h-100"], [1, "error-holder", "d-flex", "align-content-end"], [1, "error__wrapper", "d-flex"], [1, "d-flex", "error__wrapper"], [1, "error__text"], [1, "error-title"], [1, "font-weight-bold"], [1, "error-content"]], template: function MerchantNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Kamu Tersesat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Periksa kembali link anda, pastikan anda mengakses link toko yang benar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".wrapper[_ngcontent-%COMP%] {\n    height: 100%;\n}\n.wrapper[_ngcontent-%COMP%]   .wrapper--center[_ngcontent-%COMP%] {\n    width: 376px;\n    margin: auto;\n}\n.h-100[_ngcontent-%COMP%] {\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    margin: auto;\n    position: fixed;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    right: 0;\n    display: flex;\n    align-items: center;\n}\n.error__text[_ngcontent-%COMP%] {\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lcmNoYW50LW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2YsT0FBTztJQUNQLE1BQU07SUFDTixTQUFTO0lBQ1QsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEIiLCJmaWxlIjoibWVyY2hhbnQtbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLndyYXBwZXIgLndyYXBwZXItLWNlbnRlciB7XG4gICAgd2lkdGg6IDM3NnB4O1xuICAgIG1hcmdpbjogYXV0bztcbn1cbi5oLTEwMCB7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgcmlnaHQ6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZXJyb3JfX3RleHQge1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIG1hcmdpbjogYXV0bztcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 16872:
/*!***************************************************************!*\
  !*** ./src/app/shared/constant/api-error-message.constant.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiErrorMessage": function() { return /* binding */ ApiErrorMessage; }
/* harmony export */ });
/**
 * Kelas yang berisi kumpulan response error message dari api
 */
class ApiErrorMessage {
}
ApiErrorMessage.INVALID_PAYMENT_DUE_DATE = 'The request for payment.paymentDueDate is invalid, because payment_due_date must be greater than 0 minutes.';
ApiErrorMessage.MIN_ONE_PRODUCT_VARIANT_ACTIVE = 'At least 1 product variant is active';


/***/ }),

/***/ 69313:
/*!************************************************************!*\
  !*** ./src/app/shared/constant/api-error-type.constant.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiErrorType": function() { return /* binding */ ApiErrorType; }
/* harmony export */ });
/**
 * Kelas yang berisi kumpulan response error type dari api
 */
class ApiErrorType {
}
ApiErrorType.INVALID_REQUEST_ERROR = 'invalid_request_error';


/***/ }),

/***/ 28228:
/*!********************************************************!*\
  !*** ./src/app/shared/constant/error-code.constant.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorCodeConstant": function() { return /* binding */ ErrorCodeConstant; }
/* harmony export */ });
class ErrorCodeConstant {
}
//Error custom code
ErrorCodeConstant.KYB = 'kyb';
ErrorCodeConstant.KYB_OLD = 'kyb-old';
//HTTP Status Error general code
ErrorCodeConstant.CORS_ORIGIN = 0;
ErrorCodeConstant.UNAUTHORIZED = 401;
ErrorCodeConstant.NOT_FOUND = 404;
//Http Status Error unknown
ErrorCodeConstant.UNKNOWN_ERROR = 999;
ErrorCodeConstant.TIMEOUT = 998;


/***/ }),

/***/ 70021:
/*!***********************************************************!*\
  !*** ./src/app/shared/constant/error-message.constant.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorMessageConstant": function() { return /* binding */ ErrorMessageConstant; }
/* harmony export */ });
class ErrorMessageConstant {
}
ErrorMessageConstant.TIMEOUT_ERROR_MESSAGE = "API Timeout";
ErrorMessageConstant.CORS_ORIGIN_ERROR_MESSAGE = "Cors Origin";
ErrorMessageConstant.UNKNOWN_ERROR_MESSAGE = "Logged in Console";
ErrorMessageConstant.HTTP_STATUS_UNKNOWN_ERROR_MESSAGE = "Http Status Not Mapped, Logged in Console";
ErrorMessageConstant.UNAUTHORIZED_ERROR_MESSAGE = "Unauthorized API";
ErrorMessageConstant.NOT_FOUND_ERROR_MESSAGE = "API Not Found";
ErrorMessageConstant.INVALID_PAYMENT_DUE_DATE = 'We cannot generate payment link because the expiry time is below than current time';
ErrorMessageConstant.MIN_ONE_PRODUCT_VARIANT_ACTIVE = 'Produk membutuhkan minimal 1 varian aktif, mohon gunakan fitur Nonaktif Produk pada Halaman Daftar Produk';


/***/ }),

/***/ 86473:
/*!********************************************************!*\
  !*** ./src/app/shared/constant/navigation.constant.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationConstant": function() { return /* binding */ NavigationConstant; }
/* harmony export */ });
class NavigationConstant {
}
//APP - ROUTING MODULE
NavigationConstant.ROUTING_BASE_HREF = '/retail';
NavigationConstant.ROUTING_ERROR_GENERAL = 'general-error';
NavigationConstant.ROUTING_ERROR_CUSTOM = 'error';
NavigationConstant.ROUTING_BO_DASHBOARD = 'dashboard';
NavigationConstant.ROUTING_INVENTORY = 'inventory';
NavigationConstant.ROUTING_CONFIGURATION = 'configuration';
NavigationConstant.ROUTING_RETAIL = 'retail';
NavigationConstant.ROUTING_MERCHANT = 'merchant';
NavigationConstant.ROUTING_ORDER = 'order';
NavigationConstant.ROUTING_TRANSACTION = 'transaction';
NavigationConstant.ROUTING_INTERNAL = 'internal';
NavigationConstant.ROUTING_INTERNAL_LIST = 'list';
NavigationConstant.ROUTING_INTERNAL_DETAIL = 'detail';
NavigationConstant.ROUTING_TERMS_CONDITION = 'agreement/terms-and-condition';
NavigationConstant.ROUTING_MERCHANT_PRODUCT_NOT_FOUND = 'not-found';
NavigationConstant.ROUTING_MERCHANT_NOT_FOUND = 'merchant-not-found';
NavigationConstant.ROUTING_SIMULATOR_ORDER_RECEIVE = 'simulator/order/receive';
NavigationConstant.ROUTING_MERCHANT_CART = 'cart';
//Error from http status - general error
NavigationConstant.ERROR_GENERAL = '/' + NavigationConstant.ROUTING_ERROR_GENERAL;
//Error from code, http status 200 - custom error
NavigationConstant.ERROR_CUSTOM = '/' + NavigationConstant.ROUTING_ERROR_CUSTOM;
//Dashboard home
NavigationConstant.DASHBOARD = '/' + NavigationConstant.ROUTING_BO_DASHBOARD;
//Dashboard home
NavigationConstant.INVENTORY_LIST = '/' + NavigationConstant.ROUTING_INVENTORY;
NavigationConstant.ORDER = '/' + NavigationConstant.ROUTING_ORDER;
NavigationConstant.TRANSACTION = '/' + NavigationConstant.ROUTING_TRANSACTION;
NavigationConstant.ADD_PRODUCT = '/' + NavigationConstant.ROUTING_INVENTORY + '/add-product';


/***/ }),

/***/ 15427:
/*!********************************************************!*\
  !*** ./src/app/shared/constant/permission.constant.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PermissionConstant": function() { return /* binding */ PermissionConstant; }
/* harmony export */ });
/* harmony import */ var _navigation_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation.constant */ 86473);

class PermissionConstant {
    constructor(path, role) {
        this.path = path;
        this.role = role;
    }
}
PermissionConstant.INTERNAL_LIST = new PermissionConstant('/' + _navigation_constant__WEBPACK_IMPORTED_MODULE_0__.NavigationConstant.ROUTING_INTERNAL + '/' + _navigation_constant__WEBPACK_IMPORTED_MODULE_0__.NavigationConstant.ROUTING_INTERNAL_LIST, 'DOKU KYB,REVENUE,DOKU Care');


/***/ }),

/***/ 10869:
/*!**********************************************************!*\
  !*** ./src/app/shared/enum/mapping-response-api.enum.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MappingResponseApi": function() { return /* binding */ MappingResponseApi; }
/* harmony export */ });
/* harmony import */ var _constant_api_error_type_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constant/api-error-type.constant */ 69313);
/* harmony import */ var _constant_api_error_message_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant/api-error-message.constant */ 16872);
/* harmony import */ var _constant_error_message_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant/error-message.constant */ 70021);



/**
 * Kelas yang berfungsi untuk memappingkan/mentranslate error dari api ke kostum message angular
 */
class MappingResponseApi {
    constructor(errorType, errorMessage, responseError) {
        this.errorType = errorType;
        this.errorMessage = errorMessage;
        this.responseError = responseError;
    }
}
MappingResponseApi.MIN_ONE_PRODUCT_VARIANT_ACTIVE = new MappingResponseApi(_constant_api_error_type_constant__WEBPACK_IMPORTED_MODULE_0__.ApiErrorType.INVALID_REQUEST_ERROR, _constant_api_error_message_constant__WEBPACK_IMPORTED_MODULE_1__.ApiErrorMessage.MIN_ONE_PRODUCT_VARIANT_ACTIVE, _constant_error_message_constant__WEBPACK_IMPORTED_MODULE_2__.ErrorMessageConstant.MIN_ONE_PRODUCT_VARIANT_ACTIVE);
MappingResponseApi.INVALID_PAYMENT_DUE_DATE = new MappingResponseApi(_constant_api_error_type_constant__WEBPACK_IMPORTED_MODULE_0__.ApiErrorType.INVALID_REQUEST_ERROR, _constant_api_error_message_constant__WEBPACK_IMPORTED_MODULE_1__.ApiErrorMessage.INVALID_PAYMENT_DUE_DATE, _constant_error_message_constant__WEBPACK_IMPORTED_MODULE_2__.ErrorMessageConstant.INVALID_PAYMENT_DUE_DATE);


/***/ }),

/***/ 13872:
/*!**************************************************!*\
  !*** ./src/app/shared/interceptor/auth.guard.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": function() { return /* binding */ AuthGuard; }
/* harmony export */ });
/* harmony import */ var _models_response_api_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/response-api.model */ 5320);
/* harmony import */ var _constant_error_message_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant/error-message.constant */ 70021);
/* harmony import */ var _constant_error_code_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant/error-code.constant */ 28228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ 3378);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);






class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        localStorage.setItem('token', 'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJwYXlsb2FkIiwiZXhwIjoxNjEyNDEyODYxLCJ1c2VyIjp7ImJ1c2luZXNzU2VydmljZUNsaWVudElkIjoiTUNILTAwMDEtMjc2ODQyMjg0ODQ0MCIsInJlZmVycmVySWQiOm51bGwsInJvbGVJZCI6MywidXNlckZ1bGxOYW1lIjoiQWRtaW4iLCJtZW51TmFtZSI6IlBheW1lbnQgTGluayIsInBlcm1pc3Npb24iOlsiZ2VuZXJhdGVQYXltZW50TGluayIsInJlYWRMaXN0UGF5bWVudExpbmsiLCJyZWFkRGV0YWlsUGF5bWVudExpbmsiLCJkZWxldGVQYXltZW50TGluayIsImZpbHRlclBheW1lbnRMaW5rIiwiZG93bmxvYWRQYXltZW50TGluayJdLCJ1c2VySWQiOjI5LCJidXNpbmVzc0NsaWVudElkIjoiQlNOLTAwMDEtMDAwMDAwMDEiLCJidXNpbmVzc1NlcnZpY2VDbGllbnROYW1lIjoiRE9LVV9QQVJUTkVSIiwiYnVzc2luZXNzU2VydmljZUNsaWVudElkIjoiTUNILTAwMDEtMjc2ODQyMjg0ODQ0MCIsInJvbGVOYW1lIjoiQWRtaW4iLCJidXNpbmVzc0NsaWVudE5hbWUiOiJET0tVX1BBUlRORVIiLCJ1c2VyRW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJ1c2VyVHlwZSI6IkV4dGVybmFsIn0sImlhdCI6MTYxMjQxMTA2MX0.jOJ_bgpyUJj7RQn2MGW332RH2G_Ybn4GEr-1iqi0NJF_OBzpGBnCnEPdvKa3KZSJvdDpBQZ5RJ6zJaLbe7tI9nxp0WtfUntVr7oc_G4rQOQB6d91oPC3RTkrZuzhVzWW83psIhu0Mo57mX8v_SE6H0eJPkiGCohF4eb0t9J7vQF2et_7w4Jev9HunJl_5TV4yACzopNyzWmyrFnYZxX1VoB1e9YU_5geGxui8eQui88XqM5SVsk5fTHJ0cohYgadM-qvPrNMMlYo5xdsPtOLcO3u7iRr5hFkQ-rDGGAsMTOGu2zpPV5s4YwWzOD57J208Fdw5dXIEhJMNFFhr6FnNg');
        let activate;
        activate = this.authService.isAuthenticated();
        if (!activate) {
            return true;
        }
        // token expired or role not authorized
        else {
            let tempErrorModel = new _models_response_api_model__WEBPACK_IMPORTED_MODULE_0__.Error();
            tempErrorModel.message = _constant_error_message_constant__WEBPACK_IMPORTED_MODULE_1__.ErrorMessageConstant.UNAUTHORIZED_ERROR_MESSAGE;
            tempErrorModel.code = _constant_error_code_constant__WEBPACK_IMPORTED_MODULE_2__.ErrorCodeConstant.UNAUTHORIZED.toString();
            return true;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3378:
/*!****************************************************!*\
  !*** ./src/app/shared/interceptor/auth.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": function() { return /* binding */ AuthService; }
/* harmony export */ });
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ 21055);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _constant_permission_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constant/permission.constant */ 15427);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _service_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/request.service */ 67229);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);







class AuthService {
    constructor(requestService, router, activatedRoute, pLocation, baseHref) {
        this.requestService = requestService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.pLocation = pLocation;
        this.baseHref = baseHref;
    }
    isAuthenticated() {
        const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__.JwtHelperService();
        let token = localStorage.getItem('token');
        //validation token expired or token null
        if (helper.isTokenExpired(token)) {
            console.warn('Token Expired : ' + helper.getTokenExpirationDate(token));
            return true;
        }
        //validation role for path
        else {
            const decodedToken = this.requestService.decodeToken(token);
            let user = decodedToken.user;
            //check path registered
            for (let permission in _constant_permission_constant__WEBPACK_IMPORTED_MODULE_0__.PermissionConstant) {
                if (this.baseHref + _constant_permission_constant__WEBPACK_IMPORTED_MODULE_0__.PermissionConstant[permission].path === this.pLocation.pathname) {
                    //allow path registered for role or empty role
                    if (_constant_permission_constant__WEBPACK_IMPORTED_MODULE_0__.PermissionConstant[permission].role.search(user.roleName) !== -1 || _constant_permission_constant__WEBPACK_IMPORTED_MODULE_0__.PermissionConstant[permission].role === '') {
                        return false;
                    }
                    //path registered, have role but dont match
                    else {
                        console.warn('Permission Denied for Role : ' + user.roleName);
                        return true;
                    }
                }
            }
            //allow path unregistered
            return false;
        }
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_service_request_service__WEBPACK_IMPORTED_MODULE_1__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.PlatformLocation), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.APP_BASE_HREF)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5320:
/*!*****************************************************!*\
  !*** ./src/app/shared/models/response-api.model.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResponseApi": function() { return /* binding */ ResponseApi; },
/* harmony export */   "Error": function() { return /* binding */ Error; }
/* harmony export */ });
class ResponseApi {
}
class Error {
}


/***/ }),

/***/ 53709:
/*!*********************************************!*\
  !*** ./src/app/shared/models/user.model.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": function() { return /* binding */ User; }
/* harmony export */ });
class User {
}


/***/ }),

/***/ 96506:
/*!*************************************************!*\
  !*** ./src/app/shared/service/alert.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertService": function() { return /* binding */ AlertService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class AlertService {
    constructor() {
        this.alertProp = {};
        this.message = '';
        this.isError = true;
        this.timeLeft = 10;
    }
    setProps(message, isError) {
        this.alertProp.type = isError;
        if (this.message != "") {
            this.alertProp.message = this.alertProp.message + ", " + message;
        }
        else {
            this.alertProp.message = message;
            this.startTimer();
        }
    }
    getProps() {
        return this.alertProp;
    }
    getMessage() {
        return this.message;
    }
    isAlert() {
        return this.alertProp.message && this.timeLeft > 0;
    }
    startTimer() {
        this.timeLeft = 10;
        this.interval = setInterval(() => {
            if (this.timeLeft > 0) {
                this.timeLeft--;
            }
            else if (this.timeLeft === 0) {
                this.message = '';
                clearInterval(this.interval);
            }
            else {
                this.timeLeft = 2;
            }
        }, 1000);
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(); };
AlertService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 38205:
/*!*************************************************!*\
  !*** ./src/app/shared/service/error.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorService": function() { return /* binding */ ErrorService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _constant_error_code_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constant/error-code.constant */ 28228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 95249);
/* harmony import */ var _constant_navigation_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant/navigation.constant */ 86473);
/* harmony import */ var _models_response_api_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/response-api.model */ 5320);
/* harmony import */ var _constant_error_message_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constant/error-message.constant */ 70021);
/* harmony import */ var _enum_mapping_response_api_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enum/mapping-response-api.enum */ 10869);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alert.service */ 96506);










class ErrorService {
    constructor(router, ngZone, alertService) {
        this.router = router;
        this.ngZone = ngZone;
        this.alertService = alertService;
    }
    //this is error handler if you want to redirect page, this code is automatically so you don't need to implement
    handleError(error) {
        let modelError = this.validateHttpError(error);
        this.ngZone.run(() => this.router.navigate([_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_1__.NavigationConstant.ERROR_GENERAL, modelError.code], { state: { data: modelError } }));
    }
    //this error handler if you want to stay on page, usually implement this code in submit form, when validation come from api
    getErrorApi(error) {
        let modelError = this.validateHttpError(error);
        this.alertService.setProps("Failed! " + modelError.message, true);
        return modelError;
    }
    //this validate error
    validateHttpError(error) {
        var _a, _b;
        let tempErrorModel = new _models_response_api_model__WEBPACK_IMPORTED_MODULE_2__.Error();
        //http status error
        if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpErrorResponse) {
            //http status come from api
            if ((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.error) {
                tempErrorModel.message = this.mappingErrorResponseApi((_b = error === null || error === void 0 ? void 0 : error.error) === null || _b === void 0 ? void 0 : _b.error);
                tempErrorModel.type = error.error.error.type;
                tempErrorModel.code = error.error.error.code;
            }
            //http status not come from api
            else {
                // http status Cross Origin
                if (error.status == _constant_error_code_constant__WEBPACK_IMPORTED_MODULE_0__.ErrorCodeConstant.CORS_ORIGIN) {
                    tempErrorModel.message = _constant_error_message_constant__WEBPACK_IMPORTED_MODULE_3__.ErrorMessageConstant.CORS_ORIGIN_ERROR_MESSAGE;
                    tempErrorModel.code = _constant_error_code_constant__WEBPACK_IMPORTED_MODULE_0__.ErrorCodeConstant.CORS_ORIGIN.toString();
                }
                //http status Unauthorized
                else if (error.status == _constant_error_code_constant__WEBPACK_IMPORTED_MODULE_0__.ErrorCodeConstant.UNAUTHORIZED) {
                    tempErrorModel.message = _constant_error_message_constant__WEBPACK_IMPORTED_MODULE_3__.ErrorMessageConstant.UNAUTHORIZED_ERROR_MESSAGE;
                    tempErrorModel.code = _constant_error_code_constant__WEBPACK_IMPORTED_MODULE_0__.ErrorCodeConstant.UNAUTHORIZED.toString();
                }
                //http status Not Found
                else if (error.status == _constant_error_code_constant__WEBPACK_IMPORTED_MODULE_0__.ErrorCodeConstant.NOT_FOUND) {
                    tempErrorModel.message = _constant_error_message_constant__WEBPACK_IMPORTED_MODULE_3__.ErrorMessageConstant.NOT_FOUND_ERROR_MESSAGE;
                    tempErrorModel.code = _constant_error_code_constant__WEBPACK_IMPORTED_MODULE_0__.ErrorCodeConstant.NOT_FOUND.toString();
                }
                //http status unknown error
                else {
                    console.error("Http Status Unknown Error : " + JSON.stringify(error));
                    tempErrorModel.message = _constant_error_message_constant__WEBPACK_IMPORTED_MODULE_3__.ErrorMessageConstant.HTTP_STATUS_UNKNOWN_ERROR_MESSAGE;
                    tempErrorModel.code = error.status.toString();
                }
            }
        }
        //timeout error
        else if (error instanceof rxjs__WEBPACK_IMPORTED_MODULE_7__.TimeoutError) {
            tempErrorModel.message = _constant_error_message_constant__WEBPACK_IMPORTED_MODULE_3__.ErrorMessageConstant.TIMEOUT_ERROR_MESSAGE;
            tempErrorModel.code = _constant_error_code_constant__WEBPACK_IMPORTED_MODULE_0__.ErrorCodeConstant.TIMEOUT.toString();
        }
        //unknown error
        else {
            console.error("Unknown Error : " + error);
            tempErrorModel.message = _constant_error_message_constant__WEBPACK_IMPORTED_MODULE_3__.ErrorMessageConstant.UNKNOWN_ERROR_MESSAGE;
            tempErrorModel.code = _constant_error_code_constant__WEBPACK_IMPORTED_MODULE_0__.ErrorCodeConstant.UNKNOWN_ERROR.toString();
        }
        return tempErrorModel;
    }
    //mapping error response API
    mappingErrorResponseApi(error) {
        for (let mappingResponseApi in _enum_mapping_response_api_enum__WEBPACK_IMPORTED_MODULE_4__.MappingResponseApi) {
            if (_enum_mapping_response_api_enum__WEBPACK_IMPORTED_MODULE_4__.MappingResponseApi[mappingResponseApi].errorType === error.type &&
                _enum_mapping_response_api_enum__WEBPACK_IMPORTED_MODULE_4__.MappingResponseApi[mappingResponseApi].errorMessage === error.message) {
                return _enum_mapping_response_api_enum__WEBPACK_IMPORTED_MODULE_4__.MappingResponseApi[mappingResponseApi].responseError;
            }
        }
        return error.message;
    }
}
ErrorService.ɵfac = function ErrorService_Factory(t) { return new (t || ErrorService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService)); };
ErrorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: ErrorService, factory: ErrorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 67229:
/*!***************************************************!*\
  !*** ./src/app/shared/service/request.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestService": function() { return /* binding */ RequestService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 45871);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ 21055);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 53803);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 18293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);







const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
        'Content-Type': 'application/json'
    })
};
class RequestService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.timeout = 10000;
    }
    decodeToken(token) {
        if (token === null) {
            throw new Error('Token is null');
        }
        const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__.JwtHelperService();
        return helper.decodeToken(token);
    }
    get(path, parameters) {
        this.setContentPathURL(path);
        this.setPathParameters(parameters);
        return this.requestGet();
    }
    getHttpParams() {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
        const mapPathParams = this.getPathParameters();
        if (mapPathParams !== null) {
            mapPathParams.forEach((value, key) => {
                params = params.append(key, value);
            });
        }
        return params;
    }
    delete(path, parameters) {
        this.setContentPathURL(path);
        this.setPathParameters(parameters);
        return this.requestDelete();
    }
    requestDelete() {
        const headers = this.getHeaders();
        const params = this.getHttpParams();
        return this.http
            .delete(this.getFullRequestURL(), { headers, observe: 'response', params })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.timeout)(this.timeout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((response) => this.responseProcessor(response)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => this.errorProcessor(error)));
    }
    post(path, parameters, body) {
        this.setContentPathURL(path);
        this.setPathParameters(parameters);
        this.setBodyJSON(body);
        return this.requestPost();
    }
    put(path, parameters, body) {
        this.setContentPathURL(path);
        this.setPathParameters(parameters);
        this.setBodyJSON(body);
        return this.requestPut();
    }
    requestGet() {
        const headers = this.getHeaders();
        const params = this.getHttpParams();
        return this.http
            .get(this.getFullRequestURL(), { headers, observe: 'response', params })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.timeout)(this.timeout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((response) => this.responseProcessor(response)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => this.errorProcessor(error)));
    }
    uploadSingleFile(paramName, path, file, index) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
        this.setContentPathURL(path);
        const formData = new FormData();
        formData.append(paramName, file);
        if (typeof index !== 'undefined') {
            formData.append("index", index);
        }
        return this.http.post(this.getFullRequestURL(), formData, { headers, observe: 'response' });
    }
    requestPost() {
        const headers = this.getHeaders();
        const params = this.getHttpParams();
        return this.http
            .post(this.getFullRequestURL(), this.getBodyJSON(), { headers, observe: 'response', params })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.timeout)(this.timeout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((response) => this.responseProcessor(response)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => this.errorProcessor(error)));
    }
    requestPut() {
        const headers = this.getHeaders();
        const params = this.getHttpParams();
        return this.http
            .put(this.getFullRequestURL(), this.getBodyJSON(), { headers, observe: 'response', params })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.timeout)(this.timeout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((response) => this.responseProcessor(response)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => this.errorProcessor(error)));
    }
    requestPostUploadFile(path, formDataFile) {
        this.setContentPathURL(path);
        return this.http
            .post(this.getFullRequestURL(), formDataFile, { observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.timeout)(this.timeout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((response) => this.responseProcessor(response)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => this.errorProcessor(error)));
    }
    responseProcessor(response) {
        if (response.status == 200 || 201) {
            var res = response.body;
            return res;
        }
    }
    errorProcessor(error) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
    }
    setContentPathURL(contentPathURL) {
        this.contentPathURL = contentPathURL;
        return this;
    }
    getContentPathURL() {
        return this.contentPathURL;
    }
    setPathParameters(pathParameters) {
        this.pathParameters = pathParameters;
        return this;
    }
    getPathParameters() {
        return this.pathParameters;
    }
    setBodyJSON(body) {
        this.bodyJSON = JSON.stringify(body);
        return this;
    }
    getBodyJSON() {
        return this.bodyJSON;
    }
    getHeaders() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8', 'Authorization': 'Bearer ' + localStorage.getItem('token') });
        return headers;
    }
    getHttpHeaders() {
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'auth jwt',
        });
        let apiVersion = '1';
        if (apiVersion) {
            httpHeaders.append('Version', apiVersion);
        }
        return httpHeaders;
    }
    paramsFiles() {
        const params = new URLSearchParams();
        params.append('file', this._file);
        return params;
    }
    setFile(file) {
        this._file = file;
        return this;
    }
    getFullRequestURL() {
        let fullRequestURL = this.getContentPathURL();
        if (this.pathParameters) {
            this.pathParameters.forEach((value, key) => {
                fullRequestURL = fullRequestURL.replace(key, value);
            });
        }
        if (fullRequestURL.indexOf('sort=') === -1) {
            if (fullRequestURL.indexOf('?') === -1) {
                fullRequestURL = fullRequestURL;
            }
            else {
                fullRequestURL = fullRequestURL;
            }
        }
        return fullRequestURL;
    }
    getUserToken() {
        let token = localStorage.getItem('token');
        const decodedToken = this.decodeToken(token);
        return decodedToken.user;
    }
}
RequestService.ɵfac = function RequestService_Factory(t) { return new (t || RequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
RequestService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: RequestService, factory: RequestService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
const environment = {
    production: false,
    apiUrl: window["env"]["apiUrl"] || "http://localhost:8080/retail-api/v1",
    envUrl: window["env"]["envUrl"] || "https://app-uat.doku.com",
    gtmId: window["env"]["gtmId"] || "",
    assetsUrl: window["env"]["assetsUrl"] || "https://cdn-dev.oss-ap-southeast-5.aliyuncs.com"
};


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map