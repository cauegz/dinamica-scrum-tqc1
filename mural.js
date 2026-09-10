document.addEventListener('DOMContentLoaded', () => {
    const ITENS_POR_PAGINA = 6;
    let paginaAtual = 1;

    const cards = Array.from(document.querySelectorAll('.mural-item'));
    const btnAnterior = document.getElementById('anterior');
    const btnProximo = document.getElementById('proximo');
    const contador = document.getElementById('contador');

    // Se não encontrar os elementos do mural, interrompe a execução
    if (!cards.length || !btnAnterior || !btnProximo || !contador) return;

    const totalPaginas = Math.ceil(cards.length / ITENS_POR_PAGINA);

    function atualizarMural() {
        const inicio = (paginaAtual - 1) * ITENS_POR_PAGINA;
        const fim = inicio + ITENS_POR_PAGINA;

        // Exibe apenas os cards do intervalo da página atual
        cards.forEach((card, index) => {
            if (index >= inicio && index < fim) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        // Atualiza o texto do contador (ex: "1 / 3")
        contador.textContent = `${paginaAtual} / ${totalPaginas}`;

        // Habilita/Desabilita os botões de acordo com a página atual
        btnAnterior.disabled = paginaAtual === 1;
        btnProximo.disabled = paginaAtual === totalPaginas;
    }

    // Eventos dos botões
    btnAnterior.addEventListener('click', () => {
        if (paginaAtual > 1) {
            paginaAtual--;
            atualizarMural();
        }
    });

    btnProximo.addEventListener('click', () => {
        if (paginaAtual < totalPaginas) {
            paginaAtual++;
            atualizarMural();
        }
    });

    // Renderiza a primeira página ao carregar
    atualizarMural();
});