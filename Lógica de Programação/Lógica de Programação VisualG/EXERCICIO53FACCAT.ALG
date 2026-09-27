Algoritmo "Exercicio53Faccat"
// Disciplina: Lógica de Programação com JavaScript
// Professor: Jailson Costa dos Santos
// Descrição   : Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere
// que o N será sempre maior que ZERO.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 09/09/2026
Var
// Seção de Declarações das variáveis 
numero:inteiro
contador:inteiro
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
Escreval("Imprimir numeros Até o N")
Escreva(" Digite um número ")
leia(numero)
se numero = 0 então
Escreva(" Não pode ser 0!")
senão
repita
Escreva(contador)
contador<- contador + 1
até contador > numero
fimse
Fimalgoritmo
