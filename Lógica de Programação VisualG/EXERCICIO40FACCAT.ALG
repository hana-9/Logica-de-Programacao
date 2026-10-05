Algoritmo "Exercicio40Faccat"
//
// Professor: Jailson Costa dos Santos
// Descrição   : Faça um algoritmo para ler: a descrição do produto
// (nome), a quantidade adquirida e o preço unitário. Calcular e
//escrever o total (total = quantidade adquirida * preço unitário),
//o desconto e o total a pagar (total a pagar = total - desconto),
//sabendo-se que:
//- Se quantidade <= 5 o desconto será de 2%
//- Se quantidade > 5 e quantidade <=10 o desconto será de 3%
//- Se quantidade > 10 o desconto será de 5%
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 05/09/2026
Var
   // Seção de Declarações das variáveis
   nomeproduto:caracter
   quantidadeproduto:inteiro
   precounitario:real
   desconto:real
   valortotal:real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("Produtos, Preço Unitário e Desconto")
   Escreva("Digite o nome do produto: ")
   leia(nomeproduto)
   Escreva("Digite a quantidade do produto:")
   leia(quantidadeproduto)
   Escreva("Digite o preço unitário do produto:")
   leia(precounitario)
   se quantidadeproduto <=5 então
      desconto<- (precounitario*2)/100
   senão
      se (quantidadeproduto >5 ) e (<=10)então
         desconto<-(precounitario*3)/100
      fimse
   fimse
   se quantidadeproduto>10 então
      desconto<-(precounitario*5)/100
   fimse
   valortotal<- (quantidadeproduto*precounitario)- desconto
   Escreva("O valor a ser pago é: R$",valortotal," reais")

Fimalgoritmo