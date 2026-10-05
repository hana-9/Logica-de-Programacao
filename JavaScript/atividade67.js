/*Ler o salário fixo e o valor das vendas efetuadas pelo vendedor
de uma empresa. Sabendo-se que
ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que
ultrapassar este valor, calcular e escrever o seu salário total.*/

alert("Salário e Comissão de Funcionário")

salariofixo = parseFloat(prompt("Digite o valor mensal do salário: "))

valorvendas = parseFloat(prompt("Digite o valor das vendas do funcionário: "))

if (valorvendas > 1500) {
    comissao = (valorvendas * 3 / 100) + (valorvendas * 5 / 100)
    salariototal = salariofixo + comissao
    alert("O salário do funcionário mais a comissão é: " + salariototal.toFixed(2, 2))
}
else {
    comissao = (valorvendas * 3) / 100
    salariototal = salariofixo + comissao
    alert("O salário do funcionário mais a comissão é: " + salariototal.toFixed(2, 2))
}
