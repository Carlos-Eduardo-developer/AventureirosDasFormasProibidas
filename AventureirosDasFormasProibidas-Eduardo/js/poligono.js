const calcular = (event) => {
    event.preventDefault();

    // Obter o número de lados do polígono e o comprimento de um lado digitados pelo usuário
    var numLados = parseFloat(document.getElementById('number').value);
    var comprimentoLado = parseFloat(document.getElementById('length').value);

    // Calcular a área do polígono regular
    var area = (numLados * Math.pow(comprimentoLado, 2)) / (4 * Math.tan(Math.PI / numLados));

    // Exibir a área calculada
    document.getElementById('res').textContent = area.toFixed(2);
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", calcular);