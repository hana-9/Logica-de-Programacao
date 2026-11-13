/*a) Elaborar um programa de computador que efetue a leitura de quatro
valores inteiros (variáveis A, B, C e
D). Ao final o programa deve apresentar o resultado do produto 
(variável P) do primeiro com o terceiro
valor, e o resultado do produto (variável P) do primeiro com o segundo valor,
 e o resultado da soma
(variável S) do segundo com o quarto valor.*/

alert("Programa lendoValoresProduto")

let primeiroNumero, segundoNumero, terceiroNumero, quartoNumero, produto1, produto2, soma

primeiroNumero = parseInt(prompt("Digite o primeiro valor: "))
segundoNumero = parseInt(prompt("Digite o segundo valor: "))
terceiroNumero = parseInt(prompt("Digite o terceiro valor: "))
quartoNumero = parseInt(prompt("Digite o quarto valor: "))

produto1 = primeiroNumero * terceiroNumero
produto2 = primeiroNumero * segundoNumero
soma = segundoNumero + quartoNumero

console.log(`O resultado do primeiro produto é: ${produto1}, do segundo é: ${produto2} e o resultado da soma é: ${soma}`)