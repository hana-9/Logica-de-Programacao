//Exercício 6 - Solicitar medidas de altura e base de rentâgulo, calcular área e mostrar essa área

alert("Área de Retângulo")
let base, altura, area

altura = parseFloat(prompt("Digite a altura do retângulo "))
base = parseFloat(prompt("Agora digite a base do retângulo "))
area = base * altura
alert(`A área do retângulo é: ${area} metros quadrados`)