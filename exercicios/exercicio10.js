//Crie uma classe que descreva uma Impressora. Esse objeto deve receber os atributos que você julgar necessário uma impressora ter, e como métodos, ela deve ter a capacidade de imprimir em A4, A3, com as opções de preto & branco e colorido. As ações da impressora devem ser apresentadas no console. Ex.: A impressora está imprimindo... A impressora terminou a impressão colorida em A3.

class Printer {
    constructor(archiveName, pages = 0, color, scan = false){
    this.archiveName = archiveName
    this.page = pages
    this.color = color
    this.scan = scan
    }
}


//não consegui continuar o exercício :/