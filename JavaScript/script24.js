//L03B
//Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).

alert("Soma dos Cem Primeiros Números")
let  contador, somatorio
contador = 1
somatorio = 1
while (contador < 101) {
  console.log(`O número é ${contador} e o somatório é ${somatorio}`)
  contador = contador + 1 
  somatorio = somatorio + contador
}