(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkrvn_retail_ui"] = self["webpackChunkrvn_retail_ui"] || []).push([["src_app_modules_simulator_simulator_module_ts"], {
    /***/
    72243:
    /*!****************************************************************************!*\
      !*** ./src/app/modules/simulator/order-receive/order-receive.component.ts ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OrderReceiveComponent": function OrderReceiveComponent() {
          return (
            /* binding */
            _OrderReceiveComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../environments/environment */
      92340);
      /* harmony import */


      var _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/constant/api.constant */
      58412);
      /* harmony import */


      var _shared_constant_api_error_code_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/constant/api-error-code.constant */
      96694);
      /* harmony import */


      var _shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../shared/constant/navigation.constant */
      86473);
      /* harmony import */


      var _shared_constant_error_code_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../shared/constant/error-code.constant */
      28228);
      /* harmony import */


      var _shared_models_response_api_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../shared/models/response-api.model */
      5320);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _shared_service_request_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../shared/service/request.service */
      67229);
      /* harmony import */


      var _shared_service_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/service/alert.service */
      96506);
      /* harmony import */


      var _shared_service_error_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../shared/service/error.service */
      38205);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function OrderReceiveComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function OrderReceiveComponent_ng_template_1_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "*This field is not valid input text");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function OrderReceiveComponent_ng_template_1_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "*This field is cannot be left empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function OrderReceiveComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Simulator Receive Order");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Simulator untuk melakukan pesanan telah diterima");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngSubmit", function OrderReceiveComponent_ng_template_1_Template_form_ngSubmit_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r5.submitReceiveOrder();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "Nomor Pesanan");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, OrderReceiveComponent_ng_template_1_div_17_Template, 2, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, OrderReceiveComponent_ng_template_1_div_18_Template, 2, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "SUBMIT");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r2.receiveOrderForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.receiveOrderForm.get("nomorPesanan").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.receiveOrderForm.get("nomorPesanan").hasError("required") && (ctx_r2.receiveOrderForm.get("nomorPesanan").dirty || ctx_r2.receiveOrderForm.get("nomorPesanan").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx_r2.receiveOrderForm.valid);
        }
      }

      var _OrderReceiveComponent = /*#__PURE__*/function () {
        function _OrderReceiveComponent(formBuilder, requestService, alertService, errorService, router) {
          _classCallCheck(this, _OrderReceiveComponent);

          this.formBuilder = formBuilder;
          this.requestService = requestService;
          this.alertService = alertService;
          this.errorService = errorService;
          this.router = router; //loading component

          this.loading = true;
          this.responseApi = new _shared_models_response_api_model__WEBPACK_IMPORTED_MODULE_6__.ResponseApi();
        }

        _createClass(_OrderReceiveComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var configStore;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.getConfigurationStoreInfo();

                    case 2:
                      configStore = _context2.sent;
                      this.form();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "form",
          value: function form() {
            this.receiveOrderForm = this.formBuilder.group({
              nomorPesanan: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]]
            });
          }
        }, {
          key: "getConfigurationStoreInfo",
          value: function getConfigurationStoreInfo() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this = this;

              var apiInfoStore;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      apiInfoStore = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_2__.APIConstant.MERCHANT;
                      return _context3.abrupt("return", this.requestService.get(apiInfoStore, null).toPromise().then(function (response) {
                        _this.loading = false;
                      }, function (error) {
                        _this.responseApi = error.error;

                        if (_this.responseApi.error.code === _shared_constant_api_error_code_constant__WEBPACK_IMPORTED_MODULE_3__.ApiErrorCode.MERCHANT_NOT_FOUND) {
                          _this.loading = false;

                          _this.router.navigate([_shared_constant_navigation_constant__WEBPACK_IMPORTED_MODULE_4__.NavigationConstant.ERROR_CUSTOM, _shared_constant_error_code_constant__WEBPACK_IMPORTED_MODULE_5__.ErrorCodeConstant.KYB]);
                        } else {
                          _this.errorService.getErrorApi(error);
                        }
                      }));

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "submitReceiveOrder",
          value: function submitReceiveOrder() {
            var _this2 = this;

            if (this.receiveOrderForm.valid) {
              var invoiceNumber = this.receiveOrderForm.get("nomorPesanan").value;
              var invoiceNumberPath = "/".concat(invoiceNumber, "/receive");
              var apiOrderReceive = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl + _shared_constant_api_constant__WEBPACK_IMPORTED_MODULE_2__.APIConstant.MERCHANT_ORDER + invoiceNumberPath;
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
                preConfirm: function preConfirm() {
                  return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                    var _this3 = this;

                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            this.requestService.post(apiOrderReceive, null, null).subscribe(function (res) {
                              _this3.alertService.setProps("Success! Order Received", false);
                            }, function (error) {
                              _this3.errorService.getErrorApi(error);
                            });

                          case 1:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4, this);
                  }));
                }
              });
            }
          }
        }]);

        return _OrderReceiveComponent;
      }();

      _OrderReceiveComponent.ɵfac = function OrderReceiveComponent_Factory(t) {
        return new (t || _OrderReceiveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_service_request_service__WEBPACK_IMPORTED_MODULE_7__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_service_alert_service__WEBPACK_IMPORTED_MODULE_8__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_service_error_service__WEBPACK_IMPORTED_MODULE_9__.ErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router));
      };

      _OrderReceiveComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
        type: _OrderReceiveComponent,
        selectors: [["app-order-receive"]],
        decls: 3,
        vars: 2,
        consts: [[4, "ngIf", "ngIfElse"], ["loaded", ""], [1, "center"], ["role", "status", 1, "spinner-border", "text-primary", "spinner-sm", "mr-5"], [1, "card"], [1, "card-body"], [1, "row"], [1, "form-group", "col-md-12", "page-header"], ["id", "receiveOrderForm", 3, "formGroup", "ngSubmit"], [1, "form-group", "col-md-3", "page-header"], [1, "col"], [1, "font-weight-bold"], ["id", "nomorPesanan", "placeholder", "INV-RETAIL-12345678901234567", "formControlName", "nomorPesanan", "required", "", "type", "text", "pattern", "^[a-zA-Z0-9.\\\\-\\\\/+,=_:'@%| -]*$", 1, "form-control", "dk-text-input", "mt-2"], ["class", "text-danger", 4, "ngIf"], [1, "d-flex", "justify-content-end"], ["type", "submit", "id", "btnSubmitOrderReceive", 1, "btn", "btn-primary", 3, "disabled"], [1, "text-danger"]],
        template: function OrderReceiveComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, OrderReceiveComponent_div_0_Template, 3, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, OrderReceiveComponent_ng_template_1_Template, 23, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.PatternValidator],
        styles: [".center[_ngcontent-%COMP%] {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    position: fixed;\n    top:0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n}\n\nimg.image-container[_ngcontent-%COMP%] {\n    width: 45px;\n    height: 45px;\n    -o-object-fit: contain;\n       object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLXJlY2VpdmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5QkFBeUI7QUFDekI7SUFDSSwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQiwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsS0FBSztJQUNMLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7QUFDaEI7QUFFQSxpQ0FBaUM7QUFDakM7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFtQjtPQUFuQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoib3JkZXItcmVjZWl2ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY3NzIGZvciBsb2FkaW5nIHBhZ2UgKi9cbi5jZW50ZXIge1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6MDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi8qIGNzcyBmb3IgaW1hZ2UgY29udGFpbmVyIHBhZ2UgKi9cbmltZy5pbWFnZS1jb250YWluZXIge1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    8285:
    /*!*******************************************************!*\
      !*** ./src/app/modules/simulator/simulator.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SimulatorModule": function SimulatorModule() {
          return (
            /* binding */
            _SimulatorModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _order_receive_order_receive_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./order-receive/order-receive.component */
      72243);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _order_receive_order_receive_component__WEBPACK_IMPORTED_MODULE_0__.OrderReceiveComponent,
        pathMatch: 'full'
      }];

      var _SimulatorModule = function _SimulatorModule() {
        _classCallCheck(this, _SimulatorModule);
      };

      _SimulatorModule.ɵfac = function SimulatorModule_Factory(t) {
        return new (t || _SimulatorModule)();
      };

      _SimulatorModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _SimulatorModule
      });
      _SimulatorModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_SimulatorModule, {
          declarations: [_order_receive_order_receive_component__WEBPACK_IMPORTED_MODULE_0__.OrderReceiveComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_modules_simulator_simulator_module_ts-es5.js.map