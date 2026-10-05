//Pedir a velocidade média e tempo gasto em horas
// para mostrar a distância percorrida


alert("Programa LitrosCombustivel")
let velocidade, temp, distancia, litrosUsados

velocidade = parseFloat(prompt("Digite a velocidade média do seu carro: "))
temp = parseFloat(prompt("Digite o tempo gasto em horas: "))
distancia = temp * velocidade
litrosUsados = distancia / 12 //12 km é o gasto por litro do carro
alert(`A distância percorrida é: ${distancia.toFixed(2,2)}Km` )
alert(`A quantidade de litros usados é: ${litrosUsados.toFixed(2,2)}L`)