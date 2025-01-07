// const date = new Date();
// console.log(date)


// const date2 = new Date("2023-01-25");
// console.log(date2)

// const date3 = new Date(2023, 0, 25);
// console.log(date3)

// console.log(date.getDate())
// console.log(date.getDay())
// console.log(date.getFullYear())
// console.log(date.getHours() + ":"+ date.getMinutes() + ":" + date.getSeconds())
// console.log(date.getTime())

const past = new Date(1734967980471)
const now = new Date();


console.log(now.getHours() + ":"+ now.getMinutes() + ":" + now.getSeconds())

console.log(past.getHours() + ":"+ past.getMinutes() + ":" + past.getSeconds() + "\n")


// Tarefa pra ser realizado com 5 horas a + desde a data de criação
const date = new Date();
console.log(date.toString())

// date.setHours(date.getHours() + 5)
date.setMinutes(date.getMinutes() + 30)
console.log(date.toString() + "\n")

const date4 = new Date(2024, 11, 25, 11, 30)
console.log(date4.toString())
console.log(date4.toDateString())
console.log(date4.toUTCString())
console.log(date4.toTimeString() + "\n")

// const timer = setInterval(() => {
//     const date5 = new Date();
//     console.log(date5.getSeconds());
//     if (date5.getSeconds() > 30) {
//         clearInterval(timer)
//     }
// }, 500)



// Verificar datas passadas ou não

const past2 = new Date(2024, 11, 25)
const present = new Date();
const future = new Date(2025, 9, 28);

console.log(past.toLocaleString())
console.log(present.toLocaleString())
console.log(future.toLocaleString() + "\n")

if (present > past) {
    console.log("Já passou!")
} else {
    console.log("Não passou ainda")
}