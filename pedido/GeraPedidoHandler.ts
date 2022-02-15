import Orcamento from "../orcamento/Orcamento";
import AcaoAposGerarPedido from "./acao/AcaoAposGerarPedido";
import GeraPedido from "./GeraPedido";
import Pedido from "./Pedido";

class GeraPedidoHandler {

    private acoes: AcaoAposGerarPedido[]; 
    
    constructor(acoes: AcaoAposGerarPedido[]) {
        this.acoes = acoes;
    }

    public execute(dados: GeraPedido):void {
        const orcamento: Orcamento = new Orcamento(
            dados.getValorOrcamento(),
            dados.getQuantidadeItens()
          );
      
          const pedido: Pedido = new Pedido(dados.getCliente(), new Date().toLocaleString(), orcamento);
      
          this.acoes.forEach(acao => {
              acao.executaAcao(pedido);
          })
          
    }


}

export default GeraPedidoHandler;