/*h) Ler três matrizes (A, B e C) de uma dimensão com 5 elementos cada. 
Construir uma matriz D, sendo esta a junção das três outras matrizes.
 Desta forma D deverá ter o triplo de elementos, ou
seja, 15. Apresentar os elementos da matriz D.*/


alert("Programa TresMatrizes4")
let primeiroElemento, segundoElemento, terceiroElemento, contadora, vetorA, vetorB, vetorC, vetorD

vetorA = []
vetorB = []
vetorC = []
vetorD = []
contadora = 0

do {
    primeiroElemento = parseFloat(prompt("Digite o primeiro número:"))
    vetorA.push(primeiroElemento)
    console.log(`Elemento do vetorA: ${vetorA}`)

    segundoElemento = parseFloat(prompt("Digite o segundo número:"))
    vetorB.push(segundoElemento)
    console.log(`Elemento do vetorB: ${vetorB}`)

    terceiroElemento = parseFloat(prompt("Digite o terceiro número:"))
    vetorC.push(terceiroElemento)
    console.log(`Elemento do vetorC: ${vetorC}`)

    vetorD.push(vetorA[contadora], vetorB[contadora], vetorC[contadora])

    contadora++


}
while (contadora < 5)
console.log(`VetorD: ${vetorD}`)
console.log(`Tamanho do VetorD: ${vetorD.length}`)