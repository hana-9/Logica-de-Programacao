/*L04G Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares
situados na faixa numérica de 1 a 10.*/

/*
1 - Fazer o programa reconhecer os números ímpares
2 - Apresentar fatorial dos números impares entre 1 e 10: 9x7x5x3x1
*/
alert("Fatorial dos Números Ímpares de 1 a 10")
let contador, fatorial
contador = 0
fatorial = 1
for (contador = 1; contador < 10; contador++) {
    if (contador % 2 != 0){
    fatorial = parseFloat(fatorial * contador)
    }     
}
console.log(`O fatorial dos números ímpares de 1 a 10 é: ${fatorial}`)