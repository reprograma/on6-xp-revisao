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

let num = 0 

while (num <= 10) {
  console.log(num++)
}