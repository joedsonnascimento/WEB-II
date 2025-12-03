const prompt = require('prompt-sync')();

const n1 = Number(prompt("Nota 1: "));
const n2 = Number(prompt("Nota 2: "));
const n3 = Number(prompt("Nota 3: "));

const media = (n1*2 + n2*3 + n3*5) / 10;

console.log("Média Ponderada:", media);
