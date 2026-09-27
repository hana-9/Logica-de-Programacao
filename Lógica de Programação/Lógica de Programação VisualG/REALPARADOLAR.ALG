Algoritmo "realParaDolar"
//
//
// Professor: Jailson Costa dos Santos
// Descrição   : Elaborar um programa que efetue a apresentação do
//valor da conversão em dólar de um valor lido em real. O programa
// deve solicitar o valor da cotação do dólar e também a quantidade
//de reais disponível com o usuário, para que seja apresentado o
//valor em moeda americana.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 01/09/2026
Var
   // Seção de Declarações das variáveis
   cotacaoDolar:real
   quantidadeReal:real
   valorDolar:real
Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("Conversão de Real Para Dólar")
   Escreval("Digite o valor em reais para conversão")
   leia(quantidadeReal)
   Escreval("Digite o valor da cotação do Dólar")
   leia(cotacaoDolar)
   valorDolar<-  quantidadeReal / cotacaoDolar
   Escreval("O valor da conversão em Dólar é: $ ",valorDolar:2:2)


Fimalgoritmo