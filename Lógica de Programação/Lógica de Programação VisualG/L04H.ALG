Algoritmo "L04H"

// Disciplina: Lógica de Programação com JavaScript
// Professor: Jailson Costa dos Santos
// Descrição   : Elaborar um programa que possibilite calcular a área
//total de uma residência (sala, cozinha, banheiro, quartos, área de
// serviço, quintal, garagem, etc.). O programa deve solicitar a
//entrada do nome, a largura e o comprimento de um determinado cômodo.
//Em seguida, deve apresentar a área do cômodo lido e também uma
//mensagem solicitando do usuário a confirmação de continuar
//calculando novos cômodos. Caso o usuário responda “NAO”, o
//programa deve apresentar o valor total acumulado
//da área residencial.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   nomecomodo:caracter
   largura:real
   comprimento:real
   area:real
   resposta:caracter
   acumulaArea:real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...


   acumulaArea <- 0

      Escreval("Deseja começar?")
      Escreval("Sim , Não")
      leia(resposta)
      
   enquanto (resposta = "Sim") ou (resposta = "SIM") ou (resposta = "sim") faca
      Escreval("Digite o nome do cômodo desejado")
      leia(nomecomodo)
      Escreval("Digite a largura deste cômodo")
      leia(largura)
      Escreval("Digite o comprimento desse cômodo")
      leia(comprimento)
      area <- largura * comprimento

      Escreval("O seu comodo ",nomecomodo," possui a área de ",area," metros quadrados")
      Escreval("Deseja continuar?")
      Escreval("Sim , Não")
      leia(resposta)
      acumulaArea <- acumulaArea + area

   fimenquanto

   se (resposta = "Não") ou (resposta = "NÃO") ou (resposta = "não") entao
      Escreval("A área da sua casa é ",acumulaArea," metros quadrados")
   fimse

Fimalgoritmo