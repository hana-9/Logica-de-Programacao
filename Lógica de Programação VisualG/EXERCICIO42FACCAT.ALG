Algoritmo "Exercicio42Faccat"
//
// Professor: Jailson Costa dos Santos
// Descrição   : Uma empresa quer verificar se um empregado está
//qualificado para a aposentadoria ou não. Para estar em condições,
//um dos seguintes requisitos deve ser satisfeito:
//- Ter no mínimo 65 anos de idade.
//- Ter trabalhado no mínimo 30 anos.
//- Ter no mínimo 60 anos e ter trabalhado no mínimo 25 anos.
//Com base nas informações acima, faça um algoritmo que leia: o
//número do empregado (código), o ano de seu nascimento e o ano de
//seu ingresso na empresa. O programa deverá escrever a idade e o
//tempo de trabalho do empregado e a mensagem 'Requerer aposentadoria
//' ou 'Não requerer'.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 05/09/2026
Var
   // Seção de Declarações das variáveis
   codigoempresa:inteiro
   anonascimento:inteiro
   anoingresso:inteiro
   idade:inteiro
   tempotrabalho:inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("Aposentadoria")
   Escreva("Digite o código da empresa: ")
   leia(codigoempresa)
   Escreva("Digite o seu ano de nascimento: ")
   leia(anonascimento)
   Escreva("Digite o ano que você ingressou  na empresa: ")
   leia(anoingresso)
   idade<- 2026-anonascimento
   tempotrabalho<- 2026- anoingresso
   se  codigoempresa=3210 então
      se  (idade>=65)ou (tempotrabalho>=30)então
         Escreva("Idade: ",idade,", tempo de trabalho:",tempotrabalho,". Resposta: Requerer aposentadoria")
      senão
         se  (idade>=60) e (tempotrabalho>=25) então
                   Escreva("Idade: ",idade,", tempo de trabalho:",tempotrabalho,". Resposta: Requerer aposentadoria")
         senão
                   Escreva("Idade: ",idade,", tempo de trabalho:",tempotrabalho,". Resposta: Não Requerer")
         fimse
      fimse
   senão
      Escreva("Código inválido")
   fimse








Fimalgoritmo