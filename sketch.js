
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const constraint = Matter.Constraint;

var bob, bob1, bob2, bob3, bob4, bob5, bob6, roof1, chain1, chain2, chain3, chain4, chain5, chain6;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  bob1 = new Bob(400,500);
  bob2 = new Bob(450,500);
  bob3 = new Bob(350,500);
  bob4 = new Bob(500,500);
  bob5 = new Bob(300,500);


  roof1 = new Roof(400,150,325,20);

  chain1 = new Chain(bob1.body, roof1.body, 0 , 0);
  chain2 = new Chain(bob2.body, roof1.body, 50 , 0);
  chain3 = new Chain(bob3.body, roof1.body, -50 , 0);
  chain4 = new Chain(bob4.body, roof1.body, 100 , 0);
  chain5 = new Chain(bob5.body, roof1.body, -100 , 0);
  
  
 


	Engine.run(engine);
  
}


function draw() {
  background(235, 64, 52);
  
  Engine.update(engine);
  
  rectMode(CENTER);
  ellipseMode(CENTER);

  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  

  roof1.display();
  
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
  Matter.Body.applyForce(bob4.body, bob4.body.position, {x: 50, y: 100})
  }

}

function drawLine(constraint){
  bobBodyPosition = constraint.bodyA.position;
  roofBodyPosition = constraint.bodyB.position

  roofBodyOffset = constraint.pointB;

  roofBodyX = roofBodyPosition.x + roofBodyOffset.x
  roofBodyY = roofBodyPosition.y + roofBodyOffset.y
  
  line(BobBodyPosition.x, BobBodyPosition.y, RoofBodyPosition.x, RoofBodyPosition.y);
  
  


}






