Algoritmo "Exercicio26Faccat"
//
// Professor   : Jailson Costa dos Santos
// Descrição   : Faça um algoritmo para ler: quantidade atual em
//estoque, quantidade máxima em estoque e quantidade mínima em
//estoque de um produto. Calcular e escrever a quantidade média
//((quantidade média = quantidade máxima + quantidade mínima)/2).
//Se a quantidade em estoque for maior ou igual a quantidade média
//escrever a mensagem 'Não efetuar compra', senão escrever a
//mensagem 'Efetuar compra'.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 02/09/2026
Var
   // Seção de Declarações das variáveis
   estoqueatual:inteiro
   estoquemax:inteiro
   estoquemin:inteiro
   quantimedio:real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("Estoque: Quantidade Máxima,Quantidade Mínima e Média")
   Escreva("Digite a quantidade atual de seu estoque: ")
   leia(estoqueatual)
   Escreva("Digite a quantidade máxima de seu estoque: ")
   leia(estoquemax)
   Escreva("Digite a quantidade mínima de seu estoque; ")
   leia(estoquemin)
   quantimedio<- (estoquemax+estoquemin)/2
   se(estoqueatual>=quantimedio) então
      Escreva("Não Efetuar Compra")
   senão
      Escreva("Efetuar Compra")
   fimse
Fimalgoritmo