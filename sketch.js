
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var world,engine;
var cuerda,bloque1,bloque2,bloque3,bloque4,bloque5,bloque6;
var bloque7,bloque8,bloque9,bloque10,bloque11,bloque12,bloque13,bloque14,bloque15,bloque16;
var bloque17,bloque18,bloque19,bloque20,bloque21,bloque22;
var ground,demoledora;
var techo,ball;
var bg,sound;

function preload(){
  demoledora=loadImage("demoledora.1.png");
  bg=loadImage("bg.jpg");
  sound=loadSound("construccion.mp3");

  }

function setup() {
	createCanvas(1370, 600);
  sound.loop();
  engine = Engine.create();
	world = engine.world;


  ground= new roof(1000,580,800,10);
  bloque1= new Block(965,200,60,60);
  bloque2 = new Block(900,200,60,60);
  bloque3= new Block(1030,200,60,60);
  bloque4= new Block(965,200,60,60);
  bloque5 = new Block(900,200,60,60);
  bloque6= new Block(1030,200,60,60);
  bloque7= new Block(965,200,60,60);
  bloque8 = new Block(900,200,60,60);
  bloque9= new Block(1030,200,60,60);
  bloque10= new Block(965,200,60,60);
  bloque11= new Block(900,200,60,60);
  bloque12= new Block(1030,200,60,60);
  bloque13= new Block(965,200,60,60);
  bloque14= new Block(900,200,60,60);
  bloque15= new Block(1030,200,60,60);
  bloque16= new Block(965,200,60,60);
  bloque17= new Block(900,200,60,60);
  bloque18= new Block(1030,200,60,60);
  bloque19= new Block(900,200,60,60);
  bloque20= new Block(1030,200,60,60);
  bloque21= new Block(965,200,60,60);
 

 techo= new roof(650,100,20,20);
 ball= new Ball(300,300,40);
 cuerda=new rope(ball.body,techo.body,0,0)

	Engine.run(engine);
}

function draw() {
  background(bg,3000,600);
  Engine.update(engine);
  fill("black");
  textSize(30);
  text("Mueve la palanca con Flecha Izquierda",100,30);
 
  image(demoledora,160,32,550,600);

ground.display();
bloque1.display();
bloque2.display();
bloque3.display();
bloque4.display();
bloque5.display();
bloque6.display();
bloque7.display();
bloque8.display();
bloque9.display();
bloque10.display();
bloque11.display();
bloque12.display();
bloque13.display();
bloque14.display();
bloque15.display();
bloque16.display();
bloque17.display();
bloque18.display();
bloque19.display();
bloque20.display();
bloque21.display();

cuerda.display();
ball.display();


fill("yellow");
techo.display();
 
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
   Matter.Body.applyForce(ball.body,ball.body.position,{x:-80,y:-50});

   }

}




