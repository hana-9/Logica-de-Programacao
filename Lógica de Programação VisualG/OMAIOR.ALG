Algoritmo "OMaior"
// 
//  Professor: Jailson Costa dos Santos
// Descrição   : Ler dois valores (considere que não serão lidos valores iguais)
// e escrever o maior deles.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 01/09/2026
Var
// Seção de Declarações das variáveis
num1:real
num2:real


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
Escreval("OMaior")
Escreva("Digite o primeiro número: ")
leia(num1)
Escreva("Digite o segundo número:")
leia(num2)
se(num1=num2)então
Escreval("Ambos os números não podem ser iguais!")
fimse
se(num1>num2)então
Escreval("Primeiro número: ",num1)
Escreva("O primeiro número é o maior!")
senão
Escreval("Segundo número: ",num2)
Escreva("O segundo número é o maior!")
fimse
Fimalgoritmo