(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkrvn_retail_ui"] = self["webpackChunkrvn_retail_ui"] || []).push([["src_app_modules_terms-and-condition_terms-and-condition_module_ts"], {
    /***/
    33941:
    /*!***************************************************************************!*\
      !*** ./src/app/modules/terms-and-condition/terms-and-condition.module.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TermsAndConditionModule": function TermsAndConditionModule() {
          return (
            /* binding */
            _TermsAndConditionModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _tnc_customer_tnc_customer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tnc-customer/tnc-customer.component */
      49664);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _tnc_customer_tnc_customer_component__WEBPACK_IMPORTED_MODULE_0__.TncCustomerComponent,
        pathMatch: 'full'
      }];

      var _TermsAndConditionModule = function _TermsAndConditionModule() {
        _classCallCheck(this, _TermsAndConditionModule);
      };

      _TermsAndConditionModule.ɵfac = function TermsAndConditionModule_Factory(t) {
        return new (t || _TermsAndConditionModule)();
      };

      _TermsAndConditionModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _TermsAndConditionModule
      });
      _TermsAndConditionModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_TermsAndConditionModule, {
          declarations: [_tnc_customer_tnc_customer_component__WEBPACK_IMPORTED_MODULE_0__.TncCustomerComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    49664:
    /*!************************************************************************************!*\
      !*** ./src/app/modules/terms-and-condition/tnc-customer/tnc-customer.component.ts ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TncCustomerComponent": function TncCustomerComponent() {
          return (
            /* binding */
            _TncCustomerComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _TncCustomerComponent = /*#__PURE__*/function () {
        function _TncCustomerComponent() {
          _classCallCheck(this, _TncCustomerComponent);
        }

        _createClass(_TncCustomerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _TncCustomerComponent;
      }();

      _TncCustomerComponent.ɵfac = function TncCustomerComponent_Factory(t) {
        return new (t || _TncCustomerComponent)();
      };

      _TncCustomerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _TncCustomerComponent,
        selectors: [["app-tnc-customer"]],
        decls: 412,
        vars: 0,
        consts: [["content", "text/html; charset=UTF-8", "http-equiv", "content-type"], [1, "c21"], ["alt", "", "src", "./assets/images/header_terms_condition.png", "title", "", 2, "width", "209.89px", "height", "73.46px", "margin-left", "0.00px", "margin-top", "0.00px", "transform", "rotate(0.00rad) translateZ(0px)", "-webkit-transform", "rotate(0.00rad) translateZ(0px)"], [1, "c17"], [1, "c22"], [1, "c6"], [1, "c5"], [1, "c3"], ["href", "www.jokul.doku.com"], [1, "c6", "c8"], [1, "c23"], [2, "overflow", "hidden", "display", "inline-block", "margin", "0.00px 0.00px", "border", "0.00px solid #000000", "transform", "rotate(0.00rad) translateZ(0px)", "-webkit-transform", "rotate(0.00rad) translateZ(0px)", "width", "798.33px", "height", "99.13px"], ["alt", "", "src", "./assets/images/footer_terms_condition.jpg", "title", "", 2, "width", "798.33px", "height", "99.13px", "margin-left", "0.00px", "margin-top", "0.00px", "transform", "rotate(0.00rad) translateZ(0px)", "-webkit-transform", "rotate(0.00rad) translateZ(0px)"]],
        template: function TncCustomerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "body", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Syarat dan Ketentuan Penggunaan Platform Jokul Retail");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Kami, DOKU (PT. Nusa Satu Inti Artha), sebuah perseroan terbatas yang didirikan berdasarkan hukum Indonesia, dalam Syarat dan Ketentuan (\u201CS&K\u201D) ini bertindak sebagai Pihak Pertama. Anda akan dianggap sebagai Pihak Kedua berdasarkan Syarat dan Ketentuan ini. Pihak Pertama dan Pihak Kedua secara kolektif disebut sebagai Para Pihak dan masing-masing sebagai Pihak.\nPihak Pertama atas diskresinya sendiri yang mutlak, berhak untuk mengamandemen, mengubah atau menambahkan S&K setiap saat (dengan tunduk pada hukum) dalam jumlah yang tidak terbatas dan tanpa batasan dengan menampilkan versi revisi S&K ini, dengan ketentuan bahwa Pihak Pertama telah menyampaikan pemberitahuan tujuh (7) hari kalender sebelumnya (\u201CPeriode Pemberitahuan\u201C) atau Periode Pemberitahuan yang disetujui oleh Pihak Pertama dan Pihak Kedua secara tertulis sebelum tanggal efektif perubahan, modifikasi atau penambahan pemberitahuan tersebut melalui surat elektronik atau cara tertulis lainnya. Setelah menerima pemberitahuan tersebut dari Pihak Pertama, Pihak Kedua berhak untuk segera mengakhiri Perjanjian Layanan (\u201CPerjanjian\u201D) dengan Pihak Pertama dengan mengirimkan pemberitahuan tertulis kepada Pihak Pertama selama masa Periode Pemberitahuan dengan maksud untuk mengakhiri Perjanjian. Setelah berakhirnya Periode Pemberitahuan dan sejauh tidak ada pemberitahuan yang diterima oleh Pihak Pertama, Pihak Kedua dengan ini setuju untuk menerima dan terikat dengan amandemen, perubahan atau penambahan yang dilakukan terhadap S&K ini. S&K yang telah diamandemen, diubah, atau ditambah akan menggantikan semua versi terdahulu.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Dengan menggunakan jasa-jasa dan fitur-fitur Pihak Pertama, dengan ini Pihak Kedua setuju untuk menerima dan tunduk pada Kebijakan Privasi Pihak Pertama. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "S&K ini merupakan satu dokumen dengan Perjanjian dan tidak dapat ditafsirkan secara terpisah, kecuali jika secara khusus ditetapkan lain berdasarkan S&K ini dan/atau Perjanjian. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Saat Anda mendaftar dan/atau menggunakan segala fasilitas yang dimiliki oleh Jokul Retail, maka angga telah dianggap sudah selesai membaca, mengerti, memahami dan menyetujui semua isi dalam Syarat & Ketentuan yang ditetapkan Jokul Retail. Jika Anda tidak menyetujui salah satu, sebagian, atau seluruh isi Syarat & ketentuan ini, maka Anda dipersilahkan untuk meninggalkan penggunaan Layanan Jokul Retail. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "DEFINISI");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "PT. Nusa Satu Inti Artha (DOKU) adalah sebuah entitas badan usaha yang bergerak di bidang ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Financial Service");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, ", yang selanjutnya dikenal sebagai DOKU.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Jokul adalah layanan ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Payment Gateway");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " yang dimiliki oleh PT. Nusa Satu Inti Artha (DOKU).");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Situs Jokul adalah ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "www.jokul.doku.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Pihak Pertama yang dimaksud dalam dokumen ini adalah ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Merchant");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Pihak Kedua yang dimaksud dalam dokumen ini adalah Pembeli.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Jokul Retail merupakan suatu layanan berada dalam Jokul yang berbentuk piranti lunak, dengan fungsi utama ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "merchant");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " bisa membuat ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " produk dan mendistribusikannya secara luas untuk selanjutnya bisa dilakukan mekanisme transaksi di dalamnya.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Merchant");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " berfungsi sebagai pihak yang menjualkan barang di dalam platform Jokul Retail.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Pembeli berfungsi sebagai pihak yang membeli barang dari Merchant melalui platform Jokul Retail.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Barang yang diperdagangkan adalah yang memiliki wujud yang dapat diperjualbelikan secara luas dan tidak memiliki pertentangan dengan syarat ketentuan yang diatur dan/atau segala ketentuan hukum yang berlaku di Indonesia.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Transaksi adalah setiap aktivitas jual dan beli yang melalui ataupun menggunakan platform Jokul Retail.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Mitra pihak ketiga adalah yang memiliki hubungan dengan Jokul Retail dalam pengiriman barang.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Layanan Jokul Retail berbentuk digital dengan platform ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "website");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Hari Kalendar merupakan setiap hari yang dimulai pada hari senin hingga minggu yang dimulai dari pukul 00.00 hingga 23.59 setiap harinya selama 24 (dua puluh empat) jam.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Pihak Ketiga merupakan pihak selain kami (Jokul Retail), penyedia layanan atau yang terafiliasi dengan kami namun tidak memiliki hubungan langsung dengan kami.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Syarat dan Ketentuan berarti segala aturan yang diatur di dalam dokumen ini.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "PENGGUNAAN LAYANAN JOKUL RETAIL");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Segala aktivitas penggunaan dan akses terhadap layanan Jokul Retail oleh Anda wajib tunduk terhadap segala ketentuan yang berlaku di dalam dokumen ini, Anda memiliki kewenangan penuh untuk melanjutkan atau menghentikan dalam menggunakan layanan Jokul Retail.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Kami menyediakan sebuah ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "landing page");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " khusus untuk ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "merchant");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " bisa bertransaksi dengan pelanggan. Saat anda menggunakan ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "landing page");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " ini, wajib untuk mengikuti syarat dan ketentuan beserta larangan yang ditetapkan dalam dokumen ini.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Anda dilarang untuk menjual barang atau melakukan proses transaksi yang terlarang baik secara hukum yang berlaku di Indonesia maupun yang diatur dalam dokumen ini.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Anda wajib memahami sepenuhnya bahwa Pajak Penghasilan Anda ataupun yang terkait akan dilaporkan dan diurus sendiri oleh Anda sesuai dengan ketentuan pajak yang berlaku dalam peraturan perundang-undangan di Indonesia.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "AKUN ANDA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Akun yang anda gunakan dalam membuat ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "link product");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " adalah akun yang sama saat anda daftarkan di platform Jokul.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Anda tidak didapat mengubah nama toko atau alamat website milik toko anda selama anda menggunakan layanan Jokul Retail.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "HARGA BARANG & PENGIRIMAN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Harga barang adalah harga yang ditetapkan oleh penjual.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Harga pengiriman adalah harga yang ditetapkan oleh pihak ketiga penyedia jasa pengiriman barang.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "TRANSAKSI PEMBAYARAN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Transaksi pembayaran dilakukan didalam platform Jokul Retail.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Setiap order pesanan yang dibuat memiliki jangka waktu 2 (jam) masa kadaluarsa ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " pembayaran.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "PENGIRIMAN BARANG");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Anda memiliki akses untuk dapat memilih kurir pengiriman dan Anda memahami bahwa Anda tidak dapat mengubah kurir pengiriman Barang setelah Anda melakukan konfirmasi pengiriman. Anda memahami bahwa pengiriman Barang dari Penjual kepada Anda dilakukan oleh Mitra Pihak Ketiga Penyedia Layanan pengiriman Barang yang telah bekerja sama dengan Kami.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Setiap ketentuan yang terkait dengan proses pengiriman Barang adalah sepenuhnya ditentukan oleh Mitra Pihak Ketiga Penyedia Layanan pengiriman Barang. Anda wajib memenuhi ketentuan yang ditetapkan oleh Mitra Pihak Ketiga Penyedia Layanan pengiriman Barang yang dapat Anda lihat dengan cara mengakses situs web masing-masing Mitra Pihak Ketiga Penyedia Layanan pengiriman Barang tersebut.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Anda memahami dan mengerti bahwa Kami dan/atau Mitra Pihak Ketiga Penyedia Layanan pengiriman Barang telah melakukan usaha sebaik mungkin dalam memberikan informasi tarif pengiriman kepada Anda berdasarkan lokasi secara akurat, namun Kami dan/atau Mitra Pihak Ketiga Penyedia Layanan pengiriman Barang tidak dapat menjamin keakuratan data tersebut dengan lokasi Anda yang sebenarnya.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Anda wajib untuk mengisi alamat dan detail pengiriman dengan benar dan lengkap sesuai dengan lokasi pengiriman yang Anda kehendaki. Anda memahami sepenuhnya bahwa kesalahan dalam pengisian alamat dan detail pengiriman Barang yang menyebabkan Barang menjadi gagal kirim adalah sepenuhnya tanggung jawab Anda dan Anda melepaskan Kami dari seluruh kerugian dan/atau tanggung jawab sehubungan dengan pengiriman yang gagal karena kesalahan Anda tersebut.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Anda memiliki kebebasan memilih untuk menggunakan atau tidak menggunakan fitur asuransi pengiriman Barang yang Kami sediakan di dalam Layanan Jokul Retail. Fitur asuransi akan otomatis melekat pada Barang yang Anda pesan dalam hal Barang tersebut memiliki nilai tertentu yang ditentukan oleh Kami dan/atau Mitra Pihak Ketiga Penyedia Layanan pengiriman Barang.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "PEMBATASAN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "DOKU hanya dapat menyediakan laporan Transaksi milik Merchant untuk Transaksi yang terjadi maksimal 1 (satu) tahun sebelumnya terhitung sejak tanggal Transaksi (jika diperlukan).");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Merchant wajib memberitahukan kepada DOKU melalui surat pemberitahuan minimal 14 (empat belas) Hari Kerja sebelumnya dalam hal Merchant akan melakukan perubahan alamat internet protocol (selanjutnya disebut \u201CAlamat IP\u201D) dan/atau domain Website dan/atau Aplikasi Merchant.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Dalam hal Merchant tidak memberitahukan kepada DOKU perihal perubahan Alamat IP dan/atau domain Website dan/atau Aplikasi sebagaimana diatur dalam ayat (2) Pasal ini, maka segala bentuk kerusakan, kegagalan, kerugian yang terjadi akibat perubahan tersebut bukan menjadi tanggung jawab DOKU melainkan tanggung jawab Merchant sepenuhnya.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Apabila DOKU mengetahui Merchant melakukan perubahan jenis usaha dimana usaha yang dimaksud bertentangan/melanggar dengan norma-norma kesusilaan, kesopanan, undang-undang dan peraturan-peraturan lainnya yang berlaku di Indonesia termasuk tetapi tidak terbatas kepada peraturan yang terkait dengan perbankan baik di Indonesia maupun dari Visa dan/atau Mastercard, HAKI, teknologi dan informatika, telekomunikasi, maka DOKU berhak untuk mengakhiri Perjanjian setiap saat secara sepihak dengan pemberitahuan tertulis kepada Merchant 7 (tujuh) hari kalender sebelum pelaksanaan.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "DOKU berhak menon-aktifkan MID milik Merchant dalam hal Merchant terbukti melakukan penyalahgunaan terhadap MID yang dimiliki oleh Merchant.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "CHARGEBACK DAN REFUND");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Dalam hal terdapat permintaan Chargeback dan Refund, Para Pihak sepakat untuk mematuhi syarat dan ketentuan pada Pasal ini, yaitu:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Proses Chargeback hanya dimungkinkan untuk Transaksi menggunakan kartu kredit.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Sanggahan merupakan proses pelaporan berpotensi menjadi Chargeback dari Pelanggan kepada issuer yang kemudian diteruskan kepada Acquirer (selanjutnya disebut \u201CSanggahan\u201D).");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Para Pihak akan berkoordinasi untuk menyelesaikan Sanggahan dan DOKU berhak meminta informasi yang diperlukan kepada Merchant terkait dengan proses penyelesaian tersebut dan Merchant wajib memberikan support selama proses Sanggahan.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "DOKU berhak menyampaikan dokumen-dokumen terkait Sanggahan kepada Acquirer, termasuk namun tidak terbatas pada detail Transaksi kartu kredit dan log Transaksi.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Jika diperlukan, Merchant akan menyampaikan dokumen terkait Sanggahan kepada Acquirer, termasuk namun tidak terbatas pada surat pernyataan Merchant atas Transaksi Sanggahan, tanda bukti pengiriman dan penerimaan Produk.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Jika Sanggahan terbukti menjadi Chargeback, maka (a) Dalam hal Direct Merchant, Acquirer akan memotong dana dari rekening milik Merchant sejumlah yang akan dikreditkan kembali kepada rekening Pelanggan sebagai akibat dari Chargeback dan/atau (b) dalam hal Layanan Aggregator, DOKU akan memotong dana untuk dikreditkan kembali kepada rekening Pelanggan sebagai akibat dari Chargeback dalam Settlement berikutnya kepada Merchant. Bila dana yang didepositkan pada DOKU dalam rekening penampungan tidak mencukupi untuk melakukan pemotongan tersebut, maka Merchant harus membayarkan kepada DOKU sejumlah yang dikreditkan kembali kepada Pelanggan sebagai akibat dari Chargeback dalam 7 (tujuh) Hari Kerja setelah diberitahukan mengenai Chargeback dan perlunya membayarkan kepada DOKU.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "DOKU hanya akan memproses permintaan Chargeback yang datang dari Acquirer, dan DOKU berhak menolak permintaan Chargeback yang datang selain dari Acquirer.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Apabila Merchant tidak menggunakan jasa tambahan Layanan EDU, maka segala bentuk Transaksi terkait Chargeback yang dikarenakan fraud oleh pihak ketiga bukan menjadi tanggung jawab DOKU.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Merchant, baik menggunakan jasa tambahan layanan EDU atau tidak, berhak melakukan pembatalan transaksi dari Pelanggan jika ada kecurigaan bahwa transaksi yang terjadi berpotensi merugikan merchant di kemudian hari. Informasi pembatalan disampaikan ke pihak DOKU untuk dilakukan proses pembatalan (void) terhadap transaksi yang dicurigai tersebut. Jika transaksi sudah terlanjur berjalan, maka proses Refund akan dilakukan sesuai dengan ketentuan yang ditetapkan dalam Pasal ini.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "DOKU hanya akan tunduk pada instruksi Merchant untuk memproses Refund.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "Dalam hal Layanan Aggregator, Merchant dengan ini memberikan persetujuan kepada DOKU untuk menggunakan jumlah Settlement untuk tujuan Refund. Pemotongan Refund akan dilakukan pada Settlement pada bulan berikutnya. Apabila jumlah Settlement pada bulan berikutnya tidak mencukupi untuk pemotongan Refund maka Merchant harus membayarkan sejumlah Refund atau sejumlah kekurangan tersebut dalam 7 (tujuh) Hari Kerja kepada DOKU.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "DOKU tidak akan melakukan Refund atas MDR dan/atau biaya lainnya, hanya dari jumlah penuh pendapatan Transaksi.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "ATURAN PERPAJAKAN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Seluruh kewajiban pajak yang timbul sehubungan dengan pelaksanaan Perjanjian ini merupakan tanggung jawab dan beban masing-masing Pihak sesuai dengan ketentuan perundang-undangan yang berlaku di Indonesia, kecuali jika disepakati lain secara tertulis oleh Para Pihak.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "INFORMASI RAHASIA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, " Para Pihak sepakat bahwa Informasi Rahasia adalah data-data dan informasi-informasi apapun baik bersifat teknis maupun komersial dalam bentuk apapun (selanjutnya disebut \u201CInformasi Rahasia\u201D). ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, " Para Pihak mengakui bahwa segala bentuk Informasi Rahasia yang dimiliki masing-masing Pihak atas Perjanjian ini adalah bernilai. Masing-masing Pihak wajib menjaga kerahasiaan informasi dan mempertahankan sifat rahasia dari Informasi Rahasia tersebut baik yang bersifat lisan maupun tertulis yang diketahui oleh Para Pihak menjadi rahasia atau menjadi milik salah satu Pihak secara alami. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, " Para Pihak wajib melakukan semua tindakan pencegahan yang wajar untuk mencegah terjadinya kelalaian dalam penggunaan, pembuatan salinan atau pengalihan Informasi Rahasia tersebut serta menjamin untuk menyimpan asli maupun fotokopi dari dokumen-dokumen atau surat-surat dalam bentuk apapun untuk keperluan dokumentasi dan akan senantiasa menjaga kerahasiaannya. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](277, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, " Informasi dalam Perjanjian maupun S&K ini tidak termasuk Informasi Rahasia: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, " apabila Informasi Rahasia tersebut merupakan informasi milik umum karena sudah dibuka kepada umum oleh Pihak pemilik Informasi Rahasia tersebut; atau ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, " dimana berdasarkan ketentuan hukum dan peraturan perundang-undangan yang berlaku atau suatu penetapan putusan pengadilan atau arbitrase, harus disampaikan kepada pihak ketiga dan sebelum Informasi Rahasia tersebut disampaikan, Pihak Penerima Informasi Rahasia terlebih dahulu wajib memberitahukan penyampaian Informasi Rahasia tersebut secara tertulis kepada Pihak Pemberi Informasi Rahasia. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, " Apabila diperlukan, Merchant akan memberikan informasi mengenai data Pelanggan kepada DOKU untuk selanjutnya informasi tersebut diberikan oleh DOKU kepada Acquirer berdasarkan persetujuan dari Merchant. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, " DOKU menjamin keamanan informasi data milik Pelanggan dan/atau Transaksi sesuai dengan standar layanan perbankan yang berlaku yaitu Payment Card Industry Data Security Standard (PCI-DSS). ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](289, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "KEGIATAN YANG DILARANG");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](293, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, " Kategori usaha dan kegiatan berikut dilarang untuk menggunakan Layanan Pihak Pertama (\u201CKegiatan Yang Dilarang\u201D). Kategori Kegiatan Yang Dilarang dapat berubah dari waktu ke waktu seiring dengan perubahan peraturan perundangan-undangan, dan secara sepihak Pihak Pertama dapat mengubahnya tanpa memberikan notifikasi terlebih dahulu kepada Pihak Kedua. Dalam keadaan tertentu, daftar kegiatan di bawah memenuhi syarat untuk diproses dengan mendapatkan persetujuan sebelumnya dari Pihak Pertama. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, " Pihak Kedua secara hukum mengakui dan mengkonfirmasi persetujuan atau menyepakati Pihak Kedua tidak akan mempergunakan Layanan untuk menerima pembayaran terkait dengan bisnis-bisnis, kegiatan usaha, praktik usaha, atau transaksi berikut, kecuali telah terlebih dahulu menerima persetujuan secara tertulis dari Pihak Pertama. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](299, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "Pelanggaran Hak Kekayaan Intelektual\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](303, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, " Hak kekayaan intelektual atau pelanggaran hak milik ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "Penjualan, distribusi, atau akses ke musik, film, perangkat lunak bajakan, atau material-material yang berlisensi tanpa memperoleh izin dari pemegang hak; produk atau jasa apapun yang secara langsung melanggar atau memfasilitasi pelanggaran terhadap merek, hak cipta, rahasia dagang, atau hak milik atau hak privasi dari pihak ketiga;");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, " Barang palsu atau tidak resmi ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "Penjualan atau penjualan kembali barang bermerek atau barang-barang designer atau jasa; penjualan barang atau jasa yang diimpor atau diekspor secara tidak sah;");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](315, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "Importasi barang yang dilarang atau dibatasi ke Indonesia\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](319, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, " Produksi industri percetakan ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "Buku majalah dan segala jenis barang serakan lainnya dan kertas dalam bahasa Indonesia ataupun bahasa daerah Indonesia, barang cetakan buku, majalah leaflet, brosur surat kabar yang tertulis dalam huruf/aksara dan bahasa Cina, barang-barang offset dari kertas untuk Pembungkus rokok dan etika obat-obatan yang berbahasa Indonesia maupun yang sekedar menggunakan bahasa asing.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, " Bahan-bahan kimia tertentu ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "Produk turunan yang mengandung pengganti halogen dan garamnya, Pestisida, polimer etilena/stirena/vinil klorida.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, " Pakaian bekas ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "Tidak termasuk barang bawaan pribadi penumpang.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](336, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "Ekspor barang yang dilarang atau dibatasi dari Indonesia\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](340, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, " Produk pertanian, kehutanan, perikanan dan kelautan, industri dan pertambangan ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "Standar Indonesia Rubber (SIR), beberapa Jenis Produk Kayu dan rotan, beberapa Jenis Ikan (Anak Ikan Arwana, benih ikan Botia hidup, Ikan botia hidup, Ikan Napoleon Wrasse, benih ikan sidat, calon induk dan induk udang Penaeidae, udang Jerbung, udang kuruma Ebi, Udang Galah), sisa dan skrap fero, ingot hasil peleburan kembali besi atau baja; Bijih timah, terak timah, tailing, batu mulia tidak termasuk intan dan batu semi mulia, batu mulia atau batu semi mulia sintetik.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, " Spesies yang masuk dalam daftar CITES ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "Mamalia (primata, paus, lumba-lumba, pesut, gajah, badak, harimau, beruang madu, sigung, landak, Darah Orangutan, Kambing Sumatera), Burung (Elang, kakatua, burung beo, kasuari, cendrawasih, dll), Reptil (kura-kura, ular, buaya, kadal monitor; empedu, alat kelamin, gigi dan darah buaya) Serangga (kupu-kupu tertentu), Ikan (Arwana Merah, Coelacanth, Belida, Hiu Sentani, Stingray Sentani, penyapu gua, dll.) Bivalviax (Kepiting kelapa, cassuta cornuta, kima raksasa, kima raksasa) ) Orchidaceae, Nephentaceae & Palmae (Anggrek dan pohon palem tertentu), Dipterocarpaceae (tanaman dan biji Tengkawang), Rafflesiaceae");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, " Cagar Budaya ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "Cagar budaya berupa benda cagar budaya, bangunan cagar budaya, dan/atau struktur cagar budaya yang memenuhi kriteria berusia lima puluh tahun atau lebih mewakili masa gaya paling singkat berusia lima puluh tahun memiliki arti khusus bagi sejarah, ilmu pengetahuan, pendidikan, agama, dan/atau kebudayaan dan memiliki nilai budaya penguatan kepribadian bangsa.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](357, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "Barang dan layanan yang melanggar Hukum\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](361, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, " Perjudian ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "Lotre (togel); biaya ikut serta lelang (yang tidak bisa dikembalikan); taruhan olahraga atau voor/pur; undian; permainan keberuntungan (roulette, lempar dadu, mesin judi dan sejenisnya) permainan kasino (Keno, Pi Gow Poker, Black Jack (21), Poker dan sejenisnya)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, " Konten dan layanan dewasa ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "Materi pornografi dan materi berbau cabul lainnya (termasuk literatur, gambar dan media lain); mainan atau produk dengan orientasi seksual; portal yang menawarkan layanan berkaitan dengan sex seperti prostitusi, pendampingan, bayar per tayang dengan fitur chat langsung, pengantin pesanan (mail-order brides), portal layanan kencan yang vulgar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, " Senjata api dan bahan peledak ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "Penjualan, distribusi, impor, ekspor pistol, amunisinya dan bahan-bahan peledak.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, " Narkotika dan obat-obatan psikotropika ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "Penjualan, distribusi, impor, ekspor secara melawan hukum atas Narkotika Golongan I (Tanaman Papaver Somniferum L, Opium mentah, Opium masak, tanaman koka, tanaman ganja, metamfetamina, dan sejenisnya), Narkotika Golongan II (alphacetylmethadol, betameprodina, dekstromoramida, hidromorfon, trimeperidine, dan sejenisnya), Narkotika Golongan III (Asetildihidrokodeina, etilmorfina, propiram, dan sejenisnya).");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, " Mata uang virtual ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, "Mata uang virtual yang dapat dimonetisasi (dijadikan uang), dijual kembali, atau dikonversi ke produk atau layanan fisik atau digital atau dengan cara lainnya keluar dari dunia virtual (contoh., Bitcoin); penjualan atas nilai yang tersimpan atau kredit yang dipertahankan, diterima dan diterbitkan oleh orang lain selain dari si penjual.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](388, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "LAIN-LAIN\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](392, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "Kebijakan Syarat dan Ketentuan ini berlaku sejak tanggal 29 Juni 2021. Syarat dan Ketentuan ini mungkin diubah dan/atau diperbaharui dari waktu ke waktu tanpa pemberitahuan sebelumnya. DOKU menyarankan agar Anda membaca secara seksama dan memeriksa Syarat dan Ketentuan ini dari waktu ke waktu untuk mengetahui perubahan apapun. Dengan tetap menggunakan layanan Jokul Retail, maka Merchant dan Customer dianggap menyetujui pembaharuan yang dilakukan terhadap Syarat dan Ketentuan ini.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](396, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, "CARA MENGHUBUNGI KAMI\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](400, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "Anda dapat menghubungi Kami melalui surat elektronik ke care@doku.com. Semua korespondensi akan dicatat, direkam atau disimpan untuk arsip Kami.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](404, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, "Saya telah membaca dan mengerti seluruh Syarat dan Ketentuan ini dan konsekuensinya dan dengan ini menerima setiap hak dan kewajibannya\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](411, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0bmMtY3VzdG9tZXIuY29tcG9uZW50LmNzcyJ9 */", "@import url('https://themes.googleusercontent.com/fonts/css?kit=fpjTOVmNbO4Lz34iLyptLUXza5VhXqVC6o75Eld_V98');ol.lst-kix_3vvwpd5ws4cs-8[_ngcontent-%COMP%]{list-style-type:none}ul.lst-kix_bmkl8eojlffe-2[_ngcontent-%COMP%]{list-style-type:none}ol.lst-kix_3vvwpd5ws4cs-5[_ngcontent-%COMP%]{list-style-type:none}ol.lst-kix_3vvwpd5ws4cs-4[_ngcontent-%COMP%]{list-style-type:none}ul.lst-kix_list_1-0[_ngcontent-%COMP%]{list-style-type:none}ol.lst-kix_3vvwpd5ws4cs-7[_ngcontent-%COMP%]{list-style-type:none}ol.lst-kix_3vvwpd5ws4cs-6[_ngcontent-%COMP%]{list-style-type:none}ol.lst-kix_3vvwpd5ws4cs-1[_ngcontent-%COMP%]{list-style-type:none}ul.lst-kix_2k4rljbp9ra4-2[_ngcontent-%COMP%]{list-style-type:none}ol.lst-kix_3vvwpd5ws4cs-0[_ngcontent-%COMP%]{list-style-type:none}ul.lst-kix_2k4rljbp9ra4-3[_ngcontent-%COMP%]{list-style-type:none}ol.lst-kix_3vvwpd5ws4cs-3[_ngcontent-%COMP%]{list-style-type:none}ul.lst-kix_2k4rljbp9ra4-4[_ngcontent-%COMP%]{list-style-type:none}ol.lst-kix_3vvwpd5ws4cs-2[_ngcontent-%COMP%]{list-style-type:none}ul.lst-kix_2k4rljbp9ra4-5[_ngcontent-%COMP%]{list-style-type:none}ul.lst-kix_2k4rljbp9ra4-6[_ngcontent-%COMP%]{list-style-type:none}ul.lst-kix_2k4rljbp9ra4-7[_ngcontent-%COMP%]{list-style-type:none}ol.lst-kix_list_3-1.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_list_3-1 0}ul.lst-kix_2k4rljbp9ra4-8[_ngcontent-%COMP%]{list-style-type:none}.lst-kix_u9fhgxabpg91-8[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_u9fhgxabpg91-8}ul.lst-kix_2k4rljbp9ra4-0[_ngcontent-%COMP%]{list-style-type:none}ul.lst-kix_2k4rljbp9ra4-1[_ngcontent-%COMP%]{list-style-type:none}ul.lst-kix_list_1-3[_ngcontent-%COMP%]{list-style-type:none}ul.lst-kix_list_1-4[_ngcontent-%COMP%]{list-style-type:none}ul.lst-kix_list_1-1[_ngcontent-%COMP%]{list-style-type:none}ul.lst-kix_list_1-2[_ngcontent-%COMP%]{list-style-type:none}ul.lst-kix_list_1-7[_ngcontent-%COMP%]{list-style-type:none}ul.lst-kix_list_1-8[_ngcontent-%COMP%]{list-style-type:none}ul.lst-kix_list_1-5[_ngcontent-%COMP%]{list-style-type:none}ul.lst-kix_list_1-6[_ngcontent-%COMP%]{list-style-type:none}.lst-kix_3vvwpd5ws4cs-1[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_3vvwpd5ws4cs-1}.lst-kix_bmkl8eojlffe-3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_bmkl8eojlffe-3}.lst-kix_fk8228uy5b9s-0[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025cf  \"}.lst-kix_fk8228uy5b9s-1[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025cb  \"}.lst-kix_fk8228uy5b9s-2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025a0  \"}.lst-kix_fk8228uy5b9s-3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025cf  \"}.lst-kix_fk8228uy5b9s-5[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025a0  \"}.lst-kix_fk8228uy5b9s-6[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025cf  \"}.lst-kix_fk8228uy5b9s-4[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025cb  \"}.lst-kix_fk8228uy5b9s-8[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025a0  \"}ol.lst-kix_list_3-7.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_list_3-7 0}ol.lst-kix_u9fhgxabpg91-7.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_u9fhgxabpg91-7 0}ol.lst-kix_3vvwpd5ws4cs-5.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_3vvwpd5ws4cs-5 0}.lst-kix_list_3-2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_list_3-2}.lst-kix_u9fhgxabpg91-6[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_u9fhgxabpg91-6}.lst-kix_fk8228uy5b9s-7[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025cb  \"}ol.lst-kix_u9fhgxabpg91-8.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_u9fhgxabpg91-8 0}ul.lst-kix_7kc6ot1zuici-0[_ngcontent-%COMP%]{list-style-type:none}ul.lst-kix_7kc6ot1zuici-1[_ngcontent-%COMP%]{list-style-type:none}ol.lst-kix_3vvwpd5ws4cs-6.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_3vvwpd5ws4cs-6 0}ul.lst-kix_7kc6ot1zuici-6[_ngcontent-%COMP%]{list-style-type:none}ul.lst-kix_7kc6ot1zuici-7[_ngcontent-%COMP%]{list-style-type:none}ul.lst-kix_7kc6ot1zuici-8[_ngcontent-%COMP%]{list-style-type:none}ul.lst-kix_7kc6ot1zuici-2[_ngcontent-%COMP%]{list-style-type:none}ul.lst-kix_7kc6ot1zuici-3[_ngcontent-%COMP%]{list-style-type:none}ul.lst-kix_7kc6ot1zuici-4[_ngcontent-%COMP%]{list-style-type:none}ul.lst-kix_7kc6ot1zuici-5[_ngcontent-%COMP%]{list-style-type:none}.lst-kix_3vvwpd5ws4cs-8[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_3vvwpd5ws4cs-8}.lst-kix_u9fhgxabpg91-1[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_u9fhgxabpg91-1}ol.lst-kix_u9fhgxabpg91-1.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_u9fhgxabpg91-1 0}.lst-kix_3vvwpd5ws4cs-4[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\" counter(lst-ctn-kix_3vvwpd5ws4cs-4,lower-latin) \". \"}.lst-kix_list_3-0[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_list_3-0}.lst-kix_u9fhgxabpg91-4[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_u9fhgxabpg91-4}.lst-kix_3vvwpd5ws4cs-3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\" counter(lst-ctn-kix_3vvwpd5ws4cs-3,decimal) \". \"}.lst-kix_list_3-6[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_list_3-6}.lst-kix_3vvwpd5ws4cs-2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\" counter(lst-ctn-kix_3vvwpd5ws4cs-2,lower-roman) \". \"}ol.lst-kix_3vvwpd5ws4cs-0.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_3vvwpd5ws4cs-0 0}.lst-kix_3vvwpd5ws4cs-1[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\" counter(lst-ctn-kix_3vvwpd5ws4cs-1,lower-latin) \". \"}ol.lst-kix_list_3-2.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_list_3-2 0}.lst-kix_bmkl8eojlffe-5[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_bmkl8eojlffe-5}.lst-kix_3vvwpd5ws4cs-0[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\" counter(lst-ctn-kix_3vvwpd5ws4cs-0,decimal) \". \"}ol.lst-kix_u9fhgxabpg91-2.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_u9fhgxabpg91-2 0}.lst-kix_list_2-7[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"o  \"}.lst-kix_list_2-5[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025aa  \"}ul.lst-kix_fk8228uy5b9s-0[_ngcontent-%COMP%]{list-style-type:none}ul.lst-kix_fk8228uy5b9s-7[_ngcontent-%COMP%]{list-style-type:none}ul.lst-kix_fk8228uy5b9s-8[_ngcontent-%COMP%]{list-style-type:none}ul.lst-kix_fk8228uy5b9s-5[_ngcontent-%COMP%]{list-style-type:none}ul.lst-kix_fk8228uy5b9s-6[_ngcontent-%COMP%]{list-style-type:none}ul.lst-kix_fk8228uy5b9s-3[_ngcontent-%COMP%]{list-style-type:none}ul.lst-kix_fk8228uy5b9s-4[_ngcontent-%COMP%]{list-style-type:none}ul.lst-kix_fk8228uy5b9s-1[_ngcontent-%COMP%]{list-style-type:none}.lst-kix_3vvwpd5ws4cs-5[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_3vvwpd5ws4cs-5}ul.lst-kix_fk8228uy5b9s-2[_ngcontent-%COMP%]{list-style-type:none}ol.lst-kix_list_3-0.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_list_3-0 0}.lst-kix_3vvwpd5ws4cs-6[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\" counter(lst-ctn-kix_3vvwpd5ws4cs-6,decimal) \". \"}.lst-kix_u9fhgxabpg91-7[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\" counter(lst-ctn-kix_u9fhgxabpg91-0,decimal) \".\" counter(lst-ctn-kix_u9fhgxabpg91-1,decimal) \".\" counter(lst-ctn-kix_u9fhgxabpg91-2,decimal) \".\" counter(lst-ctn-kix_u9fhgxabpg91-3,decimal) \".\" counter(lst-ctn-kix_u9fhgxabpg91-4,decimal) \".\" counter(lst-ctn-kix_u9fhgxabpg91-5,decimal) \".\" counter(lst-ctn-kix_u9fhgxabpg91-6,decimal) \".\" counter(lst-ctn-kix_u9fhgxabpg91-7,decimal) \". \"}.lst-kix_bmkl8eojlffe-0[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_bmkl8eojlffe-0}.lst-kix_3vvwpd5ws4cs-8[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\" counter(lst-ctn-kix_3vvwpd5ws4cs-8,lower-roman) \". \"}.lst-kix_u9fhgxabpg91-3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\" counter(lst-ctn-kix_u9fhgxabpg91-0,decimal) \".\" counter(lst-ctn-kix_u9fhgxabpg91-1,decimal) \".\" counter(lst-ctn-kix_u9fhgxabpg91-2,decimal) \".\" counter(lst-ctn-kix_u9fhgxabpg91-3,decimal) \". \"}.lst-kix_u9fhgxabpg91-5[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\" counter(lst-ctn-kix_u9fhgxabpg91-0,decimal) \".\" counter(lst-ctn-kix_u9fhgxabpg91-1,decimal) \".\" counter(lst-ctn-kix_u9fhgxabpg91-2,decimal) \".\" counter(lst-ctn-kix_u9fhgxabpg91-3,decimal) \".\" counter(lst-ctn-kix_u9fhgxabpg91-4,decimal) \".\" counter(lst-ctn-kix_u9fhgxabpg91-5,decimal) \". \"}.lst-kix_3vvwpd5ws4cs-7[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_3vvwpd5ws4cs-7}ol.lst-kix_bmkl8eojlffe-6.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_bmkl8eojlffe-6 0}.lst-kix_u9fhgxabpg91-1[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\" counter(lst-ctn-kix_u9fhgxabpg91-0,decimal) \".\" counter(lst-ctn-kix_u9fhgxabpg91-1,decimal) \". \"}ol.lst-kix_u9fhgxabpg91-0.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_u9fhgxabpg91-0 0}.lst-kix_list_3-5[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_list_3-5}.lst-kix_list_3-4[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_list_3-4}.lst-kix_bmkl8eojlffe-8[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\" counter(lst-ctn-kix_bmkl8eojlffe-0,decimal) \".\" counter(lst-ctn-kix_bmkl8eojlffe-1,decimal) \".\\0025a0 .\" counter(lst-ctn-kix_bmkl8eojlffe-3,decimal) \".\" counter(lst-ctn-kix_bmkl8eojlffe-4,decimal) \".\" counter(lst-ctn-kix_bmkl8eojlffe-5,decimal) \".\" counter(lst-ctn-kix_bmkl8eojlffe-6,decimal) \".\" counter(lst-ctn-kix_bmkl8eojlffe-7,decimal) \".\" counter(lst-ctn-kix_bmkl8eojlffe-8,decimal) \". \"}.lst-kix_bmkl8eojlffe-6[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\" counter(lst-ctn-kix_bmkl8eojlffe-0,decimal) \".\" counter(lst-ctn-kix_bmkl8eojlffe-1,decimal) \".\\0025a0 .\" counter(lst-ctn-kix_bmkl8eojlffe-3,decimal) \".\" counter(lst-ctn-kix_bmkl8eojlffe-4,decimal) \".\" counter(lst-ctn-kix_bmkl8eojlffe-5,decimal) \".\" counter(lst-ctn-kix_bmkl8eojlffe-6,decimal) \". \"}.lst-kix_bmkl8eojlffe-2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025a0  \"}ul.lst-kix_list_2-8[_ngcontent-%COMP%]{list-style-type:none}.lst-kix_bmkl8eojlffe-0[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\" counter(lst-ctn-kix_bmkl8eojlffe-0,decimal) \". \"}.lst-kix_bmkl8eojlffe-1[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_bmkl8eojlffe-1}ol.lst-kix_bmkl8eojlffe-7.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_bmkl8eojlffe-7 0}.lst-kix_u9fhgxabpg91-5[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_u9fhgxabpg91-5}ul.lst-kix_list_2-2[_ngcontent-%COMP%]{list-style-type:none}ul.lst-kix_list_2-3[_ngcontent-%COMP%]{list-style-type:none}.lst-kix_bmkl8eojlffe-7[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_bmkl8eojlffe-7}ul.lst-kix_list_2-0[_ngcontent-%COMP%]{list-style-type:none}ul.lst-kix_list_2-1[_ngcontent-%COMP%]{list-style-type:none}ul.lst-kix_list_2-6[_ngcontent-%COMP%]{list-style-type:none}.lst-kix_list_1-1[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"o  \"}ul.lst-kix_list_2-7[_ngcontent-%COMP%]{list-style-type:none}ul.lst-kix_list_2-4[_ngcontent-%COMP%]{list-style-type:none}ul.lst-kix_list_2-5[_ngcontent-%COMP%]{list-style-type:none}ol.lst-kix_bmkl8eojlffe-5[_ngcontent-%COMP%]{list-style-type:none}.lst-kix_list_1-3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025cf  \"}ol.lst-kix_bmkl8eojlffe-4[_ngcontent-%COMP%]{list-style-type:none}ol.lst-kix_bmkl8eojlffe-3[_ngcontent-%COMP%]{list-style-type:none}ol.lst-kix_bmkl8eojlffe-8[_ngcontent-%COMP%]{list-style-type:none}ol.lst-kix_bmkl8eojlffe-7[_ngcontent-%COMP%]{list-style-type:none}ol.lst-kix_bmkl8eojlffe-6[_ngcontent-%COMP%]{list-style-type:none}.lst-kix_list_1-7[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"o  \"}ol.lst-kix_bmkl8eojlffe-1[_ngcontent-%COMP%]{list-style-type:none}.lst-kix_list_1-5[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025aa  \"}.lst-kix_7kc6ot1zuici-2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025a0  \"}ol.lst-kix_bmkl8eojlffe-0[_ngcontent-%COMP%]{list-style-type:none}.lst-kix_7kc6ot1zuici-4[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025cb  \"}.lst-kix_list_2-1[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"o  \"}.lst-kix_3vvwpd5ws4cs-0[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_3vvwpd5ws4cs-0}.lst-kix_list_2-3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025cf  \"}.lst-kix_7kc6ot1zuici-8[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025a0  \"}ol.lst-kix_bmkl8eojlffe-8.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_bmkl8eojlffe-8 0}.lst-kix_bmkl8eojlffe-4[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\" counter(lst-ctn-kix_bmkl8eojlffe-0,decimal) \".\" counter(lst-ctn-kix_bmkl8eojlffe-1,decimal) \".\\0025a0 .\" counter(lst-ctn-kix_bmkl8eojlffe-3,decimal) \".\" counter(lst-ctn-kix_bmkl8eojlffe-4,decimal) \". \"}.lst-kix_3vvwpd5ws4cs-6[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_3vvwpd5ws4cs-6}.lst-kix_7kc6ot1zuici-6[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025cf  \"}ol.lst-kix_list_3-1[_ngcontent-%COMP%]{list-style-type:none}.lst-kix_2k4rljbp9ra4-1[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025cb  \"}ol.lst-kix_list_3-2[_ngcontent-%COMP%]{list-style-type:none}.lst-kix_list_3-1[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_list_3-1}ol.lst-kix_list_3-3[_ngcontent-%COMP%]{list-style-type:none}ol.lst-kix_list_3-4.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_list_3-4 0}.lst-kix_2k4rljbp9ra4-0[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025cf  \"}.lst-kix_2k4rljbp9ra4-2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025a0  \"}ol.lst-kix_list_3-4[_ngcontent-%COMP%]{list-style-type:none}.lst-kix_2k4rljbp9ra4-3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025cf  \"}ol.lst-kix_list_3-0[_ngcontent-%COMP%]{list-style-type:none}.lst-kix_2k4rljbp9ra4-5[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025a0  \"}.lst-kix_2k4rljbp9ra4-4[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025cb  \"}.lst-kix_2k4rljbp9ra4-6[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025cf  \"}.lst-kix_list_3-0[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\" counter(lst-ctn-kix_list_3-0,decimal) \". \"}.lst-kix_list_3-1[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\" counter(lst-ctn-kix_list_3-1,lower-latin) \". \"}.lst-kix_list_3-2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\" counter(lst-ctn-kix_list_3-2,lower-roman) \". \"}.lst-kix_2k4rljbp9ra4-8[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025a0  \"}.lst-kix_2k4rljbp9ra4-7[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025cb  \"}.lst-kix_bmkl8eojlffe-4[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_bmkl8eojlffe-4}.lst-kix_list_3-5[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\" counter(lst-ctn-kix_list_3-5,lower-roman) \". \"}.lst-kix_7kc6ot1zuici-0[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025cf  \"}.lst-kix_list_3-4[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\" counter(lst-ctn-kix_list_3-4,lower-latin) \". \"}.lst-kix_list_3-3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\" counter(lst-ctn-kix_list_3-3,decimal) \". \"}ol.lst-kix_list_3-5[_ngcontent-%COMP%]{list-style-type:none}ol.lst-kix_list_3-6[_ngcontent-%COMP%]{list-style-type:none}ol.lst-kix_list_3-7[_ngcontent-%COMP%]{list-style-type:none}ol.lst-kix_list_3-8[_ngcontent-%COMP%]{list-style-type:none}.lst-kix_bmkl8eojlffe-6[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_bmkl8eojlffe-6}.lst-kix_list_3-8[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\" counter(lst-ctn-kix_list_3-8,lower-roman) \". \"}ol.lst-kix_u9fhgxabpg91-4.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_u9fhgxabpg91-4 0}.lst-kix_list_3-6[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\" counter(lst-ctn-kix_list_3-6,decimal) \". \"}.lst-kix_list_3-7[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\" counter(lst-ctn-kix_list_3-7,lower-latin) \". \"}ol.lst-kix_3vvwpd5ws4cs-2.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_3vvwpd5ws4cs-2 0}ol.lst-kix_bmkl8eojlffe-0.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_bmkl8eojlffe-0 0}ol.lst-kix_3vvwpd5ws4cs-8.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_3vvwpd5ws4cs-8 0}.lst-kix_u9fhgxabpg91-0[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_u9fhgxabpg91-0}.lst-kix_3vvwpd5ws4cs-2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_3vvwpd5ws4cs-2}ol.lst-kix_list_3-3.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_list_3-3 0}.lst-kix_list_3-3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_list_3-3}ol.lst-kix_3vvwpd5ws4cs-7.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_3vvwpd5ws4cs-7 0}.lst-kix_u9fhgxabpg91-7[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_u9fhgxabpg91-7}.lst-kix_bmkl8eojlffe-8[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_bmkl8eojlffe-8}ol.lst-kix_bmkl8eojlffe-5.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_bmkl8eojlffe-5 0}.lst-kix_list_2-6[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025cf  \"}.lst-kix_list_3-7[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_list_3-7}ol.lst-kix_u9fhgxabpg91-3.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_u9fhgxabpg91-3 0}.lst-kix_list_2-4[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"o  \"}.lst-kix_list_2-8[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025aa  \"}ol.lst-kix_u9fhgxabpg91-6.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_u9fhgxabpg91-6 0}ol.lst-kix_bmkl8eojlffe-1.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_bmkl8eojlffe-1 0}ol.lst-kix_3vvwpd5ws4cs-1.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_3vvwpd5ws4cs-1 0}.lst-kix_3vvwpd5ws4cs-5[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\" counter(lst-ctn-kix_3vvwpd5ws4cs-5,lower-roman) \". \"}ol.lst-kix_bmkl8eojlffe-4.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_bmkl8eojlffe-4 0}ol.lst-kix_3vvwpd5ws4cs-4.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_3vvwpd5ws4cs-4 0}ol.lst-kix_list_3-8.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_list_3-8 0}.lst-kix_u9fhgxabpg91-8[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\" counter(lst-ctn-kix_u9fhgxabpg91-0,decimal) \".\" counter(lst-ctn-kix_u9fhgxabpg91-1,decimal) \".\" counter(lst-ctn-kix_u9fhgxabpg91-2,decimal) \".\" counter(lst-ctn-kix_u9fhgxabpg91-3,decimal) \".\" counter(lst-ctn-kix_u9fhgxabpg91-4,decimal) \".\" counter(lst-ctn-kix_u9fhgxabpg91-5,decimal) \".\" counter(lst-ctn-kix_u9fhgxabpg91-6,decimal) \".\" counter(lst-ctn-kix_u9fhgxabpg91-7,decimal) \".\" counter(lst-ctn-kix_u9fhgxabpg91-8,decimal) \". \"}.lst-kix_3vvwpd5ws4cs-4[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_3vvwpd5ws4cs-4}.lst-kix_3vvwpd5ws4cs-7[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\" counter(lst-ctn-kix_3vvwpd5ws4cs-7,lower-latin) \". \"}.lst-kix_u9fhgxabpg91-6[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\" counter(lst-ctn-kix_u9fhgxabpg91-0,decimal) \".\" counter(lst-ctn-kix_u9fhgxabpg91-1,decimal) \".\" counter(lst-ctn-kix_u9fhgxabpg91-2,decimal) \".\" counter(lst-ctn-kix_u9fhgxabpg91-3,decimal) \".\" counter(lst-ctn-kix_u9fhgxabpg91-4,decimal) \".\" counter(lst-ctn-kix_u9fhgxabpg91-5,decimal) \".\" counter(lst-ctn-kix_u9fhgxabpg91-6,decimal) \". \"}.lst-kix_list_3-8[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_list_3-8}.lst-kix_u9fhgxabpg91-4[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\" counter(lst-ctn-kix_u9fhgxabpg91-0,decimal) \".\" counter(lst-ctn-kix_u9fhgxabpg91-1,decimal) \".\" counter(lst-ctn-kix_u9fhgxabpg91-2,decimal) \".\" counter(lst-ctn-kix_u9fhgxabpg91-3,decimal) \".\" counter(lst-ctn-kix_u9fhgxabpg91-4,decimal) \". \"}.lst-kix_u9fhgxabpg91-2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\" counter(lst-ctn-kix_u9fhgxabpg91-0,decimal) \".\" counter(lst-ctn-kix_u9fhgxabpg91-1,decimal) \".\" counter(lst-ctn-kix_u9fhgxabpg91-2,decimal) \". \"}.lst-kix_u9fhgxabpg91-3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_u9fhgxabpg91-3}.lst-kix_u9fhgxabpg91-0[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\" counter(lst-ctn-kix_u9fhgxabpg91-0,decimal) \". \"}ol.lst-kix_3vvwpd5ws4cs-3.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_3vvwpd5ws4cs-3 0}.lst-kix_bmkl8eojlffe-7[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\" counter(lst-ctn-kix_bmkl8eojlffe-0,decimal) \".\" counter(lst-ctn-kix_bmkl8eojlffe-1,decimal) \".\\0025a0 .\" counter(lst-ctn-kix_bmkl8eojlffe-3,decimal) \".\" counter(lst-ctn-kix_bmkl8eojlffe-4,decimal) \".\" counter(lst-ctn-kix_bmkl8eojlffe-5,decimal) \".\" counter(lst-ctn-kix_bmkl8eojlffe-6,decimal) \".\" counter(lst-ctn-kix_bmkl8eojlffe-7,decimal) \". \"}ol.lst-kix_bmkl8eojlffe-3.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_bmkl8eojlffe-3 0}ol.lst-kix_list_3-6.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_list_3-6 0}.lst-kix_bmkl8eojlffe-1[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\" counter(lst-ctn-kix_bmkl8eojlffe-0,decimal) \".\" counter(lst-ctn-kix_bmkl8eojlffe-1,decimal) \". \"}.lst-kix_list_1-0[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025cf  \"}.lst-kix_list_1-2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025aa  \"}.lst-kix_list_1-4[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"o  \"}ol.lst-kix_list_3-5.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_list_3-5 0}.lst-kix_7kc6ot1zuici-1[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025cb  \"}.lst-kix_list_1-6[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025cf  \"}.lst-kix_7kc6ot1zuici-3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025cf  \"}.lst-kix_u9fhgxabpg91-2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_u9fhgxabpg91-2}li.li-bullet-0[_ngcontent-%COMP%]:before{margin-left:-18pt;white-space:nowrap;display:inline-block;min-width:18pt}ol.lst-kix_u9fhgxabpg91-2[_ngcontent-%COMP%]{list-style-type:none}.lst-kix_7kc6ot1zuici-5[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025a0  \"}ol.lst-kix_u9fhgxabpg91-3[_ngcontent-%COMP%]{list-style-type:none}ol.lst-kix_u9fhgxabpg91-0[_ngcontent-%COMP%]{list-style-type:none}ol.lst-kix_u9fhgxabpg91-1[_ngcontent-%COMP%]{list-style-type:none}ol.lst-kix_u9fhgxabpg91-6[_ngcontent-%COMP%]{list-style-type:none}.lst-kix_list_2-0[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025aa  \"}ol.lst-kix_u9fhgxabpg91-7[_ngcontent-%COMP%]{list-style-type:none}ol.lst-kix_u9fhgxabpg91-4[_ngcontent-%COMP%]{list-style-type:none}ol.lst-kix_u9fhgxabpg91-5[_ngcontent-%COMP%]{list-style-type:none}.lst-kix_bmkl8eojlffe-3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\" counter(lst-ctn-kix_bmkl8eojlffe-0,decimal) \".\" counter(lst-ctn-kix_bmkl8eojlffe-1,decimal) \".\\0025a0 .\" counter(lst-ctn-kix_bmkl8eojlffe-3,decimal) \". \"}ol.lst-kix_u9fhgxabpg91-5.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_u9fhgxabpg91-5 0}.lst-kix_list_1-8[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025aa  \"}.lst-kix_list_2-2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025aa  \"}ol.lst-kix_u9fhgxabpg91-8[_ngcontent-%COMP%]{list-style-type:none}.lst-kix_3vvwpd5ws4cs-3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_3vvwpd5ws4cs-3}.lst-kix_7kc6ot1zuici-7[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\\0025cb  \"}.lst-kix_bmkl8eojlffe-5[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:\"\" counter(lst-ctn-kix_bmkl8eojlffe-0,decimal) \".\" counter(lst-ctn-kix_bmkl8eojlffe-1,decimal) \".\\0025a0 .\" counter(lst-ctn-kix_bmkl8eojlffe-3,decimal) \".\" counter(lst-ctn-kix_bmkl8eojlffe-4,decimal) \".\" counter(lst-ctn-kix_bmkl8eojlffe-5,decimal) \". \"}ol[_ngcontent-%COMP%]{margin:0;padding:0}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:0}.c4[_ngcontent-%COMP%]{border-right-style:solid;padding-top:0pt;border-top-width:0pt;border-right-width:0pt;padding-left:0pt;padding-bottom:0pt;line-height:1.5;border-top-style:solid;background-color:#ffffff;margin-left:36pt;border-bottom-width:0pt;border-bottom-style:solid;orphans:2;widows:2;text-align:justify;padding-right:0pt}.c2[_ngcontent-%COMP%]{border-right-style:solid;padding-top:0pt;border-top-width:0pt;border-right-width:0pt;padding-left:0pt;padding-bottom:0pt;line-height:1.5;border-top-style:solid;background-color:#ffffff;margin-left:72pt;border-bottom-width:0pt;border-bottom-style:solid;orphans:2;widows:2;text-align:justify;padding-right:0pt}.c1[_ngcontent-%COMP%]{border-right-style:solid;padding-top:0pt;border-top-width:0pt;border-right-width:0pt;padding-left:0pt;padding-bottom:0pt;line-height:1.5;border-top-style:solid;background-color:#ffffff;margin-left:108pt;border-bottom-width:0pt;border-bottom-style:solid;orphans:2;widows:2;text-align:justify;padding-right:0pt}.c11[_ngcontent-%COMP%]{border-right-style:solid;border-top-width:0pt;border-right-width:0pt;border-top-style:solid;background-color:#ffffff;margin-left:36pt;border-bottom-width:0pt;border-bottom-style:solid;padding-right:0pt}.c9[_ngcontent-%COMP%]{border-right-style:solid;border-top-width:0pt;border-right-width:0pt;border-top-style:solid;background-color:#ffffff;margin-left:72pt;border-bottom-width:0pt;border-bottom-style:solid;padding-right:0pt}.c15[_ngcontent-%COMP%]{border-right-style:solid;border-top-width:0pt;border-right-width:0pt;border-top-style:solid;background-color:#ffffff;margin-left:108pt;border-bottom-width:0pt;border-bottom-style:solid;padding-right:0pt}.c0[_ngcontent-%COMP%]{background-color:#ffffff;color:#929497;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:12pt;font-family:\"DIN Next LT Pro\";font-style:normal}.c3[_ngcontent-%COMP%]{background-color:#ffffff;color:#929497;font-weight:700;text-decoration:none;vertical-align:baseline;font-size:14pt;font-family:\"DIN Next LT Pro\";font-style:normal}.c6[_ngcontent-%COMP%]{padding-top:0pt;padding-bottom:0pt;line-height:1.5;orphans:2;widows:2;text-align:justify}.c23[_ngcontent-%COMP%]{padding-top:0pt;padding-bottom:0pt;line-height:1.0;orphans:2;widows:2;text-align:center}.c17[_ngcontent-%COMP%]{padding-top:0pt;padding-bottom:0pt;line-height:1.0;orphans:2;widows:2;text-align:center}.c13[_ngcontent-%COMP%]{background-color:#ffffff;font-family:\"DIN Next LT Pro\";color:#929497;font-weight:700}.c5[_ngcontent-%COMP%]{background-color:#ffffff;font-family:\"DIN Next LT Pro\";color:#929497;font-weight:400}.c24[_ngcontent-%COMP%]{font-weight:400;text-decoration:none;vertical-align:baseline;font-family:\"DIN Next LT Pro\"}.c14[_ngcontent-%COMP%]{color:#000000;font-weight:400;font-family:\"DIN Next LT Pro\";font-style:normal}.c12[_ngcontent-%COMP%]{text-decoration:none;vertical-align:baseline;font-size:12pt}.c19[_ngcontent-%COMP%]{text-decoration:none;vertical-align:baseline;font-size:14pt}.c21[_ngcontent-%COMP%]{background-color:#ffffff;max-width:900pt;padding:93.6pt 72pt 72pt 72pt;margin: auto;}.c22[_ngcontent-%COMP%]{color:#ff0000;font-size:18pt}.c7[_ngcontent-%COMP%]{padding:0;margin:0}.c18[_ngcontent-%COMP%]{margin-left:72pt}.c10[_ngcontent-%COMP%]{height:12pt}.c8[_ngcontent-%COMP%]{font-style:italic}.c20[_ngcontent-%COMP%]{font-style:normal}.c25[_ngcontent-%COMP%]{padding-left:0pt}.c16[_ngcontent-%COMP%]{margin-left:36pt}.title[_ngcontent-%COMP%]{padding-top:24pt;color:#000000;font-weight:700;font-size:36pt;padding-bottom:6pt;font-family:\"DIN Next LT Pro\";line-height:1.0;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle[_ngcontent-%COMP%]{padding-top:18pt;color:#666666;font-size:24pt;padding-bottom:4pt;font-family:\"DIN Next LT Pro\";line-height:1.0;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}li[_ngcontent-%COMP%]{color:#000000;font-size:12pt;font-family:\"DIN Next LT Pro\"}p[_ngcontent-%COMP%]{margin:0;color:#000000;font-size:12pt;font-family:\"DIN Next LT Pro\"}h1[_ngcontent-%COMP%]{padding-top:24pt;color:#000000;font-weight:700;font-size:24pt;padding-bottom:6pt;font-family:\"DIN Next LT Pro\";line-height:1.0;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2[_ngcontent-%COMP%]{padding-top:18pt;color:#000000;font-weight:700;font-size:18pt;padding-bottom:4pt;font-family:\"DIN Next LT Pro\";line-height:1.0;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3[_ngcontent-%COMP%]{padding-top:14pt;color:#000000;font-weight:700;font-size:14pt;padding-bottom:4pt;font-family:\"DIN Next LT Pro\";line-height:1.0;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4[_ngcontent-%COMP%]{padding-top:12pt;color:#000000;font-weight:700;font-size:12pt;padding-bottom:2pt;font-family:\"DIN Next LT Pro\";line-height:1.0;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5[_ngcontent-%COMP%]{padding-top:11pt;color:#000000;font-weight:700;font-size:11pt;padding-bottom:2pt;font-family:\"DIN Next LT Pro\";line-height:1.0;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6[_ngcontent-%COMP%]{padding-top:10pt;color:#000000;font-weight:700;font-size:10pt;padding-bottom:2pt;font-family:\"DIN Next LT Pro\";line-height:1.0;page-break-after:avoid;orphans:2;widows:2;text-align:left}"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_modules_terms-and-condition_terms-and-condition_module_ts-es5.js.map