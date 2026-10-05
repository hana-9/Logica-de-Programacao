//L03K
/*
Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha,
banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do
nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área
do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar
calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor
total acumulado da área residencial. 
*/


alert("Programa areaComodos")

let nome, largura, comprimento, area, resposta, acumulado
area = 0
acumulado = 0

alert("Deseja começar?")
resposta = prompt("Sim     ou     Não")

while (resposta == "SIM" || resposta == "Sim" || resposta == "sim") {

    nome = prompt("Digite o nome do cômodo desejado:")
    largura = parseFloat(prompt("Digite a largura do cômodo:"))
    comprimento = parseFloat(prompt("Digite o comprimento: "))

    area = comprimento * largura

    alert(`O seu cômodo ${nome} tem a área total de ${area.toFixed(2,2)} metros quadrados`)

    alert("Deseja continuar?")

    resposta = prompt("Sim     ou     Não")

    if (resposta == "SIM" || resposta == "Sim" || resposta == "sim") {

        acumulado = acumulado + area

    }
}

if (resposta == "NÃO" || resposta == "Não" || resposta == "não") {
    acumulado = acumulado + area
    alert(`A sua casa tem a área total de ${acumulado.toFixed(2, 2)} metros quadrados`)
}
else {
    alert("Resposta Inválida")
}
location.reload()