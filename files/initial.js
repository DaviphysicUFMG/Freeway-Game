let width = 700;
let height = 400;
let score = 0;

function preload(){
  roadImg = loadImage("img/estrada.png");
  cowImg = loadImage("img/ator-1.png");
  car01Img = loadImage("img/carro-1.png");
  car02Img = loadImage("img/carro-2.png");
  car03Img = loadImage("img/carro-3.png");
  car04Img = loadImage("img/carro-4.png");
  car05Img = loadImage("img/carro-5.png");
  car06Img = loadImage("img/carro-6.png");
  colisionSound = loadSound("song/colidiu.mp3");
  pointSound = loadSound("song/pontos.wav");
  trackSound = loadSound("song/trilha.mp3");
}