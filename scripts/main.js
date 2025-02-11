import { adicionarItem } from "./adicionarItem.js";
import { verificaItem } from "./verificaItem.js";
import { gerarDataLista } from "./gerarDataLista.js";

const botaoAdicionar = document.getElementById("btnSalvar");
const blocoDaLista = document.querySelector(".list-card");
const inputItem = document.getElementById('input-item');


//evento que fará com que o js espero o HTML carregar por inteiro 
document.addEventListener("DOMContentLoaded", ()=> {
    const pData = document.getElementById("dataAtual");

    if (pData){
        pData.textContent =  gerarDataLista();

        setInterval(() => {
        pData.textContent =  gerarDataLista();    
        }, 1000);
    }
})


botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    console.log("teste")


    if(verificaItem(inputItem, blocoDaLista)){
        
        inputItem.value = "";
        return alert("Este item já existe."); 
        
    }

    const adicionarItemNaLista = adicionarItem(inputItem);
    blocoDaLista.appendChild(adicionarItemNaLista);

    inputItem.value = "";
});
