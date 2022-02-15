import Orcamento from "../orcamento/Orcamento";
import Desconto from "./Desconto";

class DescontoParaOrcamentoComMaisDeCincoItens extends Desconto {
  
  constructor(proximo: Desconto) {
    super(proximo);
  }

  deveAplicar(orcamento: Orcamento) {
    return orcamento.getQtdeItens() > 5;
  }

  protected efetuarCalculo(orcamento: Orcamento) {
    return orcamento.getValor() * 0.1;
  }

}

export default DescontoParaOrcamentoComMaisDeCincoItens;
