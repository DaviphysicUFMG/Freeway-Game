// --------------------------- //
// Image variables
// --------------------------- //
let roadImg;
let cowImg;
let car01Img;
let car02Img;
let car03Img;
let car04Img;
let car05Img;
let car06Img;
let carImg = [];
// --------------------------- //
//
// --------------------------- //
function showImages(){
  image(cowImg, xCow, yCow, lenCow, heiCow);
  
  for (var j = 0; j < 6; j++){
    image(carImg[j], xCar[j], yCar[j], lenCar, heiCar);
  }
}