"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const p5 = require("p5/lib/p5");
const WebMidi = require("webmidi");
// import Walker from './models/Walker';
// import Mover from './models/MoverCircle';
const Dot_1 = require("./models/Dot");
// import Wind from './models/forces/Wind';
// import Fluid from './models/Fluid';
// let movers   = [];
// let liquid;
// let wind;
let dots = [];
let input;
let originForceStrength = -10;
let mouseStrength = 4;
let mouseRange = 500;
const sketch = p => {
    p.disableFriendlyErrors = true;
    p.Vector = p5.Vector;
    p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL);
        input.addListener('controlchange', "all", e => {
            // console.log("number:", e.controller.number, "value:", e.value);
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
        // wind    = new Wind(p, p.createVector(0.001, 0));
        // liquid  = new Fluid(p, 0, p.height / 2, p.width, p.height / 2, 0.1);
        // for (let i = 0; i < 10; i++) {
        //   movers.push(new Mover( p, i * (p.width / 10) + 50, 100, 5 ))
        // }
        const dotSpacing = 40; //px
        for (let x = 0; x < p.width / dotSpacing; x++) {
            for (let y = 0; y < p.height / dotSpacing; y++) {
                dots.push(new Dot_1.default(p, p.createVector(x * dotSpacing, y * dotSpacing)));
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
        // liquid.display();
        // for (let i = 0; i < movers.length; i++) {
        //
        //   //Liquid friction interaction
        //   if(movers[i].isInside(liquid)){
        //     movers[i].drag(liquid);
        //   }
        //
        //   //Gravity force
        //   const m = movers[i].mass;
        //   const gravity = p.createVector(0,0.3 * m);
        //   movers[i].applyForce(gravity);
        //
        //   //Wind friction
        //   const friction = movers[i].velocity.copy();
        //   const c = 0.01;
        //   friction.normalize();
        //   friction.mult(-1);
        //   friction.mult(c);
        //
        //   movers[i].applyForce(friction);
        //   movers[i].applyForce(wind.getForce());
        //
        //   movers[i].update();
        //   movers[i].checkEdges();
        //   movers[i].display();
        // }
    };
};
// Control
WebMidi.enable(err => {
    if (err) {
        console.error(err);
        return;
    }
    input = WebMidi.inputs[0];
    // Listen to control change message on all channels
    window.P5 = new p5(sketch);
});
//# sourceMappingURL=shapeGenerator.js.map