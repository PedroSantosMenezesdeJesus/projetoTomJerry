class obj{
    frame = 1
    timer = 0
    constructor(x, y, width, height, path){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.path = path
    }
    draw(){
        let img = new Image()
        img.src = this.path
        quadro.drawImage(img, this.x, this.y, this.width, this.height)
    }
    animation(){
        this.timer
        if(this.timer > 10){
            this.timer = 0
            this.frame += 1
        }
        if(this.frame > 4){
            this.frame = 1
        }
        
    }
}