class Rope 
{
  constructor(bodyA,pointB)
  {
    var options = 
    {
      bodyA :bodyA,
      pointB: pointB,
      stiffness: 0.8,
      length: 450,
    };
    
    this.pointB = pointB;
    this.rope = Constraint.create(options);
    //this.image = loadImage("chainImg.png");
    World.add(Dworld,this.rope);
  }
  attach(body)
  {
    this.rope.bodyA = body;
  }
  
  display()
  {
    if(this.rope.bodyA)
    {
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        push();
        stroke("yellow");
        strokeWeight(4);
        //imageMode(CENTER);
        //image(this.image,0,0,this.width,this.height);
        
        line(pointB.x,pointB.y,pointA.x,pointA.y);
        pop();
    }
  }

  }

