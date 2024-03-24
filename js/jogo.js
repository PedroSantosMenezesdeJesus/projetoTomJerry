let quadro = document.getElementById('canvas').getContext("2d")
let gameState = true
let bg1 = new BG(0, 0, 1500, 700, 'img/bg1.jpeg')
let bg2 = new BG(-1500, 0, 1500, 700, 'img/bg1.jpg')
let jerry = new JERRY(30, 500, 100, 100,'img/jerry.png')
let ratoeira = new TRAP(1500, 500, 100, 100, 'img/trap.jpg')
let queijo1 = new CHEESE(1500, 500, 100, 100, 'img/cheese1.webp')
let queijo2 = new CHEESE(1500, 500, 100, 100, 'img/cheese2.webp')
let queijo3 = new CHEESE(1500, 500, 100, 100, 'img/cheese3.webp')
let points = new TEXT()



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
    }
    punctuation()
    colision()
    gameOver()
}

function punctuation() {
    points +=10;
}

function colision() {
    if (jerry.colisao(queijo1)) {
        queijo1.respaw()
        points += 100
    }
    if (jerry.colisao(queijo2)) {
        queijo2.respaw()
        points += 500
    }
    if (jerry.colisao(queijo3)) {
        queijo3.respaw()
        points += 1000
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