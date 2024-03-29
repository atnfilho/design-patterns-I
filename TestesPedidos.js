"use strict";
exports.__esModule = true;
var EnviarEmailPedido_1 = require("./pedido/acao/EnviarEmailPedido");
var SalvarPedidoNoBancoDeDados_1 = require("./pedido/acao/SalvarPedidoNoBancoDeDados");
var GeraPedido_1 = require("./pedido/GeraPedido");
var GeraPedidoHandler_1 = require("./pedido/GeraPedidoHandler");
var cliente = 'Ana Silva';
var valorOrcamento = 1000;
var quantidadeItens = 6;
var dados = new GeraPedido_1["default"](cliente, valorOrcamento, quantidadeItens);
var handler = new GeraPedidoHandler_1["default"]([new SalvarPedidoNoBancoDeDados_1["default"](), new EnviarEmailPedido_1["default"]]);
handler.execute(dados);
