//Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere
//que o N será sempre maior que ZERO.


alert(" Programa Imprimir Valores Entre Inteiros e Um valor N")
let contador, numero
contador = 1
numero = parseInt(prompt("Digite um número inteiro "))
do {
    console.log(contador)
    contador = contador + 1
}
while (contador <= numero)