const notas = [5, 4, 3, 0, 10]

// Some uma lista de notas de escola

const somarNotas = notas.reduce((acumulador, itemAtual) => acumulador + itemAtual)

console.log('As notas somadas são: ', somarNotas) 