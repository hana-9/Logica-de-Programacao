/*
10. Conversor de Temperaturas
Solicite uma temperatura em Celsius e permita ao usuário escolher a unidade de conversão:

1: Fahrenheit

2: Kelvin
Exiba o resultado da conversão com base na opção selecionada.

*/

alert("conversor_Temperatura")

let celsius, opcao, fahrenheit, kelvin

celsius = parseFloat(prompt("Digite o valor em celsius para a conversão: "))
alert("Digite o número que corresponda à opção desejada:")
opcao = parseInt(prompt(" 1 - Fahrenheit , 2 - Kelvin"))

switch (opcao) {
    case 1:
        fahrenheit = celsius * (9 / 5) + 32
        alert(`A sua opção foi Fahrenheit, sendo o valor da temperatura ${fahrenheit} °F`)
        break

    case 2:
        kelvin = celsius + 273.15
        alert(`A sua opção foi Kelvin, sendo o valor da temperatura ${kelvin} K`)
        break

    default:
        alert("Número indisponível")
}

location.reload()
