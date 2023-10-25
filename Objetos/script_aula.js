/*Criando o primeiro objeto*/
//variáveis dentro de um objeto  são conhecidas como propriedades

//funções dentro de objetos são conhecidos como métodos
var pessoa = {
  nome: "Eder",
  idade: 28,
};

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    //propriedade THIS faz referencia ao proprio objeto. É util para acessar propriedades do proprio objeto nos métodos conformee a seguir.
    return this.lados * lado;
  },
};

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));
