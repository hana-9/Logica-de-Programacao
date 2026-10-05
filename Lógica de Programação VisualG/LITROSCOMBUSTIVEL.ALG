Algoritmo "LitrosCombustivel"
// 
//  Professor: Jailson Costa dos Santos
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 31/08/2026
Var
// Seção de Declarações das variáveis 
velocidade:real
temp:real
distancia:real
litros_usados:real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
Escreval("LitrosCombustivel")
Escreva("Digite a velocidade média do seu carro: ")
leia(velocidade)
Escreva("Digite o tempo gasto em horas: ")
leia(temp)
distancia<- temp*velocidade
litros_usados<- distancia/12 //12 km é o gasto por litro do carro
Escreval("A distância percorrida é: ",distancia)
Escreva("A quantidade de litros usados é: ",litros_usados:2:2)

Fimalgoritmo