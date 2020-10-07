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

//Some o total dos valores de itens de uma lista de mercado. Bônus: arredonde o valor para até 2 casas decimais!


//primeiro usei o map para criar um array só com os valores
const valores = listaDeMercado.map(item => item.valor)
console.log(valores)

//agora o reduce para o cálculo.
const valoresSomados = valores.reduce((acumulador, itemAtual) => acumulador + itemAtual)

console.log('O valor total da compra é R$: ', valoresSomados.toFixed(2)) 







