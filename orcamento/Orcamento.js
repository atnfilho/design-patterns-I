"use strict";
exports.__esModule = true;
var EmAnalise_1 = require("./situacao/EmAnalise");
var Orcamento = /** @class */ (function () {
    function Orcamento(valor, qtdeItens) {
        // behavioral design pattern
        // state
        this.situacao = new EmAnalise_1["default"]();
        this.valor = valor;
        this.qtdeItens = qtdeItens;
    }
    Orcamento.prototype.getValor = function () {
        return this.valor;
    };
    Orcamento.prototype.getQtdeItens = function () {
        return this.qtdeItens;
    };
    Orcamento.prototype.getSituacao = function () {
        return this.situacao;
    };
    Orcamento.prototype.setSituacao = function (novaSituacao) {
        this.situacao = novaSituacao;
    };
    // behavioral design pattern
    // state
    Orcamento.prototype.aplicarDescontoExtra = function () {
        var valorDescontoExtra = this.situacao.calcularDescontoExtra(this);
        this.valor = this.valor - valorDescontoExtra;
    };
    Orcamento.prototype.aprovar = function () {
        this.situacao.aprovar(this);
    };
    Orcamento.prototype.reprovar = function () {
        this.situacao.reprovar(this);
    };
    Orcamento.prototype.finalizar = function () {
        this.situacao.finalizar(this);
    };
    return Orcamento;
}());
exports["default"] = Orcamento;
