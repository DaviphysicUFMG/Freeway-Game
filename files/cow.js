let lenCow = 30; let heiCow = 30;

let y0Cow = 380;
let xCow = 200; let yCow = 380;
let vCow = 3;

function moveCow(){
  if (keyIsDown(UP_ARROW)){
    yCow -= vCow;
  }
  if (keyIsDown(DOWN_ARROW) && yCow < y0Cow){
    yCow += vCow;
  }
}

function makeScore(){
  if (yCow < 10){
    score += 1;
    yCow = y0Cow;
    pointSound.play();
  }
}