/*63) Escreva um algoritmo para ler 10 números e ao final da leitura 
escrever a soma total dos 10
números lidos.*/

alert("programa ler10Numeros")

let numeros, contador, soma

soma = 0

for (contador = 0; contador < 10; contador++) {
    numeros = parseFloat(prompt("Digite um número"))
    soma = soma + numeros
}
alert(`A soma dos números digitados é ${soma}`)