"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Walker {
    constructor(p, location) {
        this.p = p;
        this.location = location || p.createVector(p.width / 2, p.height / 2);
        this.weight = 1;
    }
    display() {
        const { p, location, weight } = this;
        const { x, y } = location;
        p.fill(0);
        p.ellipse(x, y, weight, weight);
    }
    stepTowardsMouse() {
        const p = this.p;
        const r = p.random(1);
        if (r < 0.5) {
            if (p.mouseX > this.location.x) {
                this.location.x++;
            }
            else {
                this.location.x--;
            }
            if (p.mouseY > this.location.y) {
                this.location.y++;
            }
            else {
                this.location.y--;
            }
        }
        else if (r < 0.625) {
            this.location.x++;
        }
        else if (r < 0.750) {
            this.location.x--;
        }
        else if (r < 0.875) {
            this.location.y++;
        }
        else {
            this.location.y--;
        }
    }
    stepLevy() {
        const p = this.p;
        let r1, r2, probability;
        do {
            r1 = p.random(0, 10);
            probability = r1;
            r2 = p.random(0, 10);
        } while (r2 < probability);
        let stepX = p.random(-r1, r1);
        let stepY = p.random(-r1, r1);
        this.location.x += stepX;
        this.location.y += stepY;
    }
    stepPerlin() {
        const p = this.p;
        const variation = 0.01;
        this.tx = this.tx ? this.tx += variation : 1;
        this.ty = this.ty ? this.ty += variation : 10000;
        const stepVector = p.createVector(p.noise(this.tx), p.noise(this.ty));
        stepVector.x = p.map(stepVector.x, 0, 1, 0, p.width);
        stepVector.y = p.map(stepVector.y, 0, 1, 0, p.height);
        this.location = stepVector;
    }
}
exports.default = Walker;
//# sourceMappingURL=Walker.js.map