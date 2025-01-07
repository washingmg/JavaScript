

// função geradora -> sabe onde parou e retorna o próximo
// criar uma rotina
function* cores() {
    yield 'Vermelho'
    yield 'azul'
    yield 'verde'
}
// yield para e avança que se chama ou pede
const itc = cores()
console.log(itc.next().value)
console.log(itc.next().value)

console.log('\n')

function* perguntas() {
    const nome = yield 'Qual é o seu nome?'
    const esporte = yield 'Qual é seu esporte favorito ?'
    return "seu nome é " + nome + ' e seu esporte favorito é ' + esporte
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
        if (i > 7)
            break
    }
}

const itcc = contador()
for (c of itcc){
    console.log(c)
}

