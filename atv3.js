const prompt = require('prompt-sync')();

const c = Number(prompt("Temperatura em °C: "));
const f = (9/5) * c + 32;

console.log(`Fahrenheit: ${f}`);
