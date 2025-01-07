
function contar() {
    let inicio, fim, passo, resp;
    inicio = Number(document.getElementById('iinicio').value);
    fim = Number(document.getElementById('ifim').value);
    passo = Number(document.getElementById('ipasso').value);
    resp = document.querySelector('div#res');

    // Verifica se os valores são válidos
    if (isNaN(inicio) || isNaN(fim) || isNaN(passo)) {
        resp.innerHTML = "Por favor, preencha todos os campos com valores numéricos.";
        return
    } else{
        if (passo <= 0) {
            passo = 1
        }
        resp.innerHTML = 'Contando: '
        if (inicio < fim){
            for (let i = inicio; i <= fim; i += passo) {
                resp.innerHTML += ` ${i} \u{1F449}`;
            }
        } else {
            for (let i = inicio; i >= fim; i -= passo) {
                resp.innerHTML += ` ${i} \u{1F449}`;
            }
        }
        resp.innerHTML += `\u{1F3C1}`
    }
}

function limpar() {
    resp = document.querySelector('div#res');
    document.getElementById('iinicio').value = ''
    document.getElementById('ifim').value = ''
    document.getElementById('ipasso').value = ''
    resp.innerHTML = null
}