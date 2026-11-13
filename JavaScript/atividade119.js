/*g) Ler 20 elementos de uma matriz A tipo vetor e construir uma matriz B 
de mesma dimensão com os mesmo elementos da matriz A, sendo que deverão estar 
invertidos. Ou seja, o primeiro elemento de A passa a ser o último de B, o segundo 
elemento de A passa a ser o penúltimo elemento de B e
assim por diante. Apresentar as matrizes A e B lado a lado.*/

alert("Programa VetorContrario")
let contadora,contador,elemento,vetorA,vetorB

contadora = 0
vetorA = []
vetorB = []

while(contadora < 20){
    elemento = parseFloat(prompt("Digite um número qualquer"))
    vetorA.push(elemento)
    contadora++
}
for(contador=contadora; contador >0; contador--){
        vetorB.push(vetorA[contador])
}
console.log(`VetorA: ${vetorA}`)
console.log(`VetorB: ${vetorB}`)
console.log(`Tamanho do VetorA: ${vetorA.length} e Tamanho do VetorB: ${vetorB.length}`)

