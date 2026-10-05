//Solicitar valor de salário mensal atual de um funcionário,
//  o percentual de reajuste, e calcular o novo valor desse salário.

alert("Programa ReajusteSalario")
let salario, reajuste, calculo, novo

salario = parseFloat(prompt("Digite o salário atual do funcionário: "))
reajuste = parseFloat(prompt("Digite o valor o percentual do reajuste: "))
calculo = (salario * reajuste) / 100
novo = salario + calculo
alert(`O novo valor do salário do funcionário é: R$${novo.toFixed(2, 2)}`)