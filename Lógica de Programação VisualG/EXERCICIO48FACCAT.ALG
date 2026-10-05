Algoritmo "Exercicio48Faccat"
//  
//  
// Disciplina: Lógica de Programação com JavaScript
// Professor: Jailson Costa dos Santos
// Descrição   : Escreva um algoritmo para ler as notas da 1a. e 2a.
// avaliações de um aluno, calcule e imprima a média (simples) desse
//aluno. Só devem ser aceitos valores válidos durante a leitura (
//0 a 10) para cada nota.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 07/09/2026
Var
// Seção de Declarações das variáveis 
notaum:real
notadois:real
mediasimples:real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
Escreval("Média Simples")
Escreva("Digite a primeira nota do aluno: ")
leia(notaum)
Escreva("Digite a segunda nota do aluno: ")
leia(notadois)
se (notaum>0) e (notaum<10) e (notadois>0) e (notadois<10)  então
mediasimples<- (notaum+notadois)/2
Escreva("A média de notas do aluno é: ",mediasimples)
senão
Escreva("Ambas as notas devem ser maior que 0 e menor que 10 ")
fimse


Fimalgoritmo