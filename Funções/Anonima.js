
// Função anônima
let x = function (...valores) { 
    let res = 0
    let i = 0
    for (i of valores) {
        res += i
    }
    return res
}
console.log("1° função")
console.log(x(10,5,8))

// função anônima e construtor
const f = new Function("v1","v2","v3,", "return v1+v2+v3")

console.log("2° função")
console.log(f(10,51,13))
