let canvas = document.getElementById("canvas");
let contexto = canvas.getContext("2d");
let desenhando = false;
let usandoBorracha = false;
let tamanhoBorracha = 30; // Altere este valor para ajustar o tamanho da borracha


let corEscolhida = document.getElementById("corEscolhida");
corEscolhida.addEventListener("change", function (event) {
    contexto.strokeStyle = event.target.value;
});

contexto.lineWidth = 5;

canvas.addEventListener("mousedown", function (event) {
    if (usandoBorracha) {
        contexto.clearRect(
            event.clientX - contexto.canvas.offsetLeft - tamanhoBorracha / 2,
            event.clientY - contexto.canvas.offsetTop - tamanhoBorracha / 2,
            tamanhoBorracha,
            tamanhoBorracha
        );
    } else {
        desenhando = true;
        contexto.beginPath();
        contexto.moveTo(event.clientX - contexto.canvas.offsetLeft, event.clientY - contexto.canvas.offsetTop);
    }
});

canvas.addEventListener("mousemove", function (event) {
    if (desenhando && !usandoBorracha) {
        contexto.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        contexto.stroke();
    }
});

canvas.addEventListener("mouseup", function (event) {
    desenhando = false;
});


let btnBorracha = document.getElementById("btnBorracha");
btnBorracha.addEventListener("click", function () {
    usandoBorracha = !usandoBorracha;
    if (usandoBorracha) {
        btnBorracha.textContent = "Desenhar";
    } else {
        btnBorracha.textContent = "Borracha";
    }
});