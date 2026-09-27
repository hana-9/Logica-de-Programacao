Algoritmo "Exercicio43Faccat"
//
// Professor: Jailson Costa dos Santos
// Descrição   : Receber três medidas, calcular e testar se formam um
// triângulo ou não
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 07/09/2026
Var
   // Seção de Declarações das variáveis
   primeiramedida:real
   segundamedida:real
   terceiramedida:real
   mensag:caracter



Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("Triângulo ou Não")
   Escreva("Digite a primeira medida: ")
   leia(primeiramedida)
   Escreva("Digite a segunda medida:")
   leia(segundamedida)
   Escreva("Digite a terceira medida:")
   leia(terceiramedida)
   se(primeiramedida<segundamedida+terceiramedida) e (segundamedida<primeiramedida+terceiramedida) e (terceiramedida<primeiramedida+segundamedida)então
      se (primeiramedida=segundamedida)e(segundamedida=terceiramedida) então
         mensag<-"É um triângulo Equilátero"
      senão
         se(primeiramedida=segundamedida) ou (segundamedida=terceiramedida) ou (terceiramedida=primeiramedida)então
            mensag<-"É um triângulo Isósceles"
         senão
            mensag<-"É um triângulo Escaleno"
         fimse
      fimse
   senão
      mensag<-"Impossível formar um triângulo"
   fimse
   Escreva(mensag)
Fimalgoritmo