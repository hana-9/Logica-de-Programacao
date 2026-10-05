/*
L03L
Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo
seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo
usuário.*/

alert("Números Positivos e Negativos ")

let numero, numero2

numero = parseInt(prompt("Digite um número inteiro"))

while (numero > 0 && numero2 > 0) {
    numero = parseInt(prompt("Digite um número inteiro"))
    numero2 = parseInt(prompt("Digite um número inteiro"))
}


if (numero > numero2) {

    alert(`O maior número digitado é ${numero} e o menor é ${numero2}`)
}
else {
    alert(`O maior número digitado é ${numero2} e o menor é ${numero}`)
}
location.reload()