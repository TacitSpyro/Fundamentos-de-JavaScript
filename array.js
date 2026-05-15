const prompt = require("prompt-sync")();

let nomes = [];

for(let i = 0; i < 3; i++){
    let nome = prompt("Digite um nome: ");

    nomes.push(nome);
}

console.log("Nomes cadastrados: ");

for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
}