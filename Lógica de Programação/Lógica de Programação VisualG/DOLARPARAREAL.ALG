Algoritmo "dolarParaReal"
// 
// Professor: Jailson Costa dos Santos
// Descrição   : Elaborar um programa que efetue a apresentação do
//valor da conversão em real de um valor lido em dólar. O programa
//deve solicitar o valor da cotação do dólar e também a quantidade
//de dólares disponível com o usuário, para que seja apresentado
//o valor em moeda brasileira.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 01/09/2026
Var
// Seção de Declarações das variáveis 
cotacaoValor:real
quantidadeDolar: real
moedaReal:real
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
Escreval("Programa Dólar Para Real")
Escreval("Digite o valor da cotação do Dólar: ")
leia(cotacaoValor)
Escreval("Digite o valor que será convertido: ")
leia(quantidadeDolar)
moedaReal<- cotacaoValor*quantidadeDolar
Escreval("O valor em reais é: R$ ",moedaReal)

Fimalgoritmo