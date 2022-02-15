import Pedido from "../Pedido";
import AcaoAposGerarPedido from "./AcaoAposGerarPedido";

class SalvarPedidoNoBancoDeDados implements AcaoAposGerarPedido {
    
    executaAcao(pedido: Pedido): void {
        console.log("Salvar pedido no banco de dados");
    }

}

export default SalvarPedidoNoBancoDeDados;