function pedraPapelTesoura(jogador1, jogador2) {
    jogador1 = jogador1.toLowerCase();
    jogador2 = jogador2.toLowerCase();

    const opcoesValidas = ['pedra', 'papel', 'tesoura'];
    if (!opcoesValidas.includes(jogador1) || !opcoesValidas.includes(jogador2)) {
        throw new Error("Escolha inválida! As escolhas devem ser 'Pedra', 'Papel' ou 'Tesoura'.");
    }

    if (jogador1 === jogador2) {
        return "Empate";
    }

    if ((jogador1 === 'pedra' && jogador2 === 'tesoura') ||
        (jogador1 === 'papel' && jogador2 === 'pedra') ||
        (jogador1 === 'tesoura' && jogador2 === 'papel')) {
        return { vencedor: 'Jogador 1', mensagem: `${jogador1.charAt(0).toUpperCase() + jogador1.slice(1)} ganha de ${jogador2.charAt(0).toUpperCase() + jogador2.slice(1)}` };
    } else {
        return { vencedor: 'Jogador 2', mensagem: `${jogador2.charAt(0).toUpperCase() + jogador2.slice(1)} ganha de ${jogador1.charAt(0).toUpperCase() + jogador1.slice(1)}` };
    }
}

function jogar(jogador1, jogador2) {
    try {
        let resultado = pedraPapelTesoura(jogador1, jogador2);
        if (resultado === "Empate") {
            return "Empate! Ninguém ganhou desta vez.";
        } else {
            return `Parabéns! ${resultado.vencedor} é o ganhador. ${resultado.mensagem}`;
        }
    } catch (error) {
        return error.message;
    }
}

function iniciarJogo() {
    let jogador1 = document.getElementById("jogador1").value;
    let modoJogo = document.getElementById("modoJogo").value;
    let jogador2;

    if (modoJogo === 'computador') {
        const opcoes = ['Pedra', 'Papel', 'Tesoura'];
        jogador2 = opcoes[Math.floor(Math.random() * opcoes.length)];
    } else {
        jogador2 = document.getElementById("jogador2").value;
    }

    let resultado = jogar(jogador1, jogador2);
    document.getElementById("resultado").innerHTML = `
        <p>${resultado}</p>
        <p>Jogador 2 escolheu: ${jogador2}</p>
        <button onclick="jogarNovamente()">Jogar Novamente</button>
        <button onclick="fecharJogo()">Fechar Jogo</button>
    `;
}

function jogarNovamente() {
    document.getElementById("jogador1").value = "Pedra";
    document.getElementById("jogador2").value = "Pedra";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("jogador2Div").style.display = "block";
    document.getElementById("modoJogo").value = "jogador";
}

function fecharJogo() {
    window.close();
}

function atualizarModoJogo() {
    let modoJogo = document.getElementById("modoJogo").value;
    if (modoJogo === 'computador') {
        document.getElementById("jogador2Div").style.display = "none";
    } else {
        document.getElementById("jogador2Div").style.display = "block";
    }
}
