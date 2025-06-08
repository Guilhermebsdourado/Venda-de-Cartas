//aplicar filtros do HTML e mandar pro JS
const botaoFiltrar = document.querySelector('.btn-filtrar');

//faser executar o click do botão de aplicar filtros
botaoFiltrar.addEventListener('click', function () {
    // pegar os valores dos campos de categoria e preço
    const categoriaSelecionada = document.querySelector('#categoria').value;
    const precoMaximoSelecionado = document.querySelector('#preco').value;
    // para ver se a carta deve ser mostrada ou escondida com base no filtro digitado
    const cartas = document.querySelectorAll('.carta');
    
    cartas.forEach(function(carta){
        const categoriaCarta = carta.dataset.categoria;
        const precoCarta = carta.dataset.preco;

        let mostrarCarta = true;

        console.log('A categoria selecionada foi:', categoriaSelecionada)

        const temFiltroDeCategoria = categoriaSelecionada !== '';

        const cartaNaoBateComFiltroDeCategoria = categoriaSelecionada.toLowerCase() !== categoriaCarta.toLowerCase();

        if(temFiltroDeCategoria && cartaNaoBateComFiltroDeCategoria) {
            mostrarCarta = false;
        }

        const temFiltroDePreco = precoMaximoSelecionado !== '';
        const cartaNaoBateComFiltroDePrecoMaximo = parseFloat(precoCarta) > parseFloat(precoMaximoSelecionado)

        if(temFiltroDePreco && cartaNaoBateComFiltroDePrecoMaximo) {
            mostrarCarta = false;
        }

        if(mostrarCarta) {
            carta.classList.add('mostrar');
        }else{
            carta.classList.remove('mostrar');
            carta.classList.add('esconder');
        }
    });
});