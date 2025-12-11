process.stdout.write("Digite seu nome: ");

process.stdin.on('data', function pegarNome(data) {
    let nome = data.toString().trim();

    process.stdin.removeListener('data', pegarNome); 
    process.stdout.write("Digite sua idade: ");

    process.stdin.on('data', function pegarIdade(data) {
        let idade = data.toString().trim();

        process.stdin.removeListener('data', pegarIdade); 
        process.stdout.write("Seu nome é " + nome + ' e sua idade é ' + idade + " anos. \n");


        process.stdout.write("Você possui CNH? (sim/não): ");

        process.stdin.on("data", function pegarCNH(data) {
            let possuirCNH = data.toString().trim().toLowerCase();
            
            process.stdin.removeListener('data', pegarCNH)
            if (possuirCNH === "sim") {
                console.log("Parabéns, você pode dirigir!");
            } else if (possuirCNH === "não" || possuirCNH === "nao") {
                console.log("Trate de fazer sua CNH!");
            }

            process.exit();
        });
    });
});
