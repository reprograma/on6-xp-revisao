console.log("-------ex5-------");
console.log("Some uma lista de notas de escola");
const notas = [5, 4, 3, 0, 10];

const somaDasNotas = notas.reduce((acumulador, item) => {
  return acumulador + item;
}, 0);

console.log(`O resultado da soma das notas é ${somaDasNotas}`);
