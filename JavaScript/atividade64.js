//Solicita valores em farenheit e converte para Celsius

alert("Programa farenheitCelsius")
let farenheit, celsius

farenheit = parseFloat(prompt("Digite o valor em Farenheit: "))
celsius = (farenheit - 32) / 9 * 5
alert("O valor em Celsius é: " + celsius.toFixed(2, 2))