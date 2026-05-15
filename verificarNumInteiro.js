const prompt = require("prompt-sync")();

let numero = Number(prompt("Insira um Numero Inteiro"))

if(numero == 0){
    console.log("Seu Numero é igual a zero")
}else if(numero < 0){
    console.log("Seu Numero é Negativo")
}
else if(numero > 0){
    console.log("Seu Numero é positivo")
}
