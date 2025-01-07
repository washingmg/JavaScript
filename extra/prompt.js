const rl = require("node:readline"); 
const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

prompt.question("Digite sua idade: ", answer => {
    const age = answer; 
    console.log("Sua idade é:", age); 
    prompt.close(); 
});
