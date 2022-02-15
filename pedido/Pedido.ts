import Orcamento from "../orcamento/Orcamento";

class Pedido {
    private cliente: string;
    private data: string;
    private orcamento: Orcamento;

    constructor(cliente: string, data: string, orcamento: Orcamento) {
        this.cliente = cliente;
        this.data = data;
        this.orcamento = orcamento;
    }

    
    public getCliente() : string {
        return this.cliente;
    }

    
    public getData() : string {
        return this.data;
    }

    
    public getOrcamento() : Orcamento {
        return this.orcamento;
    }
    

}

export default Pedido;