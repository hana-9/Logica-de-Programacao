Algoritmo "Exercicio35Faccat"
//  
//  
// Disciplina: Lógica de Programação com JavaScript
// Professor: Jailson Costa dos Santos
// Descrição   : Escreva um algoritmo que leia o número de litros
//vendidos e o tipo de combustível (codificado da seguinte forma:
//A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo
//cliente sabendo-se que o preço do litro da gasolina é R$ 3,30 e
//o preço do litro do álcool é R$ 2,90..
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 02/09/2026
Var
// Seção de Declarações das variáveis
combustivel:caracter
litros:real
desconto:real
valorgasolina:real
valoralcool:real

Inicio
Escreval("Valor da Gasolina e Álcool Com Desconto")
Escreval("Digite A Opção de Combustível Desejada:")
Escreval("A - Álcool")
Escreval("G - Gasolina")
leia(combustivel)
escolha combustivel
caso "A"
Escreva("Você escolheu Álcool, digite a quantidade de litros desejado:")
leia(litros)
se litros<=20 então
desconto<-   2.90-(2.90*3)/100
valoralcool<- litros*desconto
Escreval("O valor total é: R$",valoralcool:2:2," reais")
senão
desconto<-   2.90-(2.90*5)/100
valoralcool<- litros*desconto
Escreval("O valor total é: R$",valoralcool:2:2," reais")
fimse
caso "G"
Escreva("Você escolheu Gasolina, digite a quantidade de litros desejado: ")
leia(litros)
se litros<=20 então
desconto<-   3.30-(3.30*4)/100
valorgasolina<- litros*desconto
Escreval("O valor total é: R$",valorgasolina:2:2," reais")
senão
desconto<-   3.30-(3.30*6)/100
valorgasolina<- litros*desconto
Escreval("O valor total é: R$",valorgasolina:2:2," reais")
fimse
fimescolha
Fimalgoritmo