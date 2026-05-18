const prompt = require("prompt-sync")();

let VI = Number(prompt("Insira o valor inicial: "))

let R = Number(prompt("Insira a porcentagem de crescimento por etapas: "))

let VF = Number(prompt("Insira o valor final desejado: "))

if (VI != 0 && R != 0 && VF != 0){
    let log1 = Math.log10(VI / VF) / Math.log10(1 + R)
    let log2 = log1 * (-1)
    console.log(`Serão necessarias ${log2} etapas para atingir o valor final`)
}
else{
    console.log("Os valores não podem ser iguais a zero")
}