// Crie uma função para verificar se um valor é Truthy
function verificaTrueAndFalse(cor) {
  return !!cor;
}
console.log(verificaTrueAndFalse("azul"));
console.log(verificaTrueAndFalse(""));
// Crie uma função matemática que retorne o perímetro de um quadrado

// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
  return lado * 4;
}
console.log(perimetroQuadrado(2));
console.log(perimetroQuadrado(3));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeComSobrenome(nome, sobreNome) {
  return `${nome} ${sobreNome}`;
}
console.log("Eder", "Amadeu");

// Crie uma função que verifica se um número é par

function verificaNumero(numero) {
  var numero;
  if (numero % 2 === 0) {
    return "É um número par";
  } else {
    return "Não é número par, entre com outro número";
  }
}

console.log(verificaNumero(2));
console.log(verificaNumero(23));
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDeDado(dado) {
  return typeof dado;
}
console.log(tipoDeDado(2));
console.log(tipoDeDado("eder"));
console.log(tipoDeDado(null));
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

//precisa colocar alguma coisa na página pra rodar o scroll
addEventListener("scroll", function () {
  console.log("Éder Amadeu");
});
// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));
