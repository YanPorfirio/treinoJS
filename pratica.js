const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

// Configura a interface para ler e escrever no terminal do Node.js
const rl = readline.createInterface({ input, output });

let nome1 = "Yan";
let nome2 = "Garota Bonita";

async function pedido_de_namoro(){
    // Utilizamos o 'await rl.question' para aguardar a resposta do usuário no terminal
    let pergunta = await rl.question(`Será que eu peço em namoro a ${nome2}? (SIM/NAO): `);
    
    let certezaResp = await rl.question(`A decisão final é sua, mas antes disso, tem certeza que quer pedir em namoro a ${nome2}? (SIM/NAO): `);
    
    // Transformando a resposta em Boolean para manter a lógica original (sim -> true)
    let certeza = certezaResp.toUpperCase() === "SIM";
    pergunta = pergunta.toUpperCase();

    if (pergunta == "SIM" && certeza == true){
        return `Sim, peça em namoro a ${nome2}.`
    } else if ((pergunta == "NÃO" || pergunta == "NAO") && certeza == true){
        return `Não, não peça em namoro a ${nome2}.`
    } else if (pergunta == "SIM" && certeza == false){
        return `Não, não peça em namoro a ${nome2}.`
    } else {
        return `Não, não peça em namoro a ${nome2}.`
    }
}

// Como 'rl.question' é assíncrono (Promise), precisamos usar .then() na execução
pedido_de_namoro().then((resultado) => {
    console.log(resultado);
    // Importante fechar a interface com rl.close() para encerrar o programa após terminar
    rl.close(); 
});
