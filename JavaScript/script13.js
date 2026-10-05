/*
2. Conversor de Moedas
Peça o valor em Reais (R$) e um número de 1 a 3 para escolher a moeda de destino:

1: Dólar

2: Euro

3: Libra
Exiba o valor convertido (considere taxas fixas hipotéticas para o cálculo).
*/

alert("ConversorMoedas")

let valor, moeda, resultado

valor = parseFloat(prompt("Digite o valor em reais para ser convertido: "))
alert("Agora digite  o número da opção desejada: ")
moeda = parseInt(prompt("1- Dólar ,  2- Euro ,   3- Libra"))
switch (moeda) {
    case 1:
        resultado = parseFloat(valor / 5.14)
        break
    case 2:
        resultado = parseFloat(valor / 5.95)
        break
    case 3:
        resultado = parseFloat(valor /6.54) 
    break

    default:
        alert("Número não correspondente")
}
alert(`O valor digitado em reais é ${valor} e o valor convertido é ${resultado.toFixed(2,2)}`)
location.reload()