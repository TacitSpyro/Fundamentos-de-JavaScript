const prompt = require("prompt-sync")();

numeros = [];

for(let i = 1; i <= 5; i++){
    let numero = prompt("Insira um numero: ");

    numeros.push(numero);
}

console.log(Math.max(...numeros));
