"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Fluid {
    constructor(p, x = 0, y = 0, width = 100, height = 100, dragCoefficient = 1) {
        this.p = p;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.dragCoefficient = dragCoefficient;
    }
    display() {
        const { p, x, y, width, height } = this;
        p.noStroke();
        p.fill(175);
        p.rect(x, y, width, height);
    }
}
exports.default = Fluid;
//# sourceMappingURL=Fluid.js.map