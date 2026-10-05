/*
Manzano Lista 3, 5.1.1 Exercício G
Escreva um programa que apresente a série de Fibonacci até o décimo quinto termo. A série de
Fibonacci é formada pela seqüência: 1, 1, 2, 3, 5, 8, 13, 21, 34, ..., etc. Esta série se caracteriza
pela soma de um termo atual com o seu anterior subseqüente, para que seja formado o próximo
valor da seqüência. Portanto começando com os números 1, 1 o próximo termo é 1+1=2, o próximo
é 1+2=3, o próximo é 2+3=5, o próximo 3+5=8, etc.
*/

let fibonacci, contador, acumulador

contador = parseInt(0)
acumulador = parseInt(1)
sucessor = parseInt(1)
fibonacci = parseInt(1)

while (contador < 15) {
    alert(`A sequência de Fibonacci: ${fibonacci}`)
    contador++
    fibonacci = acumulador+sucessor
    acumulador = sucessor
    sucessor = fibonacci
    
}
location.reload()