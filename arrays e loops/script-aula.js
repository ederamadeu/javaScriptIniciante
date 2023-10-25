// primeiro array

var videoGames = ["Switch", "Ps5", "Xbox"];

console.log(videoGames[0]);
console.log(videoGames[1]);
console.log(videoGames[2]);

var ultimoItem = videoGames.pop();

videoGames.push("ps4");

console.table(videoGames);

//Loops (for)

for (var numero = 0; numero < 4; numero++) {
  console.log(numero);
}

//While Loop´

var i = 0;
while (i < 4) {
  console.log(i);
  i++;
}

// Arrays e Loops

var videoGames2 = ["Switch", "Ps5", "Xbox", "3DS"];
for (var i = 0; i < videoGames2.length; i++) {
  console.log(videoGames2[i]);
}

var videoGames3 = ["Switch", "Ps5", "Xbox", "3DS"];
for (var i = 0; i < videoGames3.length; i++) {
  console.log(videoGames3[i]);
  if (videoGames3[i] === "Ps5") {
    break;
  }
}

//forEach
var videoGames4 = ["Switch", "Ps5", "Xbox", "3DS"];
videoGames4.forEach(function (item) {
  console.log(item);
});

var frutas = ["Pera", "Banana", "Maça", "Abacaxi", "Uva"];
frutas.forEach(function (fruta) {
  console.log(fruta);
});

frutas.forEach(function (fruta, index) {
  console.log(fruta, index);
});

frutas.forEach(function (fruta, index, frutas) {
  console.log(fruta, index, frutas);
});

frutas.forEach(function (fruta, index, frutas) {
  frutas.pop();
  console.log(fruta, index, frutas);
});
