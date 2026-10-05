/*Recebe o valor do salário em horas do funcionário, horas
trabalhadas e o valor total do salário do funcionário.*/

alert("Calculador de Horas Extras e Salário Mensal")
let horastrabalhadas, valorhora, valorextra, extra, salariototal

horastrabalhadas = parseInt(prompt("Digite as horas trabalhadas durante o mês: "))

valorhora = parseFloat(prompt("Digite o valor de salário por horas trabalhadas: "))

if (horastrabalhadas > 160) {
    valorextra = (valorhora * 50) / 100
    extra = (horastrabalhadas - 160) * (valorhora + valorextra)
    salariototal = extra + (160 * valorhora)
    alert("O salário total com as horas extras é de: R$" + salariototal)
}
else {
    salariototal = (horastrabalhadas * valorhora)
    alert("O salário total é de: R$" + salariototal.toFixed(2,2))
}
