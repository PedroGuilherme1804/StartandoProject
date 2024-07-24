
function contarVogais() {
    const wordsList = ["abacaxi", "alegria", "bicicleta", "ouro", "elefante"];
    const vogais = "aeiouAEIOU";
    let vogaisEncontradas = [];
    
    // Percorre cada palavra na lista
    wordsList.forEach(word => {
        // Percorre cada caractere na palavra
        for (let char of word) {
            // Verifica se o caractere é uma vogal
            if (vogais.includes(char)) {
                vogaisEncontradas.push(char);
            }
        }
    });

    // Conta o número de vogais encontradas
    const quantidadeVogais = vogaisEncontradas.length;
    
    // Cria uma string com as vogais encontradas e sua quantidade
    const resultado = `Vogais encontradas: ${vogaisEncontradas.join(", ")}. Quantidade: ${quantidadeVogais}`;

    // Exibe o resultado na tela
    document.getElementById("resultado").innerText = resultado;
}

function voltar() {
    window.location.href = 'index.html';
}

function fecharJogo() {
    // Tenta fechar a aba/janela
    window.close();
}