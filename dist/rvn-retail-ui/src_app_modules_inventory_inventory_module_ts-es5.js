(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkrvn_retail_ui"] = self["webpackChunkrvn_retail_ui"] || []).push([["src_app_modules_inventory_inventory_module_ts"], {
    /***/
    12379:
    /*!****************************************************************************!*\
      !*** ./src/app/modules/inventory/inventory-add/inventory-add.component.ts ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InventoryAddComponent": function InventoryAddComponent() {
          return (
            /* binding */
            _InventoryAddComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/models/user.model */
      53709);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../environments/environment */
      92340);
      /* harmony import */


      var _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/constant/api.constant */
      58412);
      /* harmony import */


      var _shared_enum_product_condition_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../shared/enum/product-condition.enum */
      52562);
      /* harmony import */


      var src_app_shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/constant/navigation.constant */
      86473);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _shared_service_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../shared/service/request.service */
      67229);
      /* harmony import */


      var _shared_service_api_model_translator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../shared/service/api-model-translator.service */
      43206);
      /* harmony import */


      var _shared_service_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/service/alert.service */
      96506);
      /* harmony import */


      var _shared_service_error_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../shared/service/error.service */
      38205);
      /* harmony import */


      var _shared_service_validation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../shared/service/validation.service */
      79917);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/router */
      71258);

      function InventoryAddComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
      }

      function InventoryAddComponent_ng_template_1_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "app-inventory-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        }
      }

      function InventoryAddComponent_ng_template_1_ng_container_1_div_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Pilih Gambar");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
      }

      function InventoryAddComponent_ng_template_1_ng_container_1_div_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "img", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r6.previewImageProduct1, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
        }
      }

      function InventoryAddComponent_ng_template_1_ng_container_1_div_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
      }

      function InventoryAddComponent_ng_template_1_ng_container_1_div_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Pilih Gambar");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
      }

      function InventoryAddComponent_ng_template_1_ng_container_1_div_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "img", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r9.previewImageProduct2, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
        }
      }

      function InventoryAddComponent_ng_template_1_ng_container_1_div_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
      }

      function InventoryAddComponent_ng_template_1_ng_container_1_div_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Pilih Gambar");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
      }

      function InventoryAddComponent_ng_template_1_ng_container_1_div_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "img", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r12.previewImageProduct3, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
        }
      }

      function InventoryAddComponent_ng_template_1_ng_container_1_div_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
      }

      function InventoryAddComponent_ng_template_1_ng_container_1_div_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
      }

      function InventoryAddComponent_ng_template_1_ng_container_1_div_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "*This field is not valid input text");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
      }

      function InventoryAddComponent_ng_template_1_ng_container_1_ng_option_87_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ng-option", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var categoryProduct_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", categoryProduct_r23);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](categoryProduct_r23);
        }
      }

      function InventoryAddComponent_ng_template_1_ng_container_1_div_88_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
      }

      function InventoryAddComponent_ng_template_1_ng_container_1_div_116_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
      }

      function InventoryAddComponent_ng_template_1_ng_container_1_div_117_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "*This field is not valid input text");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
      }

      function InventoryAddComponent_ng_template_1_ng_container_1_button_123_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function InventoryAddComponent_ng_template_1_ng_container_1_button_123_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);

            return ctx_r24.addNewVariant();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Tambah Varian ");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
      }

      function InventoryAddComponent_ng_template_1_ng_container_1_button_124_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function InventoryAddComponent_ng_template_1_ng_container_1_button_124_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);

            return ctx_r26.deleteVariant();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Hapus Varian ");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
      }

      function InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
      }

      function InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "*This field is not valid input text");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
      }

      function InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
      }

      function InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "*This field is not valid input text");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
      }

      function InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "*Minimal harga 10000");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
      }

      function InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
      }

      function InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "*This field is not valid input text");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
      }

      function InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
      }

      function InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "*This field is not valid input text");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
      }

      function InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_57_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
      }

      function InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_57_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "*This field is not valid input text");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
      }

      function InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_57_Template(rf, ctx) {
        if (rf & 1) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Berat Varian");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, " Berat dari varian produk setelah dikemas. Gunakan titik untuk bilangan desimal ");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "input", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keypress", function InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_57_Template_input_keypress_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r44);

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);

            return ctx_r43.validationService.decimalOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "span", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "Kilogram (kg)");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_57_div_13_Template, 2, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](14, InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_57_div_14_Template, 2, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

          var i_r29 = ctx_r45.index;
          var variant_r28 = ctx_r45.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate1"]("id", "weight-", i_r29, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", variant_r28.get("weight").hasError("required") && (variant_r28.get("weight").dirty || variant_r28.get("weight").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", variant_r28.get("weight").hasError("pattern"));
        }
      }

      function InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_58_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
      }

      function InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_58_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "*This field is not valid input text");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
      }

      function InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_58_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
      }

      function InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_58_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "*This field is not valid input text");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
      }

      function InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_58_div_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
      }

      function InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_58_div_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "*This field is not valid input text");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
      }

      function InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_58_Template(rf, ctx) {
        if (rf & 1) {
          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Ukuran Varian");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, " Ukuran dari varian produk setelah dikemas untuk menghitung volume ");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "input", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keypress", function InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_58_Template_input_keypress_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r53);

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);

            return ctx_r52.validationService.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "span", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "cm");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_58_div_15_Template, 2, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](16, InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_58_div_16_Template, 2, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "input", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keypress", function InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_58_Template_input_keypress_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r53);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);

            return ctx_r54.validationService.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "span", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22, "cm");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](23, InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_58_div_23_Template, 2, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](24, InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_58_div_24_Template, 2, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "input", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keypress", function InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_58_Template_input_keypress_27_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r53);

            var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);

            return ctx_r55.validationService.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "span", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](30, "cm");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](31, InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_58_div_31_Template, 2, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](32, InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_58_div_32_Template, 2, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

          var i_r29 = ctx_r56.index;
          var variant_r28 = ctx_r56.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate1"]("id", "length-", i_r29, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", variant_r28.get("length").hasError("required") && (variant_r28.get("length").dirty || variant_r28.get("length").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", variant_r28.get("length").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate1"]("id", "width-", i_r29, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", variant_r28.get("width").hasError("required") && (variant_r28.get("width").dirty || variant_r28.get("width").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", variant_r28.get("width").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate1"]("id", "height-", i_r29, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", variant_r28.get("height").hasError("required") && (variant_r28.get("height").dirty || variant_r28.get("height").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", variant_r28.get("height").hasError("pattern"));
        }
      }

      function InventoryAddComponent_ng_template_1_ng_container_1_div_126_Template(rf, ctx) {
        if (rf & 1) {
          var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "h4", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "Nama Varian");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, " Varian nama dari produk yang Anda jual ");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "input", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_17_Template, 2, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_18_Template, 2, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, "Harga Varian");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, " Harga dari varian produk yang Anda jual. Harga minimum Rp 10.000, tanpa titik ");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "span", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](30, "Rp");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "input", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keypress", function InventoryAddComponent_ng_template_1_ng_container_1_div_126_Template_input_keypress_31_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r58);

            var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);

            return ctx_r57.validationService.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](32, InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_32_Template, 2, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](33, InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_33_Template, 2, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](34, InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_34_Template, 2, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](39, "Stok Varian");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](41, " Jumlah varian produk yang dijual ");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "input", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keypress", function InventoryAddComponent_ng_template_1_ng_container_1_div_126_Template_input_keypress_43_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r58);

            var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);

            return ctx_r59.validationService.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](44, InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_44_Template, 2, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](45, InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_45_Template, 2, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](46, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](48, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](50, "Minimal Pembelian");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](51, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](52, " Minimal pembelian varian produk ");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](53, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](54, "input", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keypress", function InventoryAddComponent_ng_template_1_ng_container_1_div_126_Template_input_keypress_54_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r58);

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);

            return ctx_r60.validationService.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](55, InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_55_Template, 2, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](56, InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_56_Template, 2, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](57, InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_57_Template, 15, 3, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](58, InventoryAddComponent_ng_template_1_ng_container_1_div_126_div_58_Template, 33, 9, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var variant_r28 = ctx.$implicit;
          var i_r29 = ctx.index;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroupName", i_r29);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Varian ", i_r29 + 1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate1"]("id", "color-", i_r29, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", variant_r28.get("color").hasError("required") && (variant_r28.get("color").dirty || variant_r28.get("color").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", variant_r28.get("color").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate1"]("id", "price-", i_r29, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", variant_r28.get("price").hasError("required") && (variant_r28.get("price").dirty || variant_r28.get("price").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", variant_r28.get("price").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", variant_r28.get("price").hasError("min"));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate1"]("id", "stock-", i_r29, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", variant_r28.get("stock").hasError("required") && (variant_r28.get("stock").dirty || variant_r28.get("stock").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", variant_r28.get("stock").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate1"]("id", "minimumOrder-", i_r29, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", variant_r28.get("minimumOrder").hasError("required") && (variant_r28.get("minimumOrder").dirty || variant_r28.get("minimumOrder").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", variant_r28.get("minimumOrder").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r22.addProductForm.get("digitalGoods").value !== true);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r22.addProductForm.get("digitalGoods").value !== true);
        }
      }

      function InventoryAddComponent_ng_template_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Tambah Produk");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Tambahkan produk dan mulailah untuk menjual produk Anda");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "Tipe Produk");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18, "Pilih jika Anda ingin menambahkan ");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, " produk digital ");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21, " yang tidak membutuhkan pengiriman");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function InventoryAddComponent_ng_template_1_ng_container_1_Template_input_change_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r62);

            var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);

            return ctx_r61.validateDigitalGoods();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, "Produk fisik");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function InventoryAddComponent_ng_template_1_ng_container_1_Template_input_change_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r62);

            var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);

            return ctx_r63.validateDigitalGoods();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31, "Produk digital");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](36, "Foto Produk");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38, " Maksimal ukuran gambar 1 MB atau minimum 300 x 300 px. Format gambar .jpg .jpeg atau .png ");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](44, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](45, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](46, InventoryAddComponent_ng_template_1_ng_container_1_div_46_Template, 4, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](47, InventoryAddComponent_ng_template_1_ng_container_1_div_47_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](48, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function InventoryAddComponent_ng_template_1_ng_container_1_Template_input_change_48_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r62);

            var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);

            return ctx_r64.fileProgress($event, "previewImageProduct1");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](49, InventoryAddComponent_ng_template_1_ng_container_1_div_49_Template, 2, 0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](50, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](51, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](52, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](53, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](54, InventoryAddComponent_ng_template_1_ng_container_1_div_54_Template, 4, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](55, InventoryAddComponent_ng_template_1_ng_container_1_div_55_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](56, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function InventoryAddComponent_ng_template_1_ng_container_1_Template_input_change_56_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r62);

            var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);

            return ctx_r65.fileProgress($event, "previewImageProduct2");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](57, InventoryAddComponent_ng_template_1_ng_container_1_div_57_Template, 2, 0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](58, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](59, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](60, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](61, "label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](62, InventoryAddComponent_ng_template_1_ng_container_1_div_62_Template, 4, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](63, InventoryAddComponent_ng_template_1_ng_container_1_div_63_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](64, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function InventoryAddComponent_ng_template_1_ng_container_1_Template_input_change_64_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r62);

            var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);

            return ctx_r66.fileProgress($event, "previewImageProduct3");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](65, InventoryAddComponent_ng_template_1_ng_container_1_div_65_Template, 2, 0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](66, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](67, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](68, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](69, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](70, "Nama Produk");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](71, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](72, " Cantumkan maksimal 238 karakter terdiri dari jenis produk, merek, dan keterangan seperti warna, bahan, atau tipe ");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](73, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](74, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](75, InventoryAddComponent_ng_template_1_ng_container_1_div_75_Template, 2, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](76, InventoryAddComponent_ng_template_1_ng_container_1_div_76_Template, 2, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](77, "hr", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](78, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](79, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](80, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](81, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](82, "Kategori");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](83, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](84, " Pilih kategori yang sesuai dengan produk Anda ");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](85, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](86, "ng-select", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](87, InventoryAddComponent_ng_template_1_ng_container_1_ng_option_87_Template, 2, 2, "ng-option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](88, InventoryAddComponent_ng_template_1_ng_container_1_div_88_Template, 2, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](89, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](90, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](91, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](92, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](93, "Kondisi");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](94, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](95, " Pilih kondisi produk yang dijual ");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](96, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](97, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](98, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](99, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](100, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](101, "Baru");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](102, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](103, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](104, "label", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](105, "Bekas");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](106, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](107, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](108, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](109, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](110, "Deskripsi Produk");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](111, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](112, " Pastikan deskripsi produk memuat spesifikasi, ukuran, bahan, masa berlaku, dan lainnya. Cantumkan maksimal 260 karakter agar pembeli semakin mudah mengerti produk Anda ");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](113, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](114, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](115, "textarea", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](116, InventoryAddComponent_ng_template_1_ng_container_1_div_116_Template, 2, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](117, InventoryAddComponent_ng_template_1_ng_container_1_div_117_Template, 2, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](118, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](119, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](120, "h4", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](121, "Informasi Penjualan");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](122, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](123, InventoryAddComponent_ng_template_1_ng_container_1_button_123_Template, 3, 0, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](124, InventoryAddComponent_ng_template_1_ng_container_1_button_124_Template, 3, 0, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](125, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](126, InventoryAddComponent_ng_template_1_ng_container_1_div_126_Template, 59, 17, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](127, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](128, "hr", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](129, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](130, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](131, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](132, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](133, "button", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function InventoryAddComponent_ng_template_1_ng_container_1_Template_button_click_133_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r62);

            var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);

            return ctx_r67.changePage("list");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](134, "i", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](135, " BATAL ");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](136, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](137, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](138, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](139, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](140, "button", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function InventoryAddComponent_ng_template_1_ng_container_1_Template_button_click_140_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r62);

            var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);

            return ctx_r68.submitAddProduct("list");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](141, "SIMPAN");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r4.addProductForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("autoClose", "inside");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r4.previewImageProduct1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.previewImageProduct1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.addProductForm.get("image1").hasError("required") && (ctx_r4.addProductForm.get("image1").dirty || ctx_r4.addProductForm.get("image1").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r4.previewImageProduct2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.previewImageProduct2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.addProductForm.get("image2").hasError("required") && (ctx_r4.addProductForm.get("image2").dirty || ctx_r4.addProductForm.get("image2").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r4.previewImageProduct3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.previewImageProduct3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.addProductForm.get("image3").hasError("required") && (ctx_r4.addProductForm.get("image3").dirty || ctx_r4.addProductForm.get("image3").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.addProductForm.get("name").hasError("required") && (ctx_r4.addProductForm.get("name").dirty || ctx_r4.addProductForm.get("name").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.addProductForm.get("name").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("multiple", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r4.listCategoryProduct);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.addProductForm.get("category").hasError("required") && (ctx_r4.addProductForm.get("category").dirty || ctx_r4.addProductForm.get("category").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", ctx_r4.productCondition.New);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", ctx_r4.productCondition.Used);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.addProductForm.get("description").hasError("required") && (ctx_r4.addProductForm.get("description").dirty || ctx_r4.addProductForm.get("description").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.addProductForm.get("description").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.variants.length < 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.variants.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r4.addProductForm.get("variants")["controls"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx_r4.addProductForm.valid);
        }
      }

      function InventoryAddComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, InventoryAddComponent_ng_template_1_ng_container_0_Template, 2, 0, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, InventoryAddComponent_ng_template_1_ng_container_1_Template, 142, 26, "ng-container", 4);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.pageName === "list");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.pageName === "add");
        }
      }

      var _InventoryAddComponent = /*#__PURE__*/function () {
        function _InventoryAddComponent(formBuilder, requestService, apiModelTranslatorService, alertService, errorService, validationService, router) {
          _classCallCheck(this, _InventoryAddComponent);

          this.formBuilder = formBuilder;
          this.requestService = requestService;
          this.apiModelTranslatorService = apiModelTranslatorService;
          this.alertService = alertService;
          this.errorService = errorService;
          this.validationService = validationService;
          this.router = router; //loading component

          this.loading = true;
          this.user = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_0__.User();
          this.listCategoryProduct = [];
          this.pageName = "";
          this.apiGetProductCategory = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_3__.APIConstant.PRODUCT_CATEGORY;
          this.apiSubmitProduct = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_3__.APIConstant.PRODUCT;
          this.productCondition = _shared_enum_product_condition_enum__WEBPACK_IMPORTED_MODULE_4__.ProductCondition;
        }

        _createClass(_InventoryAddComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.pageName = 'add';
            this.initLoad();
            this.form();
          }
        }, {
          key: "initLoad",
          value: function initLoad() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.getListCategoryProduct();

                    case 2:
                      this.user = this.requestService.getUserToken();
                      this.loading = false;

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "form",
          value: function form() {
            this.addProductForm = this.formBuilder.group({
              name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern]],
              category: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
              digitalGoods: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
              description: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern]],
              image1: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
              image2: [null],
              image3: [null],
              condition: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
              variants: this.formBuilder.array([this.initVariantsProduct()])
            });
          }
        }, {
          key: "initVariantsProduct",
          value: function initVariantsProduct() {
            return this.formBuilder.group({
              color: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern]],
              minimumOrder: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern]],
              length: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern]],
              width: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern]],
              height: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern]],
              stock: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern]],
              price: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.min(10000)]],
              weight: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern]]
            });
          }
        }, {
          key: "getListCategoryProduct",
          value: function getListCategoryProduct() {
            var _this = this;

            this.requestService.get(this.apiGetProductCategory, null).subscribe(function (response) {
              _this.listCategoryProduct = response;
            }, function (error) {
              _this.errorService.getErrorApi(error);
            });
          }
        }, {
          key: "validateDigitalGoods",
          value: function validateDigitalGoods() {
            var _this2 = this;

            this.variants.controls.forEach(function (element, index) {
              if (_this2.addProductForm.get('digitalGoods').value === true) {
                element.patchValue({
                  'width': 1
                });
                element.patchValue({
                  'height': 1
                });
                element.patchValue({
                  'length': 1
                });
                element.patchValue({
                  'weight': 1
                });
              } else {
                element.patchValue({
                  'width': ""
                });
                element.patchValue({
                  'height': ""
                });
                element.patchValue({
                  'length': ""
                });
                element.patchValue({
                  'weight': ""
                });
              }
            });
          }
        }, {
          key: "submitAddProduct",
          value: function submitAddProduct(page) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this3 = this;

              var productUiId;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (this.addProductForm.valid) {
                        productUiId = null;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                          title: 'Tambahkan Produk Baru?',
                          text: 'Produk akan ditampilkan dan siap untuk dijual ke Pelanggan ?',
                          showCancelButton: true,
                          cancelButtonText: 'BATAL',
                          cancelButtonColor: '#666666',
                          reverseButtons: true,
                          confirmButtonColor: '#E1251B',
                          confirmButtonText: 'TAMBAHKAN',
                          showLoaderOnConfirm: true,
                          customClass: {
                            title: 'swal2-title-modal-medium'
                          },
                          preConfirm: function preConfirm() {
                            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                              var _this4 = this;

                              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                while (1) {
                                  switch (_context3.prev = _context3.next) {
                                    case 0:
                                      _context3.next = 2;
                                      return this.requestService.post(this.apiSubmitProduct, null, this.apiModelTranslatorService.camelToSnakeCase(this.addProductForm.value)).toPromise().then(function (response) {
                                        return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                            while (1) {
                                              switch (_context2.prev = _context2.next) {
                                                case 0:
                                                  productUiId = response.product.detail.uuid;

                                                case 1:
                                                case "end":
                                                  return _context2.stop();
                                              }
                                            }
                                          }, _callee2);
                                        }));
                                      }, function (error) {
                                        _this4.errorService.getErrorApi(error);
                                      });

                                    case 2:
                                      _context3.next = 4;
                                      return this.uploadImageProduct(productUiId, this.imageToUpload1, "0");

                                    case 4:
                                      if (!(this.imageToUpload2 !== null && this.imageToUpload2 !== undefined)) {
                                        _context3.next = 7;
                                        break;
                                      }

                                      _context3.next = 7;
                                      return this.uploadImageProduct(productUiId, this.imageToUpload2, "1");

                                    case 7:
                                      if (!(this.imageToUpload3 !== null && this.imageToUpload3 !== undefined)) {
                                        _context3.next = 10;
                                        break;
                                      }

                                      _context3.next = 10;
                                      return this.uploadImageProduct(productUiId, this.imageToUpload3, "2");

                                    case 10:
                                      this.changePage(page);
                                      this.alertService.setProps("Success! Add Product", false);

                                    case 12:
                                    case "end":
                                      return _context3.stop();
                                  }
                                }
                              }, _callee3, this);
                            }));
                          }
                        });
                      }

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "uploadImageProduct",
          value: function uploadImageProduct(productUiId, file, index) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      return _context5.abrupt("return", this.requestService.uploadSingleFile("image", this.apiSubmitProduct + '/' + productUiId + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_3__.APIConstant.PRODUCT_IMAGES, file, index).toPromise().then(function (res) {}, function (error) {
                        _this5.errorService.getErrorApi(error);
                      }));

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "changePage",
          value: function changePage(pageName) {
            this.router.navigate([src_app_shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_5__.NavigationConstant.ROUTING_INVENTORY]);
            this.pageName = pageName;
          }
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
            var _this6 = this;

            var _a;

            var mimeType = (_a = this.fileData) === null || _a === void 0 ? void 0 : _a.type;
            var reader = new FileReader();
            reader.readAsDataURL(this.fileData);

            reader.onload = function (_event) {
              var img = new Image();
              img.src = reader.result;

              img.onload = function () {
                var height = img.naturalHeight;
                var width = img.naturalWidth;

                if (name === 'previewImageProduct1') {
                  if (mimeType.match('image.*') === null) {
                    _this6.addProductForm.patchValue({
                      'image1': null
                    });

                    _this6.alertService.setProps("Failed Upload Type", true);
                  } else if (_this6.fileData.size > 1000000) {
                    _this6.addProductForm.patchValue({
                      'image1': null
                    });

                    _this6.alertService.setProps("Size more than 1 MB", true);
                  } else if (height < 300 || width < 300) {
                    _this6.addProductForm.patchValue({
                      'image1': null
                    });

                    _this6.alertService.setProps("Dimension less than 300 x 300 pixels", true);
                  } else {
                    _this6.previewImageProduct1 = reader.result;
                    _this6.imageToUpload1 = _this6.fileData;
                  }
                } else if (name === 'previewImageProduct2') {
                  if (mimeType.match('image.*') === null) {
                    _this6.addProductForm.patchValue({
                      'image2': null
                    });

                    _this6.alertService.setProps("Failed Upload Type", true);
                  } else if (_this6.fileData.size > 1000000) {
                    _this6.addProductForm.patchValue({
                      'image2': null
                    });

                    _this6.alertService.setProps("Size more than 1 MB", true);
                  } else if (height < 300 || width < 300) {
                    _this6.addProductForm.patchValue({
                      'image2': null
                    });

                    _this6.alertService.setProps("Dimension less than 300 x 300 pixels", true);
                  } else {
                    _this6.previewImageProduct2 = reader.result;
                    _this6.imageToUpload2 = _this6.fileData;
                  }
                } else if (name === 'previewImageProduct3') {
                  if (mimeType.match('image.*') === null) {
                    _this6.addProductForm.patchValue({
                      'image3': null
                    });

                    _this6.alertService.setProps("Failed Upload Type", true);
                  } else if (_this6.fileData.size > 1000000) {
                    _this6.addProductForm.patchValue({
                      'image3': null
                    });

                    _this6.alertService.setProps("Size more than 1 MB", true);
                  } else if (height < 300 || width < 300) {
                    _this6.addProductForm.patchValue({
                      'image3': null
                    });

                    _this6.alertService.setProps("Dimension less than 300 x 300 pixels", true);
                  } else {
                    _this6.previewImageProduct3 = reader.result;
                    _this6.imageToUpload3 = _this6.fileData;
                  }
                }
              };
            };
          }
        }, {
          key: "variants",
          get: function get() {
            return this.addProductForm.get('variants');
          }
        }, {
          key: "addNewVariant",
          value: function addNewVariant() {
            var lengthVariant = this.variants.length;

            if (lengthVariant < 5) {
              this.variants.push(this.initVariantsProduct());
              this.validateDigitalGoods();
            }
          }
        }, {
          key: "deleteVariant",
          value: function deleteVariant() {
            var index = this.variants.length - 1;
            this.variants.removeAt(index);
          }
        }]);

        return _InventoryAddComponent;
      }();

      _InventoryAddComponent.ɵfac = function InventoryAddComponent_Factory(t) {
        return new (t || _InventoryAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_service_request_service__WEBPACK_IMPORTED_MODULE_6__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_service_api_model_translator_service__WEBPACK_IMPORTED_MODULE_7__.ApiModelTranslatorService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_service_alert_service__WEBPACK_IMPORTED_MODULE_8__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_service_error_service__WEBPACK_IMPORTED_MODULE_9__.ErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_10__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router));
      };

      _InventoryAddComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
        type: _InventoryAddComponent,
        selectors: [["app-inventory-add"]],
        decls: 3,
        vars: 2,
        consts: [[4, "ngIf", "ngIfElse"], ["loaded", ""], [1, "center"], ["role", "status", 1, "spinner-border", "text-primary", "spinner-sm", "mr-5"], [4, "ngIf"], [1, "row"], [1, "form-group", "col-md-12", "page-header"], [1, "card"], [1, "card-body"], [1, "col-12"], ["id", "addProductForm", 1, "pt-10", 3, "formGroup"], [1, "row", "mb-4"], [1, "col-12", "col-md-3", "mb-2", "mb-md-0"], ["ngbPopover", "Contoh: Voucher Pulsa, Token Listrik, Voucher Belanja, Game, dll, yang tidak memerlukan pengiriman", "popoverTitle", "Produk Digital", 1, "text-primary", 2, "cursor", "pointer", 3, "autoClose"], [1, "col-12", "col-md-9"], [1, "form-group"], [1, "form-check", "form-check-inline", "mr-5"], ["type", "radio", "name", "digitalGoods", "id", "physicalGoods", "formControlName", "digitalGoods", 1, "form-check-input", 3, "value", "change"], ["for", "physicalGoods", 1, "form-check-label"], [1, "form-check", "form-check-inline"], ["type", "radio", "name", "digitalGoods", "id", "digitalGoods", "formControlName", "digitalGoods", 1, "form-check-input", 3, "value", "change"], ["for", "digitalGoods", 1, "form-check-label"], [1, "row", "mt-3", "px-3"], [1, "col-12", "col-md-4"], [1, "form-group", "d-flex", "justify-content-center"], [1, "image-upload", "d-flex", "justify-content-center", 2, "border-style", "dashed", "width", "220px", "height", "220px"], ["for", "file-input1", 2, "margin-top", "auto", "margin-bottom", "auto", "cursor", "pointer"], ["id", "file-input1", "type", "file", "name", "image", "accept", "image/png, image/jpg, image/jpeg", "formControlName", "image1", 3, "change"], ["class", "form-group d-flex justify-content-center text-danger", 4, "ngIf"], ["for", "file-input2", 2, "margin-top", "auto", "margin-bottom", "auto", "cursor", "pointer"], ["id", "file-input2", "type", "file", "name", "image", "accept", "image/png, image/jpg, image/jpeg", "formControlName", "image2", 3, "change"], ["for", "file-input3", 2, "margin-top", "auto", "margin-bottom", "auto", "cursor", "pointer"], ["id", "file-input3", "type", "file", "name", "image", "accept", "image/png, image/jpg, image/jpeg", "formControlName", "image3", 3, "change"], ["formControlName", "name", "id", "name", "placeholder", "Baju lengan panjang", "required", "", "type", "text", "pattern", "^[a-zA-Z0-9.\\\\-\\\\/+,=_:'@%| ]*$", "maxlength", "238", 1, "form-control", "dk-text-input"], ["class", "text-danger", 4, "ngIf"], [1, "row", "p-3", "my-2"], ["formControlName", "category", "id", "category", "placeholder", "Pilih kategori produk", 3, "multiple"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "radio", "id", "conditionNew", "formControlName", "condition", 3, "value"], ["for", "conditionNew", 1, "form-check-label"], ["type", "radio", "id", "conditionUsed", "formControlName", "condition", 3, "value"], ["for", "conditionUsed", 1, "form-check-label"], ["formControlName", "description", "id", "description", "placeholder", "Deskripsi produk anda", "required", "", "pattern", "^[a-zA-Z0-9.\\\\-\\\\/+,=_:'@%| ]*$", "rows", "4", "maxlength", "260", 1, "form-control", "dk-text-input"], [1, "col-3", 2, "margin-bottom", "auto", "margin-top", "auto"], [2, "margin-bottom", "auto", "margin-top", "auto"], [1, "col-9"], ["class", "btn btn-secondary btn-sm ml-auto", "style", "float: right", "type", "button", "id", "addVariant", 3, "click", 4, "ngIf"], ["class", "btn btn-secondary btn-sm ml-auto mr-3", "style", "float: right", "type", "button", "id", "deleteVariant", 3, "click", 4, "ngIf"], ["formArrayName", "variants"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "m-0"], [1, "col-12", "col-md-6"], [1, "col-12", "col-md-6", "mb-3", "mb-md-0"], ["id", "backButton", "type", "button", 1, "btn", "btn-secondary", "btn-block", "ml-auto", 3, "click"], [1, "fa", "fa-arrow-left", "in-icon"], [1, "col-12", "col-md-8", "mb-3", "mb-md-0"], ["id", "save", "type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled", "click"], [1, "fas", "fa-plus-circle", "text-primary"], [1, "image-container", 3, "src"], [1, "form-group", "d-flex", "justify-content-center", "text-danger"], [1, "text-danger"], [3, "value"], ["type", "button", "id", "addVariant", 1, "btn", "btn-secondary", "btn-sm", "ml-auto", 2, "float", "right", 3, "click"], [1, "fa", "fa-plus", "in-icon"], ["type", "button", "id", "deleteVariant", 1, "btn", "btn-secondary", "btn-sm", "ml-auto", "mr-3", 2, "float", "right", 3, "click"], [1, "fa", "fa-minus", "in-icon"], [3, "formGroupName"], [1, "row", "px-3", "mb-3"], [1, "col-12", "rounded", "p-3", 2, "border", "1px dashed #cccccc"], [1, "row", "mb-2"], [1, "d-flex", "px-3", "mb-3", "w-100", "align-items-center"], [1, "d-inline-block", "m-0"], ["formControlName", "color", "placeholder", "Merah", "required", "", "type", "text", "pattern", "^[a-zA-Z0-9.\\\\-\\\\/+,=_:'@%| ]*$", 1, "form-control", "dk-text-input", 3, "id"], [1, "input-group"], [1, "input-group-append"], ["id", "currency", 1, "input-group-text", "dk-span-group"], ["formControlName", "price", "placeholder", "10000", "required", "", "type", "text", "pattern", "^[0-9]*$", 1, "form-control", "dk-text-input", 3, "id", "keypress"], ["formControlName", "stock", "placeholder", "1", "required", "", "type", "text", "pattern", "^[0-9]*$", 1, "form-control", "dk-text-input", 3, "id", "keypress"], ["formControlName", "minimumOrder", "placeholder", "1", "required", "", "type", "text", "pattern", "^[0-9]*$", 1, "form-control", "dk-text-input", 3, "id", "keypress"], ["class", "row mb-4", 4, "ngIf"], ["formControlName", "weight", "placeholder", "0.1", "required", "", "type", "text", "pattern", "^[0-9]+(\\.[0-9]{1,2})?$", 1, "form-control", "dk-text-input", 3, "id", "keypress"], ["id", "unit", 1, "input-group-text", "dk-span-group"], [1, "d-flex", 2, "gap", "12px"], ["formControlName", "length", "placeholder", "1", "required", "", "type", "text", "pattern", "^[0-9]*$", 1, "form-control", "dk-text-input", 3, "id", "keypress"], ["id", "lengthUnit", 1, "input-group-text", "dk-span-group"], ["formControlName", "width", "placeholder", "1", "required", "", "type", "text", "pattern", "^[0-9]*$", 1, "form-control", "dk-text-input", 3, "id", "keypress"], ["id", "widthUnit", 1, "input-group-text", "dk-span-group"], ["formControlName", "height", "placeholder", "1", "required", "", "type", "text", "pattern", "^[0-9]*$", 1, "form-control", "dk-text-input", 3, "id", "keypress"], ["id", "heightUnit", 1, "input-group-text", "dk-span-group"]],
        template: function InventoryAddComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, InventoryAddComponent_div_0_Template, 3, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, InventoryAddComponent_ng_template_1_Template, 2, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
          }
        },
        styles: [".center[_ngcontent-%COMP%] {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    position: fixed;\n    top:0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n}\n\nimg.image-container[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 180px;\n    -o-object-fit: contain;\n       object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludmVudG9yeS1hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5QkFBeUI7QUFDekI7SUFDSSwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQiwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsS0FBSztJQUNMLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7QUFDaEI7QUFFQSxpQ0FBaUM7QUFDakM7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFtQjtPQUFuQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoiaW52ZW50b3J5LWFkZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY3NzIGZvciBsb2FkaW5nIHBhZ2UgKi9cbi5jZW50ZXIge1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6MDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi8qIGNzcyBmb3IgaW1hZ2UgY29udGFpbmVyIHBhZ2UgKi9cbmltZy5pbWFnZS1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTgwcHg7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    64332:
    /*!******************************************************************************!*\
      !*** ./src/app/modules/inventory/inventory-edit/inventory-edit.component.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InventoryEditComponent": function InventoryEditComponent() {
          return (
            /* binding */
            _InventoryEditComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/models/user.model */
      53709);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../environments/environment */
      92340);
      /* harmony import */


      var _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/constant/api.constant */
      58412);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../shared/constant/navigation.constant */
      86473);
      /* harmony import */


      var _shared_models_product_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../shared/models/product.model */
      70066);
      /* harmony import */


      var _shared_enum_product_condition_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../shared/enum/product-condition.enum */
      52562);
      /* harmony import */


      var _shared_enum_product_status_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../shared/enum/product-status.enum */
      33595);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _shared_service_request_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/service/request.service */
      67229);
      /* harmony import */


      var _shared_service_api_model_translator_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../shared/service/api-model-translator.service */
      43206);
      /* harmony import */


      var _shared_service_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../shared/service/alert.service */
      96506);
      /* harmony import */


      var _shared_service_error_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../shared/service/error.service */
      38205);
      /* harmony import */


      var _shared_service_validation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../shared/service/validation.service */
      79917);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/router */
      71258);

      function InventoryEditComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "app-inventory-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "i", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Produk dalam proses verifikasi ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "Produk anda dalam proses verifikasi oleh tim DOKU, proses verifikasi dapat berlangsung dalam 1-2 jam.");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "i", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Mohon perbarui detail produk Anda ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"]("Alasan penolakan produk: " + ctx_r6.productDetail.notes);
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "i", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Produk Anda sudah aktif dan live di website Anda ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function InventoryEditComponent_ng_template_1_ng_container_1_div_9_Template_span_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);

            return ctx_r24.openProductLinkDetail();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "Lihat Produk Live ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](10, "i", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "i", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Produk dalam status nonaktif ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "Segera aktifkan produk Anda agar dapat live di website Anda ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_div_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Pilih Gambar");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_div_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "img", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("src", ctx_r10.previewImageProduct1, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_div_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_div_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Pilih Gambar");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_div_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "img", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("src", ctx_r13.previewImageProduct2, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_div_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Pilih Gambar");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_div_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "img", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("src", ctx_r15.previewImageProduct3, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_div_77_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_div_78_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "*This field is not valid input text");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_div_79_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "*Maksimal 238 karakter");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_ng_option_90_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ng-option", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var categoryProduct_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", categoryProduct_r26);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](categoryProduct_r26);
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_div_91_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_div_119_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_div_120_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "*This field is not valid input text");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "input", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_7_Template_input_change_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r43);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

            var variant_r27 = ctx_r42.$implicit;
            var i_r28 = ctx_r42.index;

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);

            return ctx_r41.inactiveVariant(variant_r27.get("uiId").value, "swtVariant-" + i_r28);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "label", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Aktif");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

          var i_r28 = ctx_r44.index;
          var variant_r27 = ctx_r44.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("id", "swtVariant-" + i_r28);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("checked", variant_r27.get("active").value);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("for", "swtVariant-" + i_r28);
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "*This field is not valid input text");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "*This field is not valid input text");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "*Minimal harga 10000");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "*This field is not valid input text");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "*This field is not valid input text");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_58_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_58_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "*This field is not valid input text");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_58_Template(rf, ctx) {
        if (rf & 1) {
          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Berat Varian");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, " Berat dari varian produk setelah dikemas. Gunakan titik untuk bilangan desimal ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "input", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("keypress", function InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_58_Template_input_keypress_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r48);

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4);

            return ctx_r47.validationService.decimalOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "span", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12, "Kilogram (kg)");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](13, InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_58_div_13_Template, 2, 0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](14, InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_58_div_14_Template, 2, 0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

          var i_r28 = ctx_r49.index;
          var variant_r27 = ctx_r49.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("id", "weight-", i_r28, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", variant_r27.get("weight").hasError("required") && (variant_r27.get("weight").dirty || variant_r27.get("weight").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", variant_r27.get("weight").hasError("pattern"));
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_59_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_59_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "*This field is not valid input text");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_59_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_59_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "*This field is not valid input text");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_59_div_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_59_div_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "*This field is not valid input text");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_59_Template(rf, ctx) {
        if (rf & 1) {
          var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Ukuran Varian");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, " Ukuran dari varian produk setelah dikemas untuk menghitung volume ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "input", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("keypress", function InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_59_Template_input_keypress_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r57);

            var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4);

            return ctx_r56.validationService.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "span", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, "cm");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_59_div_15_Template, 2, 0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_59_div_16_Template, 2, 0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "input", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("keypress", function InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_59_Template_input_keypress_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r57);

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4);

            return ctx_r58.validationService.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "span", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](22, "cm");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](23, InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_59_div_23_Template, 2, 0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](24, InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_59_div_24_Template, 2, 0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "input", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("keypress", function InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_59_Template_input_keypress_27_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r57);

            var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4);

            return ctx_r59.validationService.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "span", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](30, "cm");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](31, InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_59_div_31_Template, 2, 0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](32, InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_59_div_32_Template, 2, 0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

          var i_r28 = ctx_r60.index;
          var variant_r27 = ctx_r60.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("id", "length-", i_r28, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", variant_r27.get("length").hasError("required") && (variant_r27.get("length").dirty || variant_r27.get("length").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", variant_r27.get("length").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("id", "width-", i_r28, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", variant_r27.get("width").hasError("required") && (variant_r27.get("width").dirty || variant_r27.get("width").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", variant_r27.get("width").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("id", "height-", i_r28, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", variant_r27.get("height").hasError("required") && (variant_r27.get("height").dirty || variant_r27.get("height").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", variant_r27.get("height").hasError("pattern"));
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_div_126_Template(rf, ctx) {
        if (rf & 1) {
          var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "h4", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_7_Template, 4, 3, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12, "Nama Varian");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, " Varian nama dari produk yang Anda jual ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](17, "input", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](18, InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_18_Template, 2, 0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](19, InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_19_Template, 2, 0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24, "Harga Varian");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](26, " Harga dari varian produk yang Anda jual. Harga minimum Rp 10.000, tanpa titik ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "span", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](31, "Rp");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "input", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("keypress", function InventoryEditComponent_ng_template_1_ng_container_1_div_126_Template_input_keypress_32_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r62);

            var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);

            return ctx_r61.validationService.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](33, InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_33_Template, 2, 0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](34, InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_34_Template, 2, 0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](35, InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_35_Template, 2, 0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](38, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](39, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](40, "Stok Varian");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](41, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](42, " Jumlah varian produk yang dijual ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](43, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](44, "input", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("keypress", function InventoryEditComponent_ng_template_1_ng_container_1_div_126_Template_input_keypress_44_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r62);

            var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);

            return ctx_r63.validationService.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](45, InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_45_Template, 2, 0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](46, InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_46_Template, 2, 0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](47, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](48, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](49, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](50, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](51, "Minimal Pembelian");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](52, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](53, " Minimal pembelian varian produk ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](54, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](55, "input", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("keypress", function InventoryEditComponent_ng_template_1_ng_container_1_div_126_Template_input_keypress_55_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r62);

            var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);

            return ctx_r64.validationService.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](56, InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_56_Template, 2, 0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](57, InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_57_Template, 2, 0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](58, InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_58_Template, 15, 3, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](59, InventoryEditComponent_ng_template_1_ng_container_1_div_126_div_59_Template, 33, 9, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var variant_r27 = ctx.$implicit;
          var i_r28 = ctx.index;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroupName", i_r28);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Varian ", i_r28 + 1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r23.productStatus[ctx_r23.productDetail.status] === ctx_r23.productStatus.APPROVED);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("id", "color-", i_r28, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", variant_r27.get("color").hasError("required") && (variant_r27.get("color").dirty || variant_r27.get("color").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", variant_r27.get("color").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("id", "price-", i_r28, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", variant_r27.get("price").hasError("required") && (variant_r27.get("price").dirty || variant_r27.get("price").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", variant_r27.get("price").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", variant_r27.get("price").hasError("min"));

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("id", "stock-", i_r28, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", variant_r27.get("stock").hasError("required") && (variant_r27.get("stock").dirty || variant_r27.get("stock").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", variant_r27.get("stock").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("id", "minimumOrder-", i_r28, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", variant_r27.get("minimumOrder").hasError("required") && (variant_r27.get("minimumOrder").dirty || variant_r27.get("minimumOrder").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", variant_r27.get("minimumOrder").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r23.editProductForm.get("digitalGoods").value !== true);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r23.editProductForm.get("digitalGoods").value !== true);
        }
      }

      function InventoryEditComponent_ng_template_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Detail Produk");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Tambahkan produk dan mulailah untuk menjual produk Anda");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, InventoryEditComponent_ng_template_1_ng_container_1_div_7_Template, 10, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, InventoryEditComponent_ng_template_1_ng_container_1_div_8_Template, 10, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, InventoryEditComponent_ng_template_1_ng_container_1_div_9_Template, 11, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, InventoryEditComponent_ng_template_1_ng_container_1_div_10_Template, 10, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "form", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngSubmit", function InventoryEditComponent_ng_template_1_ng_container_1_Template_form_ngSubmit_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r66);

            var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

            return ctx_r65.submitEditProduct();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20, "Tipe Produk");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](22, "Pilih jika Anda ingin menambahkan ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24, " produk digital ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](25, " yang tidak membutuhkan pengiriman");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function InventoryEditComponent_ng_template_1_ng_container_1_Template_input_change_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r66);

            var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

            return ctx_r67.validateDigitalGoods();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](31, "Produk fisik");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function InventoryEditComponent_ng_template_1_ng_container_1_Template_input_change_33_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r66);

            var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

            return ctx_r68.validateDigitalGoods();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](35, "Produk digital");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](38, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](39, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](40, "Foto Produk");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](41, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](42, " Maksimal ukuran gambar 1 MB atau minimum 300 x 300 px. Format gambar .jpg .jpeg atau .png ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](43, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](44, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](45, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](46, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](47, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](48, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](49, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](50, InventoryEditComponent_ng_template_1_ng_container_1_div_50_Template, 4, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](51, InventoryEditComponent_ng_template_1_ng_container_1_div_51_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](52, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function InventoryEditComponent_ng_template_1_ng_container_1_Template_input_change_52_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r66);

            var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

            return ctx_r69.fileProgress($event, "previewImageProduct1");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](53, InventoryEditComponent_ng_template_1_ng_container_1_div_53_Template, 2, 0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](54, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](55, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](56, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](57, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](58, InventoryEditComponent_ng_template_1_ng_container_1_div_58_Template, 4, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](59, InventoryEditComponent_ng_template_1_ng_container_1_div_59_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](60, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function InventoryEditComponent_ng_template_1_ng_container_1_Template_input_change_60_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r66);

            var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

            return ctx_r70.fileProgress($event, "previewImageProduct2");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](61, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](62, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](63, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](64, "label", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](65, InventoryEditComponent_ng_template_1_ng_container_1_div_65_Template, 4, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](66, InventoryEditComponent_ng_template_1_ng_container_1_div_66_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](67, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function InventoryEditComponent_ng_template_1_ng_container_1_Template_input_change_67_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r66);

            var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

            return ctx_r71.fileProgress($event, "previewImageProduct3");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](68, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](69, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](70, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](71, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](72, "Nama Produk");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](73, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](74, " Cantumkan maksimal 238 karakter terdiri dari jenis produk, merek, dan keterangan seperti warna, bahan, atau tipe ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](75, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](76, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](77, InventoryEditComponent_ng_template_1_ng_container_1_div_77_Template, 2, 0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](78, InventoryEditComponent_ng_template_1_ng_container_1_div_78_Template, 2, 0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](79, InventoryEditComponent_ng_template_1_ng_container_1_div_79_Template, 2, 0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](80, "hr", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](81, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](82, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](83, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](84, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](85, "Kategori");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](86, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](87, " Pilih kategori yang sesuai dengan produk Anda ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](88, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](89, "ng-select", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](90, InventoryEditComponent_ng_template_1_ng_container_1_ng_option_90_Template, 2, 2, "ng-option", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](91, InventoryEditComponent_ng_template_1_ng_container_1_div_91_Template, 2, 0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](92, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](93, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](94, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](95, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](96, "Kondisi");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](97, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](98, " Pilih kondisi produk yang dijual ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](99, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](100, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](101, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](102, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](103, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](104, "Baru");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](105, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](106, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](107, "label", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](108, "Bekas");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](109, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](110, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](111, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](112, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](113, "Deskripsi Produk");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](114, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](115, " Pastikan deskripsi produk memuat spesifikasi, ukuran, bahan, masa berlaku, dan lainnya. Cantumkan maksimal 260 karakter agar pembeli semakin mudah mengerti produk Anda ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](116, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](117, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](118, "textarea", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](119, InventoryEditComponent_ng_template_1_ng_container_1_div_119_Template, 2, 0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](120, InventoryEditComponent_ng_template_1_ng_container_1_div_120_Template, 2, 0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](121, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](122, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](123, "h4", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](124, "Informasi Penjualan");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](125, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](126, InventoryEditComponent_ng_template_1_ng_container_1_div_126_Template, 60, 18, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](127, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](128, "hr", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](129, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](130, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](131, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](132, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](133, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function InventoryEditComponent_ng_template_1_ng_container_1_Template_button_click_133_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r66);

            var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

            return ctx_r72.changePage("list");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](134, "i", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](135, " BATAL ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](136, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](137, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](138, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](139, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](140, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](141, "SIMPAN");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.productStatus[ctx_r4.productDetail.status] === ctx_r4.productStatus.WAITING);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.productStatus[ctx_r4.productDetail.status] === ctx_r4.productStatus.REJECTED);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.productStatus[ctx_r4.productDetail.status] === ctx_r4.productStatus.APPROVED && ctx_r4.productDetail.active === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.productStatus[ctx_r4.productDetail.status] === ctx_r4.productStatus.APPROVED && ctx_r4.productDetail.active === false);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx_r4.editProductForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("autoClose", "inside");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r4.previewImageProduct1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.previewImageProduct1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.editProductForm.get("image1").hasError("required") && (ctx_r4.editProductForm.get("image1").dirty || ctx_r4.editProductForm.get("image1").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r4.previewImageProduct2);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.previewImageProduct2);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r4.previewImageProduct3);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.previewImageProduct3);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.editProductForm.get("name").hasError("required") && (ctx_r4.editProductForm.get("name").dirty || ctx_r4.editProductForm.get("name").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.editProductForm.get("name").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.editProductForm.get("name").hasError("maxLength"));

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("multiple", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r4.listCategoryProduct);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.editProductForm.get("category").hasError("required") && (ctx_r4.editProductForm.get("category").dirty || ctx_r4.editProductForm.get("category").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", ctx_r4.productCondition.New);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", ctx_r4.productCondition.Used);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.editProductForm.get("description").hasError("required") && (ctx_r4.editProductForm.get("description").dirty || ctx_r4.editProductForm.get("description").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.editProductForm.get("description").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r4.editProductForm.get("variants")["controls"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !ctx_r4.editProductForm.valid);
        }
      }

      function InventoryEditComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, InventoryEditComponent_ng_template_1_ng_container_0_Template, 2, 0, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, InventoryEditComponent_ng_template_1_ng_container_1_Template, 142, 27, "ng-container", 4);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.pageName === "list");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.pageName === "edit");
        }
      }

      var _InventoryEditComponent = /*#__PURE__*/function () {
        function _InventoryEditComponent(formBuilder, requestService, apiModelTranslatorService, alertService, errorService, validationService, modalService, router) {
          _classCallCheck(this, _InventoryEditComponent);

          this.formBuilder = formBuilder;
          this.requestService = requestService;
          this.apiModelTranslatorService = apiModelTranslatorService;
          this.alertService = alertService;
          this.errorService = errorService;
          this.validationService = validationService;
          this.modalService = modalService;
          this.router = router; //loading component

          this.loading = true;
          this.user = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_0__.User();
          this.listCategoryProduct = [];
          this.productLinkRoot = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.envUrl;
          this.productLinkBusiness = "";
          this.productLinkDetail = "";
          this.pageName = "";
          this.apiGetProductCategory = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_2__.APIConstant.PRODUCT_CATEGORY;
          this.apiGetMerchatLink = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_2__.APIConstant.MERCHANT_LINK;
          this.apiProduct = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_2__.APIConstant.PRODUCT;
          this.productDetail = new _shared_models_product_model__WEBPACK_IMPORTED_MODULE_5__.Product();
          this.productCondition = _shared_enum_product_condition_enum__WEBPACK_IMPORTED_MODULE_6__.ProductCondition;
          this.productStatus = _shared_enum_product_status_enum__WEBPACK_IMPORTED_MODULE_7__.ProductStatus;
          this.titleInactiveVariant = "Inaktif Varian ?";
          this.textInactiveVariant = "Varian akan dinonaktifkan";
          this.confirmButtonTextInactiveVariant = "NONAKTIF";
          this.successAllertInactiveVariant = "Success! Inaktif Varian";
        }

        _createClass(_InventoryEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.pageName = 'edit';
            this.initLoad();
          }
        }, {
          key: "initLoad",
          value: function initLoad() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var product;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.getDetailProduct();

                    case 2:
                      product = _context6.sent;
                      _context6.next = 5;
                      return this.getListCategoryProduct();

                    case 5:
                      this.form(product);
                      this.user = this.requestService.getUserToken();
                      _context6.next = 9;
                      return this.getMerchantLink();

                    case 9:
                      this.productLinkBusiness = _context6.sent;
                      this.productLinkDetail = this.productLinkRoot + '/' + _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_4__.NavigationConstant.ROUTING_RETAIL + '/' + _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_4__.NavigationConstant.ROUTING_MERCHANT + '/' + this.productLinkBusiness + '/' + this.productDetail.link;

                    case 11:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "form",
          value: function form(product) {
            var _this7 = this;

            this.editProductForm = this.formBuilder.group({
              name: [product === null || product === void 0 ? void 0 : product.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.pattern]],
              category: [product === null || product === void 0 ? void 0 : product.category, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
              digitalGoods: [product === null || product === void 0 ? void 0 : product.variants[0].digitalGoods, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
              description: [product === null || product === void 0 ? void 0 : product.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.pattern]],
              link: [product === null || product === void 0 ? void 0 : product.link, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.pattern]],
              image1: [null],
              uiId: [this.productUiId],
              condition: [product === null || product === void 0 ? void 0 : product.condition, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
              variants: this.formBuilder.array(product.variants.map(function (variant) {
                return _this7.initVariantsProduct(variant);
              }))
            });
          }
        }, {
          key: "initVariantsProduct",
          value: function initVariantsProduct(variant) {
            return this.formBuilder.group({
              uiId: [variant.uiId, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
              active: [variant.active],
              color: [variant.color, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.pattern]],
              minimumOrder: [variant.minimumOrder, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.pattern]],
              length: [variant.length, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.pattern]],
              width: [variant.width, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.pattern]],
              height: [variant.height, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.pattern]],
              stock: [variant.stock, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.pattern]],
              price: [variant.price, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.pattern, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min(10000)]],
              weight: [variant.weight, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.pattern]]
            });
          }
        }, {
          key: "getListCategoryProduct",
          value: function getListCategoryProduct() {
            var _this8 = this;

            this.requestService.get(this.apiGetProductCategory, null).subscribe(function (response) {
              _this8.listCategoryProduct = response;
              _this8.loading = false;
            }, function (error) {
              _this8.errorService.getErrorApi(error);
            });
          }
        }, {
          key: "getDetailProduct",
          value: function getDetailProduct() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this9 = this;

              var apiDetailProduct;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      apiDetailProduct = this.apiProduct + '/' + this.productUiId + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_2__.APIConstant.PRODUCT_DETAIL;
                      return _context7.abrupt("return", this.requestService.get(apiDetailProduct, null).toPromise().then(function (response) {
                        var _a, _b, _c;

                        _this9.productDetail = _this9.apiModelTranslatorService.snakeToCamelCase(response);
                        _this9.productDetail.link = decodeURI(_this9.productDetail.link);
                        _this9.previewImageProduct1 = (_a = _this9.productDetail.images[0]) === null || _a === void 0 ? void 0 : _a.url;
                        _this9.previewImageProduct2 = (_b = _this9.productDetail.images[1]) === null || _b === void 0 ? void 0 : _b.url;
                        _this9.previewImageProduct3 = (_c = _this9.productDetail.images[2]) === null || _c === void 0 ? void 0 : _c.url;
                        return _this9.productDetail;
                      }, function (error) {
                        _this9.errorService.getErrorApi(error);
                      }));

                    case 2:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "getMerchantLink",
          value: function getMerchantLink() {
            var _this10 = this;

            return this.requestService.get(this.apiGetMerchatLink, null).toPromise().then(function (response) {
              return response.merchant.link;
            }, function (error) {
              _this10.errorService.getErrorApi(error);
            });
          }
        }, {
          key: "submitEditProduct",
          value: function submitEditProduct() {
            var _this11 = this;

            if (this.editProductForm.valid) {
              var encodedLink = encodeURI(this.editProductForm.get("link").value);
              this.editProductForm.patchValue({
                'link': encodedLink
              });
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                title: 'Ubah Produk?',
                text: 'Informasi produk akan berubah dan ditampilkan ke website Pelanggan',
                showCancelButton: true,
                cancelButtonText: 'BATAL',
                cancelButtonColor: '#666666',
                reverseButtons: true,
                confirmButtonColor: '#E1251B',
                confirmButtonText: 'UBAH',
                showLoaderOnConfirm: true,
                customClass: {
                  title: 'swal2-title-modal-medium'
                },
                preConfirm: function preConfirm() {
                  return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                    var _this12 = this;

                    return regeneratorRuntime.wrap(function _callee8$(_context8) {
                      while (1) {
                        switch (_context8.prev = _context8.next) {
                          case 0:
                            this.requestService.put(this.apiProduct, null, this.apiModelTranslatorService.camelToSnakeCase(this.editProductForm.value)).subscribe(function (res) {
                              _this12.router.navigate([_shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_4__.NavigationConstant.ROUTING_INVENTORY]);

                              _this12.alertService.setProps("Success! Edit Produk", false);
                            }, function (error) {
                              _this12.errorService.getErrorApi(error);
                            }); // upload image product 1

                            if (!(this.imageToUpload1 !== null && this.imageToUpload1 !== undefined)) {
                              _context8.next = 4;
                              break;
                            }

                            _context8.next = 4;
                            return this.uploadImageProduct(this.productUiId, this.imageToUpload1, "0");

                          case 4:
                            if (!(this.imageToUpload2 !== null && this.imageToUpload2 !== undefined)) {
                              _context8.next = 7;
                              break;
                            }

                            _context8.next = 7;
                            return this.uploadImageProduct(this.productUiId, this.imageToUpload2, "1");

                          case 7:
                            if (!(this.imageToUpload3 !== null && this.imageToUpload3 !== undefined)) {
                              _context8.next = 10;
                              break;
                            }

                            _context8.next = 10;
                            return this.uploadImageProduct(this.productUiId, this.imageToUpload3, "2");

                          case 10:
                          case "end":
                            return _context8.stop();
                        }
                      }
                    }, _callee8, this);
                  }));
                }
              });
            }
          }
        }, {
          key: "uploadImageProduct",
          value: function uploadImageProduct(productUiId, file, index) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _this13 = this;

              var apiSubmitProduct;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      apiSubmitProduct = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_2__.APIConstant.PRODUCT;
                      return _context9.abrupt("return", this.requestService.uploadSingleFile("image", apiSubmitProduct + '/' + productUiId + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_2__.APIConstant.PRODUCT_IMAGES, file, index).toPromise().then(function (res) {}, function (error) {
                        _this13.errorService.getErrorApi(error);
                      }));

                    case 2:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "changePage",
          value: function changePage(pageName) {
            this.pageName = pageName;
          }
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
            var _this14 = this;

            var _a;

            var mimeType = (_a = this.fileData) === null || _a === void 0 ? void 0 : _a.type;
            var reader = new FileReader();
            reader.readAsDataURL(this.fileData);

            reader.onload = function (_event) {
              var img = new Image();
              img.src = reader.result;

              img.onload = function () {
                var height = img.naturalHeight;
                var width = img.naturalWidth;

                if (name === 'previewImageProduct1') {
                  if (mimeType.match('image.*') === null) {
                    _this14.editProductForm.patchValue({
                      'image1': null
                    });

                    _this14.alertService.setProps("Failed Upload Type", true);
                  } else if (_this14.fileData.size > 1000000) {
                    _this14.editProductForm.patchValue({
                      'image1': null
                    });

                    _this14.alertService.setProps("Size more than 1 MB", true);
                  } else if (height < 300 || width < 300) {
                    _this14.editProductForm.patchValue({
                      'image1': null
                    });

                    _this14.alertService.setProps("Dimension less than 300 x 300 pixels", true);
                  } else {
                    _this14.previewImageProduct1 = reader.result;
                    _this14.imageToUpload1 = _this14.fileData;
                  }
                } else if (name === 'previewImageProduct2') {
                  if (mimeType.match('image.*') === null) {
                    _this14.editProductForm.patchValue({
                      'image2': null
                    });

                    _this14.alertService.setProps("Failed Upload Type", true);
                  } else if (_this14.fileData.size > 1000000) {
                    _this14.editProductForm.patchValue({
                      'image2': null
                    });

                    _this14.alertService.setProps("Size more than 1 MB", true);
                  } else if (height < 300 || width < 300) {
                    _this14.editProductForm.patchValue({
                      'image2': null
                    });

                    _this14.alertService.setProps("Dimension less than 300 x 300 pixels", true);
                  } else {
                    _this14.previewImageProduct2 = reader.result;
                    _this14.imageToUpload2 = _this14.fileData;
                  }
                } else if (name === 'previewImageProduct3') {
                  if (mimeType.match('image.*') === null) {
                    _this14.editProductForm.patchValue({
                      'image3': null
                    });

                    _this14.alertService.setProps("Failed Upload Type", true);
                  } else if (_this14.fileData.size > 1000000) {
                    _this14.editProductForm.patchValue({
                      'image3': null
                    });

                    _this14.alertService.setProps("Size more than 1 MB", true);
                  } else if (height < 300 || width < 300) {
                    _this14.editProductForm.patchValue({
                      'image3': null
                    });

                    _this14.alertService.setProps("Dimension less than 300 x 300 pixels", true);
                  } else {
                    _this14.previewImageProduct3 = reader.result;
                    _this14.imageToUpload3 = _this14.fileData;
                  }
                }
              };
            };
          }
        }, {
          key: "variants",
          get: function get() {
            return this.editProductForm.get('variants');
          }
        }, {
          key: "addNewVariant",
          value: function addNewVariant() {
            var lengthVariant = this.variants.length;

            if (lengthVariant < 5) {
              this.variants.push(this.initVariantsProduct(new _shared_models_product_model__WEBPACK_IMPORTED_MODULE_5__.Variant()));
              this.validateDigitalGoods();
            }
          }
        }, {
          key: "deleteVariant",
          value: function deleteVariant() {
            var index = this.variants.length - 1;
            this.variants.removeAt(index);
          }
        }, {
          key: "inactiveVariant",
          value: function inactiveVariant(variantUiId, id) {
            var _this15 = this;

            var ele = document.getElementById(id);

            if (ele.checked) {
              this.titleInactiveVariant = "Aktif Variant ?";
              this.textInactiveVariant = "Variant akan diaktifkan";
              this.confirmButtonTextInactiveVariant = "AKTIF";
              this.successAllertInactiveVariant = "Success! Aktif Varian";
            } else {
              this.titleInactiveVariant = "Inaktif Varian ?";
              this.textInactiveVariant = "Varian akan dinonaktifkan";
              this.confirmButtonTextInactiveVariant = "NONAKTIF";
              this.successAllertInactiveVariant = "Success! Inaktif Varian";
            }

            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
              title: this.titleInactiveVariant,
              text: this.textInactiveVariant,
              showCancelButton: true,
              cancelButtonText: 'BATAL',
              cancelButtonColor: '#666666',
              reverseButtons: true,
              confirmButtonColor: '#E1251B',
              confirmButtonText: this.confirmButtonTextInactiveVariant,
              showLoaderOnConfirm: true,
              customClass: {
                title: 'swal2-title-modal-medium'
              },
              preConfirm: function preConfirm() {
                return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(_this15, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                  var _this16 = this;

                  var apiInactiveVariant;
                  return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) {
                      switch (_context10.prev = _context10.next) {
                        case 0:
                          console.log(id);
                          apiInactiveVariant = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_2__.APIConstant.PRODUCT_VARIANT + '/' + variantUiId + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_2__.APIConstant.PRODUCT_ACTIVATE;
                          this.requestService.put(apiInactiveVariant, null, null).subscribe(function (res) {
                            _this16.router.navigate([_shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_4__.NavigationConstant.ROUTING_INVENTORY]);

                            ele.checked = res.current;

                            _this16.alertService.setProps(_this16.successAllertInactiveVariant, false);
                          }, function (error) {
                            ele.checked = !ele.checked;

                            _this16.errorService.getErrorApi(error);
                          });

                        case 3:
                        case "end":
                          return _context10.stop();
                      }
                    }
                  }, _callee10, this);
                }));
              }
            }).then(function (result) {
              if (result.isDismissed) {
                ele.checked = !ele.checked;
              }
            });
          }
        }, {
          key: "validateDigitalGoods",
          value: function validateDigitalGoods() {
            var _this17 = this;

            this.variants.controls.forEach(function (element, index) {
              if (_this17.editProductForm.get('digitalGoods').value === true) {
                element.patchValue({
                  'width': 1
                });
                element.patchValue({
                  'height': 1
                });
                element.patchValue({
                  'length': 1
                });
                element.patchValue({
                  'weight': 1
                });
              } else {
                element.patchValue({
                  'width': ""
                });
                element.patchValue({
                  'height': ""
                });
                element.patchValue({
                  'length': ""
                });
                element.patchValue({
                  'weight': ""
                });
              }
            });
          }
        }, {
          key: "openProductLinkDetail",
          value: function openProductLinkDetail() {
            window.open(this.productLinkDetail);
          }
        }]);

        return _InventoryEditComponent;
      }();

      _InventoryEditComponent.ɵfac = function InventoryEditComponent_Factory(t) {
        return new (t || _InventoryEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_service_request_service__WEBPACK_IMPORTED_MODULE_8__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_service_api_model_translator_service__WEBPACK_IMPORTED_MODULE_9__.ApiModelTranslatorService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_service_alert_service__WEBPACK_IMPORTED_MODULE_10__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_service_error_service__WEBPACK_IMPORTED_MODULE_11__.ErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_12__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router));
      };

      _InventoryEditComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
        type: _InventoryEditComponent,
        selectors: [["app-inventory-edit"]],
        inputs: {
          productUiId: "productUiId"
        },
        decls: 3,
        vars: 2,
        consts: [[4, "ngIf", "ngIfElse"], ["loaded", ""], [1, "center"], ["role", "status", 1, "spinner-border", "text-primary", "spinner-sm", "mr-5"], [4, "ngIf"], [1, "row"], [1, "form-group", "col-md-12", "page-header"], ["class", "alert alert-warning border-warning", "style", "width: 100%; border-style: solid", 4, "ngIf"], ["class", "alert alert-danger border-danger", "style", "width: 100%; border-style: solid", 4, "ngIf"], ["class", "alert alert-success border-success", "style", "width: 100%; border-style: solid", 4, "ngIf"], ["class", "alert alert-dark border-dark", "style", "width: 100%; border-style: solid", 4, "ngIf"], [1, "card"], [1, "card-body"], [1, "col-12"], ["id", "editProductForm", 1, "pt-10", 3, "formGroup", "ngSubmit"], [1, "row", "mb-4"], [1, "col-12", "col-md-3", "mb-2", "mb-md-0"], ["ngbPopover", "Contoh: Voucher Pulsa, Token Listrik, Voucher Belanja, Game, dll, yang tidak memerlukan pengiriman", "popoverTitle", "Produk Digital", 1, "text-primary", 2, "cursor", "pointer", 3, "autoClose"], [1, "col-12", "col-md-9"], [1, "form-group"], [1, "form-check", "form-check-inline", "mr-5"], ["type", "radio", "name", "digitalGoods", "id", "physicalGoods", "formControlName", "digitalGoods", 1, "form-check-input", 3, "value", "change"], ["for", "physicalGoods", 1, "form-check-label"], [1, "form-check", "form-check-inline"], ["type", "radio", "name", "digitalGoods", "id", "digitalGoods", "formControlName", "digitalGoods", 1, "form-check-input", 3, "value", "change"], ["for", "digitalGoods", 1, "form-check-label"], [1, "row", "mt-3", "px-3"], [1, "col-12", "col-md-4"], [1, "form-group", "d-flex", "justify-content-center"], [1, "image-upload", "d-flex", "justify-content-center", 2, "border-style", "dashed", "width", "220px", "height", "220px"], ["for", "file-input1", 2, "margin-top", "auto", "margin-bottom", "auto", "cursor", "pointer"], ["id", "file-input1", "type", "file", "name", "image", "accept", "image/png, image/jpg, image/jpeg", "formControlName", "image1", 3, "change"], ["class", "col text-danger", 4, "ngIf"], ["for", "file-input2", 2, "margin-top", "auto", "margin-bottom", "auto", "cursor", "pointer"], ["id", "file-input2", "type", "file", "name", "image", "accept", "image/png, image/jpg, image/jpeg", 3, "change"], ["for", "file-input3", 2, "margin-top", "auto", "margin-bottom", "auto", "cursor", "pointer"], ["id", "file-input3", "type", "file", "name", "image", "accept", "image/png, image/jpg, image/jpeg", 3, "change"], ["formControlName", "name", "id", "name", "placeholder", "Baju lengan panjang", "required", "", "type", "text", "pattern", "^[a-zA-Z0-9.\\\\-\\\\/+,=_:'@%| ]*$", "maxlength", "238", 1, "form-control", "dk-text-input"], ["class", "text-danger", 4, "ngIf"], [1, "row", "p-3", "my-2"], ["formControlName", "category", "id", "category", "placeholder", "Pilih kategori produk", 3, "multiple"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "radio", "id", "conditionNew", "formControlName", "condition", 3, "value"], ["for", "conditionNew", 1, "form-check-label"], ["type", "radio", "id", "conditionUsed", "formControlName", "condition", 3, "value"], ["for", "conditionUsed", 1, "form-check-label"], ["formControlName", "description", "id", "description", "placeholder", "Deskripsi produk anda", "required", "", "pattern", "^[a-zA-Z0-9.\\\\-\\\\/+,=_:'@%| ]*$", "rows", "4", "maxlength", "260", 1, "form-control", "dk-text-input"], [1, "col-3", 2, "margin-bottom", "auto", "margin-top", "auto"], [2, "margin-bottom", "auto", "margin-top", "auto"], ["formArrayName", "variants"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "m-0"], [1, "col-12", "col-md-6"], [1, "col-12", "col-md-6", "mb-3", "mb-md-0"], ["id", "backButton", "type", "button", 1, "btn", "btn-secondary", "btn-block", "ml-auto", 3, "click"], [1, "fa", "fa-arrow-left", "in-icon"], [1, "col-12", "col-md-8", "mb-3", "mb-md-0"], ["id", "save", "type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], [1, "alert", "alert-warning", "border-warning", 2, "width", "100%", "border-style", "solid"], [1, "content"], [1, "fas", "fa-exclamation-circle", "in-icon", "ml-3", 2, "margin-top", "auto", "margin-bottom", "auto"], [1, "col", 2, "color", "#4d4d4d"], [1, "alert", "alert-danger", "border-danger", 2, "width", "100%", "border-style", "solid"], [1, "fas", "fa-times-circle", "in-icon", "ml-3", 2, "margin-top", "auto", "margin-bottom", "auto"], [1, "alert", "alert-success", "border-success", 2, "width", "100%", "border-style", "solid"], [1, "fas", "fa-check-circle", "in-icon", "ml-3", 2, "margin-top", "auto", "margin-bottom", "auto"], [1, "text-primary", 2, "cursor", "pointer", 3, "click"], [1, "fas", "fa-external-link-alt"], [1, "alert", "alert-dark", "border-dark", 2, "width", "100%", "border-style", "solid"], [1, "fas", "fa-question-circle", "in-icon", "ml-3", 2, "margin-top", "auto", "margin-bottom", "auto"], [1, "fas", "fa-plus-circle", "text-primary"], [1, "image-container", 3, "src"], [1, "col", "text-danger"], [1, "text-danger"], [3, "value"], [3, "formGroupName"], [1, "row", "px-3", "mb-3"], [1, "col-12", "rounded", "p-3", 2, "border", "1px dashed #cccccc"], [1, "row", "mb-2"], [1, "d-flex", "px-3", "mb-3", "w-100", "align-items-center"], [1, "d-inline-block", "m-0"], ["class", "custom-control custom-switch d-inline-block", 4, "ngIf"], ["formControlName", "color", "placeholder", "Merah", "required", "", "type", "text", "pattern", "^[a-zA-Z0-9.\\\\-\\\\/+,=_:'@%| ]*$", 1, "form-control", "dk-text-input", 3, "id"], [1, "input-group"], [1, "input-group-append"], ["id", "currency", 1, "input-group-text", "dk-span-group"], ["formControlName", "price", "placeholder", "10000", "required", "", "type", "text", "pattern", "^[0-9]*$", 1, "form-control", "dk-text-input", 3, "id", "keypress"], ["formControlName", "stock", "placeholder", "1", "required", "", "type", "text", "pattern", "^[0-9]*$", 1, "form-control", "dk-text-input", 3, "id", "keypress"], ["formControlName", "minimumOrder", "placeholder", "1", "required", "", "type", "text", "pattern", "^[0-9]*$", 1, "form-control", "dk-text-input", 3, "id", "keypress"], ["class", "row mb-4", 4, "ngIf"], [1, "custom-control", "custom-switch", "d-inline-block"], ["type", "checkbox", 1, "switch", 3, "id", "checked", "change"], [3, "for"], ["formControlName", "weight", "placeholder", "0.1", "required", "", "type", "text", "pattern", "^[0-9]+(\\.[0-9]{1,2})?$", 1, "form-control", "dk-text-input", 3, "id", "keypress"], ["id", "unit", 1, "input-group-text", "dk-span-group"], [1, "d-flex", 2, "gap", "12px"], ["formControlName", "length", "placeholder", "1", "required", "", "type", "text", "pattern", "^[0-9]*$", 1, "form-control", "dk-text-input", 3, "id", "keypress"], ["id", "lengthUnit", 1, "input-group-text", "dk-span-group"], ["formControlName", "width", "placeholder", "1", "required", "", "type", "text", "pattern", "^[0-9]*$", 1, "form-control", "dk-text-input", 3, "id", "keypress"], ["id", "widthUnit", 1, "input-group-text", "dk-span-group"], ["formControlName", "height", "placeholder", "1", "required", "", "type", "text", "pattern", "^[0-9]*$", 1, "form-control", "dk-text-input", 3, "id", "keypress"], ["id", "heightUnit", 1, "input-group-text", "dk-span-group"]],
        template: function InventoryEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, InventoryEditComponent_div_0_Template, 3, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, InventoryEditComponent_ng_template_1_Template, 2, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
          }
        },
        styles: [".center[_ngcontent-%COMP%] {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    position: fixed;\n    top:0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n}\n\nimg.image-container[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 180px;\n    -o-object-fit: contain;\n       object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludmVudG9yeS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUJBQXlCO0FBQ3pCO0lBQ0ksMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLEtBQUs7SUFDTCxTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0FBQ2hCO0FBRUEsaUNBQWlDO0FBQ2pDO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBbUI7T0FBbkIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6ImludmVudG9yeS1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBjc3MgZm9yIGxvYWRpbmcgcGFnZSAqL1xuLmNlbnRlciB7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDowO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLyogY3NzIGZvciBpbWFnZSBjb250YWluZXIgcGFnZSAqL1xuaW1nLmltYWdlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxODBweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    4917:
    /*!******************************************************************************!*\
      !*** ./src/app/modules/inventory/inventory-list/inventory-list.component.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InventoryListComponent": function InventoryListComponent() {
          return (
            /* binding */
            _InventoryListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/models/user.model */
      53709);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../environments/environment */
      92340);
      /* harmony import */


      var _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/constant/api.constant */
      58412);
      /* harmony import */


      var _shared_models_response_api_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/models/response-api.model */
      5320);
      /* harmony import */


      var _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../shared/constant/navigation.constant */
      86473);
      /* harmony import */


      var _shared_constant_error_code_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../shared/constant/error-code.constant */
      28228);
      /* harmony import */


      var _shared_enum_product_status_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../shared/enum/product-status.enum */
      33595);
      /* harmony import */


      var _shared_constant_api_error_code_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../shared/constant/api-error-code.constant */
      96694);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _shared_service_request_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/service/request.service */
      67229);
      /* harmony import */


      var _shared_service_api_model_translator_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../shared/service/api-model-translator.service */
      43206);
      /* harmony import */


      var _shared_service_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../shared/service/alert.service */
      96506);
      /* harmony import */


      var _shared_service_error_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../shared/service/error.service */
      38205);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _inventory_add_inventory_add_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../inventory-add/inventory-add.component */
      12379);
      /* harmony import */


      var _inventory_edit_inventory_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../inventory-edit/inventory-edit.component */
      64332);

      var _c0 = ["configurationModal"];

      function InventoryListComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }
      }

      function InventoryListComponent_ng_template_1_ng_container_0_tbody_33_tr_1_span_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r17.productStatusEnum.ACTIVE, " ");
        }
      }

      function InventoryListComponent_ng_template_1_ng_container_0_tbody_33_tr_1_span_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r18.productStatusEnum.NON_ACTIVE, " ");
        }
      }

      function InventoryListComponent_ng_template_1_ng_container_0_tbody_33_tr_1_span_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r19.productStatusEnum.WAITING, " ");
        }
      }

      function InventoryListComponent_ng_template_1_ng_container_0_tbody_33_tr_1_span_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r20.productStatusEnum.REJECTED, " ");
        }
      }

      function InventoryListComponent_ng_template_1_ng_container_0_tbody_33_tr_1_button_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function InventoryListComponent_ng_template_1_ng_container_0_tbody_33_tr_1_button_25_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r24);

            var inventory_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](4);

            return ctx_r23.openModalStatusProduct(_r3, inventory_r15.uiId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Nonaktifkan Produk");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }
      }

      function InventoryListComponent_ng_template_1_ng_container_0_tbody_33_tr_1_button_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function InventoryListComponent_ng_template_1_ng_container_0_tbody_33_tr_1_button_26_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r27);

            var inventory_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](6);

            return ctx_r26.openModalStatusProduct(_r5, inventory_r15.uiId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Aktifkan Produk");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }
      }

      function InventoryListComponent_ng_template_1_ng_container_0_tbody_33_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "td", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](6, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "td", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "td", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function InventoryListComponent_ng_template_1_ng_container_0_tbody_33_tr_1_Template_i_click_12_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r30);

            var inventory_r15 = restoredCtx.$implicit;

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);

            return ctx_r29.copyMessage(ctx_r29.productLinkRoot + ctx_r29.decodeURI(inventory_r15.link));
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "td", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](14, InventoryListComponent_ng_template_1_ng_container_0_tbody_33_tr_1_span_14_Template, 2, 1, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, InventoryListComponent_ng_template_1_ng_container_0_tbody_33_tr_1_span_15_Template, 2, 1, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](16, InventoryListComponent_ng_template_1_ng_container_0_tbody_33_tr_1_span_16_Template, 2, 1, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](17, InventoryListComponent_ng_template_1_ng_container_0_tbody_33_tr_1_span_17_Template, 2, 1, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "td", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](21, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function InventoryListComponent_ng_template_1_ng_container_0_tbody_33_tr_1_Template_button_click_23_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r30);

            var inventory_r15 = restoredCtx.$implicit;

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);

            return ctx_r31.changePage("edit", inventory_r15.uiId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](24, "Lihat Detail");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](25, InventoryListComponent_ng_template_1_ng_container_0_tbody_33_tr_1_button_25_Template, 2, 0, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](26, InventoryListComponent_ng_template_1_ng_container_0_tbody_33_tr_1_button_26_Template, 2, 0, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var inventory_r15 = ctx.$implicit;
          var i_r16 = ctx.index;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("id", "name-" + i_r16);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("src", inventory_r15.images[0] == null ? null : inventory_r15.images[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", inventory_r15.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("id", "price-" + i_r16);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind4"](6, 18, inventory_r15.price, "Rp ", "symbol-narrow", "1.0"));

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("id", "stock-" + i_r16);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](inventory_r15.stock);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("id", "link-" + i_r16);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r14.productLinkRoot + ctx_r14.decodeURI(inventory_r15.link));

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("id", "copy-" + i_r16);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("id", "status-" + i_r16);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", inventory_r15.active == true && ctx_r14.productStatusEnum[inventory_r15.status] == ctx_r14.productStatusEnum.APPROVED);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", inventory_r15.active == false && ctx_r14.productStatusEnum[inventory_r15.status] == ctx_r14.productStatusEnum.APPROVED);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", inventory_r15.active == true && ctx_r14.productStatusEnum[inventory_r15.status] == ctx_r14.productStatusEnum.WAITING);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", inventory_r15.active == true && ctx_r14.productStatusEnum[inventory_r15.status] == ctx_r14.productStatusEnum.REJECTED);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("id", "action-" + i_r16);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", inventory_r15.active == true && ctx_r14.productStatusEnum[inventory_r15.status] === ctx_r14.productStatusEnum.APPROVED);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", inventory_r15.active == false && ctx_r14.productStatusEnum[inventory_r15.status] === ctx_r14.productStatusEnum.APPROVED);
        }
      }

      function InventoryListComponent_ng_template_1_ng_container_0_tbody_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, InventoryListComponent_ng_template_1_ng_container_0_tbody_33_tr_1_Template, 27, 23, "tr", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r12.productList);
        }
      }

      function InventoryListComponent_ng_template_1_ng_container_0_div_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "i", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "Maaf, belum ada Produk");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "Klik button TAMBAH PRODUK untuk");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11, "menambah produk pertamamu");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }
      }

      function InventoryListComponent_ng_template_1_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Daftar Produk");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Atur dan kelola produk disini");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function InventoryListComponent_ng_template_1_ng_container_0_Template_input_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r33);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);

            return ctx_r32.inputSearchProduct = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function InventoryListComponent_ng_template_1_ng_container_0_Template_i_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r33);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);

            return ctx_r34.findProductMerchant();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function InventoryListComponent_ng_template_1_ng_container_0_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r33);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);

            return ctx_r35.changePage("add", null);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, "Tambah Produk ");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](15, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "table", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](22, "Nama");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](24, "Harga(Rp)");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](26, "Stock");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](28, "Tautan");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](29, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](31, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](32, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](33, InventoryListComponent_ng_template_1_ng_container_0_tbody_33_Template, 2, 1, "tbody", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](34, InventoryListComponent_ng_template_1_ng_container_0_div_34_Template, 12, 0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](35, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "select", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function InventoryListComponent_ng_template_1_ng_container_0_Template_select_ngModelChange_36_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r33);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);

            return ctx_r36.pageSize = $event;
          })("ngModelChange", function InventoryListComponent_ng_template_1_ng_container_0_Template_select_ngModelChange_36_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r33);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);

            return ctx_r37.onPageChange(ctx_r37.page, ctx_r37.pageSize);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](38, "5 items per page");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](40, "10 items per page");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](41, "option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](42, "15 items per page");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](45, "ngb-pagination", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("pageChange", function InventoryListComponent_ng_template_1_ng_container_0_Template_ngb_pagination_pageChange_45_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r33);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);

            return ctx_r38.page = $event;
          })("pageChange", function InventoryListComponent_ng_template_1_ng_container_0_Template_ngb_pagination_pageChange_45_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r33);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);

            return ctx_r39.onPageChange($event, ctx_r39.pageSize);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r9.inputSearchProduct);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r9.productList.length !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r9.productList.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r9.pageSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngValue", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngValue", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngValue", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate3"]("Showing ", ctx_r9.startData, " to ", ctx_r9.endData, " from ", ctx_r9.totalData, " entries");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("page", ctx_r9.page)("pageSize", ctx_r9.pageSize)("collectionSize", ctx_r9.totalData)("maxSize", 2);
        }
      }

      function InventoryListComponent_ng_template_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "app-inventory-add");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        }
      }

      function InventoryListComponent_ng_template_1_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "app-inventory-edit", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("productUiId", ctx_r11.productUiId);
        }
      }

      function InventoryListComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, InventoryListComponent_ng_template_1_ng_container_0_Template, 46, 14, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, InventoryListComponent_ng_template_1_ng_container_1_Template, 2, 0, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, InventoryListComponent_ng_template_1_ng_container_2_Template, 2, 1, "ng-container", 7);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.pageName === "list");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.pageName === "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.pageName === "edit");
        }
      }

      function InventoryListComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "h5", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "Nonaktifkan Produk?");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, " Produk akan dinonaktifkan dan tidak akan tertampil pada website pelanggan Anda. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "button", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function InventoryListComponent_ng_template_3_Template_button_click_12_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r43);

            var modal_r40 = restoredCtx.$implicit;
            return modal_r40.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, "BATAL");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "button", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function InventoryListComponent_ng_template_3_Template_button_click_14_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r43);

            var c_r41 = restoredCtx.close;

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

            return c_r41(ctx_r44.activateProduct());
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](15, "NONAKTIFKAN");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }
      }

      function InventoryListComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "h5", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "Aktifkan Produk?");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, " Produk akan diaktifkan dan akan tertampil pada website pelanggan Anda. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "button", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function InventoryListComponent_ng_template_5_Template_button_click_12_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r48);

            var modal_r45 = restoredCtx.$implicit;
            return modal_r45.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, "BATAL");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "button", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function InventoryListComponent_ng_template_5_Template_button_click_14_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r48);

            var c_r46 = restoredCtx.close;

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

            return c_r46(ctx_r49.activateProduct());
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](15, "AKTIFKAN");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }
      }

      function InventoryListComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "h5", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "Profil Toko");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, " Sebelum mengaktifkan fitur ini, mohon isikan terlebih dahulu profil toko Anda. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "button", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function InventoryListComponent_ng_template_7_Template_button_click_12_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r53);

            var c_r51 = restoredCtx.close;

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

            return c_r51(ctx_r52.configurationStore());
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, "OK");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }
      }

      var _InventoryListComponent = /*#__PURE__*/function () {
        function _InventoryListComponent(formBuilder, requestService, apiModelTranslatorService, alertService, errorService, modalService, router, activatedRoute) {
          _classCallCheck(this, _InventoryListComponent);

          this.formBuilder = formBuilder;
          this.requestService = requestService;
          this.apiModelTranslatorService = apiModelTranslatorService;
          this.alertService = alertService;
          this.errorService = errorService;
          this.modalService = modalService;
          this.router = router;
          this.activatedRoute = activatedRoute; //loading component

          this.loading = true;
          this.pageName = ""; //table pagination

          this.page = 1;
          this.pageSize = 5;
          this.totalData = 0;
          this.startData = 0;
          this.endData = 0;
          this.user = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_0__.User();
          this.responseApi = new _shared_models_response_api_model__WEBPACK_IMPORTED_MODULE_3__.ResponseApi();
          this.productList = new Array();
          this.productStatusEnum = _shared_enum_product_status_enum__WEBPACK_IMPORTED_MODULE_6__.ProductStatus;
          this.inputSearchProduct = null;
          this.apiGetProduct = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_2__.APIConstant.PRODUCT;
          this.apiGetMerchatLink = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_2__.APIConstant.MERCHANT_LINK;
          this.productLinkBusiness = "";
          this.modalUiIdProductActivate = "";
          this.productLinkRoot = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.envUrl + "/" + _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_4__.NavigationConstant.ROUTING_RETAIL + '/' + _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_4__.NavigationConstant.ROUTING_MERCHANT + '/'; //transfer variable to edit component

          this.productUiId = '';
        }

        _createClass(_InventoryListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.initLoad();

                    case 2:
                      // this.initLoad();
                      this.user = this.requestService.getUserToken();
                      _context11.next = 5;
                      return this.getMerchantLink();

                    case 5:
                      this.productLinkBusiness = _context11.sent;
                      this.productLinkRoot = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.envUrl + "/" + _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_4__.NavigationConstant.ROUTING_RETAIL + '/' + _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_4__.NavigationConstant.ROUTING_MERCHANT + '/' + this.productLinkBusiness + '/';

                    case 7:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "initLoad",
          value: function initLoad() {
            var _a, _b, _c;

            return (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var pageName;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      // await this.kybValidation();
                      this.getListInventory(this.page, this.pageSize, 'DESC', this.inputSearchProduct);
                      pageName = (_c = (_b = (_a = this.activatedRoute) === null || _a === void 0 ? void 0 : _a.snapshot) === null || _b === void 0 ? void 0 : _b.queryParamMap) === null || _c === void 0 ? void 0 : _c.get('pageName');
                      this.pageName = pageName !== null && pageName !== void 0 ? pageName : 'list';

                    case 3:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "getListInventory",
          value: function getListInventory(page, pageSize, sort, name) {
            var _this18 = this;

            var requestParam = new Map();
            requestParam.set('page', page - 1);
            requestParam.set('size', pageSize);
            requestParam.set('sort', sort);

            if (name !== null) {
              requestParam.set('name', name);
            }

            this.requestService.get(this.apiGetProduct, requestParam).subscribe(function (response) {
              _this18.productList = _this18.apiModelTranslatorService.snakeToCamelCase(response.products);
              _this18.totalData = response.pageable.total_data;
              _this18.startData = response.pageable.start_data;
              _this18.endData = response.pageable.end_data;
              _this18.loading = false;
            }, function (error) {
              _this18.responseApi = error.error;

              if (_this18.responseApi.error.code === _shared_constant_api_error_code_constant__WEBPACK_IMPORTED_MODULE_7__.ApiErrorCode.MERCHANT_NOT_FOUND) {
                _this18.router.navigate([_shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_4__.NavigationConstant.ERROR_CUSTOM, _shared_constant_error_code_constant__WEBPACK_IMPORTED_MODULE_5__.ErrorCodeConstant.KYB]);
              } else if (_this18.responseApi.error.code === _shared_constant_api_error_code_constant__WEBPACK_IMPORTED_MODULE_7__.ApiErrorCode.MERCHANT_INACTIVE) {
                _this18.modalService.open(_this18.configurationModal, {
                  backdrop: 'static',
                  keyboard: false
                });
              } else {
                _this18.errorService.getErrorApi(error);
              }
            });
          }
        }, {
          key: "getMerchantLink",
          value: function getMerchantLink() {
            var _this19 = this;

            return this.requestService.get(this.apiGetMerchatLink, null).toPromise().then(function (response) {
              return response.merchant.link;
            }, function (error) {
              _this19.errorService.getErrorApi(error);
            });
          }
        }, {
          key: "configurationStore",
          value: function configurationStore() {
            window.parent.postMessage({
              func: 'onNavigation',
              url: '/' + _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_4__.NavigationConstant.ROUTING_RETAIL + '/' + _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_4__.NavigationConstant.ROUTING_CONFIGURATION
            }, "*");
          }
        }, {
          key: "copyMessage",
          value: function copyMessage(val) {
            var selBox = document.createElement('textarea');
            selBox.style.position = 'fixed';
            selBox.style.left = '0';
            selBox.style.top = '0';
            selBox.style.opacity = '0';
            selBox.value = val;
            document.body.appendChild(selBox);
            selBox.focus();
            selBox.select();
            document.execCommand('copy');
            document.body.removeChild(selBox);
            this.alertService.setProps("Product Link is already copied", false);
          }
        }, {
          key: "changePage",
          value: function changePage(pageName, productUiId) {
            if (pageName === 'edit') {
              this.productUiId = productUiId;
            }

            this.pageName = pageName;
          }
        }, {
          key: "onPageChange",
          value: function onPageChange(page, pageSize) {
            this.getListInventory(page, pageSize, 'DESC', this.inputSearchProduct);
          }
        }, {
          key: "openModalStatusProduct",
          value: function openModalStatusProduct(idModal, productUiId) {
            this.modalUiIdProductActivate = productUiId;
            this.modalService.open(idModal, {
              backdrop: 'static',
              keyboard: false
            });
          }
        }, {
          key: "activateProduct",
          value: function activateProduct() {
            var _this20 = this;

            var apiUpdateProductActive = this.apiGetProduct + '/' + this.modalUiIdProductActivate + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_2__.APIConstant.PRODUCT_ACTIVATE;
            this.requestService.put(apiUpdateProductActive, null, null).subscribe(function (response) {
              var propsAlert = "";

              if (response.current === false) {
                propsAlert = "Nonaktif";
              } else {
                propsAlert = "Aktif";
              }

              _this20.alertService.setProps("Success! Status Product is " + propsAlert, false);

              _this20.getListInventory(_this20.page, _this20.pageSize, 'DESC', _this20.inputSearchProduct);
            }, function (error) {
              _this20.errorService.getErrorApi(error);
            });
          }
        }, {
          key: "decodeURI",
          value: function (_decodeURI) {
            function decodeURI(_x) {
              return _decodeURI.apply(this, arguments);
            }

            decodeURI.toString = function () {
              return _decodeURI.toString();
            };

            return decodeURI;
          }(function (param) {
            return decodeURI(param);
          })
        }, {
          key: "findProductMerchant",
          value: function findProductMerchant() {
            console.log(this.inputSearchProduct);
            this.getListInventory(this.page, this.pageSize, 'DESC', this.inputSearchProduct);
          }
        }]);

        return _InventoryListComponent;
      }();

      _InventoryListComponent.ɵfac = function InventoryListComponent_Factory(t) {
        return new (t || _InventoryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_service_request_service__WEBPACK_IMPORTED_MODULE_8__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_service_api_model_translator_service__WEBPACK_IMPORTED_MODULE_9__.ApiModelTranslatorService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_service_alert_service__WEBPACK_IMPORTED_MODULE_10__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_service_error_service__WEBPACK_IMPORTED_MODULE_11__.ErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute));
      };

      _InventoryListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
        type: _InventoryListComponent,
        selectors: [["app-inventory-list"]],
        viewQuery: function InventoryListComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.configurationModal = _t.first);
          }
        },
        decls: 9,
        vars: 2,
        consts: [[4, "ngIf", "ngIfElse"], ["loaded", ""], ["disableProduct", ""], ["enableProduct", ""], ["configurationModal", ""], [1, "center"], ["role", "status", 1, "spinner-border", "text-primary", "spinner-sm", "mr-5"], [4, "ngIf"], [1, "row"], [1, "form-group", "col-md-12", "page-header"], [1, "card", "card-body", "mb-4"], [1, "form-group", "row", "mr-1", "ml-1"], [2, "width", "30%"], ["type", "text", "placeholder", "Cari nama produk", "id", "inputSearch", 1, "form-control", "dk-text-input", 3, "ngModel", "ngModelChange"], ["id", "iconSearch", 1, "fas", "fa-search", "field-icon", "pointer-cursor", 3, "click"], [1, "d-flex", "ml-auto"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-plus", "in-icon"], [1, "card"], [1, "card-body"], [1, "table", "table-responsive-sm", "table-striped", 2, "table-layout", "fixed"], ["scope", "col"], ["style", "margin-top: 100px; margin-bottom: 100px", 4, "ngIf"], [1, "d-flex", "bd-highlight", "mb-3"], [1, "custom-select", "mr-auto", "bd-highlight", "align-middle", 2, "width", "auto", 3, "ngModel", "ngModelChange"], [3, "ngValue"], [1, "card-description", "p-2", "bd-highlight", "align-middle"], [1, "p-2", "bd-highlight", "align-middle", 3, "page", "pageSize", "collectionSize", "maxSize", "pageChange"], [4, "ngFor", "ngForOf"], [1, "align-middle", "text-ellipsis", "text-ellipsis-breakable", 3, "id"], [1, "image-container", 3, "src"], [1, "align-middle", 3, "id"], [1, "far", "fa-copy", 2, "cursor", "pointer", 3, "click"], ["class", "badge badge-success", 4, "ngIf"], ["class", "badge badge-secondary", 4, "ngIf"], ["class", "badge badge-warning", 4, "ngIf"], ["class", "badge badge-danger", 4, "ngIf"], [3, "id"], ["ngbDropdown", "", 1, "d-inline-block"], ["id", "dropdownAction", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary", "dropdown-icon"], [1, "fa", "fa-ellipsis-v"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownAction"], ["ngbDropdownItem", "", 3, "click"], ["ngbDropdownItem", "", 3, "click", 4, "ngIf"], [1, "badge", "badge-success"], [1, "badge", "badge-secondary"], [1, "badge", "badge-warning"], [1, "badge", "badge-danger"], [2, "margin-top", "100px", "margin-bottom", "100px"], [1, "d-flex", "justify-content-center", 2, "margin-bottom", "20px"], [1, "fas", "fa-search", "fa-8x"], [1, "d-flex", "justify-content-center"], [3, "productUiId"], [1, "modal-header"], [1, "modal-title"], [1, "event-icon", "d-flex"], ["src", "https://cdn-dev.oss-ap-southeast-5.aliyuncs.com/doku-ui-framework/doku/img/modal-ornament/warning-icon.png", "alt", ""], [1, "header-content"], [1, "modal-body"], [1, "background"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-link", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "header-content", "mt-auto", "mb-auto"]],
        template: function InventoryListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, InventoryListComponent_div_0_Template, 3, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, InventoryListComponent_ng_template_1_Template, 3, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, InventoryListComponent_ng_template_3_Template, 16, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, InventoryListComponent_ng_template_5_Template, 16, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, InventoryListComponent_ng_template_7_Template, 14, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgSelectMultipleOption"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbPagination, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbDropdownItem, _inventory_add_inventory_add_component__WEBPACK_IMPORTED_MODULE_12__.InventoryAddComponent, _inventory_edit_inventory_edit_component__WEBPACK_IMPORTED_MODULE_13__.InventoryEditComponent],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.CurrencyPipe],
        styles: [".center[_ngcontent-%COMP%] {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    position: fixed;\n    top:0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n}\n\nimg.image-container[_ngcontent-%COMP%] {\n    width: 45px;\n    height: 45px;\n    -o-object-fit: contain;\n       object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludmVudG9yeS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUJBQXlCO0FBQ3pCO0lBQ0ksMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLEtBQUs7SUFDTCxTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0FBQ2hCO0FBRUEsaUNBQWlDO0FBQ2pDO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBbUI7T0FBbkIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6ImludmVudG9yeS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBjc3MgZm9yIGxvYWRpbmcgcGFnZSAqL1xuLmNlbnRlciB7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDowO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLyogY3NzIGZvciBpbWFnZSBjb250YWluZXIgcGFnZSAqL1xuaW1nLmltYWdlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    14455:
    /*!*******************************************************!*\
      !*** ./src/app/modules/inventory/inventory.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InventoryModule": function InventoryModule() {
          return (
            /* binding */
            _InventoryModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _inventory_list_inventory_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./inventory-list/inventory-list.component */
      4917);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _inventory_add_inventory_add_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./inventory-add/inventory-add.component */
      12379);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-select/ng-select */
      36868);
      /* harmony import */


      var _inventory_edit_inventory_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./inventory-edit/inventory-edit.component */
      64332);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _inventory_list_inventory_list_component__WEBPACK_IMPORTED_MODULE_0__.InventoryListComponent,
        pathMatch: 'full'
      }];

      var _InventoryModule = function _InventoryModule() {
        _classCallCheck(this, _InventoryModule);
      };

      _InventoryModule.ɵfac = function InventoryModule_Factory(t) {
        return new (t || _InventoryModule)();
      };

      _InventoryModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _InventoryModule
      });
      _InventoryModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPaginationModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPopoverModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_InventoryModule, {
          declarations: [_inventory_list_inventory_list_component__WEBPACK_IMPORTED_MODULE_0__.InventoryListComponent, _inventory_add_inventory_add_component__WEBPACK_IMPORTED_MODULE_1__.InventoryAddComponent, _inventory_edit_inventory_edit_component__WEBPACK_IMPORTED_MODULE_2__.InventoryEditComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPaginationModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPopoverModule]
        });
      })();

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetComponentScope"](_inventory_add_inventory_add_component__WEBPACK_IMPORTED_MODULE_1__.InventoryAddComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _inventory_list_inventory_list_component__WEBPACK_IMPORTED_MODULE_0__.InventoryListComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPopover, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["ɵr"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupName], []);

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetComponentScope"](_inventory_edit_inventory_edit_component__WEBPACK_IMPORTED_MODULE_2__.InventoryEditComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _inventory_list_inventory_list_component__WEBPACK_IMPORTED_MODULE_0__.InventoryListComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPopover, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["ɵr"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupName], []);
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_modules_inventory_inventory_module_ts-es5.js.map