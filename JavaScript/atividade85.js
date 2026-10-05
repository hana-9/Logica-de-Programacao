//Uma empresa quer verificar se um empregado está
//qualificado para a aposentadoria ou não. Para estar em condições,
//um dos seguintes requisitos deve ser satisfeito:
//- Ter no mínimo 65 anos de idade.
//- Ter trabalhado no mínimo 30 anos.
//- Ter no mínimo 60 anos e ter trabalhado no mínimo 25 anos.
//Com base nas informações acima, faça um algoritmo que leia: o
//número do empregado (código), o ano de seu nascimento e o ano de
//seu ingresso na empresa. O programa deverá escrever a idade e o
//tempo de trabalho do empregado e a mensagem 'Requerer aposentadoria
//' ou 'Não requerer'.

alert("Programa Aposentadoria")
let codigoEmpresa, anoNascimento, anoIngresso, idade, tempoTrabalho

codigoEmpresa = parseInt(prompt("Digite o código da empresa: "))
anoNascimento = parseInt(prompt("Digite o seu ano de nascimento: "))
anoIngresso = parseInt(prompt("Digite o ano que você ingressou  na empresa: "))
idade = 2026 - anoNascimento
tempoTrabalho = 2026 - anoIngresso

if (codigoEmpresa == 3210) {
    if (idade > 64 || tempoTrabalho > 29) {
        alert(`Idade: ${idade}, tempo de trabalho: ${tempoTrabalho}. Resposta: Requerer aposentadoria`)
    }
    else if (idade > 59 && tempoTrabalho > 24) {
        alert(`Idade: ${idade}, tempo de trabalho: ${tempoTrabalho}. Resposta: Requerer aposentadoria`)
    }
    else {
        alert(`Idade: ${idade}, tempo de trabalho: ${tempoTrabalho}. Resposta: Não Requerer`)
    }
}
else {
    alert("Código inválido")
}




