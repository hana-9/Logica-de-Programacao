Algoritmo "Exercicio34Faccat"
// 
// Professor: Jailson Costa dos Santos
// Descrição   : Jogo de mesa, com os números propostos do exercício.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 02/09/2026
Var
// Seção de Declarações das variáveis 
primeira:inteiro
segunda:inteiro
conteiner:inteiro
quarta:inteiro
quinta:inteiro
sexta:inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
Escreval("Algoritmo Teste de Mesa")
Escreva("Digite o primeiro número: ")
leia(primeira)
Escreva("Digite o segundo número: ")
leia(segunda)
conteiner<-(primeira*segunda)+5
se (conteiner<=0) então
Escreval("A")
senão
se(conteiner<=100) então
Escreval("B")
senão
Escreval("C")
fimse
fimse
Escreva("Conteiner: ",conteiner)
//Teste de Mesa:
//primeiro      segundo      conteiner      resposta
// 3              2             11             B
//150             3            455             C
// 7             -1             -2             A
//-2              5             -5             A
// 50             3            155             C
//
Fimalgoritmo