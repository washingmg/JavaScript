// Eventual conclusão ou falha
// Assíncrona
// async necessita de um await, que ocasiona numa promessa.
import {setTimeout} from "node:timers/promises";

function requestCar(drivers) {
    return new Promise((resolve, reject) => {
        if (drivers > 0) {
            return resolve("Seu motorista está a caminho");
        }
        return reject("Não há motoristas disponíveis");
    });
}

function main() {
    let drivers = 0;

    const request = requestCar(drivers);
    // "then", quando a promesa for resolvida com sucesso
    // "catch", quando a promise for rejeitada
    // "finally", independente do resultado será executado
    request
        .then((text) => { // função de callback
            console.log("Promessa concluída!", text);
        })
        .catch((err) => {
            console.log("Promessa rejeitada!", err);
        })
        .finally(() => {
            console.log("Fim da promessa!");
        });
}

// main()
// Invés de usar .then e os outros, basta usar async e await

async function main2() {
    let drivers = 0;
    const request = await requestCar(drivers).catch(() => null); //espera que essa promessa seja concluída. o .catch é para erro

    if (!request) {
        console.log("Erro");
        return
    }
    console.log("Result -> ", request + "\n")
}   
// main2()

function getRandom(){
    return new Promise((resolve) => {
        return setTimeout(() => resolve(Math.random() * 30), 3000)
    })
}

async function main3() {
    console.log("Inicio do programa")
    const value = await getRandom()
    console.log(value)
}

// main3()

async function main4() {
    console.log("Inicio do programa")
    getRandom().then((value) => { // Sem o await o "fim do programa aparece antes do valor aleatório"
        console.log(value)
    } )
    console.log("FIM do programa!")
}

// main4()

async function getNumber() {
    return 5
}
async function main5() {
    console.log("Inicio do programa")
    // const res = await setTimeout(2000, Math.random());
    const res = await getNumber() //sem o wait retorn um obj

    console.log(res * 3);  
}

main5()