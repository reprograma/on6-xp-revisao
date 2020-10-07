// Some uma lista de notas de escola
const notas = [5, 4, 3, 0, 10]


//o primeiro acumulador, item atual é da função - o segundo (par de acumulador e item atual)
//é do return

const somarNotas = notas.reduce((acumulador, itemAtual) => acumulador + itemAtual)

console.log('As notas somadas são: ', somarNotas) 