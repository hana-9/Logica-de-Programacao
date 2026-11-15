/*Ler 10 elementos de uma matriz tipo vetor e apresentá-los.*/

alert("Programa vetor10Elementos")
let numero, elementos, contador
contador = 0
elementos = []

while (contador < 10) {
    numero = parseInt(prompt("Digite um número:"))
    elementos.push(numero)
    contador = contador + 1
}

