Algoritmo "Exercicio49Faccat"
//
//
// Disciplina: Lógica de Programação com JavaScript
// Professor: Jailson Costa dos Santos
// Descrição   : Escreva um algoritmo para ler as notas da 1a. e 2a.
// avaliações de um aluno, calcule e imprima a média (simples) desse
//aluno. Só devem ser aceitos valores válidos durante a leitura (
//0 a 10) para cada nota.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 07/09/2026
// Seção de Declarações das variáveis
Var
   notaum:real
   notadois:real
   mediasimples:real
   resposta:caracter

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("Média Simples")
   Escreva("Digite a primeira nota do aluno: ")
   leia(notaum)
   Escreva("Digite a segunda nota do aluno: ")
   leia(notadois)
   se (notaum>=0) e (notaum<=10) e (notadois>=0) e (notadois<=10)  então
      mediasimples<- (notaum+notadois)/2
      Escreval("A média de notas do aluno é: ",mediasimples)
   senão
      Escreval("Ambas as notas devem ser maior que 0 e menor que 10 ")
   fimse
   
   Escreval("Deseja fazer novo cáculo? -> S/N ")
   leia(resposta)
   se (resposta <> "N") e (resposta <> "S") então
      Escreva("Resposta inválida.")
   fimse
   
   enquanto resposta = "S" faça
      Escreva("Digite a primeira nota do aluno: ")
      leia(notaum)
      Escreva("Digite a segunda nota do aluno: ")
      leia(notadois)
      se (notaum>=0) e (notaum<=10) e (notadois>=0) e (notadois<=10)  então
         mediasimples<- (notaum+notadois)/2
         Escreval("A média de notas do aluno é: ",mediasimples)
      senão
         Escreval("Ambas as notas devem ser maior que 0 e menor que 10 ")
      fimse
   Escreval("Deseja fazer novo cáculo? -> S/N ")
   leia(resposta)
   se (resposta <> "N") e (resposta <> "S") então
      Escreva("Resposta inválida.")
   fimse
fimenquanto


Fimalgoritmo
fimse