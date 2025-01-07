// try e catch
import { readFile } from "node:fs/promises";

async function main() {
    try {
        const file = await readFile("errors.js"); // readfile retorna uma promise
        console.log(file.toString());
    } catch (err) {
        console.error("Erro ao ler o arquivo:", err.message);
    }finally {
        console.log("FIM do programa!")
    }
}

// main();

// Erro costumizado
function upper(text){
    if (typeof text !== "string"){
        throw new Error("O parâmetro esperado deve ser uma string!")
    } return text.toUpperCase();
}
try {
    console.log(upper(2))
} catch (err) {
    console.error("Não foi possível exceutar a function!", err)
} finally {
    console.log("Fim do programa!")
}
// Ajuda o programa a não crashar