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