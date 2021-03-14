var fixedRect, movingRect;
var car, wall
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car =  createSprite (300, 200, 50, 50)
  car.shapeColor = "green";
  car.debug = true;
  car.velocityX=2
  wall = createSprite (800, 200, 50, 80)
  wall.shapeColor="Green";
  wall.debug = true
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;







if(isTouching(movingRect, fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
}
 else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
 }
 if(isTouching(movingRect, wall)){
  movingRect.shapeColor = "red";
  wall.shapeColor = "red";
}
else{
//movingRect.shapeColor = "green";
wall.shapeColor = "green";
}
if(collide(car, wall)){
  car.shapeColor="red"
  wall.shapeColor="red"
  }
  else{
  car.shapeColor="green"
  //wall.shapeColor="green"
  
  }




  drawSprites();
}











