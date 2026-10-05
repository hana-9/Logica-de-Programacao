/*L05D
d) Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de
1 até 500.


1 - declarar a váriavel contador e somatorio
2 - utilizar o laço de repetição for para repetir a execução dos números pares com o contador 1 até o contador 501
3 - utilizar a estrutura de condição if para descobrir os números pares dentro dessa sequência
4 - mostrar a resposta da soma junto do valor do contador por linha
*/

alert("Programa Somatório de 1 a 500")
let contador, somatorio
somatorio = 0
for (contador = 1; contador < 501; contador++) {
    if (contador % 2 == 0) {
        somatorio = somatorio + contador
        console.log(`O contador está em ${contador} e a soma dos pares está em ${somatorio}`)
    }
    else {
        console.log(`O contador está em ${contador}`)
    }

}
alert(`O resultado total da soma dos números pares entre 1 e 500 é: ${somatorio}`)

