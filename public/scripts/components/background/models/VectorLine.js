"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VectorLine {
    constructor(p, vector) {
        this.p = p;
        this.location = vector || p.createVector(p.width / 2, p.height / 2);
    }
    drawToMouse() {
        const p = this.p;
        const mouse = p.createVector(p.mouseX, p.mouseY);
        mouse.sub(this.location);
        p.translate(p.width / 2, p.height / 2);
        p.line(0, 0, mouse.x, mouse.y);
    }
    drawDirectionAndMagnitude() {
        const p = this.p;
        const mouse = p.createVector(p.mouseX, p.mouseY);
        mouse.sub(this.location);
        const m = mouse.mag();
        p.fill(0);
        p.rect(0, 0, m, 10);
        mouse.normalize();
        mouse.mult(100);
        p.translate(p.width / 2, p.height / 2);
        p.line(0, 0, mouse.x, mouse.y);
    }
}
exports.default = VectorLine;
//# sourceMappingURL=VectorLine.js.map