const names = ["Manoel-irmão", "WM", "Cleyne", "Ranni", "Manoel-Vô"];

names.forEach((name) => {console.log(name)})
console.log()

function nossoForEach(arr, funcao) {
    for(let i = 0; i < arr.length; i = i + 1) {
        funcao(arr[i], i);
    }
}

nossoForEach(['nome1', 'nome2'], function(nome, indice) {
    console.log(nome, indice)
})