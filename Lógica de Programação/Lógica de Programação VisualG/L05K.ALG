Algoritmo "L05K"
//
//
// Disciplina: Lógica de Programação com JavaScript
// Professor: Jailson Costa dos Santos
// Descrição   :Elaborar um programa que apresente como resultado o
//valor do fatorial dos valores ímpares situados na faixa
//numérica de 1 a 10.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   contador:inteiro
   valorFatorial:inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("Programa Fatorial Números Ímpares")

   valorFatorial <- 1

   para contador de 1 ate 10 faca
      se contador % 2 <> 0 entao
         valorFatorial <- valorFatorial * contador
         Escreval("O valor fatorial dos números ímpares é: ",valorFatorial)
      fimse
   fimpara
   
Fimalgoritmo