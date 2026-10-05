/*Solicita o valor do custo de fábrica, calcula a porcentagem de
 do distribuidor e o imposto e depois gera o valor final do consumidor*/

alert("Programa CarroCusto")
let fabrica, distribuidor, imposto, consumidor

fabrica = parseFloat(prompt("Digite o valor do custo de fábrica: "))
distribuidor = parseFloat(prompt("Digite o percentual do distribuidor: "))
imposto = parseFloat(prompt("Digite o percentual do imposto: "))
consumidor = (fabrica * imposto) / 100 + (fabrica * distribuidor) / 100 + fabrica
alert(`O custo real do carro é: R$ ${consumidor.toFixed(3, 3)}`)