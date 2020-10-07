//6. Some o total dos valores de itens de uma lista de mercado. Bônus: arredonde o valor para até 2 casas decimais!

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

// const listaValores = listaDeMercado.map(lista => {   // tinha oensando em fazer um novo array com os preços
//   const valores = {
//       preco:lista.valor   
//   }
//   return valores
// })

// console.log(listaValores)


// const somaValores = listaValores.reduce(
//   (acumulador, valor) => acumulador + valor.preco, 0
// );
// console.log(somaValores);


// normal
// const somaValores = listaDeMercado.reduce(function(acumulador, preco) {
//   return acumulador + preco.valor;
// }, 0)
// console.log(resultado);

// Em ES6
const somaValores = listaDeMercado.reduce(
  (acumulador, preco) => acumulador + preco.valor, 0
);
console.log(somaValores.toFixed(2));



