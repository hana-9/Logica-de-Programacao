//L04B: b) Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500.

alert("somatorioPares")
let contador, somatorio
contador = 0
somatorio = 0

do {

    contador = contador + 1

    if (contador % 2 == 0) {
        somatorio = somatorio + contador
        console.log(`Contador: ${contador}, Somatório dos números pares: ${somatorio}`)
    }
    else {
        somatorio = somatorio
        console.log(`Contador: ${contador}`)
    }

}
while (contador < 500)