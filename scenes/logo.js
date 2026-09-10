import { drawLogo } from "../lib/logo.js";

export function setup() {
  background(0);
  fill(255);
  noStroke();
  translate(width/2, height/2);
  scale(3);
  translate(-475/2, -260/2)
  drawLogo();
}
export function draw() {}
