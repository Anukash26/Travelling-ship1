var sea, seaImage
var ship, shipImage



function preload(){
shipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImage = loadImage("sea.png");
}

function setup(){
 createCanvas(400,400);

 ship = createSprite(20,200,20,50)
  ship.addAnimation("moving",shipImage);
  sea = createSprite(400,400);
  sea.addImage(seaImage);
if(sea.x < 0){
  sea.x=sea.width/2;
}

  ship.scale = 0.3;
  ship.x = 200;
  sea.scale = 0.25;
  sea.y = 200;
}

function draw(){
background(0);

 drawSprites();

}