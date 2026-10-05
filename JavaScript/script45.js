/*L05H
h) Elaborar um programa que apresente como resultado o valor de uma potência de uma base
qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor
do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do
portuguol (^).

1 - criar as váriaveis contadora, base, expoente e potencia 
2 - ler o valor da base e do expoente
3 - criar o laço for com a contadora tendo o valor limite do expoente lido
4 - fazer a  variável potencia receber potencia * base
5 - usar o console.log para aparecer cada resultado
*/
alert("Programa da Potenciação")
let contador, base, expoente, potencia
base = parseInt(prompt("Digite o número da base desejada"))
expoente = parseInt(prompt("Digite o número do expoente desejado"))
potencia = 1
for (contador = 0; contador <= expoente; contador++) {
    console.log(`O número de base ${base} com o expoente ${contador} tem o resultado ${potencia}`)
    potencia = potencia * base
}
