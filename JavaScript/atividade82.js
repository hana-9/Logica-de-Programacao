//Se o cliente comprar mais de 8 Kg em frutas ou
//o valor total da compra ultrapassar R$ 25,00, receberá ainda
//um desconto de 10% sobre este total. escreva um algoritmo para ler
// a quantidade (em Kg) de morangos e a quantidade (em Kg) de maças
//adquiridas e escreva o valor a ser pago pelo cliente.


alert("Programa Valor da Compra de Frutas")
let kgMorangos, valorMorangos, kMacas, valorMacas, valorTotal, kgTotal, desconto

kMacas = parseInt(prompt("Digite a quantidade em kg de maçãs:"))
kgMorangos = parseInt(prompt("Digite a quantidade em kg de morangos:"))

if (kMacas > 5) {
    valorMacas = (kMacas * 1.50)
}
else {
    valorMacas = (kMacas * 1.80)
}

if (kgMorangos > 5) {
    valorMorangos = (kgMorangos * 2.20)
}
else {
    valorMorangos = (kgMorangos * 2.50)
}

kgTotal = kMacas + kgMorangos
valorTotal = valorMacas + valorMorangos
if (kgTotal > 8 || valorTotal > 25) {
    desconto = (valorTotal * 10) / 100
    valorTotal = valorTotal - desconto
}
alert(`O valor da sua compra é: R$${valorTotal} e de fruta: ${kgTotal}Kg`)