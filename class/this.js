
function greet() {
console.log("Eu sou", this.name)
}

const person = {
    name: "Washington",
    greet
}

person.greet()

const person2 = {
    name: "Washington DEV",
    greet(){
        console.log(this.name);

        const upper = () =>{
            console.log(this.name.toUpperCase())
        }
        return {upper}
    }
}

person2.greet().upper()

const person3 = {
    name: "Washington Medeiros",
    greet(){
        console.log(this.name);

        return {upper: () =>{
            console.log(this.name.toUpperCase())
        }}
    }
}

person3.greet().upper()

const person4 = {
    name: "Aizen Sousuke",
    greet(){
        const chars = this.name.split("")
        console.log(chars)
        chars.forEach(char => {
            console.log( char, this.name)
        }, )
    }
}
person4.greet()