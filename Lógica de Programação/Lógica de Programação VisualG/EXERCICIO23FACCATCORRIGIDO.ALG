Algoritmo "Exercicio23FaccatCorrigido"
//
// Professor: Jaison Costa dos Santos
// Descrição   : Tendo como dados de entrada o nome, a altura e o sexo (M ou F)
// de uma pessoa, calcule
//e mostre seu peso ideal, utilizando as seguintes fórmulas:
//- para sexo masculino: peso ideal = (72.7 * altura) - 58
//- para sexo feminino: peso ideal = (62.1 * altura) - 44.7
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 02/09/2026
Var
   // Seção de Declarações das variáveis
   nome:caracter
   sexo: caracter
   altura:real
   pesoideal:real
Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("Programa de Peso Ideal")
   Escreva("Digite seu nome: ")
   leia(nome)
   Escreva("Digite seu sexo (M ou F): ")
   leia(sexo)
   Escreva("Digite sua altura (use ponto ao invés de vírgula): ")
   leia(altura)
   se(sexo= "M") então
      pesoideal<- (72.7*altura)-58
      Escreva("Olá ",nome,"! Seu peso ideal é: ",pesoideal," Kg")
   senão
      se(sexo="F") então
         pesoideal<- (62.1*altura)- 44.7
         Escreva("Olá ",nome,"! Seu peso ideal é: ",pesoideal," Kg")
      fimse
   fimse
Fimalgoritmo