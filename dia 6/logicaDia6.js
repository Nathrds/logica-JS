var lista = {
    frutas: [],
    laticinios: [],
    congelados: [],
    doces: []
  };
  
// função para adicionar comida na lista e remover
function adicionarComida() {
    var adicionar = prompt("Deseja adicionar uma comida na lista de compras? (sim /não / remover)");
  
    if (adicionar.toLowerCase() === "sim") {
      var comida = prompt("Qual comida você deseja inserir?");
      var categoria = prompt("Em qual categoria essa comida se encaixa? (frutas, laticínios, congelados, doces)");
  
      if (categoria.toLowerCase() in lista) {
        lista[categoria.toLowerCase()].push(comida);
      } else {
        alert("Categoria inválida!");
      }
  
      exibirLista();
      adicionarComida();
    } else if (adicionar.toLowerCase() === "remover") {
      if (verificarListaVazia()) {
        alert("A lista está vazia! Não há itens para remover.");
        adicionarComida();
      } else {
        var itemRemover = prompt("Lista atual: " + exibirLista() + "\n\nDigite o item que deseja remover:");
  
        if (removerItem(itemRemover)) {
          alert("O item foi removido com sucesso!");
        } else {
          alert("Não foi possível encontrar o item dentro da lista!");
        }
  
        exibirLista();
        adicionarComida();
      }
    } else if (adicionar.toLowerCase() === "não") {
      exibirLista();
    } else {
      alert("Opção inválida!");
      adicionarComida();
    }
}
  
  function verificarListaVazia() {
    for (var categoria in lista) {
      if (lista[categoria].length > 0) {
        return false;
      }
    }
    return true;
  }
  
  function removerItem(item) {
    for (var categoria in lista) {
      var index = lista[categoria].indexOf(item);
      if (index !== -1) {
        lista[categoria].splice(index, 1);
        return true;
      }
    }
    return false;
  }

// função para mostrar a lista
function exibirLista() {
    var listaCompras = document.getElementById("listaCompras");
    listaCompras.innerHTML = "";
  
    for (var categoria in lista) {
      var itens = lista[categoria];
  
      if (itens.length > 0) {
        var listaCategoria = document.createElement("ul");
        listaCategoria.innerHTML = "<strong>" + categoria.charAt(0).toUpperCase() + categoria.slice(1) + ":</strong>";
  
        for (var i = 0; i < itens.length; i++) {
          var item = document.createElement("li");
          item.textContent = itens[i];
          listaCategoria.appendChild(item);
        }
  
        listaCompras.appendChild(listaCategoria);
      }
    }
  
    return listaCompras.innerHTML;
}
  
  adicionarComida();
