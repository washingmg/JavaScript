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
    // let tamanho = valores.length
    let res = 0
    for (let i of valores) {
        res += i
    }
    return res
} 
console.log(somador(10,3,5,3,5,11))

