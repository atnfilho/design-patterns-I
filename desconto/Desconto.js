"use strict";
exports.__esModule = true;
var Desconto = /** @class */ (function () {
    function Desconto(proximo) {
        this.proximo = proximo;
    }
    // behavioral design pattern
    // template method
    Desconto.prototype.calcular = function (orcamento) {
        if (this.deveAplicar(orcamento)) {
            return this.efetuarCalculo(orcamento);
        }
        return this.proximo.calcular(orcamento);
    };
    return Desconto;
}());
exports["default"] = Desconto;
