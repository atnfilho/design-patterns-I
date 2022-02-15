"use strict";
exports.__esModule = true;
// strategy 2
var ISS = /** @class */ (function () {
    function ISS() {
    }
    ISS.prototype.calcular = function (orcamento) {
        console.log(orcamento.getValor() * 0.05);
    };
    return ISS;
}());
exports["default"] = ISS;
