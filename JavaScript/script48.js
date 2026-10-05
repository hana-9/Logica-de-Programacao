/*L05K
k) Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares
situados na faixa numérica de 1 a 10.

1- declarar as variáveis contador, valorFatorial
2 - criar o laço for, com contador valendo 1 e com limite até o 10
3- fazer valorFatorial = valorFatorial * contador
4 - usar o if para imprimir apenas os números ímpares: contador%2!=0, 9x7x5x3x1 = 9
*/

alert("Programa Fatorial Números Ímpares")

let contador, valorFatorial
valorFatorial = 1

for (contador = 1; contador < 10; contador++) {
    if (contador % 2 != 0) {
        valorFatorial = parseFloat(valorFatorial*contador)
        console.log(`O valor fatorial dos números ímpares é: ${valorFatorial}`)
    }
 

}


