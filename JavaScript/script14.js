/*
4. Classificação de Veículos por Categoria
Peça para o usuário digitar a letra da categoria da sua carteira de 
motorista (A, B, C, D ou E) e informe quais veículos ele pode pilotar/dirigir.
*/

alert("categoriaHabilitacao")

alert("Digite a letra correspondente à categoria de sua habilitação:")
let letra = prompt("A,B,C,D,E")

switch (letra) {
    case "A": case "a":
        alert("Autoriza a condução de veículos motorizados de duas ou três rodas, com ou sem carro lateral (como motos, motonetas e triciclos)")
        break

    case "B": case "b":
        alert("Permite dirigir carros de passeio, utilitários, SUVs e veículos com peso bruto total (PBT) de até 3.500 kg e lotação máxima de até oito passageiros (sem contar o motorista).")
        break

    case "C": case "c":
        alert("Autoriza a condução de veículos de carga não articulados com PBT superior a 3,5 toneladas (como caminhões, tratores e máquinas agrícolas), além dos veículos da categoria B.")
        break

    case "D": case "d":
        alert("Permite guiar veículos de transporte de passageiros com mais de oito lugares (como ônibus, micro-ônibus e vans), além de abranger as categorias B e C.")
        break

    case "E": case "e":
        alert("Autoriza a condução de unidades acopladas (como carretas, caminhões com reboque ou semirreboque e articulados) com peso ou lotação superior a 6 toneladas, além de abranger as categorias B, C e D.")
        break

    default:
        alert("Letra não correspondente")
}
