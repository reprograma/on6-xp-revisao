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

//console.log(listaDeMercado[0]["comprado"])




/* const listaFiltrada = listaDeMercado.filter((i) =>  (listaDeMercado[i].comprado) == true)
console.log(listaFiltrada) */

/* const listaFiltrada = listaDeMercado.filter(function(i){listaDeMercado[i]["comprado"] == true})
console.log(listaFiltrada)  */

let novaLista = []

for(i = 0; i < listaDeMercado.length; i++){
  const lista = listaDeMercado[i].comprado
  if (lista === true){
    //console.log(listaDeMercado[i])
    novaLista.push(listaDeMercado[i])
  } 
}

console.log(novaLista)



/* function filterByComprado(obj){
  if ('comprado' in obj === true){
    return t
  } else {
    return 'não'
  }
}

console.log(filterByComprado()) */

/* const arrById = listaDeMercado.filter(filterByComprado)

console.log(arrById) */
/* 
const listaFiltrada = listaDeMercado.map(function (item) {
  const lista = listaDeMercado[item]["comprado"]
  if (lista === true) {
    return lista
  }
})

console.log(listaFiltrada) */
