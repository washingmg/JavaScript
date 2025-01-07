

// PRÉ E PÓS INCREMENTO

let n = 10
let n1 = 20
console.log(n++) // pós incremento n +1 -> 10
console.log(++n) // pré incremento +1 n -> 12
console.log(n) // Resultado final
console.log(n1 + "" + n1) // Concatenação
console.log(n1 +  n1) // Normal

// OPERADOR TERNÁRIO

res = (!(n % 2) ? 'PAR' : 'Ímpar')
console.log(res) //0 = true, 1 == ímpar

// OPERADOR TYPEOF

let v1 = 10
let v2 = "10"
let v3 = v1 === v2
let v4 = {nome: "Washington"}

console.log(v1 + " - " + typeof(v1))
console.log(v2 + " - " + typeof(v2))
console.log(v3 + " - " + typeof(v3))
console.log(v4 + " - " + typeof(v4))
console.log('')


// OPERADOR SPREAD
// Quebra um array, esplaha valores, copia...

let g1 = [10,20,30]
let g2 = [11,22,33,44,55]
let g3 = [...g1,...g2] // ...g1 -> copia

console.log(`n1: ${g1}`)
console.log(`n2: ${g2}`)
console.log(`n3: ${g3}` + " " + typeof(g3))
console.log('')

const jogador1 = {nome: "Washington", energia: 100, vidas: 3, magia: 150}
const jogador2 = {nome: "Washington", energia: 100, vidas: 35, velocidade: 80}
const jogador3 = {...jogador1,...jogador2}
console.log(jogador3)


const soma = (v1,v2,v3)=> {
    return v1 + v2 + v3
}

let valores = [1,3,5,7] // vai pegar sempre os 3 primeiros
console.log(soma(...valores))

// Operador Bitwase -> números binários

let n11, n2, res, res1, res2= 0
n1 = 13
n2 = 19
res = n11 ^ n2 // ^ == ou exclusivo
res1 = n11 << 1 // deslocamento em um bit para a esquerda
res2 = n11 >> 1 // deslocamento em um bit para a esquerda

console.log(n11 & n2) // Se tiver 2 1 retornará 1 'and,e'
console.log(n11 | n2) // Onde tiver um retornará 1 'or,ou'
console.log(res) // Equivalencia, onde tiver 1, retornará 1
console.log(res1) // Dobra o valor
console.log(res2) // Divide o valor em 2
