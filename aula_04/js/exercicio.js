/*function escrevernatela100vezes(mensagem) {
    for (let i = 0; i < 100; i++) {
        document.write('<h3>'+ mensagem +'</h3>' );
        
    }
}

escrevernatela100vezes('felipe')*/
/*let mensagem = "olá boa noite!"

document.write('<h3>' + mensagem + '</h3>');

let nome = "diego"
let idade = 33
let email = "diego.cugiki@hotmail.com"

let dados1 ="seu nome" + nome + "sua idade" + idade + "seu email" + email;
let dados = `seu nome ${nome}, sua idade ${idade}, seu email ${email}`;

document.write(dados1 + '<br>');
document.write(dados);*/

/*
function escreverdados(nome, idade, email){
    let dados =`<p>seu nome: ${nome}</p>
                <p> sua idade: ${idade}</P>
                <p> seu email: ${email}</p>
                <p>--------------------</P>`
    
    document.write(dados);            
}
escreverdados ("Diego",33,"@dominio.com");
escreverdados ("Jonatas",31,"@dominio.com");
escreverdados ("Marcela",28,"@dominio.com");
escreverdados ("Alexandre",22,"@dominio.com");
escreverdados ("Mateus",17,"@dominio.com");
escreverdados ("Felipe",16,"@dominio.com");*/

/*let nome = "Diego Cugrki";
//substitui somente o primeiro caracter (escrito de maneira errada)encontrado
document.write(`<h3> ${nome.replace('r', 'i')}-${nome}</h3>`);

let nome = "Diego Cugrki";
//substitui todos os caracteres (escrito de maneira errada) encontrados
document.write(`<h3> ${nome.replace('r', 'i')}-${nome}</h3>`);*/

//concatenação de string
/*
let aluno = "aluno: ";
let nome = "Diego";
let sobrenome = "Cugiki";
document.write(`<h3>${aluno.concat(nome , sobrenome)}</h3>`);*/
/*
function verificaSeExistePalavraNaFrase(frase, palavra){
    let index = frase.indexOf(palavra);
    if(index > -1 ) {
        document.write(`<p> A frase ${frase}'<br> contém ${palavra}</p>`);
        document.write(`<p> E está situada na posição ${index} do index </p>`);

    }else{
        document.write(`<p> A frase ${frase}  NÃO contém </p>`);
    }

}

let frase ='"hoje é segunda feira e tem aula de lógica!"'
let palavra = window.prompt('informe a palavra a ser procurada');

verificaSeExistePalavraNaFrase(frase,palavra)

document.write(`<p> ${frase.substring (0, 21)} </p>`);
document.write(`<p> ${frase.substring (23)} </p>`);*/

//serve para escrever um caractere por linha
//let frase ='"hoje é segunda feira e tem aula de lógica!"'
//for (let index = 0; index < frase.length; index++) {
//    document.write(`<p> ${frase.charAt(index)} </p>`)
//}

let frase = "hoje é segunda feira e tem aula de lógica"

document.write(`<p> ${a frase. toUppercase() }</p>`)
document.write(`<p> ${a frase. tolowercase() }</p>`)


