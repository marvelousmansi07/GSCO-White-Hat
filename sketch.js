//var fixedRect, movingRect;
var car, wall;
var speed, weight;


function setup() {
  createCanvas(1600,400);
  //fixedRect = createSprite(400, 200, 50, 50);
 // movingRect = createSprite(100,100,80,30);

  //fixedRect.shapeColor = "green";
  //movingRect.shapeColor = "green";

  speed = random(55, 90);
  weight = random(400, 1500);

  car = createSprite(50, 200, 50, 50);

  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = color(80, 80, 80);
}

function draw() {
  background(0);

   // movingRect.x = mouseX;
    //movingRect.y = mouseY;

    /*if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 
      && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
      movingRect.shapeColor = "red";
      fixedRect.shapeColor = "red";
    } else {
      fixedRect.shapeColor = "green";
      movingRect.shapeColor = "green";
    }*/

    car.velocityX = speed;

    if(wall.x - car.x < (car.width+wall.width)/2){
      car.velocityX = 0;
      var deformation = (0.5 * weight * speed * speed)/22509;
        if(deformation > 180){
          car.shapecolor = color(255, 0, 0);
        } if(deformation < 180 && deformation > 100){
          car.shapeColor = color(230, 230, 0);
        } if(deformation < 100){
          car.shapeColor = color(0, 255, 0);
        }

    }
  drawSprites();
}