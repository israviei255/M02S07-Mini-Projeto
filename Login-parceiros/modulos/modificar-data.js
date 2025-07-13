export function modificarData(dataCriacaoISO) {
    let dataNova = new Date(dataCriacaoISO);

    const opcoes = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'America/Sao_Paulo',
        hour12: false,
    };

    dataNova = dataNova.toLocaleString('pt-BR', opcoes);

    return dataNova;
}