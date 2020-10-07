const notas = [5, 4, 3, 0, 10]

const soma = notas.reduce( (accumulator, currentValue) => accumulator + currentValue )

console.log(soma)