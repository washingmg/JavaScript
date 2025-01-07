// A função reduce aplica uma função a cada elemento de um array e acumula os resultados em um único valor. 

const array = [1, 2, 3, 4, 5];

const resultado = array.reduce((acc, item) => {
    return acc + item;
}, 0); // valor inicial de acc é 0 e item será somado nele

console.log(resultado); // 15