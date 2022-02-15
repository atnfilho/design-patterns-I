"use strict";
exports.__esModule = true;
var DescontoParaOrcamentoComMaisDeCincoItens_1 = require("./DescontoParaOrcamentoComMaisDeCincoItens");
var DescontoParaOrcamentoComValorMaiorQueQuinhentos_1 = require("./DescontoParaOrcamentoComValorMaiorQueQuinhentos");
var SemDesconto_1 = require("./SemDesconto");
var CalculadoraDeDescontos = /** @class */ (function () {
    function CalculadoraDeDescontos() {
    }
    CalculadoraDeDescontos.prototype.calcular = function (orcamento) {
        // behavioral design pattern 
        // chain of responsability
        var cadeiaDeDescontos = new DescontoParaOrcamentoComMaisDeCincoItens_1["default"](new DescontoParaOrcamentoComValorMaiorQueQuinhentos_1["default"](new SemDesconto_1["default"]()));
        return cadeiaDeDescontos.calcular(orcamento);
    };
    return CalculadoraDeDescontos;
}());
exports["default"] = CalculadoraDeDescontos;
