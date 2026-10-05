Algoritmo "L04B"
//
// Disciplina: Lógica de Programação com JavaScript
// Professor: Jailson Costa dos Santos
// Descrição   : Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de
//1 até 500.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   contador:inteiro
   somatorio:inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("somatorioPares")

   contador<- 0
   somatorio <- 0

   repita

      contador <- contador + 1

      se (contador % 2 = 0) entao
         somatorio <- somatorio + contador
         Escreval("Contador: ",contador," Somatório dos números pares: ",somatorio)

      senao
         somatorio <- somatorio
         Escreval("Contador: ",contador)
      fimse

   ate (contador > 499)

Fimalgoritmo