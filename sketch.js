function preload(){
  issimage=loadImage("iss.png")
  eatimage=loadAnimation("eat1.png","eat2.png")
  gymimage=loadAnimation("gym1.png","gym2.png")
}


function setup() {
  createCanvas(800,800);
  boy=createSprite(400, 400, 50, 50);
  boy.addAnimation("eat",eatimage)
  boy.addAnimation("gym",gymimage)

  boy.scale=0.1
}

function draw() {
  background(issimage)
  if(keyDown("up_arrow")){
    boy.changeAnimation("gym",gymimage)
  }
  

  drawSprites()

}