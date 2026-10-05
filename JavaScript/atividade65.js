//Ler dois valores (considere que não serão lidos valores iguais) e 
// escrevê-los em ordem crescente


alert("Programa Decrescente")
let numero1, numero2
numero1 = parseInt(prompt("Digite o primeiro número: "))
numero2 = parseInt(prompt("Digite o segundo número: "))
if (numero1 == numero2) {
    alert("Os números não podem ser iguais!")
}
else {
    if (numero1 > numero2) {
        alert(`Ordem decrescente: ${numero1}, ${numero2}`)
    }
    else {
        alert(`Ordem decrescente: ${numero2}, ${numero1}`)
    }

}
