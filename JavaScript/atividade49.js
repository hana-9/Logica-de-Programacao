/*Descrição   : Recebe duas notas de avaliação do aluno, calcula a
média aritmética e entrega a média de nota das duas avaliações */



alert("Programa aprovadoReprovado")
let avali1, avali2, media

media = 0

avali1 = parseFloat(prompt("Digite a primeira nota de avaliação do aluno: "))

avali2 = parseFloat(prompt("Digite a segunda nota de avaliação do aluno: "))

media = (avali1 + avali2) / 2

if (media >= 6) {
    alert(`A média do aluno é: ${media}`)
    alert("Está aprovado(a)!")
}
else {
    alert(`A média do aluno é: ${media}`)
    alert("Está Reprovado.")
}

