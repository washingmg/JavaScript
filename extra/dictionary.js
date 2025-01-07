var dict = new Map();
    
// Adiciona a chave e o valor no mapa
dict.set('chave', 'valor');
console.log('Chave e valor adicionados');

// Com item inserido
console.log('has', dict.has('chave'));
console.log('get', dict.get('chave'));

console.log('Chave inexistente');
// Com um item não inserido
console.log('has', dict.has('chave inexistente'));
console.log('get', dict.get('chave inexistente'));

// Remove a chave e o valor no mapa
dict.delete('chave');
console.log('Chave e valor removida')

// Com item removido
console.log('has', dict.has('chave'));
console.log('get', dict.get('chave'));