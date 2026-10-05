/*Ler dois valores e imprimir uma das três mensagens
//a seguir:
//‘Números iguais’, caso os números sejam iguais
//‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
//‘Segundo maior’, caso o segundo seja maior que o primeiro.*/


alert("Programa Números Iguais, Ou Um Maior Que o Outro")
let primeiro, segundo
primeiro = parseFloat(prompt("Digite o primeiro número: "))
segundo = parseFloat(prompt("Digite o segundo número: "))

if (primeiro > segundo) {
    alert("O primeiro número é o maior")
}
else if (primeiro < segundo) {
    alert("O segundo número é o maior")
}
else {
    alert("Os dois são iguais!")
}
