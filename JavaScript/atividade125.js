/*Ler duas matrizes A e B de uma dimensão com 12 elementos.
 A matriz A deverá aceitar apenas a entrada de valores que sejam 
 divisíveis por 2 ou 3, enquanto a matriz B deverá
aceitar apenas a entrada de valores que não sejam múltiplos de 5.
 A entrada das matrizes deverá ser validada pelo programa e não 
 pelo usuário. Construir uma matriz C de forma que a matriz C seja a 
 junção das matrizes A e B, e de forma que a matriz C contenha 24
elementos. Apresentar a matriz C.*/

alert("Programa vetoresDivisores")
let contadora, elemento, vetorA, vetorB, vetorC
contadora = 0
vetorA = []
vetorB = []
vetorC = []

while (contadora < 12) {
    elemento = parseFloat(prompt("Digite um número"))
    if (elemento % 2 == 0 || elemento % 3 == 0) {
        vetorA.push(elemento)
    }
    console.log(`Elemento do vetorA: ${vetorA}`)

    if (elemento % 5 != 0) {
        vetorB.push(elemento)
    }

      console.log(`Elemento do vetorB: ${vetorB}`)

    vetorC.push(vetorA,vetorB)

    contadora++

}
  console.log(`Elemento do vetorC: ${vetorC}, tamanho: ${vetorC.length}`)
