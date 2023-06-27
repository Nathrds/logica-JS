let numeroAdivinha;
let tentativas = 0;

// função para gerar um número aleatório entre 0 e 10
function gerarNumeroAdivinha() {
    numeroAdivinha = Math.floor(Math.random() * 11);
}

// função para verificar o chute do usuário
function verificarChute() {
    let chute = parseInt(document.getElementById('idChute').value);

    if (chute === numeroAdivinha) {
        document.getElementById('resultado').innerHTML = "Parabéns! Você acertou!!";
    } else {
        tentativas++;
        if (tentativas < 3) {
            document.getElementById("resultado").innerHTML = 'Que pena... Você errou! Tente novamente.';
        } else {
            document.getElementById('resultado').innerHTML = "Suas tentativas acabaram! O número era " + numeroAdivinha;
        }
    }
}

gerarNumeroAdivinha();