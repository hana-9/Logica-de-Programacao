/*L05F
f) Apresentar todos os números divisíveis por 4 que sejam menores que 200. Para verificar se o
número é divisível por 4, efetuar dentro da malha a verificação lógica desta condição com a
instrução se, perguntando se o número é divisível; sendo, mostre-o; não sendo, passe para o
próximo passo. A variável que controlará o contador deve ser iniciada com o valor 1.

1 - criar a váriavel contadora
2 - criar o laço de repetição for com a contadora começando em 1
3 - criar a estrutura de decisão simples para verificar os números divisíveis por 4
4 - mostrar apenas os números divisíveis por 4
*/
alert("Programa Números Divisíveis Por 4")
let contadora
for (contadora = 1; contadora < 201; contadora++) {
    if (contadora % 4 == 0){
        console.log(`Número divisível por quatro: ${contadora}`)
    }
    else{
         console.log(`Número não divisível por quatro`)
    }
}
