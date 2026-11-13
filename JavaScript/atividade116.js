/*e) Ler duas matrizes A e B do tipo vetor com 15 elementos 
cada. Construir uma matriz C, sendo esta a
junção das duas outras matrizes. Desta forma, C deverá 
ter o dobro de elementos, ou seja, 30.
Apresentar a matriz C.*/

alert("Programa vetorJuncaoVetores")

let numeroLido, segundoNumeroLido, contador, vetorA, vetorB, vetorC

contador = 0
vetorA = []
vetorB = []
vetorC = []

while (contador < 15) {

    numeroLido = Number(prompt("Digite um número"))
    segundoNumeroLido = Number(prompt("Digite o segundo número"))

    if (isNaN(numeroLido, segundoNumeroLido) == true || isNaN(numeroLido) == true || isNaN(segundoNumeroLido) == true) {
        alert("Só é permitido letras ou outros caracteres!")
    }
    else {
        vetorA.push(numeroLido)
        vetorB.push(segundoNumeroLido)
        vetorC.push(vetorA[contador], vetorB[contador])
        console.log(`Elemento V.A: ${vetorA}`)
        console.log(`Elemento V.B: ${vetorB}`)
        contador++
    }
}
console.log(`Elemento de V.C: ${vetorC}`)
console.log(`O tamanho do vetor C é: ${vetorC.length}`)