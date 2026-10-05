/*Faça um algoritmo para ler: quantidade atual em
//estoque, quantidade máxima em estoque e quantidade mínima em
//estoque de um produto. Calcular e escrever a quantidade média
//((quantidade média = quantidade máxima + quantidade mínima)/2).
//Se a quantidade em estoque for maior ou igual a quantidade média
//escrever a mensagem 'Não efetuar compra', senão escrever a
//mensagem 'Efetuar compra'.*/


alert("Programa Estoque: Quantidade Máxima,Quantidade Mínima e Média")
let estoqueatual, estoquemax, estoquemin, quantimedio
estoqueatual = parseInt(prompt("Digite a quantidade atual de seu estoque: "))
estoquemax = parseInt(prompt("Digite a quantidade máxima de seu estoque: "))
estoquemin = parseInt(prompt("Digite a quantidade mínima de seu estoque; "))
quantimedio = (estoquemax + estoquemin) / 2
if (estoqueatual >= quantimedio) {
    alert("Não Efetuar Compra")
}
else {
    alert("Efetuar Compra")
}
