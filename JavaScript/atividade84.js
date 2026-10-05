//Faça um algoritmo para ler as 3 notas obtidas por um
//aluno nas 3 verificações e a média dos exercícios que fazem parte
// da avaliação. Calcular a média de aproveitamento, usando a fórmula abaixo
//e escrever o conceito do aluno de acordo com a tabela de conceitos
//mais abaixo:
//N1 + N2 * 2 + N3 * 3 + Média_dos_Exercícios
//Média_de_Aproveitamento = ---------------------------------------------------------
//7

alert("Programa Média de Aproveito com 3 Notas de um Aluno")
let primeiraNota, segundaNota, terceiraNota, mediaExercicios, mediaDeAproveitamento, conceito

primeiraNota = parseFloat(prompt("Digite a primeira nota do aluno: "))
segundaNota = parseFloat(prompt("Digite a segunda nota do aluno:"))
terceiraNota = parseFloat(prompt("Digite a terceira nota do aluno:"))
mediaExercicios = parseFloat(prompt("Digite a nota da média de exercícios do aluno:"))
mediaDeAproveitamento = (primeiraNota + segundaNota * 2 + terceiraNota * 3 + mediaExercicios) / 7
if (mediaDeAproveitamento > 8.0) {
   conceito = "A"
}
else if (mediaDeAproveitamento >= 7.5 && mediaDeAproveitamento < 9.0) {
   conceito = "B"
}
else if (mediaDeAproveitamento > 6.0 && mediaDeAproveitamento < 7.5) {
   conceito = "C"
}
else if (mediaDeAproveitamento < 6.0) {
   conceito = "D"
}
alert(`A média de aproveitamento do aluno é ${mediaDeAproveitamento.toFixed(2, 2)}, o conceito é: ${conceito}`)