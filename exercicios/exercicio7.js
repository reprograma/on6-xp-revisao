//Some somente os valores ímpares de uma lista

const valores = [2, 34, 56, 3, 9, 6, 55, 106]

//função que calcula se é ímpar e guarda numa lista
const Impares = valores.filter(item => item % 2 !== 0)

console.log(Impares) 

//função usa o método reduce que tem acumulador e item atual da função
//acumulador e item atual do return
//somando os valores ímpares da lista impares
const valoresSomados = Impares.reduce((acumulador, itemAtual) => acumulador + itemAtual)

console.log('O valor dos ímpares é: ', valoresSomados) 