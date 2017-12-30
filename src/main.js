let game=undefined;
let animator=undefined;

const animateSnake=function() {
  let details=game.move();
  paintBody(details.oldHead);
  unpaintSnake(details.oldTail);
  paintHead(details.head);
  if(game.hasSnakeEatenFood()) {
    game.grow();
    game.updateScore();
    game.createFood();
    drawFood(game.getFoodType());
  }
}

const changeSnakeDirection=function(event) {
  switch (event.code) {
    case "KeyA":
      game.turnLeft();
      break;
    case "KeyD":
      game.turnRight();
      break;
    case "KeyC":
      game.grow();
      break;
    default:
  }
}

const addKeyListener=function() {
  let grid=document.getElementById("keys");
  grid.onkeyup=changeSnakeDirection;
  grid.focus();
}

const createGame=function() {
  let topLeft=new Position(0,0,"east");
  let bottomRight=new Position(120,60,"east");
  game=new Game(topLeft,bottomRight,120,60);
}

const startGame=function() {
  createGame();
  game.createSnake();
  game.drawGrids();
  game.drawSnake(game.getSnake());
  game.createFood();
  game.drawFood(game.getFoodType());
  addKeyListener();
  animator=setInterval(animateSnake,100);
}

window.onload=startGame;
