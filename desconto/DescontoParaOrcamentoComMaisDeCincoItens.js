"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Desconto_1 = require("./Desconto");
var DescontoParaOrcamentoComMaisDeCincoItens = /** @class */ (function (_super) {
    __extends(DescontoParaOrcamentoComMaisDeCincoItens, _super);
    function DescontoParaOrcamentoComMaisDeCincoItens(proximo) {
        return _super.call(this, proximo) || this;
    }
    DescontoParaOrcamentoComMaisDeCincoItens.prototype.deveAplicar = function (orcamento) {
        return orcamento.getQtdeItens() > 5;
    };
    DescontoParaOrcamentoComMaisDeCincoItens.prototype.efetuarCalculo = function (orcamento) {
        return orcamento.getValor() * 0.1;
    };
    return DescontoParaOrcamentoComMaisDeCincoItens;
}(Desconto_1["default"]));
exports["default"] = DescontoParaOrcamentoComMaisDeCincoItens;
