/* converter string em numero inteiro*/
let.numero= window.prompt('informe um numero ');
numero=parseInt (numero);
let.numeroMais20= numero + 20;

document.write('<h1>' + numeroMais20 + '<h1>');

 /*converter string em um */
let valor = window.prompt('informe o valor de um produto');
valor= parseFloat(valor);
let valorMais20 = valor + 20;
document.write('<h1>' + valorMais20.tofixed(2) + '</h1>'); 

let valor = window.prompt('informe o valor de um produto');
valor = parseFloat(valor)

let desconto = window.prompt('informe um valor % de desconto (0-100');
desconto = parseFloat(desconto);

let valordesconto = valor - (valor * desconto / 100);

document.write( '<h1>' + valor.toFixed(2) + '<h1');