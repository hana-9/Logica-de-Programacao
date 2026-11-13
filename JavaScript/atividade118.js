//O exercício anterior com FOR dentro do FOR.

alert("Programa Juntando Vetores")

let contadora,incremento,contadorProvisório, primeiroElemento, segundoElemento, vetorA, vetorB, vetorC

vetorA = []
vetorB = []
vetorC = []

contadorProvisório = 20

for (contadora = 0; contadora < 30; contadora++) {

 for (incremento = 0; incremento < contadorProvisório; incremento++){

     primeiroElemento = Number(prompt("Digite o primeiro número"))
     vetorA.push(primeiroElemento)
     console.log(`O elemento do vetorA: ${vetorA}`)

}
    contadorProvisório = 0 

    segundoElemento = Number(prompt("Digite o segundo número"))
    vetorB.push(segundoElemento)
    console.log(`O elemento do vetorB: ${vetorB}`)

    vetorC.push(vetorA[contadora],vetorB[contadora])


}
 console.log(`O elemento do vetorC: ${vetorC}`)
 console.log(`Tamanho do vetorC: ${vetorC.length}`)