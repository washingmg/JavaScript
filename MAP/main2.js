// forma de acessar os elemntos da divi sem usar uma coleção

const elementos3 = document.getElementsByTagName("div")
// elemento e e o que vai operar, {innerHTMl} pega propriedade
const valores = Array.prototype.map.call(elementos3,({innerHTML})=> innerHTML)
console.log(valores)
