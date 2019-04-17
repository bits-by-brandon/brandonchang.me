"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mover_1 = require("./Mover");
class MoverCircle extends Mover_1.default {
    constructor(p, x, y, mass) {
        super(p, x, y, mass);
    }
    checkEdges() {
        const { p, location, velocity, mass } = this;
        const radius = mass * 8;
        if (location.x > p.width - radius) {
            velocity.x = velocity.x * -0.9;
            location.x = p.width - radius;
        }
        if (location.x < radius) {
            velocity.x = velocity.x * -0.9;
            location.x = radius;
        }
        if (location.y > p.height - radius) {
            velocity.y = velocity.y * -1;
            location.y = p.height - radius;
        }
        if (location.y < radius) {
            velocity.y = velocity.y * -1;
            location.y = radius;
        }
    }
    display() {
        const { p, location, mass } = this;
        const weight = mass * 16;
        const { x, y } = location;
        p.fill(0);
        p.ellipse(x, y, weight, weight);
    }
}
exports.default = MoverCircle;
//# sourceMappingURL=MoverCircle.js.map