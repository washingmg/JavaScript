
// const person = {
//     name: "WM",
//     age: 22,
//     introduction() {
//         return `My name is ${this.name}`;
//     }
// }

// reutilização de function
class Person {
    #name; // Deixa privado
    #age;
    #money = 0;
    constructor(name, age){
        this.#name = name,
        this.#age = age
    }
    intro(){
        return `Meu nome é ${this.getName()} e tenho ${this.getAge()} anos. Na minha conta bancária tem somente R$ ${this.getMoney()}`;
    }
    getName(){
        return this.#name;
    }
    getAge(){
        return this.#age;
    }
    getMoney(){
        return this.#money;
    }
    setMoney(value){
        this.#money = value;
    }
    incrementMoney(value){
        this.setMoney(this.#money + value);
    }
}

const person = new Person("Washington", 20);
const person2 = new Person("Manel", 20);
// console.log(person.intro())
// console.log(person2)

person.name = "Jujuba" // Com a # não vai alterar as propriedades do obj, deixando ele privado
person.setMoney(300)
person.incrementMoney(45)
console.log(person.intro())


class Game {
    static games = [] // São acessível diretamente da classe e não pelos objetos
    title;
    time;
    status = "idle";
    constructor(title, time) {
        this.title = title;
        this.time = time;  
        Game.games.push(this) //todo jogo criado vai pro array
    }
    startGame(){
        this.status = "progress";
    }
    stopGame(){
        this.status = "ended"
    }
    deleteGame(){
        Game.games = Game.games.filter(game => game.title !== this.title) // Remove o Game da propriedade games
    }
}

const parkour = new Game("Parkour", 20);
const puzzie = new Game("Puzzie", 160)

console.log(Game.games)

parkour.deleteGame()
console.log(Game.games)