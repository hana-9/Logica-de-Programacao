Algoritmo "L03C"
//  
//  
// Disciplina: Lógica de Programação com JavaScript
// Professor: Jailson Costa  dos Santos
// Descrição   : Apresentar todos os valores numéricos inteiros
//ímpares situados na faixa de 0 a 20. Para verificar se o número
//é ímpar, efetuar dentro da malha a verificação lógica desta
//condição com a instrução se, perguntando se o número é ímpar;
//sendo, mostre-o; não sendo, passe para o próximo passo.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 10/09/2026
Var
// Seção de Declarações das variáveis 
contador,somador:inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
Escreval("Soma dos primeiros números pares até o 500")
Escreval("")
somador<-2
enquanto contador < 500 faca
se contador % 2 = 0 então
somador<- somador+contador
fimse
contador<- contador + 1
Escreval("O contador: ",contador, " e a soma dos pares: ",somador)
fimenquanto
Fimalgoritmo