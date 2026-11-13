/*Ler 8 elementos em uma matriz A tipo vetor. Construir uma matriz B 
de mesma dimensão com os elementos da matriz A multiplicados por 3. 
O elemento B[i] deverá ser implicado pelo elemento A[i]*3, o elemento B[2] 
implicado pelo elemento A[2]*3 e assim por diante, até 8. Apresentar o vetor B.*/


alert("Programa vetoresAB")

let numero, contador, vetor1, vetor2
contador = 0
vetor1 = []
vetor2 = []


while (contador < 8) {
    numero = parseInt(prompt("Digite um número qualquer"))
    vetor1.push(numero)
    vetor2.push(vetor1[contador] * 3)
    contador = contador + 1
}

console.log(`Os elementos do primeiro vetor é ${vetor1}`)
console.log(`Os elementos do segundo vetor é ${vetor2}`)

