import Pedido from "../Pedido";

interface AcaoAposGerarPedido {
    
    executaAcao(pedido: Pedido): void;
}

export default AcaoAposGerarPedido;