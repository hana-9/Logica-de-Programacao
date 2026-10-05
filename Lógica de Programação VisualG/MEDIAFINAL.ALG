Algoritmo "MediaFinal"
// 
//  Professor: Jailson Costa dos Santos
// Descrição   : Solicita três notas de um aluno, calcula a média ponderada
//e entrega a nota final
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 01/09/2026
Var
// Seção de Declarações das variáveis 
nota1:real
nota2:real
nota3:real
media:real


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
Escreval("MediaFinal")
Escreva("Digite a nota 1 do aluno: ")
Leia(nota1)
Escreva("Digite a nota 2 do aluno:")
Leia(nota2)
Escreva("Digite a nota 3 do aluno:")
Leia(nota3)
media<- (2*nota1+3*nota2+5*nota3)/10
Escreva("A média de nota do aluno é: ",media)

Fimalgoritmo