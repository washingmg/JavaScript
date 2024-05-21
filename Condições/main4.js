var hora_agora = new Date()
var minutes = hora_agora.getMinutes()
var hora = hora_agora.getHours()

console.log(`Agota são ${hora}:${minutes}`)

if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}