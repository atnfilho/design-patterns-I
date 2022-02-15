import Imposto from "./Imposto";
import Orcamento from "../orcamento/Orcamento";

// strategy 1
class ICMS implements Imposto {
  calcular(orcamento: Orcamento) {
    console.log(orcamento.getValor() * 0.1);
  }
}

export default ICMS;
