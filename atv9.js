const prompt = require('prompt-sync')();

const usuario = prompt("Usuário: ");
const senha = prompt("Senha: ");

if (usuario === "admin" && senha === "1234") {
    console.log("Login realizado com sucesso!");
} else {
    console.log("Usuário ou senha incorretos.");
}
