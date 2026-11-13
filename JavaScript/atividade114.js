/*c) Ler duas matrizes A e B do tipo vetor com 20 elementos. 
Construir uma matriz C, onde cada
elemento de C é a subtração do elemento correspondente 
de A com B. Apresentar a matriz C.*/

alert(`Programa vetor_A_B_C `)
let primeiroNumero, segundoNumero, contador, vetorA, vetorB, vetorC

vetorA = []
vetorB = []
vetorC = []


for (contador = 0; contador < 10; contador++) {

    primeiroNumero = parseInt(prompt("Digite o primeiro número"))
    vetorA.push(primeiroNumero)
    console.log(`Os elemento do vetorA é ${vetorA[contador]}`)
    segundoNumero = parseInt(prompt("Digite o segundo número"))
    vetorB.push(segundoNumero)
    console.log(`Os elemento do vetorB é ${vetorB[contador]}`)
    vetorC.push(vetorA[contador] - vetorB[contador])
    
}
console.log(`Os elementos do vetorC é ${vetorC}`)
