const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda'];


/* function filterItems(query) {
    return nomes.filter(function(el) {
        return el.indexOf(query) > -1;
    })
  }
  
  console.log(filterItems('A')); */

  // Filtre uma lista de nomes e retorne somente os que começam com a letra 'A'

const nomesInitialA = nomes.filter(nome => nome.indexOf('A') > -1)

console.log(nomesInitialA)


/* const teste = nomes.indexOf('A') > -1
console.log(teste)

console.log(nomes) */
