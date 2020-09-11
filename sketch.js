
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	rectMode(CENTER);
	
	var ground_options = {
        isStatic: true
    }

    var packageSprite_options = {
        restitution: 0.4,
       isStatic: true
    }
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	

	// packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	packageBody = Bodies.circle(width/2 , 200 , 5, packageSprite_options);

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , ground_options);
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  keyPressed();

  

  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;



  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
    
       
     
	Matter.Body.setStatic(packageBody, false);
	
  
  }
}


/*
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    var ball_options = {
        restitution: 1.0
    }

    ball = Bodies.circle(200, 200, 10, ball_options);
    World.add(world,ball);

    ground = Bodies.rectangle(200,300,200,20,ground_options);
    World.add(world,ground);

    
}

function draw(){
    background(0);
    Engine.update(engine);

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 10, 10);

    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    drawSprites();
}

*/
