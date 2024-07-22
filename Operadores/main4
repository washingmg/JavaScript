function aluno(nome,nota){
    this.nome = nome
    this.nota = nota

    this.dados_anonimo = function() {
        setTimeout(function(){ // setTimeout = função e tempo e gera uma nova instância
            this.nome = "Was"
            this.nota = 90
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }

    this.dados_arrow = function() {
        setTimeout(() => { // arrow functioon contorna esse problema
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }
}

const aluno1 = new aluno("Washington",100)
aluno1.dados_anonimo()
aluno1.dados_arrow()