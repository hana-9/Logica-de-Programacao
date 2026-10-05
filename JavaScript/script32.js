/* L04E Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros e no final apresente o
total do somatório da fatorial de cada valor lido.*/

alert("Programa Soma de Fatoração")
let numero, fatorial, soma, contador
fatorial = 1
soma = 0
contador = 1


do {
    numero = parseInt(prompt("Digite um número"))


    for (i = 1; i < numero; i++) {
        fatorial = parseFloat(fatorial * i)
    }

    soma = parseFloat(soma + fatorial) 
    contador = contador + 1
}
while (contador < 16)
console.log(`A soma dos número digitados é: ${soma.toFixed(2, 2)}`)