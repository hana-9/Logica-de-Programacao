/*60) Faccat: Ler 10 valores e escrever quantos desses valores lidos 
estão no intervalo [10,20] (inlcuindo os
valores 10 e 20 no intervalo) e quantos deles 
estão fora deste intervalo.*/

alert("Programa lerValoresEntre10E20")

let numeroLido, contador, intervalo, fora

intervalo = 0
fora = 0

for (contador = 0; contador < 10; contador++) {

    numeroLido = parseInt(prompt("Digite um número inteiro:"))

    if (numeroLido > 9 && numeroLido < 21) {
        intervalo = intervalo + 1
    }
    else {
        fora = fora + 1
    }

}
alert(`A quantidade de números entre 10 e 20 é: ${intervalo} e o número fora desse intervalo é: ${fora}`)