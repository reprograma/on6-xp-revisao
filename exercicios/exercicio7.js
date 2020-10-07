console.log("-------ex7-------");
console.log("Some somente os valores ímpares de uma lista");

const valores = [2, 34, 56, 3, 9, 6, 55, 106];

const impares = (item) => item % 2;

const valoresImpares = valores.filter(impares);

console.log(`Valores ímpares: ${valoresImpares}`);

const totalValores = valoresImpares.reduce((acumulador, impares) => {
  return acumulador + impares;
}, 0);

console.log(`O total dos valores ímpares é: ${totalValores}`);
