Algoritmo "L04G"
//  

// Disciplina: Lógica de Programação com JavaScript
// Professor: Jailson Costa dos Santos
// Descrição   : Elaborar um programa que apresente como resultado
//o valor do fatorial dos valores ímpares situados na faixa numérica
//de 1 a 10.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   contador:inteiro
   fatorial:real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("Fatorial dos Números Ímpares de 1 a 10")

   contador <- 0
   fatorial <- 1
   
   repita
      contador <- contador + 1
      
      se contador % 2 <> 0 entao
      fatorial<- fatorial * contador
      fimse
      
   ate contador > 10
   Escreval("O fatorial dos números ímpares de 1 a 10 é: ",fatorial)

Fimalgoritmo