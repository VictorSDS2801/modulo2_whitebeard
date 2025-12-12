let lista_numeros = []
let soma = 0
process.stdout.write("Digite aqui uma lista de números, sendo um por vez. Quando terminar, digite 'terminei' ")

process.stdin.on("data", (data) => {
    let resposta = data.toString().trim()
    if (resposta.toLowerCase() == "terminei") {
        for (let i = 0; i < lista_numeros.length; i++) {
            soma += lista_numeros[i];
        }
        let media = soma / lista_numeros.length
        console.log("A média dos números é igual a: ", media)
        process.exit()
    }
    else {
        lista_numeros.push(Number(resposta))
    }
})