//Create variables here

function preload()
{
	dogImg = loadImage("images/dogImg.png");
  dogImg1 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale = 0.2;

  foodStock = database.ref('Food');
  foodStock.on("value",readStock)



  
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  dog.addImage(dogImg1);
  writeStock(foodS)
}
  drawSprites();
  fill(255,255,254);
  stroke("black")
  text("Food Remaining : " + foodS, 170,200);
  textSize(13);
  text("Note: Press UP_ARROW key to feed Raven!", 130,10,300,20);
  
  //add styles here

}

function readStock(data){
  foodS = data.val();
  

}
function writeStock(x){
  if(x<=0){
    x = 0

  }
  else{
    x = x-1;
  }
  database.ref("/").update({
    Food:x
  })
}


