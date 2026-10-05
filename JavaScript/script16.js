/*
6. Dias do Mês
Solicite o número referente a um mês do ano (1 a 12) e informe a 
quantidade de dias que aquele mês possui (considere Fevereiro com 28 dias).
Dica: Lembre-se de que você pode agrupar vários case seguidos sem break 
para meses com a mesma quantidade de dias.

*/

alert("diasMeses")

let mes = parseInt(prompt("Digite o número correspondente ao mês desejado:"))

switch (mes) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        alert("Esse mês tem 31 dias")
        break
    case 4: case 6: case 9: case 11:
        alert("Esse mês tem 30 dias")
        break
    case 2:
        alert("Esse mês é fevereiro e tem 28 dias")
        break

    default:
        alert("Número inválido")
}