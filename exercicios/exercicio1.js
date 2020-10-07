console.log("-------ex1-------");
console.log("1. Liste números de 0 a 10 no console");

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

//ou

for (numero of numeros) {
  console.log(numero);
}
