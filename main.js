var playerPaddle
var computerPaddle
var ball
var paddleGroup;
var playerScore, computerScore;
var gameState="serve";

var edges
function setup() {
  edges=createEdgeSprites()
    createCanvas(400, 400);
 playerPaddle = createSprite(375,200,10,70)
    computerPaddle=createSprite (25,200,10,70)
    ball=createSprite (200,200,10,10)
    ball.shapeColor=("white")
    computerPaddle.shapeColor="white"
    playerPaddle.shapeColor="white"
   
    paddleGroup=new Group()
    paddleGroup.add(computerPaddle)
    paddleGroup.add(playerPaddle)
    playerScore=0;
    computerScore=0;

    
}
function draw() {
  // Fill the canvas with light gray, covering up previous images
  background("black");
    fill("white")
    text(computerScore,150,30)
    text(playerScore,250,30)
    if(gameState=="serve"){
        text("PRESS SPACE KEY TO START THE GAME",100,180)
    }
    ball.bounceOff(edges[3]);
    ball.bounceOff(edges[2]);
        ball.bounceOff(paddleGroup);
    
    //add movement to paddle:
    playerPaddle.y=mouseY;
    computerPaddle.y=ball.y
    if(keyDown("space") && gameState=="serve"){
          
        ball.velocityX = 9;
        ball.velocityY = 5;
        //gameState changes to play as soon as the player serves the ball
        gameState="play"
    }
      if(ball.x>400 || ball.x<0){
        //gameState changes to serve again-c29
        gameState="serve"
        if(ball.x>400){
            computerScore=computerScore+1
        }
        if(ball.x<0){
            playerScore=playerScore+1
        }
        //positions the ball to the center
        ball.x=200
        ball.y=200
        // makes ball stationary
        ball.velocityX=0
        ball.velocityY=0             
    }
    
    if(playerScore==5||computerScore==5){
        gameState="end"
       }
    if(gameState=="end"){
        text("GAME OVER",150,150)
    }
   
drawNet(400)
  drawSprites()
}
function drawNet (num){
    for (var i=0; i<num; i++){
        stroke("white")
        strokeWeight(3)
        line(200,20*i,200,10+20*i)
    }
}