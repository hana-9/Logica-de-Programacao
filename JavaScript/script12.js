/*
1. Calculadora Básica
Solicite ao usuário dois números e o símbolo de uma 
operação matemática (+, -, *, /). Utilize o switch no símbolo digitado 
para realizar o cálculo e exibir o resultado.
*/

alert("CalculadoraDesafio")
let numero1, numero2, operacao,resposta
 numero1 = parseFloat(prompt("Digite o primeiro número: "));
 numero2 = parseFloat(prompt("Digite o segundo número: "));
 operacao = prompt("Digite o sinal da operação desejada: ");

 switch (operacao)
 {
    case "+":
        resposta = numero1 + numero2;
        break
    case "-":
        resposta = numero1 - numero2;
        break
    case "*":
        resposta = numero1 * numero2;
        break
    case "/":
        resposta = numero1/numero2;
    break
    default:
        alert("Sinal indisponível")
 }
  alert(`O resultado de sua operação é: ${resposta}`)