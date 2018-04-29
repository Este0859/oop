function Pessoa(nomeCompleto, corFavorita) {
    this.nome = nomeCompleto,
    this.corFav = corFavorita,
    this.saudacao = function() {
        console.log("Olá o meu nome é " + this.nome + " e a minha cor favorita é " + this.corFav);
    }
}

var 02 = new Pessoa("André Costa", "amarelo");
02.saudacao();

var 03 = new Pessoa("António Lourenço", "azul");
03.saudacao();

var 06 = new Pessoa("Beatriz Barreto", "azul");
06.saudacao();

var 08 = new Pessoa("Francisco Esteves", "azul");
08.saudacao();

var 10 = new Pessoa("Francisco Rodrigues", "azul");
10.saudacao();

var 13 = new Pessoa("Daniel Serrano", "azul");
13.saudacao();

var 13a = new Pessoa("Fábio Franco", "azul");
13a.saudacao();

var 14 = new Pessoa("João Neves", "azul");
14.saudacao();

var 15 = new Pessoa("João Madeira", "azul");
15.saudacao();

var 18 = new Pessoa("Gonçalo Simão", "azul");
18.saudacao();

var 18a = new Pessoa("Luís Catarino", "azul");
18a.saudacao();

var 20 = new Pessoa("Miguel Pinto", "azul");
20.saudacao();

var 20a = new Pessoa("Maria Inês", "azul");
20a.saudacao();

var 21 = new Pessoa("Nuno Rodrigues", "azul");
21.saudacao();

var 22 = new Pessoa("Pedro Fonseca", "azul");
22.saudacao();

var 23 = new Pessoa("Miguel Dionísio", "azul");
23.saudacao();

var 23a = new Pessoa("Ricardo Gonçalves", "azul");
23a.saudacao();

var 24 = new Pessoa("Sandu Lungu", "azul");
24.saudacao();

var 25 = new Pessoa("Ricardo Pereira", "azul");
25.saudacao();

var 26 = new Pessoa("Rodrigo Valério", "azul");
26.saudacao();

var 26a = new Pessoa("Samuel Vaz", "azul");
26a.saudacao();

var 28 = new Pessoa("Tomás Feith", "azul");
28.saudacao();

var 29 = new Pessoa("Tiago Arriegas", "azul");
29.saudacao();

var 29a = new Pessoa("António Campaniço", "azul");
29a.saudacao();
