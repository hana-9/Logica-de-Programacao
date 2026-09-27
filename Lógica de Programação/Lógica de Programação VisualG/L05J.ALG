Algoritmo "L05J"
//
//
// Disciplina: Lógica de Programação com JavaScript
// Professor: Jailson Costa dos Santos
// Descrição   :Elaborar um programa que apresente os valores de
//conversão de graus Celsius em Fahrenheit, de 10 em 10 graus,
//iniciando a contagem em 10 graus Celsius e finalizando em 100 graus
// Celsius. O programa deve apresentar os valores das duas
//temperaturas. A fórmula de conversão é 5
//9 +160
//=
//C
//F , sendo F a temperatura em Fahrenheit e C a temperatura
//em Celsius.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   celsius:inteiro
   farenheit:real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("Programa de 10 a 100 graus Celsius")

   para celsius de 10 ate 100 passo celsius + 10 faca
      farenheit <- (celsius * 9 + 160) / 5
      Escreval("Graus Celsius: ",celsius," para Farenheit: ",farenheit)
   fimpara

Fimalgoritmo