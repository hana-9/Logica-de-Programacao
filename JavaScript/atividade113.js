/*Desenvolver um programa que efetue a leitura de dez elementos 
de uma matriz A tipo vetor. Construir uma
matriz B de mesmo tipo, observando a seguinte lei de formação: se o valor 
do índice for par, o valor deverá
ser multiplicado por 5, sendo ímpar, deverá ser somando com 5. Ao final 
mostrar o conteúdo da matriz B.*/

alert("Programa Matriz_A_e_B_com_5")

let numeroLido, vetorA, vetorB, contador
contador = 0
vetorA = []
vetorB = []


while (contador < 10) {

    numeroLido = parseInt(prompt("Digite um número"))
    vetorA.push(numeroLido)

    if (contador % 2 == 0) {
        vetorB.push(vetorA[contador] * 5)

    }
    else {
        vetorB.push(vetorA[contador] + 5)
    }
    console.log(`O elemento do vetor A é ${vetorA[contador]}`)
    contador++
}
console.log(`Os elementos do vetor B é ${vetorB}`)


