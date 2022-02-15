import Orcamento from "../orcamento/Orcamento";
import Desconto from "./Desconto";

class DescontoParaOrcamentoComValorMaiorQueQuinhentos extends Desconto {
  
  constructor(proximo: Desconto) {
    super(proximo);
  }

  protected efetuarCalculo(orcamento: Orcamento) {
    return orcamento.getValor() * 0.05;
  }

  public deveAplicar(orcamento: Orcamento) {
    return orcamento.getValor() > 500;
  }
  
}

export default DescontoParaOrcamentoComValorMaiorQueQuinhentos;
