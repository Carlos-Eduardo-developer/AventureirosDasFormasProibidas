const calcular = (event) => {
    event.preventDefault();

    // Obter o comprimento das bases e a altura digitados pelo usuário
    var baseMaior = parseFloat(document.getElementById('baseMaior').value);
    var baseMenor = parseFloat(document.getElementById('baseMenor').value);
    var altura = parseFloat(document.getElementById('altura').value);

    // Calcular a área do trapézio regular
    var area = ((baseMaior + baseMenor) * altura) / 2;

    // Exibir a área calculada
    document.getElementById('res').textContent = area;
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", calcular);