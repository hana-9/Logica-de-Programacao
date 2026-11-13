/*Ler 10 valores dentro de uma matriz e então mostrá-las*/

alert("Programa elementosVetor")

let numeroLido, contador, vetor
contador = 0
vetor = [0]

do {
    
    console.log(`O número atual do vetor é ${vetor[contador]}`)
    numeroLido = parseInt(prompt("Digite um número:"))
    vetor.push(numeroLido)
    contador++
}
while (contador < 10)
console.log(`Todos os elementos do vetor: ${vetor}`)
