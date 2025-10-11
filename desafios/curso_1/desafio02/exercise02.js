//Desafio 01 - Verificar o dia
function diaSem(){
    diaSem = prompt('Qual é o dia da semana?(minúsculo e sem acento)');
    if (diaSem == 'sabado' || diaSem == 'domingo'){
        alert('Bom fim de semana!');
    } else {
        alert('Boa semana!');
    }
}
//Desafio 02 - Número positivo ou negativo
function numPosNeg(){
    numEscolhido = prompt('Digite um número positivo ou negativo');
    if (numEscolhido >= 0){
        alert(`O número ${numEscolhido} é positivo!`);
    } else {
        alert(`O número ${numEscolhido} é negativo`);
    }
}
//Desafio 03 - Pontuação
function pontUser(){
    pontosUsuario = 100;
    console.log(pontosUsuario)
    if (pontosUsuario >= 100){
        alert('Parábens! Você venceu!');
    } else {
        alert('Você perdeu! Tente novamente')
    }
}
//Desafio 4 - Saldo
function saldoUser(){
    saldoConta = 200
    alert(`Você tem R$${saldoConta},00 na sua conta`)
}
//Desafio 5 - Nome
function userName(){
    nomeUsuario = prompt('Digite seu nome: ')
    alert(`Boas-vindas ${nomeUsuario}! Espero que aproveite o tempo em nosso site!`)
}