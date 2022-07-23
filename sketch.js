
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ball_options ={
		isStatic: false,
		restitution: 0.3,
	    friction: 0,
		density: 1.2
	}
     
    ball = Bodies.circle(100,200,20,ball_options);
		World.add(world,ball);

	ground=new Ground(width/2,670,width,20)
leftSide = new Ground(500,600,20,120)
rightSide = new Ground(650,600,20,120)

Engine.run(engine);


}


function draw() {
  rectMode(CENTER);
  background(0);

ground.display()
leftSide.display()
rightSide.display()

ellipse(ball.position.x, ball.position.y,20,20)

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, ball.position,{x:50, y:-75})
	}
}

