//Solicita a idade do usuário em anos,meses e dias e que escreva a idade apenas em dia

alert("Programa Idade")
alert("Digite sua idade por anos, meses e dias respectivamente")
ano = parseInt(prompt("Digite o número de anos: "))
mes = parseInt(prompt("Digite o número de meses: "))
dia = parseInt(prompt("Digite o número de dias: "))
idade = (ano * 365) + (mes * 30) + dia
alert("A sua idade em dias é: " + idade)