const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d")

canvas.width =1024
canvas.height =576
c.fillRect(0,0,canvas.width,canvas.height)


const gravity = 0.2

class Sprite {
    constructor({position, velcoity}){
        this.position = position
        this.velcoity = velcoity
        this.height = 150
    }
    draw(){
        c.fillStyle ="red"
        c.fillRect(this.position.x,this.position.y,50,this.height)
    }
    update(){
        this.draw()
        this.position.x += this.velcoity.x
        this.position.y += this.velcoity.y
      
        if (this.position.y + this.height + this.velcoity.y >= canvas.height){
            this.velcoity.y = 0
        } else this.velcoity.y += gravity
    }
}
const player = new Sprite({
    position:{
    x:0,
    y:0
},
velcoity:{
    x: 0,
    y:10
}
})

const enemy = new Sprite({
    position:{
    x:400,
    y:100
},
velcoity:{
    x: 0,
    y:0
}
})

console.log(player)

function animate (){
    window.requestAnimationFrame(animate)
    c.fillStyle = "black"
    c.fillRect(0,0,canvas.width, canvas.height)
player.update()
enemy.update()
}
animate()
window.addEventListener('keydown',(event)=>{
    switch(event.key){
        case 'd':
        player.velcoity.x = 1
        break
    }
console.log(event)
})
