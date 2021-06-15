//maze variables
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25,b26,b27,b28,b29,b30;
var h1,b2,h3,h4;
var Bgrp,hgrp;
var h1,b2,h3,h4;
var backgroundimg;
var ht1,ht2,ht3,htimg;
var cat, catimg,catimg2;
var Play=1;
var End=0;
var Gamestate=1;
var lives=3;

function preload(){
    backgroundimg=loadImage("background.jpg")
    catimg=loadImage("cat.jpg")
    catimg2=loadImage("catback.png")
    pmimg=loadImage("pm.png")
    htimg=loadImage("heart.png")
}

function setup(){
    createCanvas(1350,610);
  
     Bgrp=new Group()
     hgrp=new Group();
  
    //edgesprites
    p1=createSprite(220,300,1,100)
    p1.shapeColor="yellow"
    p2=createSprite(1200,300,1,100)
    p2.shapeColor="yellow"
    B1=createSprite(675,5,1350,10)
    B1.shapeColor="yellow"
    B2=createSprite(675,605,1350,10)
    B2.shapeColor="yellow"
    B3=createSprite(5,305,10,610);
    B3.shapeColor="yellow"
    B4=createSprite(1345,305,10,610)
    B4.shapeColor="yellow"
    //creating maze blocks
    b1= createSprite(65,250,300,15)
    b1.shapeColor="red"
    b2= createSprite(65,350,300,15)
    b2.shapeColor="blue"
    b3= createSprite(220,129,15,257)
    b3.shapeColor="green"
    b4= createSprite(330,80,15,175)
    b4.shapeColor="blue"
    b5=createSprite(220,480,15,275)
    b5.shapeColor="red"
    b6=createSprite(330,580,15,100)
    b6.shapeColor="purple"
    b7=createSprite(525,530,405,15)
    b7.shapeColor="green"
    b8=createSprite(730,488,15,100)
    b8.shapeColor="blue"
    b9= createSprite(470,425,300,15)
    b9.shapeColor="green"
    b10=createSprite(328,400,15,60)
    b10.shapeColor="red"
    b11=createSprite(430,370,220,15)
    b11.shapeColor="purple"
    b12=createSprite(535,300,15,150)
    b12.shapeColor="blue"
    b13=createSprite(383,170,120,15)
    b13.shapeColor="red"
    b14=createSprite(400,225,15,100)
    b14.shapeColor="green"
    b15=createSprite(620,295,15,275)
    b15.shapeColor="blue"
    b16=createSprite(560,50,15,100)
    b16.shapeColor="green"
    b17=createSprite(798,431,150,15)
    b17.shapeColor="purple"
    b18=createSprite(700,10,15,50)
    b18.shapeColor="purple"
    b19=createSprite(720,150,15,130)
    b19.shapeColor="blue"
    b20=createSprite(795,220,165,15)
    b20.shapeColor="red"
    b21=createSprite(875,278,15,130)
    b21.shapeColor="green"
    b22=createSprite(700,320,150,15)
    b22.shapeColor="red"
    b23=createSprite(768,338,15,25)
    b23.shapeColor="green"
    b24=createSprite(900,300,40,15)
    b24.shapeColor="red"
    b25=createSprite(1300,250,200,15)
    b25.shapeColor="red"
    b26=createSprite(1200,125,15,264)
    b26.shapeColor="purple"
    b27=createSprite(1010,300,50,15)
    b27.shapeColor="red"
    b28=createSprite(1030,222,15,170)
    b28.shapeColor="green"
    b29=createSprite(937,140,200,15)
    b29.shapeColor="blue"
    b30=createSprite(1300,350,300,15)
    b30.shapeColor="green"
    b31=createSprite(1158,370,15,30)
    b31.shapeColor="red"
    b32=createSprite(880,473,15,100)
    b32.shapeColor="green"
    b33=createSprite(1081,392,170,15)
    b33.shapeColor="blue"
    b34=createSprite(990,510,15,250)
    b34.shapeColor="purple"
    b35=createSprite(932,520,118,15)
    b35.shapeColor="red"
    b36=createSprite(1170,160,70,15)
    b36.shapeColor="blue"
    b37=createSprite(1020,50,350,15)
    b37.shapeColor="red"

  h1=createSprite(490,200,20,20);
  h1.velocityY=4
  h1.velocityX=2
  h1.addImage(pmimg);
  h1.scale=0.13;
  h2=createSprite(280,500,20,20)
  h2.velocityX=1;
  h2.velocityY=5;
  h2.addImage(pmimg);
  h2.scale=0.13;
  h3=createSprite(675,263,20,20);
  h3.velocityY=3;
  h3.velocityX=5
  h3.addImage(pmimg);
  h3.scale=0.11;
  h4=createSprite(952,118,20,20);
  h4.velocityX=4;
  h4.velocityY=6; 
  h4.addImage(pmimg);
  h4.scale=0.13;

  cat=createSprite(90,300,20,20)
  cat.addImage(catimg);
  cat.scale=0.14;
}

function draw(){
    background(backgroundimg);
    llives()

      //adding and bouncing off
  Bgrp.add(B1);
  Bgrp.add(B2);
  Bgrp.add(B3);
  Bgrp.add(B4);
  Bgrp.add(b1);
  Bgrp.add(b2);
  Bgrp.add(b3);
  Bgrp.add(b4);
  Bgrp.add(b5);
  Bgrp.add(b6);
  Bgrp.add(b7);
  Bgrp.add(b8);
  Bgrp.add(b9);
  Bgrp.add(b10);
  Bgrp.add(b11);
  Bgrp.add(b12);
  Bgrp.add(b13);
  Bgrp.add(b14);
  Bgrp.add(b15);
  Bgrp.add(b16);
  Bgrp.add(b17);
  Bgrp.add(b18);
  Bgrp.add(b19);
  Bgrp.add(b20);
  Bgrp.add(b21);
  Bgrp.add(b22);
  Bgrp.add(b23)
  Bgrp.add(b24)
  Bgrp.add(b25)
  Bgrp.add(b26)
  Bgrp.add(b27)
  Bgrp.add(b28)
  Bgrp.add(b29)
  Bgrp.add(b30)
  Bgrp.add(b31)
  Bgrp.add(b32)
  Bgrp.add(b33)
  Bgrp.add(b34)
  Bgrp.add(b35)
  Bgrp.add(b36)
  Bgrp.add(b37)
  hgrp.add(h1);
  hgrp.add(h2);
  hgrp.add(h3);
  hgrp.add(h4);
  cat.bounceOff(Bgrp);
  hgrp.bounceOff(Bgrp);
  hgrp.bounceOff(p1);
  hgrp.bounceOff(p2);

  if(Gamestate===1){
      h1.visible=false;
      if(keyDown(RIGHT_ARROW)){
    cat.x=cat.x+4
    cat.addImage(catimg);
    }
  if(keyDown(UP_ARROW)){
    cat.y=cat.y-3
  }
  if(keyDown(DOWN_ARROW)){
    cat.y=cat.y+4
  }
  if(keyDown(LEFT_ARROW)){
    cat.x=cat.x-3
    cat.addImage(catimg2)
  }
      
  }

  drawSprites();
}

function llives(){
    ht1=createSprite(1070,500,20,20);
    ht1.addImage(htimg);
    ht1.scale=0.1
    ht2=createSprite(1150,500,20,20);
    ht2.addImage(htimg);
    ht2.scale=0.1
    ht3=createSprite(1230,500,20,20);
    ht3.addImage(htimg);
    ht3.scale=0.1

  }