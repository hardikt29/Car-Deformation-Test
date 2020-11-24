var car,car1,car2,car3,car4;
var wall;
var  speed,speed1,speed2,speed3,speed4;
var weight,weight1,weight2,weight3,weight4;
var deformation,deformation1,deformation2,deformation3,deformation4;
var test1,test2,test3,test4,test5;

function setup() {
 createCanvas(1700,400);

 test1 = createButton("Test-1"); 
 test2 = createButton("Test-2");
 test3 = createButton("Test-3");
 test4 = createButton("Test-4");
 test5 = createButton("Test-5");

 
 

 car = createSprite(50,200,20,20);
 //car.visible = false;

 car1 = createSprite(50,200,20,20);
 car1.visible = false;

 car2 = createSprite(50,200,20,20);
 car2.visible = false;

 car3 = createSprite(50,200,20,20);
 car3.visible = false;

 car4 = createSprite(50,200,20,20);
 car4.visible = false;

  wall = createSprite(1450,200,20,200);
  //wall.visible = false;
  
  speed =20;
  speed1 =speed+20;
  speed2 =speed1+20;
  speed3 =speed2+20;
  speed4 =speed3+20;
  
  weight =400;
  weight1 =weight+200;
  weight2 =weight1+200;
  weight3 =weight2+200;
  weight4 =weight3+200;

  deformation = 0.5*weight*speed*speed/22500;
  deformation1 = 0.5*weight1*speed1*speed1/22500;
  deformation2 = 0.5*weight2*speed2*speed2/22500;
  deformation3 = 0.5*weight3*speed3*speed3/22500;
  deformation4 = 0.5*weight4*speed4*speed4/22500;





}

function draw() {
background(255,255,255);

//car1.bounceOff(wall1);
  
car1.velocityX = speed1;
car2.velocityX = speed2;
car3.velocityX = speed3;
car4.velocityX = speed4;

  
  if(wall.x - car.x < (car.width - wall.width)/2)
  {
    car.velocityX = 0;
    car.shapeColor = color(0,0,0);
    
 
  }
  if(wall.x - car1.x < (car1.width - wall.width)/2)
  {
    car1.velocityX = 0;
    car1.shapeColor = color(0,0,0);
  }

  if(wall.x - car2.x < (car2.width - wall.width)/2)
  {
    car2.velocityX = 0;
    car2.shapeColor = color(0,0,0);
  }
  if(wall.x - car3.x < (car3.width - wall.width)/2)
  {
    car3.velocityX = 0;
    car3.shapeColor = color(0,0,0);
  }
  if(wall.x - car4.x < (car4.width - wall.width)/2)
  {
    car4.velocityX = 0;
    car4.shapeColor = color(0,0,0);
    
  }

  test1.mousePressed(()=>{
    

  });
  test1.mouseReleased(()=>{
    car.velocityX = speed;

  });
  test2.mousePressed(()=>{
  });
  test2.mouseReleased(()=>{
    car.visible  = false;
    car1.visible = true;
    car1.x = 50;
    car1.y = 200;
 
    car1.velocityX = speed1;


  });
  test3.mousePressed(()=>{
  });
  test3.mouseReleased(()=>{
    car1.visible  = false;
    car2.visible = true;
    car2.x = 50;
    car2.y = 200;
 
    car2.velocityX = speed2;


  });
  test4.mousePressed(()=>{
  });
  test4.mouseReleased(()=>{
    car2.visible  = false;
    car3.visible = true;
    car3.x = 50;
    car3.y = 200;
 
    car3.velocityX = speed3;
  });
  test5.mousePressed(()=>{
  });
  test5.mouseReleased(()=>{
    car3.visible  = false;
    car4.visible = true;
    car4.x = 50;
    car4.y = 200;
 
    car4.velocityX = speed4;
    


  });
if(keyDown("ENTER")){
  wall.visible = false;
  car.visible = false;
  car1.visible = false;
  car2.visible = false;
  car3.visible = false;
  car4.visible = false;
  test1.visible = false;
  test2.visible = false;
  test3.visible = false;
  test4.visible = false;
  test5.visible = false;

    text("Test-1  "+"Speed: "+speed+" Weight: "+weight+" Deformation: "+deformation,400,200);
    text("Test-2  "+"Speed: "+speed1+" Weight: "+weight1+" Deformation: "+deformation1,400,220);
    text("Test-3  "+"Speed: "+speed2+" Weight: "+weight2+" Deformation: "+deformation2,400,240);
    text("Test-4  "+"Speed: "+speed3+" Weight: "+weight3+" Deformation: "+deformation3,400,260);
    text("Test-5  "+"Speed: "+speed4+" Weight: "+weight4+" Deformation: "+deformation4,400,280);
  }
 
drawSprites();
}
