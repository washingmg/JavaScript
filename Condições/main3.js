var idade = 64
if (idade < 16) {
    console.log('Não VOTA')
} else if (idade < 18 || idade >= 65) {
    console.log('Voto OPICIONAL')
}else {
    console.log('Voto OBRIGATÓRIO')
}