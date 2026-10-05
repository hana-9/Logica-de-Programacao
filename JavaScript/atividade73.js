//Ler 3 valores (considere que não serão informados
//valores iguais) e escrever a soma dos 2 maiores.


Escreval(" Programa Soma dos dois Maiores Números")
let numero1, numero2, numero3
numero1 = parseFloat(prompt("Digite o primeiro número: "))
numero2 = parseFloat(prompt("Digite o segundo número:"))
numero3 = parseFloat(prompt("Digite o terceiro número:"))
if (numero1 == numero2 || numero3 == numero2 || numero3 == numero1) {
    alert("Não podem ser números iguais!")
}
else if (numero1 > numero3 && numero2 > numero3) {
    soma = umero1 + numero2
    alert("A soma dos dois maiores é: ", soma)
}
else if (numero2 > numero1 && numero3 > numero1) {
    soma = numero2 + numero3
    alert("A soma dos dois maiores é: ", soma)
}
else if (numero1 > numero2 && numero3 > numero2) {

} z