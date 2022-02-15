"use strict";
exports.__esModule = true;
// strategy 1
var ICMS = /** @class */ (function () {
    function ICMS() {
    }
    ICMS.prototype.calcular = function (orcamento) {
        console.log(orcamento.getValor() * 0.1);
    };
    return ICMS;
}());
exports["default"] = ICMS;
