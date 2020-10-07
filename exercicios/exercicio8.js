console.log("-------ex8-------");
console.log(
  "Filtre uma lista de nomes e retorne somente os que começam com a letra 'A'"
);

const nomes = ["Anna", "Andressa", "Luciana", "Bruna", "Amanda"];

const filtrarNomes = nomes.filter(function (item) {
  return item.charAt(0) == "A";
});

console.log(filtrarNomes);
