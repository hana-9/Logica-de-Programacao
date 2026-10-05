/*solicita o valor fixo do salário, o valor fixo da comissão,
 o número de carros vendidos e a porcentagem adicional da comissão e depois
 mostra o novo salário do vendedor*/

alert("Programa vendedorSalario")
let salario, vendas, comissao, carros, porcentagem, calcomissao, calculoper, novo

salario = parseFloat(prompt("Digite o salário fixo do vendedor: "))

vendas = parseFloat(prompt("Digite o valor total das vendas: "))

comissao = parseFloat(prompt("Digite o valor fixo da comissão: "))
carros = parseInt(prompt("Digite o número de carros vendidos pelo vendedor: "))
porcentagem = parseFloat(prompt("Digite o percentual do valor das vendas: "))
calcomissao = carros * comissao
calculoper = (vendas * porcentagem) / 100
novo = salario + calcomissao + calculoper
alert("O salário deste funcionário é: " + novo.toFixed(4, 2))