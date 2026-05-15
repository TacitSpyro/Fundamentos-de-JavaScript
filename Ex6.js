const prompt = require("prompt-sync")();

let valor = 0

for (let i = 1; i <= 100; i++){

    console.log(valor)

    valor = valor + i
}

console.log("Resultado Final: " + valor)
