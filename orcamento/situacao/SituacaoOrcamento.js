"use strict";
exports.__esModule = true;
var SituacaoOrcamento = /** @class */ (function () {
    function SituacaoOrcamento() {
    }
    SituacaoOrcamento.prototype.calcularDescontoExtra = function (orcamento) {
        return 0;
    };
    SituacaoOrcamento.prototype.aprovar = function (orcamento) {
        console.log("Orçamento não pode ser aprovado!");
    };
    SituacaoOrcamento.prototype.reprovar = function (orcamento) {
        console.log("Orçamento não pode ser reprovado!");
    };
    SituacaoOrcamento.prototype.finalizar = function (orcamento) {
        console.log("Orçamento não pode ser finalizado!");
    };
    return SituacaoOrcamento;
}());
exports["default"] = SituacaoOrcamento;
