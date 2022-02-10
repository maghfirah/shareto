"use strict";
(self["webpackChunkrvn_retail_ui"] = self["webpackChunkrvn_retail_ui"] || []).push([["common"],{

/***/ 96694:
/*!************************************************************!*\
  !*** ./src/app/shared/constant/api-error-code.constant.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiErrorCode": function() { return /* binding */ ApiErrorCode; }
/* harmony export */ });
/**
 * Kelas yang berisi kumpulan response error type dari api
 */
class ApiErrorCode {
}
ApiErrorCode.MERCHANT_NOT_FOUND = 'merchant_not_found';
ApiErrorCode.MERCHANT_INACTIVE = 'merchant_inactive';
ApiErrorCode.LINK_MERCHANT_NOT_FOUND = 'link_merchant_not_found';


/***/ }),

/***/ 42493:
/*!**************************************************!*\
  !*** ./src/app/shared/constant/prop.constant.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropConstant": function() { return /* binding */ PropConstant; }
/* harmony export */ });
class PropConstant {
}
PropConstant.COOKIE_CART_ID_TIMEOUT = "1";
PropConstant.ENV_SIMULATOR_NOT_EXIST = "https://jokul.doku.com";


/***/ }),

/***/ 99719:
/*!***************************************************!*\
  !*** ./src/app/shared/enum/location-type.enum.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationType": function() { return /* binding */ LocationType; }
/* harmony export */ });
var LocationType;
(function (LocationType) {
    LocationType["Province"] = "PROVINCE";
    LocationType["City"] = "CITY";
    LocationType["District"] = "DISTRICT";
    LocationType["SubDistrict"] = "SUB_DISTRICT";
    LocationType["PostalCode"] = "POSTAL_CODE";
    LocationType["PostalCodeCityProvince"] = "POSTAL_CODE_CITY_PROVINCE";
})(LocationType || (LocationType = {}));


/***/ }),

/***/ 14162:
/*!****************************************************!*\
  !*** ./src/app/shared/enum/payment-status.enum.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentStatus": function() { return /* binding */ PaymentStatus; }
/* harmony export */ });
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Unpaid"] = "UNPAID";
    PaymentStatus["Paid"] = "PAID";
    PaymentStatus["Expired"] = "EXPIRED";
})(PaymentStatus || (PaymentStatus = {}));


/***/ }),

/***/ 52562:
/*!*******************************************************!*\
  !*** ./src/app/shared/enum/product-condition.enum.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductCondition": function() { return /* binding */ ProductCondition; }
/* harmony export */ });
var ProductCondition;
(function (ProductCondition) {
    ProductCondition["New"] = "NEW";
    ProductCondition["Used"] = "USED";
})(ProductCondition || (ProductCondition = {}));


/***/ }),

/***/ 33595:
/*!****************************************************!*\
  !*** ./src/app/shared/enum/product-status.enum.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductStatus": function() { return /* binding */ ProductStatus; }
/* harmony export */ });
var ProductStatus;
(function (ProductStatus) {
    ProductStatus["WAITING"] = "Proses Verifikasi";
    ProductStatus["APPROVED"] = "Produk Terverifikasi";
    ProductStatus["REJECTED"] = "Produk Ditolak";
    ProductStatus["ACTIVE"] = "Produk Aktif";
    ProductStatus["NON_ACTIVE"] = "Produk Nonaktif";
})(ProductStatus || (ProductStatus = {}));
(function (ProductStatus) {
    function valueOf(request) {
        for (const productStatus in ProductStatus) {
            if (request === ProductStatus[productStatus]) {
                return productStatus;
            }
        }
    }
    ProductStatus.valueOf = valueOf;
})(ProductStatus || (ProductStatus = {}));


/***/ }),

/***/ 16486:
/*!***************************************************!*\
  !*** ./src/app/shared/enum/transaction-status.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionStatus": function() { return /* binding */ TransactionStatus; }
/* harmony export */ });
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["checkWaitingForPayment"] = "menunggu_pembayaran";
    TransactionStatus["checkNewOrder"] = "peasanan_baru";
    TransactionStatus["checkProccessed"] = "diproses";
    TransactionStatus["checkSent"] = "dikirim";
    TransactionStatus["checkFinished"] = "selesai";
    TransactionStatus["checkExpired"] = "kadarluasa";
})(TransactionStatus || (TransactionStatus = {}));


/***/ }),

/***/ 61347:
/*!*****************************************************************!*\
  !*** ./src/app/shared/helper/form-control-validation.helper.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormControlValidationHelper": function() { return /* binding */ FormControlValidationHelper; }
