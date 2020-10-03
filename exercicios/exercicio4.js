const listaDeMercado = [
  {
    nome: 'Maçã',
    comprado: true
  },
  {
    nome: 'Chamyto',
    comprado: false
  },
  {
    nome: 'Nutella',
    comprado: false
  },
  {
    nome: 'Sorvete',
    comprado: true
  },
  {
    nome: 'Suco',
    comprado: false
  }
]


//Filtre os itens já comprados de uma lista de mercado e retorne a lista atualizada

const novaLista = listaDeMercado.filter(item => item.comprado == false)
  console.log('Essa é a nova lista de compras: ', novaLista) 
  
