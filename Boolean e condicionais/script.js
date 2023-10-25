// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var idadePropria = 30;
var idadeIrma = 31;
var idadeIrmao = 30;

if (idadePropria > idadeIrma) {
  console.log("Eu sou maior que minha irmã");
} else if (idadePropria < idadeIrma) {
  console.log("Eu sou o irmão mais novo");
}

if (idadePropria < idadeIrmao) {
  console.log("Eliel é velho");
} else if (idadePropria === idadeIrmao) {
  console.log("temos a mesma idade e somos gêmeos");
} else {
  console.log("Eu sou o irmão mais velho");
}
// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
//O valor será 3 porque o operador && retorna o ultimo verdadeiro ou primeiro valor falso- se eu preencher a string ele da um retorno de false
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre";
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(
  !!nome,
  !!idade,
  !!possuiDoutorado,
  !!empregoFuturo,
  !!dinheiroNaConta
);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log("Brasil tem mais habitantes");
} else {
  console.log("China maior do que o Brasil");
}

// O que irá aparecer no console?
//vai dar falso porque esse operador trás o ultimo verdadeiro ou o primeiro falso
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// O que irá aparecer no console?

//segunda vai sair cão, na primeira condição do IF as duas expressões retornam o valor de falso, mas no console.log ele compara de novo e o operador usado trás o ultimo falso ou primeiro verdadeiro, nesse caso trás o Cão
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
