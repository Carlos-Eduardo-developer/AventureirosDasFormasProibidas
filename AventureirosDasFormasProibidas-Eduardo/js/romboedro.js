const calcular = (event) => {
    event.preventDefault();

    // Obter as dimensões digitadas pelo usuário
    var comprimento = parseFloat(document.getElementById('comprimento').value);
    var largura = parseFloat(document.getElementById('largura').value);
    var altura = parseFloat(document.getElementById('altura').value);

    // Calcular o volume do romboedro
    var volume = comprimento * largura * altura;

    // Exibir o volume calculado
    document.getElementById('res').textContent = volume;
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", calcular);