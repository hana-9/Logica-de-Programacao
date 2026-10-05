Algoritmo "Exercício22FaccatHorasExtras"
// 
// Professor: Jailson Costa dos Santos
// Descrição   : Recebe o valor do salário em horas do funcionário, horas
// trabalhadas e o valor total do salário do funcionário.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 02/09/2026
Var
// Seção de Declarações das variáveis 
horastrabalhadas:inteiro
valorhora:real
valorextra:real
extra:real
salariototal:real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
Escreval("Calculador de Horas Extras e Salário Mensal")
Escreva("Digite as horas trabalhadas durante o mês: ")
leia(horastrabalhadas)
Escreva("Digite o valor de salário por horas trabalhadas: ")
leia(valorhora)
se (horastrabalhadas>160)então
valorextra<- (valorhora*50)/100
extra<- (horastrabalhadas-160)*(valorhora+valorextra)
salariototal<- extra + (160*valorhora)
Escreva("O salário total com as horas extras é de: R$",salariototal)
senão
salariototal<- (horastrabalhadas * valorhora)
Escreva("O salário total é de: R$",salariototal)
fimse
Fimalgoritmo