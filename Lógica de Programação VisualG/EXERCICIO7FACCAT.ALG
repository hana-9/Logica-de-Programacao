Algoritmo "exercicio7Faccat"
// Disciplina   : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Solicita a idade do usuário em anos,meses e dias
//e que escreva a idade apenas em dia
// Autor(a)    : Ana Paula
// Data atual  : 28/08/2026
Var
// Seção de Declarações das variáveis 
ano:real
mes:real
dia:real
idade:real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
Escreval("Idade")
Escreval("Digite sua idade por anos, meses e dias respectivamente")
Escreva("Digite o número de anos: ")
leia(ano)
Escreva("Digite o número de meses: ")
leia(mes)
Escreva("Digite o número de dias: ")
leia(dia)
idade<- (ano*365)+(mes*30)+ dia
Escreva("A sua idade em dias é: ",idade)

Fimalgoritmo