
//Ler 3 valores (considere que não serão
//informados valores iguais) e escrevê-los em ordem crescente.


alert("Programa Três Números em Ordem Crescente")
let numero1, numero2, numero3

numero1 = parseFloat(prompt("Digite o primeiro número: "))
numero2 = parseFloat(prompt("Digite o segundo número: "))
numero3 = parseFloat(prompt("Digite o terceiro número: "))

if (numero1 == numero2 || numero2 == numero3 || numero3 == numero1) {
    alert("Os números não podem ser iguais!")
}
else if (numero1 > numero2 && numero2 > numero3) {
    alert(`Crescente: ${numero3},${numero2},${numero1}`)
}
else if (numero2 > numero1 && numero1 > numero3) {
    alert(`Crescente: ${numero3},${numero1},${numero2}`)
}
else if (numero3 > numero1 && numero2 > numero3) {
    alert(`Crescente: ${numero1},${numero3},${numero2}`)
}
else if (numero3 > numero2 && numero1 > numero2) {
    alert(`Crescente: ${numero2},${numero1},${numero3}`)
}
else if (numero1 > numero2 && numero3 > numero2) {
    alert(`Crescente: ${numero2},${numero3},${numero1}`)
}
else if (numero3 > numero2 && numero2 > numero1) {
    alert(`Crescente: ${numero1},${numero2},${numero3}`)
}
else if (numero2 > numero3 && numero2 > numero1) {
    alert(`Crescente: ${numero1},${numero3},${numero2}`)
}
