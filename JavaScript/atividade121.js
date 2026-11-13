/*i) Ler 15 elementos reais para uma matriz A de uma dimensão do tipo vetor.
 Construir uma matriz B de mesmo tipo e dimensão, observando a seguinte lei 
 de formação: “Todo elemento da matriz A que possuir índice par deverá ter seu
elemento dividido por 2; caso contrário, o elemento da matriz
A deverá ser multiplicado por 1.5”. Apresentar as matrizes A e B lado a lado.*/

alert("Programa MatrizAeBMesmaDimensao")
let elementoLido, contadora, vetorA, vetorB

vetorA = []
vetorB = []

for (contadora = 0; contadora < 15; contadora++) {

    elementoLido = parseFloat(prompt("Digite um número"))
    vetorA.push(elementoLido)

      console.log(`Elemento do VetorA: ${vetorA}`)

    if (vetorA[contadora] % 2 == 0) {
        vetorB.push(vetorA[contadora] / 2)
    }
    else {
        vetorB.push(vetorA[contadora] * 1.5)
    }

    console.log(`Elemento do VetorB: ${vetorB}`)

}
console.log(`Tamanho do VetorB: ${vetorB.length}`)