Algoritmo "Exercicio36Faccat"
//
//
// Disciplina: Lógica de Programação com JavaScript
// Professor: Jailson Costa dos Santos
// Descrição   : Escreva um algoritmo que leia as idades de 2 homens
//e de 2 mulheres (considere que as idades dos homens serão sempre
//diferentes entre si, bem como as das mulheres). Calcule e escreva
//a soma das idades do homem mais velho com a mulher mais nova, e o
//produto das idades do homem mais novo com a mulher mais velha.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 02/09/2026
Var
// Seção de Declarações das variáveis
idadeprimeirohomem:inteiro
idadesegundohomem:inteiro
idadeprimeiramulher:inteiro
idadesegundamulher:inteiro
produto:inteiro
soma:inteiro

Inicio
Escreval("Soma da idade de Dois Homens e Duas Mulheres")
Escreval("Digite a idade do primero homem:")
leia(idadeprimeirohomem)
Escreval("Digite a idade do segundo homem:")
leia(idadesegundohomem)
Escreval("Digite a idade da primeira mulher: ")
leia(idadeprimeiramulher)
Escreval("Digite a idade da segunda mulher:")
leia(idadesegundamulher)
se (idadesegundohomem=idadeprimeirohomem)ou(idadeprimeiramulher=idadesegundamulher) então
Escreva("As idades não podem ser iguais entre si!")
senão
se (idadeprimeirohomem>idadesegundohomem) e (idadeprimeiramulher>idadesegundamulher) então
soma<-idadeprimeirohomem+idadesegundamulher
produto<- idadesegundohomem* idadeprimeiramulher
Escreval("A soma da idade do homem mais velho com a da mulher mais nova é: ",soma)
Escreval("O produto da idade do homem mais novo com a da mulher mais velha é: ",produto)
senão
se (idadesegundohomem>idadeprimeirohomem) e (idadesegundamulher>idadeprimeiramulher) então
soma<-idadesegundohomem+idadeprimeiramulher
produto<- idadeprimeirohomem* idadesegundamulher
Escreval("A soma da idade do homem mais velho com a da mulher mais nova é: ",soma)
Escreval("O produto da idade do homem mais novo com a da mulher mais velha é: ",produto)
senão
se (idadeprimeirohomem>idadesegundohomem) e (idadesegundamulher>idadeprimeiramulher) então
soma<-idadeprimeirohomem+idadeprimeiramulher
produto<- idadesegundohomem* idadesegundamulher
Escreval("A soma da idade do homem mais velho com a da mulher mais nova é: ",soma)
Escreval("O produto da idade do homem mais novo com a da mulher mais velha é: ",produto)
senão
se (idadesegundohomem>idadeprimeirohomem) e (idadeprimeiramulher>idadesegundamulher) então
soma<-idadesegundohomem+idadesegundamulher
produto<- idadesegundohomem* idadeprimeiramulher
Escreval("A soma da idade do homem mais velho com a da mulher mais nova é: ",soma)
Escreval("O produto da idade do homem mais novo com a da mulher mais velha é: ",produto)
 fimse
 fimse
 fimse
 fimse
 fimse
Fimalgoritmo