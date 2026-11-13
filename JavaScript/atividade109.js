/*68) Uma loja está levantando o valor 
total de todas as mercadorias em estoque. Escreva um algoritmo
que permita a entrada das seguintes informações:
 a) o número total de mercadorias no estoque; b) o
valor de cada mercadoria. Ao final imprimir o 
valor total em estoque e a média de valor das
mercadorias.


1- Entrada das informações: 
número de mercadoria e valor da cada mercadoria

2- Imprimir como resposta o valor total e a média de valor:
valor1 + valor2
      2
      
      */

alert("Programa mercadoriaEstoque")

let mercadoria, totalMercadoria, valor, valorTotal, resposta, mediaValor

valorTotal = 0
totalMercadoria = 0
mediaValor = 0



mercadoria = parseInt(prompt("Digite o número de mercadoria no estoque:"))
totalMercadoria = totalMercadoria + mercadoria
valor = parseInt(prompt("Digite o valor de cada mercadoria:"))
valorTotal = valorTotal + valor

resposta = prompt("Deseja continuar? - S ou N")

if (resposta == "S" || resposta == "s") {
    while (resposta == "S" || resposta == "s") {


        mercadoria = parseInt(prompt("Digite o número de mercadoria no estoque:"))
        totalMercadoria = totalMercadoria + mercadoria
        valor = parseFloat(prompt("Digite o valor de cada mercadoria:"))
        valorTotal = valorTotal + valor
        resposta = prompt("Deseja continuar? - S ou N")


        if (resposta == "N" || resposta == "n") {
            mediaValor = valorTotal / totalMercadoria
            alert(`O valor total da mercadoria é ${valorTotal} e a média de valor é R$ ${mediaValor.toFixed(2,2)}`)
        }
        else if (resposta != "N" && resposta != "n" && resposta != "S" && resposta != "s"){
             alert("Resposta inválida")
        }
    }
}
else if (resposta == "N" || resposta == "n") {

    mediaValor = valorTotal / totalMercadoria
    alert(`O valor total da mercadoria é ${valorTotal} e a média de valor é R$ ${mediaValor.toFixed(2,2)}`)

}
else {
    alert("Resposta inválida")
}

