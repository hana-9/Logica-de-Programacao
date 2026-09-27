Algoritmo "L04A"
//
//
// Disciplina: Lógica de Programação com JavaScript
// Professor: Jailson Costa dos Santos
// Descrição   : Apresentar os quadrados dos números inteiros de 15
//a 200.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   contadora:inteiro
   quadrado:inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("Programa Quadrado de Números Inteiros")
   contadora<- 14
   quadrado<- 0

   repita
      contadora <- contadora + 1
      quadrado <- contadora * contadora
      Escreval("Número : ",contadora," e seu quadrado: ",quadrado)
   ate (contadora > 199)


Fimalgoritmo