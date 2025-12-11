process.stdout.write("Digite seu nome: ");

process.stdin.on('data', (data) => {
    let nome = data.toString().trim();
    process.stdout.write("Digite sua idade:  ")
    process.stdin.on('data', (data) => {
        let idade = data.toString().trim();
        process.stdout.write("Seu nome é " + nome + ' e sua idade é ' + idade + "anos.");
    })
});