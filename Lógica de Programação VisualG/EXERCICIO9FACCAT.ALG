Algoritmo "exercicio9Faccat"
//  
//  
// 
// Professor: Jailson Costa dos Santos
// Descrição   : Solicitar valor de salário mensal atual de um funcionário,
// o percentual de reajuste, e calcular o novo valor desse salário,
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 30/08/2026
Var
// Seção de Declarações das variáveis 
salario:real
reajuste:real
calculo:real
novo:real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
Escreval("Programa ReajusteSalario")
Escreva("Digite o salário atual do funcionário: ")
leia(salario)
Escreva("Digite o valor o percentual do reajuste: ")
leia(reajuste)
calculo<- (salario*reajuste)/100
novo<- salario+calculo
Escreva("O novo valor do salário do funcionário é: ",novo:2:2)

Fimalgoritmo