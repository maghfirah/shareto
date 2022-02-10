"use strict";
(self["webpackChunkrvn_retail_ui"] = self["webpackChunkrvn_retail_ui"] || []).push([["src_app_modules_configuration_configuration_module_ts"],{

/***/ 11580:
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/configuration/configuration-store-location/configuration-store-location.component.ts ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationStoreLocationComponent": function() { return /* binding */ ConfigurationStoreLocationComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/models/user.model */ 53709);
/* harmony import */ var _shared_models_location_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/models/location.model */ 20229);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/constant/api.constant */ 58412);
/* harmony import */ var _shared_models_configuration_store_location_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/models/configuration-store-location.model */ 87527);
/* harmony import */ var _shared_helper_form_control_validation_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/helper/form-control-validation.helper */ 61347);
/* harmony import */ var _shared_enum_location_type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/enum/location-type.enum */ 99719);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/constant/navigation.constant */ 86473);
/* harmony import */ var _shared_constant_api_error_code_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/constant/api-error-code.constant */ 96694);
/* harmony import */ var _shared_constant_error_code_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/constant/error-code.constant */ 28228);
/* harmony import */ var _shared_models_response_api_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/models/response-api.model */ 5320);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_service_request_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/service/request.service */ 67229);
/* harmony import */ var _shared_service_api_model_translator_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/service/api-model-translator.service */ 43206);
/* harmony import */ var _shared_service_validation_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/service/validation.service */ 79917);
/* harmony import */ var _shared_service_alert_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/service/alert.service */ 96506);
/* harmony import */ var _shared_service_error_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/service/error.service */ 38205);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-select/ng-select */ 36868);

























function ConfigurationStoreLocationComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function ConfigurationStoreLocationComponent_ng_template_1_ng_template_11_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function ConfigurationStoreLocationComponent_ng_template_1_ng_template_11_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("src", ctx_r6.previewStoreImage, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsanitizeUrl"]);
} }
function ConfigurationStoreLocationComponent_ng_template_1_ng_template_11_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "*This field is cannot be left empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function ConfigurationStoreLocationComponent_ng_template_1_ng_template_11_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "Link Toko");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4, "Atur Link Tokomu. Maksimal 25 Karakter");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function ConfigurationStoreLocationComponent_ng_template_1_ng_template_11_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "*This field is cannot be left empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function ConfigurationStoreLocationComponent_ng_template_1_ng_template_11_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "*This field is not valid input text");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function ConfigurationStoreLocationComponent_ng_template_1_ng_template_11_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "*This field max length is 25");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function ConfigurationStoreLocationComponent_ng_template_1_ng_template_11_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "*This field is cannot be left empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function ConfigurationStoreLocationComponent_ng_template_1_ng_template_11_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "*This field is not valid input text");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function ConfigurationStoreLocationComponent_ng_template_1_ng_template_11_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "*This field is cannot be left empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function ConfigurationStoreLocationComponent_ng_template_1_ng_template_11_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "*This field is not valid input text");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function ConfigurationStoreLocationComponent_ng_template_1_ng_template_11_p_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "*This field is cannot be left empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function ConfigurationStoreLocationComponent_ng_template_1_ng_template_11_p_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "*This field is cannot be left empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function ConfigurationStoreLocationComponent_ng_template_1_ng_template_11_p_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "*This field is not valid input text");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { standalone: true }; };
function ConfigurationStoreLocationComponent_ng_template_1_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngSubmit", function ConfigurationStoreLocationComponent_ng_template_1_ng_template_11_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2); return ctx_r20.submitConfigurationStoreLocation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](7, "Gambar Toko");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](12, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](14, ConfigurationStoreLocationComponent_ng_template_1_ng_template_11_div_14_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](15, ConfigurationStoreLocationComponent_ng_template_1_ng_template_11_div_15_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](17, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](18, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("change", function ConfigurationStoreLocationComponent_ng_template_1_ng_template_11_Template_input_change_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2); return ctx_r22.fileProgress($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](19, " Pilih Foto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](22, "Maximum size 1 MB. File must be .jpg or .png");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](23, ConfigurationStoreLocationComponent_ng_template_1_ng_template_11_div_23_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](24, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](25, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](26, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](27, "Nama ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](28, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](29, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](30, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](31, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](32, ConfigurationStoreLocationComponent_ng_template_1_ng_template_11_ng_template_32_Template, 5, 0, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](34, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](35, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](36, "Link Toko Online ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](37, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](38, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](39, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](40, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](41, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](43, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](44, ConfigurationStoreLocationComponent_ng_template_1_ng_template_11_div_44_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](45, ConfigurationStoreLocationComponent_ng_template_1_ng_template_11_div_45_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](46, ConfigurationStoreLocationComponent_ng_template_1_ng_template_11_div_46_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](47, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](48, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ConfigurationStoreLocationComponent_ng_template_1_ng_template_11_Template_button_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2); return ctx_r23.btnShopClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](49, "Lihat Toko");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](50, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](51, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](52, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](53, "Nomor Handphone");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](54, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](55, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("keypress", function ConfigurationStoreLocationComponent_ng_template_1_ng_template_11_Template_input_keypress_55_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r21); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2); return ctx_r24.validationService.numberOnly($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](56, ConfigurationStoreLocationComponent_ng_template_1_ng_template_11_div_56_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](57, ConfigurationStoreLocationComponent_ng_template_1_ng_template_11_div_57_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](58, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](59, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](60, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](61, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](62, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](63, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](64, ConfigurationStoreLocationComponent_ng_template_1_ng_template_11_div_64_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](65, ConfigurationStoreLocationComponent_ng_template_1_ng_template_11_div_65_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](66, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](67, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](68, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](69, "Alamat (Kode POS-Kota-Provinsi)");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](70, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](71, "ng-select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](72, ConfigurationStoreLocationComponent_ng_template_1_ng_template_11_p_72_Template, 2, 0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](73, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](74, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](75, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](76, "Alamat Toko ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](77, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](78, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](79, "textarea", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](80, ConfigurationStoreLocationComponent_ng_template_1_ng_template_11_p_80_Template, 2, 0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](81, ConfigurationStoreLocationComponent_ng_template_1_ng_template_11_p_81_Template, 2, 0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](82, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](83, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](84, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](85, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](86, " BATAL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](87, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](88, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](89, " SIMPAN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](33);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("formGroup", ctx_r4.configurationStoreLocationForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx_r4.previewStoreImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r4.previewStoreImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r4.configurationStoreLocationForm.get("image").hasError("required") && (ctx_r4.configurationStoreLocationForm.get("image").dirty || ctx_r4.configurationStoreLocationForm.get("image").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](24, _c0))("ngModel", ctx_r4.productLinkBusiness);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngbTooltip", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r4.storeLinkHost);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r4.configurationStoreLocationForm.get("link").hasError("required") && (ctx_r4.configurationStoreLocationForm.get("link").dirty || ctx_r4.configurationStoreLocationForm.get("link").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r4.configurationStoreLocationForm.get("link").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r4.configurationStoreLocationForm.get("link").hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", ctx_r4.disableBtnShop());
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r4.configurationStoreLocationForm.get("phoneNumber").hasError("required") && (ctx_r4.configurationStoreLocationForm.get("phoneNumber").dirty || ctx_r4.configurationStoreLocationForm.get("phoneNumber").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r4.configurationStoreLocationForm.get("phoneNumber").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r4.configurationStoreLocationForm.get("email").hasError("required") && (ctx_r4.configurationStoreLocationForm.get("email").dirty || ctx_r4.configurationStoreLocationForm.get("email").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r4.configurationStoreLocationForm.get("email").hasError("invalidEmail"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("clearable", false)("items", ctx_r4.location.postalCodeCityProvince)("multiple", false)("closeOnSelect", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r4.configurationStoreLocationForm.get("postalCodeCityProvince").hasError("required") && (ctx_r4.configurationStoreLocationForm.get("postalCodeCityProvince").dirty || ctx_r4.configurationStoreLocationForm.get("postalCodeCityProvince").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r4.configurationStoreLocationForm.get("address").hasError("required") && (ctx_r4.configurationStoreLocationForm.get("address").dirty || ctx_r4.configurationStoreLocationForm.get("address").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r4.configurationStoreLocationForm.get("address").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", !ctx_r4.configurationStoreLocationForm.valid);
} }
function ConfigurationStoreLocationComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3, "Pengaturan Toko");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5, "Atur jasa pengiriman dan profile untuk toko");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "ul", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](10, "Informasi Toko");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](11, ConfigurationStoreLocationComponent_ng_template_1_ng_template_11_Template, 90, 25, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](12, "div", 11);
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngbNavOutlet", _r3);
} }
class ConfigurationStoreLocationComponent {
    constructor(formBuilder, requestService, apiModelTranslatorService, validationService, alertService, errorService, modalService, router) {
        this.formBuilder = formBuilder;
        this.requestService = requestService;
        this.apiModelTranslatorService = apiModelTranslatorService;
        this.validationService = validationService;
        this.alertService = alertService;
        this.errorService = errorService;
        this.modalService = modalService;
        this.router = router;
        //loading component
        this.loading = true;
        this.pageName = "";
        this.responseApi = new _shared_models_response_api_model__WEBPACK_IMPORTED_MODULE_11__.ResponseApi();
        this.user = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_0__.User();
        this.infoConfigStore = new _shared_models_configuration_store_location_model__WEBPACK_IMPORTED_MODULE_4__.ConfigurationStoreLocation();
        this.apiInfoStore = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_3__.APIConstant.MERCHANT;
        this.apiGetLocation = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_3__.APIConstant.LOCATION;
        this.location = new _shared_models_location_model__WEBPACK_IMPORTED_MODULE_1__.Location();
        this.tempGetLocation = [];
        this.locationType = _shared_enum_location_type_enum__WEBPACK_IMPORTED_MODULE_6__.LocationType;
        this.productLinkBusiness = "";
        this.productLinkRoot = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.envUrl;
        this.storeLinkHost = "";
    }
    ngOnInit() {
        this.initLoad();
    }
    form(configStore) {
        this.configurationStoreLocationForm = this.formBuilder.group({
            image: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
            link: [configStore === null || configStore === void 0 ? void 0 : configStore.link, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.pattern, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.maxLength(25)]],
            phoneNumber: [configStore === null || configStore === void 0 ? void 0 : configStore.phoneNumber, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.pattern]],
            email: [configStore === null || configStore === void 0 ? void 0 : configStore.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, _shared_helper_form_control_validation_helper__WEBPACK_IMPORTED_MODULE_5__.FormControlValidationHelper.emailValidator]],
            postalCodeCityProvince: [configStore === null || configStore === void 0 ? void 0 : configStore.postalCodeCityProvince, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
            address: [configStore === null || configStore === void 0 ? void 0 : configStore.address, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.pattern]],
        });
    }
    initLoad() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, function* () {
            let configStore = yield this.getConfigurationStoreInfo();
            this.form(configStore);
            this.user = this.requestService.getUserToken();
            this.productLinkBusiness = this.user.businessClientName;
            this.productLinkBusiness = this.productLinkBusiness.charAt(0).toUpperCase() + this.productLinkBusiness.slice(1);
            this.location.postalCodeCityProvince = yield this.getLocation(this.locationType.PostalCodeCityProvince, null);
            this.storeLinkHost = this.productLinkRoot + '/' + _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_8__.NavigationConstant.ROUTING_RETAIL + '/' + _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_8__.NavigationConstant.ROUTING_MERCHANT + '/';
        });
    }
    getLocation(locationType, uiId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, function* () {
            let apiLocation = this.apiGetLocation + '/' + locationType;
            let requestParam = null;
            if (uiId !== null) {
                requestParam = new Map();
                requestParam.set('uiId', uiId);
            }
            return this.requestService.get(apiLocation, requestParam).toPromise().then((response) => {
                this.tempGetLocation = this.apiModelTranslatorService.snakeToCamelCase(response);
                return this.tempGetLocation;
            }, (error) => {
                this.errorService.getErrorApi(error);
            });
        });
    }
    changeStateLocationType(locationType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, function* () {
            if (locationType === _shared_enum_location_type_enum__WEBPACK_IMPORTED_MODULE_6__.LocationType.City) {
                this.configurationStoreLocationForm.patchValue({ 'city': null });
                this.configurationStoreLocationForm.patchValue({ 'district': null });
                this.configurationStoreLocationForm.patchValue({ 'subDistrict': null });
                this.configurationStoreLocationForm.patchValue({ 'postalCode': null });
                let province = this.configurationStoreLocationForm.get('province').value;
                this.location.city = yield this.getLocation(locationType, province.uiId);
            }
            else if (locationType === _shared_enum_location_type_enum__WEBPACK_IMPORTED_MODULE_6__.LocationType.District) {
                this.configurationStoreLocationForm.patchValue({ 'district': null });
                this.configurationStoreLocationForm.patchValue({ 'subDistrict': null });
                this.configurationStoreLocationForm.patchValue({ 'postalCode': null });
                let city = this.configurationStoreLocationForm.get('city').value;
                this.location.district = yield this.getLocation(locationType, city.uiId);
            }
            else if (locationType === _shared_enum_location_type_enum__WEBPACK_IMPORTED_MODULE_6__.LocationType.SubDistrict) {
                this.configurationStoreLocationForm.patchValue({ 'subDistrict': null });
                this.configurationStoreLocationForm.patchValue({ 'postalCode': null });
                let district = this.configurationStoreLocationForm.get('district').value;
                this.location.subDistrict = yield this.getLocation(locationType, district.uiId);
            }
            else if (locationType === _shared_enum_location_type_enum__WEBPACK_IMPORTED_MODULE_6__.LocationType.PostalCode) {
                this.configurationStoreLocationForm.patchValue({ 'postalCode': null });
                let postalCode = this.configurationStoreLocationForm.get('subDistrict').value;
                this.location.postalCode = yield this.getLocation(locationType, postalCode.uiId);
            }
        });
    }
    submitConfigurationStoreLocation() {
        if (this.configurationStoreLocationForm.valid) {
            //set body
            let saveInfoMerchant = new _shared_models_configuration_store_location_model__WEBPACK_IMPORTED_MODULE_4__.ConfigurationStoreLocation();
            saveInfoMerchant.postalCodeUiId = this.configurationStoreLocationForm.get('postalCodeCityProvince').value.uiId;
            saveInfoMerchant.address = this.configurationStoreLocationForm.get('address').value;
            saveInfoMerchant.email = this.configurationStoreLocationForm.get('email').value;
            saveInfoMerchant.phoneNumber = this.configurationStoreLocationForm.get('phoneNumber').value;
            saveInfoMerchant.link = this.configurationStoreLocationForm.get('link').value;
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default().fire({
                title: 'Simpan Lokasi Toko?',
                text: 'Lokasi toko akan di set sebagai pengantaran barang ?',
                showCancelButton: true,
                cancelButtonText: 'BATAL',
                cancelButtonColor: '#666666',
                reverseButtons: true,
                confirmButtonColor: '#E1251B',
                confirmButtonText: 'SIMPAN',
                showLoaderOnConfirm: true,
                customClass: {
                    title: 'swal2-title-modal-medium'
                },
                preConfirm: () => (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, function* () {
                    yield this.uploadImageProduct(this.imageToUpload);
                    this.requestService.post(this.apiInfoStore, null, this.apiModelTranslatorService.camelToSnakeCase(saveInfoMerchant))
                        .subscribe((res) => {
                        this.router.navigate([_shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_8__.NavigationConstant.ROUTING_CONFIGURATION]);
                        this.alertService.setProps("Success! Set Store Location", false);
                    }, (error) => {
                        this.errorService.getErrorApi(error);
                    });
                })
            });
        }
    }
    uploadImageProduct(file) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, function* () {
            let urlUploadImageStore = this.apiInfoStore + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_3__.APIConstant.MERCHANT_IMAGE;
            return this.requestService.uploadSingleFile("image", urlUploadImageStore, file)
                .toPromise().then((res) => {
            }, (error) => {
                this.errorService.getErrorApi(error);
            });
        });
    }
    getConfigurationStoreInfo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, function* () {
            return this.requestService.get(this.apiInfoStore, null).toPromise().then((response) => {
                this.infoConfigStore = this.apiModelTranslatorService.snakeToCamelCase(response);
                this.previewStoreImage = this.infoConfigStore.image;
                this.loading = false;
                return this.infoConfigStore;
            }, (error) => {
                this.responseApi = error.error;
                if (this.responseApi.error.code === _shared_constant_api_error_code_constant__WEBPACK_IMPORTED_MODULE_9__.ApiErrorCode.MERCHANT_NOT_FOUND) {
                    this.router.navigate([_shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_8__.NavigationConstant.ERROR_CUSTOM, _shared_constant_error_code_constant__WEBPACK_IMPORTED_MODULE_10__.ErrorCodeConstant.KYB]);
                }
                else {
                    this.errorService.getErrorApi(error);
                }
            });
        });
    }
    disableBtnShop() {
        if (this.infoConfigStore.link == null || this.infoConfigStore.link == "") {
            return true;
        }
        return false;
    }
    btnShopClick() {
        window.open(this.storeLinkHost + this.infoConfigStore.link, "_blank");
    }
    fileProgress(fileInput) {
        this.fileData = fileInput.target.files[0];
        if (this.fileData !== undefined) {
            this.preview();
        }
    }
    preview() {
        var _a;
        // Show image preview
        let mimeType = (_a = this.fileData) === null || _a === void 0 ? void 0 : _a.type;
        if (mimeType.match('image.*') === null) {
            this.configurationStoreLocationForm.patchValue({ 'image': null });
            this.alertService.setProps("Failed Upload Type", true);
            return;
        }
        //validation > 1 mb
        if (this.fileData.size > 1000000) {
            this.configurationStoreLocationForm.patchValue({ 'image': null });
            this.alertService.setProps("Size more than 1 MB", true);
            return;
        }
        let reader = new FileReader();
        reader.readAsDataURL(this.fileData);
        reader.onload = (_event) => {
            //validation < 300px x 300px
            let img = new Image();
            img.src = reader.result;
            img.onload = () => {
                const height = img.naturalHeight;
                const width = img.naturalWidth;
                if (height < 300 || width < 300) {
                    this.configurationStoreLocationForm.patchValue({ 'image': null });
                    this.alertService.setProps("Minimum width and height 300", true);
                }
                else {
                    this.previewStoreImage = reader.result;
                    this.imageToUpload = this.fileData;
                }
            };
        };
    }
}
ConfigurationStoreLocationComponent.ɵfac = function ConfigurationStoreLocationComponent_Factory(t) { return new (t || ConfigurationStoreLocationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_shared_service_request_service__WEBPACK_IMPORTED_MODULE_12__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_shared_service_api_model_translator_service__WEBPACK_IMPORTED_MODULE_13__.ApiModelTranslatorService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_14__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_shared_service_alert_service__WEBPACK_IMPORTED_MODULE_15__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_shared_service_error_service__WEBPACK_IMPORTED_MODULE_16__.ErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.Router)); };
ConfigurationStoreLocationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({ type: ConfigurationStoreLocationComponent, selectors: [["app-configuration-store-location"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["loaded", ""], [1, "center"], ["role", "status", 1, "spinner-border", "text-primary", "spinner-sm", "mr-5"], [1, "row"], [1, "form-group", "col-md-12", "page-header"], ["ngbNav", "", 1, "nav-tabs"], ["nav", "ngbNav"], ["ngbNavItem", ""], ["ngbNavLink", "", 1, ""], ["ngbNavContent", ""], [3, "ngbNavOutlet"], [1, "card", "card-body"], [1, "col-12", "col-md-9"], ["id", "configurationStoreLocationForm", 1, "pt-10", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "col"], [1, "col-12"], [1, "responsive-layout", "justify-content-start", "w-100"], [1, "image-upload", "d-flex", "justify-content-center", 2, "border-style", "dashed", "width", "150px", "height", "150px"], [2, "margin-top", "auto", "margin-bottom", "auto"], [4, "ngIf"], [1, "form-group", "mt-auto", "p-2"], ["for", "file-input1", 1, "btn", "btn-secondary", "ml-auto"], ["id", "file-input1", "type", "file", "name", "image", "accept", "image/png, image/jpg, image/jpeg", "formControlName", "image", "hidden", "", 1, "btn", 3, "change"], ["class", "text-danger", 4, "ngIf"], ["ngbTooltip", "Nama toko tidak dapat diubah, silahkan kunjungi Menu Business Activation untuk perubahan Nama Toko", 1, "fas", "fa-info-circle"], ["id", "name", "placeholder", "Store Name", "required", "", "type", "text", "pattern", "^[a-zA-Z0-9.\\\\-\\\\/+,=_:'@%| ]*$", "readonly", "", 1, "form-control", "dk-text-input", 3, "ngModelOptions", "ngModel"], ["tipContent", ""], ["data-html", "true", 1, "fas", "fa-info-circle", 3, "ngbTooltip"], [1, "input-group"], [1, "input-group-append"], ["id", "linkStore", 1, "input-group-text", "dk-span-group"], ["formControlName", "link", "id", "link", "placeholder", "Link-Toko", "required", "", "type", "text", "pattern", "^[a-zA-Z0-9._-]+$", 1, "form-control", "dk-text-input"], ["class", "col text-danger", 4, "ngIf"], [1, "d-flex", "bd-highlight", "mb-3", "col"], ["id", "btnShop", "type", "button", 1, "btn", "btn-secondary", "btn-sm", 3, "disabled", "click"], [1, "col", "input-group"], ["formControlName", "phoneNumber", "id", "phoneNumber", "placeholder", "6281197216322", "required", "", "type", "text", "pattern", "^[1-9][0-9]*$", 1, "form-control", "dk-text-input", 3, "keypress"], ["formControlName", "email", "id", "email", "placeholder", "Masukkan email", "required", "", "type", "text", 1, "form-control", "dk-text-input"], ["formControlName", "postalCodeCityProvince", "bindLabel", "name", 3, "clearable", "items", "multiple", "closeOnSelect"], ["ngbTooltip", "Alamat akan digunakan sebagai asal pengiriman", 1, "fas", "fa-info-circle"], ["formControlName", "address", "rows", "4", "id", "address", "placeholder", "Masukkan detail alamat lengkap toko Anda", "required", "", "pattern", "^[a-zA-Z0-9.\\\\-\\\\/+,=_:'@%| ]*$", 1, "form-control", "dk-text-input"], [1, "mr-auto", "bd-highlight", "align-middle"], ["id", "backButton", "type", "button", 1, "btn", "btn-secondary", "ml-auto"], [1, "fa", "fa-arrow-left", "in-icon"], [1, "p-2", "bd-highlight", "align-middle"], ["id", "save", "type", "submit", 1, "btn", "btn-primary", "ml-auto", 3, "disabled"], [1, "fas", "fa-store", "fa-8x"], [1, "image-container", 3, "src"], [1, "text-danger"], [2, "text-align", "left"], [1, "col", "text-danger"]], template: function ConfigurationStoreLocationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](0, ConfigurationStoreLocationComponent_div_0_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, ConfigurationStoreLocationComponent_ng_template_1_Template, 13, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbNavOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__.NgSelectComponent], styles: [".center[_ngcontent-%COMP%] {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    position: fixed;\n    top:0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n}\n\nimg.image-container[_ngcontent-%COMP%] {\n    width: 110px;\n    height: 110px;\n    -o-object-fit: contain;\n       object-fit: contain;\n}\n\n.responsive-layout[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: flex-end;\n}\n.responsive-layout[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]:first-child, .responsive-layout[_ngcontent-%COMP%]{\n    margin-right: 16px;\n}\n@media (max-width: 768px) {\n    .responsive-layout[_ngcontent-%COMP%] {\n        display: block;\n    }\n    .responsive-layout[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%], .responsive-layout[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n        margin-top: 8px;\n        margin-bottom: 8px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24tc3RvcmUtbG9jYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5QkFBeUI7QUFDekI7SUFDSSwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQiwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsS0FBSztJQUNMLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7QUFDaEI7QUFFQSxpQ0FBaUM7QUFDakM7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFtQjtPQUFuQixtQkFBbUI7QUFDdkI7QUFFQSw2Q0FBNkM7QUFDN0M7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6ImNvbmZpZ3VyYXRpb24tc3RvcmUtbG9jYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNzcyBmb3IgbG9hZGluZyBwYWdlICovXG4uY2VudGVyIHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOjA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4vKiBjc3MgZm9yIGltYWdlIGNvbnRhaW5lciBwYWdlICovXG5pbWcuaW1hZ2UtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4vKiBsYXlvdXRpbmcgZm9yIHBpbGloIGZvdG8gZGFuIGdhbWJhciBmb3RvICovXG4ucmVzcG9uc2l2ZS1sYXlvdXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5yZXNwb25zaXZlLWxheW91dCAuZm9ybS1ncm91cDpmaXJzdC1jaGlsZCwgLnJlc3BvbnNpdmUtbGF5b3V0e1xuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5yZXNwb25zaXZlLWxheW91dCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAucmVzcG9uc2l2ZS1sYXlvdXQgLmZvcm0tZ3JvdXAsIC5yZXNwb25zaXZlLWxheW91dCAuZm9ybS1ncm91cCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 6340:
/*!***************************************************************!*\
  !*** ./src/app/modules/configuration/configuration.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationModule": function() { return /* binding */ ConfigurationModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _configuration_store_location_configuration_store_location_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration-store-location/configuration-store-location.component */ 11580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ 36868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);








const routes = [
    {
        path: '',
        component: _configuration_store_location_configuration_store_location_component__WEBPACK_IMPORTED_MODULE_0__.ConfigurationStoreLocationComponent,
        pathMatch: 'full'
    }
];
class ConfigurationModule {
}
ConfigurationModule.ɵfac = function ConfigurationModule_Factory(t) { return new (t || ConfigurationModule)(); };
ConfigurationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ConfigurationModule });
ConfigurationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbPaginationModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbTooltipModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ConfigurationModule, { declarations: [_configuration_store_location_configuration_store_location_component__WEBPACK_IMPORTED_MODULE_0__.ConfigurationStoreLocationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbPaginationModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbTooltipModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_configuration_configuration_module_ts-es2015.js.map