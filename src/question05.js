import leia from 'readline-sync'


var naipes = ['Copas', 'Espadas', 'Ouros', 'Paus'];
var resultados = { 'Copas': 0, 'Espadas': 0, 'Ouros': 0, 'Paus': 0 };
var totalSorteios = 1000;
var limitePercentual = 0.30;
var viciado = false;

for (var i = 0; i < totalSorteios; i++) {
    var naipeSorteado = naipes[parseInt(Math.random() * naipes.length)];
    resultados[naipeSorteado]++;
}

for (var j = 0; j < naipes.length; j++) {
    var naipe = naipes[j];
    var frequencia = resultados[naipe] / totalSorteios;
    console.log(`${naipe}:  ${resultados[naipe]} vezes (${(frequencia * 100).toFixed(2)}%)`);
    

    if (frequencia > limitePercentual) {
        viciado = true;
    }
}

if (viciado === true) {
    console.log('O baralho esta viciado.');
} else {
    console.log('O baralho esta equilibrado.');
}
