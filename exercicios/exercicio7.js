const valores = [2, 34, 56, 3, 9, 6, 55, 106];

//Some somente os valores ímpares de uma lista

const valoresImpares = valores.filter(valor => {
    if (valor % 2 != 0) {
        return valor
    }
})

console.log(valoresImpares)


const soma = valoresImpares.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
})

console.log(soma)