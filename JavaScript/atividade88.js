// Realert o exercício anterior utilizando a
//estrutura ENQUANTO.

alert("Programa Estrutura de Repetição Enquanto e Divisão")
let primeiroValor, segundoValor, divisao
primeiroValor = parseFloat(prompt("Digite o primeiro valor: "))
segundoValor = parseFloat(prompt("Digite o segundo valor: "))
while (segundoValor == 0) {
    segundoValor = parseFloat(prompt("Digite o segundo valor: "))
}
divisao = primeiroValor / segundoValor
alert("O valor da divisão é: "+ divisao)