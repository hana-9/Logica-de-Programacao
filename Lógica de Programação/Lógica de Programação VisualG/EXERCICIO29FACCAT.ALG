Algoritmo "Exercicio29Faccat"
//
// Professor: Jailson Costa dos Santos
// Descrição   : Ler 3 valores (considere que não serão informados
//valores iguais) e escrever a soma dos 2 maiores.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 02/09/2026
Var
   // Seção de Declarações das variáveis
   numero1:real
   numero2:real
   numero3:real
   soma:real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("Soma dos dois Maiores Números")
   Escreva("Digite o primeiro número: ")
   leia(numero1)
   Escreva("Digite o segundo número:")
   leia(numero2)
   Escreva("Digite o terceiro número:")
   leia(numero3)
   se(numero1 = numero2) ou (numero3 = numero2) ou (numero3 = numero1)então
      Escreva("Não podem ser números iguais!")
   senão
      se(numero1>numero3) e (numero2>numero3) então
         soma<- numero1+numero2
         Escreva("A soma dos dois maiores é: ",soma)
      senão
         se(numero2>numero1) e (numero3>numero1) então
            soma<- numero2+numero3
            Escreva("A soma dos dois maiores é: ",soma)
         senão
            se(numero1>numero2) e (numero3>numero2) então
               soma<- numero1+numero3
               Escreva("A soma dos dois maiores é: ",soma)
            senão
            fimse
         fimse
      fimse
   fimse
Fimalgoritmo