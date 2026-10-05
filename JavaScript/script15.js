/*
5. Menu de Fast Food
Apresente um menu com os códigos dos produtos:

100: Cachorro-quente

101: Bauru simples

102: Bauru com ovo

103: Hambúrguer

104: Cheeseburguer
Peça para digitar o código e informe o nome do item escolhido e seu preço.
*/

alert("FastFood")

alert("Bem-vindo ao nosso FoodProgram!")

let codigobarra = parseInt(prompt("Digite o código do produto desejado:"))

switch (codigobarra) {
    case 100:
        alert("Cachorro-quente")
        break

    case 101:
        alert("Bauru simples")
        break

    case 102:
        alert("Bauru com ovo")
        break

    case 103:
        alert("Hambúrguer")
        break
    case 104:
        alert("Cheeseburguer")
        break
    default:
        alert("Código não correspondente")

}