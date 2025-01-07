
// Método antigo de exportar funções
// function sub(a, b) {
//     return a - b;
// }

// function mul(a, b) {
//     return a * b;
// }

// function div(a, b) {
//     return a / b;
// }

// module.exports = {sum(a, b) { return a + b;}, sub, mul, div}
// // module.exports = sum

export function sum(a, b) {
    return a + b;
}



export function mul(a, b) {
    return a * b;
}

export function div(a, b) {
    return a / b;
}


function sub(a, b) {
    return a - b;
}

export default {
    sub,
};
