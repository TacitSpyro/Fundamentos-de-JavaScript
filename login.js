const prompt = require("prompt-sync")();

logon = ["admin",1234];

let nomeU = prompt("Insira seu nome de usuario ")

let senha = Number(prompt("Insira Sua senha "))

if (logon.includes(nomeU) && logon.includes(senha)){
    console.log("Login Realizado com sucesso");
}
else{
    console.log("Nome de Usuario ou senha incorretos");
}