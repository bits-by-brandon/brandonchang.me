import * as p5 from 'p5/lib/p5';
import * as WebMidi from 'webmidi';
import Dot from '../models/Dot';

let dots = [];
let input;
let originForceStrength = -5;
let mouseStrength = 2;
let mouseRange = 200;
const sketch = p => {
  p.disableFriendlyErrors = true;
  p.Vector = p5.Vector;

  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL);

    if (input) {
      input.addListener('controlchange', "all", e => {
        if (e.controller.number === 1) {
          originForceStrength = p.map(e.value, 0, 125, -100, -5);
        }
        if (e.controller.number === 2) {
          mouseStrength = p.map(e.value, 0, 125, 1, 50);
        }
        if (e.controller.number === 3) {
          mouseRange = p.map(e.value, 0, 125, 10, 1000);
        }
      });
    }

    const dotSpacing = 50; //px
    for (let x = 0; x < p.width / dotSpacing; x++) {
      for (let y = 0; y < p.height / dotSpacing; y++) {
        dots.push(new Dot(p, p.createVector(x * dotSpacing, y * dotSpacing)));
      }
    }
  };

  p.draw = () => {
    p.background(30);

    //moves our drawing origin to the top (with webGL renderer)
    p.translate(-p.width / 2, -p.height / 2, 0);

    // left corner
    p.noStroke();
    p.fill(100);

    const mouse = p.createVector(p.mouseX, p.mouseY);
    for (let i = 0; i < dots.length; i++) {
      dots[i].update(mouse, originForceStrength, mouseStrength, mouseRange);
      dots[i].display();
    }
  }
};


// Control
WebMidi.enable(err => {
  if (err) {
    console.error(err);
    return
  }
  input = WebMidi.inputs[0];

  // Listen to control change message on all channels
  window.P5 = new p5(sketch);
});
