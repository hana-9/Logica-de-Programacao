/*Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de
10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O
programa deve apresentar os valores das duas temperaturas. A fórmula de conversão
é
5
9 +160
=
C
F , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.

1 - declarar as variáveis contador, Celsius e Fahrenheit
2 - fazer o laço de repetição for ter o contador no valor de 10 e ter o incremento de 10
3 - fazer Fahrenheit recerber o valor do Celsius vezes 9 mais 160 dividido por 5
4 - mostrar o resultado linha por linha até chegar nos 100 graus Celsius.
*/

alert("Programa de 10 a 100 graus Celsius")
let celsius, farenheit

    for (celsius= 10; celsius < 101; celsius= celsius + 10){
        farenheit = [(celsius*9)+160]/5
        console.log(`Graus Celsius: ${celsius} para Farenheit: ${farenheit} `)
    }
