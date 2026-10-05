/*Ler o nome de 2 times e o número de gols marcados na
//partida (para cada time). Escrever o nome do vencedor. Caso não
//haja vencedor deverá ifr impressa a palavra EMPATE.*/

alert("Programa Quantidade de Gols, Vencedor ou Empate")
let time1,time2,gol1,gol2
time1 = prompt("Digite o nome do primeiro time: ")
time2 = prompt("Digite o nome do segundo time:")
gol1 = parseInt(prompt("Quantidade de gols do primeiro time: "))
gol2 = parseInt(prompt("Quantidade de gols do segundo time:"))
if (gol1 > gol2) {
    alert(`O time ${time1} é o vencedor! Com ${gol1} gol(s)`)
}
else if (gol1 == gol2) {
    alert(`Empate! Com ${gol1} gol(s) cada`)
}
else {
    alert(`O time ${time2} é o vencedor! Com ${gol2} gol(s)`)
}

