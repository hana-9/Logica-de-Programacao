Algoritmo "Exercicio23Faccat"
// 
// Professor: Jailson Costa dos Santos
// Descrição   : Ler o salário fixo e o valor das vendas efetuadas pelo vendedor
// de uma empresa. Sabendo-se que
//ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que
//ultrapassar este valor, calcular e escrever o seu salário total.
// Autor(a)    : Ana paula Santos da Silva
// Data atual  : 02/09/2026
Var
// Seção de Declarações das variáveis 
salariofixo:real
valorvendas:real
comissao:real
salariototal:real
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
Escreval("Salário e Comissão de Funcionário")
Escreva("Digite o valor mensal do salário: ")
leia(salariofixo)
Escreva("Digite o valor das vendas do funcionário: ")
leia(valorvendas)
se(valorvendas>1500) então
comissao<-(valorvendas*3/100) + (valorvendas*5/100)
salariototal<- salariofixo + comissao
Escreva("O salário do funcionário mais a comissão é: ",salariototal)
senão
comissao<-(valorvendas*3)/100
salariototal<- salariofixo + comissao
Escreva("O salário do funcionário mais a comissão é: ",salariototal)
fimse
Fimalgoritmo