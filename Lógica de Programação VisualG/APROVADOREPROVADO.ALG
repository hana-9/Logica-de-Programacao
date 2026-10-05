Algoritmo "AprovadoReprovado"
// 
//  
// Descrição   : Recebe duas notas de avaliação do aluno, calcula a
//média aritmética e entrega a média de nota das duas avaliações
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 01/09/2026
Var
// Seção de Declarações das variáveis
avali1:real
avali2:real
media:real


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
Escreval("AprovadoReprovado")
Escreva("Digite a primeira nota de avaliação do aluno: ")
leia(avali1)
Escreva("Digite a segunda nota de avaliação do aluno: ")
leia(avali2)
media<- (avali1+avali2)/2
se(media>=6) então
Escreval("A média do aluno é: ",media)
Escreva("Está aprovado!")
senão
Escreval("A média do aluno é: ",media)
Escreva("Está Reprovado.")
fimse
Fimalgoritmo