// função para somar
function soma() {
    var num1 = parseFloat(prompt("Digite o primeiro número:"));
    var num2 = parseFloat(prompt("Digite o segundo número:"));
    var resultado = num1 + num2;
    exibirResultado(resultado);
}

// função para subtrair
function subtracao() {
    var num1 = parseFloat(prompt("Digite o primeiro número:"));
    var num2 = parseFloat(prompt("Digite o segundo número:"));
    var resultado = num1 - num2;
    exibirResultado(resultado);
}

// função para multiplicar
function multiplicacao() {
    var num1 = parseFloat(prompt("Digite o primeiro número:"));
    var num2 = parseFloat(prompt("Digite o segundo número:"));
    var resultado = num1 * num2;
    exibirResultado(resultado);
}

// função para dividir
function divisao() {
    var num1 = parseFloat(prompt("Digite o primeiro número:"));
    var num2 = parseFloat(prompt("Digite o segundo número:"));
    var resultado = num1 / num2;
    exibirResultado(resultado);
}

// função para sair
function sair() {
    alert("Até a próxima!");
    document.getElementById("resultado").textContent = "";
}

function exibirResultado(resultado) {
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}
