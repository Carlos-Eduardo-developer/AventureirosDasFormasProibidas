const calcular = (event) => {
    event.preventDefault();
    // Obter o valor do comprimento digitado pelo usuário
    var comprimento = parseFloat(document.getElementById('comprimento').value);
    
    // Obter o valor da largura digitada pelo usuário
    var largura = parseFloat(document.getElementById('largura').value);

    // Obter o valor da altura digitada pelo usuário
    var altura = parseFloat(document.getElementById('altura').value);
    
    // Calcular o volume do cuboide
    var volume = comprimento * largura * altura;

    // Exibir o volume calculado
    document.getElementById('res').textContent = volume;
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", calcular);