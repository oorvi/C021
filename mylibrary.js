function bounceOff(gameob1,gameob2){
    if (gameob1.x - gameob2.x < gameob2.width/2 + gameob1.width/2
      && gameob2.x - gameob1.x < gameob2.width/2 + gameob1.width/2) {
    gameob1.velocityX = gameob1.velocityX * (-1);
    gameob2.velocityX = gameob2.velocityX * (-1);
  }
  if (gameob1.y - gameob2.y < gameob2.height/2 + gameob1.height/2
    && gameob2.y - gameob1.y < gameob2.height/2 + gameob1.height/2){
    gameob1.velocityY = gameob1.velocityY * (-1);
    gameob2.velocityY = gameob2.velocityY * (-1);
  }
  }
