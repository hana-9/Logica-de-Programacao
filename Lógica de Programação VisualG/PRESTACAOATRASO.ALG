Algoritmo "PrestacaoAtraso"
// 
// Professor: Jailson Costa dos Santos
// Descrição   : Solicito o valor da prestação, o tempo em dias e o percentual
// taxa de atraso, calculando o valor da prestação em atraso.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 31/08/2026
Var
// Seção de Declarações das variáveis 
valor:real
taxa:real
tempodias:inteiro
prestacao:real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
Escreval("PrestacaoAtraso")
Escreva("Digite o valor da prestação: ")
leia(valor)
Escreva("Digite o valor da taxa: ")
leia(taxa)
Escreva("Digite o tempo em dias dessa prestação: ")
leia(tempodias)
prestacao<- valor+(valor*taxa/100)*tempodias
Escreva("O valor da prestação em atraso é: ",prestacao)
Fimalgoritmo