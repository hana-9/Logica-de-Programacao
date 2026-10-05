/*L05E
e) Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. Para verificar
se o número é ímpar, efetuar dentro da malha a verificação lógica desta condição com a instrução
se, perguntando se o número é ímpar; sendo, mostre-o; não sendo, passe para o próximo passo.


1 - declarar a variável contador
2 - criar o laço de repetição for com o contador valendo 0 e o seu limite 20
3 - colocar os comandos de estrutura condicional if para verificar se o contador está em um número ímpar
4 - mostrar o resultado linha por linha utilizando o console.log dentro do laço for
*/

alert("Programa Números Ímpares Entre 0 e 20")
let contador
for (contador = 0; contador < 21; contador++) {
    if (contador % 2 != 0) {
        console.log(`Os números ímpares são: ${contador}`)
    }
    else {
        console.log(`O número dessa posição não é par`)
    }
}