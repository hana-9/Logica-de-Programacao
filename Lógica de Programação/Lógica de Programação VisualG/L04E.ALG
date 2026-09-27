Algoritmo "L04E"
//
//
// Disciplina: Lógica de Programação com JavaScript
// Professor: Jailson Costa dos Santos
// Descrição   : Elaborar um programa que efetue a leitura de 15
//valores numéricos inteiros e no final apresente o total do
//somatório da fatorial de cada valor lido.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   numero:inteiro
   fatorial:real
   soma:real
   contador:inteiro
   i:inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("Programa Soma de Fatoração")

   fatorial<- 1
   soma <- 0
   contador <- 1


   repita

      Escreval("Digite um número")
      leia(numero)

         para i de 1 ate numero faca
            fatorial <- fatorial * i
         fimpara

      soma <- soma + fatorial
      contador <- contador + 1

   ate contador > 15

   Escreval("A soma dos número digitados é: ",soma:2:2)

Fimalgoritmo