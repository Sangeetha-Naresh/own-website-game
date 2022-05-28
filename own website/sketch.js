var canvas;

var game;

function setup() 
{
  canvas = createCanvas(windowWidth, windowHeight);
  
  game = new Game();
  
 
}

function draw() {
  background("black");
  game.display();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
