function tabuada() {
    let num = Number(document.getElementById('inumber').value);
    let resp = document.getElementById('itabu');
    
    if (isNaN(num)) {
        window.alert('Por favor, digite um número!');
    } else {
        resp.innerHTML = ''; // Limpa os itens anteriores
        for (let i = 1; i <= 10; i++) {
            let item = document.createElement('option');
            item.text = `${i} x ${num} = ${num * i}`;
            resp.appendChild(item);
        }
    }
}
