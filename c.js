const pessoa = {
    nome: "Leonardo",
    idade: 25,
    cidade: "Curitiba - Paraná",
    saudacao: () => {
        return "Olá me chamo " + pessoa.nome + "!"
        
    }
}

console.log(pessoa.saudacao())