function removerLetrasRepetidas(palavra) {
    var letrasUnicas = '';
    for (var i = 0; i < palavra.length; i++) {
        if (palavra.lastIndexOf(palavra[i]) == palavra.indexOf(palavra[i])) {
            letrasUnicas += palavra[i];
        }
    }
    return letrasUnicas;
}

console.log(removerLetrasRepetidas('baraban'));
console.log(removerLetrasRepetidas('anaconda'));


/* Nome Invertido */

function inverterNome(nome) {
    var nomeInvertido = '';
    for (var i = nome.length - 1; i >= 0; i--) {
        nomeInvertido += nome[i];
    }
    return nomeInvertido;
}
console.log(inverterNome('Douglas'));