alert("Idade e Voto")

let idade = parseInt(prompt("Digite sua idade: "))
if(idade<16)
{
    alert("Você é menor de idade e não pode votar!")
}
else if (idade<18)
{
   alert("O voto é opcional!")
}
else
{
    alert("O voto é obrigatório")
}