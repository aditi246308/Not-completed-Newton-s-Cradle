class Bob {
  constructor(x,y){
   
  var options = {
   //density: 0.8,
   isStatic: false,
   //friction: 0,
   restitution: 1
   
 }

  this.x = x;
  this.y = y;
  this.body = Bodies.circle(this.x,this.y,50,options);
  World.add(world,this.body);


}

display(){
var angle = this.body.angle;
var pos = this.body.position
//pos.x = mouse.X;
//pos.y = mouse.Y;
push();
fill("white");
translate(pos.x,pos.y);
ellipseMode(CENTER);
ellipse(0,0,70)
pop();

}


}