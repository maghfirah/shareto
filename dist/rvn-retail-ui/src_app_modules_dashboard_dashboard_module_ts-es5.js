(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkrvn_retail_ui"] = self["webpackChunkrvn_retail_ui"] || []).push([["src_app_modules_dashboard_dashboard_module_ts"], {
    /***/
    95118:
    /*!********************************************************************************!*\
      !*** ./src/app/modules/dashboard/dashboard-index/dashboard-index.component.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardIndexComponent": function DashboardIndexComponent() {
          return (
            /* binding */
            _DashboardIndexComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/constant/navigation.constant */
      86473);
      /* harmony import */


      var src_app_shared_enum_transaction_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/enum/transaction-status */
      16486);
      /* harmony import */


      var src_app_shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/constant/api.constant */
      58412);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var src_app_shared_models_response_api_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/models/response-api.model */
      5320);
      /* harmony import */


      var src_app_shared_constant_api_error_code_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/constant/api-error-code.constant */
      96694);
      /* harmony import */


      var src_app_shared_constant_error_code_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/constant/error-code.constant */
      28228);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_service_request_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/service/request.service */
      67229);
      /* harmony import */


      var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/service/error.service */
      38205);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function DashboardIndexComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function DashboardIndexComponent_ng_template_1_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Toko Saya");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Berikut ringkasan informasi yang terjadi di tokomu.");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Ringkasan Transaksi");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Hal yang perlu kamu tanggapi hari ini");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DashboardIndexComponent_ng_template_1_ng_container_0_Template_a_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

            return ctx_r4.goToTransactionPage(ctx_r4.transactionStatus.checkWaitingForPayment);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "Pesanan baru");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DashboardIndexComponent_ng_template_1_ng_container_0_Template_a_click_28_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

            return ctx_r6.goToTransactionPage(ctx_r6.transactionStatus.checkNewOrder);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35, "Pesanan perlu di proses");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DashboardIndexComponent_ng_template_1_ng_container_0_Template_a_click_38_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

            return ctx_r7.goToTransactionPage(ctx_r7.transactionStatus.checkProccessed);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](45, "Siap dikirim");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DashboardIndexComponent_ng_template_1_ng_container_0_Template_a_click_48_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

            return ctx_r8.goToTransactionPage(ctx_r8.transactionStatus.checkSent);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](55, "Dalam pengiriman");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](58, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DashboardIndexComponent_ng_template_1_ng_container_0_Template_a_click_58_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

            return ctx_r9.goToTransactionPage(ctx_r9.transactionStatus.checkFinished);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](62, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](63);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](64, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](65, "Sampai ditujuan");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](66, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](67, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](68, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](70, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](71, "Status Produk");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](72, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](73, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DashboardIndexComponent_ng_template_1_ng_container_0_Template_button_click_73_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

            return ctx_r10.changePage("add");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](74, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](75, "Tambah Produk");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](77, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](78, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](79, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DashboardIndexComponent_ng_template_1_ng_container_0_Template_a_click_79_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

            return ctx_r11.goToOrderPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](80, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](81, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](82, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](83, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](84, "Total produk aktif");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](85, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](86);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](87, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](88, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](89, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DashboardIndexComponent_ng_template_1_ng_container_0_Template_a_click_89_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

            return ctx_r12.goToOrderPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](90, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](91, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](92, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](93, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](94, "Produk dalam verifikasi");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](95, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](96);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](97, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](98, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](99, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DashboardIndexComponent_ng_template_1_ng_container_0_Template_a_click_99_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

            return ctx_r13.goToOrderPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](100, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](101, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](102, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](103, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](104, "Produk di tolak");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](105, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](106);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r3.dashboardData == null ? null : ctx_r3.dashboardData.transaction_status == null ? null : ctx_r3.dashboardData.transaction_status.waiting_for_payment_count);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r3.dashboardData == null ? null : ctx_r3.dashboardData.transaction_status == null ? null : ctx_r3.dashboardData.transaction_status.new_order_count);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r3.dashboardData == null ? null : ctx_r3.dashboardData.transaction_status == null ? null : ctx_r3.dashboardData.transaction_status.processing_count);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r3.dashboardData == null ? null : ctx_r3.dashboardData.transaction_status == null ? null : ctx_r3.dashboardData.transaction_status.sending_count);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r3.dashboardData == null ? null : ctx_r3.dashboardData.transaction_status == null ? null : ctx_r3.dashboardData.transaction_status.done_count);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r3.dashboardData == null ? null : ctx_r3.dashboardData.product_status == null ? null : ctx_r3.dashboardData.product_status.approved_count);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r3.dashboardData == null ? null : ctx_r3.dashboardData.product_status == null ? null : ctx_r3.dashboardData.product_status.waiting_count);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r3.dashboardData == null ? null : ctx_r3.dashboardData.product_status == null ? null : ctx_r3.dashboardData.product_status.rejected_count);
        }
      }

      function DashboardIndexComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, DashboardIndexComponent_ng_template_1_ng_container_0_Template, 107, 8, "ng-container", 4);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.pageName === "dashboard");
        }
      }

      var _DashboardIndexComponent = /*#__PURE__*/function () {
        function _DashboardIndexComponent(router, requestService, errorService) {
          _classCallCheck(this, _DashboardIndexComponent);

          this.router = router;
          this.requestService = requestService;
          this.errorService = errorService;
          this.transactionStatus = src_app_shared_enum_transaction_status__WEBPACK_IMPORTED_MODULE_1__.TransactionStatus;
          this.loading = true;
          this.pageName = "";
          this.responseApi = new src_app_shared_models_response_api_model__WEBPACK_IMPORTED_MODULE_4__.ResponseApi();
        }

        _createClass(_DashboardIndexComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.initLoad();

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "initLoad",
          value: function initLoad() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.pageName = 'dashboard';
                      this.getDataDashboard();

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "goToOrderPage",
          value: function goToOrderPage() {
            this.router.navigate(['/' + _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_0__.NavigationConstant.ROUTING_INVENTORY]);
          }
        }, {
          key: "goToTransactionPage",
          value: function goToTransactionPage(status) {
            this.router.navigate(['/' + _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_0__.NavigationConstant.ROUTING_TRANSACTION], {
              queryParams: {
                status: status
              }
            });
          }
        }, {
          key: "changePage",
          value: function changePage(pageName) {
            this.router.navigate(['/' + _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_0__.NavigationConstant.ROUTING_INVENTORY], {
              queryParams: {
                pageName: 'add'
              },
              skipLocationChange: true,
              replaceUrl: true
            });
          }
        }, {
          key: "getDataDashboard",
          value: function getDataDashboard() {
            var _this = this;

            var ENDPOINT_DASHBOARD = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl + src_app_shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_2__.APIConstant.MERCHANT_DASHBOARD;
            var requestParam = new Map();
            this.requestService.get(ENDPOINT_DASHBOARD, requestParam).subscribe(function (response) {
              _this.dashboardData = response;
              _this.loading = false;
            }, function (error) {
              _this.responseApi = error.error;

              if (_this.responseApi.error.code === src_app_shared_constant_api_error_code_constant__WEBPACK_IMPORTED_MODULE_5__.ApiErrorCode.MERCHANT_NOT_FOUND) {
                _this.router.navigate([_shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_0__.NavigationConstant.ERROR_CUSTOM, src_app_shared_constant_error_code_constant__WEBPACK_IMPORTED_MODULE_6__.ErrorCodeConstant.KYB]);
              } else if (_this.responseApi.error.code === src_app_shared_constant_api_error_code_constant__WEBPACK_IMPORTED_MODULE_5__.ApiErrorCode.MERCHANT_INACTIVE) {
                _this.router.navigate([_shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_0__.NavigationConstant.ROUTING_CONFIGURATION]);
              } else {
                _this.errorService.getErrorApi(error);
              }
            });
          }
        }]);

        return _DashboardIndexComponent;
      }();

      _DashboardIndexComponent.ɵfac = function DashboardIndexComponent_Factory(t) {
        return new (t || _DashboardIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_service_request_service__WEBPACK_IMPORTED_MODULE_7__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__.ErrorService));
      };

      _DashboardIndexComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
        type: _DashboardIndexComponent,
        selectors: [["app-dashboard-index"]],
        decls: 3,
        vars: 2,
        consts: [[4, "ngIf", "ngIfElse"], ["loaded", ""], [1, "center"], ["role", "status", 1, "spinner-border", "text-primary", "spinner-sm", "mr-5"], [4, "ngIf"], [1, "row"], [1, "form-group", "col-md-12", "page-header"], [1, "card", "mb-5"], [1, "card-body"], [1, "col"], [1, "col-md", "col-sm-12", "summary-transaction", "summary-border"], [1, "card"], [3, "click"], [1, "row", "m-0"], [1, "col-md", "col-sm-12", "summary-transaction"], [1, "row", "mb-3", 2, "align-items", "center"], [1, "col-md-auto", "col"], [1, "btn", "btn-outline-danger", 3, "click"], [1, "fas", "fa-plus"], [1, "col-md", "col-sm-12", "summary-product", "summary-border"]],
        template: function DashboardIndexComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, DashboardIndexComponent_div_0_Template, 3, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, DashboardIndexComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf],
        styles: [".summary-transaction[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    background: #FFFFFF;\n    border: none;\n    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08);\n    border-radius: 8px;\n    margin-bottom: 10px;\n}\n.summary-product[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    border: none;\n}\n.summary-transaction[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .summary-product[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    transition: 0.7s;\n    text-decoration: none;\n    border-radius: 8px;\n    cursor: pointer;\n    color: #4D4D4D;\n}\n.summary-transaction[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #E1251B;\n}\n.summary-transaction[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .summary-product[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    background-color: #FFD8CD;\n}\n@media (min-width: 576px) {\n    .summary-transaction.summary-border[_ngcontent-%COMP%], .summary-product.summary-border[_ngcontent-%COMP%]{\n        border-right: solid 1px #E6E6E6!important;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC1pbmRleC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWiwwQ0FBMEM7SUFDMUMsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0k7UUFDSSx5Q0FBeUM7SUFDN0M7QUFDSiIsImZpbGUiOiJkYXNoYm9hcmQtaW5kZXguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdW1tYXJ5LXRyYW5zYWN0aW9uIC5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiAwIDZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uc3VtbWFyeS1wcm9kdWN0IC5jYXJkIHtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4uc3VtbWFyeS10cmFuc2FjdGlvbiAuY2FyZCAgYSwgLnN1bW1hcnktcHJvZHVjdCAuY2FyZCAgYSB7XG4gICAgdHJhbnNpdGlvbjogMC43cztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogIzRENEQ0RDtcbn1cbi5zdW1tYXJ5LXRyYW5zYWN0aW9uIC5jYXJkIGgzIHtcbiAgICBjb2xvcjogI0UxMjUxQjtcbn1cbi5zdW1tYXJ5LXRyYW5zYWN0aW9uIC5jYXJkICBhOmhvdmVyLCAuc3VtbWFyeS1wcm9kdWN0IC5jYXJkICBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEOENEO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgICAuc3VtbWFyeS10cmFuc2FjdGlvbi5zdW1tYXJ5LWJvcmRlciwgLnN1bW1hcnktcHJvZHVjdC5zdW1tYXJ5LWJvcmRlcntcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggI0U2RTZFNiFpbXBvcnRhbnQ7XG4gICAgfVxufVxuIl19 */"]
      });
      /***/
    },

    /***/
    88757:
    /*!*******************************************************!*\
      !*** ./src/app/modules/dashboard/dashboard.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardModule": function DashboardModule() {
          return (
            /* binding */
            _DashboardModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _dashboard_index_dashboard_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard-index/dashboard-index.component */
      95118);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _dashboard_index_dashboard_index_component__WEBPACK_IMPORTED_MODULE_0__.DashboardIndexComponent,
        pathMatch: 'full'
      }];

      var _DashboardModule = function _DashboardModule() {
        _classCallCheck(this, _DashboardModule);
      };

      _DashboardModule.ɵfac = function DashboardModule_Factory(t) {
        return new (t || _DashboardModule)();
      };

      _DashboardModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _DashboardModule
      });
      _DashboardModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbTooltipModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_DashboardModule, {
          declarations: [_dashboard_index_dashboard_index_component__WEBPACK_IMPORTED_MODULE_0__.DashboardIndexComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbTooltipModule]
        });
      })();
      /***/

    },

    /***/
    58412:
    /*!*************************************************!*\
      !*** ./src/app/shared/constant/api.constant.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "APIConstant": function APIConstant() {
          return (
            /* binding */
            _APIConstant
          );
        }
        /* harmony export */

      });

      var _APIConstant = function _APIConstant() {
        _classCallCheck(this, _APIConstant);
      }; // Module Product


      _APIConstant.PRODUCT = '/product';
      _APIConstant.PRODUCT_CATEGORY = '/product/category';
      _APIConstant.PRODUCT_ACTIVATE = '/active';
      _APIConstant.PRODUCT_DETAIL = '/detail';
      _APIConstant.PRODUCT_IMAGES = '/image';
      _APIConstant.PRODUCT_VARIANT = '/product/variant'; // Module Configuration

      _APIConstant.MERCHANT = '/merchant';
      _APIConstant.MERCHANT_IMAGE = '/image';
      _APIConstant.MERCHANT_LINK = '/merchant/link';
      _APIConstant.MERCHANT_ORDER = '/merchant/order';
      _APIConstant.MERCHANT_DASHBOARD = '/merchant/dashboard';
      _APIConstant.MERCHANT_ORDER_DETAIL = '/detail';
      _APIConstant.MERCHANT_ORDER_PROCESS = '/process';
      _APIConstant.MERCHANT_ORDER_SEND = '/send'; // Module Location

      _APIConstant.LOCATION = '/location'; // Module Link

      _APIConstant.LINK = '/link';
      _APIConstant.LINK_MERCHANT_DETAIL = '/detail';
      _APIConstant.LINK_MERCHANT_PRODUCTS = '/products';
      _APIConstant.LINK_MERCHANT_CATEGORY = '/category'; // Cart

      _APIConstant.CART = '/cart';
      _APIConstant.SHIPPING = '/shipping';
      _APIConstant.CHECKOUT = '/checkout'; // Order

      _APIConstant.ORDER = '/order';
      _APIConstant.ORDER_DETAIL = '/order/detail';
      _APIConstant.ORDER_COMPLETE = '/order/complete';
      _APIConstant.ORDER_SEND_EMAIL = '/order/email/send'; // Internal

      _APIConstant.INTERNAL = '/internal';
      _APIConstant.INTERNAL_LIST = '/internal/product';
      _APIConstant.INTERNAL_VALIDATE = '/validate';
      _APIConstant.INTERNAL_CATEGORY = '/category';
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_modules_dashboard_dashboard_module_ts-es5.js.map