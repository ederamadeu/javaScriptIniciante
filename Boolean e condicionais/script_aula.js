var possuiGraudacao = false;
var possuiDoutorado = true;

if (possuiGraudacao) {
  console.log("É verdadeiro");
} else if (possuiDoutorado) {
  console.log("Possui Doutorado");
} else {
  console.log("Falso");
}
// segundo exemplo

var nome = "";

if (nome) {
  console.log(nome);
} else {
  console.log("Nome não existe");
}

if (5 - 5 && 5 + 5) {
  console.log("verdadeiro");
} else {
  console.log("falso");
}

var condicional2 = 5 - 5 || (5 + 5 && 10 - 2);
console.log(condicional2);

// swicth - abreviação e/ ou atalho para IF
var corFavorita = "preto";
switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o céu");
    break;
  case "Amarelo":
    console.log("Olhe para o sol");
    break;
  case "Verde":
    console.log("Olhe para a floresta");
    break;
  default:
    console.log("Feche os olhos");
}
