console.log("-------ex6-------");
console.log("Some o total dos valores de itens de uma lista de mercado. Bônus: arredonde o valor para até 2 casas decimais!");


const listaDeMercado = [
  {
    nome: 'Maçã',
    comprado: true,
    valor: 4.64
  },
  {
    nome: 'Chamyto',
    comprado: false,
    valor: 6.99
  },
  {
    nome: 'Nutella',
    comprado: false,
    valor: 23.90
  },
  {
    nome: 'Sorvete',
    comprado: true,
    valor: 12.99
  },
  {
    nome: 'Suco',
    comprado: false,
    valor: 6.99
  }
]


const valores = listaDeMercado.map(item => item.valor)
console.log(valores)


const total = valores.reduce((acumulador, itemAtual) => acumulador + itemAtual)

console.log('O valor total da compra é R$: ', total.toFixed(2)) 

