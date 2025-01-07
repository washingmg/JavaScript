import {writeFileSync, readFileSync, symlink} from "node:fs"
import { afterEach } from "node:test"

// Obj jason passado por uma API pela net
async function main() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json(); //converte no formato JSON
    console.log(data);
}

main();
