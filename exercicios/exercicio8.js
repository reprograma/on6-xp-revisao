// 8. Filtre uma lista de nomes e retorne somente os que começam com a letra 'A'

const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda'];

const nomesA = nomes.filter(nome => nome.indexOf('A') > -1)
console.log(nomesA) 


/*
// essa opção não deu certo :( 
const nomesA = []  // cria um novo array
const elemento = 'A'  // elemeto de diferenciação
const procura = nomes.indexOf(elemento) > - 1 // procura o nomes com A no início
nomesA.push(procura);
console.log(nomesA)

*/