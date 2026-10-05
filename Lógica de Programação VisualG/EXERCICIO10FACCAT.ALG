Algoritmo "exercicio10Faccat"
// 
// Professor: Jailson Costa dos Santos
// Descrição   : Solicita o valor do custo de fábrica, calcula a porcentagem de
// do distribuidor e o imposto e depois gera o valor final do consumidor
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 30/08/2026
Var
// Seção de Declarações das variáveis 
fabrica:real
distribuidor:real
imposto:real
consumidor:real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
Escreval("Programa CarroCusto")
Escreva("Digite o valor do custo de fábrica: ")
leia(fabrica)
Escreva("Digite o percentual do distribuidor: ")
leia(distribuidor)
Escreva("Digite o percentual do imposto: ")
leia(imposto)
consumidor<- (fabrica*imposto)/100+(fabrica*distribuidor)/100+fabrica
Escreva("O custo real do carro é: ",consumidor:3:3)

Fimalgoritmo