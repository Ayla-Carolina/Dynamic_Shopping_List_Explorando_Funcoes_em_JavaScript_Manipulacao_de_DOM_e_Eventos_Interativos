
export function verificaItem(nomeItem, blocoDaLista){

    //se o nome do input já existir, essa função exibe um alerta
    const itensExistentes = blocoDaLista.getElementsByTagName("li");

    for (let i = 0; i < itensExistentes.length; i++) {
        let nomeExistente = itensExistentes[i].querySelector("p").innerText;

        if (nomeItem.value.trim().toLowerCase() === nomeExistente.trim().toLowerCase()) {
            return true;
        }
    }
    return false;
}
