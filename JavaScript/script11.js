alert("DesafioDeTrimestres")
let dia, mes, estacao, trimestre
dia = parseInt(prompt("Digite um dia"))
mes = parseInt(prompt("Digite o mês"))

switch (mes) {
    case 1: case 2: case 3:
        trimestre = "primeiro trimestre"
        break

    case 4: case 5: case 6:
        trimestre = "segundo trimestre"
        break
    case 7: case 8: case 9:
        trimestre = "terceiro trimestre"
        break
    case 10: case 11: case 12:
        trimestre = "quarto trimestre"

}

switch (true) {
    case (mes == 12 && dia > 21 || mes == 1 || mes == 2 || mes == 3 && dia < 21):
        estacao = "Verão"
        break
    case (mes == 3 && dia > 20 || mes == 4 || mes == 5 || mes == 6 && dia < 21):
        estacao = "Outono"
        break
    case (mes == 6 && dia > 20 || mes == 7 || mes == 8 || mes == 9 && dia < 22):
        estacao = "Inverno"
        break
    case (mes == 9 && dia > 21 || mes == 10 || mes == 11 || mes == 12 && dia < 21):
        estacao = "Primavera"
        break
    default:
        estacao = "Não existe estação correspondente"
}
  alert(`É ${trimestre} e a estação é ${estacao}`)