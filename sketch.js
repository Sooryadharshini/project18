var garden,rabbit;
var gardenImg,rabbitImg;
var apple , appleImg;
var leaves,leavesImg;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,10,10);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}
function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  spawnapples();
  spawnleaves();
  if (keyDown("RIGHT_ARROW")){
    rabbit.x=rabbit.x+10;
  }
  if (keyDown("LEFT_ARROW")){
    rabbit.x=rabbit.x-10;
  }

  drawSprites();
 
}
//function to spawn the apples
function spawnapples(){
//creating apples
if(frameCount%60===0){
apple=createSprite(200,5,10,10);
apple.velocityY=+3;
apple.addImage("apple",appleImg);
apple.scale=0.05;
apple.x=Math.round(random(10,395));
}
}

function spawnleaves(){
  if(frameCount%20===0){
  leaves = createSprite(200,5,10,10);
  leaves.velocityY=+3;
  leaves.addImage("leaves1",leavesImg);
  leaves.scale=0.05;
  leaves.x=Math.round(random(10,395));
  }
}