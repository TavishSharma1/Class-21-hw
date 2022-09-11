
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wall1
var wall2
var wall3
var ball
var Up_button,Right_Button
function preload()
{
	
}

function setup() {
	createCanvas(1850, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		restitution: 0.95,
		frictionAir:0.01
	  }
	  Up_button = createImg("up.png") 
	  Up_button.position(220,30)
	  Up_button.size(50,50)
	  Up_button.mouseClicked(vforce)
	
	  Right_button = createImg("right.png") 
	  Right_button.position(20,30)
	  Right_button.size(50,50)
	  Right_button.mouseClicked(hforce)
	wall1 = new Ground(925,790,1850,20)
	wall2 = new Ground(1000,790,20,500)
	wall3 = new Ground(1450,790,20,500)
	ball = Bodies.circle(100,10,20,ball_options);
	World.add(world,ball);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  fill("orange")
  ellipse(ball.position.x,ball.position.y,20);
 wall1.display()
 wall2.display()
 wall3.display()
}
function hforce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
  }
  
  function vforce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05})
  }
  


