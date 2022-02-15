import Orcamento from './orcamento/Orcamento';
import CalculadoraDeDescontos from './desconto/CalculadoraDeDesconto';


let orcamento1 = new Orcamento(200, 6);
orcamento1.aplicarDescontoExtra();
console.log(orcamento1);
orcamento1.aprovar();
orcamento1.aprovar();
console.log(orcamento1);
let orcamento2 = new Orcamento(1000, 1);

let calculadora = new CalculadoraDeDescontos();
console.log(calculadora.calcular(orcamento1));
console.log(calculadora.calcular(orcamento2));

