/*
 while -> quando n se sabe a quantidade de vezes que precisa iterar
    -> se for true, executa o bloco de comandos

    do while -> execução dos comandos
    executa o bloco primeiro e depois verifica se é true ou false
    -> tem a garantida de que será executado pelo menos uma vez

 for -> quando saba a qtd de vezes que precisa iterar
*/

// break -> para a iteração
// continue -> pula a iteração autal para a próxima

let n = 10

while (n > 0) {
    console.log(n)
    n--
}

// loopind infinito
// while (true) {
//     // console.log(n)
//     // n++
// }

let fatorial = 1
let i = 5
const x = i

while (i > 0) {
    console.log(fatorial)
    fatorial *= i
    i--
}
console.log(`O fatorial de ${x} é ${fatorial}`)

console.log('\n')

let z = 0

while (z < 10) {
    console.log('WWW')
    z++
}console.log('FIm do programa\n')

do {
    console.log('WWW')
    z++
}while (z < 10) console.log('FIm do programa')