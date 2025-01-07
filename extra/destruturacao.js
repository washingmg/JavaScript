
function main() {
    
    const person = {
        name:"Washington",
        age: 20,
        isProgrammer: true
    };

    const {name, age, isProgrammer} = person;
    console.log(name, age, isProgrammer)
}
main()

function main2() {
    const colors = ["Verde", "Amarelo", "Vermelhor", "Azul"];

    const [firstColor, secondColor] = colors;
    console.log(firstColor);
}
main2()

function main3() {

    const nickname = "WM DEV";

    const player = {
        nickname: "Washington",
        health: 20,
        inventory: {
            items: ["Sword", "Shield", "Bow"],
            potion: [
                {type: "regeneration", duration: 8}, 
                {type: "defense", duration: 8}]
        }
    }
    // const {nickname: nick, health} = player
    // console.log(nickname, nick);

    // const {inventory: {items, potion}} = player
    // console.log(items, potion)

    // const {inventory} = player
    // console.log(inventory)

    const {inventory: {potion}} = player;
    // const [firstPotion, secondPotion] = potion;
    // console.log(firstPotion);

    const [{type, duration}, {duration: secondDuration, type: secondType}] = potion;
    // console.log(type, duration)
    // console.log(secondType, secondDuration);


    const { inventory: { potion: [{type: substituitionType, duration: substituitionDuration}]}} = player;    
    console.log(substituitionType, substituitionDuration);
}

main3();