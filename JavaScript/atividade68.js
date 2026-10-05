/*Tendo como dados de entrada o nome, a altura e o sexo (M ou F)
de uma pessoa, calcule
e mostre seu peso ideal, utilizando as seguintes fórmulas:
- para sexo masculino: peso ideal = (72.7 * altura) - 58
- para sexo feminino: peso ideal = (62.1 * altura) - 44.7*/

alert("Programa de Peso Ideal")
let nome, sexo, altura, pesoideal

nome = prompt("Digite seu nome: ")

sexo = prompt("Digite seu sexo (M ou F): ")

altura = parseFloat(prompt("Digite sua altura (use ponto ao invés de vírgula): "))

if (sexo == "M") {
    pesoideal = (72.7 * altura) - 58
    alert(`Olá ${nome}! Seu peso ideal é: ${pesoideal}Kg"`)
}
else if (sexo == "F") {
    pesoideal = (62.1 * altura) - 44.7
    alert(`Olá ${nome}! Seu peso ideal é: ${pesoideal}Kg"`)
}
else{
    alert("resposta inválida")
}

