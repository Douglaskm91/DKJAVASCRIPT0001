/* Remover letras repetidas (JS-HTML)*/
function removerLetrasRepetidas() {
    var palavra = document.getElementById("palavra").value;
    var letrasUnicas = '';
    for (var i = 0; i < palavra.length; i++) {
        if (palavra.lastIndexOf(palavra[i]) == palavra.indexOf(palavra[i])) {
            letrasUnicas += palavra[i];
        }
    }
    document.getElementById("novaPalavra").innerHTML = "Nova palavra: " + letrasUnicas;
}

/* Letras invertidas (JS-HTML)*/
function inverterNome() {
    var nome = document.getElementById("nome").value;
    var nomeInvertido = '';
    for (var i = nome.length - 1; i >= 0; i--) {
        nomeInvertido += nome[i];
    }
    document.getElementById("novoNome").innerHTML = "Nome invertido: " + nomeInvertido;
}



/* --------------------------------------------------------------------------------------- */


/* Remover letras repetidas (FuntionJS)(console.log) */

function removerLetrasRepetidas2(palavra) {
    var letrasUnicas = '';
    for (var i = 0; i < palavra.length; i++) {
        if (palavra.lastIndexOf(palavra[i]) == palavra.indexOf(palavra[i])) {
            letrasUnicas += palavra[i];
        }
    }
    return letrasUnicas;
}

console.log(removerLetrasRepetidas2('baraban'));
console.log(removerLetrasRepetidas2('anaconda'));


/* Nome Invertido (FuntionJS)(console.log) */

function inverterNome2(nome) {
    var nomeInvertido = '';
    for (var i = nome.length - 1; i >= 0; i--) {
        nomeInvertido += nome[i];
    }
    return nomeInvertido;
}
console.log(inverterNome2('Douglas'));