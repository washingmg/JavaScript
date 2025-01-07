let array = []; 

const somador = (...valores) => {
    const somar = (val) => {
        let res = 0;
        for (let v of val) {
            res += v;
        }
        return res;
    };
    return somar(valores);
};

function adicionar() {
    let num = Number(document.getElementById('inumber').value);
    let resp = document.getElementById('iguarda');
    
    if (isNaN(num)) {
        window.alert('Por favor, digite um número!');
        return;
    }

    if (num > 100 || num < 1 || array.includes(num)) {
        window.alert('Valor inválido ou já encontrado na lista!');
    } else {
        array.push(num); 
        let item = document.createElement('option');
        item.text = `Valor ${num} adicionado!`; 
        resp.appendChild(item);
        document.getElementById('inumber').value = '';
    }
}

function finalizar() {
    let lista = document.getElementById('lista');
    document.getElementById('inumber').value = '';
    lista.innerHTML = '';  // Limpa a lista anterior

    if (array.length === 0) {
        let li = document.createElement('li');
        li.textContent = 'Nenhum valor cadastrado!';
        lista.appendChild(li);
        return;
    }

    let soma = somador(...array);
    let maior = Math.max(...array);
    let menor = Math.min(...array);
    let media = soma / array.length;

    lista.innerHTML += `<li>Ao todo, temos ${array.length} número(s) cadastrados!</li>`;
    lista.innerHTML += `<li>O maior valor é ${maior}!</li>`;
    lista.innerHTML += `<li>O menor valor é ${menor}!</li>`;
    lista.innerHTML += `<li>A soma dos valores é ${soma}!</li>`;
    lista.innerHTML += `<li>A média dos valores é ${media.toFixed(2)}!</li>`;

    // let liTotal = document.createElement('li');
    // liTotal.textContent = `Ao todo, temos ${array.length} número(s) cadastrados!`;
    // lista.appendChild(liTotal);
}

function limpar() {
    let resp = document.getElementById('iguarda');
    resp.innerHTML = '';  // Limpa as opções existentes no select

    let option = document.createElement('option');
    option.text = 'Digite um número acima!';
    resp.appendChild(option);

    array = []; // Limpa o array
    document.getElementById('lista').innerHTML = '';    
    document.getElementById('inumber').value = '';   
}
