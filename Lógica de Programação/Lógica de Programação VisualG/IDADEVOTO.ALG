Algoritmo "IdadeVoto"
// 
// Professor: Jailson Costa dos Santos
// Descrição   : Pede o ano atual e o ano de nascimento do usuário e diz se esse
// pode votar ou não
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 01/09/2026
Var
// Seção de Declarações das variáveis 
atual:inteiro
nascimento:inteiro
voto:inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
Escreval("IdadeVoto")
Escreva("Digite o ano atual: ")
leia(atual)
Escreva("Digite o ano de seu nascimento:")
leia(nascimento)
voto<- atual-nascimento
se(voto<16) então
Escreval("Sua idade é: ",voto)
Escreva("Você não possui idade para votar.")
senão
Escreval("Sua idade é: ",voto)
Escreva("Você possui idade para votar.")
fimse
Fimalgoritmo