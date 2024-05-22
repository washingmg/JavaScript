
// escopo == bloco
// 'var' consegue ser acessado dentro e fora do escopo, global
// 'let' não consegue ser acessa fora do escopo #ter preferencia com ela
// 'constant' o conteúdo não pode ser alterado ao longo do código

var nome = "Fora"
function teste(){
    if (true) {
        var nome = 'Washingtono'
    }
    console.log("Dentro do IF do teste: " + nome)
} teste()

