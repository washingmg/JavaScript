// usando uma coleção

let elementos2 = document.getElementsByTagName("div")
elementos2 = [...elementos2] //coleção iterável
elementos2.map((ele, indi)=>{
    console.log(ele.innerHTML) //O innerHTML mostra o conteúdo da div
})
