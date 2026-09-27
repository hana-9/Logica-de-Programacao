Algoritmo "Exercicio38Faccat"
//
//
// Disciplina: Lógica de Programação com JavaScript
// Professor: Jailson Costa dos Santos
// Descrição   : Faça um algoritmo para ler um número que é um código
// de usuário. Caso este código seja diferente de um código
//armazenado internamente no algoritmo (igual a 1234) deve ser
//apresentada a mensagem ‘Usuário inválido!’. Caso o Código seja
//correto, deve ser lido outro valor que é a senha. Se esta senha
//estiver incorreta (a certa é 9999) deve ser mostrada a mensagem
//‘senha incorreta’. Caso a senha esteja correta, deve ser mostrada
//a mensagem ‘Acesso permitido’.
// Autor(a)    : Ana Paula Santos da Silva
// Data atual  : 02/09/2026
Var
   // Seção de Declarações das variáveis
   codigo:inteiro
   senha:inteiro
Inicio
   Escreval("Acesso Por Código e Senha")
   Escreva("Digite o código de acesso: ")
   leia(codigo)
   se codigo=1234  então
      Escreval("Digite a senha: ")
      leia(senha)
      se(senha=9999)então
         Escreval("Acesso Permitido")
      senão
         Escreval("Acesso Negado")
      fimse
   senão
      Escreval("Acesso Negado")
   fimse


Fimalgoritmo