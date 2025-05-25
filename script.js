var nome = prompt('Seja bem-vindo! Qual é o seu nome?')
var div = document.querySelector(`div#textomain`)
if (nome == null) {
    div.innerText += `Olá,  Seja bem-vindo ao meu site!
                Meu nome é Gustavo Lopes Moreira.Tenho 24 anos e sou estudante do primeiro período do curso de Ciência da Computação na Universidade Veiga de Almeida.Este site foi criado para apresentar e divulgar minhas habilidades em programação`
} else {
    div.innerText += `Olá, ${nome}!
                Meu nome é Gustavo Lopes Moreira. Seja bem-vindo ao meu site!
                Tenho 24 anos e sou estudante do primeiro período do curso de Ciência da Computação na Universidade Veiga de Almeida. asEste site foi criado para apresentar e divulgar minhas habilidades em programação.`
}


