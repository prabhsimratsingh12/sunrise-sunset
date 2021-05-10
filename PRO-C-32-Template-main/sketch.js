const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    bg = loadImage("sunrise1.png");
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
     
    // add condition to check if any background image is there to add
    background(bg);

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var Response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    //change the data in JSON format
    var responseJson= await Response.json();
    // write code slice the datetime
    var day = responsejson.datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if(day>=04 && day<=06){
        bg= loadImage("sunrise1.png");;
    }else if(day>=06 && day<=08){
        bg=loadImage("sunrise2.png");
    }else if(day>=04 && day<=06){
        bg=loadImage("sunrise3.png");
    }else if(day>=06 && day<=08){
        bg=loadImage("sunrise4.png");
    }else if(day>=04 && day<=06){
        bg=loadImage("sunrise5.png");
    }else if(day>=06 && day<=08){
        bg=loadImage("sunrise6.png");
    }else if(day>=04 && day<=06){
        bg=loadImage("sunset7.png");
    }else if(day>=04 && day<=06){
        bg=loadImage("sunset8.png");
    }else if(day>=04 && day<=06){
        bg=loadImage("sunset9.png");
    }else if(day>=23 && day==0){
        bg=loadImage("sunset10.png");
    }else if(day==0 && day<=03){
        bg=loadImage("sunset11.png");
    }else{
        bg=loadImage("sunset12.png");
    }
    

    }

    //load the image in backgroundImg variable here
   backgroundImg = loadImage(bg);

