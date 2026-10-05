//L03C
/*Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de
1 até 500.*/

alert("Soma dos Pares de 1 a 500")
let contador, soma

contador = 0
soma = 2

while (contador < 501) {
    contador = contador + 1
    console.log(`O número é ${contador} a soma dos pares é ${soma}`)
    if (contador % 2 == 0) {
        soma = soma + contador
    }
    else {
        continue
    }


}