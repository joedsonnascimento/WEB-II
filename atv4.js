const prompt = require('prompt-sync')();

const n = Number(prompt("Digite um número: "));
let fat = 1;

for (let i = n; i > 1; i--) {
    fat *= i;
}

console.log(`Fatorial de ${n} é ${fat}`);
