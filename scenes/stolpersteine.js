import { drawLogo } from "../lib/logo.js";
import list from "../assets/stolpersteine/stolpersteine.json" with { type: "json" };

const margin = 96;
const spacing = margin / 3;
let contentWidth, contentHeight;
const dateSize = 192;
const titleSize = 128;
const otherSize = 48;
const imageRegex =
  /(?<=fancybox\.open\('\/allgemein\/images\/Fotos_Stolpersteine\/)[^']+(?='\))/gi;

let data, imgs, anim;
var backgroundImage;

export async function setup() {
  contentWidth = width - margin - margin;
  contentHeight = height - margin - margin;
  data = list[floor(random(0, list.length))];
  imgs = getImages(data.html);
  anim = 0;

  if (imgs.length != 0) {
    backgroundImage = await loadImage(imgs[floor(random(0, imgs.length))]);
  }
  noStroke();
}

export async function draw() {
  anim++;
  await drawBackground();

  // NAME
  textAlign(CENTER, CENTER);
  fill(255);
  const bounds = setMaxTextSize(
    data.name.toUpperCase(),
    contentWidth,
    contentHeight,
  );
  text(data.name.toUpperCase(), width / 2, height / 2);

  // IN GEDENKEN AN
  textAlign(LEFT, BOTTOM);
  fill(160);
  textSize(64);

  text(
    "in Erinnerung an",
    width / 2 - bounds.w / 2,
    height / 2 - bounds.h / 2 - spacing,
  );

  // WOHNORT
  textAlign(LEFT, TOP);
  fill(160, constrain(anim - 200, 0, 255));
  textSize(48);
  //setMaxTextSize(date, contentWidth, contentHeight);
  text(`${data.Adresse}\n${data.Stadtteil}`, width / 2 - bounds.w / 2, margin);

  // GEBURT
  textAlign(RIGHT, TOP);
  fill(160, constrain(anim - 500, 0, 255));
  textSize(48);
  //setMaxTextSize(date, contentWidth, contentHeight);
  text(
    `Geboren ${data.Geburtstag}\n${data.Geburtsort}\n${data.Geschwister}\n`.replace(
      /\n+/g,
      "\n",
    ),
    width / 2 + bounds.w / 2,
    margin,
  );

  // TOD
  textAlign(RIGHT, TOP);
  fill(255, 63, 63, constrain(anim - 800, 0, 255));
  textSize(64);
  //setMaxTextSize(date, contentWidth, contentHeight);
  text(
    getDeathDate(),
    width / 2 + bounds.w / 2,
    height / 2 + bounds.h / 2 + 1.5 * spacing,
  );

  // TODESDATUM
  textAlign(LEFT, BOTTOM);
  fill(255, 63, 63, constrain(anim - 1100, 0, 255));
  textSize(64);
  //setMaxTextSize(date, contentWidth, contentHeight);
  text(
    `als ${data.Opfergruppe} von den Nazis ermordet`.replace(
      /\n$| als|(?<=Krankenmord)e/g,
      "",
    ),
    width / 2 - bounds.w / 2,
    height - margin,
  );
}

function getDeathDate() {
  if (data.Todesdatum == "unbekannt" || data.Todesdatum == "")
    return `Todesdatum unbekannt\n${data.Todesort}`;
  return `${data.Todesdatum}\n${data.Todesort}`;
}

function getImages(html) {
  const a = html.match(imageRegex);
  if (a)
    return a.map((x) => {
      return `assets/stolpersteine/images/${x}`;
    });
  return [];
}

function setMaxTextSize(t, w, h) {
  if (!t || t == undefined || t == "") return;
  const factor = 1.05;
  let size, bounds;
  for (size = 64; size < 512; size *= factor) {
    textSize(size * factor);
    bounds = textBounds(t, 0, 0);
    if (bounds.w > w || bounds.h > h) break;
  }
  textSize(size);
  return textBounds(t, 0, 0);
}

function drawQR() {
  `https://geo.osnabrueck.de/stolpersteine_karte/?poi=${data.StolperID}`;
}

async function drawBackground() {
  if (imgs.length == 0) {
    background(0);
    return;
  }

  image(
    backgroundImage,
    0,
    0,
    width,
    height,
    0,
    0,
    backgroundImage.width,
    backgroundImage.height,
    COVER,
  );
  background(0, constrain(255 - anim, 160, 255));
}
