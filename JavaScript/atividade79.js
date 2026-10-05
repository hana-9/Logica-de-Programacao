// Escreva um algoritmo que leia o número de litros
//vendidos e o tipo de combustível (codificado da seguinte forma:
//A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo
//cliente sabendo-se que o preço do litro da gasolina é R$ 3,30 e
//o preço do litro do álcool é R$ 2,90..



alert("Programa Valor da Gasolina e Álcool Com Desconto")
let combustivel, litros, desconto, valorgasolina, valoralcool
alert("Digite A Opção de Combustível Desejada:")
alert("A - Álcool")
alert("G - Gasolina")
combustivel = prompt("")
switch (combustivel) {
    case "A": case "a":
        litros = parseFloat(prompt("Você escolheu Álcool, digite a quantidade de litros desejado:"))
        if (litros < 21) {
            desconto = 2.90 - (2.90 * 3) / 100
            valoralcool = litros * desconto
            alert(`O valor total é: R$${valoralcool.toFixed(2, 2)} reais`)
        }
        else {
            desconto = 2.90 - (2.90 * 5) / 100
            valoralcool = litros * desconto
            alert(`O valor total é: R$${valoralcool.toFixed(2, 2)} reais`)
        }
        break

    case "G": case "g":
        litros = parseFloat(prompt("Você escolheu Gasolina, digite a quantidade de litros desejado: "))
        if (litros <= 20) {
            desconto = 3.30 - (3.30 * 4) / 100
            valorgasolina = litros * desconto
            alert(`O valor total é: R$${valorgasolina.toFixed(2, 2)} reais`)
        }
        else {
            desconto = 3.30 - (3.30 * 6) / 100
            valorgasolina = litros * desconto
            alert(`O valor total é: R$${valorgasolina.toFixed(2, 2)} reais`)
        }
        break

    default:
        alert("Resposta inválida")
}

