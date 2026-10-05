/*um algoritmo para ler o número total de eleitores de um município, o número de votos
brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total
de eleitores.*/

alert(" Programa votosPercentual ")
let eleitores, votobranco, nulo, votos, perbranco, pernulo, pervotos
eleitores = parseFloat(prompt("Digite o número de eleitores: "))
votobranco = parseFloat(prompt("Digite o número de votos em branco: "))
nulo = parseFloat(prompt("Digite o número de votos nulos: "))
votos = parseFloat(prompt("Digite o número de votos válidos: "))
perbranco = (votobranco * 100) / eleitores
pernulo = (nulo * 100) / eleitores
pervotos = (votos * 100) / eleitores
console.log(`O número total de eleitores é: ${eleitores}`)
console.log(`O percentual do número de votos em branco é: ${perbranco.toFixed(2, 2)}%`)
console.log(`O percentual do número de votos nulos é: ${pernulo.toFixed(2, 2)}%`)
console.log(`O percentual do número de votos válidos é: ${pervotos.toFixed(2, 2)}%`)