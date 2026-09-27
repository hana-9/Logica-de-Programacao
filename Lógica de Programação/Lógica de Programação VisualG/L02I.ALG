Algoritmo "L02I"
// 
// Professor: Jailson Costa dos Santos
// Descrição   : Ler dois inteiros (variáveis A e B)
//e imprimir o resultado do quadrado da diferença
//do primeiro valor pelo segundo.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 01/09/2026
Var
// Seção de Declarações das variáveis 
primeiroValor:real
segundoValor:real
diferencaQuadrado:real
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
Escreval("Programa Diferença do Quadrado de 2 Números")
Escreval("Digite o primeiro número: ")
leia(primeiroValor)
Escreval("Digite o segundo número: ")
leia(segundoValor)
diferencaQuadrado<- (primeiroValor*primeiroValor)-(segundoValor*segundoValor)
Escreval("O valor da diferença do quadrado dos dois números digitados é: ",diferencaQuadrado)
Fimalgoritmo