const img = new Map();
const fontSize = 32;

export function make(file, copyright) {
  return async function setup() {
    if (!img[file]) {
      img[file] = await loadImage(`../assets/${file}`);
    }
    image(
      img[file],
      0,
      0,
      width,
      height,
      0,
      0,
      img[file].width,
      img[file].height,
      COVER,
    );
    if (copyright) {
      stroke(0);
      strokeWeight(3);
      fill(255);
      textSize(fontSize);
      text(copyright, fontSize, height - fontSize);
    }
  };
}

export function draw() {}
