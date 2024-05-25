

// função flecha, arrow function
const soma = (v1,v2) => {return v1+v2}
console.log(soma(11,6))

// função dentro de função
const soma1 = (...valores) => {
    const somar = (val) => {
        let res = 0
        for (v of val) {
            res += v
        } return res
    }
    return somar(valores)
}

console.log(soma1(5,7.9,9,1,2))
