Algoritmo "L04I"
// Disciplina: Lógica de Programação com JavaScript
// Professor: Jailson Costa dos Santos
// Descrição   : Elaborar um programa que efetue a leitura de
//valores positivos inteiros até que um valor negativo seja
//informado. Ao final devem ser apresentados o maior e o menor
//valores informados pelo usuário.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   numero: inteiro
   acumulador:inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("Programa de Leitura de Números Positivos!")

   repita
      acumulador <- numero
      Escreval("Digite um número inteiro")
      leia(numero)

   ate numero < 0

   se (numero < 0)entao

      se numero > acumulador entao
         Escreval("O maior número digitado é: ",numero," e o menor número digitado é: ",acumulador)
      senao
         Escreval("O maior número digitado é: ",acumulador," e o menor número digitado é: ",numero)
      fimse
   fimse



Fimalgoritmo