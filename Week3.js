function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noStroke();
  rectMode(CENTER);
  fill(186, 0, 124, 180);
  
 // draw the shape
  ellipse(width / 2 - 80, height / 2 + 100, 200, 200);
  fill(118, 170, 219, 180);
  rect(width / 2 + 80, height / 2 + 100, 200, 200);
  fill(245, 238, 0, 180);
  triangle(width / 2, height / 2 - 120, width / 2 - 100, height / 2 + 80, width / 2 + 100, height / 2 + 80)
  
  // draw the shape
  fill(255);
  ellipse(width / 2 - 80, height / 2 + 100, 80, 80);
  ellipse(width / 2 + 80, height / 2 + 100, 80, 80);
  ellipse(width / 2, height / 2, 80, 80);
  fill(0);
  
   // draw the text
  textAlign(CENTER);
  textSize(30);
  text("P", width / 2 - 80, height / 2 + 15 + 100);
  text("B", width / 2 + 80, height / 2 + 15 + 100);
  text("Y", width / 2, height / 2 + 15);
}