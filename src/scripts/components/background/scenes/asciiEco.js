import * as p5 from 'p5';
import Ascii from "../models/Ascii";

let grid = [];
let monospace;
let frame = 100000;
let canvasSize = new p5.Vector(1000, 350);

export const sketch = p => {
  p.disableFriendlyErrors = true;
  p.Vector = p5.Vector;

  p.preload = () => {
    monospace = p.loadFont('/fonts/SpaceMono-Regular.ttf');
  };

  p.setup = () => {
    p.createCanvas(canvasSize.x, canvasSize.y, p.WEBGL);
    p.textFont(monospace);
    p.textSize(30);

    const resolution = 30; //px

    for (let x = 0; x < p.width / resolution; x++) {
      for (let y = 0; y < p.height / resolution; y++) {
        grid.push(new Ascii(p, p.createVector(x * resolution, y * resolution), resolution));
      }
    }

  };

  p.draw = () => {
    p.clear();

    //moves our drawing origin to the top (with webGL renderer)
    p.translate(-p.width / 2, -p.height / 2, 0);

    // left corner
    p.noStroke();
    p.fill(255, 183, 40);

    const mouse = new p.Vector(p.mouseX, p.mouseY);

    for (let i = 0; i < grid.length; i++) {
      grid[i].update(frame, mouse);
      grid[i].display();
    }

    frame += 0.003
  }
};

export default function init() {
  window.P5 = new p5(sketch);
}
