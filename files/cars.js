let initPosSupCars = 690;
let initPosDownCars = -60;
let lenCar = 70; let heiCar = 40;

let yCar = [40, 95, 150, 210, 263, 317];
let v0Car = [-4, -4.5, -5, 5, 4.5, 4];
let xCar = [];
let vCar = [];

function initCars(){
  for (var i = 0; i < 3; i++){
    append(carImg, random([car01Img, car02Img, car03Img]));
    append(vCar, v0Car[i] + random(-1,2));
    append(xCar, random(-60, 690));
  }
  for (var i = 3; i < 6; i++){
    append(carImg, random([car04Img, car05Img, car06Img]));
    append(vCar, v0Car[i] + random(-1,2));
    append(xCar, random(-60, 690));
  }
}

function moveCar(){
  for (var i = 0; i < 6; i++){
    xCar[i] += vCar[i];
  }
}

function boundary(){
  var i;
  for (i = 0; i < 3; i++){
    if (xCar[i] < -lenCar/1.2){
      xCar[i] = initPosSupCars;
      vCar[i] = v0Car[i] + random(-1,2);
      carImg[i] = random([car01Img, car02Img, car03Img]);
    }
  }
  for (i = 3; i < 6; i++){
    if (xCar[i] > width-lenCar*0.2){
      xCar[i] = initPosDownCars;
      vCar[i] = v0Car[i] + random(-1,2);
      carImg[i] = random([car04Img, car05Img, car06Img]);
    }
  }
}








