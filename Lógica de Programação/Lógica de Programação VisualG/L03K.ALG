Algoritmo "L03K"
//
//
// Disciplina: Lógica de Programação com JavaScript
// Professor: Jailson Costa dos Santos
// Descrição   : Elaborar um programa que possibilite calcular a área
// total de uma residência (sala, cozinha, banheiro, quartos, área
//de serviço, quintal, garagem, etc.). O programa deve solicitar a
// entrada do nome, a largura e o comprimento de um determinado
//cômodo. Em seguida, deve apresentar a área do cômodo lido e também
//uma mensagem solicitando do usuário a confirmação de continuar
//calculando novos cômodos. Caso o usuário responda “NAO”, o programa
// deve apresentar o valor total acumulado da área residencial.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   nome:caracter
   largura:inteiro
   comprimento:inteiro
   area:real
   resposta:caracter
   acumulado:real
Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("Programa areaComodos")
   Escreval("Deseja começar?")
   Escreval("Sim     ou     Não")
   leia(resposta)

   enquanto (resposta = "SIM") ou (resposta = "Sim") ou (resposta = "sim") faca

      Escreval("Digite o nome do cômodo desejado:")
      leia(nome)
      Escreval("Digite a largura do cômodo:")
      leia(largura)
      Escreval("Digite o comprimento: ")
      leia(comprimento)

      area <- comprimento * largura

      Escreval("O seu cômodo ",nome," tem a área total de ",area:2:2, " metros quadrados")

      Escreval("Deseja continuar?")

      Escreval("Sim     ou     Não")

      leia(resposta)

      se (resposta = "SIM") ou (resposta = "Sim") ou (resposta = "sim") entao


         acumulado<- acumulado + area
      fimse


   fimenquanto

   se (resposta = "NÃO") ou (resposta = "Não") ou (resposta = "não") entao
      acumulado<- acumulado + area
      Escreval("A sua casa tem a área total de ",acumulado:2:2," metros quadrados")

   senao
      Escreval("Resposta Inválida")

   fimse

Fimalgoritmo