var car;
var wall;
var weight,speed;
function setup() {
  createCanvas(1600,400);
  car=createSprite(100, 50, 20, 20);
  wall=createSprite(1500,200,60,1600);
  speed=random(55,90);
  weight=random(400,1500);  
}

function draw() {
  background("black");  

car.velocityX=speed;

deform()  



  drawSprites();
}
function deform(){
  if(wall.x-car.x <( car.width+wall.width)/2) 
{
  car.velocityX=0;
  var deformation=0.5*weight * speed * speed/22509;
  if(deformation>180){
    car.shapeColor="Yellow" 
  }
  if(deformation<180&& deformation>180){
    car.shapeColor="Red"
  }
  if(deformation<100){
    car.ShapeColor="Green";
  }
}
}