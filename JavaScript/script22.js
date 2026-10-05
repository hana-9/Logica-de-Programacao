/*
Exercício H Manzano 5.1.1 Lista 3
Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de
10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O
programa deve apresentar os valores das duas temperaturas. Sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.

*/

alert("graus_10Farenheit")

let  fahrenheit, celsius

celsius = parseInt(0)


while (celsius < 101) {

    if (celsius == 0) {
        fahrenheit = 32
        }

    alert(`A medida em graus Celsius é ${celsius} e a medida em graus Fahrenheit é ${fahrenheit}`)
    celsius += 10
    fahrenheit = parseFloat(celsius * [9 / 5] + 32)

}
location.reload()
