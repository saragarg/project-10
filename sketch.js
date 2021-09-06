var shipMoving ,ship
var seaImg,sea

function preload(){
seaImg = loadImage("sea.png");
shipMoving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){

  createCanvas(400,400);

  sea= createSprite(200,200,400,400)
  sea.addImage(seaImg);

  ship=createSprite(100,200,70,70);
 ship.addAnimation(shipMoving);

}
  

function draw() {
  background("blue");
 
}