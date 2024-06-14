const calcular = (event) => {
    event.preventDefault();
    
    // Obter o valor do comprimento da aresta digitado pelo usuário
    var aresta = parseFloat(document.getElementById('number').value);
    
    // Calcular o volume do cubo
    var volume = Math.pow(aresta, 3);

    // Exibir o volume calculado
    document.getElementById('res').textContent = volume;
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", calcular);