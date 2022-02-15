"use strict";
exports.__esModule = true;
var GeraPedido = /** @class */ (function () {
    function GeraPedido(cliente, valorOrcamento, quantidadeItens) {
        this.cliente = cliente;
        this.valorOrcamento = valorOrcamento;
        this.quantidadeItens = quantidadeItens;
    }
    GeraPedido.prototype.getCliente = function () {
        return this.cliente;
    };
    GeraPedido.prototype.getValorOrcamento = function () {
        return this.valorOrcamento;
    };
    GeraPedido.prototype.getQuantidadeItens = function () {
        return this.quantidadeItens;
    };
    return GeraPedido;
}());
exports["default"] = GeraPedido;
