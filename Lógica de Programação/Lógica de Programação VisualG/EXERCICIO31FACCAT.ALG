Algoritmo "Exercicio31Faccat"
//
// Professor:Jailson Costa dos Santos
// Descrição   : Ler 3 valores (A, B e C) representando as medidas
//dos lados de um triângulo e escrever se formam ou não um triângulo.
//OBS: para formar um triângulo, o valor de cada lado deve ser menor
//que a soma dos outros 2 lados.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 02/09/2026
Var
   // Seção de Declarações das variáveis
   ladoA:real
   ladoB:real
   ladoC:real


Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("Lados Que Formam um Triângulo")
   Escreva("Digite o primeiro lado do triângulo: ")
   leia(ladoA)
   Escreva("Digite o segundo lado do triângulo:")
   leia(ladoB)
   Escreva("Digite o terceiro lado do triângulo:")
   leia(ladoC)
   se(ladoC<ladoB+ladoA)e(ladoB<ladoC+ladoA) e(ladoA<ladoB+ladoC) então
      Escreva("É um triângulo!!")
   senão
      Escreva("Não é um triângulo.")
   fimse


Fimalgoritmo