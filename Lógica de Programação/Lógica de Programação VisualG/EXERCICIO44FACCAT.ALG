Algoritmo "Exercicio44Faccat"
// Disciplina: Lógica de Programação com JavaScript
// Professor: Jailson Costa dos Santos
// Descrição   : Escreva um algoritmo para ler 2 valores e se o segundo valor informado for ZERO, deve ser lido
//um novo valor, ou seja, para o segundo valor não pode ser aceito o valor zero e imprimir o resultado
//da divisão do primeiro valor lido pelo segundo valor lido. (utilizar a estrutura REPITA).
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 07/09/2026
Var
   // Seção de Declarações das variáveis
   primeirovalor:real
   segundovalor:real
   divisao:real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("Estrutura de Repetição e Divisão")
   Escreva("Digite o primeiro valor: ")
   leia(primeirovalor)
   Escreva("Digite o segundo valor: ")
   leia(segundovalor)
   se segundovalor=0 então
      repita
         Escreva("Digite o segundo valor: ")
         leia(segundovalor)
      ate(segundovalor<>0)
   fimse
   divisao<- primeirovalor/segundovalor
   Escreva("O valor da divisão é: ",divisao)

Fimalgoritmo