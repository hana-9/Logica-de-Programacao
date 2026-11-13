/*64)FACCAT Escreva um algoritmo para ler 10 números. 
Todos os números lidos com valor inferior a 40 devem
ser somados. Escreva o valor final da soma efetuada.*/


alert("Programa lerValorSoma")

let numero, contador, soma

soma = 0

for (contador = 0; contador < 10; contador++) {
    numero = parseFloat(prompt("Digite um número"))
    if (numero < 40){
        soma = soma + numero
    }
    
}
alert(`O último número digitado é ${numero} e a soma dos algarismos menores que 40 é ${soma}`)