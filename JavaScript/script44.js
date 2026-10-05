/*L05G
g) Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser
considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que
neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^).

1 - criar as variáveis contador e potencia
2 - criar o laço for com o contador valendo 0, o que equivale a potência ser 1 e o limite ser até o 15
3 - fazer a potencia receber potencia * 3
4 - mostrar os resultados
*/

alert("Programa Potência de 3")
let contadora, potencia

potencia = 1

for (contadora = 0; contadora < 16; contadora++) {
    console.log(`O número 3 cujo expoente é ${contadora}, o resultado é ${potencia}`)
   potencia = potencia * 3
}