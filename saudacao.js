function Pessoa(nomeCompleto, cidadeResidencia) { //Classe que constrói os objetos Pessoa
		this.nome = nomeCompleto, //Define a propriedade nome de cada objeto como o seu nome completo
        this.cidade = cidadeResidencia, //Define a propriedade cidade de cada objeto como a sua cidade de residência
        this.saudacao = function() { //Cria um método saudacao para cada objeto
            if (cidade != "Porto") { //Se a cidade não for Porto, então corre o código a seguir
                var textoSaudacao = "Olá, o meu nome é " + this.nome + " e moro em " + this.cidade + ".";
            } else { //Se a cidade for Porto, corre este código
                var textoSaudacao = "Olá, o meu nome é " + this.nome + " e moro no " + this.cidade + ".";
            }
            document.write("<p>" + textoSaudacao + "</p>"); //Ecreve no documento index.html o textoSaudacao entre <p> e </p>
        }
}

var joao = new Pessoa("João Silva", "Porto"); //Define a variável joao como um novo objeto com nome João Silva e cidade Porto
joao.saudacao(); //Chama o método saudacao do objeto joao

var john = new Pessoa("John Smith", "Nova Iorque");
john.saudacao();

var jean = new Pessoa("Jean Pierre", "Paris");
jean.saudacao();