let array_frase = []

process.stdout.write("Digite aqui uma frase: ")

process.stdin.on("data", (data) => {
    let frase = data.toString().trim()
    array_frase.push(frase)
    console.log("Sua frase tem " + array_frase[0].length + " caracteres.")
    process.exit()
})