Algoritmo "exercicio11Faccat"
// 
//  
// Descrição   : solicita o valor fixo do salário, o valor fixo da comissão,
// o número de carros vendidos e a porcentagem adicional da comissão e depois
// mostra o novo salário do vendedor
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 30/08/2026
Var
// Seção de Declarações das variáveis 
salario:real
vendas:real
comissao:real
carros:real
porcentagem:real
calcomissao:real
calculoper:real
novo:real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
Escreval("VendedorSalario")
Escreva("Digite o salário fixo do vendedor: ")
leia(salario)
Escreva("Digite o valor total das vendas: ")
leia(vendas)
Escreva("Digite o valor fixo da comissão: ")
leia(comissao)
Escreva("Digite o número de carros vendidos pelo vendedor: ")
leia(carros)
Escreva("Digite o percentual do valor das vendas: ")
leia(porcentagem)
calcomissao<- carros*comissao
calculoper<-  (vendas*porcentagem)/100
novo<- salario+calcomissao+calculoper
Escreva("O salário deste funcionário é: ",novo)

Fimalgoritmo