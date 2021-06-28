var cat,cat1,cat2,cat3,cat4
var mouse,mouse1,mouse2,mouse3,mouse4
var garden
function preload() {
    cat1=loadAnimation("images/cat1.png")
    cat2=loadAnimation("images/cat2.png","images/cat3.png")
cat3=loadAnimation("images/cat4.png")
mouse1=loadAnimation("images/mouse1.png")
mouse2=loadAnimation("images/mouse2.png")
mouse3=loadAnimation("images/mouse3.png")
mouse4=loadAnimation("images/mouse4.png")
garden=loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    cat=createSprite(800,600)
    cat.addAnimation("cat",cat1)
cat.scale=0.1

mouse=createSprite(200,600)
mouse.addAnimation("mouse",mouse1)
mouse.scale=0.1


}

function draw() {

    background(garden);
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    
cat.velocityX=0
cat.velocityY=0
cat.addAnimation("catlastimg",cat3)
cat.x=300
cat.scale=0.1
cat.changeAnimation("catlastimg")


mouse.addAnimation("mouselastimg",mouse4)
mouse.scale=0.1
mouse.changeAnimation("mouselastimg")

}
    drawSprites();
}


function keyPressed(){

if(keyCode===LEFT_ARROW){
    cat.velocityX=-5
    cat.addAnimation("catRunning",cat2)
    cat.changeAnimation("catRunning")
    cat.scale=0.1

    mouse.addAnimation("PichuTaunt",mouse3)
    mouse.changeAnimation("PichuTaunt")
}


}
