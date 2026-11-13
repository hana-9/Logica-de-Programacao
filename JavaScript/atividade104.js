/*62) Ler o número de alunos existentes em uma turma e, após isto, ler as notas destes alunos, calcular e
escrever a média aritmética dessas notas lidas.*/

alert("Programa alunosNotasMedia")

let alunos, contador, notas, notasTotal, media

notasTotal = 0

alunos = parseInt(prompt("Digite o número de alunos:"))


for (contador = 0; contador < alunos; contador++) {
    notas = parseFloat(prompt("Digite a nota de cada aluno: "))
    notasTotal = notasTotal + notas
}
media = notasTotal / alunos

alert(`A soma da nota total dos alunos é ${notasTotal.toFixed(2, 2)} e a média é ${media.toFixed(2, 2)}`)