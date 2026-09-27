Algoritmo "Exercicio41Faccat"
//
// Professor: Jailson Costa dos Santos
// Descrição   :Faça um algoritmo para ler as 3 notas obtidas por um
//aluno nas 3 verificações e a média dos exercícios que fazem parte
// da avaliação. Calcular a média de aproveitamento, usando a fórmula abaixo
//e escrever o conceito do aluno de acordo com a tabela de conceitos
//mais abaixo:
//N1 + N2 * 2 + N3 * 3 + Média_dos_Exercícios
//Média_de_Aproveitamento = ---------------------------------------------------------
//7
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 05/09/2026
Var
   // Seção de Declarações das variáveis
   primeiranota:real
   segundaanota:real
   terceiranota:real
   mediaexercicios:real
   mediadeaproveitamento:real
   conceito:caracter

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval(" Média de Aproveito com 3 Notas de um Aluno")
   Escreva("Digite a primeira nota do aluno: ")
   leia(primeiranota)
   Escreva("Digite a segunda nota do aluno:")
   leia(segundaanota)
   Escreva("Digite a terceira nota do aluno:")
   leia(terceiranota)
   Escreva("Digite a nota da média de exercícios do aluno:")
   leia(mediaexercicios)
   mediadeaproveitamento<-(primeiranota+segundaanota*2+terceiranota*3+mediadeaproveitamento)/7
   se mediadeaproveitamento>=9.0 então
      conceito<- "A"
   senão
      se (mediadeaproveitamento>7.5) e (<9.0) então
         conceito<- "B"
      fimse
   fimse
   se (mediadeaproveitamento>6.0) e (<7.5) então
      conceito<- "C"
   fimse
   se mediadeaproveitamento<6.0 então
      conceito<- "D"
   fimse
      Escreva("A média de aproveitamento do aluno é: ",mediadeaproveitamento:4:1," e o conceito é: ",conceito)

Fimalgoritmo