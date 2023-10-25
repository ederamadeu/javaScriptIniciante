// Por qual motivo o código abaixo retorna com erros?
{
  //var cor = "preto";
  let cor = "preto";
  const marca = "Fiat";
  let portas = 4;
  console.log(cor, marca, portas);
}
//Variáveis como let e const não vazam para fora do bloco de código, só a variável VAR .console.log(var, marca, portas); para arrumar eu mudei a variavel cor para let e coloquei o console.log dentro do bloco.

// Como corrigir o erro abaixo?
//colocando a variável fora das funções e acessando-a nas funções de acordo com o escopo
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500?

// mudei a variaval de VAR para LET
//var numero = 50;
const numero = 50;

//No looping criou-se uma outra variaval com nome numero, não é o correto!
for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
