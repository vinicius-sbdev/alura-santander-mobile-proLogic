//Desafio 01 - Alterando título
let titulo = document.querySelector('h1');

titulo.innerHTML = 'Hora do Desafio';

//Desafio 02 - Mensagem no console

function verificarChute(){
    console.log('O botão foi clicado.');
}

//Desafio 03 - Mensagem de alerta
function alertButton(){
    alert('Eu amo JS');
}

//Desafio 04 - Prompt - digite uma cidade - Alert - Concatenando mensagem

function cityAsk(){
    let cidade = prompt('Me diga o nome de uma cidade brasileira');
    alert(`Estive em ${cidade} e me lembrei de você!`);
}

//Desafio 05 - 2.Prompt - Pedindo números - Alert - Exibindo o resultado da soma

function valueSum(){
    let value01 = parseInt(prompt('Me diga o primeiro número: '));
    let value02 = parseInt(prompt('Me diga o segundo número: '));
    let result = value01 + value02;

    alert(`A soma de ${value01} e ${value02} é igual a ${result}`);
}