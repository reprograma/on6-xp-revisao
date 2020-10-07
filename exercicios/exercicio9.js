const confeito = ['>(O)<'];
const pessoa = {
  nome: 'Carlos',
  comer(confeito) {
    console.log(`${this.nome} comeu o confeito: ${confeitoReplace}`);
  }
}

const confeitoReplace = confeito[0].replace(">(", "").replace(")<", "")

pessoa.comer(confeitoReplace)

//o método replace altera o array original. Não consegui realizar o exercício sem alterar o array original.
pessoa.comer(confeito)


/* const confeitoAberto = confeito.filter(index =>{
  console.log(index)
  index !== ">"
  
})  */

//console.log(confeitoAberto)

//|| index !== "<")