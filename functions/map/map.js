// A função map aplica uma função a cada elemento de um array e retorna um novo array com os resultados.

// Usa .get e uma "chave de acesso"
// keys(), values(), ou entries() para acessar chaves, valores ou pares
// Diferente dos sets, os maps n podem se repetir
const array = [1, 2, 3, 4, 5];

const resultado = array.map(function(item) {
return item * 2;
});

console.log(resultado); // [2, 4, 6, 8, 10]
console.log("")

const users = {
    washington: {
        age: 20,
        coins: 100
    },
    manoel: {
        age: 20,
        coins: 100
    },
    pedro: {
        age: 23,
        coins: 50
    }
}

users["Rannieri"] = {age: 22, coins: 0}
console.log(users)
console.log("")

const users2 = new Map()

users2.set("washington",{
    age: 20,
    coins: 100
})
users2.set("manoel", {
    age: 20,
    coins: 100
})
users2.set("pedro", {
    age: 23,
    coins: 50
})

console.log(users2.get("washington"))
console.log("")


const users3 = new Map([
//tupla: "chave", "valor"    
    ["washington",{ age: 20, coins: 100}],
    ["manoel", {age: 20, coins: 100}],
    ["pedro", {age: 23, coins: 50}]
])
console.log(users3.delete("pedro"))
console.log(users3.size)
console.log(users3.has("washington"))
console.log("")

for (const entrie of users3.entries()){ // Retorna uma tupla
    console.log(entrie)
}
console.log("")

// Destruturação
for (const [key, value] of users3.entries()) { // pode ser .keys ou .values
    console.log("A chave é:",key);
    console.log("O valor É:", value);
}
console.log("")

for(const {age, coins} of users3.values()){
    console.log(age, coins)
};
console.log("")

// Destruturação completa

for (const [key, { age, coins }] of users3.entries()) {
    console.log(key);
    console.log(age, coins);
}
console.log("")

users3.forEach((value) => {
    console.log(value.age) // métodos de número, string ou obj
})