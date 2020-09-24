let numero = window.prompt("informe um numero:");
numero = parseInt(numero);

//resto da divisão//

document.write('<p>0 resto da divisão é igual a:' + restodivisao + '<p>');


//incremento e decremento(sempre de 1 em 1)
/*
numero++;
document.write('<h1> valor do numero:' + numero + '<h1>');
++numero;
document.write('<h1> valor do numero:' + numero + '<h1>');
--numero;
numero--;
document.write('<h1> valor do numero:' + numero + '<h1>');*/

let restodivisao = numero % 2;

if (restodivisao ===0){
    document.write('<h1>PAR<h1');
}else{
    document.write('<h1>IMPAR<h1>');
}