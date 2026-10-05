Algoritmo "L03G"
//
//
// Disciplina: Lógica de Programação com JavaScript
// Professor: Jailson Costa dos Santos
// Descrição   : Escreva um programa que apresente a série
//de Fibonacci até o décimo quinto termo. A série de Fibonacci é
//formada pela seqüência: 1, 1, 2, 3, 5, 8, 13, 21, 34, ..., etc.
//Esta série se caracteriza pela soma de um termo atual com o seu
//anterior subseqüente, para que seja formado o próximo valor da
//seqüência. Portanto começando com os números 1, 1 o próximo termo
//é 1+1=2, o próximo é 1+2=3, o próximo é 2+3=5, o próximo 3+5=8, etc.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   contador:inteiro
   acumulador:inteiro
   sucessor:inteiro
   fibonacci:inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("Programa Fibonacci")
   contador<-0
   acumulador<- 1
   sucessor<- 1
   fibonacci<- 1

   enquanto contador < 15 faca
      Escreval("A sequência de Fibonacci: ",fibonacci)
      contador<- contador+1
      fibonacci<- acumulador+sucessor
      acumulador<- sucessor
      sucessor<-fibonacci
   fimenquanto


Fimalgoritmo