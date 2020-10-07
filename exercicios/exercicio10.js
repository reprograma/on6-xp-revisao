console.log("-------ex10-------");
console.log(
  "Crie uma classe que descreva uma Impressora. Esse objeto deve receber os atributos que você julgar necessário uma impressora ter, e como métodos, ela deve ter a capacidade de imprimir em A4, A3, com as opções de preto & branco e colorido. As ações da impressora devem ser apresentadas no console. Ex.: A impressora está imprimindo... A impressora terminou a impressão colorida em A3."
);

class Impressora {
  constructor(modelo, tipoPapel, tipoImpressao){
  this.modelo = modelo
  this.tipoPapel = tipoPapel
  this.tipoImpressao = tipoImpressao
  
  }
  imprimir () {
     console.log(`A impressora ${this.modelo} está imprimindo em folha ${this.tipoPapel} e em ${this.tipoImpressao}.`)
       }
  
}

const hp = new Impressora ("hp", "A4", "cores") 

hp.imprimir ()