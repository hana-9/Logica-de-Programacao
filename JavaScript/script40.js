/*L05C
c) Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).

1 - Declarar a variável contador e a váriavel somadora que acumula os números anteriores
2 - Fazer o laço de repetição for fazer a repetição até que o contador chegue no 100
3 - Dentro do laço, fazer a somatória receber somadora mais o contador
4 - Colocar console.log para ir vendo o valor do contador e do lado a soma obtida

*/

alert("Programa Soma de 1 a 100")
let contador, somadora
somadora = 0
for (contador = 1; contador < 101; contador++) {
    somadora = somadora + contador
    console.log(`O número está em ${contador} e a soma está em ${somadora}`)
}
alert(`A soma total é: ${somadora}`)
