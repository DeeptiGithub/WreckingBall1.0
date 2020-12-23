class Ground 
{
  constructor(x,y,width,height)
  {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("SiteMsg.png");
      World.add(Dworld,this.body);
  }
  display()
  {
    var pos = this.body.position;
    //push();
    //rectMode(CENTER);
    imageMode(CENTER);
    //fill("brown");
    image(this.image,pos.x,pos.y,this.width,this.height);
    //rect(pos.x,pos.y,this.width,this.height);
    //pop();
  }
    
}