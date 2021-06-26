var Man_img,Robber_img,Box_img,Background_img


function preload()  {
  Man_img = loadImage("man.jpg");
Robber_img=loadImage("robber.jpg")
Box_img=loadImage('box.jpg')
Background_img=loadImage('background.jpg')
back_img=loadImage('back.jpeg')
sb_img=loadImage('sb.png')
}

function setup() {
  createCanvas(displayWidth,800)
  Robber=createSprite(0,displayHeight-300)
  Robber.scale=0.5
  Robber.addImage(Robber_img)
  Robber.visible=false
  box1 = createSprite(500,555);
  box1.addImage(Box_img)
  box1.scale=0.3
  box1.visible=false
 box2=createSprite(150,600);
  box2.addImage(Box_img)
  box2.scale=0.3
  box2.visible=false
  box3=createSprite(100,650);
  box3.addImage(Box_img)
  box3.scale=0.3
  box3.visible=false
  box4=createSprite(100,700);
  box4.addImage(Box_img)
  box4.scale=0.3
  box4.visible=false
  box5=createSprite(200,710);
  box5.addImage(Box_img)
  box5.scale=0.3
  box5.visible=false
  box6=createSprite(180,715);
  box6.addImage(Box_img)
  box6.scale=0.3
  box6.visible=false
  box7=createSprite(120,645);
  box7.addImage(Box_img)
  box7.scale=0.3
  box7.visible=false
  box8=createSprite(109,750);
  box8.addImage(Box_img)
  box8.scale=0.3
  box8.visible=false
 box9=createSprite(145,560);
 box9.addImage(Box_img)
 box9.scale=0.3
 box9.visible=false
  Man=createSprite(230,500)
  Man.scale=0.8
  Man.addImage(Man_img)
  Man.visible=false
  Box=createSprite(550,300)
  Box.addImage(Box_img)
  Box.scale=0.3
  Box.visible=false
  Back=createSprite(displayWidth,800)
  Back.addImage(back_img)
  Back.visible=false
  SB=createSprite(700,600)
  SB.addImage(sb_img)
  SB.visible=true
}

function draw() {
  background(back_img);  
  drawSprites();
  textSize(30)
  fill('black')
  text("A box costs your job.This is a game where you have save ur precious boxes from the robber.If u win u get 10 point but losing eve one box is costly.U will lose 10 points. Good luck Let's see ur score. ",200,50)
  if(keyDown(RIGHT_ARROW) ){
    Man.x=Man.x+5 
  }
Box.x=Man.x
}