const calcular = (event) => {
    event.preventDefault();

    // Obter o comprimento do lado digitado pelo usuário
    var lado = parseFloat(document.getElementById('number').value);

    // Calcular a área do quadrado
    var area = Math.pow(lado, 2);

    // Exibir a área calculada
    document.getElementById('res').textContent = area;
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", calcular);