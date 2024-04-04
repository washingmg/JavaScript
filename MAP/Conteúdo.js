// mais otimizado do que o for para percorrer valores
// MANIPULÇÃO DE OBJETOS DO TIPO ARRAY

const cursos = ['HTML','CSS','JS','PHP','REACT']
cursos.map((elemento, indice)=> {
    console.log("Cursos:" + elemento + " - Posição do curso:" + indice)
    return elemento
})

// usando uma coleção

let elementos2 = document.getElementsByTagName("div")
elementos2 = [...elementos2] //coleção iterável
elementos2.map((ele, indi)=>{
    console.log(ele.innerHTML) //O innerHTML mostra o conteúdo da div
})


// forma de acessar os elemntos da divi sem usar uma coleção

const elementos3 = document.getElementsByTagName("div")
const valores = Array.prototype.map.call(elementos3,({innerHTML})=> innerHTML)
console.log(valores)


// criamos uma variável com uma função arrow

const converterInt =(elementoo)=> parseInt(elementoo) //converter para inteiro
const dobrar =(elemento)=> elemento*2
let num = ['1','2','3','4','5']
let x = num.map(converterInt)
let y = num.map(dobrar)
console.log(x)
console.log(y)