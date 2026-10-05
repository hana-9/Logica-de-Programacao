/*L04F
Elaborar um programa que efetue a leitura sucessiva de valores numéricos e apresente no final o
total do somatório, a média aritmética e o total de valores lidos. O programa deve fazer as leituras
dos valores enquanto o usuário estiver fornecendo valores positivos. Ou seja, o programa deve
parar quando o usuário fornecer um valor negativo. Não se esqueça que o usuário pode entrar
como primeiro número um número negativo, portanto, cuidado com a divisão por zero no cálculo da
média.*/

/*
1 - fazer o loop repetir o pedido de numero
2- Apresentar no final o somatório desses números, a média e o total de valores.
3 - Continuar o programa enquanto os números forem positivos.
4 - fazer o somatório, depois a média e depois a quantidade de vezes que os valores foram lidos (número de vezes todas as vezes que o número é positivo, acrescentar um)
*/

alert(" Programa Somatório, Média Aritmética e Total")
let numero, vezes, somador, media
vezes = 0
somador = 0
do {
    numero = parseInt(prompt("Digite um número"))
    if (numero == null) {
        alert("É necessário um valor para continuar")

    }
    else {
        vezes = vezes + 1
    }
    somador = somador + numero

    media = somador / vezes

    if (numero == 0 || vezes == 0) {
        console.log("Não é possível fazer divisão com 0")
    }
}
while (numero > 0)

if (numero < 0) {
    vezes = vezes - 1
    somador = somador + 1
    media = somador / vezes
}

console.log(`O somatório dos seus números é: ${somador}, a Média Aritmética é: ${media} e o número de vezes é ${vezes}`)
//location.reload()