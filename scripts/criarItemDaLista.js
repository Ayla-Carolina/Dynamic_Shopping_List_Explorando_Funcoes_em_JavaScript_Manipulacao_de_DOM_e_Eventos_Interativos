import gerarDiaDaSemana from "./gerarDiaDaSemana.js";
const inputItem = document.getElementById("input-item");
let contador = 0;

export function criarItemDaLista (){
    

    //validando o campo do input para garantir que ele não esteja vazio ao clicar do botão 
    if(inputItem.value === ""){
        alert("Atenção! Insira um elemento no campo.");
        return
    }

    //caso o campo seja preenchido devemos criar os elementos para os itens na lista. 
    // a div, input do checkbox, o parágrafo, e a li (primeira) 

    const itemDaLista = document.createElement("li");
    const containerDaLista = document.createElement("div");
    containerDaLista.classList.add("lista-item-container");

    const checkboxLista = document.createElement("input");
    checkboxLista.type = "checkbox";
    checkboxLista.id = "checkbox-" + contador++;

    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    checkboxLista.addEventListener("click", function() {
        if (checkboxLista.checked) {
            nomeItem.style.textDecoration = "line-through";
            nomeItem.style.color = "rgb(0, 0, 0, 0.5)";
        }else{
            nomeItem.style.textDecoration = "none";
            nomeItem.style.color = "black";
        }
    });

    // adicionando os elementos 
    
    containerDaLista.appendChild(checkboxLista);
    containerDaLista.appendChild(nomeItem);

    itemDaLista.appendChild(containerDaLista);
    const dataCompleta = gerarDiaDaSemana();
    
    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data");
    itemDaLista.appendChild(itemData);

    return itemDaLista;

}