Algoritmo "Exercicio25Faccat"
// 
// Professor: Jailson Costa dos Santos
// Descrição   : Faça um algoritmo para ler: número da conta do cliente,
//saldo, débito e crédito. Após, calcular e escrever o saldo atual
//(saldo atual = saldo - débito + crédito). Também testar se saldo
//atual for maior ou igual a zero escrever a mensagem
//'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 02/09/2026
Var
// Seção de Declarações das variáveis 
conta:inteiro
saldo:real
debito:real
credito:real
saldoatual:real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
Escreval("Conta do Banco, Saldo, Débito e Crédito")
Escreva("Digite o número da sua conta: ")
leia(conta)
Escreva("Digite o valor do seu saldo: ")
leia(saldo)
Escreva("Digite o valor do seu debito: ")
leia(debito)
Escreva("Digite o valor do seu credito:")
leia(credito)
saldoatual<- (saldo-debito)+credito
se(saldoatual>=0) então
Escreval("Valor do seu saldo:R$",saldoatual,". Saldo Positivo.")
senão
Escreval("Valor do seu saldo:R$",saldoatual,". Saldo Negativo.")
fimse

Fimalgoritmo