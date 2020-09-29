/*
    1 - Escreva uma função que calcule o valor da média de 3 números.
    2 - Escreva uma função que calcule a área de um retângulo (base X altura)
    3 - Escreva uma função que calcule a área de um triângulo (base x altura / 2)
    4 - Escreva um método que escreva uma mensagem na tela 100 vezes
    5 - Escreva um método para a impressão de mensagens
        este método deve receber como parâmetros uma mensagem
        e o número de vezes que a mensagem deve aparecer.

    OBS:    Todas as funcões e métodos devem ser chamadas para testes
            Enviar até no máximo segunda (28/09) 12:00
            diego.cugiki@hotmail.com
 */
function calcularmedia(num1, num2, num3){
    return (num1+num2+num3)/3;
}

function calcularareaderetangulo(base,altura){
    return base * altura;
}

function calcularareadetriangulo(base,altura){
    return (base * altura) / 2;
}

function escrevernatela100vezes(mensagem){
    let contador =1
    while(contador<=100){
        document.write ('<h3>' +mensagem+ '</h3>');
        contador++;
    }   
}


function escrevernatelavezes(mensagem,quantidade){
    let contador =1
    while(contador<=quantidade){
        document.write ('<h3>' +mensagem+ '</h3>');
        contador++;
    }   
}