
function rolarParaDireita(){

    document.getElementById("Leonardo").style.display = "none";
    document.getElementById("Bruna").style.display = "flex";
    document.getElementById("seta-direita").style.display = "none";
    document.getElementById("seta-esquerda").style.display = "flex";
    document.getElementById("seta-esquerda").style.marginTop = "55px";
}

function rolarParaEsquerda(){

    document.getElementById("Leonardo").style.display = "flex";
    document.getElementById("Bruna").style.display = "none";
    document.getElementById("seta-direita").style.display = "flex";
    document.getElementById("seta-esquerda").style.display = "none";
    document.getElementById("seta-esquerda").style.marginTop = "55px";
}
