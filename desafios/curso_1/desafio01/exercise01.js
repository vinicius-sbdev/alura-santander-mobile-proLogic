alert('Boas-vindas ao nosso site!');
let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let mensagemErro = 'Erro! Preencha todos os campos'
alert(mensagemErro)
let nomeUser = prompt('Digite seu nome: ')
let idadeUser = prompt('Digite sua idade: ')

if (idadeUser >= 18){
    alert(nomeUser + '!' + ' Você tem ' + idadeUser + ' anos de idade. Você pode tirar sua habilitação!')
} else{
    alert(nomeUser + '!' + ' Você tem ' + idadeUser + ' anos de idade. Você precisa ter 18 anos ou mais para tirar a habilitação!')
}