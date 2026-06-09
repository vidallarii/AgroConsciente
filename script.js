const btn = document.getElementById("btnMensagem");

btn.addEventListener("click", () => {
    alert(
        "AgroForte: Produzir mais, preservar melhor e construir um futuro sustentável para todos!"
    );
});

let numero = document.getElementById("numero");
let contador = 0;

function animarContador() {
    const intervalo = setInterval(() => {
        contador += 5;
        numero.textContent = contador;

        if (contador >= 500) {
            clearInterval(intervalo);
        }
    }, 20);
}

window.onload = animarContador;