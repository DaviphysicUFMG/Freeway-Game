
function setup() {
  createCanvas(width, height);
  noCursor();
  trackSound.loop();
  initCars();
}

function draw() {
  background(roadImg);
  moveCow();
  moveCar();
  colisionV2();
  boundary();
  showImages();
  displayScore();
}




















