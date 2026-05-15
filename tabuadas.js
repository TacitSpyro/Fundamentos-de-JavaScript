const prompt = require("prompt-sync")();

let numero = Number(prompt("Insira Um Numero: "));

for (let i = 1; i <= 10; i++){

    let resultado = numero * i

    console.log(`${numero} x ${i} = ${resultado}`)
}