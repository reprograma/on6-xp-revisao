//5.Some uma lista de notas de escola

const notas = [5, 4, 3, 0, 10]

const reducer = (acumulator , currentValue) => acumulator + currentValue

console.log(notas.reduce(reducer))


//op2 

const SomaNotas = function(acumulador,currentValue) {
    return acumulador + currentValue
}
console.log(notas.reduce(SomaNotas))


