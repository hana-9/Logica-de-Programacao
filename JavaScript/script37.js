/*L04J
Elaborar um programa que apresente o resultado inteiro da divisão de dois números quaisquer.
Para a elaboração do programa, não utilizar em hipótese alguma o conceito do operador aritmético
DIV. A solução deve ser alcançada com a utilização de looping. Ou seja, o programa deve
apresentar como resultado (quociente) quantas vezes o divisor cabe no dividendo.

1 - Receber dois números: Um para ser o dividendo e o outro para ser o divisor, o número que será reartido em partes iguais

2- Criar o looping em que o dividendo será o limite, enquanto o divisor será repetido em partes iguais até que chegue no valor do dividendo. Para saber quantas partes serão repartidas, podemos colocar o contador como a váriavel à apresentar as repetições

3 - Mostrar o resultado das operações
*/

alert("Programa Divisão")

let contador, dividendo, divisor, divisao

contador = 0
dividendo = parseInt(prompt("Digite o primeiro número (Dividendo)"))
divisor = parseInt(prompt("Digite o segundo número (Divisor)"))

do {
    contador = contador + 1
    divisao = contador * divisor
    console.log(`O contador está em ${contador} e a divisão está em ${divisao}`)
}
while (divisao < dividendo)
alert(`O resultado dessa divisão é: ${contador}`)