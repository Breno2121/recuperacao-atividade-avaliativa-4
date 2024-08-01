import leia from 'readline-sync'


function gerarSenha(tamanho) {
    const caracteresMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const caracteresMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const caracteresEspeciais = '!@#$%&';
    
    const todosCaracteres = caracteresMaiusculas + caracteresMinusculas + numeros + caracteresEspeciais;

    var senha = 0;

    for (var i = 0; i < tamanho; i++) {
        var indice = Math.floor(Math.random() * todosCaracteres.length);
        senha += todosCaracteres[indice];
    }
    return senha;
}

var tamanho = leia.questionInt("Digite o comprimento da senha: ");

var senha = gerarSenha(tamanho);
console.log(`Sua senha gerada é: ${senha}`);
