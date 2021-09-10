var colorR = [];
var shape = [];
var speedX = [];
var speedY = [];
var cRadis = 20;
var startPosX = [];
var startPosY = [];

//Initialization function
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  for (var i = 0; i < height / (cRadis - 5); i++) {
    colorR.push(int(random(3)));
    shape.push(int(random(3)));
    speedX.push(random(cRadis * 0.2, cRadis * 0.8));
    speedY.push(0);
    startPosX.push(0);
    startPosY.push(i * cRadis);
  }
}

// draw the shape
function draw() {
  if (frameCount % 10 == 0) {
    moveCircle();
    console.log("123");
  }
}

function mousePressed() {
  changeColor();
}

function changeColor() {
  for (var i = 0; i < height / (cRadis - 5); i++) {
    colorR[i] = int(random(3));
    speedX[i] = (random(cRadis * 0.1, cRadis * 0.5));
    speedY[i] = map(mouseY, 0, height, -1, 1) * random(2, 3);
  }
}

function moveCircle() {
  for (var i = 0; i < height / (cRadis - 5); i++) {
    if (colorR[i] == 0) {
      stroke(245, 238, 0, 180);
      fill(245, 238, 0, 180);
    }
    if (colorR[i] == 1) {
      stroke(186, 0, 124, 180);
      fill(186, 0, 124, 180);
    }
    if (colorR[i] == 2) {
      stroke(118, 170, 219, 180);
      fill(118, 170, 219, 180);
    }

    if (shape[i] == 0) {
      ellipse(startPosX[i], startPosY[i], cRadis * 1.5, cRadis * 1.5);
    }

    if (shape[i] == 1) {
      rectMode(CENTER);
      rect(startPosX[i], startPosY[i], cRadis * 1.5, cRadis * 1.5);
    }

    if (shape[i] == 2) {
      //ellipse(startPosX[i], startPosY[i], cRadis * 1.5, cRadis * 1.5);
      triangle(startPosX[i], startPosY[i] - cRadis / 2, startPosX[i] - cRadis / 2, startPosY[i] + cRadis / 2, startPosX[i] + cRadis / 2, startPosY[i] + cRadis / 2);
    }


    startPosX[i] = startPosX[i] + speedX[i];
    startPosY[i] = startPosY[i] + speedY[i];
  }
}