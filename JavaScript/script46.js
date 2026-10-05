/*L05I
i) Escreva um programa que apresente a série de Fibonacci até o décimo quinto termo. A série de
Fibonacci é formada pela seqüência: 1, 1, 2, 3, 5, 8, 13, 21, 34, ..., etc. Esta série se caracteriza
pela soma de um termo atual com o seu anterior subseqüente, para que seja formado o próximo
valor da seqüência. Portanto começando com os números 1, 1 o próximo termo é 1+1=2, o próximo
é 1+2=3, o próximo é 2+3=5, o próximo 3+5=8, etc.

1 - declarar as variáveis contador, sequencia e atual e antecessor
2 - criar laço de repetição for com o contador valendo 0 na sequencia e o atual valer 1
3 - o antecessor receberá o valor do atual
4- o atual deve receber o valor da sequencia
5- colocar o resultado para ir mostrando a cada linha
*/
alert("Programa Sequência de Fibonacci")

let antecessor = 0
let atual = 1
let sequencia = 0
for (let contador = 0; contador < 15; contador++) {
    console.log(`A sequência de Fibonacci é: ${sequencia}`)
    sequencia = atual + antecessor
    antecessor = atual
    atual = sequencia    
}