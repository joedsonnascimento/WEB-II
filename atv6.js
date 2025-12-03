const prompt = require('prompt-sync')();

const b = Number(prompt("Base: "));
const h = Number(prompt("Altura: "));

const area = b * h;
const perimetro = 2 * (b + h);

console.log("Área:", area);
console.log("Perímetro:", perimetro);
