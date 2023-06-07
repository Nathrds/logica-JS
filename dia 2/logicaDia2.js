/* const: Declara uma constante com um valor que não pode ser reatribuído. O valor de uma constante é fixo após a sua inicialização.
let: Declara uma variável que pode ser reatribuída. Ao contrário de uma constante, o valor de uma variável let pode ser alterado após a sua inicialização.*/

var formulario = document.getElementById('formulario');
formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // impede a atualização da página
});

function enviar() {
    let nome = document.querySelector('.nome').value;
    let anos = document.querySelector('.anos').value;
    let linguagem = document.querySelector('.linguagem').value;

    document.getElementById('resultado').innerHTML = ('Olá ' + nome + ", " + 'você tem ' + anos + ' anos e já está aprendendo ' + linguagem + '!' );

    // const => variável com um valor que não pode ser alterado após a sua atribuição inicial
    const gosta = prompt('Você gosta de estudar ' + linguagem + '? Responda com o número 1[SIM] ou 2[NÃO]');
    if (gosta == 1) {
        alert("Muito bom! Continue estudando e você terá muito sucesso.");
    } else if (gosta == 2) {
        alert("Ahh que pensa... Já tentou aprender outras linguagens?");
    }
}
