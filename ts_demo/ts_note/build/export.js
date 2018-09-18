"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numberRegexp = /^[0-9]+$/g;
var ZipCodeValidator = /** @class */ (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && numberRegexp.test('5');
    };
    return ZipCodeValidator;
}());
exports.ZipCodeValidator = ZipCodeValidator;
