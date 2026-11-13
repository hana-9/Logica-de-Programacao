/*f) Ler duas matrizes do tipo vetor, sendo A com 20 elementos 
e B com 30 elementos. Construir uma
matriz C, sendo esta a junção das duas outras matrizes. 
Desta forma, C deverá ter a capacidade de
armazenar 50 elementos. Apresentar a matriz C.*/

alert("Programa AgruparMatrizes")

let contadora, numeroLido1, numeroLido2, vetorA, vetorB, vetorC

vetorA = []
vetorB = []
vetorC = []


for (contadora = 0; contadora < 20; contadora++) {
    numeroLido1 = Number(prompt("Digite um número"));
    vetorA.push(numeroLido1)
    console.log(`O elemento do vetorA: ${vetorA}`);
}
for (contadora = 0; contadora < 30; contadora++) {
    numeroLido2 = Number(prompt("Digite um número"));
    vetorB.push(numeroLido2)
    console.log(`O elemento do vetorB: ${vetorB}`);
    vetorC.push(vetorA[contadora],vetorB[contadora]);
}
 console.log(`O vetorC: ${vetorC}`);
 console.log(`Tamanho vetorC: ${vetorC.length}`);



