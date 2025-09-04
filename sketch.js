function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  background(255);
  translate(width/2, height/2);

  // Outer red circle
  fill(220, 0, 0);
  noStroke();
  ellipse(0, 0, 500, 500);

  // Yellow & Orange rotated squares
  let colors = ["#FFD700", "#FFA500"];
  for (let i = 0; i < 6; i++) {
    push();
    rotate(i * 60);
    fill(colors[i % colors.length]);
    rectMode(CENTER);
    rect(200, 0, 80, 80);
    pop();
  }

  // Inner star (purple & cream alternating)
  let starColors = ["#800080", "#F5F5DC"];
  let radius = 150;
  for (let i = 0; i < 6; i++) {
    push();
    rotate(i * 60);
    fill(starColors[i % 2]);
    triangle(0, 0, cos(0) * radius, sin(0) * radius, cos(60) * radius, sin(60) * radius);
    pop();
  }

  // Green triangles between star & squares
  fill("green");
  for (let i = 0; i < 6; i++) {
    push();
    rotate(i * 60 + 30);
    triangle(0, -100, -40, -160, 40, -160);
    pop();
  }

  // Center blue circle
  fill("blue");
  ellipse(0, 0, 30, 30);
}
