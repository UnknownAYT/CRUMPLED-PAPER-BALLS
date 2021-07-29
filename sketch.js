const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;

let engine;
let world;

var ground;
var wall1;
var wall2;
var ball;

function setup() {
  createCanvas(700,350);
  engine = Engine.create();
  world = engine.world;

  ground =new Ground(350,350,700,30);
 wall1 = new Wall(600,305,10,60);
 wall2= new Wall(500,305,10,60);
 
var ball_options={
	isStatic:false,
  restitution:0.3,
  friction:0,
  density:1.2,
};

  ball=Bodies.circle(100,200,10,ball_options);
  World.add(world,ball);
  keyPressed();
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(0);
  ground.show();
wall1.show();
wall2.show();
  ellipse(ball.position.x,ball.position.y,10);

  Engine.update(engine);
}

function Force(){
Body.applyForce(ball,{x:0,y:0},{x:3,y:2});
  }
function keyPressed(){
if (keyCode===UP_ARROW){
Force();
	  }
  }