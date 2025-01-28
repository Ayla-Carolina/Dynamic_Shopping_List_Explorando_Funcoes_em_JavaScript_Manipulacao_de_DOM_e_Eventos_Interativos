//selecionando os elementos para interação 
// - campo input, - botão de salvar, - a lista dos elementos, - 
import { criarItemDaLista } from "./criarItemDaLista.js";
import verificarListaVazia from "./verificarListaVazia.js";

const botaoSalvar = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");


// adicionando um evento no botão de salvar com algumas ações na função 
// quando o botão for clicado ele evita que a página seja atualizada automaticamente

botaoSalvar.addEventListener("click", (evento) =>{
    evento.preventDefault(); 

    //criando um item da lista e adicionando na lista de compras
    const itemDaLista = criarItemDaLista();
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);

});

verificarListaVazia(listaDeCompras);
