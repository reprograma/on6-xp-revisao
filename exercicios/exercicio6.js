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

/* for(i = 0; i < listaDeMercado.length; i++){
  const valor = listaDeMercado[i]["valor"]
  console.log(valor)
} */

const soma = listaDeMercado.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.valor;
}, 0)

console.log(`O valor toral da lista é R$ ${soma.toFixed(2)}`)