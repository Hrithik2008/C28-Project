
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(900,200,random(20,30));
	mango2=new Mango(970,240,random(20,30));
	mango3=new Mango(970,150,random(20,30));
	mango4=new Mango(1000,85,random(20,30));
	mango5=new Mango(1025,200,random(20,30));
	mango6=new Mango(1200,220,random(20,30));
	mango7=new Mango(1175,175,random(20,30));
	mango8=new Mango(1100,50,random(20,30));
	mango9=new Mango(1100,200,random(20,30));
	mango10=new Mango(1100,120,random(20,30));	

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj=new Stone(240,420,20);
	launcherObject = new Launcher(stoneObj.body,{x : 240 , y : 420});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  groundObject.display();

  stoneObj.display();
  launcherObject.display();

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
  detectCollision(stoneObj,mango7);
  detectCollision(stoneObj,mango8);
  detectCollision(stoneObj,mango9);
  detectCollision(stoneObj,mango10);

  textSize(20);
  text("Press Spacebar for another try !",100,100);
}

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x : mouseX , y : mouseY});
}

function mouseReleased(){
	launcherObject.fly();
  }


  function detectCollision(bodyA,bodyB) {
	 var posA = bodyA.body.position;
	 var posB = bodyB.body.position;
	 var distance = dist(posA.x,posA.y,posB.x,posB.y);
	 if(distance <= bodyA.r + bodyB.r ){
		 Matter.Body.setStatic(bodyB.body,false);
	 }
}

function keyPressed(){
	if (keyCode === 32) {
		launcherObject.attach(stoneObj.body);
		Matter.Body.setPosition(stoneObj.body,{x : 240 , y : 420});
	}
}
