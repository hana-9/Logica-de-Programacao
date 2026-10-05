/*L05B
Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.

1 - Declarar a váriavel contador, multiplicação e a váriavel número que receberá o valor do usuário
2 - Ler um número do usuário
3 - Fazer a tabuada desse número, fazendo ele ser multiplicado pelo contador até o décimo valor
4 - Mostrar o resultado montando a tabuada do jeito convencional

*/
alert("Programa Tabuada")

let numero, contador, multiplicacao

contador = 1
numero = parseInt(prompt("Digite um número para ser mostrado sua tabuada"))
for (contador = 1; contador < 11; contador++) {
   multiplicacao = numero * contador
   console.log(`Número ${contador} x ${numero} = ${multiplicacao}`)
}

