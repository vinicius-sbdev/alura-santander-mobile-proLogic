//Desafio 01 - Exibe uma mensagem de boas-vindas via console.log
console.log('Boas-vindas, usuário!');

//Desafio 02 - Visualiza o nome via console.log()
function nomeUser(){
    let nome = 'Vinícius'; 
    console.log(`Olá, ${nome}!`);
}

//Desafio 03 - Requisitan o nome do usuário

function nameRequest(){
    let userName = prompt('Digite seu nome, por favor: ');
    console.log(`Olá, ${userName}! Seja muito bem-vindo(a)!`);
}

//Desafio 04 - Pergunta sua Linguagem de programação favorita e exibe no console

function favProLang(){
    let proLang = prompt('Qual é a sua linguagem de programação favorita?');
    console.log(`A sua linguagem de programação favorita é ${proLang}`);
}

//Desafio 05 - Soma valores

function valueSum(){
    let value01 = parseInt(prompt('Digite o primeiro número: '));
    let value02 = parseInt(prompt('Digite o segundo número: '));
    let result = value01 + value02;
    console.log(`A soma de ${value01} e ${value02} é igual a ${result}`);
}

//Desafio 06 - Subtrai valores

function valueSub(){
    let val01 = parseInt(prompt('Digite o primeiro número: '));
    let val02 = parseInt(prompt('Digite o segundo número: '));
    let resultSub = val01 - val02;
    console.log(`A subtração de ${val01} e ${val02} é igual a ${resultSub}`);
}

//Desafio 07 - Compara a idade, se está ou não na maioridade

function ageComp(){
    let idade = parseInt(prompt('Digite sua idade: '));

    if (idade >= 18){
        console.log(`você é maior de idade, pois tem ${idade} anos de idade`);
    } else {
        console.log(`Você é menor de idade, pois tem ${idade} anos de idade`);
    }
}

//Desafio 08 - Verificar se um valor é positivo ou negativo

function valueNegativePositive(){
    valueToCompare = parseInt(prompt('Digite um número positivo ou negativo: '));
    if (valueToCompare > 0){
        console.log(`O número ${valueToCompare} é positivo`);
    } else {
        console.log(`O número ${valueToCompare} é negativo`);
    }
}

//Desafio 09 - Loop que exibe os números de 1 a 10 no console

function loopOneToTen(){
    loopValue = 1;

    while (loopValue < 11){
        console.log(`Contador: ${loopValue}`);
        loopValue++;
    }
}

//Desafio 10 - Verificar se a nota é maior ou igual a 7, e determinar se o aluno foi aprovado ou não de acordo

function scoreCheck(){
    score = 8;
    scoreVerification = score >= 7 ? "Aprovado!" : "Reprovado";
    console.log(`Sua nota é ${score}! Você foi ${scoreVerification}!`);
}

//Desafio 11 - Usando Math.random() com intervalo padrão

function randNumber(){
    randValueP = Math.random();
    console.log(randValueP);
}

//Desafio 12 - Usando Math.random() com intervalo entre 1 e 10 (números inteiros)

function randNumberTen(){
    randValueOneToTen = parseInt(Math.random() * 10 + 1);
    console.log(randValueOneToTen);
}

//Desafio 13 - Usando Math.random() com intervalo entre 1 e 1000 (números inteiros)

function randNumberThousand(){
    randValueOneToThousand = parseInt(Math.random() * 1000 + 1);
    console.log(randValueOneToThousand);
}