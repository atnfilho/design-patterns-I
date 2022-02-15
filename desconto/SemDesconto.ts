import Orcamento from "../orcamento/Orcamento";
import Desconto from "./Desconto";

class SemDesconto extends Desconto {
    
  constructor() {
    super(null);
  }

  deveAplicar(orcamento: Orcamento) {
    return true;
  }

  protected efetuarCalculo(orcamento: Orcamento) {
    return 0;
  }
}

export default SemDesconto;
