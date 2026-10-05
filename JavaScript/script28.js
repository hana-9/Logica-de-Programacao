
// LO4A : Apresentar os quadrados dos números inteiros de 15 a 200.

alert("Programa Quadrado de Números Inteiros")
let contadora, quadrado
contadora = 14
quadrado = 0

do {
    contadora = contadora + 1
    quadrado = contadora * contadora
    console.log(`Número : ${contadora} e seu quadrado: ${quadrado}`)
}
while (contadora < 200)
