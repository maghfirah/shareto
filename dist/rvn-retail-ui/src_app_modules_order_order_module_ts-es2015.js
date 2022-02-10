"use strict";
(self["webpackChunkrvn_retail_ui"] = self["webpackChunkrvn_retail_ui"] || []).push([["src_app_modules_order_order_module_ts"],{

/***/ 1346:
/*!**********************************************************************!*\
  !*** ./src/app/modules/order/order-detail/order-detail.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderDetailComponent": function() { return /* binding */ OrderDetailComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/constant/api.constant */ 58412);
/* harmony import */ var _shared_enum_payment_status_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/enum/payment-status.enum */ 14162);
/* harmony import */ var _shared_models_order_detail_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/models/order-detail.model */ 55973);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _shared_helper_form_control_validation_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/helper/form-control-validation.helper */ 61347);
/* harmony import */ var _shared_models_email_send_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/models/email-send.model */ 80677);
/* harmony import */ var _shared_constant_prop_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/constant/prop.constant */ 42493);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _shared_service_request_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/service/request.service */ 67229);
/* harmony import */ var _shared_service_api_model_translator_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/service/api-model-translator.service */ 43206);
/* harmony import */ var _shared_service_error_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/service/error.service */ 38205);
/* harmony import */ var _shared_service_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/service/alert.service */ 96506);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);


















function OrderDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function OrderDetailComponent_ng_template_1_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Cek bukti pesanan di ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r3.orderDetail == null ? null : ctx_r3.orderDetail.customer == null ? null : ctx_r3.orderDetail.customer.email);
} }
function OrderDetailComponent_ng_template_1_div_27_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "*This field is not valid input text");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function OrderDetailComponent_ng_template_1_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "form", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function OrderDetailComponent_ng_template_1_div_27_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r14.formEmail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Silahkan masukkan email Anda jika ingin menerima bukti pesanan:");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function OrderDetailComponent_ng_template_1_div_27_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r16.sendEmail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "KIRIM");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, OrderDetailComponent_ng_template_1_div_27_p_11_Template, 2, 0, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r4.emailForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx_r4.emailForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.emailForm.get("email").hasError("invalidEmail"));
} }
function OrderDetailComponent_ng_template_1_span_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Track order anda via ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "shipper.id/tracking");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, " untuk memantau perjalanan paket yang anda kirimkan");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Tracking Id: ", ctx_r5.orderDetail.shipping.trackingId, " ");
} }
function OrderDetailComponent_ng_template_1_span_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" No. Resi: ", ctx_r6.orderDetail.shipping.awbNumber, " ");
} }
function OrderDetailComponent_ng_template_1_span_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Tracking Id: 5j08725 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Silahkan untuk letakkan nomor resi/tracking pada paket anda, dan bisa untuk search via ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "shipper.id/tracking");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, " untuk memantau perjalanan paket yang anda kirimkan. Pesanan yang diproses sebelum 15.00 akan diambil paketnya pada hari tersebut, selebihnya akan diambil di esok hari.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "is-finished": a0, "is-active": a1 }; };
function OrderDetailComponent_ng_template_1_li_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, " Pesanan Dikirim");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, " Pesanan telah dikirim dari ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](6, _c0, (ctx_r8.orderDetail == null ? null : ctx_r8.orderDetail.milestones[1] == null ? null : ctx_r8.orderDetail.milestones[1].createdDate) !== null && (ctx_r8.orderDetail == null ? null : ctx_r8.orderDetail.milestones[2] == null ? null : ctx_r8.orderDetail.milestones[2].createdDate) == null, (ctx_r8.orderDetail == null ? null : ctx_r8.orderDetail.milestones[2] == null ? null : ctx_r8.orderDetail.milestones[2].createdDate) !== null && (ctx_r8.orderDetail == null ? null : ctx_r8.orderDetail.milestones[3] == null ? null : ctx_r8.orderDetail.milestones[3].createdDate) == null));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r8.orderDetail.merchant.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](11, 3, ctx_r8.orderDetail == null ? null : ctx_r8.orderDetail.milestones[2] == null ? null : ctx_r8.orderDetail.milestones[2].createdDate, "dd MMMM yyyy, HH:mm:ss"), " ");
} }
function OrderDetailComponent_ng_template_1_li_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, " Pesanan Telah Sampai di Tujuan");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, " Pesanan akan segera diterima ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, " sesuai estimasi waktu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](5, _c0, (ctx_r9.orderDetail == null ? null : ctx_r9.orderDetail.milestones[2] == null ? null : ctx_r9.orderDetail.milestones[2].createdDate) !== null && (ctx_r9.orderDetail == null ? null : ctx_r9.orderDetail.milestones[3] == null ? null : ctx_r9.orderDetail.milestones[3].createdDate) == null, (ctx_r9.orderDetail == null ? null : ctx_r9.orderDetail.milestones[3] == null ? null : ctx_r9.orderDetail.milestones[3].createdDate) !== null && (ctx_r9.orderDetail == null ? null : ctx_r9.orderDetail.milestones[4] == null ? null : ctx_r9.orderDetail.milestones[4].createdDate) == null));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](11, 2, ctx_r9.orderDetail == null ? null : ctx_r9.orderDetail.milestones[3] == null ? null : ctx_r9.orderDetail.milestones[3].createdDate, "dd MMMM yyyy, HH:mm:ss"), " ");
} }
function OrderDetailComponent_ng_template_1_li_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "li", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, " Pesanan Selesai");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, " Transaksi sukses dan pembeli ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, " telah menerima pesanan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](11, 1, ctx_r10.orderDetail == null ? null : ctx_r10.orderDetail.milestones[4] == null ? null : ctx_r10.orderDetail.milestones[4].createdDate, "dd MMMM yyyy, HH:mm:ss"), " ");
} }
function OrderDetailComponent_ng_template_1_div_90_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "h6", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](15, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const variant_r20 = ctx.$implicit;
    const product_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", product_r17.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](product_r17.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](variant_r20.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind4"](15, 5, variant_r20.price, "Rp ", "symbol-narrow", "1.0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"]("x " + variant_r20.quantity);
} }
function OrderDetailComponent_ng_template_1_div_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, OrderDetailComponent_ng_template_1_div_90_div_1_Template, 19, 10, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", product_r17.items);
} }
function OrderDetailComponent_ng_template_1_div_139_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function OrderDetailComponent_ng_template_1_div_139_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r23.pesananDiterima(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, " PESANAN DITERIMA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "is-active": a0 }; };
function OrderDetailComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function OrderDetailComponent_ng_template_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r25.detailPesanan(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Detail Pesanan");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "Nomor Pesanan");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18, "Tanggal Pemesanan");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](26, OrderDetailComponent_ng_template_1_div_26_Template, 5, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](27, OrderDetailComponent_ng_template_1_div_27_Template, 12, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](28, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](32, "Alamat Pengiriman");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](33, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](37, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](40, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](43, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](44, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](45, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](46, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](51, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](52, OrderDetailComponent_ng_template_1_span_52_Template, 8, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](53, OrderDetailComponent_ng_template_1_span_53_Template, 2, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](54, OrderDetailComponent_ng_template_1_span_54_Template, 9, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](55, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](56, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](57, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](58, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](59, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](60, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](61, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](62, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](63, " Pembayaran Dikonfirmasi");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](64, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](65, " Pembayaran telah dikofirmasi dan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](66, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](67, " akan diteruskan ke penjual ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](68, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](70, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](71, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](72, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](73, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](74, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](75, " Pesanan Diproses");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](76, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](77, " Pesanan Anda sedang diproses oleh penjual ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](78, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](80, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](81, OrderDetailComponent_ng_template_1_li_81_Template, 12, 9, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](82, OrderDetailComponent_ng_template_1_li_82_Template, 12, 8, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](83, OrderDetailComponent_ng_template_1_li_83_Template, 12, 4, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](84, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](85, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](86, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](87, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](88, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](89);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](90, OrderDetailComponent_ng_template_1_div_90_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](91, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](92, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](93, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](94, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](95, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](96, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](97);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](98, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](99, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](100, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](101, "Ongkos Kirim");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](102, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](103, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](104, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](105);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](106, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](107, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](108, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](109, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](110);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](111, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](112, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](113, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](114, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](115, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](116, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](117, "Total Pembayaran");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](118, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](119, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](120, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](121, "Metode Pembayaran");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](122, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](123, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](124, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](125, "Asuransi Pengiriman");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](126, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](127, "h4", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](128, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](129);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](130, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](131, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](132, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](133);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](134, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](135, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](136, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](137);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](138, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](139, OrderDetailComponent_ng_template_1_div_139_Template, 8, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.invoiceNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](23, 29, ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.createdDate, "dd MMMM yyyy, HH:mm:ss z"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.customer == null ? null : ctx_r2.orderDetail.customer.email) !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.customer == null ? null : ctx_r2.orderDetail.customer.email) === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.customer == null ? null : ctx_r2.orderDetail.customer.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.customer == null ? null : ctx_r2.orderDetail.customer.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.customer == null ? null : ctx_r2.orderDetail.customer.detailAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"]((ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.shipping == null ? null : ctx_r2.orderDetail.shipping.name) + " - " + (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.shipping == null ? null : ctx_r2.orderDetail.shipping.rateName));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" (Akan diterima pada ", ctx_r2.addDate(1, 3, ctx_r2.orderDetail.createdDate), ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[2] == null ? null : ctx_r2.orderDetail.milestones[2].createdDate) != null && (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.shipping == null ? null : ctx_r2.orderDetail.shipping.trackingId) != "" && (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.shipping == null ? null : ctx_r2.orderDetail.shipping.trackingId) != null && ((ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.shipping == null ? null : ctx_r2.orderDetail.shipping.awbNumber) == "" || (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.shipping == null ? null : ctx_r2.orderDetail.shipping.awbNumber) == null));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[2] == null ? null : ctx_r2.orderDetail.milestones[2].createdDate) != null && (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.shipping == null ? null : ctx_r2.orderDetail.shipping.awbNumber) != "" && (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.shipping == null ? null : ctx_r2.orderDetail.shipping.awbNumber) != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[2] == null ? null : ctx_r2.orderDetail.milestones[2].createdDate) != null && ((ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.shipping == null ? null : ctx_r2.orderDetail.shipping.trackingId) == "" || (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.shipping == null ? null : ctx_r2.orderDetail.shipping.trackingId) == null) && ((ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.shipping == null ? null : ctx_r2.orderDetail.shipping.awbNumber) == "" || (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.shipping == null ? null : ctx_r2.orderDetail.shipping.awbNumber) == null) && (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.shipping == null ? null : ctx_r2.orderDetail.shipping.digitalGoods) == false && ctx_r2.envUrl !== ctx_r2.envSimulatorNotExist);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](58, _c1, (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[0] == null ? null : ctx_r2.orderDetail.milestones[0].createdDate) !== null && (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[1] == null ? null : ctx_r2.orderDetail.milestones[1].createdDate) == null));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](70, 32, ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[0] == null ? null : ctx_r2.orderDetail.milestones[0].createdDate, "dd MMMM yyyy, HH:mm:ss"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](60, _c0, (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[0] == null ? null : ctx_r2.orderDetail.milestones[0].createdDate) !== null && (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[1] == null ? null : ctx_r2.orderDetail.milestones[1].createdDate) == null, (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[1] == null ? null : ctx_r2.orderDetail.milestones[1].createdDate) !== null && (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[2] == null ? null : ctx_r2.orderDetail.milestones[2].createdDate) == null));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](80, 35, ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[1] == null ? null : ctx_r2.orderDetail.milestones[1].createdDate, "dd MMMM yyyy, HH:mm:ss"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[0] == null ? null : ctx_r2.orderDetail.milestones[0].createdDate) != null && (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[1] == null ? null : ctx_r2.orderDetail.milestones[1].createdDate) != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[1] == null ? null : ctx_r2.orderDetail.milestones[1].createdDate) != null && (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[2] == null ? null : ctx_r2.orderDetail.milestones[2].createdDate) != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[2] == null ? null : ctx_r2.orderDetail.milestones[2].createdDate) != null && (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[3] == null ? null : ctx_r2.orderDetail.milestones[3].createdDate) != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.merchant == null ? null : ctx_r2.orderDetail.merchant.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.merchant == null ? null : ctx_r2.orderDetail.merchant.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r2.orderDetail.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Total Harga (", ctx_r2.totalProduct, " Produk)");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind4"](106, 38, ctx_r2.orderDetail.payment.itemsPrice, "Rp ", "symbol-narrow", "1.0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind4"](111, 43, ctx_r2.orderDetail.payment.shippingPrice, "Rp ", "symbol-narrow", "1.0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind4"](130, 48, ctx_r2.orderDetail.payment.amount, "Rp ", "symbol-narrow", "1.0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.orderDetail.payment.channel);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind4"](138, 53, ctx_r2.orderDetail.payment.insurancePrice, "Rp ", "symbol-narrow", "1.0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[3] == null ? null : ctx_r2.orderDetail.milestones[3].createdDate) != null && (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[4] == null ? null : ctx_r2.orderDetail.milestones[4].createdDate) == null);
} }
class OrderDetailComponent {
    constructor(activatedRoute, requestService, apiModelTranslatorService, errorService, alertService, formBuilder) {
        this.activatedRoute = activatedRoute;
        this.requestService = requestService;
        this.apiModelTranslatorService = apiModelTranslatorService;
        this.errorService = errorService;
        this.alertService = alertService;
        this.formBuilder = formBuilder;
        //loading component
        this.loading = true;
        this.orderDetail = new _shared_models_order_detail_model__WEBPACK_IMPORTED_MODULE_3__.OrderDetail();
        this.envUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.envUrl;
        this.envSimulatorNotExist = _shared_constant_prop_constant__WEBPACK_IMPORTED_MODULE_6__.PropConstant.ENV_SIMULATOR_NOT_EXIST;
        this.totalProduct = 0;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            yield this.activatedRoute.params.subscribe((params) => {
                this.uiIdInvoice = params['uiIdInvoice'];
                this.businessName = params['businessName'];
            });
            yield this.initLoad();
            this.formEmail();
        });
    }
    initLoad() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            yield this.checkOrder();
        });
    }
    formEmail() {
        this.emailForm = this.formBuilder.group({
            email: [null, [_shared_helper_form_control_validation_helper__WEBPACK_IMPORTED_MODULE_4__.FormControlValidationHelper.emailValidator]],
        });
    }
    checkOrder() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let apiGetOrder = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_1__.APIConstant.ORDER;
            let requestParam = new Map();
            requestParam.set('uiId', this.uiIdInvoice);
            let order = yield this.requestService.get(apiGetOrder, requestParam).toPromise().then((response) => {
                return this.apiModelTranslatorService.snakeToCamelCase(response);
            }, (error) => {
                this.errorService.getErrorApi(error);
            });
            //validate status payment
            if (order.paymentStatus === _shared_enum_payment_status_enum__WEBPACK_IMPORTED_MODULE_2__.PaymentStatus.Paid) {
                this.loading = false;
                yield this.getDetailOrder();
            }
            else {
                //validate have redirect url or not
                if (order.redirectUrl !== "" || order.redirectUrl !== null) {
                    window.location.href = order.redirectUrl;
                }
                else {
                    this.alertService.setProps("Mohon maaf terjadi kesalahan, mohon coba kembali", true);
                }
            }
        });
    }
    getDetailOrder() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let apiGetOrderDetail = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_1__.APIConstant.ORDER_DETAIL;
            let requestParam = new Map();
            requestParam.set('uiId', this.uiIdInvoice);
            yield this.requestService.get(apiGetOrderDetail, requestParam).toPromise().then((response) => {
                this.orderDetail = this.apiModelTranslatorService.snakeToCamelCase(response);
                //sort based on order milestone
                this.orderDetail.milestones = this.orderDetail.milestones.sort((a, b) => a.order - b.order);
                this.totalProduct = this.orderDetail.products.reduce((total, product) => {
                    let total_item = product.items.reduce((total2, item) => {
                        return total2 + item.quantity;
                    }, 0);
                    return total + total_item;
                }, 0);
                return this.orderDetail;
            }, (error) => {
                this.errorService.getErrorApi(error);
            });
        });
    }
    detailPesanan() {
    }
    addDate(minDays, maxDays, createdDate) {
        let date;
        if (createdDate === undefined) {
            date = new Date();
        }
        else {
            date = new Date(createdDate);
        }
        const formatDateMinMax = 'dd';
        const formatMonthMinMax = 'MMMM';
        const locale = 'id';
        // const locale = 'id-ID';
        let minDate = date.setDate(date.getDate() + minDays);
        let maxDate = date.setDate(date.getDate() + maxDays);
        const formattedMinDate = (0,_angular_common__WEBPACK_IMPORTED_MODULE_13__.formatDate)(minDate, formatDateMinMax, locale);
        const formattedMaxDate = (0,_angular_common__WEBPACK_IMPORTED_MODULE_13__.formatDate)(maxDate, formatDateMinMax, locale);
        const formattedMinMonth = (0,_angular_common__WEBPACK_IMPORTED_MODULE_13__.formatDate)(minDate, formatMonthMinMax, locale);
        const formattedMaxMonth = (0,_angular_common__WEBPACK_IMPORTED_MODULE_13__.formatDate)(minDate, formatMonthMinMax, locale);
        if (formattedMinMonth === formattedMaxMonth) {
            return formattedMinDate + ' - ' + formattedMaxDate + ' ' + formattedMaxMonth;
        }
        else {
            return formattedMinDate + ' ' + formattedMinMonth + ' - ' + formattedMaxDate + ' ' + formattedMaxMonth;
        }
    }
    //Upload image
    fileProgress(fileInput, name) {
        this.fileData = fileInput.target.files[0];
        if (this.fileData !== undefined) {
            this.preview(name);
        }
    }
    preview(name) {
        var _a;
        // Show image preview
        let mimeType = (_a = this.fileData) === null || _a === void 0 ? void 0 : _a.type;
        if (mimeType.match('image.*') === null) {
            this.alertService.setProps("Failed Upload Type", true);
            return;
        }
        //validation > 1 mb
        if (this.fileData.size > 1000000) {
            this.alertService.setProps("Size more than 1 MB", true);
            return;
        }
        let reader = new FileReader();
        reader.readAsDataURL(this.fileData);
        reader.onload = (_event) => {
            let img = new Image();
            img.src = reader.result;
            img.onload = () => {
                const height = img.naturalHeight;
                const width = img.naturalWidth;
                //validation < 300px x 300px
                if (height < 300 || width < 300) {
                    this.alertService.setProps("Minimum width and height 300", true);
                }
                else {
                    this.previewImageProduct1 = reader.result;
                    this.imageToUpload1 = this.fileData;
                }
            };
        };
    }
    pesananDiterima() {
        this.loading = true;
        let apiOrderComplete = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_1__.APIConstant.ORDER_COMPLETE;
        let requestParam = new Map();
        requestParam.set('uiId', this.uiIdInvoice);
        this.requestService.post(apiOrderComplete, requestParam, null).toPromise().then((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getDetailOrder();
            this.loading = false;
        }), (error) => {
            this.errorService.getErrorApi(error);
        });
    }
    //send email
    sendEmail() {
        if (this.emailForm.valid) {
            this.loading = true;
            let apiSendEmail = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_1__.APIConstant.ORDER_SEND_EMAIL;
            let emailSend = new _shared_models_email_send_model__WEBPACK_IMPORTED_MODULE_5__.EmailSend();
            emailSend.email = this.emailForm.get("email").value;
            emailSend.uiId = this.uiIdInvoice;
            this.requestService.post(apiSendEmail, null, this.apiModelTranslatorService.camelToSnakeCase(emailSend)).toPromise().then((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                this.loading = false;
            }), (error) => {
                this.errorService.getErrorApi(error);
            });
        }
    }
}
OrderDetailComponent.ɵfac = function OrderDetailComponent_Factory(t) { return new (t || OrderDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_service_request_service__WEBPACK_IMPORTED_MODULE_7__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_service_api_model_translator_service__WEBPACK_IMPORTED_MODULE_8__.ApiModelTranslatorService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_service_error_service__WEBPACK_IMPORTED_MODULE_9__.ErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_service_alert_service__WEBPACK_IMPORTED_MODULE_10__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder)); };
OrderDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: OrderDetailComponent, selectors: [["app-order-detail"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["loaded", ""], [1, "center"], ["role", "status", 1, "spinner-border", "text-primary", "spinner-sm", "mr-5"], [1, "container-mobile"], [1, "row", "pt-3"], [1, "col-12"], ["id", "backButton", "type", "button", 1, "btn", 3, "click"], [1, "fas", "fa-arrow-left"], [2, "font-size", "16px", "font-weight", "bold"], [1, "row", "pl-3", "pr-3"], [1, "text-muted"], [4, "ngIf"], [1, "row", "p-3"], [1, "timeline", "timeline-vertical", "timeline-progress", "timeline-primary"], [3, "ngClass"], [1, "description"], [1, "desc_title"], [1, "desc_content"], [1, "desc_time", 2, "width", "160px"], [3, "ngClass", 4, "ngIf"], ["class", "is-finished", 4, "ngIf"], [1, "row", "pl-3", "pr-3", "mb-3"], [2, "height", "24px", "width", "24px", "border-radius", "50%", 3, "src"], [1, "ml-3", 2, "font-size", "16px", "font-weight", "bold"], [4, "ngFor", "ngForOf"], [1, "row"], [1, "col-6"], [1, "col-6", "text-right"], [1, "text-success"], [1, "font-weight-bold"], ["id", "emailForm", 1, "pt-10", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "email"], [1, "input-group"], ["type", "text", "id", "email", "formControlName", "email", "placeholder", "name@email.com", 1, "form-control", "dk-text-input"], [1, "input-group-append"], ["type", "button", "id", "submitEmail", 1, "btn", "btn-primary", "dk-btn-group", 3, "disabled", "click"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], [2, "text-align", "justify", "display", "block"], ["href", "https://shipper.id/tracking"], ["ngbTooltip", "Tracking Id Simulasi", 1, "fas", "fa-info-circle", "text-primary", "ml-2"], [1, "is-finished"], [1, "row", "mb-2", "px-3"], [1, "col-2"], [2, "height", "64px", "width", "100%", 3, "src"], [1, "col-10"], [2, "font-size", "16px"], [1, "row", "mt-4"], [1, "bottom-card"], [1, "row", "px-3"], [1, "col-12", "mt-3"], ["id", "pesananDiterima", "type", "button", 1, "btn", "btn-primary", 2, "width", "100%", 3, "click"]], template: function OrderDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, OrderDetailComponent_div_0_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, OrderDetailComponent_ng_template_1_Template, 140, 63, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbTooltip], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.CurrencyPipe], styles: [".center[_ngcontent-%COMP%] {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    position: fixed;\n    top:0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n}\n\n.container-mobile[_ngcontent-%COMP%] {\n    min-width: 360px;\n    max-width: 600px;\n    margin: -24px auto -45px;\n    background-color: rgb(255, 255, 255);\n    min-height: 100vh;\n    position: relative;\n}\n@media (max-width: 768px) {\n    .container-mobile[_ngcontent-%COMP%] {margin: -24px -24px -45px}\n}\n\nimg.image-container[_ngcontent-%COMP%] {\n    width: 110px;\n    height: 110px;\n    -o-object-fit: contain;\n       object-fit: contain;\n}\n\n.responsive-layout[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: flex-end;\n}\n.responsive-layout[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]:first-child, .responsive-layout[_ngcontent-%COMP%]{\n    margin-right: 16px;\n}\n@media (max-width: 768px) {\n    .responsive-layout[_ngcontent-%COMP%] {\n        display: block;\n    }\n    .responsive-layout[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%], .responsive-layout[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n        margin-top: 8px;\n        margin-bottom: 8px;\n    }\n}\n\n.bottom-card[_ngcontent-%COMP%] {\n    box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);\n    border-radius: 16px 16px 0px 0px;\n    margin: 0 0px;\n    padding-top: 24px;\n    padding-bottom: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlCQUF5QjtBQUN6QjtJQUNJLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixLQUFLO0lBQ0wsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtBQUNoQjtBQUVBLDRCQUE0QjtBQUM1QjtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLG9DQUFvQztJQUNwQyxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxtQkFBbUIseUJBQXlCO0FBQ2hEO0FBRUEsaUNBQWlDO0FBQ2pDO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBbUI7T0FBbkIsbUJBQW1CO0FBQ3ZCO0FBRUEsNkNBQTZDO0FBQzdDO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7QUFDSjtBQUVBLGdCQUFnQjtBQUNoQjtJQUNJLDRDQUE0QztJQUM1QyxnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEIiLCJmaWxlIjoib3JkZXItZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBjc3MgZm9yIGxvYWRpbmcgcGFnZSAqL1xuLmNlbnRlciB7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDowO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLyogY3NzIGZvciBjdXN0b21lciBmYWNpbmcgKi9cbi5jb250YWluZXItbW9iaWxlIHtcbiAgICBtaW4td2lkdGg6IDM2MHB4O1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgbWFyZ2luOiAtMjRweCBhdXRvIC00NXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5jb250YWluZXItbW9iaWxlIHttYXJnaW46IC0yNHB4IC0yNHB4IC00NXB4fVxufVxuXG4vKiBjc3MgZm9yIGltYWdlIGNvbnRhaW5lciBwYWdlICovXG5pbWcuaW1hZ2UtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4vKiBsYXlvdXRpbmcgZm9yIHBpbGloIGZvdG8gZGFuIGdhbWJhciBmb3RvICovXG4ucmVzcG9uc2l2ZS1sYXlvdXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5yZXNwb25zaXZlLWxheW91dCAuZm9ybS1ncm91cDpmaXJzdC1jaGlsZCwgLnJlc3BvbnNpdmUtbGF5b3V0e1xuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5yZXNwb25zaXZlLWxheW91dCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAucmVzcG9uc2l2ZS1sYXlvdXQgLmZvcm0tZ3JvdXAsIC5yZXNwb25zaXZlLWxheW91dCAuZm9ybS1ncm91cCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cbn1cblxuLyogYm90dG9tIGNhcmQgKi9cbi5ib3R0b20tY2FyZCB7XG4gICAgYm94LXNoYWRvdzogMHB4IC0ycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweCAxNnB4IDBweCAwcHg7XG4gICAgbWFyZ2luOiAwIDBweDtcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 96663:
/*!***********************************************!*\
  !*** ./src/app/modules/order/order.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderModule": function() { return /* binding */ OrderModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-detail/order-detail.component */ 1346);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);







