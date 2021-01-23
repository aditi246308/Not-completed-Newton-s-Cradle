/*class Chain {
    
    constructor(body1, body2, offsetX, offsetY){
       
        this.offsetX = offsetX;
        this.offsetY = offsetY;

        this.body1 = body1;
        this.body2 = body2;

        var options = {
        point1: {x: this.offsetX, y: this.offsetY},
        point2: {x: this.offsetX, y: this.offsetY}
        }
    
    this.chain = constraint.create(options);    
    World.add(world, this.chain);
   
   
    
    var point1 = this.chain.body1.position;
    var point2 = this.chain.body2.position;

    var point1X = point1.x;
    var point1Y = point1.y;

    var point2X = point2.x;
    var point2Y = point2.y;


    display();
    strokeWeight(3);
    line(point1X, point1Y, point2X, point2Y);
}

}*/

class Chain{
	constructor(body1,body2, offsetX, offsetY)
	{
		this.offsetX=offsetX
		this.offsetY=offsetY
		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.offsetX, y:this.offsetY}
		}
		
		this.chain=constraint.create(options)
		World.add(world,this.chain)
	}

	display()
	{
		var pointA=this.chain.bodyA.position;
		var pointB=this.chain.bodyB.position;

		strokeWeight(2);

		var point1X=pointA.x
		var point1Y=pointA.y

		var point2X=pointB.x+this.offsetX
		var point2Y=pointB.y+this.offsetY

		line(point1X,point1Y,point2X,point2Y);
	}

}
