import Orcamento from "../Orcamento";

abstract class SituacaoOrcamento {

    calcularDescontoExtra(orcamento: Orcamento): number {
        return 0;            
    }

    aprovar(orcamento: Orcamento): void {
        console.log("Orçamento não pode ser aprovado!");
    }

    reprovar(orcamento: Orcamento): void {
        console.log("Orçamento não pode ser reprovado!");
    }

    finalizar(orcamento: Orcamento): void {
        console.log("Orçamento não pode ser finalizado!");
    }

}

export default SituacaoOrcamento;