const routes = [
    {
        path: '',
        component: _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_0__.OrderDetailComponent,
        pathMatch: 'full'
    }
];
class OrderModule {
}
OrderModule.ɵfac = function OrderModule_Factory(t) { return new (t || OrderModule)(); };
OrderModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OrderModule });
OrderModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbTooltipModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OrderModule, { declarations: [_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_0__.OrderDetailComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbTooltipModule] }); })();


/***/ }),

/***/ 58412:
/*!*************************************************!*\
  !*** ./src/app/shared/constant/api.constant.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APIConstant": function() { return /* binding */ APIConstant; }
/* harmony export */ });
class APIConstant {
}
// Module Product
APIConstant.PRODUCT = '/product';
APIConstant.PRODUCT_CATEGORY = '/product/category';
APIConstant.PRODUCT_ACTIVATE = '/active';
APIConstant.PRODUCT_DETAIL = '/detail';
APIConstant.PRODUCT_IMAGES = '/image';
APIConstant.PRODUCT_VARIANT = '/product/variant';
// Module Configuration
APIConstant.MERCHANT = '/merchant';
APIConstant.MERCHANT_IMAGE = '/image';
APIConstant.MERCHANT_LINK = '/merchant/link';
APIConstant.MERCHANT_ORDER = '/merchant/order';
APIConstant.MERCHANT_DASHBOARD = '/merchant/dashboard';
APIConstant.MERCHANT_ORDER_DETAIL = '/detail';
APIConstant.MERCHANT_ORDER_PROCESS = '/process';
APIConstant.MERCHANT_ORDER_SEND = '/send';
// Module Location
APIConstant.LOCATION = '/location';
// Module Link
APIConstant.LINK = '/link';
APIConstant.LINK_MERCHANT_DETAIL = '/detail';
APIConstant.LINK_MERCHANT_PRODUCTS = '/products';
APIConstant.LINK_MERCHANT_CATEGORY = '/category';
// Cart
APIConstant.CART = '/cart';
APIConstant.SHIPPING = '/shipping';
APIConstant.CHECKOUT = '/checkout';
// Order
APIConstant.ORDER = '/order';
APIConstant.ORDER_DETAIL = '/order/detail';
APIConstant.ORDER_COMPLETE = '/order/complete';
APIConstant.ORDER_SEND_EMAIL = '/order/email/send';
// Internal
APIConstant.INTERNAL = '/internal';
APIConstant.INTERNAL_LIST = '/internal/product';
APIConstant.INTERNAL_VALIDATE = '/validate';
APIConstant.INTERNAL_CATEGORY = '/category';


/***/ }),

/***/ 80677:
/*!***************************************************!*\
  !*** ./src/app/shared/models/email-send.model.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailSend": function() { return /* binding */ EmailSend; }
/* harmony export */ });
class EmailSend {
}


/***/ })

}]);
//# sourceMappingURL=src_app_modules_order_order_module_ts-es2015.js.map