const prompt = require("prompt-sync")();

let idade = Number(prompt("Digite sua idade:"));

let nome = prompt("Digite seu nome:");

if(idade >= 18){
    console.log(nome + " você é maior de idade.");
}

else{
    console.log(nome + " você é menor de idade.");
}
