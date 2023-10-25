var idade = 23;
console.log(idade);
//quando é numero o navegador pinta identificando que é um búmero

var idadeDecimal = 2e2;
console.log(idadeDecimal);
//tem precisão de até 15 zeros depois do número indicado

var total = 10 + 5 + 10;
var divisao = 200 / 5;
var modulo = 3272983892 % 3;

console.log(total);
console.log(divisao);
console.log(modulo);

//não esquecer que toda vez que vc usar o operar + numa estring com numero ou qualquer coisa vira string

var soma1 = 10 + 10 + 20 + (30 * 4) / 2 + 10;
console.log(soma1);
//funciona igual matemática básica (expressão numérica)

//operadores unários
//incremento ++
var incremento = 5;
console.log(incremento++);
console.log(incremento);
//incrimento só funciona depois de chamar a função e só funciona para variáveis e nunca para constantes.

//decremento é a operação inversa
console.log(incremento--);
console.log(incremento);
