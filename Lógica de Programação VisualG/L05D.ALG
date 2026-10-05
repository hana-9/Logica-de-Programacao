Algoritmo "L05D"
//
//
// Disciplina: Lógica de Programação com JavaScript
// Professor: Jailson Costa dos Santos
// Descrição   : Elaborar um programa que apresente no final
//o somatório dos valores pares existentes na faixa de
//1 até 500.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   contador:inteiro
   somatorio:inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("Programa Somatório de 1 a 500")

   somatorio <- 0
   para contador de 1 ate 500 faca
      se contador % 2 = 0 entao

         somatorio <- somatorio + contador
         Escreval("O contador está em ",contador," e a soma dos pares está em ",somatorio)

      senao
         Escreval("O contador está em ",contador)
      fimse
   fimpara
   Escreval("O resultado total da soma dos números pares entre 1 e 500 é: ",somatorio)

Fimalgoritmo