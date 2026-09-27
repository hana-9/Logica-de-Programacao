Algoritmo "L03I"
//
//
// Disciplina: Lógica de Programação com JavaScript
// Professor: Jailson Costa dos Santos
// Descrição   : Elaborar um programa que efetue a leitura de 10
//valores numéricos e apresente no final o total do somatório e a
//média aritmética dos valores lidos.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   contador:inteiro
   numeroLido:inteiro
   somadora:inteiro
   media:real


Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("Programa Somador e Média")
   contador<-1
   enquanto contador < 11 faca
      Escreval("Digite um número:")
      leia(numeroLido)
      somadora<- somadora + numeroLido
      media<- somadora/10
      contador<-contador+1
   fimenquanto
   Escreva("O valor da soma total dos números é ",somadora, " e a média desses números é ",media)
Fimalgoritmo