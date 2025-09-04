let step = 0;  // track drawing step
let colors = ["#FFD700", "#FFA500"];
let starColors = ["#800080", "#F5F5DC"];

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  frameRate(1);  // 1 frame per second (adjust speed here)
}

function draw() {
  background(255);
  translate(width/2, height/2);

  // Step 1: Draw outer red circle
  if (step >= 0) {
    fill(220, 0, 0);
    noStroke();
    ellipse(0, 0, 500, 500);
  }

  // Step 2: Yellow & Orange rotated squares
  if (step >= 1) {
    for (let i = 0; i < 6; i++) {
      push();
      rotate(i * 60);
      fill(colors[i % colors.length]);
      rectMode(CENTER);
      rect(200, 0, 80, 80);
      pop();
    }
  }

  // Step 3: Inner star (purple & cream alternating)
  if (step >= 2) {
    let radius = 150;
    for (let i = 0; i < 6; i++) {
      push();
      rotate(i * 60);
      fill(starColors[i % 2]);
      triangle(0, 0, cos(0) * radius, sin(0) * radius, cos(60) * radius, sin(60) * radius);
      pop();
    }
  }

  // Step 4: Green triangles
  if (step >= 3) {
    fill("green");
    for (let i = 0; i < 6; i++) {
      push();
      rotate(i * 60 + 30);
      triangle(0, -100, -40, -160, 40, -160);
      pop();
    }
  }

  // Step 5: Blue center circle
  if (step >= 4) {
    fill("blue");
    ellipse(0, 0, 30, 30);
  }

  // Increase step until complete
  if (step < 4) {
    step++;
  } else {
    noLoop();  // stop animation once complete
  }
}
