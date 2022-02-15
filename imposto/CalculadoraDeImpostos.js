"use strict";
exports.__esModule = true;
// contexto
var CalculadoraDeImpostos = /** @class */ (function () {
    function CalculadoraDeImpostos(orcamento, imposto) {
        this.imposto = imposto;
        this.orcamento = orcamento;
    }
    CalculadoraDeImpostos.prototype.setImposto = function (imposto) {
        this.imposto = imposto;
    };
    CalculadoraDeImpostos.prototype.calcular = function () {
        this.imposto.calcular(this.orcamento);
    };
    return CalculadoraDeImpostos;
}());
exports["default"] = CalculadoraDeImpostos;
