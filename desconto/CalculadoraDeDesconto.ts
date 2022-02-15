import Orcamento from "../orcamento/Orcamento";
import DescontoParaOrcamentoComMaisDeCincoItens from "./DescontoParaOrcamentoComMaisDeCincoItens";
import DescontoParaOrcamentoComValorMaiorQueQuinhentos from "./DescontoParaOrcamentoComValorMaiorQueQuinhentos";
import SemDesconto from "./SemDesconto";

class CalculadoraDeDescontos {
  calcular(orcamento: Orcamento): number {
    // behavioral design pattern 
    // chain of responsability
    const cadeiaDeDescontos = new DescontoParaOrcamentoComMaisDeCincoItens(
      new DescontoParaOrcamentoComValorMaiorQueQuinhentos(new SemDesconto())
    );

    return cadeiaDeDescontos.calcular(orcamento);
  }
}

export default CalculadoraDeDescontos;
