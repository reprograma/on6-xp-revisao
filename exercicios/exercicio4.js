console.log("-------ex4-------");

console.log("Filtre os itens já comprados de uma lista de mercado e retorne a lista atualizada");

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

const filtrado = listaDeMercado.filter(function(obj) { return obj.comprado == true });

console.log(filtrado);

const atualizada = listaDeMercado.filter(function(obj) { return obj.comprado == false });

console.log(atualizada);
