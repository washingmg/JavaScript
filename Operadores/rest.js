// Rest, quando usar prorpiedade de objetos que n foram extraidas ou de array

const positive = [1,2,3,4];
const negative = [-1, -2, -3, -4];

const numbers = [...positive, ...negative];

console.log(numbers)

const [one, two, ...other] = numbers
console.log(one, two)
console.log(other)


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

const { inventory, ...playerInfo} = player

console.log(playerInfo)

const playerInfo2 = {...player, inventory: undefined}
console.log(playerInfo)
