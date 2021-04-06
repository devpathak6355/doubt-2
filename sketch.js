var ball;
var ground;
var dustbin3,dustbin2,dustbin1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world;

function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world; 

	ball=new Ball();
	ground=new Ground();
	dustbin1= new Dustbin(525,470,150,20);
	dustbin2= new Dustbin(440,410,20,140);
	dustbin3= new Dustbin(610,410,20,140);

	Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ball.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  keypressed();
}
function keypressed(){

	if(keyDown(UP_ARROW)){
  	Matter.Body.applyForce(ball.body,ball.body.position,{x:30,y:-30});
	}

}