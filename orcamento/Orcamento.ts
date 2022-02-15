import SituacaoOrcamento from "./situacao/SituacaoOrcamento";
import EmAnalise from "./situacao/EmAnalise";

class Orcamento {
  protected valor: number;
  protected qtdeItens: number;

  // behavioral design pattern
  // state
  private situacao: SituacaoOrcamento = new EmAnalise();

  constructor(valor: number, qtdeItens: number) {
    this.valor = valor;
    this.qtdeItens = qtdeItens;
  }

  public getValor(): number {
    return this.valor;
  }

  public getQtdeItens(): number {
    return this.qtdeItens;
  }

  public getSituacao(): SituacaoOrcamento {
    return this.situacao;
  }

  public setSituacao(novaSituacao: SituacaoOrcamento) {
    this.situacao = novaSituacao;
  }

  // behavioral design pattern
  // state
  public aplicarDescontoExtra(): void {
    let valorDescontoExtra = this.situacao.calcularDescontoExtra(this);
    this.valor = this.valor - valorDescontoExtra;
  }

  public aprovar() {
    this.situacao.aprovar(this);
  }

  public reprovar() {
    this.situacao.reprovar(this);
  }

  public finalizar() {
    this.situacao.finalizar(this);
  }
}

export default Orcamento;
