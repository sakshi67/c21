var fixedRect, movingRect,car , wall;

function setup() {
   createCanvas(1200,800);
   
   fixedRect = createSprite(600, 400, 50, 80);
    fixedRect.shapeColor = "green"; 
    fixedRect.debug = true; 
  movingRect = createSprite(400,200,80,30);
   movingRect.shapeColor = "green";
    movingRect.debug = true; 
  car = createSprite(200, 200, 50, 50);
   car.shapeColor = "pink";
    car.velocityX=2;
   wall = createSprite(400, 200, 20, 80); 
   wall.shapeColor = "yellow";
   } 
   
   function draw() {
      background(0,0,0); 
      
      movingRect.x = World.mouseX;
       movingRect.y = World.mouseY;
       
       bounceoff(car,wall);
        if(isTouching(wall,movingRect)){ 
          textSize(24);
           text("the objects are colliding",200,400) 
          } 

      drawSprites();
         }