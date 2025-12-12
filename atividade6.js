process.stdout.write("Você torce pro vasco? ")

process.stdin.once("data", (data) => {
    let torcer = data.toString().trim().toLowerCase()
    if (torcer == "sim") {
        console.log("Orgulhoso de você!")
    }
    else {
        console.log('Vish, ai é osso')
    }
    process.exit()
});