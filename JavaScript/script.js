alert("Salário com Reajuste de 5%")
let  salario = parseFloat(prompt("Digite o valor do seu salário: "))
let reajuste = parseFloat(prompt("Digite a porcentagem do reajuste: "))
let salarioReajuste = salario*reajuste/100
let salarioTotal = salarioReajuste+salario
alert("O valor do novo salário é:  " +  salarioTotal.toFixed(2))