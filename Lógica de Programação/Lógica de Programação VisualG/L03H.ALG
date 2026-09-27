Algoritmo "L03H"
// Disciplina: Lógica de Programação com JavaScript
// Professor: Jailson Costa dos Santos
// Descrição   : Elaborar um programa que apresente os valores de
//conversão de graus Celsius em Fahrenheit, de 10 em 10 graus,
//iniciando a contagem em 10 graus Celsius e finalizando em 100
//graus Celsius. O programa deve apresentar os valores das duas
//temperaturas. A fórmula de conversão é (9C +160)/5 =F , sendo F a
//temperatura em Fahrenheit e C a temperatura em Celsius.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   fahrenheit:real
   celsius:inteiro
Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("Programa Celsius Para Farenheit")
   celsius<-0
   enquanto celsius < 101 faca
      Escreval("A medida em graus Celsius é ",celsius," e a medida em graus Fahrenheit é ",fahrenheit)
      celsius<- celsius + 10
      fahrenheit<- (celsius*9+160)/5
   fimenquanto

Fimalgoritmo