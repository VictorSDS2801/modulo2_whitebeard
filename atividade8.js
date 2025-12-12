let hobbies = [];

process.stdout.write("Digite aqui alguns dos seus hobbies, a cada hobbie, clique enter.\n Se quiser ver sua lista, digite 'ver lista': ")

process.stdin.on("data", (data) => {
    let resposta = data.toString().trim()
    if (resposta.toLowerCase() == "ver lista") {
        console.log("Seus hobbies são:\n")
        console.log("Seus hobbies são: " + hobbies + " ")
        process.exit()
    } 
    else {
        hobbies.push(resposta); 
    }
});

