"use strict";
exports.__esModule = true;
var Orcamento_1 = require("../orcamento/Orcamento");
var Pedido_1 = require("./Pedido");
var GeraPedidoHandler = /** @class */ (function () {
    function GeraPedidoHandler(acoes) {
        this.acoes = acoes;
    }
    GeraPedidoHandler.prototype.execute = function (dados) {
        var orcamento = new Orcamento_1["default"](dados.getValorOrcamento(), dados.getQuantidadeItens());
        var pedido = new Pedido_1["default"](dados.getCliente(), new Date().toLocaleString(), orcamento);
        this.acoes.forEach(function (acao) {
            acao.executaAcao(pedido);
        });
    };
    return GeraPedidoHandler;
}());
exports["default"] = GeraPedidoHandler;
