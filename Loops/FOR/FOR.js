/*
 for -> quando saba a qtd de vezes que precisa iterar
    for(inicialização, condicção, controle)
    for in 
    for of

 while -> quando n se sabe a quantidade de vezes que precisa iterar
*/

for (let i = 0; i <= 10 ; i++) {
    if (!(i % 2)) {
        console.log(i + '  é par')
    } else {
        console.log(i + ' é impar')
    }
}console.log("Fim do programa")


let num = [10,20,30,40,50]

// for in -> precisa de uma váriavel para acessar o array através do índice
// pega as posições

for (n in num) {
    console.log(num[n])
}

console.log('\n')

// for n -> não precisa acessar o array pelo índice
// pega os elementos

for (n of num) {
    console.log(n)
}

console.log('\n')

// for padrão

for (let i = 0; i < num.length; i++) { // length retorna a qtd de itens
    console.log(num[i])
}