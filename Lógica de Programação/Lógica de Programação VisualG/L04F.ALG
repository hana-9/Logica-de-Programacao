Algoritmo "L04F"
//
//
// Disciplina: Lógica de Programação com JavaScript
// Professor: Jailson Costa dos Santos
// Descrição   : Elaborar um programa que efetue a leitura sucessiva
//de valores numéricos e apresente no final o total do somatório,
//a média aritmética e o total de valores lidos. O programa deve
//fazer as leituras dos valores enquanto o usuário estiver fornecendo
//valores positivos. Ou seja, o programa deve parar quando o usuário
//fornecer um valor negativo. Não se esqueça que o usuário pode
//entrar como primeiro número um número negativo, portanto, cuidado
//com a divisão por zero no cálculo da média.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   numero:inteiro
   vezes:inteiro
   somador:inteiro
   media :real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval(" Programa Somatório, Média Aritmética e Total")

   vezes <- 0
   somador <- 0
   
   repita
   
      Escreval("Digite um número")
      leia(numero)

      vezes <- vezes + 1

      somador <- somador + numero

      media<- somador / vezes

      se (numero = 0) ou (vezes = 0) entao
         Escreval("Não é possível fazer divisão com 0")
      fimse

   ate numero < 0

   se numero < 0 entao
      vezes <- vezes - 1
      somador <- somador + 1
      media<- somador / vezes
   fimse

   Escreval("O somatório dos seus números é: ",somador,", a Média Aritmética é: ",media," e o número de vezes é ",vezes)

Fimalgoritmo