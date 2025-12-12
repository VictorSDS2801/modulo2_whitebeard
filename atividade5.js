process.stdout.write("Qual a sua idade? ")

process.stdin.once("data", (data) => {
    let idade = data.toString().trim()
    if (idade < 18) {
        console.log("Você é menor de idade.")
    }
    else {
        console.log("Você é maior de idade.")
    }
    process.exit()
});