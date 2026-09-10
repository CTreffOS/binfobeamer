const maxWalkers = 512;
const step = 5;
let walkers, hue, offset;
export function setup() {
  walkers = [];
  hue = 0;
  offset = frameCount;
  noStroke();
  background(0);
  colorMode(HSB);
}

export function draw() {
  //background(0, 0.01);
  if ((frameCount-offset)%60 == 0 && walkers.length < maxWalkers) createWalker();
  for (const w of walkers) {
    w[2]++;
    w[2]%=360;
    for (let i = 0; i < 10; i++) {
      w[0] += random(-step, step);
      w[1] += random(-step, step);
      w[0] = constrain(w[0], 0, width);
      w[1] = constrain(w[1], 0, height);
      fill(w[2], 100, 100);
      circle(w[0], w[1], 2);
    }
  }
}

function createWalker() {
  walkers.push([random(width), random(height), random(360)]);
}