
let cont = 0 
let saida = document.querySelector('section#saida')

function mais1() {
    cont ++
    saida.innerHTML = `<p>O contador está com ${cont}.</p>`
}

function menos1() {
    cont --
    saida.innerHTML = `<p>O contador está com ${cont}.</p>`
}

function zerar() {
    cont = 0
    saida.innerHTML = `<p>O contador está com ${cont}.</p>`
}