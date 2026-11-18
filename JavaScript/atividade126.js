/*b) Ler uma matriz A do tipo vetor com 15 elementos. 
Construir uma matriz B de mesmo tipo, sendo que cada elemento
 da matriz B seja o fatorial do elemento correspondente 
 da matriz A. Apresentar
as matrizes A e B.*/

alert("Programa vetorFatorial")
let elemento, contadora, vetorA, vetorB
contadora = 0
vetorA = []
vetorB = []

do {

    elemento = parseFloat(prompt("Digite um número"))

    vetorA.push(elemento)

    console.log(`VetorA: ${vetorA}`)


    contadora++


}
while (contadora < 3)

    for (i = 3; i > 0 ; i--) {
        vetorB.push(vetorA[i] * vetorA[i-1])
    }
    console.log(`VetorB: ${vetorB}`)
