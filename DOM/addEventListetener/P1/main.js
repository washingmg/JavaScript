

// addEventListener é um escutador
const cursos=[...document.querySelectorAll(".curso")]
const c1 = document.querySelector(".c1")


cursos.map((elemento) => {
    elemento.addEventListener("click", (evento) => {
        const elemento = evento.target
        elemento.classList.add("destaque")
        console.log(elemento.innerHTML + " foi clicado")
    })
})

const msg = () => {
    alert("Clicou")
}

c1.addEventListener("click", msg)