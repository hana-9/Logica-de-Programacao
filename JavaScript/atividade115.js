/*d) Ler 15 elementos de uma matriz tipo vetor. Construir 
uma matriz B de mesmo tipo, observando a
seguintes lei de formação: “Todo elemento de B deverá 
ser o quadrado do elemento de A
correspondente”. Apresentar as matrizes A e B.*/


alert("Programa MatrizQuadrado")
let numeroLido, contador, vetorA, vetorB

contador = 0
vetorA = []
vetorB = []

do {
    numeroLido = Number(prompt("Digite um número"))

    if ( isNaN(numeroLido) == true ) {
        alert("Só é permitido números e não letras ou caracteres especiais.")
    }
    else if (numeroLido == 0) {
        alert("O campo não pode ser vazio!")
    }
    else {
        vetorA.push(numeroLido)
        vetorB.push(vetorA[contador] * vetorA[contador])
        contador++
        console.log(`Elemento V.A: ${vetorA}`)
        console.log(`Elemento V.B: ${vetorB}`)
        console.log(`Tamanho do Vetor: ${vetorB.length}`)
    }

}
while (contador < 15)

