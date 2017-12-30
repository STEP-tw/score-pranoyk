const Game = function (numOfRows, numOfCols) {
  console.log(numOfCols, numOfRows);
  this.numOfRows = numOfRows;
  this.numOfCols = numOfCols;
  this.snake = undefined;
  this.food = undefined;
  this.score = 0;
}

Game.prototype = {
  createSnake:function(){
    let tail=new Position(12,10,"east");
    let body=[];
    body.push(tail);
    body.push(tail.next());
    let head=tail.next().next();

    this.snake=new Snake(head,body);
  },

  createFood:function(){
    this.food=generateRandomPosition(this.numOfCols,this.numOfRows);
  },

  drawGrids:function(){
    return drawGrids(this.numOfRows, this.numOfCols);
  },

  drawSnake:function(){
    return drawSnake(this.snake);
  },

  drawFood:function(){
    return drawFood(this.food);
  },

  updateScore:function(){
    let newScore =  document.getElementById("score");
    newScore.innerHTML = `<h1>Your Score : ${this.score+=10}</h1>`;
  }
}
