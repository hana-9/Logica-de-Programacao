/* Exercicio 21 : Ler a hora de início e a hora de fim de um jogo de Xadrez 
(considere apenas horas inteiras, sem os minutos) e calcule a duração do
jogo em horas, sabendo-se que o tempo máximo de duração do jogo é
de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.*/

alert("Programa Duração da Partida de Xadrez")

let horaInicio, horaFim, calculo
horaInicio = parseInt(prompt("Digite o horário (sem minutos)de início da partida de xadrez: "))
horaFim = parseInt(prompt("Digite o horário (sem minutos) de término da partida: "))

if (horaFim > horaInicio) {
    calculo = (horaFim - horaInicio)
}
else {
    calculo = (24 - horaInicio) + horaFim
}


alert(`A quantidade de horas da partida foi de: ${calculo} hora(s)`)
