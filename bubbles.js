class Bubbles{
     constructor(){
               this.bubble = createSprite(random(100,400),random(100,400),10,10);
               this.bubble.velocityY = random(2,5);
               this.bubble.velocityX = random(2,5);
               bubblesGroup.add(this.bubble);
     }

     display(){

     }
}