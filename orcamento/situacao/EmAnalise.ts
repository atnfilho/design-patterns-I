import Orcamento from "../Orcamento";
import Aprovado from "./Aprovado";
import Reprovado from "./Reprovado";
import SituacaoOrcamento from "./SituacaoOrcamento";

    class EmAnalise extends SituacaoOrcamento {

        calcularDescontoExtra(orcamento: Orcamento): number {
            return orcamento.getValor() * 0.05;            
        }

        aprovar(orcamento: Orcamento): void {
            orcamento.setSituacao(new Aprovado());
        }

        reprovar(orcamento: Orcamento): void {
            orcamento.setSituacao(new Reprovado());
        }
    }

    export default EmAnalise;