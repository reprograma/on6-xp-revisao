const confeito = ['>(O)<'];
const pessoa = {
  nome: 'Carlos',
  comer(confeito) {
    console.log(`${this.nome} comeu o confeito: ${confeitoReplace}`);
  }
}


//Uma pessoa é representada pelo objeto `pessoa`. Essa pessoa tem a habilidade de comer. A string `>(O)<` representa uma bala. Faça com que essa pessoa consiga comer essa bala, mas pra isso, você vai precisar tirá-la da embalagem.

const confeitoReplace = confeito[0].replace(">(", "").replace(")<", "")

pessoa.comer(confeitoReplace)


/* const confeitoAberto = confeito.filter(index =>{
  console.log(index)
  index !== ">"
  
})  */

//console.log(confeitoAberto)

//|| index !== "<")