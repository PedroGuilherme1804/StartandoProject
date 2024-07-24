function identificarNumerais() {
    const randomNumbers = [-1234, 5678, -987, 4321, -5555, 9999, -2345, 1111, -8888, 3456];

    // Inicializa o menor e o maior número com o primeiro elemento do array
    let menor = randomNumbers[0];
    let maior = randomNumbers[0];

    // Percorre o array para encontrar o menor e o maior número
    randomNumbers.forEach(num => {
        if (num < menor) {
            menor = num;
        }
        if (num > maior) {
            maior = num;
        }
    });

    // Exibe o menor e o maior número na página
    const resultado = `O menor número é ${menor} e o maior número é ${maior}.`;

    document.getElementById("resultado").innerText = resultado;
}

function voltar() {
    window.location.href = 'index.html';
}

function fecharJogo() {
    // Tenta fechar a aba/janela
    window.close();
}