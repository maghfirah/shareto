(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkrvn_retail_ui"] = self["webpackChunkrvn_retail_ui"] || []).push([["common"], {
    /***/
    96694:
    /*!************************************************************!*\
      !*** ./src/app/shared/constant/api-error-code.constant.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ApiErrorCode": function ApiErrorCode() {
          return (
            /* binding */
            _ApiErrorCode
          );
        }
        /* harmony export */

      });
      /**
       * Kelas yang berisi kumpulan response error type dari api
       */


      var _ApiErrorCode = function _ApiErrorCode() {
        _classCallCheck(this, _ApiErrorCode);
      };

      _ApiErrorCode.MERCHANT_NOT_FOUND = 'merchant_not_found';
      _ApiErrorCode.MERCHANT_INACTIVE = 'merchant_inactive';
      _ApiErrorCode.LINK_MERCHANT_NOT_FOUND = 'link_merchant_not_found';
      /***/
    },

    /***/
    42493:
    /*!**************************************************!*\
      !*** ./src/app/shared/constant/prop.constant.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PropConstant": function PropConstant() {
          return (
            /* binding */
            _PropConstant
          );
        }
        /* harmony export */

      });

      var _PropConstant = function _PropConstant() {
        _classCallCheck(this, _PropConstant);
      };

      _PropConstant.COOKIE_CART_ID_TIMEOUT = "1";
      _PropConstant.ENV_SIMULATOR_NOT_EXIST = "https://jokul.doku.com";
      /***/
    },

    /***/
    99719:
    /*!***************************************************!*\
      !*** ./src/app/shared/enum/location-type.enum.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LocationType": function LocationType() {
          return (
            /* binding */
            _LocationType
          );
        }
        /* harmony export */

      });

      var _LocationType;

      (function (LocationType) {
        LocationType["Province"] = "PROVINCE";
        LocationType["City"] = "CITY";
        LocationType["District"] = "DISTRICT";
        LocationType["SubDistrict"] = "SUB_DISTRICT";
        LocationType["PostalCode"] = "POSTAL_CODE";
        LocationType["PostalCodeCityProvince"] = "POSTAL_CODE_CITY_PROVINCE";
      })(_LocationType || (_LocationType = {}));
      /***/

    },

    /***/
    14162:
    /*!****************************************************!*\
      !*** ./src/app/shared/enum/payment-status.enum.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PaymentStatus": function PaymentStatus() {
          return (
            /* binding */
            _PaymentStatus
          );
        }
        /* harmony export */

      });

      var _PaymentStatus;

      (function (PaymentStatus) {
        PaymentStatus["Unpaid"] = "UNPAID";
        PaymentStatus["Paid"] = "PAID";
        PaymentStatus["Expired"] = "EXPIRED";
      })(_PaymentStatus || (_PaymentStatus = {}));
      /***/

    },

    /***/
    52562:
    /*!*******************************************************!*\
      !*** ./src/app/shared/enum/product-condition.enum.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductCondition": function ProductCondition() {
          return (
            /* binding */
            _ProductCondition
          );
        }
        /* harmony export */

      });

      var _ProductCondition;

      (function (ProductCondition) {
        ProductCondition["New"] = "NEW";
        ProductCondition["Used"] = "USED";
      })(_ProductCondition || (_ProductCondition = {}));
      /***/

    },

    /***/
    33595:
    /*!****************************************************!*\
      !*** ./src/app/shared/enum/product-status.enum.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductStatus": function ProductStatus() {
          return (
            /* binding */
            _ProductStatus
          );
        }
        /* harmony export */

      });

      var _ProductStatus;

      (function (ProductStatus) {
        ProductStatus["WAITING"] = "Proses Verifikasi";
        ProductStatus["APPROVED"] = "Produk Terverifikasi";
        ProductStatus["REJECTED"] = "Produk Ditolak";
        ProductStatus["ACTIVE"] = "Produk Aktif";
        ProductStatus["NON_ACTIVE"] = "Produk Nonaktif";
      })(_ProductStatus || (_ProductStatus = {}));

      (function (ProductStatus) {
        function valueOf(request) {
          for (var productStatus in ProductStatus) {
            if (request === ProductStatus[productStatus]) {
              return productStatus;
            }
          }
        }

        ProductStatus.valueOf = valueOf;
      })(_ProductStatus || (_ProductStatus = {}));
      /***/

    },

    /***/
    16486:
    /*!***************************************************!*\
      !*** ./src/app/shared/enum/transaction-status.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TransactionStatus": function TransactionStatus() {
          return (
            /* binding */
            _TransactionStatus
          );
        }
        /* harmony export */

      });

      var _TransactionStatus;

      (function (TransactionStatus) {
        TransactionStatus["checkWaitingForPayment"] = "menunggu_pembayaran";
        TransactionStatus["checkNewOrder"] = "peasanan_baru";
        TransactionStatus["checkProccessed"] = "diproses";
        TransactionStatus["checkSent"] = "dikirim";
        TransactionStatus["checkFinished"] = "selesai";
        TransactionStatus["checkExpired"] = "kadarluasa";
      })(_TransactionStatus || (_TransactionStatus = {}));
      /***/

    },

    /***/
    61347:
    /*!*****************************************************************!*\
      !*** ./src/app/shared/helper/form-control-validation.helper.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormControlValidationHelper": function FormControlValidationHelper() {
          return (
            /* binding */
            _FormControlValidationHelper
          );
        }
        /* harmony export */

      });

      var _FormControlValidationHelper = /*#__PURE__*/function () {
        function _FormControlValidationHelper() {
          _classCallCheck(this, _FormControlValidationHelper);
        }

        _createClass(_FormControlValidationHelper, null, [{
          key: "getValidatorErrorMessage",
          value: function getValidatorErrorMessage(validatorName, validatorValue) {
            var config = {
              required: 'Required',
              invalidEmail: 'Invalid email address',
              invalidNumber: 'This field can only be filled with numbers',
              invalidPassword: 'Password Contains at least 1alphabet, 1number',
              invalidDuration: 'Value cannot 0'
            };
            return config[validatorName];
          }
        }, {
          key: "emailValidator",
          value: function emailValidator(control) {
            var _a;

            var regex = "^^[a-zA-Z0-9.!#$%&’*+=?^_`{|}~-]+[^\\.,!#$%&’'*+=?^_`{|}~\\-@()\"<>]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-]+(?:\\.[a-zA-Z]+)*$";

            if (control.value && control.value.match(regex)) {
              return null;
            } else {
              if (control.value === null || ((_a = control.value) === null || _a === void 0 ? void 0 : _a.length) === 0) {
                return null;
              } else {
                return {
                  invalidEmail: true
                };
              }
            }
          }
        }, {
          key: "phoneNumberValidator",
          value: function phoneNumberValidator(control) {
            var regex = /^[0-9]*$/;

            if ((control === null || control === void 0 ? void 0 : control.value) || control.value === "") {
              return null;
            } else if (control.value && control.value.match(regex)) {
              return null;
            } else {
              return {
                invalidNumber: true
              };
            }
          }
        }, {
          key: "passwordValidator",
          value: function passwordValidator(control) {
            var strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]{8,16}$/; //minimum 8character, max 16, at least 1lowercase,1uppercase, 1number, with optional special character

            if (control.value && control.value.match(strongRegex)) {
              return null;
            } else {
              return {
                invalidPassword: true
              };
            }
          }
        }, {
          key: "durationValidator",
          value: function durationValidator(control) {
            var regex = /^[1-9][0-9]*$/;
            var maxDuration = 1000;

            if (control.value === "" || control.value === null) {
              return null;
            } else if (control.value && control.value.match(regex) && parseInt(control.value) < maxDuration) {
              return null;
            } else {
              return {
                invalidDuration: true
              };
            }
          }
        }]);

        return _FormControlValidationHelper;
      }();
      /***/

    },

    /***/
    26417:
    /*!**************************************************!*\
      !*** ./src/app/shared/models/add-order.model.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddOrder": function AddOrder() {
          return (
            /* binding */
            _AddOrder
          );
        }
        /* harmony export */

      });

      var _AddOrder = function _AddOrder() {
        _classCallCheck(this, _AddOrder);
      };
      /***/

    },

    /***/
    24692:
    /*!*********************************************!*\
      !*** ./src/app/shared/models/cart.model.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Cart": function Cart() {
          return (
            /* binding */
            _Cart
          );
        },

        /* harmony export */
        "CartItem": function CartItem() {
          return (
            /* binding */
            _CartItem
          );
        },

        /* harmony export */
        "Item": function Item() {
          return (
            /* binding */
            _Item
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _configuration_store_location_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./configuration-store-location.model */
      87527);
      /* harmony import */


      var _product_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product.model */
      70066);

      var _Cart = function _Cart() {
        _classCallCheck(this, _Cart);

        this.merchant = new _configuration_store_location_model__WEBPACK_IMPORTED_MODULE_0__.ConfigurationStoreLocation();
        this.cartItems = [];
      };

      var _CartItem = function _CartItem() {
        _classCallCheck(this, _CartItem);

        this.product = new _product_model__WEBPACK_IMPORTED_MODULE_1__.Product();
        this.items = [];
      };

      var _Item = function _Item() {
        _classCallCheck(this, _Item);
      };
      /***/

    },

    /***/
    78130:
    /*!*************************************************!*\
      !*** ./src/app/shared/models/checkout.model.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Checkout": function Checkout() {
          return (
            /* binding */
            _Checkout
          );
        }
        /* harmony export */

      });

      var _Checkout = function _Checkout() {
        _classCallCheck(this, _Checkout);
      };
      /***/

    },

    /***/
    87527:
    /*!*********************************************************************!*\
      !*** ./src/app/shared/models/configuration-store-location.model.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ConfigurationStoreLocation": function ConfigurationStoreLocation() {
          return (
            /* binding */
            _ConfigurationStoreLocation
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _location_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./location.model */
      20229);

      var _ConfigurationStoreLocation = function _ConfigurationStoreLocation() {
        _classCallCheck(this, _ConfigurationStoreLocation);

        this.province = new _location_model__WEBPACK_IMPORTED_MODULE_0__.Province();
        this.city = new _location_model__WEBPACK_IMPORTED_MODULE_0__.City();
        this.district = new _location_model__WEBPACK_IMPORTED_MODULE_0__.District();
        this.subDistrict = new _location_model__WEBPACK_IMPORTED_MODULE_0__.SubDistrict();
        this.postalCode = new _location_model__WEBPACK_IMPORTED_MODULE_0__.PostalCode();
        this.postalCodeCityProvince = new _location_model__WEBPACK_IMPORTED_MODULE_0__.PostalCodeCityProvince();
      };
      /***/

    },

    /***/
    20229:
    /*!*************************************************!*\
      !*** ./src/app/shared/models/location.model.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Location": function Location() {
          return (
            /* binding */
            _Location
          );
        },

        /* harmony export */
        "Province": function Province() {
          return (
            /* binding */
            _Province
          );
        },

        /* harmony export */
        "City": function City() {
          return (
            /* binding */
            _City
          );
        },

        /* harmony export */
        "District": function District() {
          return (
            /* binding */
            _District
          );
        },

        /* harmony export */
        "SubDistrict": function SubDistrict() {
          return (
            /* binding */
            _SubDistrict
          );
        },

        /* harmony export */
        "PostalCode": function PostalCode() {
          return (
            /* binding */
            _PostalCode
          );
        },

        /* harmony export */
        "PostalCodeCityProvince": function PostalCodeCityProvince() {
          return (
            /* binding */
            _PostalCodeCityProvince
          );
        },

        /* harmony export */
        "General": function General() {
          return (
            /* binding */
            _General
          );
        }
        /* harmony export */

      });

      var _Location = function _Location() {
        _classCallCheck(this, _Location);
      };

      var _Province = function _Province() {
        _classCallCheck(this, _Province);
      };

      var _City = function _City() {
        _classCallCheck(this, _City);
      };

      var _District = function _District() {
        _classCallCheck(this, _District);
      };

      var _SubDistrict = function _SubDistrict() {
        _classCallCheck(this, _SubDistrict);
      };

      var _PostalCode = function _PostalCode() {
        _classCallCheck(this, _PostalCode);
      };

      var _PostalCodeCityProvince = function _PostalCodeCityProvince() {
        _classCallCheck(this, _PostalCodeCityProvince);
      };

      var _General = function _General() {
        _classCallCheck(this, _General);
      };
      /***/

    },

    /***/
    55973:
    /*!*****************************************************!*\
      !*** ./src/app/shared/models/order-detail.model.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OrderDetail": function OrderDetail() {
          return (
            /* binding */
            _OrderDetail
          );
        },

        /* harmony export */
        "Merchant": function Merchant() {
          return (
            /* binding */
            _Merchant
          );
        },

        /* harmony export */
        "Customer": function Customer() {
          return (
            /* binding */
            _Customer
          );
        },

        /* harmony export */
        "Payment": function Payment() {
          return (
            /* binding */
            _Payment
          );
        },

        /* harmony export */
        "Milestones": function Milestones() {
          return (
            /* binding */
            _Milestones
          );
        },

        /* harmony export */
        "OrderShipping": function OrderShipping() {
          return (
            /* binding */
            _OrderShipping
          );
        },

        /* harmony export */
        "OrderDetailProduct": function OrderDetailProduct() {
          return (
            /* binding */
            _OrderDetailProduct
          );
        },

        /* harmony export */
        "Item": function Item() {
          return (
            /* binding */
            _Item2
          );
        }
        /* harmony export */

      });

      var _OrderDetail = function _OrderDetail() {
        _classCallCheck(this, _OrderDetail);

        this.merchant = new _Merchant();
        this.customer = new _Customer();
        this.shipping = new _OrderShipping();
        this.payment = new _Payment();
        this.milestones = [];
        this.products = [];
      };

      var _Merchant = function _Merchant() {
        _classCallCheck(this, _Merchant);
      };

      var _Customer = function _Customer() {
        _classCallCheck(this, _Customer);
      };

      var _Payment = function _Payment() {
        _classCallCheck(this, _Payment);
      };

      var _Milestones = function _Milestones() {
        _classCallCheck(this, _Milestones);
      };

      var _OrderShipping = function _OrderShipping() {
        _classCallCheck(this, _OrderShipping);
      };

      var _OrderDetailProduct = function _OrderDetailProduct() {
        _classCallCheck(this, _OrderDetailProduct);

        this.items = [];
      };

      var _Item2 = function _Item2() {
        _classCallCheck(this, _Item2);
      };
      /***/

    },

    /***/
    70066:
    /*!************************************************!*\
      !*** ./src/app/shared/models/product.model.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Product": function Product() {
          return (
            /* binding */
            _Product
          );
        },

        /* harmony export */
        "Variant": function Variant() {
          return (
            /* binding */
            _Variant
          );
        },

        /* harmony export */
        "Image": function Image() {
          return (
            /* binding */
            _Image
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _configuration_store_location_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./configuration-store-location.model */
      87527);

      var _Product = function _Product() {
        _classCallCheck(this, _Product);

        this.variants = [];
        this.images = [];
        this.merchant = new _configuration_store_location_model__WEBPACK_IMPORTED_MODULE_0__.ConfigurationStoreLocation();
      };

      var _Variant = function _Variant() {
        _classCallCheck(this, _Variant);
      };

      var _Image = function _Image() {
        _classCallCheck(this, _Image);
      };
      /***/

    },

    /***/
    42610:
    /*!*************************************************!*\
      !*** ./src/app/shared/models/shipping.model.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Shipping": function Shipping() {
          return (
            /* binding */
            _Shipping
          );
        },

        /* harmony export */
        "Type": function Type() {
          return (
            /* binding */
            _Type
          );
        },

        /* harmony export */
        "Detail": function Detail() {
          return (
            /* binding */
            _Detail
          );
        }
        /* harmony export */

      });

      var _Shipping = function _Shipping() {
        _classCallCheck(this, _Shipping);

        this.instant = new _Type();
        this.sameDay = new _Type();
        this.digital = new _Type();
        this.regular = new _Type();
        this.express = new _Type();
        this.trucking = new _Type();
      };

      var _Type = function _Type() {
        _classCallCheck(this, _Type);

        this.details = [];
      };

      var _Detail = function _Detail() {
        _classCallCheck(this, _Detail);
      };
      /***/

    },

    /***/
    43206:
    /*!****************************************************************!*\
      !*** ./src/app/shared/service/api-model-translator.service.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ApiModelTranslatorService": function ApiModelTranslatorService() {
          return (
            /* binding */
            _ApiModelTranslatorService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ApiModelTranslatorService = /*#__PURE__*/function () {
        function _ApiModelTranslatorService() {
          _classCallCheck(this, _ApiModelTranslatorService);
        }

        _createClass(_ApiModelTranslatorService, [{
          key: "ToSnakeCase",
          value: function ToSnakeCase(str) {
            return str.replace(/[A-Z]/g, function (letter) {
              return "_".concat(letter.toLowerCase());
            });
          }
        }, {
          key: "toCamelCase",
          value: function toCamelCase(s) {
            return s.replace(/([-_][a-z])/ig, function ($1) {
              return $1.toUpperCase().replace('-', '').replace('_', '');
            });
          }
        }, {
          key: "snakeToCamelCase",
          value: function snakeToCamelCase(o) {
            var _this = this;

            if (o === Object(o) && !Array.isArray(o) && typeof o !== 'function') {
              var n = {};
              Object.keys(o).forEach(function (k) {
                n[_this.toCamelCase(k)] = _this.snakeToCamelCase(o[k]);
              });
              return n;
            } else if (Array.isArray(o)) {
              return o.map(function (i) {
                return _this.snakeToCamelCase(i);
              });
            }

            return o;
          }
        }, {
          key: "camelToSnakeCase",
          value: function camelToSnakeCase(o) {
            var _this2 = this;

            if (o === Object(o) && !Array.isArray(o) && typeof o !== 'function') {
              var n = {};
              Object.keys(o).forEach(function (k) {
                n[_this2.ToSnakeCase(k)] = _this2.camelToSnakeCase(o[k]);
              });
              return n;
            } else if (Array.isArray(o)) {
              return o.map(function (i) {
                return _this2.camelToSnakeCase(i);
              });
            }

            return o;
          }
        }]);

        return _ApiModelTranslatorService;
      }();

      _ApiModelTranslatorService.ɵfac = function ApiModelTranslatorService_Factory(t) {
        return new (t || _ApiModelTranslatorService)();
      };

      _ApiModelTranslatorService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _ApiModelTranslatorService,
        factory: _ApiModelTranslatorService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    79917:
    /*!******************************************************!*\
      !*** ./src/app/shared/service/validation.service.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ValidationService": function ValidationService() {
          return (
            /* binding */
            _ValidationService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ValidationService = /*#__PURE__*/function () {
        function _ValidationService() {
          _classCallCheck(this, _ValidationService);
        }

        _createClass(_ValidationService, [{
          key: "numberOnly",
          value: function numberOnly(event) {
            var charCode = event.which ? event.which : event.keyCode;

            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
              return false;
            }

            return true;
          }
        }, {
          key: "decimalOnly",
          value: function decimalOnly(event) {
            var charCode = event.which ? event.which : event.keyCode;

            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
              if (charCode === 46) {
                return true;
              } else {
                return false;
              }
            }

            return true;
          }
        }]);

        return _ValidationService;
      }();

      _ValidationService.ɵfac = function ValidationService_Factory(t) {
        return new (t || _ValidationService)();
      };

      _ValidationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _ValidationService,
        factory: _ValidationService.ɵfac,
        providedIn: 'root'
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map