//Declaring namespaces for the matter classes. 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//Global Variables 
var Dengine, Dworld, ball, ground,box1,rope,ballImg,CSiteImg;
function preload()
{
  CSiteImg = loadImage("CSite1.jpg");
}
function setup()
{
  createCanvas(600,600);
  Dengine = Engine.create();
  Dworld = Dengine.world;
  ground = new Ground(300,550,600,80);
  // box1 = new Box(480,100,40,40);
  // box2 = new Box(430,100,40,40);
  box3 = new Box(540,40,60,60);
  box4 = new Box(420, 40, 60, 60);
  //box5 = new Box(395, 100, 60, 60);
  box6 = new Box(475, 140, 220, 20);
  box7 = new Box(545, 185, 70, 70);
  box8 = new Box(405, 255, 70, 70);
  box9 = new Box(475, 305, 220, 30);
  box10 = new Box(540, 355, 85, 70);
  box11 = new Box(410, 425, 85, 70);
  box12 = new Box(475,475,220,30);
  box13 = new Box(475,505,220,30);
  // box12 = new Box(800, 100, 70, 70);
  // box13 = new Box(700, 100, 70, 70);
  // box14 = new Box(700, 100, 70, 70);
  // box15 = new Box(700, 100, 70, 70);
  // box16 = new Box(700, 100, 70, 70);
  // box17 = new Box(700, 100, 70, 70);
  // box18 = new Box(700, 100, 70, 70);
  // box19 = new Box(700, 100, 70, 70);
  // box20 = new Box(700, 100, 70, 70);
  console.log(box1);
  ball = new Ball(80,100,150,150);
  
  rope = new Rope(ball.body,{x:150, y:0});

  // World.add(Dworld,ball);
  //World.add(Dworld,ground);
  //World.add(Dworld,box1);
  // World.add(Dworld,this.rope);
  // console.log(ground);
}

function draw(){
  background(CSiteImg);
  //drawSprites();
  Engine.update(Dengine);
  ground.display();
  // box1.display();
  // box2.display();
  box3.display();
  box4.display();
  //box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  ball.display();
  rope.display();
  mouseDrag();
  //ellipseMode(RADIUS);
  //ellipse(ball.position.x,ball.position.y,25,25);
}
function mouseDrag()
{
  Matter.Body.setPosition(ball.body,{x: mouseX, y: mouseY});
}