const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria'];

// function com elemento e o índice
nomes.forEach(function(nome, i) {
    console.log('[forEach]', nome, i);
})

const nomes2 = ['Whinds', 'Freeway', 'Teste', 'Maria'];

// Elemento, índice e o array
nomes2.map(function(nome, i) {
    console.log('[map]', nome, i);
})

// caso queiramos somente uma forma mais elegante para trabalhar com o for usamos o .forEach
// caso queiramos transformar/alterar valores ou mesmo concatenar operações em cima de arrays o .map é o mais indicado.