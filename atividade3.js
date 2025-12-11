let usuario = {
    nome: "",
    idade: "",
    CNH: ""
}
process.stdout.write("Digite seu nome: ")

process.stdin.once('data', (data) => {
    usuario.nome = data.toString().trim();
    process.stdout.write("Digite sua idade: ")

    process.stdin.once('data', (data) => {
        usuario.idade = data.toString().trim();
        process.stdout.write("Digite se você tem CNH ou não: ")
        process.stdin.once('data', (data) => {
            usuario.CNH = data.toString().trim();
            
            let texto = ""
            if (usuario.CNH == "sim") {
                texto = "tem" 
            }
            else {
                texto = "não tem"
            }

            console.log('Olá ' + usuario.nome + "! Você tem " + usuario.idade + " anos! E você " + texto + " CNH!")
            process.exit()
        });
    });
});
