Algoritmo "Exercicio33Faccat"
//
// Professor: Jailson Costa dos Santos
// Descrição   : Ler dois valores e imprimir uma das três mensagens
//a seguir:
//‘Números iguais’, caso os números sejam iguais
//‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
//‘Segundo maior’, caso o segundo seja maior que o primeiro.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 02/09/2026
Var
   // Seção de Declarações das variáveis
   primeiro:inteiro
   segundo:inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("Números Iguais, Ou Um Maior Que o Outro")
   Escreva("Digite o primeiro número: ")
   leia(primeiro)
   Escreva("Digite o segundo número: ")
   leia(segundo)
   se(primeiro>segundo)então
      Escreva("O primeiro número é o maior")
   senão
      se(primeiro<segundo)então
         Escreva("O segundo número é o maior")
      senão
         Escreva("Os dois são iguais!")
      fimse
   fimse

Fimalgoritmo