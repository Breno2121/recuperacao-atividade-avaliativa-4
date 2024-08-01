import leia from 'readline-sync'

var nomes = [];
var idades = [];
var maisvelho;
var maisnovo;
var idadenovo = 0;
var idadevelho = 0;

for (var i = 0; i < 5; i++) {
    nomes[i] = leia.question("Digite o nome do usuario: ");
    idades[i] = leia.questionInt("Digite a idade: ");
    if (i === 0) {
        maisnovo = nomes[i]
        idadenovo = idades[i]
        maisvelho = nomes[i]
        idadevelho = idades[i]
    } else if (idades[i] < idadenovo) {
        maisnovo = nomes[i];
        idadenovo = idades[i];
    } else if (idades[i] > idadevelho) {
        maisvelho = nomes[i];
        idadevelho = idades[i];
    }
}

console.log(`O ${maisnovo} e o usuario mais novo, com ${idadenovo} Anos.`);

console.log(`O ${maisvelho} e o usuario mais novo, com ${idadevelho} Anos.`);

