//criar classes
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
        if(this.timer > 10){
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
        direcao = this.y
    }
}

class TRAP extends obj{
    move(){
        this.x +=20
        if (this.x > 1500) {
            this.x = Math.random()*(850 - 0)
        }
    }
}

class CHEESE extends TRAP{
    respaw() {
        this.x = Math.random()*(850 - 0)
    }
}

class BG extends obj{
    movement(speed, limit, pos){
        this.x += speed
        if (this.x > limit) {
            this.x = pos
        }
    }
}

class TEXT{
    showText(text, x, y){
        quadro.font = "40px Arial"
        quadro.fillstyle = "white"
        quadro.filltext(text, x, y)
    }
}