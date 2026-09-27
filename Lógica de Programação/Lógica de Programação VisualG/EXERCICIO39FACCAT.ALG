Algoritmo "Exercicio37Faccat"
//
//
// Disciplina: Lógica de Programação com JavaScript
// Professor: Jailson Costa dos Santos
// Descrição   : Se o cliente comprar mais de 8 Kg em frutas ou
//o valor total da compra ultrapassar R$ 25,00, receberá ainda
//um desconto de 10% sobre este total. Escreva um algoritmo para ler
// a quantidade (em Kg) de morangos e a quantidade (em Kg) de maças
//adquiridas e escreva o valor a ser pago pelo cliente.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 02/09/2026
Var
   // Seção de Declarações das variáveis
   kgmorangos:real
   valormorangos:real
   kmacas:real
   valormacas:real
   valortotal:real
   kgtotal:real
   desconto:real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("Valor da Compra de Frutas")
   Escreva("Digite a quantidade em kg de maçãs:")
   leia(kmacas)
   Escreva("Digite a quantidade em kg de morangos:")
   leia(kgmorangos)

   se(kmacas > 5) então
      valormacas <- (kmacas*1.50)
   senão
      valormacas <-( kmacas*1.80)
   fimse
   se (kgmorangos>5) então
      valormorangos <- (kgmorangos*2.20)
   senão
      valormorangos <- (kgmorangos*2.50)
   fimse
   kgtotal <- kmacas + kgmorangos
   valortotal <- valormacas + valormorangos
   se (kgtotal>8) ou (valortotal>25) então
      desconto <- (valortotal*10)/100
      valortotal <- valortotal-desconto
   senão
   fimse
   Escreva("O valor da sua compra é: R$",valortotal," e de fruta: ",kgtotal," Kg")
Fimalgoritmo