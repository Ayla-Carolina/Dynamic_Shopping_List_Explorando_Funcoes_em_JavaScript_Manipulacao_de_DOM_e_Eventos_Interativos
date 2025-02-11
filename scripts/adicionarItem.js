let contador = 0;

export function adicionarItem(inputItem){

    //se campo estiver vazio será exibido um alerta 
    if (inputItem.value === "") {
        return alert("Campo vazio. Adicione uma atividade.");
    }


    // com o campo preenchido iremos criar os elementos da lista e juntar ao container 
    const itemDaLista = document.createElement("li");
    const containerLista = document.createElement("div");
    containerLista.classList.add("container-da-lista");
    

    const checkBoxItem = document.createElement("input");
    checkBoxItem.type = "checkbox";
    checkBoxItem.id = "checkbox-" + contador++;

    const nomeItem = document.createElement("p");
    //o parágrafo será o item inserido no input
    nomeItem.innerText = inputItem.value;

    //eventos no checkbox para que ele mude como uma tarefa concluída ao ser clicado 
    checkBoxItem.addEventListener("click", function () {
        if (checkBoxItem.checked) {
            nomeItem.style.textDecoration = "line-through";
            nomeItem.style.color = 'gray';
        }else{
            nomeItem.style.textDecoration = "none";
            nomeItem.style.color ="rgb(57, 65, 80)";
        }
    });

       // linkando os itens 
    containerLista.appendChild(checkBoxItem);
    containerLista.appendChild(nomeItem);
    itemDaLista.appendChild(containerLista);

    

    return itemDaLista;

}
