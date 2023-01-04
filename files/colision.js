function colisionV2(){
  xCenterCow = xCow + lenCow/2;
  yCenterCow = yCow + heiCow/2;
  var radiusCow = sqrt(lenCow**2 + heiCow**2);
  for (var i = 0; i < 6; i++){
    var hit = false;
    hit = collideRectCircle(xCar[i], yCar[i], lenCar, heiCar, xCenterCow, yCenterCow, radiusCow/2);
    if (hit){
      yCow = y0Cow;
      colisionSound.play();
      if (score != 0){
        score -= 1;
      }
    }
  }
}


