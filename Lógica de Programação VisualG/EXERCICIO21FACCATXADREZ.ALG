algoritmo "Exercicio21FaccatXadrez"
//
// Professor: Jailson Costa dos Santos
// Descrição   : Ler a hora de início e a hora de fim de um jogo de Xadrez (
//considere apenas horas inteiras, sem os minutos) e calcule a duração do
//jogo em horas, sabendo-se que o tempo máximo de duração do jogo é
//de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 02/09/2026
Var
// Seção de Declarações das variáveis
horainicio:inteiro
horafim:inteiro
calculo:inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
Escreval("Quanto Tempo Durou a Partida de Xadrez")
Escreva("Digite o horário (sem minutos)de início da partida de xadrez: ")
leia(horainicio)
Escreva("Digite o horário (sem minutos) de término da partida: ")
leia(horafim)
se (horafim>horainicio)então
calculo<- (horafim - horainicio)
senão
se (horainicio>=horafim)então
calculo<- (24-horainicio)+horafim
fimse
fimse
Escreva("A quantidade de horas da partida foi de: ",calculo," hora(s)")
Fimalgoritmo