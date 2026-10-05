/*
9. Validador de Estátuto de Desconto
Solicite o código do perfil de comprador de uma loja:

1: Cliente Comum (sem desconto)

2: Funcionário (10% de desconto)

3: VIP (20% de desconto)
Informe o percentual de desconto aplicado.

*/


alert("desconto_Cliente")

let codigo, desconto

codigo = parseInt(prompt("Digite o número de perfil do comprador: "))

switch (codigo) {
    case 1:
        desconto = 0
        alert(`O percentual de desconto é do tipo cliente : ${desconto}%`)
        break

    case 2:
        desconto = 10
        alert(`O percentual de desconto é do tipo funcionário : ${desconto}%`)
        break

    case 3:
        desconto = 20
        alert(`O percentual de desconto é do tipo VIP : ${desconto}%`)
        break

    default:
        alert("Código inválido")
}
location.reload()