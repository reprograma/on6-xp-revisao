//Filtre uma lista de nomes e retorne somente os que começam com a letra 'A'

const nomes = ['Pedro', 'Aurora', 'Anne', 'Rafa', 'Helena', 'Arthur','Murilo', 'Alice'];

//função com parâmetros, o indexof retorna uma substring (no caso A)
//que por padrão é zero, por isso o -1
const filterNames = (query) => {
    return nomes.filter(el => el.indexOf(query) > -1)
}

console.log(filterNames('A'))
