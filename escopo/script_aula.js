//variaveis declaradas dentro de funções não podem ser acessadas fora delas conforme exemplo a seguir

function mostrarCarro() {
  var carro = "fusca";

  console.log(carro);
}

mostrarCarro();
//console.log(carro); //Erro, carro is not defined

// se eu colocar carro do lado de fora, sim, ai funciona.

var carroDois = "chevete";
function mostrarCarro2() {
  console.log(carroDois);
}
mostrarCarro2();

//Isso existe para vc evitar conflito de nomes de variaveis no site (principal função)
