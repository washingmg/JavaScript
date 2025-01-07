//variável com {} é obj
const player = {
    nickname: "www",
    health: 20,
    isDead: false,
    present(){
        console.log("meu nick é ", this.nickname)
    }
}
player.name = "@@@@"

console.log(player.nickname)
console.log(player.name)
console.log(player)
player.present()
player["health"]


for (const prop in player){
    console.log(prop)
}

const computer = {
    motherboard: "B360M",
    videoCard: "RTX 2070",
    cpu: "intel i7 8700",
    font: {
        name: "XPG Core Reactor",
        watts: 800
    },
    case: {
        name: "Draco GameMax",
        color: "Black"
    },
    ram: [
        {
            name: "HyperX",
            size: 16000
        },
        {
            name: "HyperX",
            size: 16000
        }
    ]
}

console.log(computer.font.watts)
console.log(computer.ram.push({
    name: "HyperX",
    size: 16000
}))
console.log(computer.ram)