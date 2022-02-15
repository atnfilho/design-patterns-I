import Pedido from "../Pedido";
import AcaoAposGerarPedido from "./AcaoAposGerarPedido";

class EnviarEmailPedido implements AcaoAposGerarPedido {
    
    executaAcao(pedido: Pedido): void {
        console.log("Enviar email com dados do novo pedido");
    }
    
}

export default EnviarEmailPedido;