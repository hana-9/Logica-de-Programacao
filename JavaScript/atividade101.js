//59) Faccat:  Ler 10 valores e escrever quantos desses valores lidos são NEGATIVOS.

alert("Exercício lerValoresNegativos")

let numeroLido, contador, vezes

vezes = 0

for (contador = 0; contador < 10; contador++) {

  numeroLido = parseInt(prompt("Digite um número inteiro: "))

  if(numeroLido < 0){
    vezes = vezes + 1
  }

}
alert(`A quantidade de números negativos lidos é ${vezes}`)