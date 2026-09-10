import * as dvd from "./scenes/dvd.js";
import * as starfield from "./scenes/starfield.js";
import * as photo from "./scenes/photo.js";
import * as progress from "./scenes/progress.js";
import * as diwo from "./scenes/diwo.js";
import * as cyber from "./scenes/cyber.js";
import * as logo from "./scenes/logo.js";
import * as stolpersteine from "./scenes/stolpersteine.js";
import * as walk from "./scenes/walk.js";

// commented out scenes use assets that are not included in the repository
// the last scene gets shown first
const scenes = [
  {
    setup: starfield.setup,
    draw: starfield.draw,
  },
  {
    setup: photo.make("long-exposure.jpg"),
    draw: photo.draw,
  },
  {
    setup: dvd.setup,
    draw: dvd.draw,
  },
  {
    setup: photo.make("spacelights-banner.jpg"),
    draw: photo.draw,
  },

  {
    setup: photo.make("diday-neutral-mastodon.png"),
    draw: photo.draw,
  },
  {
    setup: cyber.setup,
    draw: cyber.draw,
  },
  {
    setup: photo.make("osna.social_preview.webp"),
    draw: photo.draw,
  },
  {
    setup: progress.setup,
    draw: progress.draw,
  },
  // {
  //   setup: photo.make(
  //     "diwo2025-pixelflut.jpg",
  //     "© Lucas Günzel, Drehteam GmbH",
  //   ),
  //   draw: photo.draw,
  // },
  {
    setup: logo.setup,
    draw: logo.draw,
  },
  // {
  //   setup: diwo.setup,
  //   draw: diwo.draw,
  // },
  {
    setup: walk.setup,
    draw: walk.draw,
  },
  // {
  //   setup: stolpersteine.setup,
  //   draw: stolpersteine.draw,
  // },
];

let sceneChange = true;
let sceneIndex = scenes.length - 2;
p5.disableFriendlyErrors = true;

window.setup = async function () {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
};

window.draw = function () {
  if (sceneChange) {
    sceneIndex++;
    sceneIndex %= scenes.length;
    resetSettings();
    scenes[sceneIndex].setup();
    sceneChange = false;
  }
  push();
  scenes[sceneIndex].draw();
  pop();
  //drawFPS();
};

function drawFPS() {
  const fontSize = 32;
  noStroke();
  fill(0);
  rect(50, 50, 2 * fontSize, fontSize);
  fill(255);
  textSize(fontSize);
  text(frameRate()?.toFixed(2) || "unavailable", 50, 50 + fontSize);
}

function resetSettings() {
  rectMode(CORNER);
  colorMode(RGB);
  strokeWeight(1);
  fill(255);
  stroke(0);
  textAlign(LEFT, BASELINE);
  textWeight(600);
}

window.mousePressed = function () {
  sceneChange = true;
};

window.windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
  scenes[sceneIndex].setup();
};
