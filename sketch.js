const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1;
var ball1, rope1;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13,  slingShot;
function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;
    //ground1 = new Ground(50,590,5000,10);
    box1 = new Box(500,470,60,60);
    box2 = new Box(500,470,60,60);
    box3 = new Box(500,470,60,60);
    box4 = new Box(500,470,60,60);
   box5 = new Box(500,470,60,60);
   // box6 = new Box(100,470,60,60);
    box7 = new Box(35,430,30,40);
    box8 = new Box(470,430,30,40);
    
    box9 = new Box(505,430,30,40);
    box10 = new Box(540,430,30,40);
    box11= new Box(470,390,30,40);
    box12= new Box(505,390,30,40);
    box13 = new Box(490,350,30,40);
   ball1 = new Ball(200, 200, 100,100);
   
   rope1 = new Rope(ball1.body, { x: 500, y: 50 });
    ground1 = new Ground(100,500,2000,20);
   
}


function draw(){
    background(0);
    Engine.update(engine);
    ground1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
   /* box1.display();
    box1.display();
    box1.display();
    box1.display();
    box1.display();
    box1.display();*/

ball1.display();
rope1.display();
//mouseDragged();

}

function mouseDragged() {
    Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
  }