alert('Boas-vindas ao jogo do número secreto!');
let numeroSecreto = 8;
console.log(numeroSecreto)
let numeroJogador = prompt('Escolha um número entre 1 e 10')
console.log(`Valor do chute: ${numeroJogador}`)

//Se o chute for igual ao numero secreto
if (numeroJogador == numeroSecreto){
    alert(`Parábens! Você acertou o número secreto!' ${numeroSecreto}`);
} else {
    alert('Você errou :(')
    console.log(`O número secreto era ${numeroSecreto}`)
}