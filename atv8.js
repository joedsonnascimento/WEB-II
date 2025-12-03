const prompt = require('prompt-sync')();

const n = Number(prompt("Digite N: "));
let soma = 0;

for (let i = 1; i <= n; i++) soma += i;

console.log("Soma:", soma);
