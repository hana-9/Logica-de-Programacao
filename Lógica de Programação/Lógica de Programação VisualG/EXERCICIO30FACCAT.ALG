Algoritmo "Exercicio30Faccat"
// 
// Professor: Jailson Costa dos Santos
// Descrição   : Ler 3 valores (considere que não serão
//informados valores iguais) e escrevê-los em ordem crescente.
// Autor(a)    : Ana Paula
// Data atual  : 02/09/2026
Var
// Seção de Declarações das variáveis 
num1:real
num2:real
num3:real


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
Escreval("Três Números em Ordem Crescente")
Escreva("Digite o primeiro número: ")
Leia(num1)
Escreva("Digite o segundo número:")
Leia(num2)
Escreva("Digite o terceiro número:")
Leia(num3)
se(num1=num2) ou (num2=num3) ou (num3=num1) então
Escreva("Os números não podem ser iguais!")
senão
se (num1>num2)e (num2>num3) então
Escreva(num3,num2,num1)
senão
se (num2>num1)e (num1>num3) então
Escreva(num3,num1,num2)
senão
se (num3>num1)e (num2>num3) então
Escreva(num1,num3,num2)
senão
se (num3>num2)e (num1>num2) então
Escreva(num2,num1,num3)
senão
se (num1>num2)e (num3>num2) então
Escreva(num2,num3,num1)
senão
se (num3>num2)e (num2>num1) então
Escreva(num1,num2,num3)
fimse
fimse
fimse
fimse
fimse
fimse
fimse
Fimalgoritmo