"use strict";
(self["webpackChunkrvn_retail_ui"] = self["webpackChunkrvn_retail_ui"] || []).push([["src_app_modules_simulator_simulator_module_ts"],{

/***/ 72243:
/*!****************************************************************************!*\
  !*** ./src/app/modules/simulator/order-receive/order-receive.component.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderReceiveComponent": function() { return /* binding */ OrderReceiveComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/constant/api.constant */ 58412);
/* harmony import */ var _shared_constant_api_error_code_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/constant/api-error-code.constant */ 96694);
/* harmony import */ var _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/constant/navigation.constant */ 86473);
/* harmony import */ var _shared_constant_error_code_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/constant/error-code.constant */ 28228);
/* harmony import */ var _shared_models_response_api_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/models/response-api.model */ 5320);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_service_request_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/service/request.service */ 67229);
/* harmony import */ var _shared_service_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/service/alert.service */ 96506);
/* harmony import */ var _shared_service_error_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/service/error.service */ 38205);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 54364);
















function OrderReceiveComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????element"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
} }
function OrderReceiveComponent_ng_template_1_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](1, "*This field is not valid input text");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
} }
function OrderReceiveComponent_ng_template_1_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](1, "*This field is cannot be left empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
} }
function OrderReceiveComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](5, "Simulator Receive Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](7, "Simulator untuk melakukan pesanan telah diterima");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](8, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????listener"]("ngSubmit", function OrderReceiveComponent_ng_template_1_Template_form_ngSubmit_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["????restoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["????nextContext"](); return ctx_r5.submitReceiveOrder(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](13, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](14, "Nomor Pesanan");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????element"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????element"](16, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????template"](17, OrderReceiveComponent_ng_template_1_div_17_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????template"](18, OrderReceiveComponent_ng_template_1_div_18_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????element"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](20, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](21, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](22, "SUBMIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("formGroup", ctx_r2.receiveOrderForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("ngIf", ctx_r2.receiveOrderForm.get("nomorPesanan").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("ngIf", ctx_r2.receiveOrderForm.get("nomorPesanan").hasError("required") && (ctx_r2.receiveOrderForm.get("nomorPesanan").dirty || ctx_r2.receiveOrderForm.get("nomorPesanan").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("disabled", !ctx_r2.receiveOrderForm.valid);
} }
class OrderReceiveComponent {
    constructor(formBuilder, requestService, alertService, errorService, router) {
        this.formBuilder = formBuilder;
        this.requestService = requestService;
        this.alertService = alertService;
        this.errorService = errorService;
        this.router = router;
        //loading component
        this.loading = true;
        this.responseApi = new _shared_models_response_api_model__WEBPACK_IMPORTED_MODULE_6__.ResponseApi();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            yield this.initLoad();
        });
    }
    initLoad() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            let configStore = yield this.getConfigurationStoreInfo();
            this.form();
        });
    }
    form() {
        this.receiveOrderForm = this.formBuilder.group({
            nomorPesanan: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
        });
    }
    getConfigurationStoreInfo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            let apiInfoStore = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_2__.APIConstant.MERCHANT;
            return this.requestService.get(apiInfoStore, null).toPromise().then((response) => {
                this.loading = false;
            }, (error) => {
                this.responseApi = error.error;
                if (this.responseApi.error.code === _shared_constant_api_error_code_constant__WEBPACK_IMPORTED_MODULE_3__.ApiErrorCode.MERCHANT_NOT_FOUND) {
                    this.loading = false;
                    this.router.navigate([_shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_4__.NavigationConstant.ERROR_CUSTOM, _shared_constant_error_code_constant__WEBPACK_IMPORTED_MODULE_5__.ErrorCodeConstant.KYB]);
                }
                else {
                    this.errorService.getErrorApi(error);
                }
            });
        });
    }
    submitReceiveOrder() {
        if (this.receiveOrderForm.valid) {
            let invoiceNumber = this.receiveOrderForm.get("nomorPesanan").value;
            let invoiceNumberPath = `/${invoiceNumber}/receive`;
            let apiOrderReceive = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_2__.APIConstant.MERCHANT_ORDER + invoiceNumberPath;
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: 'Menerima Pesanan',
                text: 'Apakah anda ingin merubah status pesanan anda menjadi telah diterima?',
                showCancelButton: true,
                cancelButtonText: 'BATAL',
                cancelButtonColor: '#666666',
                reverseButtons: true,
                confirmButtonColor: '#E1251B',
                confirmButtonText: 'DITERIMA',
                showLoaderOnConfirm: true,
                customClass: {
                    title: 'swal2-title-modal-medium'
                },
                preConfirm: () => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                    this.requestService.post(apiOrderReceive, null, null)
                        .subscribe((res) => {
                        this.alertService.setProps("Success! Order Received", false);
                    }, (error) => {
                        this.errorService.getErrorApi(error);
                    });
                })
            });
        }
    }
}
OrderReceiveComponent.??fac = function OrderReceiveComponent_Factory(t) { return new (t || OrderReceiveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["????directiveInject"](_shared_service_request_service__WEBPACK_IMPORTED_MODULE_7__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["????directiveInject"](_shared_service_alert_service__WEBPACK_IMPORTED_MODULE_8__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["????directiveInject"](_shared_service_error_service__WEBPACK_IMPORTED_MODULE_9__.ErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router)); };
OrderReceiveComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["????defineComponent"]({ type: OrderReceiveComponent, selectors: [["app-order-receive"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["loaded", ""], [1, "center"], ["role", "status", 1, "spinner-border", "text-primary", "spinner-sm", "mr-5"], [1, "card"], [1, "card-body"], [1, "row"], [1, "form-group", "col-md-12", "page-header"], ["id", "receiveOrderForm", 3, "formGroup", "ngSubmit"], [1, "form-group", "col-md-3", "page-header"], [1, "col"], [1, "font-weight-bold"], ["id", "nomorPesanan", "placeholder", "INV-RETAIL-12345678901234567", "formControlName", "nomorPesanan", "required", "", "type", "text", "pattern", "^[a-zA-Z0-9.\\\\-\\\\/+,=_:'@%| -]*$", 1, "form-control", "dk-text-input", "mt-2"], ["class", "text-danger", 4, "ngIf"], [1, "d-flex", "justify-content-end"], ["type", "submit", "id", "btnSubmitOrderReceive", 1, "btn", "btn-primary", 3, "disabled"], [1, "text-danger"]], template: function OrderReceiveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????template"](0, OrderReceiveComponent_div_0_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????template"](1, OrderReceiveComponent_ng_template_1_Template, 23, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_10__["????templateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["????reference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("ngIf", ctx.loading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.PatternValidator], styles: [".center[_ngcontent-%COMP%] {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    position: fixed;\n    top:0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n}\n\nimg.image-container[_ngcontent-%COMP%] {\n    width: 45px;\n    height: 45px;\n    -o-object-fit: contain;\n       object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLXJlY2VpdmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5QkFBeUI7QUFDekI7SUFDSSwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQiwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsS0FBSztJQUNMLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7QUFDaEI7QUFFQSxpQ0FBaUM7QUFDakM7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFtQjtPQUFuQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoib3JkZXItcmVjZWl2ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY3NzIGZvciBsb2FkaW5nIHBhZ2UgKi9cbi5jZW50ZXIge1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6MDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi8qIGNzcyBmb3IgaW1hZ2UgY29udGFpbmVyIHBhZ2UgKi9cbmltZy5pbWFnZS1jb250YWluZXIge1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xufVxuIl19 */"] });


/***/ }),

/***/ 8285:
/*!*******************************************************!*\
  !*** ./src/app/modules/simulator/simulator.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SimulatorModule": function() { return /* binding */ SimulatorModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _order_receive_order_receive_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-receive/order-receive.component */ 72243);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);






const routes = [
    {
        path: '',
        component: _order_receive_order_receive_component__WEBPACK_IMPORTED_MODULE_0__.OrderReceiveComponent,
        pathMatch: 'full'
    }
];
class SimulatorModule {
}
SimulatorModule.??fac = function SimulatorModule_Factory(t) { return new (t || SimulatorModule)(); };
SimulatorModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: SimulatorModule });
SimulatorModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](SimulatorModule, { declarations: [_order_receive_order_receive_component__WEBPACK_IMPORTED_MODULE_0__.OrderReceiveComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_simulator_simulator_module_ts-es2015.js.map