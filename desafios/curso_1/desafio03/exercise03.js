//Contador crescente
function contCresc(){
    //Variável que armazena o número atual do contador
    let contador = 1;

    //Loop que acrescenta +1 ao contador até determinado ponto
    while (contador < 11){
        console.log(`Contador: ${contador}`);
        contador++;
    }

}
//Contador decrescente
function contDecresc(){
    let contador = 10
    
    while (contador > 0){
        console.log(`Contador: ${contador}`);
        contador--;
    }
}
//Contagem regressiva
function contRegress(){
    let contador = parseInt(prompt('Digite um número: '));

    while (contador > -1){
        console.log(`Contador: ${contador}`)
        contador--;
    }
}
//Contagem progressiva
function contProgress(){
    let numeroCont = parseInt(prompt('Digite um número: '));
    let contador = 0;

    while (contador < numeroCont){
        console.log(`Contador: ${contador}`)
        contador++;
    }
}