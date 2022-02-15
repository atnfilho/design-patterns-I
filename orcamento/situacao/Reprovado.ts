import Orcamento from "../Orcamento";
import Finalizado from "./Finalizado";
import SituacaoOrcamento from "./SituacaoOrcamento";

    class Reprovado extends SituacaoOrcamento {

        finalizado(orcamento: Orcamento) {
            orcamento.setSituacao(new Finalizado());
        }

    }

export default Reprovado;