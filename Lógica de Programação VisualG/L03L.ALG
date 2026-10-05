Algoritmo "L03L"
//
//
// Disciplina: Lógica de Programação com JavaScript
// Professor: Jailson Costa dos Santos
// Descrição   : Elaborar um programa que efetue a leitura de valores
//positivos inteiros até que um valor negativo seja informado. Ao final
//devem ser apresentados o maior e o menor valores informados pelo usuário.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   numero:inteiro
   numero2:inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("Números Positivos e Negativos ")
   
   Escreval("Digite um número inteiro")
   leia(numero)
   
   Escreval("Digite um número inteiro")
   leia(numero2)
   
   enquanto (numero > 0) e (numero2 > 0)faca
      Escreval("Digite um número inteiro")
      leia(numero)
      Escreval("Digite um número inteiro")
      leia(numero2)

      se numero > numero2 entao
         Escreval("O maior número digitado é ",numero," e o menor é ",numero2)
      senao
         Escreval("O maior número digitado é ",numero2," e o menor é ",numero)
      fimse
   fimenquanto

Fimalgoritmo