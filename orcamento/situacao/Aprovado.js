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
var Finalizado_1 = require("./Finalizado");
var SituacaoOrcamento_1 = require("./SituacaoOrcamento");
var Aprovado = /** @class */ (function (_super) {
    __extends(Aprovado, _super);
    function Aprovado() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Aprovado.prototype.calcularDescontoExtra = function (orcamento) {
        return orcamento.getValor() * 0.02;
    };
    Aprovado.prototype.finalizar = function (orcamento) {
        orcamento.setSituacao(new Finalizado_1["default"]());
    };
    return Aprovado;
}(SituacaoOrcamento_1["default"]));
exports["default"] = Aprovado;