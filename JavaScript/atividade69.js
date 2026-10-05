/* Faça um algoritmo para ler: número da conta do cliente,
//saldo, débito e crédito. Após, calcular e escrever o saldo atual
//(saldo atual = saldo - débito + crédito). Também testar se saldo
//atual for maior ou igual a zero escrever a mensagem
//'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'.*/


Escreval("Programa Conta do Banco, Saldo, Débito e Crédito")
let conta,saldo,debito,credito,saldoatual

conta = parseInt(prompt("Digite o número da sua conta: "))
saldo = parseFloat(prompt("Digite o valor do seu saldo: "))
debito = parseFloat(prompt("Digite o valor do seu debito: "))
credito = parseFloat(prompt("Digite o valor do seu credito:"))
saldoatual = (saldo-debito)+credito
if (saldoatual>=0) {
alert(`Valor do seu saldo: R$${saldoatual}. Saldo Positivo.`)
}
else{
alert(`Valor do seu saldo:R$`,saldoatual,". Saldo Negativo.")
}
