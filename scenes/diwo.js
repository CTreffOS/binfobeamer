import geo from "../assets/osnabrueck.geojson" with { type: "json" };
const geoScale = 5;
const nodeSize = 8 * geoScale;
const lineSize = 2 * geoScale;
const darkaqua = "#006363";
const lightaqua = "#00cabe";
const orange = "#ee7444";
const fontSize = 96;
const textContent = "Digitale Woche";
const textMargin = fontSize/3;

export function setup() {
  background(darkaqua);
  translate(width / 2, height / 2);
  push();
  scale(1 / geoScale, -1 / geoScale);
  translate(-434994, -5791947);
  for (let feature of geo.features) {
    for (let linestring of feature.geometry.coordinates) {
      stroke(lightaqua);
      strokeWeight(lineSize);
      for (let i = 1; i < linestring.length; i++) {
        line(
          linestring[i - 1][0],
          linestring[i - 1][1],
          linestring[i][0],
          linestring[i][1],
        );
      }
      noStroke();
      fill(lightaqua);
      circle(linestring[0][0], linestring[0][1], nodeSize);
      circle(
        linestring[linestring.length - 1][0],
        linestring[linestring.length - 1][1],
        nodeSize,
      );
    }
  }
  pop();
  translate(0, -height / 4)
  rotate(radians(-3));
  noStroke();
  fill(orange);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  textSize(fontSize);
  textWeight(900);
  rect(0, 0, textWidth(textContent) + 2 * textMargin, fontSize + 1.5 * textMargin);

  fill(255);
  text(textContent, 0, 0);
}

export function draw() {}
