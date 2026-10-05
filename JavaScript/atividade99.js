// Solicita três notas de um aluno, calcula a média ponderada
//e entrega a nota final

alert("Programa MediaFinal")
let nota1,nota2,nota3,media
nota1 = parseFloat(prompt("Digite a nota 1 do aluno: "))
nota2 = parseFloat(prompt("Digite a nota 2 do aluno:"))
nota3 = parseFloat(prompt("Digite a nota 3 do aluno:"))
media= (2*nota1+3*nota2+5*nota3)/10
alert("A média de nota do aluno é: "+media)