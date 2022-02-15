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
var Aprovado_1 = require("./Aprovado");
var Reprovado_1 = require("./Reprovado");
var SituacaoOrcamento_1 = require("./SituacaoOrcamento");
var EmAnalise = /** @class */ (function (_super) {
    __extends(EmAnalise, _super);
    function EmAnalise() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmAnalise.prototype.calcularDescontoExtra = function (orcamento) {
        return orcamento.getValor() * 0.05;
    };
    EmAnalise.prototype.aprovar = function (orcamento) {
        orcamento.setSituacao(new Aprovado_1["default"]());
    };
    EmAnalise.prototype.reprovar = function (orcamento) {
        orcamento.setSituacao(new Reprovado_1["default"]());
    };
    return EmAnalise;
}(SituacaoOrcamento_1["default"]));
exports["default"] = EmAnalise;
