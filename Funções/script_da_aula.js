function areaQuadrado(lado) {
  return lado * lado;
}
console.log(areaQuadrado(10));

/*-------------------------------*/
function pi() {
  return 3.14;
}
var total = 5 * pi();
console.log(total);

/*------------------------------*/

function IMC(peso, altura) {
  var IMC = peso / (altura * altura);
  return IMC;
}
console.log(IMC(95, 1.76));

/*-----------------------------*/

function corFavorita(cor) {
  if (cor === "azul") {
    return "Eu gosto do céu";
  } else if (cor === "verde") {
    return "Eu gosto de mato";
  } else {
    return "Eu não gosto de cores";
  }
}

console.log(corFavorita("azul"));
console.log(corFavorita("verde"));
console.log(corFavorita("preto"));
/*----------------------------*/

// posso passar um argumento ou uma função dentro da função
/*addEventListener("click", function () {
  console.log("Oi");
});*/
//tbm pode ser feito assim
function mostraConsole() {
  console.log("Oi função executada");
}

addEventListener("click", mostraConsole);

/*---------------------------------*/

function terceiraIdade(idade) {
  if (idade >= 60) {
    console.log("É idoso");
  }
  console.log(idade);
}

terceiraIdade(60);

/* resultado boleano*/

function terceiraIdade2(idade) {
  if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade2(60));
/* verificando o tipo de dado*/

function terceiraIdade3(idade) {
  console.log(typeof idade);
  if (typeof idade !== "number") {
    return "Por favor digite um número";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade3("oi"));

/*--------------Modelo de escopo....*/

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Falta Visitar ${totalPaises - paisesVisitados} paises`;
}

console.log(faltaVisitar(4));
/*------------*/
var profissao = "Designer";

function dados() {
  var nome = "André";
  var idade = 28;
  function outrosDados() {
    var endereco = "Rio de Janeiro";
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
//outrosDados(); // retorna um erro
