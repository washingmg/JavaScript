// ...obj, epalha os dados

const player = {
    nickname: "Washington",
    health: 20,
    inventory: {
        items: ["Sword", "Shield", "Bow"],
        potion: [
            {type: "regeneration", duration: 8}, 
            {type: "defense", duration: 8}]
    }
};

function updatePlayer(player, newProps){
    // pega todas as propriedades (player) e junta com as novas (newProps) no player
    return {...player, ...newProps}
}

const updatedPlayer = updatePlayer(player, {nickname: "WWWW"})
console.log(updatedPlayer)

const person = {name: "WashingtonM"}
const newPerson = {...person, age: 22}
console.log(newPerson)

const positive = [1,2,3,4];
const negative = [-1, -2, -3, -4];

const numbers = [...positive, ...negative]

positive.push(44,55,66)

console.log(numbers)