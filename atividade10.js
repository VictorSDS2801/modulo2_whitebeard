let numeros = [1, 5, 6, 9, 0, 2, 3]

process.stdout.write("Digite aqui um número: ")

process.stdin.on("data", (data) => {
    let numero_buscado = parseInt(data.toString().trim())

    let condicao = numeros.includes(numero_buscado) 

    if (condicao) {
        console.log("Seu número está na lista.")
        process.exit()
    }
    else {
        console.log("Seu número não está na lista.")
        process.exit()
    }
})