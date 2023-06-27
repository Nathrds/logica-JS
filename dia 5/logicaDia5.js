let lista = {
    frutas:[],
    laticinios: [],
    congelados: [],
    doces: []
};

// função para adicionar comida na lista
function adicionarComida() {
    let adicionar = prompt("Deseja adicionar uma comida na lista de compras? (sim/não)");

    if (adicionar.toLowerCase() === 'sim') {
        let comida = prompt("Qual comida você deseja inserir?");
        let categoria = prompt('Em qual categoria essa comida se encaixa? (frutas, laticinios, congelados, doces)');

        if (categoria.toLowerCase() in lista) {
            lista[categoria.toLowerCase()].push(comida);
        } else {
            alert('Categoria Inválida!');
        }

        adicionarComida();
    } else if (adicionar.toLowerCase() === 'não') {
        exibirLista();
    } else {
        alert("Opção Inválida!");
        adicionarComida();
    }
}

// função para mostrar a lista
function exibirLista() {
    let listaCompras = document.getElementById("listaCompras");
    listaCompras.innerHTML = "";

    for (let categoria in lista) {
        if (lista[categoria].length > 0) {
            let itensCategoria = document.createElement("p");
            itensCategoria.textContent = categoria.charAt(0).toUpperCase() + categoria.slice(1) + ": " + lista[categoria].join(", ");
            listaCompras.appendChild(itensCategoria);
        }
    }
}