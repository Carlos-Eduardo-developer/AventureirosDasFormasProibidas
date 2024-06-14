const calcular = (event) => {
    event.preventDefault()
    
    // Obter o valor do raio digitado pelo usuário
    var raio = parseFloat(document.getElementById('number').value);
    
    // Calcular a área do círculo
    var area = Math.PI * Math.pow(raio, 2);

    // Exibir a área calculada
    document.getElementById('res').textContent = area.toFixed(2);
}
const btn = document.querySelector("#btn")
btn.addEventListener("click" , calcular)
