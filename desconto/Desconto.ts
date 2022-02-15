import Orcamento from "../orcamento/Orcamento";

abstract class Desconto {

    protected proximo: Desconto;

    constructor (proximo: Desconto) {
        this.proximo = proximo;
    }

    // behavioral design pattern
    // template method
    public calcular(orcamento: Orcamento): number {
        if(this.deveAplicar(orcamento)) {
            return this.efetuarCalculo(orcamento);
        }

        return this.proximo.calcular(orcamento);
    }

    protected abstract deveAplicar(orcamento: Orcamento): boolean;
    protected abstract efetuarCalculo(orcamento: Orcamento): number;
}

export default Desconto;