function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
    document.querySelector('.icon').src = "./icons/menu.svg";
  } else {
    menuMobile.classList.add('open');
    document.querySelector('.icon').src = "./icons/close.svg";
  }
}
// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(id, nome) {
    const preco = 20.00; // Preço fixo para os shorts como exemplo
    const imagem = `./clothes/short/${id}.jpg`; // Supondo que o id da imagem corresponde ao id do produto
    const quantidade = 1; // Quantidade inicial

    const produto = {
        id: id,
        nome: nome,
        preco: preco,
        imagem: imagem,
        quantidade: quantidade
    };

    adicionarProdutoAoCarrinho(produto);
    atualizarCarrinho();
    console.log(`Produto "${nome}" adicionado ao carrinho.`);
}

// Função para adicionar um produto ao carrinho de sessionStorage
function adicionarProdutoAoCarrinho(produto) {
    let carrinho = sessionStorage.getItem('carrinho');

    if (!carrinho) {
        carrinho = [];
    } else {
        carrinho = JSON.parse(carrinho);
    }

    carrinho.push(produto);
    sessionStorage.setItem('carrinho', JSON.stringify(carrinho));
}

// Função para atualizar o conteúdo do carrinho na interface do usuário
function atualizarCarrinho() {
    // Sua função atualizarCarrinho aqui
}

// Adicione um evento de clique aos botões "Shop Now"
document.querySelectorAll('.btn-view').forEach(button => {
    button.addEventListener('click', function() {
        const id = this.dataset.id; // Obtém o ID do produto do atributo data-id
        const nome = this.dataset.nome; // Obtém o nome do produto do atributo data-nome
        adicionarAoCarrinho(id, nome);
    });
});

// Chama a função inicial para garantir que o carrinho seja atualizado ao carregar a página
atualizarCarrinho();