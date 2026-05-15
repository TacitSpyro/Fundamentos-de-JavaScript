const prompt = require("prompt-sync")();

let nota = Number(prompt("Insira uma Nota "))

if(nota >= 7){
    console.log(" Você foi aprovado");
}
else{
    console.log(" Você Foi Reprovado")
}
