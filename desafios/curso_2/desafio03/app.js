//Desafio 01 - Calculo IMC

function calcularIMC(altura, peso){
    let imc = peso / (altura**2);
    return imc.toFixed(2)
}

function exibirNaTela(){
    let altura = parseFloat(document.getElementById('altura').value);
    let peso = parseFloat(document.getElementById('peso').value);

    let resultado = document.getElementById('resultado_p');

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0){
        resultado.innerHTML = 'Por favor, insira um número válido!';
        return;
    }

    let imc = calcularIMC(altura, peso);
    resultado.innerHTML = `O seu IMC é <strong>${imc}</strong>`;
}

//Desafio 02 - Valor fatorial

function valorFatorial() {
    let fatorial = parseInt(document.getElementById('fatorial').value);
    let resultado_fatorial = document.getElementById('resultado_fatorial');

    // Verificação de entrada
    if (isNaN(fatorial) || fatorial < 0) {
        resultado_fatorial.innerHTML = 'Por favor, insira um número inteiro positivo.';
        return;
    }

    // Caso o número seja 0 ou 1, o fatorial é 1
    if (fatorial === 0 || fatorial === 1) {
        resultado_fatorial.innerHTML = `O fatorial de ${fatorial} é 1.`;
        return;
    }

    // Cálculo do fatorial
    let resultado = 1;
    let contador = fatorial;

    while (contador > 1) {
        resultado *= contador;
        contador--;
    }

    // Exibição final
    resultado_fatorial.innerHTML = `O fatorial de ${fatorial} é ${resultado}.`;
}
