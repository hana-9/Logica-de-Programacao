Algoritmo "L03F"
//  
//  
//
//
// Disciplina: Lógica de Programação com JavaScript
// Professor: Jailson Costa dos Santos
// Descrição   : Elaborar um programa que apresente como resultado o
// valor de uma potência de uma base qualquer elevada a um expoente
//qualquer, ou seja, de BE, em que B é o valor da base e E o valor
//do expoente. Observe que neste exercício não pode ser utilizado o
//operador de exponenciação do portuguol (^).
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 11/09/2026
Var
   // Seção de Declarações das variáveis
   contador,base,expoente,resultado:inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("Potenciações")
   Escreval("")
   Escreva("Digite um número para a base: ")
   leia(base)
   Escreva("Digite um número para o expoente: ")
   leia(expoente)
   contador<-0
   resultado<-1
  enquanto contador <= expoente faca
  Escreval("O expoente é ",contador, " e a potência é: ",resultado)
  resultado<- resultado*base
  contador<-contador+1
  fimenquanto
   

Fimalgoritmo