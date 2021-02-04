const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground,canvas,bgimg;
var divisionArray=[];
var plinkoArray=[];
var particleArray=[]

function preload(){
    bgimg=loadImage("bg.png")
}
function setup(){
    canvas=createCanvas(610,800)
    engine=Engine.create();
    world=engine.world;

    ground=new Ground(width/2,height,width,20)

    for(a=0;a<width;a+=80){
        divisionArray.push(new Division(a,650,10,300));
    }
    
    //first row of plinkos
    for(var b=30;b<=width;b+=50){
        plinkoArray.push(new Plinko(b,75))
    }
    //second row of plinkos
    for (var b = 20; b <=width-10; b+=50){
        plinkoArray.push(new Plinko(b,175));
    }
    //third row of plinkos
    for (var b = 30; b <=width; b+=50) {
        plinkoArray.push(new Plinko(b,275));
    }
    //fourth row of plinkos
    for(var b = 20; b <=width-10;b+=50){
        plinkoArray.push(new Plinko(b,375))
    }
}

function draw(){
    background(bgimg)
    Engine.update(engine);

    ground.display();

for(b=0; b<plinkoArray.length; b++){
    plinkoArray[b].display();
}

for( a=0;a<divisionArray.length;a++){
    divisionArray[a].display();
}
if(frameCount%20===0){
    particleArray.push(new Particle(random(270,340),10,10))
}
for(c=0;c<particleArray.length;c++){
    particleArray[c].display();
}
    
}