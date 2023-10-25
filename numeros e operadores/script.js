//Qual o resutado da seguinte experssão
/* var  total = 10 + 5 *2 / 2 +20;*/

var total = 10 + (5 * 2) / 2 + 20;
console.log(total); //35

//Crie duas expressões que retornem NaN

var quantidadeTempo = "35";
var meses = 12;
var tipoTempo = "ano";
var tipoTempo2 = "mês";
var idadePorMeses = quantidadeTempo + tipoTempo / meses;
console.log(idadePorMeses);
var idadePorMeses2 = meses + tipoTempo2 * quantidadeTempo;
console.log(idadePorMeses2);

//Exemplos do professor

var expressao1 = "teste" / 2;
var expressao2 = "teste" - 2;
console.log(expressao1, expressao2);

//Somar a string '200' com o número 50 e retornar 250

var numeroTeste = "200";
var numeroTeste2 = 50;
var somaTotalNumerosTestes = +numeroTeste + numeroTeste2;
console.log(somaTotalNumerosTestes);

//Incrmente o número 5 e retorne o seu valor incrementado
var numeroComIncremento = 5;
++numeroComIncremento;
// pode ser feito com numeroComIncrento++  tbm ou direto no console.log com o operador de incremento antes do nome da variavel
console.log(numeroComIncremento);

//da minha parte fiz com decremento duas vezes para alterar para o número 4
var numeroDecremento = 5;
--numeroDecremento;
console.log(numeroDecremento);
//Como dividir o peso por 2 ?

/* 
var numero = '80';
var unidade = 'Kg';
var peso = numero + unidade; // 80kg
var pesoPorDois = peso / 2; //NaN (Not a Number)
*/

var numero = "80";
var unidade = "Kg";
var peso = numero + unidade;
console.log(peso);
var pesoPorDois = +numero / 2 + unidade;
console.log(pesoPorDois);

// no  exemplo do professor ele dividiu diretamente na declaração da variavel e não apresentou os dois modelos como eu fiz.
