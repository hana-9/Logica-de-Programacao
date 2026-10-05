/*L04I
Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo
seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo
usuário. 

1 - Ler valores positivos digitados pelo usuário
2 - Fazer o programa ler até que um valor negativo seja digitado
3- Ao final da leitura, mostra o maior valor e o menor

*/
alert("Programa de Leitura de Números Positivos!")

let numero, acumulador

do {
    acumulador = numero
    numero = parseInt(prompt("Digite um número inteiro"))
}
while (numero > 0)

if (numero < 0) {

    if (numero > acumulador) {
        console.log(`O maior número digitado é: ${numero} e o menor número digitado é: ${acumulador}`)
    }
    else {
        console.log(`O maior número digitado é: ${acumulador} e o menor número digitado é: ${numero}`)
    }
}