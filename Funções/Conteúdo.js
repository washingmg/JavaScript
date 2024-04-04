function nome() { // DEclaração da função
    console.log("Bom dia")
}
nome() // Chamda da função 

//////////////////////////////////////////////////////////////////////////

for (let i = 0; i < 10; i++) {
    nome()
}
console.log('\n')

//////////////////////////////////////////////////////////////////////////

function canal() {
    return "WAS" // retorna uma strg, logo usa o console.log
}

console.log(canal())

//////////////////////////////////////////////////////////////////////////

function soma(p1 = 0,p2= 0) {
    console.log(p1 + p2)
}
soma("Washin")
soma(20, 5)
soma(5.3)

console.log('\n')

//////////////////////////////////////////////////////////////////////////

function somador(...valores) {
    let tamanho = valores.length
    let res = 0
    for (let i of valores) {
        res += i
    }
    return res
} 
console.log(somador(10,3,5,3,5,11))

console.log('\n')

//////////////////////////////////////////////////////////////////////////

// Função anônima
let x = function (...valores) { 
    let res = 0
    let i = 0
    for (i of valores) {
        res += i
    }
    return res
}
console.log(x(102,5))

console.log('\n')

//////////////////////////////////////////////////////////////////////////

// função anônima e construtor
const f = new Function("v1","v2","v3,", "return v1+v2+v3") 

console.log(f(10,5,11))

console.log('\n')

//////////////////////////////////////////////////////////////////////////

// função flecha, arrow function
const some = (v1,v2) => {return v1+v2}
console.log(some(11,6))

console.log('\n')

//////////////////////////////////////////////////////////////////////////

// função dentro de função
const soma1=(...valores)=> {
    const somar=val=>{
        let res = 0
        for (v of val) {
            res += v
        return res
        }
    }
    return somar(valores)
}

console.log(soma1(33,5,2))

console.log('\n')

//////////////////////////////////////////////////////////////////////////

// função geradora -> sabe onde parou e retorna o próximo
// criar uma rotina
function* cores() {
    yield 'Vermelho'
    yield 'azul'
    yield 'verde'

}
const itc = cores()
console.log(itc.next().value)
console.log(itc.next().value)

console.log('\n')

function* perguntas() {
    const nome = yield 'Qual seu nome?'
    const esporte = yield 'Qual seu esporte favorit?'
    return "seu nome é " + nome + ',seu esporte favorito é ' + esporte

}
const itp = perguntas()
console.log(itp.next().value)
console.log(itp.next('Washington').value)
console.log(itp.next('Natação').value)

console.log('\n')

function* contador() {
    let i = 0
    while(true) {
        yield i++
        if (i > 5)
            break
    }
}
const itcc = contador()
for (c of itcc){
    console.log(c)
}

console.log('\n')

//////////////////////////////////////////////////////////////////////////
