const prompt = require('prompt-sync')();

const num = Number(prompt("Digite um número: "));

if (num > 0) console.log("Positivo");
else if (num < 0) console.log("Negativo");
else console.log("Zero");
