const Game=function(topLeft,bottomRight,numOfCols,numOfRows) {
  this.topLeft=topLeft;
  this.bottomRight=bottomRight;
  this.numOfCols=numOfCols;
  this.numOfRows=numOfRows;
  this.snake={};
  this.foodType={};
  this.score=0;
}

Game.prototype.createSnake=function() {
  let tail=new Position(12,10,"east");
  let body=[];
  body.push(tail);
  body.push(tail.next());
  let head=tail.next().next();

  snake=new Snake(head,body);
  game.addSnake(snake);
}

Game.prototype.addSnake=function(snake) {
  this.snake=snake;
}

Game.prototype.getSnake=function() {
  return snake;
}

Game.prototype.turnLeft=function() {
  return this.snake.turnLeft();
}

Game.prototype.turnRight=function() {
  return this.snake.turnRight();
}

Game.prototype.grow=function() {
  let growthFactor=this.foodType.getGrowthFactor();
  console.log(growthFactor);
  return this.snake.grow(growthFactor);
}

Game.prototype.getFoodType=function() {
  return this.foodType;
}

Game.prototype.move=function() {
  let details={};
  details.oldHead=this.snake.getHead();
  details.oldTail=this.snake.move();
  details.head=this.snake.getHead();
  return details;
}

Game.prototype.hasSnakeEatenFood=function() {
  return this.snake.head.isSameCoordAs(this.foodType.getPosition());
}

Game.prototype.createFood=function() {
  let position=generateRandomPosition(this.bottomRight.x,this.bottomRight.y);
  let random=generateRandomNumberBetween(0,10);
  let growthFactor=1;
  let superFood=false;
  if(random>5) {
    growthFactor=10;
    superFood=true;
  }

Game.prototype.updateScore=function(){
  this.score=updateScore(this.score);
}

this.foodType=new Food(position,growthFactor,superFood);

}

Game.prototype.drawGrids = function () {
  drawGrids(this.numOfRows, this.numOfCols);
}

Game.prototype.drawSnake = function () {
  drawSnake(this.snake);
}

Game.prototype.drawFood = function () {
  drawFood(this.foodType);
}
