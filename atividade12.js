
let alunos = []

function perguntarUsuario() {
    
    process.stdout.write("Digite aqui o nome do aluno para adicionar, se você não quiser adicionar mais nenhum aluno, digite 'sair': ")

    process.stdin.once("data", (data) => {
        let nome = data.toString().trim()
        if (nome == "sair") {
            console.log("Essa é a lista de alunos: ", alunos)
            process.exit()
        }
        else {
            process.stdout.write("Digite agora a idade do aluno: ")
            process.stdin.once("data", (data) => {
                let idade = parseInt(data.toString().trim())
                process.stdout.write("Digite agora o curso do aluno: ")
                process.stdin.once("data", (data) => {
                    let curso = data.toString().trim()
                    alunos.push({nome, idade, curso})
                    perguntarUsuario()
                })
            })
        }
    })
}
perguntarUsuario()

