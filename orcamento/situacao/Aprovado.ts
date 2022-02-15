import Orcamento from "../Orcamento";
import Finalizado from "./Finalizado";
import SituacaoOrcamento from "./SituacaoOrcamento";

    class Aprovado extends SituacaoOrcamento {

        calcularDescontoExtra(orcamento: Orcamento): number {
            return orcamento.getValor() * 0.02;            
        }

        finalizar(orcamento: Orcamento): void {
            orcamento.setSituacao(new Finalizado());
        }

    }

    export default Aprovado;