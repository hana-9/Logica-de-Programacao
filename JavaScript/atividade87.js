//Escreva um algoritmo para ler 2 valores e se o segundo valor informado for ZERO, deve ser lido
//um novo valor, ou seja, para o segundo valor não pode ser aceito o valor zero e imprimir o resultado
//da divisão do primeiro valor lido pelo segundo valor lido. (utilizar a estrutura REPITA).


alert("Programa Estrutura de Repetição e Divisão")
let primeiroValor, segundoValor, divisao

primeiroValor = parseFloat(prompt("Digite o primeiro valor: "))
segundoValor = parseFloat(prompt("Digite o segundo valor: "))
do
    segundoValor = parseFloat(prompt("Digite o segundo valor: "))

while (segundoValor == 0)


divisao = primeiroValor / segundoValor
alert("O valor da divisão é: " + divisao)