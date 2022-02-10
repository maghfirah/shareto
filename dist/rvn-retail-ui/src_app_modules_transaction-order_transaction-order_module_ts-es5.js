(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkrvn_retail_ui"] = self["webpackChunkrvn_retail_ui"] || []).push([["src_app_modules_transaction-order_transaction-order_module_ts"], {
    /***/
    36086:
    /*!**********************************************************************************************************!*\
      !*** ./src/app/modules/transaction-order/transaction-order-detail/transaction-order-detail.component.ts ***!
      \**********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TransactionOrderDetailComponent": function TransactionOrderDetailComponent() {
          return (
            /* binding */
            _TransactionOrderDetailComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _shared_models_order_detail_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/models/order-detail.model */
      55973);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../environments/environment */
      92340);
      /* harmony import */


      var _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/constant/api.constant */
      58412);
      /* harmony import */


      var _shared_enum_payment_status_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/enum/payment-status.enum */
      14162);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _shared_constant_prop_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../shared/constant/prop.constant */
      42493);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _shared_service_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../shared/service/request.service */
      67229);
      /* harmony import */


      var _shared_service_api_model_translator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../shared/service/api-model-translator.service */
      43206);
      /* harmony import */


      var _shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/service/error.service */
      38205);
      /* harmony import */


      var _shared_service_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../shared/service/alert.service */
      96506);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);

      function TransactionOrderDetailComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function TransactionOrderDetailComponent_ng_template_1_div_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TransactionOrderDetailComponent_ng_template_1_div_25_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r12.prosesPesanan();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " PROSES PESANAN ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function TransactionOrderDetailComponent_ng_template_1_div_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TransactionOrderDetailComponent_ng_template_1_div_26_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r14.kirimPesanan();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " KIRIM PESANAN ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function TransactionOrderDetailComponent_ng_template_1_span_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Silahkan untuk letakkan nomor resi/tracking pada paket anda, dan bisa untuk search via ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "shipper.id/tracking");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, " untuk memantau perjalanan paket yang anda kirimkan. Pesanan yang diproses sebelum 15.00 akan diambil paketnya pada hari tersebut, selebihnya akan diambil di esok hari.");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" Tracking Id: ", ctx_r5.orderDetail.shipping.trackingId, " ");
        }
      }

      function TransactionOrderDetailComponent_ng_template_1_span_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" No. Resi: ", ctx_r6.orderDetail.shipping.awbNumber, " ");
        }
      }

      function TransactionOrderDetailComponent_ng_template_1_span_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Tracking Id: 5j08725 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Silahkan untuk letakkan nomor resi/tracking pada paket anda, dan bisa untuk search via ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "shipper.id/tracking");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, " untuk memantau perjalanan paket yang anda kirimkan. Pesanan yang diproses sebelum 15.00 akan diambil paketnya pada hari tersebut, selebihnya akan diambil di esok hari.");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          "is-finished": a0,
          "is-active": a1
        };
      };

      function TransactionOrderDetailComponent_ng_template_1_li_80_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, " Pesanan Dikirim");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, " Pesanan telah dikirim dari ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](6, _c0, (ctx_r8.orderDetail == null ? null : ctx_r8.orderDetail.milestones[1] == null ? null : ctx_r8.orderDetail.milestones[1].createdDate) !== null && (ctx_r8.orderDetail == null ? null : ctx_r8.orderDetail.milestones[2] == null ? null : ctx_r8.orderDetail.milestones[2].createdDate) == null, (ctx_r8.orderDetail == null ? null : ctx_r8.orderDetail.milestones[2] == null ? null : ctx_r8.orderDetail.milestones[2].createdDate) !== null && (ctx_r8.orderDetail == null ? null : ctx_r8.orderDetail.milestones[3] == null ? null : ctx_r8.orderDetail.milestones[3].createdDate) == null));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r8.orderDetail.merchant.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](11, 3, ctx_r8.orderDetail == null ? null : ctx_r8.orderDetail.milestones[2] == null ? null : ctx_r8.orderDetail.milestones[2].createdDate, "dd MMMM yyyy, HH:mm:ss"), " ");
        }
      }

      function TransactionOrderDetailComponent_ng_template_1_li_81_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, " Pesanan Telah Sampai di Tujuan");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, " Pesanan akan segera diterima ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, " sesuai estimasi waktu ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](5, _c0, (ctx_r9.orderDetail == null ? null : ctx_r9.orderDetail.milestones[2] == null ? null : ctx_r9.orderDetail.milestones[2].createdDate) !== null && (ctx_r9.orderDetail == null ? null : ctx_r9.orderDetail.milestones[3] == null ? null : ctx_r9.orderDetail.milestones[3].createdDate) == null, (ctx_r9.orderDetail == null ? null : ctx_r9.orderDetail.milestones[3] == null ? null : ctx_r9.orderDetail.milestones[3].createdDate) !== null && (ctx_r9.orderDetail == null ? null : ctx_r9.orderDetail.milestones[4] == null ? null : ctx_r9.orderDetail.milestones[4].createdDate) == null));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](11, 2, ctx_r9.orderDetail == null ? null : ctx_r9.orderDetail.milestones[3] == null ? null : ctx_r9.orderDetail.milestones[3].createdDate, "dd MMMM yyyy, HH:mm:ss"), " ");
        }
      }

      function TransactionOrderDetailComponent_ng_template_1_li_82_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, " Pesanan Selesai");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, " Transaksi sukses dan pembeli ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, " telah menerima pesanan ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](11, 1, ctx_r10.orderDetail == null ? null : ctx_r10.orderDetail.milestones[4] == null ? null : ctx_r10.orderDetail.milestones[4].createdDate, "dd MMMM yyyy, HH:mm:ss"), " ");
        }
      }

      function TransactionOrderDetailComponent_ng_template_1_div_89_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "img", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "h6", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](15, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var variant_r19 = ctx.$implicit;

          var product_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", product_r16.image, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](product_r16.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](variant_r19.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind4"](15, 5, variant_r19.price, "Rp ", "symbol-narrow", "1.0"));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"]("x " + variant_r19.quantity);
        }
      }

      function TransactionOrderDetailComponent_ng_template_1_div_89_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, TransactionOrderDetailComponent_ng_template_1_div_89_div_1_Template, 19, 10, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var product_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", product_r16.items);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "is-active": a0
        };
      };

      function TransactionOrderDetailComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TransactionOrderDetailComponent_ng_template_1_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r22.detailPesanan();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Detail Pesanan");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "Nomor Pesanan");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "Tanggal Pemesanan");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](24, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, TransactionOrderDetailComponent_ng_template_1_div_25_Template, 3, 0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, TransactionOrderDetailComponent_ng_template_1_div_26_Template, 3, 0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](27, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "Alamat Pengiriman");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](39, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](42, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](49);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](50, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](51, TransactionOrderDetailComponent_ng_template_1_span_51_Template, 8, 1, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](52, TransactionOrderDetailComponent_ng_template_1_span_52_Template, 2, 1, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](53, TransactionOrderDetailComponent_ng_template_1_span_53_Template, 9, 0, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](62, " Pembayaran Dikonfirmasi");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](64, " Pembayaran telah dikofirmasi dan ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](65, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](66, " akan diteruskan ke penjual ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](68);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](69, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](71, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](73, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](74, " Pesanan Diproses");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](76, " Pesanan Anda sedang diproses oleh penjual ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](77, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](78);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](79, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](80, TransactionOrderDetailComponent_ng_template_1_li_80_Template, 12, 9, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](81, TransactionOrderDetailComponent_ng_template_1_li_81_Template, 12, 8, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](82, TransactionOrderDetailComponent_ng_template_1_li_82_Template, 12, 4, "li", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](83, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](84, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](85, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](86, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](87, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](88);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](89, TransactionOrderDetailComponent_ng_template_1_div_89_Template, 2, 1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](90, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](91, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](92, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](93, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](94, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](95, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](96);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](97, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](98, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](99, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](100, "Ongkos Kirim");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](101, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](102, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](103, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](104);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](105, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](106, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](107, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](108, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](109);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](110, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](111, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](112, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](113, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](114, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](115, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](116, "Total Pembayaran");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](117, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](118, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](119, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](120, "Metode Pembayaran");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](121, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](122, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](123, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](124, "Asuransi Pengiriman");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](125, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](126, "h4", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](127, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](128);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](129, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](130, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](131, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](132);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](133, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](134, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](135, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](136);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](137, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.invoiceNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](24, 28, ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.createdDate, "dd MMMM yyyy, HH:mm:ss z"));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[0] == null ? null : ctx_r2.orderDetail.milestones[0].createdDate) != null && (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[1] == null ? null : ctx_r2.orderDetail.milestones[1].createdDate) == null);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[1] == null ? null : ctx_r2.orderDetail.milestones[1].createdDate) != null && (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[2] == null ? null : ctx_r2.orderDetail.milestones[2].createdDate) == null);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.customer == null ? null : ctx_r2.orderDetail.customer.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.customer == null ? null : ctx_r2.orderDetail.customer.phoneNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.customer == null ? null : ctx_r2.orderDetail.customer.detailAddress);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"]((ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.shipping == null ? null : ctx_r2.orderDetail.shipping.name) + " - " + (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.shipping == null ? null : ctx_r2.orderDetail.shipping.rateName));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" (Akan diterima pada ", ctx_r2.addDate(1, 3, ctx_r2.orderDetail.createdDate), ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[2] == null ? null : ctx_r2.orderDetail.milestones[2].createdDate) != null && (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.shipping == null ? null : ctx_r2.orderDetail.shipping.trackingId) != "" && (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.shipping == null ? null : ctx_r2.orderDetail.shipping.trackingId) != null && ((ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.shipping == null ? null : ctx_r2.orderDetail.shipping.awbNumber) == "" || (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.shipping == null ? null : ctx_r2.orderDetail.shipping.awbNumber) == null));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[2] == null ? null : ctx_r2.orderDetail.milestones[2].createdDate) != null && (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.shipping == null ? null : ctx_r2.orderDetail.shipping.awbNumber) != "" && (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.shipping == null ? null : ctx_r2.orderDetail.shipping.awbNumber) != null);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[2] == null ? null : ctx_r2.orderDetail.milestones[2].createdDate) != null && ((ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.shipping == null ? null : ctx_r2.orderDetail.shipping.trackingId) == "" || (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.shipping == null ? null : ctx_r2.orderDetail.shipping.trackingId) == null) && ((ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.shipping == null ? null : ctx_r2.orderDetail.shipping.awbNumber) == "" || (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.shipping == null ? null : ctx_r2.orderDetail.shipping.awbNumber) == null) && (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.shipping == null ? null : ctx_r2.orderDetail.shipping.digitalGoods) == false && ctx_r2.envUrl !== ctx_r2.envSimulatorNotExist);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](57, _c1, (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[0] == null ? null : ctx_r2.orderDetail.milestones[0].createdDate) !== null && (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[1] == null ? null : ctx_r2.orderDetail.milestones[1].createdDate) == null));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](69, 31, ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[0] == null ? null : ctx_r2.orderDetail.milestones[0].createdDate, "dd MMMM yyyy, HH:mm:ss"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](59, _c0, (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[0] == null ? null : ctx_r2.orderDetail.milestones[0].createdDate) !== null && (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[1] == null ? null : ctx_r2.orderDetail.milestones[1].createdDate) == null, (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[1] == null ? null : ctx_r2.orderDetail.milestones[1].createdDate) !== null && (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[2] == null ? null : ctx_r2.orderDetail.milestones[2].createdDate) == null));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](79, 34, ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[1] == null ? null : ctx_r2.orderDetail.milestones[1].createdDate, "dd MMMM yyyy, HH:mm:ss"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[0] == null ? null : ctx_r2.orderDetail.milestones[0].createdDate) != null && (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[1] == null ? null : ctx_r2.orderDetail.milestones[1].createdDate) != null);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[1] == null ? null : ctx_r2.orderDetail.milestones[1].createdDate) != null && (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[2] == null ? null : ctx_r2.orderDetail.milestones[2].createdDate) != null);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[2] == null ? null : ctx_r2.orderDetail.milestones[2].createdDate) != null && (ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.milestones[3] == null ? null : ctx_r2.orderDetail.milestones[3].createdDate) != null);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.merchant == null ? null : ctx_r2.orderDetail.merchant.image, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r2.orderDetail == null ? null : ctx_r2.orderDetail.merchant == null ? null : ctx_r2.orderDetail.merchant.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r2.orderDetail.products);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Total Harga (", ctx_r2.totalProduct, " Produk)");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind4"](105, 37, ctx_r2.orderDetail.payment.itemsPrice, "Rp ", "symbol-narrow", "1.0"));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind4"](110, 42, ctx_r2.orderDetail.payment.shippingPrice, "Rp ", "symbol-narrow", "1.0"));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind4"](129, 47, ctx_r2.orderDetail.payment.amount, "Rp ", "symbol-narrow", "1.0"));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r2.orderDetail.payment.channel);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind4"](137, 52, ctx_r2.orderDetail.payment.insurancePrice, "Rp ", "symbol-narrow", "1.0"));
        }
      }

      var _TransactionOrderDetailComponent = /*#__PURE__*/function () {
        function _TransactionOrderDetailComponent(activatedRoute, requestService, apiModelTranslatorService, errorService, alertService) {
          _classCallCheck(this, _TransactionOrderDetailComponent);

          this.activatedRoute = activatedRoute;
          this.requestService = requestService;
          this.apiModelTranslatorService = apiModelTranslatorService;
          this.errorService = errorService;
          this.alertService = alertService; //loading component

          this.loading = true;
          this.orderDetail = new _shared_models_order_detail_model__WEBPACK_IMPORTED_MODULE_0__.OrderDetail();
          this.envUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.envUrl;
          this.envSimulatorNotExist = _shared_constant_prop_constant__WEBPACK_IMPORTED_MODULE_5__.PropConstant.ENV_SIMULATOR_NOT_EXIST;
          this.totalProduct = 0;
        }

        _createClass(_TransactionOrderDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.activatedRoute.params.subscribe(function (params) {
                        _this.uiIdInvoice = params['uiIdInvoice'];
                        _this.businessName = params['businessName'];
                      });

                    case 2:
                      _context.next = 4;
                      return this.initLoad();

                    case 4:
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
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.checkOrder();

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "checkOrder",
          value: function checkOrder() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              var apiGetOrder, requestParam, order;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      apiGetOrder = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_2__.APIConstant.ORDER;
                      requestParam = new Map();
                      requestParam.set('uiId', this.uiIdInvoice);
                      _context3.next = 5;
                      return this.requestService.get(apiGetOrder, requestParam).toPromise().then(function (response) {
                        return _this2.apiModelTranslatorService.snakeToCamelCase(response);
                      }, function (error) {
                        _this2.errorService.getErrorApi(error);
                      });

                    case 5:
                      order = _context3.sent;

                      if (!(order.paymentStatus === _shared_enum_payment_status_enum__WEBPACK_IMPORTED_MODULE_3__.PaymentStatus.Paid)) {
                        _context3.next = 12;
                        break;
                      }

                      this.loading = false;
                      _context3.next = 10;
                      return this.getDetailOrder();

                    case 10:
                      _context3.next = 13;
                      break;

                    case 12:
                      //validate have redirect url or not
                      if (order.redirectUrl !== "" || order.redirectUrl !== null) {
                        window.location.href = order.redirectUrl;
                      } else {
                        this.alertService.setProps("Mohon maaf terjadi kesalahan, mohon coba kembali", true);
                      }

                    case 13:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "getDetailOrder",
          value: function getDetailOrder() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this3 = this;

              var apiGetOrderMerchant;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      apiGetOrderMerchant = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_2__.APIConstant.MERCHANT_ORDER + '/' + this.uiIdInvoice + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_2__.APIConstant.MERCHANT_ORDER_DETAIL;
                      _context4.next = 3;
                      return this.requestService.get(apiGetOrderMerchant, null).toPromise().then(function (response) {
                        _this3.orderDetail = _this3.apiModelTranslatorService.snakeToCamelCase(response); //sort based on order milestone

                        //sort based on order milestone
                        _this3.orderDetail.milestones = _this3.orderDetail.milestones.sort(function (a, b) {
                          return a.order - b.order;
                        });
                        _this3.totalProduct = _this3.orderDetail.products.reduce(function (total, product) {
                          var total_item = product.items.reduce(function (total2, item) {
                            return total2 + item.quantity;
                          }, 0);
                          return total + total_item;
                        }, 0);
                        return _this3.orderDetail;
                      }, function (error) {
                        _this3.errorService.getErrorApi(error);
                      });

                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "detailPesanan",
          value: function detailPesanan() {}
        }, {
          key: "addDate",
          value: function addDate(minDays, maxDays, createdDate) {
            var date;

            if (createdDate === undefined) {
              date = new Date();
            } else {
              date = new Date(createdDate);
            }

            var formatDateMinMax = 'dd';
            var formatMonthMinMax = 'MMMM';
            var locale = 'id'; // const locale = 'id-ID';

            var minDate = date.setDate(date.getDate() + minDays);
            var maxDate = date.setDate(date.getDate() + maxDays);
            var formattedMinDate = (0, _angular_common__WEBPACK_IMPORTED_MODULE_12__.formatDate)(minDate, formatDateMinMax, locale);
            var formattedMaxDate = (0, _angular_common__WEBPACK_IMPORTED_MODULE_12__.formatDate)(maxDate, formatDateMinMax, locale);
            var formattedMinMonth = (0, _angular_common__WEBPACK_IMPORTED_MODULE_12__.formatDate)(minDate, formatMonthMinMax, locale);
            var formattedMaxMonth = (0, _angular_common__WEBPACK_IMPORTED_MODULE_12__.formatDate)(minDate, formatMonthMinMax, locale);

            if (formattedMinMonth === formattedMaxMonth) {
              return formattedMinDate + ' - ' + formattedMaxDate + ' ' + formattedMaxMonth;
            } else {
              return formattedMinDate + ' ' + formattedMinMonth + ' - ' + formattedMaxDate + ' ' + formattedMaxMonth;
            }
          } //Upload image

        }, {
          key: "fileProgress",
          value: function fileProgress(fileInput, name) {
            this.fileData = fileInput.target.files[0];

            if (this.fileData !== undefined) {
              this.preview(name);
            }
          }
        }, {
          key: "preview",
          value: function preview(name) {
            var _this4 = this;

            var _a; // Show image preview


            var mimeType = (_a = this.fileData) === null || _a === void 0 ? void 0 : _a.type;

            if (mimeType.match('image.*') === null) {
              this.alertService.setProps("Failed Upload Type", true);
              return;
            } //validation > 1 mb


            if (this.fileData.size > 1000000) {
              this.alertService.setProps("Size more than 1 MB", true);
              return;
            }

            var reader = new FileReader();
            reader.readAsDataURL(this.fileData);

            reader.onload = function (_event) {
              var img = new Image();
              img.src = reader.result;

              img.onload = function () {
                var height = img.naturalHeight;
                var width = img.naturalWidth; //validation < 300px x 300px

                if (height < 300 || width < 300) {
                  _this4.alertService.setProps("Minimum width and height 300", true);
                } else {
                  _this4.previewImageProduct1 = reader.result;
                  _this4.imageToUpload1 = _this4.fileData;
                }
              };
            };
          }
        }, {
          key: "prosesPesanan",
          value: function prosesPesanan() {
            var _this5 = this;

            var apiOrderProcess = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_2__.APIConstant.MERCHANT_ORDER + '/' + this.uiIdInvoice + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_2__.APIConstant.MERCHANT_ORDER_PROCESS;
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
              title: 'Proses Pesanan?',
              text: 'Setelah klik proses pesanan, silahkan segera siapkan dan kemas pesanan Anda',
              showCancelButton: true,
              cancelButtonText: 'BATAL',
              cancelButtonColor: '#666666',
              reverseButtons: true,
              confirmButtonColor: '#E1251B',
              confirmButtonText: 'PROSES',
              showLoaderOnConfirm: true,
              customClass: {
                title: 'swal2-title-modal-medium'
              },
              preConfirm: function preConfirm() {
                return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                  var _this6 = this;

                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          _context6.next = 2;
                          return this.requestService.post(apiOrderProcess, null, null).toPromise().then(function (response) {
                            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                                while (1) {
                                  switch (_context5.prev = _context5.next) {
                                    case 0:
                                      _context5.next = 2;
                                      return this.getDetailOrder();

                                    case 2:
                                    case "end":
                                      return _context5.stop();
                                  }
                                }
                              }, _callee5, this);
                            }));
                          }, function (error) {
                            _this6.errorService.getErrorApi(error);
                          });

                        case 2:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6, this);
                }));
              }
            });
          }
        }, {
          key: "kirimPesanan",
          value: function kirimPesanan() {
            var _this7 = this;

            var apiOrderSend = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_2__.APIConstant.MERCHANT_ORDER + '/' + this.uiIdInvoice + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_2__.APIConstant.MERCHANT_ORDER_SEND;
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
              title: 'Kirim Pesanan - Dijemput Kurir',
              text: 'Mohon pastikan No. HP dan alamat toko yang telah Anda atur pada pengaturan Retail sudah benar dan akurat',
              showCancelButton: true,
              cancelButtonText: 'BATAL',
              cancelButtonColor: '#666666',
              reverseButtons: true,
              confirmButtonColor: '#E1251B',
              confirmButtonText: 'AJUKAN PENJEMPUTAN',
              showLoaderOnConfirm: true,
              customClass: {
                title: 'swal2-title-modal-medium'
              },
              preConfirm: function preConfirm() {
                return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                  var _this8 = this;

                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) {
                      switch (_context8.prev = _context8.next) {
                        case 0:
                          _context8.next = 2;
                          return this.requestService.post(apiOrderSend, null, null).toPromise().then(function (response) {
                            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                                while (1) {
                                  switch (_context7.prev = _context7.next) {
                                    case 0:
                                      _context7.next = 2;
                                      return this.getDetailOrder();

                                    case 2:
                                    case "end":
                                      return _context7.stop();
                                  }
                                }
                              }, _callee7, this);
                            }));
                          }, function (error) {
                            _this8.errorService.getErrorApi(error);
                          });

                        case 2:
                        case "end":
                          return _context8.stop();
                      }
                    }
                  }, _callee8, this);
                }));
              }
            });
          }
        }]);

        return _TransactionOrderDetailComponent;
      }();

      _TransactionOrderDetailComponent.ɵfac = function TransactionOrderDetailComponent_Factory(t) {
        return new (t || _TransactionOrderDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_service_request_service__WEBPACK_IMPORTED_MODULE_6__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_service_api_model_translator_service__WEBPACK_IMPORTED_MODULE_7__.ApiModelTranslatorService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__.ErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_service_alert_service__WEBPACK_IMPORTED_MODULE_9__.AlertService));
      };

      _TransactionOrderDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
        type: _TransactionOrderDetailComponent,
        selectors: [["app-transaction-order-detail"]],
        decls: 3,
        vars: 2,
        consts: [[4, "ngIf", "ngIfElse"], ["loaded", ""], [1, "center"], ["role", "status", 1, "spinner-border", "text-primary", "spinner-sm", "mr-5"], [1, "container-mobile"], [1, "row", "pt-3"], [1, "col-12"], ["id", "backButton", "type", "button", 1, "btn", 3, "click"], [1, "fas", "fa-arrow-left"], [2, "font-size", "16px", "font-weight", "bold"], [1, "row", "pl-3", "pr-3"], [1, "text-muted"], ["class", "pt-3", 4, "ngIf"], [4, "ngIf"], [1, "row", "p-3"], [1, "timeline", "timeline-vertical", "timeline-progress", "timeline-primary"], [3, "ngClass"], [1, "description"], [1, "desc_title"], [1, "desc_content"], [1, "desc_time", 2, "width", "160px"], [3, "ngClass", 4, "ngIf"], ["class", "is-finished", 4, "ngIf"], [1, "row", "pl-3", "pr-3", "mb-3"], [2, "height", "24px", "width", "24px", "border-radius", "50%", 3, "src"], [1, "ml-3", 2, "font-size", "16px", "font-weight", "bold"], [4, "ngFor", "ngForOf"], [1, "row"], [1, "col-6"], [1, "col-6", "text-right"], [1, "text-success"], [1, "pt-3"], ["id", "prosesPesanan", "type", "button", 1, "btn", "btn-primary", 3, "click"], ["id", "kirimPesanan", "type", "button", 1, "btn", "btn-primary", 3, "click"], [2, "text-align", "justify", "display", "block"], ["href", "https://shipper.id/tracking"], ["ngbTooltip", "Tracking Id Simulasi", 1, "fas", "fa-info-circle", "text-primary", "ml-2"], [1, "is-finished"], [1, "row", "mb-2", "px-3"], [1, "col-2"], [2, "height", "64px", "width", "100%", 3, "src"], [1, "col-10"], [2, "font-size", "16px"]],
        template: function TransactionOrderDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, TransactionOrderDetailComponent_div_0_Template, 3, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, TransactionOrderDetailComponent_ng_template_1_Template, 138, 62, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbTooltip],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CurrencyPipe],
        styles: [".center[_ngcontent-%COMP%] {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    position: fixed;\n    top:0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n}\n\n.container-mobile[_ngcontent-%COMP%] {\n    min-width: 360px;\n    max-width: 600px;\n    margin: -24px auto -45px;\n    background-color: rgb(255, 255, 255);\n    min-height: 100vh;\n    position: relative;\n}\n@media (max-width: 768px) {\n    .container-mobile[_ngcontent-%COMP%] {margin: -24px -24px -45px}\n}\n\nimg.image-container[_ngcontent-%COMP%] {\n    width: 110px;\n    height: 110px;\n    -o-object-fit: contain;\n       object-fit: contain;\n}\n\n.responsive-layout[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: flex-end;\n}\n.responsive-layout[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]:first-child, .responsive-layout[_ngcontent-%COMP%]{\n    margin-right: 16px;\n}\n@media (max-width: 768px) {\n    .responsive-layout[_ngcontent-%COMP%] {\n        display: block;\n    }\n    .responsive-layout[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%], .responsive-layout[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n        margin-top: 8px;\n        margin-bottom: 8px;\n    }\n}\n\n.bottom-card[_ngcontent-%COMP%] {\n    box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);\n    border-radius: 16px 16px 0px 0px;\n    margin: 0 0px;\n    padding-top: 24px;\n    padding-bottom: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zYWN0aW9uLW9yZGVyLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlCQUF5QjtBQUN6QjtJQUNJLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixLQUFLO0lBQ0wsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtBQUNoQjtBQUVBLDRCQUE0QjtBQUM1QjtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLG9DQUFvQztJQUNwQyxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxtQkFBbUIseUJBQXlCO0FBQ2hEO0FBRUEsaUNBQWlDO0FBQ2pDO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBbUI7T0FBbkIsbUJBQW1CO0FBQ3ZCO0FBRUEsNkNBQTZDO0FBQzdDO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7QUFDSjtBQUVBLGdCQUFnQjtBQUNoQjtJQUNJLDRDQUE0QztJQUM1QyxnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEIiLCJmaWxlIjoidHJhbnNhY3Rpb24tb3JkZXItZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBjc3MgZm9yIGxvYWRpbmcgcGFnZSAqL1xuLmNlbnRlciB7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDowO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLyogY3NzIGZvciBjdXN0b21lciBmYWNpbmcgKi9cbi5jb250YWluZXItbW9iaWxlIHtcbiAgICBtaW4td2lkdGg6IDM2MHB4O1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgbWFyZ2luOiAtMjRweCBhdXRvIC00NXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5jb250YWluZXItbW9iaWxlIHttYXJnaW46IC0yNHB4IC0yNHB4IC00NXB4fVxufVxuXG4vKiBjc3MgZm9yIGltYWdlIGNvbnRhaW5lciBwYWdlICovXG5pbWcuaW1hZ2UtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4vKiBsYXlvdXRpbmcgZm9yIHBpbGloIGZvdG8gZGFuIGdhbWJhciBmb3RvICovXG4ucmVzcG9uc2l2ZS1sYXlvdXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5yZXNwb25zaXZlLWxheW91dCAuZm9ybS1ncm91cDpmaXJzdC1jaGlsZCwgLnJlc3BvbnNpdmUtbGF5b3V0e1xuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5yZXNwb25zaXZlLWxheW91dCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAucmVzcG9uc2l2ZS1sYXlvdXQgLmZvcm0tZ3JvdXAsIC5yZXNwb25zaXZlLWxheW91dCAuZm9ybS1ncm91cCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cbn1cblxuLyogYm90dG9tIGNhcmQgKi9cbi5ib3R0b20tY2FyZCB7XG4gICAgYm94LXNoYWRvdzogMHB4IC0ycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweCAxNnB4IDBweCAwcHg7XG4gICAgbWFyZ2luOiAwIDBweDtcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    26791:
    /*!***********************************************************************!*\
      !*** ./src/app/modules/transaction-order/transaction-order.module.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TransactionOrderModule": function TransactionOrderModule() {
          return (
            /* binding */
            _TransactionOrderModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _transaction_order_detail_transaction_order_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./transaction-order-detail/transaction-order-detail.component */
      36086);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _transaction_order_detail_transaction_order_detail_component__WEBPACK_IMPORTED_MODULE_0__.TransactionOrderDetailComponent,
        pathMatch: 'full'
      }];

      var _TransactionOrderModule = function _TransactionOrderModule() {
        _classCallCheck(this, _TransactionOrderModule);
      };

      _TransactionOrderModule.ɵfac = function TransactionOrderModule_Factory(t) {
        return new (t || _TransactionOrderModule)();
      };

      _TransactionOrderModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _TransactionOrderModule
      });
      _TransactionOrderModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbTooltipModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_TransactionOrderModule, {
          declarations: [_transaction_order_detail_transaction_order_detail_component__WEBPACK_IMPORTED_MODULE_0__.TransactionOrderDetailComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbTooltipModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_modules_transaction-order_transaction-order_module_ts-es5.js.map