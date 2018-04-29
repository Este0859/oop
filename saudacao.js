function Pessoa(nomeCompleto, corFavorita) {
    this.nome = nomeCompleto,
    this.corFav = corFavorita,
    this.saudacao = function() {
        console.log("Olá o meu nome é " + this.nome + " e a minha cor favorita é " + this.corFav);
    }
}

var ac = new Pessoa("André Costa", "amarelo");
ac.saudacao();

var ad = new Pessoa("António Lourenço", "azul");
ad.saudacao();

var ag = new Pessoa("Beatriz Barreto", "azul");
ag.saudacao();

var aj = new Pessoa("Francisco Esteves", "azul");
aj.saudacao();

var ba = new Pessoa("Francisco Rodrigues", "azul");
ba.saudacao();

var bd = new Pessoa("Daniel Serrano", "azul");
bd.saudacao();

var bdb = new Pessoa("Fábio Franco", "azul");
bdb.saudacao();

var be = new Pessoa("João Neves", "azul");
be.saudacao();

var bf = new Pessoa("João Madeira", "azul");
bf.saudacao();

var bj = new Pessoa("Gonçalo Simão", "azul");
bj.saudacao();

var bjb = new Pessoa("Luís Catarino", "azul");
bjb.saudacao();

var ca = new Pessoa("Miguel Pinto", "azul");
ca.saudacao();

var cab = new Pessoa("Maria Inês", "azul");
cab.saudacao();

var cb = new Pessoa("Nuno Rodrigues", "azul");
cb.saudacao();

var cc = new Pessoa("Pedro Fonseca", "azul");
cc.saudacao();

var cd = new Pessoa("Miguel Dionísio", "azul");
cd.saudacao();

var cdb = new Pessoa("Ricardo Gonçalves", "azul");
cdb.saudacao();

var ce = new Pessoa("Sandu Lungu", "azul");
ce.saudacao();

var cf = new Pessoa("Ricardo Pereira", "azul");
cf.saudacao();

var cg = new Pessoa("Rodrigo Valério", "azul");
cg.saudacao();

var cgb = new Pessoa("Samuel Vaz", "azul");
cgb.saudacao();

var cj = new Pessoa("Tomás Feith", "azul");
cj.saudacao();

var ck = new Pessoa("Tiago Arriegas", "azul");
ck.saudacao();

var ckb = new Pessoa("António Campaniço", "azul");
ckb.saudacao();
