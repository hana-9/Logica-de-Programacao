/*65) Ler 2 valores, calcular e escrever a soma dos inteiros existentes 
entre os 2 valores lidos (incluindo
os valores lidos na soma). Considere que o segundo valor lido 
será sempre maior que o primeiro valor
lido.*/

alert("Programa entreDoisValoresInteiros")

let contador, soma
soma = 0
const numero = []
numero[0] = parseInt(prompt("Digite o primeiro número"))
numero[1] = parseInt(prompt("Digite um número inteiro"))

if (numero[0] > numero[1]) {

    while (numero[1] < numero[0]) {
        numero[1] = parseInt(prompt("O segundo valor deve ser maior"))
    }
}
for (contador = numero[0]; contador <= numero[1]; contador++) {
    soma = soma + contador
}

alert(`Os números digitados são ${numero[0]} e ${numero[1]}, a soma dos números entre eles é ${soma}`)
console.log(`Mostrando os números do vetor: ${numero}`)
console.log(`Mostrando o número na posição 0: ${numero[0]}`)
console.log(`Mostrando o número na posição 1: ${numero[1]}`)
