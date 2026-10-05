Algoritmo "L04J"
//  
//  
// 
//  
// Disciplina: Lógica de Programação com JavaScript
// Professor: Jailson Costa dos Santos
// Descrição   : Elaborar um programa que apresente o resultado
//inteiro da divisão de dois números quaisquer.Para a elaboração do
//programa, não utilizar em hipótese alguma o conceito do operador
//aritmético DIV. A solução deve ser alcançada com a utilização de
//looping. Ou seja, o programa deve apresentar como resultado
//(quociente) quantas vezes o divisor cabe no dividendo.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 24/09/2026
Var
// Seção de Declarações das variáveis 
contador:inteiro
dividendo:real
divisor:real
divisao:real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
Escreval("Programa Divisão")

contador <- 0
Escreval("Digite o primeiro número (Dividendo)")
leia(dividendo)
Escreval("Digite o segundo número (Divisor)")
leia(divisor)

repita
    contador <- contador + 1
    divisao <- contador * divisor
    Escreval("O contador está em ",contador," e a divisão está em ",divisao)

ate divisao = dividendo
Escreval("O resultado dessa divisão é: ",contador)

Fimalgoritmo