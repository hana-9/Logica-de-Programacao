/*LO04H
Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha,
banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do
nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área
do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar
calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor
total acumulado da área residencial. 

1 - Solicitar nome do comodo
2 - Solicitar a largura do comodo
3 - Solicitar o comprimento do comodo
4 - Calcular a área
5 - Mostrar a área do comodo 
6 - Perguntar se quer continuar

*/

alert("Área dos Cômodos da Sua Casa")

let nomecomodo, largura, comprimento, area, resposta, acumulaArea

acumulaArea = 0

do {
    nomecomodo = prompt("Digite o nome do cômodo desejado")
    largura = parseFloat(prompt("Digite a largura deste cômodo"))
    comprimento = parseFloat(prompt("Digite o comprimento desse cômodo"))

    area = largura * comprimento

    alert(`O seu comodo ${nomecomodo} possui a área de ${area} metros quadrados`)
    alert("Deseja continuar?")
    resposta = prompt("Sim , Não")
    acumulaArea = acumulaArea + area
}
while (resposta == "Sim" || resposta == "Sim" || resposta == "sim")

if (resposta == "Não" || resposta == "Não" || resposta == "não") {
    alert(`A área da sua casa é ${acumulaArea} metros quadrados`)
}