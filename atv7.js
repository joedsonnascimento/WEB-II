const prompt = require('prompt-sync')();

const palavra = prompt("Digite uma palavra: ").toLowerCase();

const vogais = "aeiou";
let count = 0;

for (let letra of palavra) {
    if (vogais.includes(letra)) count++;
}

console.log(`Quantidade de vogais: ${count}`);
