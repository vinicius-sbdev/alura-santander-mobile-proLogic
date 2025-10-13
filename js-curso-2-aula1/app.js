let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
        let mensagem = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagem);
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor!');
        } else {
            exibirTextoNaTela('p', 'O numéro secreto é maior!');
        }
        tentativas++;
    }
    console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorio(){    
    return parseInt(Math.random() * 10 + 1);
}

console.log(numeroSecreto);