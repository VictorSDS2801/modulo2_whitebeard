process.stdout.write("Digite um número: ")

process.stdin.once("data", (data) => {
    let numero = data.toString().trim()
    if (numero % 2 == 0) {
        console.log("Seu número é par!")
    }
    else {
        console.log("Seu número é impar!")
    }
    process.exit()
})