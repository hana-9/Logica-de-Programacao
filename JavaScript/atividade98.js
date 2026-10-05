//Recebe um numero e depois decide se é maior que dez ou
//menor que dez


alert("Programa MaiorMenorDez")
let numero
numero = parseInt(prompt("Digite um número: "))
if(numero<10){
    alert("NÃO É MAIOR QUE 10!")
}
else if(numero==10){
  alert("É IGUAL A 10!")   
}
else{
    alert("É MAIOR QUE 10!")
}