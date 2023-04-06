const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d")

canvas.width =1024
canvas.height =576
c.fillRect(0,0,canvas.width,canvas.height)


const gravity = 0.3

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
const keys = {
    a:{
        pressed:false
    },
    d:{
        pressed:false
    }
}
let lastkey;

function animate (){
    window.requestAnimationFrame(animate)
    c.fillStyle = "black"
    c.fillRect(0,0,canvas.width, canvas.height)
player.update()

player.velcoity.x = 0


if(keys.a.pressed && lastkey === 'a'){
player.velcoity.x= -1
}else if (keys.d.pressed && lastkey === 'd'){
    player.velcoity.x = 1
}
}

animate()
window.addEventListener('keydown',(event)=>{
    switch(event.key){
        case 'd':
            keys.d.pressed = true 
            lastkey ='d'
        break 
        case 'a':
       keys.a.pressed = true
       lastkey ='a' 
        break
        case 'w':
        keys.w.pressed = true
        lastkey ='w' 
         break
    }
console.log(event)
})
window.addEventListener('keyup',(event)=>{
    switch(event.key){
        case 'd':
            keys.d.pressed = false
        break
        case 'a':
           keys.a.pressed = false
            break
            
    }
console.log(event)
})