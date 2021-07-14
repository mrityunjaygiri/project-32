const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

var hour

function preload() {
getBackgroundImg()
}


function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

if(backgroundImg)
background(backgroundImg);




    Engine.update(engine);

    // write code to display time in correct format here
    fill("black");
    textSize(30)
    if (hour>12){
    text("Time :"+hour%12+" PM ",20,50)
    }

    else if (hour==0){

        text("Time : 12 AM",20,50)
    }

    else{
    if (hour>12){
    text("Time :"+hour%12+" AM ",20,50)
    }
    
    

}
}

async function getBackgroundImg(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

    //change the data in JSON format
    var responseJSON = await response.json();

    var dateTime = responseJSON.datetime

    // write code slice the datetime
    hour = dateTime.slice(11,13)
    console.log(hour);

    


// add conditions to change the background images from sunrise to sunset
    if(hour>=04&&hour<=06){
    backgroundImg=loadImage("sunrise1.png")
    }

    else if(hour>=06&&hour<=08){
        backgroundImg=loadImage("sunrise2.png")
    }

    else if(hour>=08&&hour<=10){
        backgroundImg=loadImage("sunrise3.png")
        }
    
    else if(hour>=10&&hour<=12){
        backgroundImg=loadImage("sunrise4.png")
        }

    else if(hour>=12&&hour<=14){
        backgroundImg=loadImage("sunrise5.png")
        }
   
    else if(hour>=14&&hour<=16){
        backgroundImg=loadImage("sunrise6.png")
        }

    else if(hour>=16&&hour<=18){
        backgroundImg=loadImage("sunset7.png")
        }

    else if(hour>=18&&hour<=20){
        backgroundImg=loadImage("sunset8.png")
        }

    else if(hour>=20&&hour<=23){
        backgroundImg=loadImage("sunset10.png")
        }

    else if(hour>=23&&hour<=01){
        backgroundImg=loadImage("sunset11.png")
        }

    else if(hour>=01&&hour<=04){
        backgroundImg=loadImage("sunset12.png")
        }

}
