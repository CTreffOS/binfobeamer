# BINfobeamer

A very quick and dirty project to spread binformation using a public display - a slideshow of sorts, but not good at text.
Not good at anything, really. It's based on the Processing Foundation's [p5.js 2.0](https://p5js.org/)
and basically a tiny wrapper to bundle a collection of p5.js sketches.
The intended display resolution is FullHD, so it won't look good on 4K due mismatched scaling.

## Getting Started

Download `p5.js` from [their repo](https://github.com/processing/p5.js/releases) and put it in `lib/p5.js`.

Assets are also not included. Just ask me, use your own or get them from the Chaostreff Osnabrück [assets repo](https://github.com/CTreffOS/assets).

Open `index.html` in your favorite webbrowser. Click to go to the next scene.

If you want, you can use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using VS Codium Live Server extension
# Right-click index.html -> "Open with Live Server"
```

## Adding scenes/sketches

Create a new file in the `scenes` directory. Check out the [p5.js 2.0 reference](https://p5js.org/reference/) or look at the other scenes for inspiration.
```javascript
// scenes/myscene.js
export function setup() {
  // run once at the start
}

export function draw() {
  // run on every frame
}

```

Then add the import in `main.js` and add it to the list of scenes. The last scene in the list gets shown first.

```javascript
// at the top of main.js
import * as myscene from "./scenes/myscene.js";

// add it to the list of scenes
const scenes = [
  {
    setup: starfield.setup,
    draw: starfield.draw,
  },
  {
    setup: myscene.setup,
    draw: myscene.draw,
  },
];
```
