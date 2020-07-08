var player;
var bubbles;
var bubblesGroup;

function setup() {
  createCanvas(500,500);

  player = createSprite(250,250,25,25);
  bubblesGroup = createGroup();

  if(frameCount%10 === 0){
    bubbles = new Bubbles();
  }
}

function draw() {
  background(0);  

  if(keyDown("RIGHT_ARROW")){
    player.velocityX = 10;
}

  if(player.velocityX > 1){
    player.velocityX = player.velocityX-0.2;
  }


  if(keyDown("LEFT_ARROW")){
    player.velocityX = -10;
  }

  if(player.velocityX < -1){
    player.velocityX = player.velocityX+0.2;
  }

  if(keyDown("UP_ARROW")){
    player.velocityY= -10;
  }

  if(player.velocityY < -1){
    player.velocityY = player.velocityY+0.2;
  }

  if(keyDown("DOWN_ARROW")){
    player.velocityY = 10;
  }

  if(player.velocityY > 1){
    player.velocityY = player.velocityY-0.2;
  }

  if(player.y > 500){
    player.y = 0
  }

  if(player.x > 500){
    player.x = 0
  }

  if(player.x < 0){
    player.x = 500
  }

  if(player.y < 0){
    player.x = 500
  }

  drawSprites();
}