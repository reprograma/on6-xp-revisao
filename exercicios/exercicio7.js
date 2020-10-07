// 7. Some somente os valores ímpares de uma lista

const valores = [2, 34, 56, 3, 9, 6, 55, 106];



const numImpar = valores.filter(valor => {
    if (valor % 2 != 0) {
        return valor
    }
})

console.log(numImpar)


const soma =numImpar.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
})

console.log(soma)   