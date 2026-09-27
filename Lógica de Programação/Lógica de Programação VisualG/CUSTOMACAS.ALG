Algoritmo "CustoMacas"
// 
// Professor: Jailson Costa dos Santos
// Descrição   : Pergunta o número de maçãs, faz um cálculo e entrega
// o custo de maçãs
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 01/09/2026
Var
// Seção de Declarações das variáveis 
macas:inteiro
custo:real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
Escreval("CustoMacas")
Escreva("Quantas maçãs você irá comprar? ")
leia(macas)
se(macas>11) então
custo<- 1.00*macas
senão
custo<- 1.30*macas
fimse
Escreva("O custo total de maçãs é de: ",custo," reais")
Fimalgoritmo