/*j) Ler duas matrizes A e B de uma dimensão com 6 elementos. 
A matriz A deverá aceitar apenas a entrada de valores pares, enquanto
a matriz B deverá aceitar apenas a entrada de valores ímpares.
A entrada das matrizes deverá ser validada pelo programa e não pelo 
usuário. Construir uma matriz C de forma que a matriz C seja a junção 
das matrizes A e B, de modo que a matriz C contenha 12 elementos. 
Apresentar a matriz C.*/

alert("Programa testeComMatrizes")
let elementoLido, contadora, vetorA, vetorB, vetorC

vetorA = []
vetorB = []
vetorC = []
contadora = 0

while (contadora < 12) {
    elementoLido = parseFloat(prompt("Digite um número"))

    if (elementoLido % 2 == 0) {
        vetorA.push(elementoLido)
    }
    else {
        vetorB.push(elementoLido)
    }
    console.log(`Elemento do vetorA: ${vetorA}`)
    console.log(`Elemento do vetorB: ${vetorB}`)

    contadora++
}
vetorC.push(vetorA, vetorB)
console.log(`Elementos do vetorC: ${vetorC} com ${vetorC.length} elementos que são as duas matrizes `)
