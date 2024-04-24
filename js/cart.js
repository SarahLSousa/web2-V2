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

// Corrija a função adicionarAoCarrinho para receber os parâmetros corretos
function adicionarAoCarrinho(id, nome) {
    const preco = 100.00; // Definindo o preço fixo para a camiseta como exemplo
    const imagem = `./clothes/Tshirt/${id}.jpg`; // Supondo que o id da imagem corresponde ao id do produto
    const quantidade = 1; // Definindo a quantidade inicial como 1

    const produto = {
        id: id,
        nome: nome,
        preco: preco,
        imagem: imagem,
        quantidade: quantidade
    };

    adicionarProdutoAoCarrinho(produto);
    atualizarTotal();
    console.log(`Produto "${nome}" adicionado ao carrinho.`);
}

 // Função para calcular e atualizar o valor total e a quantidade total de produtos
  function atualizarTotal() {
    let total = 0;
    let quantidadeTotal = 0;

    // Loop através de todos os itens de compra
    document.querySelectorAll('.checkOut-buy').forEach(item => {
      // Obtenha o valor e a quantidade de cada item
      const preco = parseFloat(item.querySelector('.checkOut-buy-text p').textContent.replace('R$', '').trim());
      const quantidade = parseInt(item.querySelector('select').value);

      // Some ao total e à quantidade total
      total += preco * quantidade;
      quantidadeTotal += quantidade;
    });

    // Atualize o texto do total
    const totalFormatado = 'R$ ' + total.toFixed(2);
    document.querySelector('.valorProd').textContent = totalFormatado;

    // Atualize o número total de produtos na área finalBuy-text
    document.querySelector('#NumProd').textContent = quantidadeTotal;

    // Atualize o texto do total na área finalBuy-text
    document.querySelector('.finalBuy-text h5.valorProd').textContent = totalFormatado;
  }

  // Adicione um ouvinte de eventos para todas as seleções de quantidade
  document.querySelectorAll('.checkOut-buy select').forEach(select => {
    select.addEventListener('change', atualizarTotal);
  });

  // Chame a função inicial para garantir que o total esteja correto ao carregar a página
  atualizarTotal();