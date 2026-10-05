//Jogo de mesa, com os números propostos do exercício.

//Teste de Mesa:
//primeiro      segundo      conteiner      resposta
// 3              2             11             B
//150             3            455             C
// 7             -1             -2             A
//-2              5             -5             A
// 50             3            155             C

alert("Programa Algoritmo Teste de Mesa")
let primeira,segunda,conteiner

primeira = parseInt(prompt("Digite o primeiro número: "))
segunda = parseInt(prompt("Digite o segundo número: "))

conteiner = (primeira * segunda) + 5
if (conteiner <= 0) {
    alert("A")
}
else if (conteiner <= 100) {
    alert("B")
}
else {
    alert("C")
}

alert("Conteiner: " + conteiner)


