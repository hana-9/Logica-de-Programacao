Algoritmo "L05H"
//
//
// Disciplina: Lógica de Programação com JavaScript
// Professor: Jailson Costa dos Santos
// Descrição   :Elaborar um programa que apresente como resultado
//o valor de uma potência de uma base qualquer elevada a um expoente
//qualquer, ou seja, de BE, em que B é o valor da base e E o valor
//do expoente. Observe que neste exercício não pode ser utilizado
//o operador de exponenciação do portuguol (^).
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   contador:inteiro
   base:inteiro
   expoente:inteiro
   potencia:inteiro
Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("Programa da Potenciação")

   Escreval("Digite o número da base desejada")
   leia(base)
   Escreval("Digite o número do expoente desejado")
   leia(expoente)
   potencia <- 1

   para contador de  0 ate expoente faca
      Escreval("O número de base ",base," com o expoente ",contador," tem o resultado ",potencia)
      potencia <- potencia * base
   fimpara

Fimalgoritmo