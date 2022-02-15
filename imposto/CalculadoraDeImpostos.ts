import Imposto from "./Imposto";
import Orcamento from "../orcamento/Orcamento";

// contexto
class CalculadoraDeImpostos {
  private imposto: Imposto;
  private orcamento: Orcamento;

  constructor(orcamento: Orcamento, imposto: Imposto) {
    this.imposto = imposto;
    this.orcamento = orcamento;
  }

  public setImposto(imposto: Imposto) {
    this.imposto = imposto;
  }

  // behavioral design pattern 
  // strategy
  calcular() {
    this.imposto.calcular(this.orcamento);
  }
}

export default CalculadoraDeImpostos;
