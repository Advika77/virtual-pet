var dog
var happyDog
var foodStock
var foodS

function preload()
{
  //load images here
  dog=loadImage("sprites/dogImg.ng");
  happyDog=loadImage("srites/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database()
  console.log(database);
}


function draw() {  

  drawSprites();
  //add styles here

}



