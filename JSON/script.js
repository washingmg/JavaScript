
// JSON não válido, é um objeto em JavaScript
const objs = [
    {
        jason_tipo: "Array de objetos",
        nome: "Washington",
        Idade: 19,
        Sexo: "Masculino",
        esta_trabalhando: false,
        detalhes_profissão: {
            profissão: "Programador",
            empresa: "UFAL"
        },
        hobbies: ["Progrmar","Assitir","Estudar","Descansar"]
    
    },
    {
        "nome": "Matheus",
        "Idade": 30,
        "Sexo": "Masculino",
        "esta_trabalhando": true,
        "detalhes_profissão": {
            "profissão": null,
            "empresa": null
        },
        "hobbies": ["Progrmar","Correr", "Ler"]
    
    }
]

console.log(objs)

// JASON define um padrão para armazenamento e troca de informação no formato texto


//Converter objeto para JSON
//JSOn válido
const jsonData = JSON.stringify(objs)
console.log(jsonData) 
console.log(typeof(jsonData)) 

// Converter json para objeto
//Jason não válido
const objData = JSON.parse(jsonData)
console.log(objData)

// Objeto específico
objData.map((pessoa) => {
    console.log(pessoa.nome);
})
