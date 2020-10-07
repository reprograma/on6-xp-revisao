// Vamos criar um jogo que adivinha um número! O jogo irá gerar um número randômico, que ninguém sabe, somente a máquina.
// Com o número secreto gerado, o jogo irá perguntar ao jogador: Que número estou pensando? Se o jogador acertar, então a máquina diz: Parabéns, você acertou! Mas se o jogador errar, a máquina precisa dizer se o número digitado é maior ou menor que o número secreto.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numeroAleatorio = Math.floor(Math.random() * 1000);

const perguntarNumero = function () {
  rl.question("Qual o número mágico? \n", function (resposta) {
    let estaCorreta = false;
    const numero = parseInt(resposta);
    // Aqui você coloca a lógica para verificar se a resposta é correta ou não.
    if (numeroAleatorio > numero) {
      console.log("Um pouco mais");
    } else if (numeroAleatorio < numero) {
      console.log("Um pouco menos");
    } else if (numeroAleatorio == numero) {
      estaCorreta = true;
      console.log("Parabéns, você acertou!");
    } else {
      console.log("Tente de novo");
      // Se não estiver correta, pergunta de novo!
    }
    if (!estaCorreta) {
      perguntarNumero();
    }
  });
};
perguntarNumero();


//Nota de dificuldade: fiquei usando o do while e travando meu VS eternamente até entender que o createInterface já fazia isso! rss 