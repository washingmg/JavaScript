

// Operador Bitwase -> números binários

let n1, n2, res, res1, res2= 0
n1 = 13
n2 = 19
res = n1 ^ n2 // ^ == ou exclusivo
res1 = n1 << 1 // deslocamento em um bit para a esquerda
res2 = n1 >> 1 // deslocamento em um bit para a esquerda

console.log(n1 & n2) // Se tiver 2 1 retornará 1 'and,e'
console.log(n1 | n2) // Onde tiver um retornará 1 'or,ou'
console.log(res) // Equivalencia, onde tiver 1, retornará 1
console.log(res1) // Dobra o valor
console.log(res2) // Divide o valor em 2
