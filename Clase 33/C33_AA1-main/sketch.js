const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;
const Composites=Matter.Composites;
const Composite=Matter.Composite;
///
var engine
var world
var fruit
var floor
var rabbit
var rope1
var rope2
var rope3
var fruitImage
var rabbitImage
var backgroundImage
var button1
var button2
var button3
var mute_btn
var cut_sound
var sad_sound
var eating_sound
var fruit_con
var fruit_con_2
var fruit_con_3
var bk_song //(BaKground/musica de fondo)
var food
///
function preload(){
  backgroundImage=loadImage("background.png")
  rabbitImagen=loadImage("eat_1.png")//Normal Buny
  food=loadImage("melon.png")
  sad_sound=loadSound("sad.wav")
  cut_sound=loadSound("rope_cut.mp3")
  eating_sound=loadSound("eating_sound.mp3")
  bk_song=loadSound("sound1.mp3")
}
///
function setup(){
  createCanvas(500,700)
  engine=Engine.create();
  bk_song.play();
  bk_song.setVolume(0.07)
  ///
  button1=createImg("cut_btn.png")
  button1.position(20,30)
  button1.size(50,50)
  button1.mouseClicked(drop)
  ///
  button2=createImg("cut_btn.png")
  button2.position(330,35)
  button2.size(60,60)
  button2.mouseClicked(drop2)
  ///
  button3=createImg("cut_btn.png")
  button3.position(360,200)
  button3.size(60,60)
  button3.mouseClicked(drop3)
  ///
  mute_btn=createImg("mute.png")
  mute_btn.position(450,20)
  mute_btn.size(50,50)
  mute_btn.mouseClicked(mute)
  ///
  world=engine.world
  rope1=new Rope(8,{x:40,y:30});
  rope2=new Rope(7,{x:370,y:40})
  rope3=new Rope(4,{x:400,y:225})
  floor=new Ground(200,690,600,20)
  rabbit=createSprite(420,620,10,10)
  rabbit.scale=0.3
  rabbit.addImage("rabbit",rabbitImagen)
  fruit=Bodies.circle(300,300,20)
  Matter.Composite.add(rope1.body,fruit)
  fruit_con=new link(rope1,fruit)
  fruit_con_2=new link(rope2,fruit)
  fruit_con_3=new link(rope3,fruit)
///
  rectMode(CENTER)
  ellipseMode(RADIUS)
}
///
function draw(){
  background("black")
  image(backgroundImage,0,0,490,690)
  push();
  imageMode(CENTER)
  if(fruit!=null){
    image(food,fruit.position.x,fruit.position.y,70,70)
  }
  pop();
  rope1.show();
  rope2.show();
  rope3.show();
  Engine.update(engine)
  drawSprites();
}
///
function drop(){
  cut_sound.play();
  rope1.break();
  fruit_con.detach();
  fruit_con=null
}
///
function drop2(){
  cut_sound.play();
  rope2.break();
  fruit_con_2.detach();
  fruit_con_2=null
}
///
function drop3(){
  cut_sound.play();
  rope3.break();
  fruit_con_3.detach();
  fruit_con_3=null
}
///
function mute(){
  if (bk_song.isPlaying()){
    bk_song.stop();
  }
  else{
    bk_song.play() 
  }
}