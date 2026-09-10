let stars = [];
const maxStars = 1024;
const maxZ = 15;
let spread;

export function setup() {
  spread = width;
  for (let i = 0; i < maxStars; i++) {
    stars.push([
      random(-spread, spread),
      random(-spread, spread),
      random(1, maxZ),
      0,
    ]);
  }
}

export function draw() {
  translate(width / 2, height / 2);
  background(0);
  noFill();
  stroke(255);
  for (let s of stars) {
    if (s[3] > s[2]) {
      stroke(constrain(map(mag(s[0], s[1]), 0, spread, 255, 0), 0, 255));
      strokeWeight(5 / s[2]);
      line(
        s[0] / s[3],
        s[1] / s[3],
        s[0] / s[2],
        s[1] / s[2],
      );
    }
    s[3] = s[2];
    s[2] -= 0.1;
    if (s[2] <= 0.3) s[2] = maxZ;
  }
}
