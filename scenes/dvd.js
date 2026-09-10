import { drawWheel, drawLogoSquare, drawLogo } from "../lib/logo.js";
let x, y, dx, dy, speed, hue, type, counter;
export function setup() {
  type = random([0, 1, 2]);
  x = 0;
  y = 0;
  speed = 5;
  dx = speed;
  dy = speed;
  hue = random(0, 100);
  counter = 0;
  colorMode(HSB);
  background(0);
}

export function draw() {
  background(0);
  noStroke();
  fill(hue % 100, 100, 100);
  const [w, h] = drawBouncer(type);
  let hit = false;
  x += dx;
  y += dy;

  if (x <= 0 || x >= width - w) {
    dx *= -1; 
    bumpHue();
    hit = true;
    counter++;
  }
  if (y <= 0 || y >= height - h) {
    dy *= -1;
    bumpHue();
    if (hit) {
      background(127);
      console.log(`double hit! ${counter}`);
    } else {
      counter++;
    }

  }
}

function bumpHue() {
  hue += random(15,85);
  hue %= 100;
}

function drawBouncer(type) {
  translate(x, y);
  switch (type) {
    case 0:
      return drawWheel();
    case 1:
      return drawLogoSquare();
    case 2:
      return drawLogo();
    default:
      break;
  }
}
