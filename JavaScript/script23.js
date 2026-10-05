//L03J
/*
Elaborar um programa que apresente os resultados da soma e da média
aritmética dos valores pares situados na faixa numérica de 50 a 70.
*/
alert("Números Pares Entre 50 e 70")

let contador, soma, media, elementos
contador = 50
soma = 0
media = 0
elementos = 11
while (contador < 71) {
    if (contador % 2 == 0) {
        soma = soma + contador
        console.log(`O numero está em ${contador}`)
    }
    media = soma / elementos
    contador = contador + 1
}
console.log(`A soma de todos é ${soma} e a média é ${media.toFixed(2, 2)}`)