//61) Faccat: Ler 10 valores, calcular e escrever a média aritmética desses valores lidos.

alert("Programa leituraMediaAritmetica")

let numeroLido, contador, soma, mediaAritmetica

contador = 0
soma = 0

while (contador < 10){
    numeroLido = parseInt(prompt("Digite um número"))
    soma = soma + numeroLido
    contador = contador + 1
}
mediaAritmetica = soma/10

alert(`A média aritmética dos números digitados é ${mediaAritmetica}`)