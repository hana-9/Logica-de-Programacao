/*Elaborar um programa que efetue a apresentação do
valor da conversão em real de um valor lido em dólar. O programa
deve solicitar o valor da cotação do dólar e também a quantidade
de dólares disponível com o usuário, 
para que seja apresentado o valor em moeda brasileira.*/

alert("Programa Dólar Para Real")
let cotacaoValor, quantidadeDolar, moedaReal
cotacaoValor = parseFloat(prompt("Digite o valor da cotação do Dólar: "))
quantidadeDolar = parseFloat(prompt("Digite o valor que será convertido: "))
moedaReal = cotacaoValor * quantidadeDolar
alert("O valor em reais é: R$ " + moedaReal)