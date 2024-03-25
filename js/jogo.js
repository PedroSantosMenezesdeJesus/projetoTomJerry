let quadro = document.getElementById('canvas').getContext("2d")
let gameState = true
let bg1 = new BG(0, 0, 1500, 700, 'img/bg1.jpeg')
let bg2 = new BG(-1500, 0, 1500, 700, 'img/bg1.jpg')
let jerry = new JERRY(30, 500, 100, 100,'img/jerry.png')
let ratoeira = new TRAP(1400, 500, 100, 100, 'img/trap.jpg')
let queijo1 = new CHEESE(1400, 500, 100, 100, 'img/cheese1.png')
let queijo2 = new CHEESE(1400, 500, 100, 100, 'img/cheese2.png')
let queijo3 = new CHEESE(1400, 500, 100, 100, 'img/cheese3.png')
let points = new TEXT()
let contador = 0



function draw() {
    bg1.drawing()
    bg2.drawing()
    if(gameState = true){
        jerry.drawing()
        queijo1.drawing()
        queijo2.drawing()
        queijo3.drawing()
        ratoeira.drawing() 
        points.showText(jerry.pontos, 40, 100, 'white')      
    }
}

function update() {
    bg1.movement(-10, 0, 1500)
    bg2.movement(-10, -1500, 0)
    bg1.animation('bg')
    bg2.animation('bg')
    if (gameState = true) {
    jerry.colisao(queijo1)
    jerry.colisao(queijo2)
    jerry.colisao(queijo3)
    jerry.colisao(ratoeira)
    ratoeira.move()
    queijo1.move()
    queijo2.move()
    queijo3.move()
    }
    punctuation()
    colision()
    gameOver()
}

function punctuation() {
    contador += 1
    if (contador >= 180) {
     contador = 0;
     jerry.pontos +=10;
    }
    console.log(contador)
    console.log(jerry.pontos)
}

function colision() {
    if (jerry.colisao(queijo1)) {
        queijo1.respaw()
        jerry.pontos += 100
    }
    if (jerry.colisao(queijo2)) {
        queijo2.respaw()
        jerry.pontos += 500
    }
    if (jerry.colisao(queijo3)) {
        queijo3.respaw()
        jerry.pontos += 1000
    }
}

function gameOver() {
    if (jerry.colisao(ratoeira)) {
        gameState = false
    }
    if (gameState = false) {
        window.location.href = "gameover.html"
    }
}

function main() {
    quadro.clearRect(0 ,0 ,1500 ,700)
    update()
    draw()
}

setInterval(main, 10)