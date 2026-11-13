/*b) Ler o valor correspondente ao salário mensal (variável SM) de um
 trabalhador e também o valor do
percentual de reajuste (variável PR) a ser atribuído. 
Apresentar o valor do novo salário (variável NS).*/


alert("Programa salarioReajuste")

let salarioMensal, percentual, novoSalario

salarioMensal = parseFloat(prompt("Digite o valor do salário mensal"))

percentual = parseFloat(prompt("Digite o valor do percentual"))

novoSalario = (salarioMensal * percentual) / 100 + salarioMensal

alert(`O novo salário com o reajuste é: ${novoSalario}`)