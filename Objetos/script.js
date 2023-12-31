// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
// Crie um método no objeto anterior, que mostre o seu nome completo
var pessoa = {
  nome: "Eder",
  sobreNome: "Amadeu",
  idade: 34,
  anoNascimento: 1988,
  mesNascimento: "Junho",
  cidadeNascimento: "Suzano",
  estadoNascimento: "SP",

  nomeCompleto: function () {
    return `${this.nome} ${this.sobreNome}`;
  },
};

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: "labrador",
  corCachorro: "preto",
  idadeCachorro: 10,
  latir: function (pessoa) {
    if (pessoa === "homem") {
      return "latir";
    } else {
      return "nada";
    }
  },
};
