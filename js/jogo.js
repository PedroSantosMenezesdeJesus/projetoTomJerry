// criar var quadro para que a tela fique atualizando constantemente
let quadro = document.getElementById('canvas').getContext("2d")
// criar variaveis para o backgound e sua movimentação
let bg1 = new BG(0, 20, window.outerWidth, window.outerHeight, 'img/bg1.jpeg')
let bg2 = new BG(-1500, 20, window.outerWidth, window.outerHeight, 'img/bg1.jpg')
// criar variavel jerry/personagem principal
let jerry = new JERRY(150, 500, 100, 100,'img/jerry.png')
//criar variavel tom
let tom = new TOM(10, 400, 170, 250, 'img/tom.png')
// criar variavel ratoeira
let ratoeira = new TRAP(1400, 520, 60, 70, 'img/trap.png')
// criar variaveis queijos para ganha pontos
let queijo1 = new CHEESE(1300, 500, 55, 55, 'img/cheese1.png')
let queijo2 = new CHEESE(1200, 500, 60, 60, 'img/cheese2.png')
let queijo3 = new CHEESE(1100, 500, 70, 70, 'img/cheese3.png')
// criar var parede para que o jerry não caia no "void" e ajustar a direção
let parede = new WALL(30, 550, 1500, 50)
let parede2 = new WALL(30, 260, 1500, 110)
//var pontos
let points = new TEXT()
// var contador para a pontuação por tempo
let contador = 0
//criar audios
let jumpSound = new Audio('sons/jump.mpeg')
let eatSound = new Audio('sons/mastigar.mpeg')
let loseSound = new Audio('sons/lose.mpeg')
let gameMusic = new Audio('sons/gameMusic.mpeg')
//ativar o pulo quando clicar na tecla
function jump() {
    document.addEventListener("keydown",function(e){
        if (e.key === 'w'){
            jerry.direcao = -5
            tom.direcao2 = -5
            jumpSound.play()
        }
    })
}

//cair quando larga o botão de pulo
function noJump() {
    document.addEventListener("keyup", function(e){
        if (e.key === 'w'){
            jerry.direcao = +5
            tom.direcao2 = +5
        }
    })
}

//função desenhar para mostrar as imagens
function draw() {
    bg1.drawing()
    bg2.drawing()
    jerry.drawing()
    tom.drawing()
    queijo1.drawing()
    queijo2.drawing()
    queijo3.drawing()
    ratoeira.drawing() 
    points.showText(jerry.pontos, 40, 100, 'white')      
}

//função atualizar para a movimentação e outras funçõs
function update() {
    //movimento do fundo
    bg1.movement(-10, 0, 1500)
    bg2.movement(-10, -1500, 0)
    //animação do fundo
    bg1.animation('bg')
    bg2.animation('bg')
    //pulo do protagonista
    jerry.pular()
    tom.pular2()
    //colisões
    jerry.colisao(parede)
    jerry.colisao(queijo1)
    jerry.colisao(queijo2)
    jerry.colisao(queijo3)
    jerry.colisao(ratoeira)
    //movimentação dos objetos
    ratoeira.move()
    queijo1.move()
    queijo2.move()
    queijo3.move()
    //funções
    jump()
    noJump()
    punctuation()
    colision()
    //música de fundo
    gameMusic.loop = true
    gameMusic.play()
}
//função pontuação por tempo
function punctuation() {
    contador += 1
    if (contador >= 180) {
     contador = 0;
     jerry.pontos +=10;
    }
}

//função para armazenar as colisões
function colision() {
    //parede para não cair no espaço
    if (jerry.colisao(parede)) {
        jerry.direcao = 0
        tom.direcao2 = 0
    }
    if (jerry.colisao(parede2)) {
        jerry.direcao = 5
        tom.direcao2 = 5
        return jump()
    }
    //colisão para ganhar pontos
    if (jerry.colisao(queijo1)) {
        queijo1.respaw()
        jerry.pontos += 100
        eatSound.play()
    }
    if (jerry.colisao(queijo2)) {
        queijo2.respaw()
        jerry.pontos += 500
        eatSound.play()
    }
    if (jerry.colisao(queijo3)) {
        queijo3.respaw()
        jerry.pontos += 1000
        eatSound.play()
    }
    //colisão de derrota
    if (jerry.colisao(ratoeira)) {
        loseSound.play()
        window.location.href='gameover.html'
    }
}

//função principal que guarda tudo
function main() {
    quadro.clearRect(0 ,0 ,1500 ,700)
    update()
    draw()
}

//atualizar função principal
setInterval(main, 10)