const stripes = [
  "#ee3124",
  "#f57f29",
  "#fff000",
  "#58b947",
  "#0054a6",
  "#9f248f",
];
const chevrons = [
  "#fed905",
  "#ffffff",
  "#f498c0",
  "#7cc0ea",
  "#603917",
  "#000000",
]
const circle = "#67328a";
export function setup() {
  noStroke();
  for (let i = 0; i < stripes.length; i++) {
    fill(stripes[i]);
    rect(0, (i * height) / stripes.length, width, height / stripes.length);
  }
  translate(0, height/2);
  push();
  rotate(-QUARTER_PI);
  rectMode(CENTER)
  for (let i = chevrons.length - 1; i >= 0; i--) {
    fill(chevrons[i]);
    square(0, 0, sqrt(2*(height*height/4)) + (i-2) * height / chevrons.length);
  }
  pop();
  fill(circle);
  const d = height/6;
  ellipse(height/9.5, 0, d, d);
  fill(chevrons[0]);
  ellipse(height/9.5, 0, d - height/36, d - height/36);
}

export function draw() {}
