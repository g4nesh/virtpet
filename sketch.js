//Create variables here
var dog, dogImage, doghappyImage;
var database;
var foodS, foodStock;

function preload()
{
	dogImage = loadImage("images/dogImg.png")
  doghappyImage = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,150,10,10);
  dog.addImage(dogImage)
  foodStock = database.ref('Food');
  foodStock.on("value",readStock)

  
}


function draw() {  

  background(46,139,87)

if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
}
  drawSprites();
  textSize(20)
  fill(0)
  stroke(10)

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}


