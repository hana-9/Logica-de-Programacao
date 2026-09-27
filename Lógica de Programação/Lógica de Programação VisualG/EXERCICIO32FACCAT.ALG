Algoritmo "Exercicio32Faccat"
// 
// Professor: Jailson Costa dos Santos
// Descrição   : Ler o nome de 2 times e o número de gols marcados na
//partida (para cada time). Escrever o nome do vencedor. Caso não
//haja vencedor deverá ser impressa a palavra EMPATE.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 02/09/2026
Var
// Seção de Declarações das variáveis 
time1:caracter
time2:caracter
gol1:inteiro
gol2:inteiro


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
Escreval("Quantidade de Gols, Vencedor ou Empate")
Escreva("Digite o nome do primeiro time: ")
leia(time1)
Escreva("Digite o nome do segundo time:")
leia(time2)
Escreva("Quantidade de gols do primeiro time: ")
leia(gol1)
Escreva("Quantidade de gols do segundo time:")
leia(gol2)
se(gol1>gol2) então
Escreva("O time ",time1," é o vencedor! Com",gol1," gol(s)")
senão
se(gol2>gol1) então
Escreva("O time ",time2," é o vencedor! Com",gol2," gol(s)")
senão
se(gol1=gol2) então
Escreva("Empate! Com",gol1," gol(s) cada")
fimse
fimse
fimse

Fimalgoritmo