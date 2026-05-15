const prompt = require("prompt-sync")();

let nomes = [];

for(let i = 0; i <= 2; i++){

    let nome = prompt("Insira um Nome: ");

    nomes.push(nome);
}

console.log(nomes)