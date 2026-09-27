Algoritmo "L04D"
//
//
// Disciplina: Lógica de Programação com JavaScript
// Professor: Jailson Costa dos Santos
// Descrição   : Elaborar um programa que efetue o cálculo e no final
//apresente o somatório do número de grãos de trigo que se pode obter
//num tabuleiro de xadrez, obedecendo à seguinte regra: colocar um
//grão de trigo no primeiro quadro e nos quadros seguintes o dobro do
//quadro anterior. Ou seja, no primeiro quadro coloca-se 1 grão, no
//segundo quadro colocam-se 2 grãos (neste momento têm-se 3 grãos),no
//terceiro quadro colocam-se 4 grãos (tendo neste momento 7 grãos),
//no quarto colocam-se 8 grãos (tendo-se então 15 grãos) até atingir
//o sexagésimo quarto (64o) quadro. Utilize variáveis do tipo
//real como acumuladores.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   contador:inteiro
   graosnaCasa:real
   soma:real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("Programa xadrezGraos")

   contador <- 1
   graosnaCasa <- 1
   soma <- 0

   repita
      Escreval("A casa atual é: ",contador," e a quantidade de grãos é: ",soma)
      contador <- contador + 1
      soma <- (soma + graosnaCasa)
      graosnaCasa <- graosnaCasa * 2

   ate(contador > 63)

Fimalgoritmo