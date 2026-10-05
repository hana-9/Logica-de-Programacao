//Ler 3 valores (considere que não serão
//informados valores iguais) e escrever o maior deles.


alert("Programa O maior dos três números")
let numero1,numero2,numero3

numero1 = parseFloat(prompt("Digite o primeiro número: "))
numero2 = parseFloat(prompt("Digite o segundo número: "))
numero3 = parseFloat(prompt("Digite o terceiro número: "))
if(numero1==numero2 || numero1==numero3 || numero2==numero3) {
alert("Não podem ser números iguais!")
}
else if (numero1>numero2 && numero1>numero3) {
alert("O maior número: "+numero1)
}
else if(numero2>numero1 && numero2>numero3){
    alert("O maior número: "+numero2)
}
else{
alert("O maior número: "+numero3)
}
