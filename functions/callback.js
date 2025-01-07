
// Função passada como argumento para outra função
function performe(name, exec) {
    const title = "Curso de JS"
    console.log(name, "executou uma função!")
    exec(title)
};

performe("WM", (title) =>{
    console.log("O título é:", title)
});

const numbers = [3, 18, 21, 44, -92, 439, -12, 22 ,185 ,201];
const filtered = numbers.filter((number) => {return number > 100});
console.log(filtered)

function performe2(exec2){
    const numbers = [3, 18, 21, 44, -92, 439, -12, 22 ,185 ,201];
    for (const number of numbers) {
        exec2(number)
    }
};
performe2(number => console.log("Item atual: ", number))


function filter(array, callback){
    const filtered = [];
    for(let i = 0; i < array.length; i++){
        if (callback(array[i], i, array)) {
            filtered.push(array[i])
        }
    };
    return filtered;
;}
const names = ["Manoel-irmão", "WM", "Cleyne", "Ranni", "Manoel-Vô"];
const filteredNames = filter(names, name => name.startsWith("M"))
const filteredNames2 = filter(names, (name, i) => i % 2 !== 0);

console.log(filteredNames)
console.log(filteredNames2)