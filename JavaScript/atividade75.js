/*Ler 3 valores (A, B e C) representando as medidas
//dos lados de um triângulo e escrever se formam ou não um triângulo.
//OBS: para formar um triângulo, o valor de cada lado deve ser menor
//que a soma dos outros 2 lados.*/

alert(" Programa Lados Que Formam um Triângulo")
let ladoA, ladoB, ladoC
ladoA = parseFloat(prompt("Digite o primeiro lado do triângulo: "))
ladoB = parseFloat(prompt("Digite o segundo lado do triângulo:"))
ladoC = parseFloat(prompt("Digite o terceiro lado do triângulo:"))
if (ladoC < ladoB + ladoA && ladoB < ladoC + ladoA && ladoA < ladoB + ladoC) {
  alert("É um triângulo!!")
}
else {
  alert("Não é um triângulo.")
}