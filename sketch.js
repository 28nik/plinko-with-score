const Engine = Matter.Engine;
const  World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;
 
var particles;
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var gameState = "start";
var count = 0;
var engine, world;
var ground;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");

  textSize(20);
 text("Score : "+score,20,30);
 text("500", 20,510);
 text("500", 100,510);
 text("500", 180,510);
 text("500", 260,510);
 text("100", 340,510);
 text("100", 420,510);
 text("100", 500,510);
 text("200", 580,510);
 text("200", 660,510);
 text("200", 740,510);
  Engine.update(engine);
  
 text ("chances left:" + (5-count), width-200, 30)
 
 if (gameState === "end"){
   textSize(50);
   text("Game over", width/3, height/2)
 }
  
  ground.display();

  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }
  //  if(frameCount%60===0){
  //    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  //    score++;
  //  }
 
  // for (var j = 0; j < particles.length; j++) {
   
  //    particles[j].display();
  //  }
  
  if(particles !=null){

    particles.display();

    if (particles.body.position.y>760){
      if (particles.body.position.x < 300 && particles.body.position.x > 0){
        score+=500;
        particles = null;
        if (count>=5){
          gameState = "end";
        }
      }
      else if (particles.body.position.x  > 301 && particles.body.position.x<600){
        score+=100;
        particles = null;
        if (count>=5){
          gameState = "end";
        }
      }
      else if (particles.body.position.x  > 601 && particles.body.position.x<900){
        score+=200;
        particles = null;
        if (count>=5) gameState = "end";
        
      }
    }
      
  }
  
  for (var k = 0; k < divisions. length; k++) {
    divisions [k].display();
    
    }}

function mousePressed() {
  if (gameState !=="end"){
    particles = new Particle(mouseX, 10,10,10);
    count+=1;
  }
  if (count<0){
    gameState = "end";
  }
}
