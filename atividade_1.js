process.stdout.write("Digite seu nome: ");

process.stdin.on('data', function pegarNome(data) {
    let nome = data.toString().trim();

    process.stdin.removeListener('data', pegarNome); 
    process.stdout.write("Digite sua idade:  ")

    process.stdin.on('data', function pegarIdade(data) {
        let idade = data.toString().trim();

        process.stdin.removeListener("data", pegarIdade)
        process.stdout.write("Seu nome é " + nome + ' e sua idade é ' + idade + " anos.");
        process.exit()
    });
});