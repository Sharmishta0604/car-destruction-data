var car;
var wall;
var weight,speed;
function setup() {
  createCanvas(1600,400);
  
  wall=createSprite(1500,200,60,height/2);
  car=createSprite(50,200,50,50);
  weight=random(400,1500);
  speed=random(55,90);
   car.velocityX=speed;
}

function draw() {
  background("black"); 
 wall.shapeColor=color(80,80,80); 
 if(wall.x-car.x<=car.width/2+wall.width/2) {
   car.velocityX=0;
   var deformation=0.5*weight*speed*speed/22500;
   if(deformation<100) {
     car.shapeColor="green";
   }

   if(deformation>100 && deformation<180){
     car.shapeColor="yellow";
   }

   if(deformation>180){
     car.shapeColor="red";
   }
   

 }
 console.log(speed);
 console.log(weight);
  drawSprites();
}