alert('Boas-vindas ao jogo do número secreto!');
let intervalo = 100;
let numeroSecreto = parseInt(Math.random() * intervalo + 1);
console.log(numeroSecreto);
let numeroJogador;
let tentativas = 1;

//Enquanto o numeroJogardor for diferente do numeroSecreto, o loop estará ativo
while (numeroJogador != numeroSecreto){
 numeroJogador = prompt(`Escolha um número entre 1 e ${intervalo}`)
     //Se o chute for igual ao numero secreto
    if (numeroJogador == numeroSecreto){
        break;
    } else {
        if (numeroJogador > numeroSecreto){
            alert(`O número secreto é menor que ${numeroJogador}`);
        } else {
            alert(`O número secreto é maior que ${numeroJogador}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parábens! Você acertou o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa}.`);
/* 
if (tentativas > 1){
    alert(`Parábens! Você acertou o número secreto ${numeroSecreto} em ${tentativas} tentativas`);
} else {
    alert(`Parábens! Você acertou o número secreto ${numeroSecreto} em ${tentativas} tentativa.`);
}
*/