import { drawCyber } from "../lib/cyber.js";
const zoom = 4;

export function setup() {}
export function draw() {
  background("#ffff00");
  fill(0);
  noStroke();
  translate(-0.6 * width, 0);
  const pos = frameCount * 2;

  scale(2);
  rotate(radians(12));
  for (let i = 0; i < 4; i++){
    push();
    translate(width - ((pos + (i * width) / 4) % width), 0);
    drawCyber();
    pop();
  }
}
