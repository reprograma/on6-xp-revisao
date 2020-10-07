// 2. Liste a tabuada do 6 (do 1 ao 10)

//op1

console.log("Tabuada do numero 6");
console.log("6 x 0 = " + (6*0)); // aqui teve uma cancatenação de texto com número
console.log("6 x 1 = " + (6*1)); 
console.log("6 x 2 = " + (6*2)); 
console.log("6 x 3 = " + (6*3)); 
console.log("6 x 4 = " + (6*4)); 
console.log("6 x 5 = " + (6*5)); 
console.log("6 x 6 = " + (6*6)); 
console.log("6 x 7 = " + (6*7)); 
console.log("6 x 8 = " + (6*8)); 
console.log("6 x 9 = " + (6*9)); 
console.log("6 x 10 = " + (6*10)); 


// op2 

const multiplicando = 6

console.log(`\nTabuada do ${multiplicando}:\n`)


for(multiplicador = 0; multiplicador <= 10; multiplicador++) {
    console.log(`${multiplicando} * ${multiplicador} = ${multiplicador * multiplicando}`)
}

//op3

var readlineSync = require("readline-sync");
console.log("tabuada")
var n = parseFloat(readlineSync.question("Informe um numero para a tabuada: "));

console.log(n + " x 0 = " + (n*0));
console.log(n + " x 1 = " + (n*1));
console.log(n + " x 2 = " + (n*2));
console.log(n + " x 3 = " + (n*3));
console.log(n + " x 4 = " + (n*4));
console.log(n + " x 5 = " + (n*5));
console.log(n + " x 6 = " + (n*6));
console.log(n + " x 7 = " + (n*7));
console.log(n + " x 8 = " + (n*8));
console.log(n + " x 9 = " + (n*9));
console.log(n + " x 10 = " + (n*10));