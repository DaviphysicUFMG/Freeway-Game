
function setup() {
  createCanvas(width, height);
  trackSound.loop();
  initCars();
}

function draw() {
  background(roadImg);
  
  moveCow();
  moveCar();
  colisionV2();
  makeScore();
  boundary();
  showImages();
  rect(330, 5, 40, 27, 20);
  textAlign(CENTER);
  textSize(30);
  text(score, 350, 30);
}




















