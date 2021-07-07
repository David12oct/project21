
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var ball
var wall1
var wall2
var ball_options
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

 
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ball_options={
    iStatic:false,
    restitution:0.3,
    friction:0,
  density:1.2
  }

	Engine.run(engine);
  ground=new Ground(400,690,800,10)
  ball=new Ball(100,300,20)
  wall1=new Ground(400,650,10,90)
  wall2=new Ground(550,650,10,90)
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  ball.display()
  wall1.display()
  wall2.display()
  drawSprites();
 kp()
}
function kp(){
  if(keyCode==UP_ARROW){
    Matter.Body.applyForce(ball.ball,ball.ball.position,{x:0.003,y:-0.003})
  }
}


