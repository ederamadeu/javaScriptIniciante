var numero = 20;
//numero = numero + 10; esse código é igual ao código abaixo.
numero += 10;
console.log(numero);

//Mais exemplos de operadores de atribuições "resumidas"
numero /= 2;
console.log(numero);
numero *= 10;
console.log(numero);

//operador ternário

var idade = 19;
var podeBeber = idade >= 18 ? "Pode beber!" : "Não pode beber";
console.log(podeBeber);

idade = 13;
var podeBeber = idade >= 18 ? "Pode beber!" : "Não pode beber";
console.log(podeBeber);

//Não faz sentido colocar uma expressão que retorne um valor booleano, ou seja, que retorna true ou false... a expressão já retorna essa informação
