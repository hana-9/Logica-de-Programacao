/*67) Faça um algoritmo que calcule e escreva a média aritmética dos 
números inteiros entre 15
(inclusive) e 100 (inclusive).

1 - Fazer um loop que conte do 15 até o 100 incluindo-os
2 - Durante esse loop, fazer a soma dos números durante o processo
3 - Descobrir a quantidade de números sendo somados com incremento
4 - Calcular a média com a soma e a quantidade de números incrementados
5 - Mostrar o resultado.
*/

alert("Programa media15A100")

let contador, soma, vezes, media
contador = 15
soma = 0
vezes = 0


while (contador < 101) {
    console.log(`Valor do contador: ${contador}`)
    soma = soma + contador
    contador = contador + 1
    vezes = vezes + 1
}

media = soma / vezes
console.log(`O valor do somatório é: ${soma}, a quantidade de números é ${vezes} e a média é ${media.toFixed(2,2)}`)
