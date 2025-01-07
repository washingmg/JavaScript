

// CRIAR UMA VARIÁVEL COM UMA FUNÇÃO ARROW

const converterInt = (elementoo) => parseInt(elementoo) //converter para inteiro
const dobrar = (elemento) => elemento * 2
let num = ['1','2','3','4','5']
let x = num.map(converterInt)
let y = num.map(dobrar)
console.log(x)
console.log(y)