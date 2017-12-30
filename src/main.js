let animator=undefined;
let score = 0;

const updateScore = function() {
  let newScore =  document.getElementById("score");
  newScore.innerHTML = `<h1>Your Score : ${score+=10}</h1>`
}

const animateSnake=function() {
  let oldHead=game.snake.getHead();
  let oldTail=game.snake.move();
  let head=game.snake.getHead();
  paintBody(oldHead);
  unpaintSnake(oldTail);
  paintHead(head);
  if(head.isSameCoordAs(game.food)) {
    updateScore();
    game.snake.grow();
    game.createFood();
    game.drawFood();
  }
}

const changeSnakeDirection=function(event) {
  switch (event.code) {
    case "KeyA":
      game.snake.turnLeft();
      break;
    case "KeyD":
      game.snake.turnRight();
      break;
    case "KeyC":
      game.snake.grow();
      break;
    default:
  }
}

const addKeyListener=function() {
  let grid=document.getElementById("keys");
  grid.onkeyup=changeSnakeDirection;
  grid.focus();
}

let game = undefined;

const startGame=function() {
  game = new Game(60, 120)
  game.createSnake();
  game.drawGrids();
  game.drawSnake();
  game.createFood();
  game.drawFood();
  addKeyListener();
  animator=setInterval(animateSnake,100);
}

window.onload=startGame;
