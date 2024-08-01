import leia from 'readline-sync'

var palavra = [""];
var c1 = 0;
var palavrasemespaco = [""];

palavra = leia.question("digite uma palavra ou texto: ");

palavrasemespaco = palavra.replace(/\s+/g, '');

for(var i = 0; i < palavrasemespaco.length; i++){
    if(palavrasemespaco[i] !== "a" && palavrasemespaco[i] !== "e" && palavrasemespaco[i] !== "i" && palavrasemespaco[i] !== "o" && palavrasemespaco[i] !== "u"){
    c1++;
    }
}
console.log(`${palavrasemespaco} contem ${c1} consoantes.`);

