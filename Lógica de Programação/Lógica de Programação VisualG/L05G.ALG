Algoritmo "L05G"
//
// Disciplina: Lógica de Programação com JavaScript
// Professor: Jailson Costa dos Santos
// Descrição   : Apresentar os resultados das potências de 3,
// variando do expoente 0 até o expoente 15. Deve ser considerado
// que qualquer número elevado a zero é 1, e elevado a 1 é ele
// próprio. Observe que neste exercício não pode ser utilizado o
// operador de exponenciação do portuguol (^).
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   contadora:inteiro
   potencia:inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("Programa Potência de 3")

   potencia <- 1
   para contadora de 0 ate 15 faca
      Escreval("O número 3 cujo expoente é ",contadora," o resultado é ",potencia)
      potencia <- potencia * 3
   fimpara
Fimalgoritmo