/* harmony export */ });
class FormControlValidationHelper {
    static getValidatorErrorMessage(validatorName, validatorValue) {
        const config = {
            required: 'Required',
            invalidEmail: 'Invalid email address',
            invalidNumber: 'This field can only be filled with numbers',
            invalidPassword: 'Password Contains at least 1alphabet, 1number',
            invalidDuration: 'Value cannot 0',
        };
        return config[validatorName];
    }
    static emailValidator(control) {
        var _a;
        const regex = "^^[a-zA-Z0-9.!#$%&’*+=?^_`{|}~-]+[^\\.,!#$%&’'*+=?^_`{|}~\\-@()\"<>]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-]+(?:\\.[a-zA-Z]+)*$";
        if (control.value && control.value.match(regex)) {
            return null;
        }
        else {
            if (control.value === null || ((_a = control.value) === null || _a === void 0 ? void 0 : _a.length) === 0) {
                return null;
            }
            else {
                return { invalidEmail: true };
            }
        }
    }
    static phoneNumberValidator(control) {
        const regex = /^[0-9]*$/;
        if ((control === null || control === void 0 ? void 0 : control.value) || control.value === "") {
            return null;
        }
        else if (control.value && control.value.match(regex)) {
            return null;
        }
        else {
            return { invalidNumber: true };
        }
    }
    static passwordValidator(control) {
        const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]{8,16}$/;
        //minimum 8character, max 16, at least 1lowercase,1uppercase, 1number, with optional special character
        if (control.value && control.value.match(strongRegex)) {
            return null;
        }
        else {
            return { invalidPassword: true };
        }
    }
    static durationValidator(control) {
        const regex = /^[1-9][0-9]*$/;
        let maxDuration = 1000;
        if (control.value === "" || control.value === null) {
            return null;
        }
        else if (control.value && control.value.match(regex) && parseInt(control.value) < maxDuration) {
            return null;
        }
        else {
            return { invalidDuration: true };
        }
    }
}


/***/ }),

/***/ 26417:
/*!**************************************************!*\
  !*** ./src/app/shared/models/add-order.model.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddOrder": function() { return /* binding */ AddOrder; }
/* harmony export */ });
class AddOrder {
}


/***/ }),

/***/ 24692:
/*!*********************************************!*\
  !*** ./src/app/shared/models/cart.model.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cart": function() { return /* binding */ Cart; },
/* harmony export */   "CartItem": function() { return /* binding */ CartItem; },
/* harmony export */   "Item": function() { return /* binding */ Item; }
/* harmony export */ });
/* harmony import */ var _configuration_store_location_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration-store-location.model */ 87527);
/* harmony import */ var _product_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.model */ 70066);


class Cart {
    constructor() {
        this.merchant = new _configuration_store_location_model__WEBPACK_IMPORTED_MODULE_0__.ConfigurationStoreLocation();
        this.cartItems = [];
    }
}
class CartItem {
    constructor() {
        this.product = new _product_model__WEBPACK_IMPORTED_MODULE_1__.Product();
        this.items = [];
    }
}
class Item {
}


/***/ }),

/***/ 78130:
/*!*************************************************!*\
  !*** ./src/app/shared/models/checkout.model.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Checkout": function() { return /* binding */ Checkout; }
/* harmony export */ });
class Checkout {
}


/***/ }),

/***/ 87527:
/*!*********************************************************************!*\
  !*** ./src/app/shared/models/configuration-store-location.model.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationStoreLocation": function() { return /* binding */ ConfigurationStoreLocation; }
/* harmony export */ });
/* harmony import */ var _location_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location.model */ 20229);

class ConfigurationStoreLocation {
    constructor() {
        this.province = new _location_model__WEBPACK_IMPORTED_MODULE_0__.Province();
        this.city = new _location_model__WEBPACK_IMPORTED_MODULE_0__.City();
        this.district = new _location_model__WEBPACK_IMPORTED_MODULE_0__.District();
        this.subDistrict = new _location_model__WEBPACK_IMPORTED_MODULE_0__.SubDistrict();
        this.postalCode = new _location_model__WEBPACK_IMPORTED_MODULE_0__.PostalCode();
        this.postalCodeCityProvince = new _location_model__WEBPACK_IMPORTED_MODULE_0__.PostalCodeCityProvince();
    }
}


/***/ }),

/***/ 20229:
/*!*************************************************!*\
  !*** ./src/app/shared/models/location.model.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Location": function() { return /* binding */ Location; },
/* harmony export */   "Province": function() { return /* binding */ Province; },
/* harmony export */   "City": function() { return /* binding */ City; },
/* harmony export */   "District": function() { return /* binding */ District; },
/* harmony export */   "SubDistrict": function() { return /* binding */ SubDistrict; },
/* harmony export */   "PostalCode": function() { return /* binding */ PostalCode; },
/* harmony export */   "PostalCodeCityProvince": function() { return /* binding */ PostalCodeCityProvince; },
/* harmony export */   "General": function() { return /* binding */ General; }
/* harmony export */ });
class Location {
}
class Province {
}
class City {
}
class District {
}
class SubDistrict {
}
class PostalCode {
}
class PostalCodeCityProvince {
}
class General {
}


