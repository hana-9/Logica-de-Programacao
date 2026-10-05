//Faça um algoritmo para ler: a descrição do produto
// (nome), a quantidade adquirida e o preço unitário. Calcular e
//escrever o total (total = quantidade adquirida * preço unitário),
//o desconto e o total a pagar (total a pagar = total - desconto),
//sabendo-se que:
//- Se quantidade <= 5 o desconto será de 2%
//- Se quantidade > 5 e quantidade <=10 o desconto será de 3%
//- Se quantidade > 10 o desconto será de 5%



alert("Programa Produtos, Preço Unitário e Desconto")
let quantidadeProduto, nomeProduto, precoUnitario, desconto, valorTotal

nomeProduto = prompt("Digite o nome do produto: ")
quantidadeProduto = parseInt(prompt("Digite a quantidade do produto:"))
precoUnitario = parseFloat(prompt("Digite o preço unitário do produto:"))
if (quantidadeProduto < 6) {
    desconto = (precoUnitario * 2) / 100
}
else if (quantidadeProduto > 5 && quantidadeProduto < 11) {
    desconto = (precoUnitario * 3) / 100
}
if (quantidadeProduto > 10) {
    desconto = (precoUnitario * 5) / 100
}
valorTotal = (quantidadeProduto * precoUnitario) - desconto
alert(`O valor a ser pago é: R$${valorTotal} reais`)

