
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var chao,bola,sideLeft,sideRight
var engine,world

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	chao = new Box(400,650,800,2)
	sideLeft = new Box(500,600,10,100)
	sideRight = new Box(650,600,10,100)

	var options={ isStatic:false, 
	frictionAir: 0.01,
restituition:0.3 } 
	bola = Bodies.circle(200,20,20,options); 
	World.add(world,bola);


	Engine.run(engine);
  ellipseMode(RADIUS)
}


function draw() {
  rectMode(CENTER);
  background(0);

  chao.desenhar()
  sideLeft.desenhar()
  sideRight.desenhar()

  fill("beige")
   ellipse(bola.position.x,bola.position.y,20,20);
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===32){
       Body.applyForce(bola,{x:0,y:0},{x:0.05,y:0.03})
	}
}



