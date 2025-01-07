import {writeFileSync, readFileSync} from "node:fs"
// import json from './Básico/Json2.json' assert { type: "json" };

// console.log(json);
// console.log(json.detalhes_profissão);


const person = JSON.parse("{\"name\": \"Washington\"}")

// console.log(person)

const person2 = {
    name: "Washington",
    age: 22,
    isProgrammer: true,
    greet(){
        console.log("Meu nome é", this.name)
    }
}

const stringJson = JSON.stringify(person2)
// console.log(stringJson)

const person3 = {
    name: "Washington",
    age: 22,
    isProgrammer: true,
    greet(){
        console.log("Meu nome é", this.name)
    }
}
writeFileSync("newperson.json", JSON.stringify(person3, null, 2), "utf8")