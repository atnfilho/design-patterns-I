import Imposto from "./Imposto";
import Orcamento from "../orcamento/Orcamento";

// strategy 2
class ISS implements Imposto {
  calcular(orcamento: Orcamento) {
    console.log(orcamento.getValor() * 0.05);
  }
}

export default ISS;
