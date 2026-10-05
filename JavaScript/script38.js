/*L05A
Apresentar os quadrados dos números inteiros de 15 a 200

1 - Fazer o contador valer 15 e o limite no for ser 201
2 - Fazer o cálculo do quadrado desses números (contador) que é esses números vezes eles mesmos
3 - Mostrar o resultado 

*/
alert("Programa Quadrado dos Números de 15 a 200")
let contador, quadrado
for (contador = 15; contador < 201; contador++) {
    quadrado = contador * contador
    console.log(`O número é; ${contador} e o seu quadrado é: ${quadrado}`)
}
alert(`O número final, 200, possui o quadrado no valor de: ${quadrado}`)