// Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere
// que o N será sempre maior que ZERO.

alert("Programa Imprimir numeros Até o N")
let numero, contador
contador = 1
numero = parseInt(prompt(" Digite um número "))
if (numero == 0) {
    alert(" Não pode ser 0!")
}
else {
    do {
        console.log(contador)
        contador = contador + 1
    }
    while (contador <= numero)
}