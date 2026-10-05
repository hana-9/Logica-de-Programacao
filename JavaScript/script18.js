/*
8. Conceito de Notas Escolares
Peça para o usuário digitar uma letra representando o c
onceito obtido em uma avaliação 
(A, B, C, D ou F) e exiba a mensagem correspondente 
(ex: A -> "Excelente", B -> "Ótimo", C -> "Bom", etc.).

*/

alert("notas_Conceito")
let conceito
let letra = prompt("Digite a letra correspondente à nota do aluno: ")

switch (letra) {
    case "A": case "a":
        conceito = "Excelente"
        alert("O conceito da nota do aluno é " + conceito)
        break

    case "B": case "b":
        conceito = "Ótimo"
        alert("O conceito da nota do aluno é " + conceito)
        break

    case "C": case "c":
        conceito = "Bom"
        alert("O conceito da nota do aluno é " + conceito)
        break

    case "D": case "d":
        conceito = "Ruim"
        alert("O conceito da nota do aluno é " + conceito)
        break

    case "F": case "f":
        conceito = "Péssimo"
        alert("O conceito da nota do aluno é " + conceito)
        break

    default:
        alert("Letra inválida")

}
location.reload()
