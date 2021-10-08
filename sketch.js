var chickenpeck;
var chicken1, chicken2, chicken3, chicken4, chicken5, chicken6;
var edges;
var bg, bgImg;
var bush, bush1, bush2, bush3, bush4;
var tree1, tree2, tree3;
var rockImg, rock1, rock2, rock3, rock4;
var hayImg, hay1, hay2, hay3, hay4;
var foxImg, fox, tail;
var randX, randY;
var spot, spoImg;
var gameState = "play";
var randBX1, randBY1, randBX2, randBY2, randBX3, randBY3, randBX4, randBY4;
var randRX1, randRY1, randRX2, randRY2, randRX2, randRY2;
var timer = 0;
var foxChicken;

function preload() {
  chickenpeck = loadAnimation("images/cp1.png", "images/cp2.png", "images/cp3.png", "images/cp4.png");
  bgImg = loadImage("images/ground.jpg");
  bush = loadImage("images/bush.png");
  foxImg = loadAnimation("images/fox/t1.png", "images/fox/t2.png", "images/fox/t3.png", "images/fox/t4.png", "images/fox/t5.png", "images/fox/t6.png", "images/fox/t7.png", "images/fox/t8.png", "images/fox/t9.png", "images/fox/t10.png");
  spotImg = loadImage("images/circle.png");
  rockImg = loadImage("images/rock.png");
  hayImg = loadImage("images/haystack.png");
  foxChicken = loadImage("images/foxHoldingChicken.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);

  bg = createSprite(width/2,height/2,width,height);
  bg.addImage(bgImg);
  bg.scale = 3;

  spot = createSprite(10,10,10,10);
  spot.addImage(spotImg);
  spot.scale = 0.2;

  randBX1 = random(0,width);
  randBY1 = random(0,height);
  randBX2 = random(0,width);
  randBY2 = random(0,height);
  randBX3 = random(0,width);
  randBY3 = random(0,height);
  randBX4 = random(0,width);
  randBY4 = random(0,height);

  randRX1 = random(0,width);
  randRY1 = random(0,height);
  randRX2 = random(0,width);
  randRY2 = random(0,height);
  randRX3 = random(0,width);
  randRY3 = random(0,height);

  placeFox();

  bush1 = createSprite(randBX1, randBY1, 50, 50);
  bush1.addImage(bush);
  bush2 = createSprite(randBX2, randBY2, 50, 50);
  bush2.addImage(bush);
  bush3 = createSprite(randBX3, randBY3, 50, 50);
  bush3.addImage(bush);
  bush4 = createSprite(randBX4, randBY4, 50, 50);
  bush4.addImage(bush);

  rock1 = createSprite(randRX1, randRY1, 50, 50);
  rock1.addImage(rockImg);
  rock1.scale = 0.6;
  rock2 = createSprite(randRX2, randRY2, 50, 50);
  rock2.addImage(rockImg);
  rock2.scale = 0.6;
  rock3 = createSprite(randRX3, randRY3, 50, 50);
  rock3.addImage(rockImg);
  rock3.scale = 0.6;

  chicken1 = createSprite(random(0,width), random(0,height), 50, 50);
  chicken1.addAnimation("ch1", chickenpeck);
  chicken1.scale = 0.25;

  chicken2 = createSprite(random(0,width), random(0,height), 50, 50);
  chicken2.addAnimation("ch1", chickenpeck);
  chicken2.scale = 0.25;

  chicken3 = createSprite(random(0,width), random(0,height), 50, 50);
  chicken3.addAnimation("ch1", chickenpeck);
  chicken3.scale = 0.25;

  chicken4 = createSprite(random(0,width), random(0,height), 50, 50);
  chicken4.addAnimation("ch1", chickenpeck);
  chicken4.scale = 0.25;

  chicken5 = createSprite(random(0,width), random(0,height), 50, 50);
  chicken5.addAnimation("ch1", chickenpeck);
  chicken5.scale = 0.25;

  chicken6 = createSprite(random(0,width), random(0,height), 50, 50);
  chicken6.addAnimation("ch1", chickenpeck);
  chicken6.scale = 0.25;

  edges = createEdgeSprites();
}

function draw() {
  background(255,255,255);  

  drawSprites();

  timer = timer +1;

  if(gameState == "play" && timer <= 300){
    spot.x = World.mouseX;
    spot.y = World.mouseY;

    if(frameCount % 5 == 0){
      repositionFox();
      console.log(frameCount);
    }

    if(spot.isTouching(fox)){
      gameState = "end"
    }
  }
  else if(gameState == "end" && timer <= 300){
    fox.depth = 100;
    spot.x = fox.x;
    spot.y = fox.y;

    textSize(30);
    fill("black");
    text("Congratulations! The chickens are safe!",displayWidth/2 -100,displayWidth/2 -400);
  }
  else{
    textSize(30);
    fill("black");
    text("Awh! You let the fox get the chickens.",displayWidth/2 -100,displayWidth/2 -400);

    image(foxChicken, displayWidth/2 -100,displayWidth/2 -350);
  }
}

function placeFox(){
  fox = createSprite(randBX1 +30,randBY1 +10,10,10);
  fox.addAnimation("foxtail",foxImg);
  fox.scale = 0.45;
}

function repositionFox(){
  var randPos = Math.round(random(1,7));
  switch(randPos){
    case 1: fox.x = randBX1;
            fox.y = randBY1;
            break;
    case 2: fox.x = randBX2;
            fox.y = randBY2;
            break;
    case 3: fox.x = randBX3;
            fox.y = randBY3;
            break;
    case 4: fox.x = randBX4;
            fox.y = randBY4;
            break;
    case 5: fox.x = randRX1;
            fox.y = randRY1;
            break;
    case 6: fox.x = randRX2;
            fox.y = randRY2;
            break;
    case 7: fox.x = randRX3;
            fox.y = randRY3;
            break;
    default: break; 
  }
  
}