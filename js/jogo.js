let gameState = true
let bg1 = new BG(0, 0, 1500, 700, 'img/bg1.jpeg')
let bg2 = new BG(-1500, 0, 1500, 700, 'img/bg1.jpg')
let jerry = new JERRY(30, 500, 500, 500,'img/jerry.jpeg')
let points = new TEXT()

function draw() {
    bg1.drawing()
    bg2.drawing()
    if(gameState){
        jerry.drawing()
    }
    else{
        
    }
}

function update() {
    bg1.movement(10, 1500, 0)
    bg2.movement(10, 0, -1500)
}

function gameOver() {
    
}

function main() {
    quadro.clearRect(0 ,0 ,1500 ,700)
    update()
    draw()
}

setInterval(main, 10)