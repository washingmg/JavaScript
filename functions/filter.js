// A função filter retorna um novo array com os elementos que satisfazem uma determinada condição.

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const resultado = array.filter(function(item) {
    return item % 2 === 0;
});

console.log(resultado); // [2, 4]