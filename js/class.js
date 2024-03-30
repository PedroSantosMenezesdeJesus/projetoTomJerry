//criar classes
//criar a classe objeto para ser de base para as outras classes
class obj{
    //criar os variavel frames 
    frame = 1
    //crair variavel timer
    timer = 0
    //criar constructor
    constructor(x, y, width, height, path){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.path = path
    }
    //criar função desenhar
    drawing(){
        let img = new Image()
        img.src = this.path
        quadro.drawImage(img, this.x, this.y, this.width, this.height)
    }
    //criar função animação
    animation(nameImage){
        this.timer +=1
        if(this.timer > 180){
            this.timer = 0
            this.frame += 1
        }
        if(this.frame > 4){
            this.frame = 1
        }
        this.path = 'img/' + nameImage + this.frame + '.jpeg'
    }
}

//criar classe Jerry
class JERRY extends obj{
    //criar direcapo
    direcao = 0
    //criar pontos
    pontos = 0
    //criar função pulo
    pular(){
        this.y += this.direcao
    }
    //criar função para colisão
    colisao(obj){
        if(this.x < obj.x + obj.width && this.x + obj.width > obj.x
            && this.y < obj.y + obj.height && this.y + obj.height > obj.y){
            return true
        }
        else{
            return false
        }
    }
}

//criar classe Tom
class TOM extends obj{
    //criar direcapo
    direcao2 = 0
    //criar função pulo
    pular2(){
        this.y += this.direcao2
    }
}

//criar função da armadilha para matar o jerry
class TRAP extends obj{
    //função para movimentar as armadilhas
    move(){
        this.x -=7
        //if para que quando a armadilha fosse para o fim da tela voltase aleatoriamente  
        if (this.x < 0) {
            this.x = 2500
        }
    }
}

//classe queijo
class CHEESE extends TRAP{
    //função respaw para que quando você pego pelo jerry conseguise voltar
    respaw() {
        this.x = Math.random()*(850 - 0)
    }
}

//classe para o cenario de fundo
class BG extends obj{
    //movimentação do fundo
    movement(speed, limit, pos){
        this.x -= speed
        if (this.x > limit) {
            this.x = pos
        }
    }
}

//classe texto
class TEXT{
    //função para mostrar o texto
    showText(text, x, y) {
        quadro.font = "40px Arial"
        quadro.fillstyle = "white"
        quadro.fillText(text, x, y)
    }
}

//função parede
class WALL extends obj {}