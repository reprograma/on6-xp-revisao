/* class Animal {
  constructor(pelagem, altura) {
    this.pelagem = pelagem
    this.altura = altura
  }

  correr(nome) {
    console.log(`${nome} está correndo!`)
  }
}

class Cachorro extends Animal {
  constructor(nome) {
    super('caramelo', '50cm')
    this.nome = nome;
  }

  latir() {
    console.log(`O cahorro ${this.nome} está latindo`)
  }
}

const cachorro = new Cachorro('Carlos')
cachorro.latir()
console.log(cachorro.pelagem) */


const num = 0

for(let i = 0; i <= 10; i++){
  console.log(num + i)
}

/* resultado impresso no console
0
1
2
3
4
5
6
7
8
9
10 */