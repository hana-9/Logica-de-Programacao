/*
7. Plano de Aumento Salarial
Solicite o salário atual do funcionário e o plano de trabalho (A, B ou C):

A: Aumento de 10%

B: Aumento de 15%

C: Aumento de 20%
Calcule e exiba o novo salário.
*/

alert("PlanoAumento")
let salario, plano, aumento, novosalario

salario = parseFloat(prompt("Digite o valor do seu salário: "))
alert("Agora digite a letra correspondente ao seu plano:")
plano = prompt("A: Aumento de 10% , B: Aumento de 15% , C: Aumento de 20%")

switch (plano) {
    case "A": case "a":
        aumento = (salario * 10) / 100
        novosalario = aumento + salario
        alert(`O seu novo salário é ${novosalario.toFixed(2)}`)
        break

    case "B": case "b":
        aumento = (salario * 15) / 100
        novosalario = aumento + salario
        alert(`O seu novo salário é ${novosalario.toFixed(2)}`)
        break

    case "C": case "c":
        aumento = (salario * 20) / 100
        novosalario = aumento + salario
        alert(`O seu novo salário é ${novosalario.toFixed(2)}`)
        break
    default:
        alert("Letra inválida")
}