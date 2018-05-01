function Pessoa(nomeCompleto, corFavorita) {
    this.nome = nomeCompleto,
    this.corFav = corFavorita,
    this.saudacao = function() {
        var textoSaudacao = "Olá o meu nome é " + this.nome + " e a minha cor favorita é " + this.corFav;
        document.write("<br>" + textoSaudacao);
    }
}

var pedro = new Pessoa("Pedro Matos", "amarelo");
pedro.saudacao();

var ana = new Pessoa("Ana Pereira", "azul");
ana.saudacao();
