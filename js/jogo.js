let gameState = true
let bg1 = new BG(0, 0, 1500, 700, 'img/bg1.jpeg')
let bg2 = new BG(-1500, 0, 1500, 700, 'img/bg1.jpg')
let jerry = new JERRY(30, 500, 100, 100,'img/jerry.jpeg')
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
        points.showText()
    }
}

function update() {
    bg1.movement(10, 1500, 0)
    bg2.movement(10, 0, -1500)
    bg1.animation('bg')
    bg2.animation('bg')
    punctuation()
    colision()
    gameOver()
}

function punctuation() {
    points = points + Math.round(getFrameRate()/60);
}

function colision() {
    if (queijo1.isTouching(jerry)) {
        queijo1.respaw()
        points += 100
    }
    if (queijo2.isTouching(jerry)) {
        queijo2.respaw()
        points += 500
    }
    if (queijo3.isTouching(jerry)) {
        queijo3.respaw()
        points += 1000
    }
}

function gameOver() {
    if (ratoeira.isTouching(jerry)) {
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