Algoritmo "exercicio8Faccat"
//
//  Professor: Jailson Costa dos Santos
// Descrição   : um algoritmo para ler o número total de eleitores de um município, o número de votos
//brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total
//de eleitores.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 30/08/2026
Var
   // Seção de Declarações das variáveis
   eleitores:real
   votobranco:real
   nulo:real
   votos:real
   perbranco:real
   pernulo:real
   pervotos:real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval(" Programa VotosPercentual ")
   Escreva("Digite o número de eleitores: ")
   leia(eleitores)
   Escreva("Digite o número de votos em branco: ")
   leia(votobranco)
   Escreva("Digite o número de votos nulos: ")
   leia(nulo)
   Escreva("Digite o número de votos válidos: ")
   leia(votos)
   perbranco<- (votobranco*100)/eleitores
   pernulo<-   (nulo*100)/eleitores
   pervotos<-  (votos*100)/eleitores
   Escreval("O número total de eleitores é: ",eleitores)
   Escreval("O percentual do número de votos em branco é: ",perbranco:2:2,"%")
   Escreval("O percentual do número de votos nulos é: ",pernulo:2:2,"%")
   Escreval("O percentual do número de votos válidos é: ",pervotos:2:2,"%")



Fimalgoritmo