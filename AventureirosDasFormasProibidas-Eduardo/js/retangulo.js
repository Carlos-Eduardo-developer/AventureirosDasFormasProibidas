const calcular = (event) => {
    event.preventDefault();

    // Obter o comprimento e a largura digitados pelo usuário
    var comprimento = parseFloat(document.getElementById('comprimento').value);
    var largura = parseFloat(document.getElementById('largura').value);

    // Calcular a área do retângulo
    var area = comprimento * largura;

    // Exibir a área calculada
    document.getElementById('res').textContent = area;
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", calcular);