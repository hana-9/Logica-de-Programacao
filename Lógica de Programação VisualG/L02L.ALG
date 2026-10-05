Algoritmo "L02L"
//
//
// Professor: Jailson Costa dos Santos
// Descrição   : Elaborar um programa que efetue a leitura de
//três valores (A, B e C) e apresente como resultado final à
//soma dos quadrados dos três valores lidos.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 01/09/2026
Var
   // Seção de Declarações das variáveis
   primeiroValor: real
   segundoValor: real
   terceiroValor: real
   somaQuadrado: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("Programa Soma do Quadrado de 3 Números")
   Escreval("Digite o primeiro número: ")
   leia(primeiroValor)
   Escreval("Digite o segundo número: ")
   leia(segundoValor)
   Escreval("Digite o terceiro número: ")
   leia(terceiroValor)
   somaQuadrado<- (primeiroValor*primeiroValor)+(segundoValor*segundoValor)+(terceiroValor*terceiroValor)
   Escreval("O valor da soma do quadrado dos três números digitados é: ",somaQuadrado:2:2)
Fimalgoritmo