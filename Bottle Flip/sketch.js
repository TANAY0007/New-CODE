x=50;

function preload(){
  bottleimg=loadImage("images/Bottle.png")
  tableimg=loadImage("images/table.png")
  wallimg=loadImage("images/room background.jpg")
  aircoolerimg=loadImage("images/air cooler.jpg")
  bookshelfimg=loadImage("images/book shelf.png")
  chairimg=loadImage("images/chair.png")
  cupboardimg=loadImage("images/cupboard.png")
  tablelampimg=loadImage("images/table lamp.png")
  tableimg=loadImage("images/table.png")
}

function setup() {
  createCanvas(1200,600);
  createSprite(400, 200, 50, 50);

  bottle= createSprite(20,200,20,30);
  bottle.addImage(bottleimg)
  bottle.scale=0.1
  table= createSprite(50,250,100,20);
  angle=0
  obstacleGroup=new Group()
}

function draw() {
  background(0);
  image(wallimg,0,0,width,height)
  if(wallimg.x<0){
    image(wallimg,0,0,width,height)
  }
  bottle.velocityY=bottle.velocityY + 0.5;
  if(bottle.isTouching(table)){
    bottle.velocityX= 0
  }
  bottle.collide(table);
  if(keyDown('up')){
    bottle.velocityY= -10
    bottle.velocityX= 3
    bottle.rotation=angle;
    bottle.rotationSpeed=15;
  }  
  
  spawnObstacles();
  bottle.collide(obstacleGroup)
  camera.x=bottle.x
  camera.y=height/2
  drawSprites();
}

function spawnObstacles(){
  x=x+50
  if(frameCount%40===0){
    obstacle=createSprite(x,Math.round(random(200,500)),70,20);
    obstacleGroup.add(obstacle)
    obstacle.lifetime=300
    var x=1
    switch (x){
      case 1: obstacle.addImage(bookshelfimg)
      obstacle.scale=0.1
      break;
      default:break;
    }

  }

}