/***/ }),

/***/ 55973:
/*!*****************************************************!*\
  !*** ./src/app/shared/models/order-detail.model.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderDetail": function() { return /* binding */ OrderDetail; },
/* harmony export */   "Merchant": function() { return /* binding */ Merchant; },
/* harmony export */   "Customer": function() { return /* binding */ Customer; },
/* harmony export */   "Payment": function() { return /* binding */ Payment; },
/* harmony export */   "Milestones": function() { return /* binding */ Milestones; },
/* harmony export */   "OrderShipping": function() { return /* binding */ OrderShipping; },
/* harmony export */   "OrderDetailProduct": function() { return /* binding */ OrderDetailProduct; },
/* harmony export */   "Item": function() { return /* binding */ Item; }
/* harmony export */ });
class OrderDetail {
    constructor() {
        this.merchant = new Merchant();
        this.customer = new Customer();
        this.shipping = new OrderShipping();
        this.payment = new Payment();
        this.milestones = [];
        this.products = [];
    }
}
class Merchant {
}
class Customer {
}
class Payment {
}
class Milestones {
}
class OrderShipping {
}
class OrderDetailProduct {
    constructor() {
        this.items = [];
    }
}
class Item {
}


/***/ }),

/***/ 70066:
/*!************************************************!*\
  !*** ./src/app/shared/models/product.model.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Product": function() { return /* binding */ Product; },
/* harmony export */   "Variant": function() { return /* binding */ Variant; },
/* harmony export */   "Image": function() { return /* binding */ Image; }
/* harmony export */ });
/* harmony import */ var _configuration_store_location_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration-store-location.model */ 87527);

class Product {
    constructor() {
        this.variants = [];
        this.images = [];
        this.merchant = new _configuration_store_location_model__WEBPACK_IMPORTED_MODULE_0__.ConfigurationStoreLocation();
    }
}
class Variant {
}
class Image {
}


/***/ }),

/***/ 42610:
/*!*************************************************!*\
  !*** ./src/app/shared/models/shipping.model.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Shipping": function() { return /* binding */ Shipping; },
/* harmony export */   "Type": function() { return /* binding */ Type; },
/* harmony export */   "Detail": function() { return /* binding */ Detail; }
/* harmony export */ });
class Shipping {
    constructor() {
        this.instant = new Type();
        this.sameDay = new Type();
        this.digital = new Type();
        this.regular = new Type();
        this.express = new Type();
        this.trucking = new Type();
    }
}
class Type {
    constructor() {
        this.details = [];
    }
}
class Detail {
}


/***/ }),

/***/ 43206:
/*!****************************************************************!*\
  !*** ./src/app/shared/service/api-model-translator.service.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiModelTranslatorService": function() { return /* binding */ ApiModelTranslatorService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class ApiModelTranslatorService {
    ToSnakeCase(str) {
        return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
    }
    toCamelCase(s) {
        return s.replace(/([-_][a-z])/ig, ($1) => {
            return $1.toUpperCase()
                .replace('-', '')
                .replace('_', '');
        });
    }
    snakeToCamelCase(o) {
        if (o === Object(o) && !Array.isArray(o) && typeof o !== 'function') {
            const n = {};
            Object.keys(o)
                .forEach((k) => {
                n[this.toCamelCase(k)] = this.snakeToCamelCase(o[k]);
            });
            return n;
        }
        else if (Array.isArray(o)) {
            return o.map((i) => {
                return this.snakeToCamelCase(i);
            });
        }
        return o;
    }
    camelToSnakeCase(o) {
        if (o === Object(o) && !Array.isArray(o) && typeof o !== 'function') {
            const n = {};
            Object.keys(o)
                .forEach((k) => {
                n[this.ToSnakeCase(k)] = this.camelToSnakeCase(o[k]);
            });
            return n;
        }
        else if (Array.isArray(o)) {
            return o.map((i) => {
                return this.camelToSnakeCase(i);
            });
        }
        return o;
    }
}
ApiModelTranslatorService.ɵfac = function ApiModelTranslatorService_Factory(t) { return new (t || ApiModelTranslatorService)(); };
ApiModelTranslatorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiModelTranslatorService, factory: ApiModelTranslatorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 79917:
/*!******************************************************!*\
  !*** ./src/app/shared/service/validation.service.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidationService": function() { return /* binding */ ValidationService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class ValidationService {
    numberOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    decimalOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            if (charCode === 46) {
                return true;
            }
            else {
                return false;
            }
        }
        return true;
    }
}
ValidationService.ɵfac = function ValidationService_Factory(t) { return new (t || ValidationService)(); };
ValidationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ValidationService, factory: ValidationService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map