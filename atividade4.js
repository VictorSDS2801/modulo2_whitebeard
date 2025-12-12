const ano = 2025;

process.stdout.write("Qual ano você nasceu? ")

process.stdin.once("data", (data) => {
    let anonascimento = data.toString().trim()
    console.log('Você tem ' + (ano - anonascimento) + " anos.")
    process.exit()
});