//Receber três medidas, calcular e testar se formam um
// triângulo ou não

alert("Programa Triângulo ou Não")
let primeiraMedida, segundaMedida, terceiraMedida, mensagem

primeiraMedida = parseFloat(prompt("Digite a primeira medida: "))
segundaMedida = parseFloat(prompt("Digite a segunda medida:"))
terceiraMedida = parseFloat(prompt("Digite a terceira medida:"))

if (primeiraMedida < segundaMedida + terceiraMedida && segundaMedida < primeiraMedida + terceiraMedida && terceiraMedida < primeiraMedida + segundaMedida) {
    if (primeiraMedida == segundaMedida && segundaMedida == terceiraMedida) {
        mensagem = "É um triângulo Equilátero"
    }
    else if (primeiraMedida == segundaMedida || segundaMedida == terceiraMedida || terceiraMedida == primeiraMedida) {
        mensagem = "É um triângulo Isósceles"
    }
    else {
        mensagem = "É um triângulo Escaleno"
    }

}

else {
    mensagem = "Impossível formar um triângulo"
}

alert(mensagem)