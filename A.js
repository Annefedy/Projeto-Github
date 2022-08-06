var informacao = {
    Nome:"Anne Carine Bien Aime",
    Cidade: "Sao paulo SP",
    bio: function() {
        alert(this.nome[0]+ ' ' +this.nome[1] + ' tem ' + this.cidade + ' Voce mora em qual cidade ' + ' . ');
    },
    saudacao: function() {
        alert('Ola! Eu sou' + this.nome[0] + ' . ');
    }
};
