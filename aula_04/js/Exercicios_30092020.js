/*
    1) Escreva um script que solicite uma frase ao usuário e em seguida 
    apresente a frase digitada separada em duas partes.

    Dicas:
    utilizar matematica (dividir por 2)

    Eu sou o Diego
    Eu sou 
    o Diego
*/
let frase = window.prompt(' digite uma frase ');

let tamanhodafrase = frase.length;

let metadedafrase = tamanhodafrase/2;


document.write(`<p> ${frase.substring (0,metadedafrase)} </p>`);
document.write(`<p> ${frase.substring (metadedafrase)} </p>`);


/*
    2) Escreva um script que solicite uma frase para o usuário 
    e em seguida escreva a frase invertida.

    Exemplo:
    Aula de lógica na quarta feira
    arief atrauq an acigól ed aluA
*/

let frase= window.prompt('digite uma frase')

let tamanhodafrase = frase.length;

let fraseAoContrario="";

for (let index = tamanhodafrase; index >= 0 ; index--) {
    fraseAoContrario += frase.charAt(index);
    
}
document.write(`<p>${fraseAoContrario} </p>`)                       