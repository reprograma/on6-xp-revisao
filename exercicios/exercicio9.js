console.log("-------ex9-------");
console.log(
  "Uma pessoa é representada pelo objeto `pessoa`. Essa pessoa tem a habilidade de comer. A string `>(O)<` representa uma bala. Faça com que essa pessoa consiga comer essa bala, mas pra isso, você vai precisar tirá-la da embalagem.O resultado esperado deve ser: `A NomeDaPessoa comeu a bala: O`"
);

const confeito = [">(O)<"];

const desembalarBalaUmlado = confeito.splice(0, 1, ")<")

const desembalarBalaOtoLado = confeito.splice(0, 1, ">(")

const balaDesenbalada = confeito.splice(0, 1, "O")

console.log(confeito);

const pessoa = {
  nome: "Carlos",

  comer() {
    console.log(`${this.nome} comeu a bala: ${confeito}`);
  },

};

pessoa.comer()

