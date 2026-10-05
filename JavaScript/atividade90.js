//Escreva um algoritmo para ler as notas da 1a. e 2a.
// avaliações de um aluno, calcule e imprima a média (simples) desse
//aluno. Só devem ser aceitos valores válidos durante a leitura (
//0 a 10) para cada nota.


alert("Programa Média Simples")
let notaUm, notaDois, mediaSimples, resposta

notaUm = parseFloat(prompt("Digite a primeira nota do aluno: "))
notaDois = parseFloat(prompt("Digite a segunda nota do aluno: "))
if (notaUm > -1 && notaUm < 11 && notaDois > -1 && notaDois < 11) {
    mediaSimples = (notaUm + notaDois) / 2
    alert("A média de notas do aluno é: " + mediaSimples)
}
else {
    alert("Ambas as notas devem ser maior que 0 e menor que 10 ")
}

resposta = prompt("Deseja fazer novo cáculo? -> S/N ")

if (resposta == "S" || resposta == "s") {
    alert("Resposta foi Sim")
}
else if (resposta == "N" || resposta == "n") {
    alert("Encerrando o programa")
}
else {
    alert("Resposta inválida")
}

while (resposta == "S" || resposta == "s") {

    notaUm = parseFloat(prompt("Digite a primeira nota do aluno: "))
    notaDois = parseFloat(prompt("Digite a segunda nota do aluno: "))
    if (notaUm > -1 && notaUm < 11 && notaDois > -1 && notaDois < 11) {
        mediaSimples = (notaUm + notaDois) / 2
        alert("A média de notas do aluno é: " + mediaSimples)
    }
    else {
        alert("Ambas as notas devem ser maior que 0 e menor que 10 ")
    }
    resposta = prompt("Deseja fazer novo cáculo? -> S/N ")

    if (resposta == "S" || resposta == "s") {
        alert("Resposta foi Sim")
    }
    else if (resposta == "N" || resposta == "n") {
        alert("Encerrando o programa")
    }
    else {
        alert("Resposta inválida")
    }


}