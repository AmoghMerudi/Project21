var bullet,wall;
var thickness,speed,weight;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50,200,30,10);
  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor = (80,80,80);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
}

function draw() {
  background("black"); 
  
  bullet.velocityX = speed;

  bullet.collide(wall);

  if(wall.x - bullet.x < (bullet.width + wall.width/2)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    
    if(damage<10){
      wall.shapeColor = "green";
    }

    if(damage>10){
      wall.shapeColor = "red";
    }
  }
  
  drawSprites();
}