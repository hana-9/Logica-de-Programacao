Algoritmo "L05F"
//
//
// Disciplina: Lógica de Programação com JavaScript
// Professor: Jailson Costa dos Santos
// Descrição   : Apresentar todos os números divisíveis por 4 que
//sejam menores que 200. Para verificar se o número é divisível
//por 4, efetuar dentro da malha a verificação lógica desta condição
//com a instrução se, perguntando se o número é divisível; sendo,
//mostre-o; não sendo, passe para o próximo passo. A variável que
//controlará o contador deve ser iniciada com o valor 1.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   contadora:inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("Programa Números Divisíveis Por 4")

   para contadora de 1 ate 200 faca
      se contadora % 4 = 0 entao
         Escreval("Número divisível por quatro: ",contadora)
         
      senao
            contadora <- contadora+1
         
      fimse
      
   fimpara

Fimalgoritmo