//Testando variável para descobrir o tipo dela
var nome = "Éder";
var idade = 34;
var time;
var timeSampa = null;
var simbolo = Symbol();
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof time);
console.log(typeof timeSampa);
console.log(typeof simbolo);

// Foco da aula string
//somar strings = concatenar
var nomeCliente = "Eliel";
var sobreNomeCliente = "Amadeu";

var nomeCompleto = nomeCliente + sobreNomeCliente;

console.log(nomeCompleto);

//para ter espaço entre as informações eu preciso colocar o espaçõ
var nomeCompleto = nomeCliente + " " + sobreNomeCliente;
console.log(nomeCompleto);

//É possível concatenar string com números

var gols = 1000;
var frase = "Romário fez" + " " + gols + " " + "gols";
console.log(frase);

//quando eu somo número a string, não importa, tudo vira string
console.log(typeof frase);
// quando eu somo valores diferentes de string, o javascrip faz o cálculo efetivamente.

//template string
var frase2 = `Romario fez ${gols}gols`;
console.log(frase2);
