var door,closedimg
var human
var box1,box2,box3,boximg
var groundimg, ground

function preload(){
  closedimg=loadImage("photos/closeddoor.png")
  boximg= loadImage("photos/bluesquare.png")
  groundimg= loadImage("photos/wooden-floor.jpg")
}

function setup() {
  createCanvas(800,800);
  door= createSprite(400, 200, 50, 150);
  human= createSprite(200,200,20,20);
  door.addImage("dor",closedimg) ;
  door.scale=0.4
  box1= createSprite(190,220,20,20)
  box1.addImage("som",boximg)
  box1.scale=0.2;
  ground= createSprite(200,200,1200,1000)
  ground.addImage("sem",groundimg);
}

function draw() {
  background(255,255,255); 
  //image(closed, door.x, door.y);
  human.x=mouseX
  human.y=mouseY
  human.depth=box1.depth+2
  human.depth=ground.depth+2
  door.depth=ground.depth+2
  box1.depth=ground.depth+2
  drawSprites();
}