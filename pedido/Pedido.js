"use strict";
exports.__esModule = true;
var Pedido = /** @class */ (function () {
    function Pedido(cliente, data, orcamento) {
        this.cliente = cliente;
        this.data = data;
        this.orcamento = orcamento;
    }
    Pedido.prototype.getCliente = function () {
        return this.cliente;
    };
    Pedido.prototype.getData = function () {
        return this.data;
    };
    Pedido.prototype.getOrcamento = function () {
        return this.orcamento;
    };
    return Pedido;
}());
exports["default"] = Pedido;
