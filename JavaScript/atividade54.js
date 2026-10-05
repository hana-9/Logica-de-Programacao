//Pergunta o número de maçãs, faz um cálculo e entrega o custo de maçãs

alert("CustoMacas")

let macas, custo

macas = parseInt(prompt("Quantas maçãs você irá comprar? "))

if (macas > 11) {
    custo = 1.00 * macas
}
else {
    custo = 1.30 * macas
}


alert(`O custo total de maçãs é de: ${custo.toFixed(2, 2)} reais`)