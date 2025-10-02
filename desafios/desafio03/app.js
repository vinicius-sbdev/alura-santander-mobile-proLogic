//Contador crescente
function contCresc(){
    //Variável que armazena o número atual do contador
    contador = 1;

    //Loop que acrescenta +1 ao contador até determinado ponto
    while (contador < 11){
        console.log(`Contador: ${contador}`);
        contador++;
    }

}
//Contador decrescente
function contDecresc(){
    contador = 10
    
    while (contador > 0){
        console.log(`Contador: ${contador}`);
        contador--;
    }
}
//Contagem regressiva
function contRegress(){
    contador = parseInt(prompt('Digite um número: '));

    while (contador > -1){
        console.log(`Contador: ${contador}`)
        contador--;
    }
}
//Contagem progressiva
function contProgress(){
    numeroCont = parseInt(prompt('Digite um número: '));
    contador = 0;

    while (contador < numeroCont){
        console.log(`Contador: ${contador}`)
        contador++;
    }
}