// Escreva um algoritmo que leia as idades de 2 homens
//e de 2 mulheres (considere que as idades dos homens serão sempre
//diferentes entre si, bem como as das mulheres). Calcule e escreva
//a soma das idades do homem mais velho com a mulher mais nova, e o
//produto das idades do homem mais novo com a mulher mais velha.



alert("Programa Soma da idade de Dois Homens e Duas Mulheres")
let idadePrimeiroHomem, idadeSegundoHomem, idadePrimeiraMulher, idadeSegundaMulher, produto, soma
idadePrimeiroHomem = parseInt(prompt("Digite a idade do primero homem:"))
idadeSegundoHomem = parseInt(prompt("Digite a idade do segundo homem:"))
idadePrimeiraMulher = parseInt(prompt("Digite a idade da primeira mulher: "))
idadeSegundaMulher = parseInt(prompt("Digite a idade da segunda mulher:"))

if (idadeSegundoHomem == idadePrimeiroHomem || idadePrimeiraMulher == idadeSegundaMulher) {
    alert("As idades não podem ser iguais entre si!")
}
else if (idadePrimeiroHomem > idadeSegundoHomem && idadePrimeiraMulher > idadeSegundaMulher) {
    soma = idadePrimeiroHomem + idadeSegundaMulher
    produto = idadeSegundoHomem * idadePrimeiraMulher
    alert("A soma da idade do homem mais velho com a da mulher mais nova é: " + soma)
    alert("O produto da idade do homem mais novo com a da mulher mais velha é: " + produto)
}
else if (idadeSegundoHomem > idadePrimeiroHomem && idadeSegundaMulher > idadePrimeiraMulher) {
    soma = idadeSegundoHomem + idadePrimeiraMulher
    produto = idadePrimeiroHomem * idadeSegundaMulher
    alert("A soma da idade do homem mais velho com a da mulher mais nova é: " + soma)
    alert("O produto da idade do homem mais novo com a da mulher mais velha é: " + produto)
}
else if (idadePrimeiroHomem > idadeSegundoHomem && idadeSegundaMulher > idadePrimeiraMulher) {
    soma = idadePrimeiroHomem + idadePrimeiraMulher
    produto = idadeSegundoHomem * idadeSegundaMulher
    alert("A soma da idade do homem mais velho com a da mulher mais nova é: " + soma)
    alert("O produto da idade do homem mais novo com a da mulher mais velha é: " + produto)
}
else if (idadeSegundoHomem > idadePrimeiroHomem && idadePrimeiraMulher > idadeSegundaMulher) {
    soma = idadeSegundoHomem + idadeSegundaMulher
    produto = idadeSegundoHomem * idadePrimeiraMulher
    alert("A soma da idade do homem mais velho com a da mulher mais nova é: " + soma)
    alert("O produto da idade do homem mais novo com a da mulher mais velha é: " + produto)
}
