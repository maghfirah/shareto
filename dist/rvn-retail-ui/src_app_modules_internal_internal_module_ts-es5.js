(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkrvn_retail_ui"] = self["webpackChunkrvn_retail_ui"] || []).push([["src_app_modules_internal_internal_module_ts"], {
    /***/
    32772:
    /*!*******************************************************************************!*\
      !*** ./src/app/modules/internal/internal-detail/internal-detail.component.ts ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InternalDetailComponent": function InternalDetailComponent() {
          return (
            /* binding */
            _InternalDetailComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
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


      var _shared_models_product_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/models/product.model */
      70066);
      /* harmony import */


      var _shared_enum_category_product_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../shared/enum/category-product.enum */
      67033);
      /* harmony import */


      var _shared_enum_product_condition_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../shared/enum/product-condition.enum */
      52562);
      /* harmony import */


      var _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../shared/constant/navigation.constant */
      86473);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var _shared_enum_product_status_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/enum/product-status.enum */
      33595);
      /* harmony import */


      var _shared_enum_decline_reason_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../shared/enum/decline-reason.enum */
      18965);
      /* harmony import */


      var _shared_models_validate_product_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../shared/models/validate-product.model */
      64308);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _shared_service_request_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../shared/service/request.service */
      67229);
      /* harmony import */


      var _shared_service_api_model_translator_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../shared/service/api-model-translator.service */
      43206);
      /* harmony import */


      var _shared_service_alert_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../shared/service/alert.service */
      96506);
      /* harmony import */


      var _shared_service_error_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../shared/service/error.service */
      38205);
      /* harmony import */


      var _shared_service_validation_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../shared/service/validation.service */
      79917);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/router */
      71258);

      function InternalDetailComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "app-internal-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_1_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_1_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "*This field is not valid input text");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_1_div_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "Pilih Gambar");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_1_div_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "img", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("src", ctx_r12.previewImageProduct1, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsanitizeUrl"]);
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_1_div_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_1_div_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "Pilih Gambar");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_1_div_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "img", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("src", ctx_r15.previewImageProduct2, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsanitizeUrl"]);
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_1_div_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "Pilih Gambar");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_1_div_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "img", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("src", ctx_r17.previewImageProduct3, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsanitizeUrl"]);
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_1_div_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_1_div_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "*This field is not valid input text");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_1_ng_option_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ng-option", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var categoryProduct_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", categoryProduct_r28.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](categoryProduct_r28.name);
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_1_div_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_1_div_80_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_1_div_87_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_1_div_88_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "*This field is not valid input text");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_1_div_99_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_1_div_100_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "*This field is not valid input text");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "*This field is not valid input text");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "*This field is not valid input text");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "*This field is not valid input text");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "*This field is not valid input text");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_39_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_39_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "*This field is not valid input text");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_39_Template(rf, ctx) {
        if (rf & 1) {
          var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "Berat Produk");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "input", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("keypress", function InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_39_Template_input_keypress_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r45);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](4);

            return ctx_r44.validationService.decimalOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "span", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9, "Kilogram (kg)");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](10, InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_39_div_10_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](11, InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_39_div_11_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();

          var i_r30 = ctx_r46.index;
          var variant_r29 = ctx_r46.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate1"]("id", "weight- + ", i_r30, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", variant_r29.get("weight").hasError("required") && (variant_r29.get("weight").dirty || variant_r29.get("weight").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", variant_r29.get("weight").hasError("pattern"));
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_40_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_40_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "*This field is not valid input text");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_40_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_40_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "*This field is not valid input text");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_40_div_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_40_div_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "*This field is not valid input text");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_40_Template(rf, ctx) {
        if (rf & 1) {
          var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "Ukuran Produk");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "input", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("keypress", function InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_40_Template_input_keypress_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r54);

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](4);

            return ctx_r53.validationService.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "span", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10, "cm");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](11, InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_40_div_11_Template, 2, 0, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](12, InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_40_div_12_Template, 2, 0, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("keypress", function InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_40_Template_input_keypress_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r54);

            var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](4);

            return ctx_r55.validationService.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "span", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18, "cm");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](19, InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_40_div_19_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](20, InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_40_div_20_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](21, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](23, "input", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("keypress", function InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_40_Template_input_keypress_23_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r54);

            var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](4);

            return ctx_r56.validationService.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](24, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](25, "span", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](26, "cm");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](27, InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_40_div_27_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](28, InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_40_div_28_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();

          var i_r30 = ctx_r57.index;
          var variant_r29 = ctx_r57.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate1"]("id", "length- + ", i_r30, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", variant_r29.get("length").hasError("required") && (variant_r29.get("length").dirty || variant_r29.get("length").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", variant_r29.get("length").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate1"]("id", "width- + ", i_r30, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", variant_r29.get("width").hasError("required") && (variant_r29.get("width").dirty || variant_r29.get("width").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", variant_r29.get("width").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate1"]("id", "height- + ", i_r30, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", variant_r29.get("height").hasError("required") && (variant_r29.get("height").dirty || variant_r29.get("height").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", variant_r29.get("height").hasError("pattern"));
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "*This field is not valid input text");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_1_div_102_Template(rf, ctx) {
        if (rf & 1) {
          var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "button", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function InternalDetailComponent_ng_template_1_ng_container_1_div_102_Template_button_click_5_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r59);

            var variant_r29 = restoredCtx.$implicit;

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);

            return ctx_r58.inactiveVariant(variant_r29.get("uiId").value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](6, "i", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7, " INACTIVE VARIAN ");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11, "Varian");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](13, "input", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](14, InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_14_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](15, InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_15_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](18, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](19, "Stok");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](20, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](21, "input", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("keypress", function InternalDetailComponent_ng_template_1_ng_container_1_div_102_Template_input_keypress_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r59);

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);

            return ctx_r60.validationService.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](22, InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_22_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](23, InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_23_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](24, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](25, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](26, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](27, "Harga Produk");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](28, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](29, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](30, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](31, "span", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](32, "Rp");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](33, "input", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("keypress", function InternalDetailComponent_ng_template_1_ng_container_1_div_102_Template_input_keypress_33_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r59);

            var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);

            return ctx_r61.validationService.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](34, "small", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](35, "Harga minimum Rp 10.000");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](36, InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_36_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](37, InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_37_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](38, InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_38_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](39, InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_39_Template, 12, 3, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](40, InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_40_Template, 29, 9, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](41, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](42, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](43, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](44, "Minimal Pembelian");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](45, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](46, "input", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("keypress", function InternalDetailComponent_ng_template_1_ng_container_1_div_102_Template_input_keypress_46_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r59);

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);

            return ctx_r62.validationService.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](47, InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_47_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](48, InternalDetailComponent_ng_template_1_ng_container_1_div_102_div_48_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var variant_r29 = ctx.$implicit;
          var i_r30 = ctx.index;

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroupName", i_r30);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("Varian Produk ", i_r30 + 1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate1"]("id", "inactiveVariant- +  ", i_r30, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate1"]("id", "color- + ", i_r30, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", variant_r29.get("color").hasError("required") && (variant_r29.get("color").dirty || variant_r29.get("color").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", variant_r29.get("color").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate1"]("id", "stock- + ", i_r30, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", variant_r29.get("stock").hasError("required") && (variant_r29.get("stock").dirty || variant_r29.get("stock").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", variant_r29.get("stock").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate1"]("id", "price- + ", i_r30, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", variant_r29.get("price").hasError("required") && (variant_r29.get("price").dirty || variant_r29.get("price").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", variant_r29.get("price").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", variant_r29.get("price").hasError("min"));

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r27.editProductForm.get("category").value !== ctx_r27.categoryDigitalGoods.DigitalGoods);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r27.editProductForm.get("category").value !== ctx_r27.categoryDigitalGoods.DigitalGoods);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate1"]("id", "minimumOrder- + ", i_r30, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", variant_r29.get("minimumOrder").hasError("required") && (variant_r29.get("minimumOrder").dirty || variant_r29.get("minimumOrder").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", variant_r29.get("minimumOrder").hasError("pattern"));
        }
      }

      function InternalDetailComponent_ng_template_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "Detail Produk");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6, "Approve atau Reject detail produk dari Merchant");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "form", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngSubmit", function InternalDetailComponent_ng_template_1_ng_container_1_Template_form_ngSubmit_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r64);

            var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);

            return ctx_r63.submitEditProduct();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14, "Informasi Produk");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18, "ID Produk");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](20, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](21, InternalDetailComponent_ng_template_1_ng_container_1_div_21_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](22, InternalDetailComponent_ng_template_1_ng_container_1_div_22_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](24, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](25, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](26, "Unggah Foto");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](27, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](28, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](29, "Picture upload is mandatory, maximum size is 1 MB. File must be .jpg or .png");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](30, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](31, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](32, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](33, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](34, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](35, InternalDetailComponent_ng_template_1_ng_container_1_div_35_Template, 4, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](36, InternalDetailComponent_ng_template_1_ng_container_1_div_36_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](37, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("change", function InternalDetailComponent_ng_template_1_ng_container_1_Template_input_change_37_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r64);

            var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);

            return ctx_r65.fileProgress($event, "previewImageProduct1");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](38, InternalDetailComponent_ng_template_1_ng_container_1_div_38_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](39, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](40, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](41, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](42, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](43, InternalDetailComponent_ng_template_1_ng_container_1_div_43_Template, 4, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](44, InternalDetailComponent_ng_template_1_ng_container_1_div_44_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](45, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("change", function InternalDetailComponent_ng_template_1_ng_container_1_Template_input_change_45_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r64);

            var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);

            return ctx_r66.fileProgress($event, "previewImageProduct2");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](46, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](47, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](48, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](49, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](50, InternalDetailComponent_ng_template_1_ng_container_1_div_50_Template, 4, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](51, InternalDetailComponent_ng_template_1_ng_container_1_div_51_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](52, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("change", function InternalDetailComponent_ng_template_1_ng_container_1_Template_input_change_52_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r64);

            var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);

            return ctx_r67.fileProgress($event, "previewImageProduct3");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](53, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](54, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](55, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](56, "Nama Produk");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](57, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](58, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](59, InternalDetailComponent_ng_template_1_ng_container_1_div_59_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](60, InternalDetailComponent_ng_template_1_ng_container_1_div_60_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](61, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](62, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](63, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](64, "Kategori");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](65, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](66, "ng-select", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("change", function InternalDetailComponent_ng_template_1_ng_container_1_Template_ng_select_change_66_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r64);

            var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);

            return ctx_r68.validateDigitalGoods();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](67, InternalDetailComponent_ng_template_1_ng_container_1_ng_option_67_Template, 2, 2, "ng-option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](68, InternalDetailComponent_ng_template_1_ng_container_1_div_68_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](69, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](70, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](71, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](72, "Kondisi");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](73, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](74, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](75, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](76, " Baru");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](77, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](78, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](79, " Bekas");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](80, InternalDetailComponent_ng_template_1_ng_container_1_div_80_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](81, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](82, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](83, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](84, "Deskripsi Produk");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](85, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](86, "textarea", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](87, InternalDetailComponent_ng_template_1_ng_container_1_div_87_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](88, InternalDetailComponent_ng_template_1_ng_container_1_div_88_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](89, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](90, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](91, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](92, "Tautan Produk");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](93, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](94, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](95, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](96, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](97);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](98, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](99, InternalDetailComponent_ng_template_1_ng_container_1_div_99_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](100, InternalDetailComponent_ng_template_1_ng_container_1_div_100_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](101, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](102, InternalDetailComponent_ng_template_1_ng_container_1_div_102_Template, 49, 18, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](103, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](104, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](105, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function InternalDetailComponent_ng_template_1_ng_container_1_Template_button_click_105_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r64);

            var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);

            return ctx_r69.changePage("list");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](106, "i", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](107, " BATAL ");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](108, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](109, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function InternalDetailComponent_ng_template_1_ng_container_1_Template_button_click_109_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r64);

            var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](6);

            return ctx_r70.openModalStatusProduct(_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](110, " TOLAK ");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](111, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](112, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function InternalDetailComponent_ng_template_1_ng_container_1_Template_button_click_112_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r64);

            var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](4);

            return ctx_r71.openModalStatusProduct(_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](113, " SETUJUI ");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroup", ctx_r8.editProductForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r8.editProductForm.get("code").hasError("required") && (ctx_r8.editProductForm.get("code").dirty || ctx_r8.editProductForm.get("code").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r8.editProductForm.get("code").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r8.previewImageProduct1);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r8.previewImageProduct1);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r8.editProductForm.get("image1").hasError("required") && (ctx_r8.editProductForm.get("image1").dirty || ctx_r8.editProductForm.get("image1").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r8.previewImageProduct2);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r8.previewImageProduct2);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r8.previewImageProduct3);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r8.previewImageProduct3);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r8.editProductForm.get("name").hasError("required") && (ctx_r8.editProductForm.get("name").dirty || ctx_r8.editProductForm.get("name").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r8.editProductForm.get("name").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("multiple", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r8.listCategoryProduct);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r8.editProductForm.get("category").hasError("required") && (ctx_r8.editProductForm.get("category").dirty || ctx_r8.editProductForm.get("category").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx_r8.productCondition.New);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx_r8.productCondition.Used);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r8.editProductForm.get("condition").hasError("required") && (ctx_r8.editProductForm.get("condition").dirty || ctx_r8.editProductForm.get("condition").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r8.editProductForm.get("description").hasError("required") && (ctx_r8.editProductForm.get("description").dirty || ctx_r8.editProductForm.get("description").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r8.editProductForm.get("description").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r8.productLinkHost);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r8.editProductForm.get("link").hasError("required") && (ctx_r8.editProductForm.get("link").dirty || ctx_r8.editProductForm.get("link").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r8.editProductForm.get("link").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r8.editProductForm.get("variants")["controls"]);
        }
      }

      function InternalDetailComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, InternalDetailComponent_ng_template_1_ng_container_0_Template, 2, 0, "ng-container", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, InternalDetailComponent_ng_template_1_ng_container_1_Template, 114, 24, "ng-container", 6);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r2.pageName === "list");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r2.pageName === "edit");
        }
      }

      function InternalDetailComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "h5", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](4, "img", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7, "Setujui Produk?");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11, " Pastikan produk yang akan disetujui sudah sesuai dengan syarat dan ketentuan yang berlaku di Jokul ");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "button", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function InternalDetailComponent_ng_template_3_Template_button_click_13_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r75);

            var modal_r72 = restoredCtx.$implicit;
            return modal_r72.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14, "BATAL");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "button", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function InternalDetailComponent_ng_template_3_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r75);

            var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();

            return ctx_r76.submitApproveProduct();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](16, "SETUJUI");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }
      }

      function InternalDetailComponent_ng_template_5_div_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "textarea", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function InternalDetailComponent_ng_template_5_div_33_Template_textarea_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r81);

            var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);

            return ctx_r80.otherDeclineReasonText = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r79.otherDeclineReasonText);
        }
      }

      function InternalDetailComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "h5", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](4, "img", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7, "Tolak Produk?");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11, " Apakah informasi yang ditampilkan tidak sesuai dengan syarat & ketentuan di Jokul? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13, " Pilih alasan kenapa produk ini ditolak ");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "input", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function InternalDetailComponent_ng_template_5_Template_input_ngModelChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r83);

            var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();

            return ctx_r82.declineReason = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "label", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](17, " Produk yang dijual adalah produk terlarang ");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](20, "(Obat-obatan terlarang, senjata tajam, dll)");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](21, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "input", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function InternalDetailComponent_ng_template_5_Template_input_ngModelChange_22_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r83);

            var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();

            return ctx_r84.declineReason = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](23, "label", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](24, " Melebihi batas maksimal produk per toko ");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](25, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](26, "input", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function InternalDetailComponent_ng_template_5_Template_input_ngModelChange_26_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r83);

            var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();

            return ctx_r85.declineReason = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](27, "label", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](28, " Produk telah kadaluwarsa ");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](29, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](30, "input", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function InternalDetailComponent_ng_template_5_Template_input_ngModelChange_30_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r83);

            var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();

            return ctx_r86.declineReason = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](31, "label", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](32, " Alasan Lainnya ");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](33, InternalDetailComponent_ng_template_5_div_33_Template, 2, 1, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](34, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](35, "button", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function InternalDetailComponent_ng_template_5_Template_button_click_35_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r83);

            var modal_r77 = restoredCtx.$implicit;
            return modal_r77.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](36, "BATAL");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](37, "button", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function InternalDetailComponent_ng_template_5_Template_button_click_37_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r83);

            var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();

            return ctx_r88.submitDeclineProduct();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](38, "TOLAK");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r6.declineReason)("value", ctx_r6.declineReasonEnum.Drugs);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r6.declineReason)("value", ctx_r6.declineReasonEnum.Capacity);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r6.declineReason)("value", ctx_r6.declineReasonEnum.Expired);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r6.declineReason)("value", ctx_r6.declineReasonEnum.Others);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r6.declineReason === "Others");

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", ctx_r6.declineReason === null || ctx_r6.declineReason === ctx_r6.declineReasonEnum.Others && ctx_r6.otherDeclineReasonText === "");
        }
      }

      var _InternalDetailComponent = /*#__PURE__*/function () {
        function _InternalDetailComponent(formBuilder, requestService, apiModelTranslatorService, alertService, errorService, validationService, modalService, router, activatedRoute) {
          _classCallCheck(this, _InternalDetailComponent);

          this.formBuilder = formBuilder;
          this.requestService = requestService;
          this.apiModelTranslatorService = apiModelTranslatorService;
          this.alertService = alertService;
          this.errorService = errorService;
          this.validationService = validationService;
          this.modalService = modalService;
          this.router = router;
          this.activatedRoute = activatedRoute; //loading component

          this.loading = true;
          this.user = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_0__.User();
          this.listCategoryProduct = [];
          this.productLinkRoot = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.envUrl;
          this.productLinkBusiness = "";
          this.productLinkHost = "";
          this.pageName = "";
          this.apiGetProductCategory = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_2__.APIConstant.INTERNAL + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_2__.APIConstant.INTERNAL_CATEGORY;
          this.apiProduct = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_2__.APIConstant.INTERNAL + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_2__.APIConstant.PRODUCT;
          this.productDetail = new _shared_models_product_model__WEBPACK_IMPORTED_MODULE_3__.Product();
          this.categoryDigitalGoods = _shared_enum_category_product_enum__WEBPACK_IMPORTED_MODULE_4__.CategoryProduct;
          this.productCondition = _shared_enum_product_condition_enum__WEBPACK_IMPORTED_MODULE_5__.ProductCondition;
          this.declineReasonEnum = _shared_enum_decline_reason_enum__WEBPACK_IMPORTED_MODULE_9__.DeclineReason;
          this.declineReason = null;
          this.otherDeclineReasonText = "";
        }

        _createClass(_InternalDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.pageName = 'edit';
            this.initLoad();
          }
        }, {
          key: "initLoad",
          value: function initLoad() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var product;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.getDetailProduct();

                    case 2:
                      product = _context.sent;
                      _context.next = 5;
                      return this.getListCategoryProduct();

                    case 5:
                      this.form(product);
                      this.user = this.requestService.getUserToken();
                      this.productLinkBusiness = product.merchantLink;
                      this.productLinkHost = this.productLinkRoot + '/' + _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_6__.NavigationConstant.ROUTING_RETAIL + '/' + _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_6__.NavigationConstant.ROUTING_MERCHANT + '/' + this.productLinkBusiness + '/';

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "form",
          value: function form(product) {
            var _this = this;

            this.editProductForm = this.formBuilder.group({
              code: [product === null || product === void 0 ? void 0 : product.code, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.pattern]],
              name: [product === null || product === void 0 ? void 0 : product.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.pattern]],
              category: [product === null || product === void 0 ? void 0 : product.category, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
              digitalGoods: [null],
              description: [product === null || product === void 0 ? void 0 : product.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.pattern]],
              link: [product === null || product === void 0 ? void 0 : product.link, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.pattern]],
              image1: [null],
              uiId: [this.productUiId],
              condition: [product === null || product === void 0 ? void 0 : product.condition, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
              variants: this.formBuilder.array(product.variants.map(function (variant) {
                return _this.initVariantsProduct(variant);
              }))
            });
          }
        }, {
          key: "initVariantsProduct",
          value: function initVariantsProduct(variant) {
            return this.formBuilder.group({
              uiId: [variant.uiId, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
              color: [variant.color, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.pattern]],
              minimumOrder: [variant.minimumOrder, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.pattern]],
              length: [variant.length, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.pattern]],
              width: [variant.width, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.pattern]],
              height: [variant.height, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.pattern]],
              stock: [variant.stock, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.pattern]],
              price: [variant.price, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.pattern, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.min(10000)]],
              weight: [variant.weight, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.pattern]]
            });
          }
        }, {
          key: "getListCategoryProduct",
          value: function getListCategoryProduct() {
            var _this2 = this;

            this.requestService.get(this.apiGetProductCategory, null).subscribe(function (response) {
              _this2.listCategoryProduct = response;
              _this2.loading = false;
            }, function (error) {
              _this2.errorService.getErrorApi(error);
            });
          }
        }, {
          key: "getDetailProduct",
          value: function getDetailProduct() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var apiDetailProduct;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      apiDetailProduct = this.apiProduct + '/' + this.productUiId + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_2__.APIConstant.PRODUCT_DETAIL;
                      return _context2.abrupt("return", this.requestService.get(apiDetailProduct, null).toPromise().then(function (response) {
                        var _a, _b, _c;

                        _this3.productDetail = _this3.apiModelTranslatorService.snakeToCamelCase(response);
                        _this3.productDetail.link = decodeURI(_this3.productDetail.link);
                        _this3.previewImageProduct1 = (_a = _this3.productDetail.images[0]) === null || _a === void 0 ? void 0 : _a.url;
                        _this3.previewImageProduct2 = (_b = _this3.productDetail.images[1]) === null || _b === void 0 ? void 0 : _b.url;
                        _this3.previewImageProduct3 = (_c = _this3.productDetail.images[2]) === null || _c === void 0 ? void 0 : _c.url;
                        return _this3.productDetail;
                      }, function (error) {
                        _this3.errorService.getErrorApi(error);
                      }));

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "submitEditProduct",
          value: function submitEditProduct() {
            var _this4 = this;

            if (this.editProductForm.valid) {
              var encodedLink = encodeURI(this.editProductForm.get("link").value);
              this.editProductForm.patchValue({
                'link': encodedLink
              });

              if (this.editProductForm.get('category').value === this.categoryDigitalGoods.DigitalGoods) {
                this.editProductForm.patchValue({
                  'digitalGoods': true
                });
              } else {
                this.editProductForm.patchValue({
                  'digitalGoods': false
                });
              }

              sweetalert2__WEBPACK_IMPORTED_MODULE_7___default().fire({
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
                  return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                    var _this5 = this;

                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            this.requestService.put(this.apiProduct, null, this.apiModelTranslatorService.camelToSnakeCase(this.editProductForm.value)).subscribe(function (res) {
                              _this5.router.navigate([_shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_6__.NavigationConstant.ROUTING_INVENTORY]);

                              _this5.alertService.setProps("Success! Edit Produk", false);
                            }, function (error) {
                              _this5.errorService.getErrorApi(error);
                            }); // upload image product 1

                            if (!(this.imageToUpload1 !== null && this.imageToUpload1 !== undefined)) {
                              _context3.next = 4;
                              break;
                            }

                            _context3.next = 4;
                            return this.uploadImageProduct(this.productUiId, this.imageToUpload1, "0");

                          case 4:
                            if (!(this.imageToUpload2 !== null && this.imageToUpload2 !== undefined)) {
                              _context3.next = 7;
                              break;
                            }

                            _context3.next = 7;
                            return this.uploadImageProduct(this.productUiId, this.imageToUpload2, "1");

                          case 7:
                            if (!(this.imageToUpload3 !== null && this.imageToUpload3 !== undefined)) {
                              _context3.next = 10;
                              break;
                            }

                            _context3.next = 10;
                            return this.uploadImageProduct(this.productUiId, this.imageToUpload3, "2");

                          case 10:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3, this);
                  }));
                }
              });
            }
          }
        }, {
          key: "uploadImageProduct",
          value: function uploadImageProduct(productUiId, file, index) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this6 = this;

              var apiSubmitProduct;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      apiSubmitProduct = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_2__.APIConstant.PRODUCT;
                      return _context4.abrupt("return", this.requestService.uploadSingleFile("image", apiSubmitProduct + '/' + productUiId + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_2__.APIConstant.PRODUCT_IMAGES, file, index).toPromise().then(function (res) {}, function (error) {
                        _this6.errorService.getErrorApi(error);
                      }));

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
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
            var _this7 = this;

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
                    _this7.editProductForm.patchValue({
                      'image1': null
                    });

                    _this7.alertService.setProps("Failed Upload Type", true);
                  } else if (_this7.fileData.size > 1000000) {
                    _this7.editProductForm.patchValue({
                      'image1': null
                    });

                    _this7.alertService.setProps("Size more than 1 MB", true);
                  } else if (height < 300 || width < 300) {
                    _this7.editProductForm.patchValue({
                      'image1': null
                    });

                    _this7.alertService.setProps("Dimension less than 300 x 300 pixels", true);
                  } else {
                    _this7.previewImageProduct1 = reader.result;
                    _this7.imageToUpload1 = _this7.fileData;
                  }
                } else if (name === 'previewImageProduct2') {
                  if (mimeType.match('image.*') === null) {
                    _this7.editProductForm.patchValue({
                      'image2': null
                    });

                    _this7.alertService.setProps("Failed Upload Type", true);
                  } else if (_this7.fileData.size > 1000000) {
                    _this7.editProductForm.patchValue({
                      'image2': null
                    });

                    _this7.alertService.setProps("Size more than 1 MB", true);
                  } else if (height < 300 || width < 300) {
                    _this7.editProductForm.patchValue({
                      'image2': null
                    });

                    _this7.alertService.setProps("Dimension less than 300 x 300 pixels", true);
                  } else {
                    _this7.previewImageProduct2 = reader.result;
                    _this7.imageToUpload2 = _this7.fileData;
                  }
                } else if (name === 'previewImageProduct3') {
                  if (mimeType.match('image.*') === null) {
                    _this7.editProductForm.patchValue({
                      'image3': null
                    });

                    _this7.alertService.setProps("Failed Upload Type", true);
                  } else if (_this7.fileData.size > 1000000) {
                    _this7.editProductForm.patchValue({
                      'image3': null
                    });

                    _this7.alertService.setProps("Size more than 1 MB", true);
                  } else if (height < 300 || width < 300) {
                    _this7.editProductForm.patchValue({
                      'image3': null
                    });

                    _this7.alertService.setProps("Dimension less than 300 x 300 pixels", true);
                  } else {
                    _this7.previewImageProduct3 = reader.result;
                    _this7.imageToUpload3 = _this7.fileData;
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
          key: "inactiveVariant",
          value: function inactiveVariant(variantUiId) {}
        }, {
          key: "validateDigitalGoods",
          value: function validateDigitalGoods() {
            var _this8 = this;

            this.variants.controls.forEach(function (element, index) {
              if (_this8.editProductForm.get('category').value === _this8.categoryDigitalGoods.DigitalGoods) {
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
              }
            });
          }
        }, {
          key: "openModalStatusProduct",
          value: function openModalStatusProduct(idModal) {
            this.modalService.open(idModal, {
              backdrop: 'static',
              keyboard: false
            });
          }
        }, {
          key: "submitDeclineProduct",
          value: function submitDeclineProduct() {
            var notes = "";

            if (this.declineReason === this.declineReasonEnum.Others) {
              notes = this.otherDeclineReasonText;
            } else {
              notes = this.declineReason;
            }

            this.validateProduct(notes, _shared_enum_product_status_enum__WEBPACK_IMPORTED_MODULE_8__.ProductStatus.REJECTED);
            this.modalService.dismissAll();
          }
        }, {
          key: "submitApproveProduct",
          value: function submitApproveProduct() {
            this.validateProduct(null, _shared_enum_product_status_enum__WEBPACK_IMPORTED_MODULE_8__.ProductStatus.APPROVED);
            this.modalService.dismissAll();
          }
        }, {
          key: "validateProduct",
          value: function validateProduct(notes, status) {
            var _this9 = this;

            var apiInternalValidate = this.apiProduct + '/' + this.productUiId + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_2__.APIConstant.INTERNAL_VALIDATE;
            var validateProduct = new _shared_models_validate_product_model__WEBPACK_IMPORTED_MODULE_10__.ValidateProduct();
            validateProduct.notes = notes;
            validateProduct.status = _shared_enum_product_status_enum__WEBPACK_IMPORTED_MODULE_8__.ProductStatus.valueOf(status);
            return this.requestService.post(apiInternalValidate, null, this.apiModelTranslatorService.camelToSnakeCase(validateProduct)).subscribe(function (response) {
              _this9.alertService.setProps("Success! Produk Status " + status, false);

              _this9.changePage('list');
            }, function (error) {
              _this9.errorService.getErrorApi(error);
            });
          }
        }]);

        return _InternalDetailComponent;
      }();

      _InternalDetailComponent.ɵfac = function InternalDetailComponent_Factory(t) {
        return new (t || _InternalDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_service_request_service__WEBPACK_IMPORTED_MODULE_11__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_service_api_model_translator_service__WEBPACK_IMPORTED_MODULE_12__.ApiModelTranslatorService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_service_alert_service__WEBPACK_IMPORTED_MODULE_13__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_service_error_service__WEBPACK_IMPORTED_MODULE_14__.ErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_15__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute));
      };

      _InternalDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
        type: _InternalDetailComponent,
        selectors: [["app-internal-detail"]],
        inputs: {
          productUiId: "productUiId"
        },
        decls: 7,
        vars: 2,
        consts: [[4, "ngIf", "ngIfElse"], ["loaded", ""], ["approveProduct", ""], ["declineProduct", ""], [1, "center"], ["role", "status", 1, "spinner-border", "text-primary", "spinner-sm", "mr-5"], [4, "ngIf"], [1, "row"], [1, "form-group", "col-md-12", "page-header"], [1, "card"], [1, "card-body"], [1, "col-12", "col-md-6"], ["id", "editProductForm", 1, "pt-10", 3, "formGroup", "ngSubmit"], [1, "card-title", "px-3"], [1, "form-group"], [1, "col"], ["formControlName", "code", "id", "code", "placeholder", "Kode Produk", "required", "", "type", "text", "pattern", "^[a-zA-Z0-9.\\-\\\\/+,=_:'@%| ]*$", "readonly", "", 1, "form-control", "dk-text-input"], ["class", "col text-danger", 4, "ngIf"], [1, "row", "mt-3", "px-3"], [1, "col-12", "col-md-4"], [1, "form-group", "d-flex", "justify-content-center"], [1, "image-upload", "d-flex", "justify-content-center", 2, "border-style", "dashed", "width", "220px", "height", "220px"], ["for", "file-input1", 2, "margin-top", "auto", "margin-bottom", "auto", "cursor", "pointer"], ["id", "file-input1", "type", "file", "name", "image", "accept", "image/png, image/jpg, image/jpeg", "formControlName", "image1", 3, "change"], ["for", "file-input2", 2, "margin-top", "auto", "margin-bottom", "auto", "cursor", "pointer"], ["id", "file-input2", "type", "file", "name", "image", "accept", "image/png, image/jpg, image/jpeg", 3, "change"], ["for", "file-input3", 2, "margin-top", "auto", "margin-bottom", "auto", "cursor", "pointer"], ["id", "file-input3", "type", "file", "name", "image", "accept", "image/png, image/jpg, image/jpeg", 3, "change"], ["formControlName", "name", "id", "name", "placeholder", "Nama Produk", "required", "", "type", "text", "pattern", "^[a-zA-Z0-9.\\\\-\\\\/+,=_:'@%| ]*$", 1, "form-control", "dk-text-input"], ["formControlName", "category", "id", "category", 3, "multiple", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "radio", "id", "conditionNew", "formControlName", "condition", 3, "value"], [2, "margin-right", "50px"], ["type", "radio", "id", "conditionUsed", "formControlName", "condition", 3, "value"], ["formControlName", "description", "id", "description", "placeholder", "Deskripsi Produk", "required", "", "pattern", "^[a-zA-Z0-9.\\\\-\\\\/+,=_:'@%| ]*$", "rows", "4", 1, "form-control", "dk-text-input"], [1, "input-group"], [1, "input-group-append"], ["id", "linkStore", 1, "input-group-text", "dk-span-group"], ["formControlName", "link", "id", "link", "placeholder", "Tautan-Produk", "required", "", "type", "text", "pattern", "^[a-zA-Z0-9.\\\\-\\\\/+,=_:'@%|-]*$", 1, "form-control", "dk-text-input"], ["formArrayName", "variants"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "d-flex", "bd-highlight", "mb-3", "col"], [1, "mr-auto", "p-2", "bd-highlight", "align-middle"], ["id", "backButton", "type", "button", 1, "btn", "btn-secondary", "ml-auto", 3, "click"], [1, "fa", "fa-arrow-left", "in-icon"], [1, "p-2", "bd-highlight", "align-middle"], ["id", "btnDeclined", "type", "button", 1, "btn", "btn-secondary", "ml-auto", 3, "click"], ["id", "btnApprove", "type", "button", 1, "btn", "btn-primary", "ml-auto", 3, "click"], [1, "col", "text-danger"], [1, "fas", "fa-plus-circle", "text-primary"], [1, "image-container", 3, "src"], [3, "value"], [3, "formGroupName"], [1, "form-group", "row"], [1, "card-title", "px-3", "col-6", 2, "margin-top", "40px"], ["type", "button", "disabled", "", 1, "btn", "btn-link", "col-6", "text-right", 3, "id", "click"], [1, "fa", "fa-minus", "in-icon"], ["formControlName", "color", "placeholder", "Varian Produk", "required", "", "type", "text", "pattern", "^[a-zA-Z0-9.\\\\-\\\\/+,=_:'@%| ]*$", 1, "form-control", "dk-text-input", 3, "id"], ["formControlName", "stock", "placeholder", "1-9999", "required", "", "type", "text", "pattern", "^[0-9]*$", 1, "form-control", "dk-text-input", 3, "id", "keypress"], ["id", "currency", 1, "input-group-text", "dk-span-group"], ["formControlName", "price", "placeholder", "10000-99999999", "required", "", "type", "text", "pattern", "^[0-9]*$", 1, "form-control", "dk-text-input", 3, "id", "keypress"], ["id", "text_small", 1, "form-text", "text-muted"], ["class", "form-group", 4, "ngIf"], ["formControlName", "minimumOrder", "placeholder", "1", "required", "", "type", "text", "pattern", "^[0-9]*$", 1, "form-control", "dk-text-input", 3, "id", "keypress"], ["formControlName", "weight", "placeholder", "0.1-9999", "required", "", "type", "text", "pattern", "^[0-9]+(\\.[0-9]{1,2})?$", 1, "form-control", "dk-text-input", 3, "id", "keypress"], ["id", "unit", 1, "input-group-text", "dk-span-group"], [1, "row", "px-3"], ["formControlName", "length", "placeholder", "1-9999", "required", "", "type", "text", "pattern", "^[0-9]*$", 1, "form-control", "dk-text-input", 3, "id", "keypress"], ["id", "lengthUnit", 1, "input-group-text", "dk-span-group"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "width", "placeholder", "1-9999", "required", "", "type", "text", "pattern", "^[0-9]*$", 1, "form-control", "dk-text-input", 3, "id", "keypress"], ["id", "widthUnit", 1, "input-group-text", "dk-span-group"], ["formControlName", "height", "placeholder", "1-9999", "required", "", "type", "text", "pattern", "^[0-9]*$", 1, "form-control", "dk-text-input", 3, "id", "keypress"], ["id", "heightUnit", 1, "input-group-text", "dk-span-group"], [1, "text-danger"], [1, "modal-header"], [1, "modal-title"], [1, "event-icon", "d-flex"], ["src", "https://cdn-dev.oss-ap-southeast-5.aliyuncs.com/doku-ui-framework/doku/img/modal-ornament/warning-icon.png", "alt", ""], [1, "header-content"], [1, "modal-body"], [1, "background"], [1, "ml-4", "mb-2"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-link", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "form-check", "mb-2"], ["type", "radio", "name", "declineReason", "id", "productTerlarang", 1, "form-check-input", 3, "ngModel", "value", "ngModelChange"], ["for", "productTerlarang", 1, "form-check-label"], [1, "text"], ["type", "radio", "name", "declineReason", "id", "maxStore", 1, "form-check-input", 3, "ngModel", "value", "ngModelChange"], ["for", "maxStore", 1, "form-check-label"], ["type", "radio", "name", "declineReason", "id", "expired", 1, "form-check-input", 3, "ngModel", "value", "ngModelChange"], ["for", "expired", 1, "form-check-label"], [1, "form-check"], ["type", "radio", "name", "declineReason", "id", "others", 1, "form-check-input", 3, "ngModel", "value", "ngModelChange"], ["for", "others", 1, "form-check-label"], ["class", "ml-4 mt-2 form-group", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], [1, "ml-4", "mt-2", "form-group"], ["name", "otherDeclineReasonText", "id", "otherDeclineReasonText", "cols", "30", "rows", "4", "placeholder", "Tulis alasan penolakan disini", 1, "form-control", "dk-text-area", 3, "ngModel", "ngModelChange"]],
        template: function InternalDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, InternalDetailComponent_div_0_Template, 3, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, InternalDetailComponent_ng_template_1_Template, 2, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, InternalDetailComponent_ng_template_3_Template, 17, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](5, InternalDetailComponent_ng_template_5_Template, 39, 10, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
          }
        },
        styles: [".center[_ngcontent-%COMP%] {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    position: fixed;\n    top:0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n}\n\nimg.image-container[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 180px;\n    -o-object-fit: contain;\n       object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVybmFsLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlCQUF5QjtBQUN6QjtJQUNJLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixLQUFLO0lBQ0wsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtBQUNoQjtBQUVBLGlDQUFpQztBQUNqQztJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQW1CO09BQW5CLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJpbnRlcm5hbC1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNzcyBmb3IgbG9hZGluZyBwYWdlICovXG4uY2VudGVyIHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOjA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4vKiBjc3MgZm9yIGltYWdlIGNvbnRhaW5lciBwYWdlICovXG5pbWcuaW1hZ2UtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE4MHB4O1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    97647:
    /*!***************************************************************************!*\
      !*** ./src/app/modules/internal/internal-list/internal-list.component.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InternalListComponent": function InternalListComponent() {
          return (
            /* binding */
            _InternalListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../environments/environment */
      92340);
      /* harmony import */


      var _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/constant/navigation.constant */
      86473);
      /* harmony import */


      var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/models/user.model */
      53709);
      /* harmony import */


      var _shared_models_response_api_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/models/response-api.model */
      5320);
      /* harmony import */


      var _shared_enum_product_status_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../shared/enum/product-status.enum */
      33595);
      /* harmony import */


      var _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../shared/constant/api.constant */
      58412);
      /* harmony import */


      var _shared_enum_filter_status_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../shared/enum/filter-status.enum */
      13419);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _shared_service_request_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../shared/service/request.service */
      67229);
      /* harmony import */


      var _shared_service_api_model_translator_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/service/api-model-translator.service */
      43206);
      /* harmony import */


      var _shared_service_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../shared/service/alert.service */
      96506);
      /* harmony import */


      var _shared_service_error_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../shared/service/error.service */
      38205);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var _internal_detail_internal_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../internal-detail/internal-detail.component */
      32772);

      function InternalListComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }
      }

      function InternalListComponent_ng_template_1_ng_container_0_tbody_64_tr_1_span_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r10.productStatusEnum.ACTIVE, " ");
        }
      }

      function InternalListComponent_ng_template_1_ng_container_0_tbody_64_tr_1_span_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r11.productStatusEnum.NON_ACTIVE, " ");
        }
      }

      function InternalListComponent_ng_template_1_ng_container_0_tbody_64_tr_1_span_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function InternalListComponent_ng_template_1_ng_container_0_tbody_64_tr_1_span_18_Template_span_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r16);

            var inventory_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);

            return ctx_r14.changePage("edit", inventory_r8.uiId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r12.productStatusEnum.WAITING, " ");
        }
      }

      function InternalListComponent_ng_template_1_ng_container_0_tbody_64_tr_1_span_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r13.productStatusEnum.REJECTED, " ");
        }
      }

      function InternalListComponent_ng_template_1_ng_container_0_tbody_64_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "td", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "td", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "td", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "td", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "td", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function InternalListComponent_ng_template_1_ng_container_0_tbody_64_tr_1_Template_i_click_12_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r18);

            var inventory_r8 = restoredCtx.$implicit;

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);

            return ctx_r17.copyMessage(ctx_r17.productLinkRoot + ctx_r17.decodeURI(inventory_r8.merchant.link + "/" + inventory_r8.link));
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "td", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "td", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, InternalListComponent_ng_template_1_ng_container_0_tbody_64_tr_1_span_16_Template, 2, 1, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](17, InternalListComponent_ng_template_1_ng_container_0_tbody_64_tr_1_span_17_Template, 2, 1, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, InternalListComponent_ng_template_1_ng_container_0_tbody_64_tr_1_span_18_Template, 2, 1, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](19, InternalListComponent_ng_template_1_ng_container_0_tbody_64_tr_1_span_19_Template, 2, 1, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var inventory_r8 = ctx.$implicit;
          var i_r9 = ctx.index;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("id", "name-" + i_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", inventory_r8.images[0] == null ? null : inventory_r8.images[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", inventory_r8.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("id", "price-" + i_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind4"](6, 17, inventory_r8.price, "Rp ", "symbol-narrow", "1.0"));

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("id", "stock-" + i_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](inventory_r8.stock);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("id", "link-" + i_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r7.productLinkRoot + ctx_r7.decodeURI(inventory_r8.merchant.link + "/" + inventory_r8.link));

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("id", "copy-" + i_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("id", "merchantName-" + i_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](inventory_r8.merchant.businessServiceClientName);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("id", "status-" + i_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", inventory_r8.active == true && ctx_r7.productStatusEnum[inventory_r8.status] == ctx_r7.productStatusEnum.APPROVED);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", inventory_r8.active == false && ctx_r7.productStatusEnum[inventory_r8.status] == ctx_r7.productStatusEnum.APPROVED);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", inventory_r8.active == true && ctx_r7.productStatusEnum[inventory_r8.status] == ctx_r7.productStatusEnum.WAITING);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", inventory_r8.active == true && ctx_r7.productStatusEnum[inventory_r8.status] == ctx_r7.productStatusEnum.REJECTED);
        }
      }

      function InternalListComponent_ng_template_1_ng_container_0_tbody_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, InternalListComponent_ng_template_1_ng_container_0_tbody_64_tr_1_Template, 20, 22, "tr", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r5.productList);
        }
      }

      function InternalListComponent_ng_template_1_ng_container_0_div_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "i", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "Maaf, belum ada Produk");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }
      }

      function InternalListComponent_ng_template_1_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Daftar Produk");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "List daftar produk Merchant");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, "Nama Produk");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function InternalListComponent_ng_template_1_ng_container_0_Template_input_ngModelChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);

            return ctx_r19.filterProductName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](22, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function InternalListComponent_ng_template_1_ng_container_0_Template_button_click_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r20);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);

            return ctx_r21.findProduct();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25, "CARI");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](29, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function InternalListComponent_ng_template_1_ng_container_0_Template_input_ngModelChange_32_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r20);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);

            return ctx_r22.filterChkWaiting = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](35, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function InternalListComponent_ng_template_1_ng_container_0_Template_input_ngModelChange_36_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r20);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);

            return ctx_r23.filterChkActive = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](37, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](39, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function InternalListComponent_ng_template_1_ng_container_0_Template_input_ngModelChange_40_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r20);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);

            return ctx_r24.filterChkNonActive = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](41, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](44, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function InternalListComponent_ng_template_1_ng_container_0_Template_input_ngModelChange_44_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r20);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);

            return ctx_r25.filterChkRejected = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](47, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](48, "table", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](49, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](50, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](51, "th", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](52, "Nama");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](53, "th", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](54, "Harga(Rp)");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](55, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](56, "Stock");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](57, "th", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](58, "Tautan");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](59, "th", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](60, "th", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](61, "Nama Toko");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](62, "th", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](63, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](64, InternalListComponent_ng_template_1_ng_container_0_tbody_64_Template, 2, 1, "tbody", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](65, InternalListComponent_ng_template_1_ng_container_0_div_65_Template, 6, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](66, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](67, "select", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function InternalListComponent_ng_template_1_ng_container_0_Template_select_ngModelChange_67_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r20);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);

            return ctx_r26.pageSize = $event;
          })("ngModelChange", function InternalListComponent_ng_template_1_ng_container_0_Template_select_ngModelChange_67_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r20);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);

            return ctx_r27.onPageChange(ctx_r27.page, ctx_r27.pageSize);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](68, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](69, "5 items per page");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](70, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](71, "10 items per page");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](72, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](73, "15 items per page");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](74, "p", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](76, "ngb-pagination", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("pageChange", function InternalListComponent_ng_template_1_ng_container_0_Template_ngb_pagination_pageChange_76_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r20);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);

            return ctx_r28.page = $event;
          })("pageChange", function InternalListComponent_ng_template_1_ng_container_0_Template_ngb_pagination_pageChange_76_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r20);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);

            return ctx_r29.onPageChange($event, ctx_r29.pageSize);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r3.filterProductName);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r3.filterChkWaiting);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r3.productStatusEnum.WAITING);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r3.filterChkActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r3.productStatusEnum.ACTIVE);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r3.filterChkNonActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r3.productStatusEnum.NON_ACTIVE);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r3.filterChkRejected);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r3.productStatusEnum.REJECTED);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r3.productList.length !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r3.productList.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r3.pageSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngValue", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngValue", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngValue", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate3"]("Showing ", ctx_r3.startData, " to ", ctx_r3.endData, " from ", ctx_r3.totalData, " entries");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("page", ctx_r3.page)("pageSize", ctx_r3.pageSize)("collectionSize", ctx_r3.totalData)("maxSize", 2);
        }
      }

      function InternalListComponent_ng_template_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-internal-detail", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("productUiId", ctx_r4.productUiId);
        }
      }

      function InternalListComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, InternalListComponent_ng_template_1_ng_container_0_Template, 77, 22, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, InternalListComponent_ng_template_1_ng_container_1_Template, 2, 1, "ng-container", 4);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.pageName === "list");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.pageName === "edit");
        }
      }

      var _InternalListComponent = /*#__PURE__*/function () {
        function _InternalListComponent(formBuilder, requestService, apiModelTranslatorService, alertService, errorService) {
          _classCallCheck(this, _InternalListComponent);

          this.formBuilder = formBuilder;
          this.requestService = requestService;
          this.apiModelTranslatorService = apiModelTranslatorService;
          this.alertService = alertService;
          this.errorService = errorService; //loading component

          this.loading = true;
          this.pageName = ""; //table pagination

          this.page = 1;
          this.pageSize = 5;
          this.totalData = 0;
          this.startData = 0;
          this.endData = 0; //filter field

          this.filterProductName = null;
          this.filterProductStatus = [];
          this.filterProductActive = null;
          this.filterProductCategory = null;
          this.filterProductLink = null;
          this.filterProductCondition = null;
          this.filterProductStock = null;
          this.filterChkWaiting = true;
          this.filterChkActive = true;
          this.filterChkNonActive = true;
          this.filterChkRejected = true;
          this.paginationSort = "DESC";
          this.user = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_2__.User();
          this.responseApi = new _shared_models_response_api_model__WEBPACK_IMPORTED_MODULE_3__.ResponseApi();
          this.productList = new Array();
          this.productStatusEnum = _shared_enum_product_status_enum__WEBPACK_IMPORTED_MODULE_4__.ProductStatus;
          this.apiInternalGetProduct = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_5__.APIConstant.INTERNAL_LIST;
          this.productLinkRoot = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.envUrl + "/" + _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_1__.NavigationConstant.ROUTING_RETAIL + '/' + _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_1__.NavigationConstant.ROUTING_MERCHANT + '/';
        }

        _createClass(_InternalListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.initLoad();

                    case 2:
                      this.user = this.requestService.getUserToken();
                      this.productLinkRoot = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.envUrl + "/" + _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_1__.NavigationConstant.ROUTING_RETAIL + '/' + _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_1__.NavigationConstant.ROUTING_MERCHANT + '/';

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "initLoad",
          value: function initLoad() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.pageName = 'list';
                      this.getListInventory(this.page, this.pageSize, this.paginationSort, null, null, null, null, null, null);

                    case 2:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "getListInventory",
          value: function getListInventory(page, pageSize, sort, productName, filters, category, link, condition, stock) {
            var _this10 = this;

            this.loading = true;
            var requestParam = new Map();
            requestParam.set('page', page - 1);
            requestParam.set('size', pageSize);
            requestParam.set('sort', sort); //filter nama produk

            if (productName !== null && productName !== "") {
              requestParam.set('name', productName);
            } //filter aktif produk


            if (filters !== null) {
              requestParam.set('filters', filters);
            }

            this.requestService.get(this.apiInternalGetProduct, requestParam).subscribe(function (response) {
              _this10.productList = _this10.apiModelTranslatorService.snakeToCamelCase(response.products);
              _this10.totalData = response.pageable.total_data;
              _this10.startData = response.pageable.start_data;
              _this10.endData = response.pageable.end_data;
              _this10.loading = false;
            }, function (error) {
              _this10.loading = false;
              _this10.responseApi = error.error;

              _this10.errorService.getErrorApi(error);
            });
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
          key: "onPageChange",
          value: function onPageChange(page, pageSize) {
            this.getListInventory(page, pageSize, this.paginationSort, this.filterProductName, this.filterProductStatus, this.filterProductCategory, this.filterProductLink, this.filterProductCondition, this.filterProductStock);
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
          key: "findProduct",
          value: function findProduct() {
            this.filterProductStatus = [];
            var filterProduct; //product status aktif

            if (this.filterChkActive === true) {
              filterProduct = _shared_enum_filter_status_enum__WEBPACK_IMPORTED_MODULE_6__.FilterStatus.Active;
              this.filterProductStatus.push(filterProduct);
            } //product status non aktif


            if (this.filterChkNonActive === true) {
              filterProduct = _shared_enum_filter_status_enum__WEBPACK_IMPORTED_MODULE_6__.FilterStatus.Inactive;
              this.filterProductStatus.push(filterProduct);
            } //product status waiting


            if (this.filterChkWaiting === true) {
              filterProduct = _shared_enum_filter_status_enum__WEBPACK_IMPORTED_MODULE_6__.FilterStatus.Waiting;
              this.filterProductStatus.push(filterProduct);
            } //product status reject


            if (this.filterChkRejected === true) {
              filterProduct = _shared_enum_filter_status_enum__WEBPACK_IMPORTED_MODULE_6__.FilterStatus.Rejected;
              this.filterProductStatus.push(filterProduct);
            }

            this.getListInventory(this.page, this.pageSize, this.paginationSort, this.filterProductName, this.filterProductStatus, this.filterProductCategory, this.filterProductLink, this.filterProductCondition, this.filterProductStock);
          }
        }, {
          key: "changePage",
          value: function changePage(pageName, productUiId) {
            if (pageName === 'edit') {
              this.productUiId = productUiId;
            }

            this.pageName = pageName;
          }
        }]);

        return _InternalListComponent;
      }();

      _InternalListComponent.ɵfac = function InternalListComponent_Factory(t) {
        return new (t || _InternalListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_service_request_service__WEBPACK_IMPORTED_MODULE_7__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_service_api_model_translator_service__WEBPACK_IMPORTED_MODULE_8__.ApiModelTranslatorService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_service_alert_service__WEBPACK_IMPORTED_MODULE_9__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_service_error_service__WEBPACK_IMPORTED_MODULE_10__.ErrorService));
      };

      _InternalListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
        type: _InternalListComponent,
        selectors: [["app-internal-list"]],
        decls: 3,
        vars: 2,
        consts: [[4, "ngIf", "ngIfElse"], ["loaded", ""], [1, "center"], ["role", "status", 1, "spinner-border", "text-primary", "spinner-sm", "mr-5"], [4, "ngIf"], [1, "row"], [1, "form-group", "col-md-12", "page-header"], [1, "card"], [1, "card-body"], [1, "form-group", "col-md-3", "page-header"], [1, "col"], [1, "font-weight-bold"], ["id", "productName", "placeholder", "Cari nama produk", "required", "", "type", "text", "pattern", "^[a-zA-Z0-9.\\\\-\\\\/+,=_:'@%| ]*$", 1, "form-control", "dk-text-input", "mt-2", 3, "ngModel", "ngModelChange"], [1, "form-group", "col-md-9", "page-header", "d-flex", "justify-content-end"], ["type", "button", "id", "btnProduct", 1, "btn", "btn-primary", 3, "click"], [1, "form-check", "form-check-inline", "mt-2"], ["type", "checkbox", "id", "waiting", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "waiting", 1, "form-check-label"], [1, "form-check", "form-check-inline"], ["type", "checkbox", "id", "active", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "active", 1, "form-check-label"], ["type", "checkbox", "id", "nonactive", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "nonactive", 1, "form-check-label"], ["type", "checkbox", "id", "reject", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "reject", 1, "form-check-label"], [1, "table", "table-responsive-sm", "table-striped", 2, "table-layout", "fixed"], ["scope", "col"], ["scope", "col", 2, "width", "180px"], ["scope", "col", 2, "width", "100px"], ["scope", "col", 2, "width", "60px"], ["scope", "col", 2, "width", "150px"], ["style", "margin-top: 100px; margin-bottom: 100px", 4, "ngIf"], [1, "d-flex", "bd-highlight", "mb-3"], [1, "custom-select", "mr-auto", "bd-highlight", "align-middle", 2, "width", "auto", 3, "ngModel", "ngModelChange"], [3, "ngValue"], [1, "card-description", "p-2", "bd-highlight", "align-middle"], [1, "p-2", "bd-highlight", "align-middle", 3, "page", "pageSize", "collectionSize", "maxSize", "pageChange"], [4, "ngFor", "ngForOf"], [1, "align-middle", "text-ellipsis", "text-ellipsis-breakable", 3, "id"], [1, "image-container", 3, "src"], [1, "align-middle", 3, "id"], [1, "far", "fa-copy", 2, "cursor", "pointer", 3, "click"], ["class", "badge badge-success", 4, "ngIf"], ["class", "badge badge-secondary", 4, "ngIf"], ["class", "badge badge-warning pointer-cursor", 3, "click", 4, "ngIf"], ["class", "badge badge-danger", 4, "ngIf"], [1, "badge", "badge-success"], [1, "badge", "badge-secondary"], [1, "badge", "badge-warning", "pointer-cursor", 3, "click"], [1, "badge", "badge-danger"], [2, "margin-top", "100px", "margin-bottom", "100px"], [1, "d-flex", "justify-content-center", 2, "margin-bottom", "20px"], [1, "fas", "fa-search", "fa-8x"], [1, "d-flex", "justify-content-center"], [3, "productUiId"]],
        template: function InternalListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, InternalListComponent_div_0_Template, 3, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, InternalListComponent_ng_template_1_Template, 2, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgSelectMultipleOption"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbPagination, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _internal_detail_internal_detail_component__WEBPACK_IMPORTED_MODULE_11__.InternalDetailComponent],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CurrencyPipe],
        styles: [".center[_ngcontent-%COMP%] {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    position: fixed;\n    top:0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n}\n\nimg.image-container[_ngcontent-%COMP%] {\n    width: 45px;\n    height: 45px;\n    -o-object-fit: contain;\n       object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVybmFsLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5QkFBeUI7QUFDekI7SUFDSSwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQiwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsS0FBSztJQUNMLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7QUFDaEI7QUFFQSxpQ0FBaUM7QUFDakM7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFtQjtPQUFuQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoiaW50ZXJuYWwtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY3NzIGZvciBsb2FkaW5nIHBhZ2UgKi9cbi5jZW50ZXIge1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6MDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi8qIGNzcyBmb3IgaW1hZ2UgY29udGFpbmVyIHBhZ2UgKi9cbmltZy5pbWFnZS1jb250YWluZXIge1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    29857:
    /*!*****************************************************!*\
      !*** ./src/app/modules/internal/internal.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InternalModule": function InternalModule() {
          return (
            /* binding */
            _InternalModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _internal_list_internal_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./internal-list/internal-list.component */
      97647);
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


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-select/ng-select */
      36868);
      /* harmony import */


      var _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/constant/navigation.constant */
      86473);
      /* harmony import */


      var _internal_detail_internal_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./internal-detail/internal-detail.component */
      32772);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_1__.NavigationConstant.ROUTING_INTERNAL_LIST,
        component: _internal_list_internal_list_component__WEBPACK_IMPORTED_MODULE_0__.InternalListComponent,
        pathMatch: 'full'
      }];

      var _InternalModule = function _InternalModule() {
        _classCallCheck(this, _InternalModule);
      };

      _InternalModule.ɵfac = function InternalModule_Factory(t) {
        return new (t || _InternalModule)();
      };

      _InternalModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _InternalModule
      });
      _InternalModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPaginationModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_InternalModule, {
          declarations: [_internal_list_internal_list_component__WEBPACK_IMPORTED_MODULE_0__.InternalListComponent, _internal_detail_internal_detail_component__WEBPACK_IMPORTED_MODULE_2__.InternalDetailComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPaginationModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule]
        });
      })();

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetComponentScope"](_internal_detail_internal_detail_component__WEBPACK_IMPORTED_MODULE_2__.InternalDetailComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _internal_list_internal_list_component__WEBPACK_IMPORTED_MODULE_0__.InternalListComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.PatternValidator, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["ɵr"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel], []);
      /***/

    },

    /***/
    67033:
    /*!******************************************************!*\
      !*** ./src/app/shared/enum/category-product.enum.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CategoryProduct": function CategoryProduct() {
          return (
            /* binding */
            _CategoryProduct
          );
        }
        /* harmony export */

      });

      var _CategoryProduct;

      (function (CategoryProduct) {
        CategoryProduct["DigitalGoods"] = "Digital Goods";
      })(_CategoryProduct || (_CategoryProduct = {}));
      /***/

    },

    /***/
    18965:
    /*!****************************************************!*\
      !*** ./src/app/shared/enum/decline-reason.enum.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DeclineReason": function DeclineReason() {
          return (
            /* binding */
            _DeclineReason
          );
        }
        /* harmony export */

      });

      var _DeclineReason;

      (function (DeclineReason) {
        DeclineReason["Others"] = "Others";
        DeclineReason["Drugs"] = "Produk yang dijual adalah produk terlarang";
        DeclineReason["Capacity"] = "Melebihi batas maksimal produk per toko";
        DeclineReason["Expired"] = "Produk telah kadaluwarsa";
      })(_DeclineReason || (_DeclineReason = {}));
      /***/

    },

    /***/
    13419:
    /*!***************************************************!*\
      !*** ./src/app/shared/enum/filter-status.enum.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FilterStatus": function FilterStatus() {
          return (
            /* binding */
            _FilterStatus
          );
        }
        /* harmony export */

      });

      var _FilterStatus;

      (function (FilterStatus) {
        FilterStatus["Active"] = "ACTIVE";
        FilterStatus["Inactive"] = "INACTIVE";
        FilterStatus["Rejected"] = "REJECTED";
        FilterStatus["Waiting"] = "WAITING";
      })(_FilterStatus || (_FilterStatus = {}));
      /***/

    },

    /***/
    64308:
    /*!*********************************************************!*\
      !*** ./src/app/shared/models/validate-product.model.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ValidateProduct": function ValidateProduct() {
          return (
            /* binding */
            _ValidateProduct
          );
        }
        /* harmony export */

      });

      var _ValidateProduct = function _ValidateProduct() {
        _classCallCheck(this, _ValidateProduct);
      };
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_modules_internal_internal_module_ts-es5.js.map