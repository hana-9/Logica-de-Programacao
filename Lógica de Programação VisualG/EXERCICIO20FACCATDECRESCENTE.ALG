Algoritmo "Exercicio20faccatDecrescente"
// 
//  Professor: Jailson Costa dos Santos
// Descrição   : Pedir dois números
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 02/09/2026
Var
// Seção de Declarações das variáveis 
numero1:real
numero2:real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
Escreval("Decrescente")
Escreva("Digite o primeiro número: ")
leia(numero1)
Escreva("Digite o segundo número: ")
leia(numero2)
se(numero1=numero2) então
Escreva("Os números não podem ser iguais!")
fimse
se (numero1>numero2) então
Escreva("Ordem decrescente: ",numero1,", ",numero2)
senão
Escreva("Ordem decrescente: ",numero2,", ",numero1)
fimse
Fimalgoritmo