export function gerarDataLista(){

    const data = new Date();

    const dataFinal = data.toLocaleDateString('pt-br',{
        day: '2-digit',
        month: '2-digit', 
        year:'numeric'
    });

    return dataFinal;
}
