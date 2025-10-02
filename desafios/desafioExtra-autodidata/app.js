function jogoNS(){
    alert('Boas-vindas ao nosso jogo!');
    let numeroSecreto = 5;
    let numeroJogador
    let pontos = 0;
    let erros = 0;
    let erroAlt = 3;

    while(pontos < 5){
        console.log(`Número Secreto ${numeroSecreto}`);
        console.log(`Pontos: ${pontos}`)
        console.log(`Erros: ${erros}`)
        numeroJogador = prompt('Escolha um número de 0 a 10');

        if (pontos == 5){
            alert('Parábens! Você venceu!')
        }
        if (numeroJogador == numeroSecreto){
            alert('Você acertou, ganhou um ponto!');
            pontos += 1;
            numeroSecreto = Math.floor(Math.random() * 10);
        } else {
            if (numeroJogador > numeroSecreto){
                alert(`Você errou! O número ${numeroJogador} é maior`)
                erros += 1
            } else {
                alert(`Você errou! o número ${numeroJogador} é menor`)
                erros += 1
            }
        }
        if (erros == erroAlt){
            pontos -= 1;
            erros = 0;
            numeroSecreto = Math.floor(Math.random() * 10);
            alert('Você teve 3 erros, o número secreto foi alterado!');
        }
        if (pontos == -3){
            alert('Você perdeu! Tente novamente no menu.');
            break;
        }
    }
}