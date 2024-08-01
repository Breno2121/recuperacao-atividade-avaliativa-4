import leia from 'readline-sync'

var vetor = [];
var numero;
var soma = 0;
var media = 0;
var maior = 0;
var menor = 0;

while(numero !== 0){
    numero = leia.questionInt("digite um numero: ");
    if(numero !== 0){
    vetor.push(numero);
    }
}

for(var i = 0; i < vetor.length; i++){
    if(i === 0){
        maior = vetor[i];
        menor = vetor[i];
    }else if (vetor[i] < menor){
        menor = vetor[i];
    }else if (vetor[i] > maior){
        maior = vetor[i];
    }
    soma = soma + vetor[i];
}
media = soma / (vetor.length);

console.log(`o maior numero foi:  ${maior}`);
console.log(`o menor numero foi:  ${menor}`);
console.log(`o soma numero foi:  ${soma}`);
console.log(`o media numero foi:  ${media}`);
