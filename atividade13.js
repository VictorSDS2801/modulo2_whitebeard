let biblioteca = ["O senhor dos anéis", "Vidas secas", "O sol desvelado", "O Hobbit"]

function perguntarUsuario() {
    process.stdout.write("Bem vindo a biblioteca do tim maia!\n" +
        "Digite 1 se você quer adicionar um novo livro.\n" +
        "Digite 2 se você quer buscar um livro pelo título.\n" +
        "Digite 3 se você quer exibir todos os livros disponíveis.\n" +
        "Digite 'sair' se você deseja sair do programa."
    )
    process.stdin.once("data", (data) => {
        let resposta = data.toString().trim()
        if (resposta == "1") {
            process.stdout.write("\nDigite aqui o nome do livro que você quer adicionar: ")
            process.stdin.once("data", (data) => {
                let livro_novo = data.toString().trim()
                biblioteca.push(livro_novo)
                perguntarUsuario()
            })
        }
        else if (resposta == "2") {
            process.stdout.write("\nDigite aqui o livro que você quer buscar: ")
            process.stdin.once("data", (data) => {
                let livro_buscar = data.toString().trim()
                let ter = biblioteca.includes(livro_buscar.toLowerCase())
                if (ter) {
                    console.log("Esse livro tem aqui na biblioteca do tim maia!\n")
                    perguntarUsuario()
                }
                else {
                    console.log("Esse livro não tem na biblioteca do tim maia!\n")
                    perguntarUsuario()
                }
            })
        }
        else if (resposta == "3") {
            console.log("Esses são os livros disponíveis: ", biblioteca + "\n")
            perguntarUsuario()
        }
        else if (resposta.toLowerCase() == "sair") {
            process.exit()
        }
        else {
            console.log("Digite algum número ou em sair.\n")
            perguntarUsuario()
        }
    })
}
perguntarUsuario()