Algoritmo "L03J"
// Disciplina: Lógica de Programação com JavaScript
// Professor: Jailson Costa dos Santos
// Descrição   : Elaborar um programa que apresente os resultados da
//soma e da média aritmética dos valores pares situados na
//faixa numérica de 50 a 70.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   contador:inteiro
   soma:inteiro
   media:real
   elementos:inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("Números Ímpares Entre 50 e 70")
   contador<- 50
   elementos<-11
   enquanto contador < 71 faca
      se contador % 2 = 0 entao
         soma <- soma + contador
         Escreval("O numero está em ",contador)
      fimse
      media <- soma / elementos
      contador <-  contador + 1
   fimenquanto
   Escreva(" a soma de todos é ",soma," e a média é ",media:2:2)
Fimalgoritmo