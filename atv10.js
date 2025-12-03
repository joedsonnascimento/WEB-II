const prompt = require('prompt-sync')();

let segundos = Number(prompt("Digite os segundos: "));

const horas = Math.floor(segundos / 3600);
segundos %= 3600;

const minutos = Math.floor(segundos / 60);
segundos %= 60;

console.log(`${horas}h ${minutos}m ${segundos}s`);
