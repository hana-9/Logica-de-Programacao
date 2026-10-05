Algoritmo "Exercicio45Faccat"
// Disciplina: Lógica de Programação com JavaScript
// Professor: Jailson Costa dos Santos
// Descrição   : Reescreva o exercício anterior utilizando a
//estrutura ENQUANTO.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 07/09/2026
Var
   // Seção de Declarações das variáveis
   primeirovalor:real
   segundovalor:real
   divisao:real
Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("Estrutura de Repetição Enquanto e Divisão")
   Escreva("Digite o primeiro valor: ")
   leia(primeirovalor)
   Escreva("Digite o segundo valor: ")
   leia(segundovalor)
   enquanto segundovalor = 0 faça
      Escreva("Digite o segundo valor: ")
      leia(segundovalor)
   fimenquanto
   divisao<-primeirovalor/segundovalor
   Escreva("O valor da divisão é: ",divisao)

Fimalgoritmo