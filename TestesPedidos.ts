import EnviarEmailPedido from "./pedido/acao/EnviarEmailPedido";
import SalvarPedidoNoBancoDeDados from "./pedido/acao/SalvarPedidoNoBancoDeDados";
import GeraPedido from "./pedido/GeraPedido";
import GeraPedidoHandler from "./pedido/GeraPedidoHandler";

const cliente: string = 'Ana Silva';
const valorOrcamento: number = 1000;
const quantidadeItens: number = 6;

const dados: GeraPedido = new GeraPedido(cliente, valorOrcamento, quantidadeItens);
const handler: GeraPedidoHandler = new GeraPedidoHandler(
    [new SalvarPedidoNoBancoDeDados(), new EnviarEmailPedido]
);
handler.execute(dados);