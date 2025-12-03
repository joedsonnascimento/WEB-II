const prompt = require('prompt-sync')();

const n = Number(prompt("Digite um número: "));

for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) console.log(i);
}
