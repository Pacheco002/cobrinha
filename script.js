let defaultTamanhoCauda = 3;
let tamanhoCauda = defaultTamanhoCauda;
let caminhoCobra = [];

let cobraEixoX = cobraEixoY = 10;


let tamanhoTela = tamanhoCaminho = 20;
let nextX = nextY = 0;

let appleX = (appleY = 15);

let canvas;
let ctx;

window.onload = function(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
  
ctx.fillStyle = "red";
    ctx.fillRect(appleX * tamanhoCaminho, appleY * tamanhoCaminho, tamanhoCaminho, tamanhoCaminho);
    document.addEventListener("keydown", keyDownEvent);
    let x = 8;
}
function keyDownEvent(event){
    switch(event.keycode){
        case 37:
            nextX = -1;
            nextY = 0;
            break;
        case 38:
            nextX = 0;
            nextY = -1;
            break;
        case 39:
            nextX = 1;
            nextY = 0;
            break;
        case 40:
            nextX = 0;
            nextY = 1;
            break;
    }
    
}
function desenharjogo(){
    cobraEixoX += nextX;
    cobraEixoY += nextY;
    if (cobraEixoX < 0){
        cobraEixoX = tamanhoTela -1;
    }
    if (cobraEixoX > tamanhoTela -1){
        cobraEixoX = 0;
    }
    if (cobraEixoY < 0){
        cobraEixoY = tamanhoTela -1;
    } 
    if (cobraEixoY > tamanhoTela -1){
        cobraEixoY = 0;
    }
}
if (cobraEixoX == appleX && cobraEixoY == cobraEixoY){
    tamanhoCauda++;
    appleX = Math.floor(Math.random() * tamanhoTela);
    appleY = Math.floor(Math.random() * tamanhoTela);
    ctx.fillStyle = "red";
    ctx.fillRect(cobraEixoX * tamanhoCaminho, cobraEixoY * tamanhoCaminho, tamanhoCaminho, tamanhoCaminho);
}
