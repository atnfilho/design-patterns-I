import Orcamento from "../orcamento/Orcamento";
import Pedido from "./Pedido";

class GeraPedido {
  private cliente: string;
  private valorOrcamento: number;
  private quantidadeItens: number;

  constructor(
    cliente: string,
    valorOrcamento: number,
    quantidadeItens: number
  ) {
    this.cliente = cliente;
    this.valorOrcamento = valorOrcamento;
    this.quantidadeItens = quantidadeItens;
  }

  
  public getCliente() : string {
    return this.cliente;
  }

  
  public getValorOrcamento() : number {
    return this.valorOrcamento;
  }

  
  public getQuantidadeItens() : number {
    return this.quantidadeItens;
  }
  
  
  
}

export default GeraPedido;