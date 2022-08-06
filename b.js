const pessoa = {
    nome: "Igor",
    idade: 22,
    cidade: "Santa Cruz do Capibaribe",
    saudacao: () => {
        return "Olá me chamo " + pessoa.nome + "!"
    }
}

console.log(pessoa.saudacao())